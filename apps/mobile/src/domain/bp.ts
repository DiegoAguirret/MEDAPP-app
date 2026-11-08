import { BP_TABLES } from './bpTables';

/**
 * Presión arterial en niños y adolescentes de 1 a 17 años según la guía AAP 2017
 * (Flynn JT et al., Pediatrics 2017;140(3):e20171904): Tablas 4 y 5 (percentiles por edad, sexo y
 * talla) y Tabla 3 (categorías). Clasifica una medición; el diagnóstico de HTA requiere
 * mediciones repetidas y confirmadas por auscultación.
 */

export type Sex = 'male' | 'female';
export type BpCategory = 'normal' | 'elevated' | 'stage1' | 'stage2';

export const HEIGHT_PERCENTILES = [5, 10, 25, 50, 75, 90, 95] as const;

export interface BpPair {
  s: number;
  d: number;
}

export interface BpThresholds {
  /** Talla (cm) de la columna usada. */
  cm: number;
  p50: BpPair;
  p90: BpPair;
  p95: BpPair;
  p95p12: BpPair;
}

/** Columna (0–6) cuya talla de la tabla es la más cercana a la talla medida. */
export function nearestHeightColumn(sex: Sex, ageYears: number, heightCm: number): number | null {
  const row = BP_TABLES[sex][ageYears];
  if (!row) return null;
  let best = 0;
  row.cm.forEach((cm, i) => {
    if (Math.abs(cm - heightCm) < Math.abs((row.cm[best] ?? cm) - heightCm)) best = i;
  });
  return best;
}

export function thresholdsFor(sex: Sex, ageYears: number, column: number): BpThresholds | null {
  const row = BP_TABLES[sex][ageYears];
  if (!row) return null;
  const pick = (r: { s: readonly number[]; d: readonly number[] }): BpPair => ({
    s: r.s[column] ?? NaN,
    d: r.d[column] ?? NaN,
  });
  return {
    cm: row.cm[column] ?? NaN,
    p50: pick(row.p50),
    p90: pick(row.p90),
    p95: pick(row.p95),
    p95p12: pick(row.p95p12),
  };
}

const ORDER: BpCategory[] = ['normal', 'elevated', 'stage1', 'stage2'];
const worst = (a: BpCategory, b: BpCategory) => (ORDER.indexOf(a) >= ORDER.indexOf(b) ? a : b);

export interface BpResult {
  category: BpCategory;
  /** Cortes usados (mm Hg) para PAS y PAD. */
  cuts: { elevated: BpPair; stage1: BpPair; stage2: BpPair };
  /** true si se usaron los cortes fijos de 13 años o más. */
  adolescent: boolean;
  thresholds: BpThresholds | null;
}

/**
 * Tabla 3. De 1 a <13 años: elevada desde el p90 o 120/80 (el menor), estadio 1 desde el p95 o
 * 130/80 (el menor) y estadio 2 desde p95 + 12 o 140/90 (el menor). Desde los 13 años: elevada
 * 120–129 con PAD <80, estadio 1 130/80–139/89 y estadio 2 ≥140/90. Se toma la peor categoría
 * entre PAS y PAD.
 */
export function classifyBp(input: {
  sex: Sex;
  ageYears: number;
  column: number;
  sbp: number;
  dbp: number;
}): BpResult {
  const t = thresholdsFor(input.sex, input.ageYears, input.column);
  const adolescent = input.ageYears >= 13;
  const cuts = adolescent
    ? { elevated: { s: 120, d: Infinity }, stage1: { s: 130, d: 80 }, stage2: { s: 140, d: 90 } }
    : {
        elevated: { s: Math.min(t?.p90.s ?? 120, 120), d: Math.min(t?.p90.d ?? 80, 80) },
        stage1: { s: Math.min(t?.p95.s ?? 130, 130), d: Math.min(t?.p95.d ?? 80, 80) },
        stage2: { s: Math.min(t?.p95p12.s ?? 140, 140), d: Math.min(t?.p95p12.d ?? 90, 90) },
      };
  const level = (v: number, k: 's' | 'd'): BpCategory =>
    v >= cuts.stage2[k]
      ? 'stage2'
      : v >= cuts.stage1[k]
        ? 'stage1'
        : v >= cuts.elevated[k]
          ? 'elevated'
          : 'normal';
  return {
    category: worst(level(input.sbp, 's'), level(input.dbp, 'd')),
    cuts,
    adolescent,
    thresholds: t,
  };
}

export const BP_LABELS: Record<BpCategory, string> = {
  normal: 'PA normal',
  elevated: 'PA elevada',
  stage1: 'HTA estadio 1',
  stage2: 'HTA estadio 2',
};

/** Conducta de la guía según la categoría de la medición (sección 4.3, traducida). */
export const BP_ACTIONS: Record<BpCategory, string[]> = {
  normal: [
    'Si es normal o se normaliza en lecturas repetidas (<p90), no se necesita más: medir en el próximo control de niño sano.',
  ],
  elevated: [
    'Recomendar estilo de vida saludable (dieta, sueño y actividad física) y repetir por auscultación en 6 meses; considerar derivar a nutrición o manejo de peso.',
    'Si sigue elevada a los 6 meses: medir la PA en brazo derecho, brazo izquierdo y una pierna, repetir la consejería y volver a medir en 6 meses.',
    'Si sigue elevada a los 12 meses (3 mediciones por auscultación): MAPA (si está disponible), evaluación diagnóstica y considerar derivar a cardiología o nefrología.',
  ],
  stage1: [
    'Si está asintomático: consejería de estilo de vida y nueva medición por auscultación en 1 a 2 semanas.',
    'Si sigue en estadio 1: medir la PA en brazo derecho, brazo izquierdo y una pierna, y volver a medir en 3 meses; considerar derivar a nutrición o manejo de peso.',
    'Si persiste después de 3 visitas: MAPA (si está disponible), evaluación diagnóstica e inicio del tratamiento; considerar derivar a subespecialidad.',
  ],
  stage2: [
    'Medir la PA en brazo derecho, brazo izquierdo y una pierna, dar recomendaciones de estilo de vida y repetir la medición dentro de 1 semana, o derivar a subespecialidad dentro de 1 semana.',
    'Si sigue en estadio 2: evaluación diagnóstica con MAPA e inicio del tratamiento, o derivar a subespecialidad dentro de 1 semana.',
  ],
};

/** Derivar de inmediato a emergencia (4.3d): estadio 2 con >30 mm Hg sobre el p95 o >180/120 en adolescentes. */
export function bpUrgent(r: BpResult, sbp: number, dbp: number): boolean {
  if (r.category !== 'stage2') return false;
  if (r.adolescent) return sbp > 180 || dbp > 120;
  const p95 = r.thresholds?.p95;
  return !!p95 && (sbp > p95.s + 30 || dbp > p95.d + 30);
}

export const BP_DIAGNOSIS =
  'La guía diagnostica HTA con lecturas ≥ p95 confirmadas por auscultación en 3 visitas distintas (KAS 3). Esta pantalla clasifica una medición.';

export const BP_SOURCE =
  'Flynn JT, Kaelber DC, Baker-Smith CM, et al. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. Pediatrics. 2017;140(3):e20171904 (AAP). Tablas 3, 4 y 5 y sección 4.3.';
