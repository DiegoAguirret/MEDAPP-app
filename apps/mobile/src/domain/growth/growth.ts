import { WHO_TABLES } from './whoTables';

/**
 * Valoración antropométrica con los patrones de la OMS y la clasificación de la
 * NTS N.° 238-MINSA/DGIESP-2025 (Tabla 3).
 *
 * - Menores de 5 años: Patrones de Crecimiento Infantil OMS 2006, tablas diarias; reglas del
 *   paquete oficial `anthro` (edad en días redondeada, ajuste de 0,7 cm entre longitud y talla,
 *   interpolación cada 0,1 cm en peso para la longitud/talla y puntaje z corregido más allá de
 *   ±3 DE en los indicadores de peso, IMC y perímetro braquial).
 * - 5 a 19 años: Referencia OMS 2007, tablas mensuales con interpolación lineal entre meses,
 *   como el paquete `anthroplus`.
 */

export type Sex = 'male' | 'female';
export type Position = 'lying' | 'standing';
export type TableId = keyof typeof WHO_TABLES;
export type IndicatorId = 'wfa' | 'lfa' | 'wfl' | 'bfa' | 'hcfa' | 'acfa';
export type Tone = 'ok' | 'warning' | 'danger';

export interface Lms {
  l: number;
  m: number;
  s: number;
}

export interface GrowthInput {
  sex: Sex;
  ageDays: number;
  weightKg?: number;
  lengthCm?: number;
  /** Cómo se midió: acostado (longitud) o de pie (talla). Por defecto, lo que toca a la edad. */
  position?: Position;
  headCm?: number;
  armCm?: number;
}

export interface NtsClass {
  label: string;
  tone: Tone;
}

export interface IndicatorResult {
  id: IndicatorId;
  label: string;
  /** Valor usado en el cálculo (talla ya corregida, IMC calculado, etc.). */
  value: number;
  unit: string;
  z: number;
  percentile: number;
  reference: 'OMS 2006' | 'OMS 2007';
  /** Tabla y punto x (días, meses o cm) para dibujar al paciente en la curva. */
  chart: { table: TableId; x: number };
  nts?: NtsClass;
  note?: string;
}

const DAYS_PER_YEAR = 365.25;
const DAYS_PER_MONTH = 30.4375;

const cache = new Map<string, Lms[]>();

function rowsOf(table: TableId, sex: Sex): Lms[] {
  const key = `${table}:${sex}`;
  let rows = cache.get(key);
  if (!rows) {
    rows = WHO_TABLES[table][sex].rows.split(';').map((r) => {
      const [l = NaN, m = NaN, s = NaN] = r.split(',').map(Number);
      return { l, m, s };
    });
    cache.set(key, rows);
  }
  return rows;
}

/** L, M y S de la tabla en `x` (edad o longitud), interpolando entre filas; null fuera de rango. */
export function lmsAt(table: TableId, sex: Sex, x: number): Lms | null {
  const { start, step } = WHO_TABLES[table][sex];
  const rows = rowsOf(table, sex);
  const pos = (x - start) / step;
  const lo = Math.floor(pos + 1e-9);
  const frac = pos - lo;
  const a = rows[lo];
  if (pos < -1e-9 || a === undefined) return null;
  if (frac < 1e-9) return a;
  const b = rows[lo + 1];
  if (b === undefined) return null;
  return {
    l: a.l + frac * (b.l - a.l),
    m: a.m + frac * (b.m - a.m),
    s: a.s + frac * (b.s - a.s),
  };
}

/** Puntaje z LMS; `adjusted` aplica la corrección de la OMS más allá de ±3 DE. */
export function zScore(y: number, { l, m, s }: Lms, adjusted: boolean): number {
  const z = l === 0 ? Math.log(y / m) / s : ((y / m) ** l - 1) / (s * l);
  if (!adjusted || Math.abs(z) <= 3) return z;
  const sd = (k: number) => m * (1 + l * s * k) ** (1 / l);
  if (z > 3) return 3 + (y - sd(3)) / (sd(3) - sd(2));
  return -3 + (y - sd(-3)) / (sd(-2) - sd(-3));
}

/** Edad en días a partir de años, meses y días (365,25 y 30,4375 días, como la OMS). */
export function ageInDays({
  years,
  months,
  days,
}: {
  years: number;
  months: number;
  days: number;
}): number {
  return Math.floor(years * DAYS_PER_YEAR + months * DAYS_PER_MONTH + days + 0.5);
}

