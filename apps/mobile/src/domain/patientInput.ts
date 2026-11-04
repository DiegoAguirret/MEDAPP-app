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
