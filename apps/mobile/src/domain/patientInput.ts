import { MAX_WEIGHT_KG } from '@medapp/dose-engine';

export type WeightParse =
  { ok: true; kg: number } | { ok: false; error: 'empty' | 'invalid' | 'out_of_range' };

/** Acepta "12,5" o "12.5". Rechaza texto, unidades, notación científica y varios separadores. */
const KG_PER_LB = 0.45359237;

export function parseWeight(text: string, unit: 'kg' | 'lb' = 'kg'): WeightParse {
  const t = text.trim();
  if (t === '') return { ok: false, error: 'empty' };
  if (!/^-?\d+(?:[.,]\d+)?$/.test(t)) return { ok: false, error: 'invalid' };
  const value = Number(t.replace(',', '.'));
  const kg = unit === 'lb' ? value * KG_PER_LB : value;
  if (!(kg > 0) || kg > MAX_WEIGHT_KG) return { ok: false, error: 'out_of_range' };
  return { ok: true, kg };
}

/** Talla en cm (30–220). */
export function parseHeight(text: string): { ok: true; cm: number } | { ok: false } {
  const t = text.trim();
  if (!/^\d+(?:[.,]\d+)?$/.test(t)) return { ok: false };
  const cm = Number(t.replace(',', '.'));
  return cm >= 30 && cm <= 220 ? { ok: true, cm } : { ok: false };
}

const DAYS_PER_YEAR = 365;
const DAYS_PER_MONTH = 30.4375;

/** Edad en días a partir de años, meses y días (redondeo hacia abajo). */
export function ageToDays(years: number, months: number, days = 0): number {
  return Math.floor(years * DAYS_PER_YEAR + months * DAYS_PER_MONTH + days);
}

/** Datos del paciente tal como se escriben en pantalla. */
export interface PatientFields {
  weightUnit: 'kg' | 'lb';
  weightText: string;
  ageMode: 'ym' | 'd';
  yearsText: string;
  monthsText: string;
  daysText: string;
}

export const EMPTY_PATIENT: PatientFields = {
  weightUnit: 'kg',
  weightText: '',
  ageMode: 'ym',
  yearsText: '',
  monthsText: '',
  daysText: '',
};

export interface PatientReading {
  weight: WeightParse;
  weightKg: number | null;
  /** Hay algo escrito en la edad. */
  hasAge: boolean;
  /** Edad válida en días, o null. */
  ageDays: number | null;
  ageInvalid: boolean;
  complete: boolean;
  fields: PatientFields;
}

function parseCount(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d{1,4}$/.test(t) ? Number(t) : null;
}

/** Interpreta peso y edad; «complete» cuando ambos son válidos. */
export function readPatient(fields: PatientFields): PatientReading {
  const weight = parseWeight(fields.weightText, fields.weightUnit);
  let hasAge: boolean;
  let ageDays: number | null;
  if (fields.ageMode === 'd') {
    hasAge = fields.daysText.trim() !== '';
    ageDays = parseCount(fields.daysText);
  } else {
    hasAge = fields.yearsText.trim() !== '' || fields.monthsText.trim() !== '';
    const y = parseCount(fields.yearsText);
    const m = parseCount(fields.monthsText);
    ageDays = y !== null && m !== null && m < 12 ? ageToDays(y, m) : null;
  }
  if (!hasAge) ageDays = null;
  const weightKg = weight.ok ? weight.kg : null;
  return {
    weight,
    weightKg,
    hasAge,
    ageDays,
    ageInvalid: hasAge && ageDays === null,
    complete: weightKg !== null && ageDays !== null,
    fields,
  };
}

/** «12 kg · 2 a 3 m» para la barra del paciente; null si no hay datos completos. */
export function patientSummary(p: PatientReading, sep: '.' | ','): string | null {
  if (!p.complete || p.weightKg === null) return null;
  const kg = String(Math.round(p.weightKg * 100) / 100).replace('.', sep);
  const f = p.fields;
  const age =
    f.ageMode === 'd'
      ? `${parseCount(f.daysText) ?? 0} días`
      : `${parseCount(f.yearsText) ?? 0} a ${parseCount(f.monthsText) ?? 0} m`;
  return `${kg} kg · ${age}`;
}