/** Percentil (0–100) de un puntaje z con la distribución normal estándar. */
export function percentileFromZ(z: number): number {
  return 100 * normalCdf(z);
}

function normalCdf(z: number): number {
  // Abramowitz y Stegun 7.1.26 (error < 1,5 × 10⁻⁷).
  const x = Math.abs(z) / Math.SQRT2;
  const t = 1 / (1 + 0.3275911 * x);
  const poly =
    t *
    (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
  const erf = 1 - poly * Math.exp(-x * x);
  return z >= 0 ? (1 + erf) / 2 : (1 - erf) / 2;
}

const round2 = (z: number) => Math.round(z * 100) / 100 + 0;

const ok = (label = 'Normal'): NtsClass => ({ label, tone: 'ok' });
const warn = (label: string): NtsClass => ({ label, tone: 'warning' });
const bad = (label: string): NtsClass => ({ label, tone: 'danger' });

/**
 * Clasificación nutricional de la NTS N.° 238-MINSA/DGIESP-2025, Tabla 3, dentro de los grupos de
 * edad de su Tabla 2: P/E y P/T de 29 días a menos de 5 años, PC/E de 29 días a menos de 3 años,
 * T/E de 29 días a 11 años 11 meses 29 días e IMC/E de 5 a 11 años 11 meses 29 días.
 */
export function ntsClass(id: IndicatorId, z: number, ageDays: number): NtsClass | undefined {
  const months = ageDays / DAYS_PER_MONTH;
  if (ageDays < 29 || months >= 144) return undefined;
  if (months < 60) {
    switch (id) {
      case 'wfa':
        if (z > 2) return warn('Sobrepeso');
        if (z >= -2) return ok();
        return z >= -3 ? warn('Bajo peso') : bad('Bajo peso severo');
      case 'wfl':
        if (z > 3) return bad('Obesidad');
        if (z > 2) return warn('Sobrepeso');
        if (z >= -2) return ok();
        return z >= -3 ? warn('Bajo peso (emaciado)') : bad('Bajo peso severo');
      case 'lfa':
        if (z > 2) return warn('Alto');
        if (z >= -2) return ok();
        return z >= -3 ? warn('Talla baja') : bad('Talla baja severa');
      case 'hcfa':
        if (months >= 36) return undefined;
        if (z < -2) return bad('Riesgo de microcefalia');
        return z > 2 ? bad('Riesgo de macrocefalia') : ok();
      default:
        return undefined;
    }
  }
  switch (id) {
    case 'bfa':
      if (z >= 3) return bad('Obesidad severa');
      if (z > 2) return bad('Obesidad');
      if (z > 1) return warn('Sobrepeso');
      if (z >= -2) return ok();
      return z >= -3 ? warn('Delgadez') : bad('Delgadez severa');
    case 'lfa':
      if (z > 2) return warn('Talla alta');
      if (z >= -2) return ok();
      return z >= -3 ? warn('Talla baja') : bad('Talla baja severa');
    default:
      return undefined;
  }
}

function noteFor(id: IndicatorId, ageDays: number): string | undefined {
  const months = ageDays / DAYS_PER_MONTH;
  if (ageDays < 29) return 'La NTS 238 clasifica desde los 29 días; se muestra solo el puntaje z.';
  if (months >= 144) return 'La NTS 238 clasifica hasta los 11 años, 11 meses y 29 días.';
  if (id === 'acfa') return 'La NTS 238 no fija puntos de corte para el perímetro braquial.';
  if (id === 'hcfa') return 'La NTS 238 usa el perímetro cefálico hasta antes de los 3 años.';
  if (id === 'bfa') return 'En menores de 5 años la NTS 238 clasifica con peso para la talla.';
  if (id === 'wfa') return 'Desde los 5 años la NTS 238 clasifica con IMC para la edad.';
  return undefined;
}

const has = (v: number | undefined): v is number => v !== undefined && Number.isFinite(v) && v > 0;

/** Todos los indicadores que se pueden calcular con los datos dados, en orden clínico. */
export function assessGrowth(input: GrowthInput): IndicatorResult[] {
  const { sex, weightKg, headCm, armCm } = input;
  const ageDays = Math.floor(input.ageDays + 0.5);
  const months = input.ageDays / DAYS_PER_MONTH;
  const out: IndicatorResult[] = [];
  if (!(ageDays >= 0)) return out;

  const push = (
    id: IndicatorId,
    label: string,
    value: number,
    unit: string,
    table: TableId,
    x: number,
    adjusted: boolean,
  ) => {
    const lms = lmsAt(table, sex, x);
    if (!lms) return;
    const z = round2(zScore(value, lms, adjusted));
    const nts = ntsClass(id, z, ageDays);
    out.push({
      id,
      label,
      value,
      unit,
      z,
      percentile: percentileFromZ(z),
      reference: table.endsWith('07') ? 'OMS 2007' : 'OMS 2006',
      chart: { table, x },
      ...(nts ? { nts } : { note: noteFor(id, ageDays) }),
    });
  };

  if (months < 60) {
    const lying = ageDays < 731;
    let length = input.lengthCm;
    if (has(length) && input.position) {
      if (lying && input.position === 'standing') length += 0.7;
      if (!lying && input.position === 'lying') length -= 0.7;
      length = Math.round(length * 1e6) / 1e6;
    }
    if (has(weightKg)) push('wfa', 'Peso para la edad', weightKg, 'kg', 'wfa', ageDays, true);
    if (has(length)) {
      const label = lying ? 'Longitud para la edad' : 'Talla para la edad';
      push('lfa', label, length, 'cm', 'lfa', ageDays, false);
    }
    if (has(weightKg) && has(length)) {
      const inRange = lying ? length >= 45 && length <= 110 : length >= 65 && length <= 120;
      if (inRange) {
        const label = lying ? 'Peso para la longitud' : 'Peso para la talla';
        push('wfl', label, weightKg, 'kg', lying ? 'wfl' : 'wfh', length, true);
      }
      const bmi = weightKg / (length / 100) ** 2;
      push('bfa', 'IMC para la edad', bmi, 'kg/m²', 'bfa', ageDays, true);
    }
    if (has(headCm)) {
      push('hcfa', 'Perímetro cefálico para la edad', headCm, 'cm', 'hcfa', ageDays, false);
    }
    if (has(armCm) && ageDays >= 91) {
      push('acfa', 'Perímetro braquial para la edad', armCm, 'cm', 'acfa', ageDays, true);
    }
    return out;
  }

  const height = input.lengthCm;
  if (has(weightKg) && months < 121) {
    push('wfa', 'Peso para la edad', weightKg, 'kg', 'wfa07', months, true);
  }
  if (has(height) && months < 229) {
    push('lfa', 'Talla para la edad', height, 'cm', 'hfa07', months, false);
  }
  if (has(weightKg) && has(height) && months < 229) {
    const bmi = weightKg / (height / 100) ** 2;
    push('bfa', 'IMC para la edad', bmi, 'kg/m²', 'bfa07', months, true);
  }
  return out;
}

const DOMAINS: Record<TableId, { from: number; to: number }> = {
  wfa: { from: 0, to: 1826 },
  lfa: { from: 0, to: 1826 },
  bfa: { from: 0, to: 1826 },
  hcfa: { from: 0, to: 1826 },
  acfa: { from: 91, to: 1826 },
  wfl: { from: 45, to: 110 },
  wfh: { from: 65, to: 120 },
  wfa07: { from: 60, to: 120 },
  hfa07: { from: 60, to: 228 },
  bfa07: { from: 60, to: 228 },
};

/** Eje x válido de una tabla (días, meses o centímetros). */
export function chartDomain(table: TableId): { from: number; to: number } {
  return DOMAINS[table];
}

/** Unidad del eje x de una tabla. */
export function chartAxis(table: TableId): 'days' | 'months' | 'cm' {
  if (table === 'wfl' || table === 'wfh') return 'cm';
  return table.endsWith('07') ? 'months' : 'days';
}

/** Líneas de desviación estándar (valor de la medida en k DE) a lo largo de la tabla. */
export function sdLines(
  table: TableId,
  sex: Sex,
  ks: readonly number[],
  samples = 60,
): { k: number; points: { x: number; y: number }[] }[] {
  const { from, to } = DOMAINS[table];
  const xs = Array.from({ length: samples + 1 }, (_, i) =>
    i === samples ? to : Math.round((from + ((to - from) * i) / samples) * 10) / 10,
  );
  return ks.map((k) => ({
    k,
    points: xs.flatMap((x) => {
      const lms = lmsAt(table, sex, x);
      if (!lms) return [];
      const y = k === 0 ? lms.m : lms.m * (1 + lms.l * lms.s * k) ** (1 / lms.l);
      return [{ x, y }];
    }),
  }));
}
