import type { DoseRule, Presentation } from '@medapp/content-schema';

const NUM = /^\d+(?:[.,]\d+)?$/;
const toNumber = (text: string): number | null => {
  const t = text.trim();
  return NUM.test(t) ? Number(t.replace(',', '.')) : null;
};

/** Presentación que el médico escribe a mano ("250 mg en 5 mL"). */
/** `unit`: unidad de la ficha (mg, mcg, UI o mEq); la concentración queda en esa unidad por mL. */
export function customPresentation(
  mgText: string,
  mlText: string,
  unit: 'mg' | 'mcg' | 'UI' | 'mEq' = 'mg',
): Presentation | null {
  const mg = toNumber(mgText);
  const ml = toNumber(mlText);
  if (mg === null || ml === null || !(mg > 0) || !(ml > 0)) return null;
  return {
    id: 'personalizada',
    label: `Personalizada ${mgText.trim()} ${unit}/${mlText.trim()} mL`,
    form: 'suspension',
    mgPerUnit: mg / ml,
    unit: 'mL',
    step: 0.1,
    brandsPE: [],
  };
}

/** Tope muy alto cuando el médico no indica una dosis máxima (la app lo advierte). */
const NO_CAP_MG = 1_000_000;

/** Regla de la calculadora manual: dosis libre por kg, sin ficha. */
export function manualRule(input: {
  amountText: string;
  basis: 'mg/kg/dose' | 'mg/kg/day';
  intervalHours: 4 | 6 | 8 | 12 | 24;
  maxPerDoseText: string;
}): DoseRule | null {
  const amount = toNumber(input.amountText);
  if (amount === null || !(amount > 0)) return null;
  const maxText = input.maxPerDoseText.trim();
  const max = maxText === '' ? NO_CAP_MG : toNumber(maxText);
  if (max === null || !(max > 0)) return null;
  const dosesPerDay = 24 / input.intervalHours;
  return {
    id: 'manual',
    indication: 'Cálculo manual',
    route: 'VO',
    ageMinDays: 29,
    basis: input.basis,
    amountMin: amount,
    amountMax: amount,
    usual: amount,
    intervalHours: input.intervalHours,
    maxPerDoseMg: max,
    maxPerDayMg: max * dosesPerDay,
    ...(maxText === '' ? { notes: 'Sin tope: verifica la dosis máxima del fármaco.' } : {}),
    sourceIds: ['manual'],
  };
}
