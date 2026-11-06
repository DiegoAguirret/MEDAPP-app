/**
 * Cálculo "a mano", como lo haría un médico con papel y calculadora.
 * Se escribe a propósito SIN reutilizar el motor (`@medapp/dose-engine`), para
 * que cualquier error de lógica en el motor aparezca como discrepancia.
 */
import type { DoseRule, Presentation } from '@medapp/content-schema';

export interface ManualResult {
  mgPerDose: number;
  capped: boolean;
  /** Cantidad exacta sin redondear (mL o unidades). */
  exactAmount: number;
}

/**
 * Lee la concentración desde la etiqueta impresa: "Suspensión 250 mg/5 mL" → 50 mg por mL;
 * "Tableta 500 mg" → 500 mg por tableta; "Solución oral 1 mg/mL" → 1.
 * Si la etiqueta incluye dos fármacos ("400 mg/57 mg por 5 mL"), usa el primero.
 * En UI: "Tableta 200 000 UI" → 200000 UI por tableta.
 */
export function concentrationFromLabel(label: string): number | null {
  const perDrop = /1\s*gota\s*=\s*(\d+(?:[.,]\d+)?)\s*mg/i.exec(label);
  if (perDrop) return Number((perDrop[1] ?? '').replace(',', '.'));
  const perVolume =
    /(\d+(?:[.,]\d+)?)\s*mg(?:\s*\/\s*\d+(?:[.,]\d+)?\s*mg)?\s*(?:\/|por)\s*(\d+(?:[.,]\d+)?)?\s*mL/i.exec(
      label,
    );
  if (perVolume) {
    const mg = Number((perVolume[1] ?? '').replace(',', '.'));
    const ml = perVolume[2] === undefined ? 1 : Number(perVolume[2].replace(',', '.'));
    return mg / ml;
  }
  // Unidades internacionales por tableta: "Tableta 200 000 UI" (miles separados por espacio).
  const perUnitUI = /(\d{1,3}(?:\s\d{3})+|\d+)\s*UI\b/.exec(label);
  if (perUnitUI) return Number((perUnitUI[1] ?? '').replace(/\s/g, ''));
  const perUnit = /(\d+(?:[.,]\d+)?)\s*mg/i.exec(label);
  return perUnit ? Number((perUnit[1] ?? '').replace(',', '.')) : null;
}

export function manualDose(
  rule: DoseRule,
  presentation: Presentation,
  weightKg: number,
  chosen?: number,
): ManualResult {
  const value = chosen ?? rule.usual ?? rule.amountMin;
  const timesPerDay =
    rule.intervalHours !== undefined ? 24 / rule.intervalHours : (rule.maxDoses ?? 1);

  let perDose: number;
  if (rule.basis === 'fixed_by_age') perDose = value;
  else if (rule.basis === 'mg/kg/dose') perDose = weightKg * value;
  else perDose = (weightKg * value) / timesPerDay;

  let capped = false;
  if (perDose > rule.maxPerDoseMg) {
    perDose = rule.maxPerDoseMg;
    capped = true;
  }
  if (perDose * timesPerDay > rule.maxPerDayMg) {
    perDose = rule.maxPerDayMg / timesPerDay;
    capped = true;
  }
  return { mgPerDose: perDose, capped, exactAmount: perDose / presentation.mgPerUnit };
}
