import { formatNumber } from './format.ts';
import { isWeightPlausible } from './plausibility.ts';
import { roundToStep } from './rounding.ts';
import type { CalcStep, CalculateInput, DoseResult, Warning } from './types.ts';

export const MIN_AGE_DAYS = 29;
export const MAX_WEIGHT_KG = 150;
const EPS = 1e-9;

const f = (n: number): string => formatNumber(n);

export function calculateDose(input: CalculateInput): DoseResult {
  const { rule, presentation, patient, chosenMgPerKg } = input;
  const { weightKg, ageDays } = patient;

  if (!(weightKg > 0) || weightKg > MAX_WEIGHT_KG) {
    return { status: 'not_calculable', reason: 'invalid_weight' };
  }
  if (!(ageDays >= 0)) {
    return { status: 'not_calculable', reason: 'invalid_age' };
  }
  if (ageDays < MIN_AGE_DAYS) {
    return { status: 'not_calculable', reason: 'neonate_v2' };
  }
  if (ageDays < rule.ageMinDays || (rule.ageMaxDays !== undefined && ageDays > rule.ageMaxDays)) {
    return { status: 'not_calculable', reason: 'age_out_of_rule' };
  }
  if (
    chosenMgPerKg !== undefined &&
    (chosenMgPerKg < rule.amountMin - EPS || chosenMgPerKg > rule.amountMax + EPS)
  ) {
    return { status: 'not_calculable', reason: 'choice_out_of_range' };
  }

  const dosesPerDay = 24 / rule.intervalHours;
  const selected = chosenMgPerKg ?? rule.usual ?? rule.amountMin;
  const steps: CalcStep[] = [];

  // mg por toma antes de aplicar topes.
  let toDose: (amount: number) => number;
  if (rule.basis === 'mg/kg/dose') {
    toDose = (a) => weightKg * a;
    steps.push({
      label: 'Dosis por toma',
      expression: `${f(weightKg)} kg × ${f(selected)} mg/kg`,
      result: `${f(toDose(selected))} mg`,
    });
  } else if (rule.basis === 'mg/kg/day') {
    toDose = (a) => (weightKg * a) / dosesPerDay;
    const daily = weightKg * selected;
    steps.push({
      label: 'Dosis diaria',
      expression: `${f(weightKg)} kg × ${f(selected)} mg/kg/día`,
      result: `${f(daily)} mg/día`,
    });
    steps.push({
      label: 'Dosis por toma',
      expression: `${f(daily)} mg ÷ ${f(dosesPerDay)} tomas`,
      result: `${f(daily / dosesPerDay)} mg`,
    });
  } else {
    toDose = (a) => a;
    steps.push({
      label: 'Dosis por edad',
      expression: 'Dosis fija según la edad',
      result: `${f(selected)} mg`,
    });
  }

  const perDayCap = rule.maxPerDayMg / dosesPerDay;
  const cap = Math.min(rule.maxPerDoseMg, perDayCap);
  const raw = toDose(selected);
  let cappedBy: 'per_dose' | 'per_day' | null = null;
  if (raw > cap + EPS) {
    cappedBy = rule.maxPerDoseMg <= perDayCap ? 'per_dose' : 'per_day';
    steps.push({
      label: 'Tope aplicado',
      expression:
        cappedBy === 'per_dose'
          ? `Máximo ${f(rule.maxPerDoseMg)} mg por toma`
          : `Máximo ${f(rule.maxPerDayMg)} mg/día ÷ ${f(dosesPerDay)} tomas`,
      result: `${f(cap)} mg`,
    });
  }
  const chosen = Math.min(raw, cap);
  const mgPerDose = {
    min: Math.min(toDose(rule.amountMin), cap),
    max: Math.min(toDose(rule.amountMax), cap),
    chosen,
  };

  steps.push({
    label: 'Frecuencia',
    expression: `Cada ${f(rule.intervalHours)} h`,
    result: `${f(dosesPerDay)} tomas/día`,
  });

  const rounding = roundToStep(
    chosen / presentation.mgPerUnit,
    presentation.step,
    cap / presentation.mgPerUnit,
  );
  const unitLabel = presentation.unit;
  steps.push({
    label: 'Cantidad',
    expression: `${f(chosen)} mg ÷ ${f(presentation.mgPerUnit)} mg/${unitLabel}`,
    result: `${f(rounding.value)} ${unitLabel}`,
  });

  const warnings: Warning[] = [];
  if (!isWeightPlausible(weightKg, ageDays)) warnings.push('weight_implausible');
  if (rounding.exceeds5pct) warnings.push('rounding_exceeds_5pct');
  if (rule.obesityNote === true) warnings.push('obesity_check');
  if (cappedBy !== null) warnings.push('capped_adult_max');

  return {
    status: 'ok',
    mgPerDose,
    mgPerDay: chosen * dosesPerDay,
    dosesPerDay,
    cappedBy,
    amount: {
      value: rounding.value,
      exact: rounding.exact,
      unit: unitLabel,
      errorPct: rounding.errorPct,
    },
    steps,
    warnings,
  };
}
