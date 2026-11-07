import { formatClinical } from './format.ts';
import { isWeightPlausible } from './plausibility.ts';
import { roundToStep } from './rounding.ts';
import type { CalcStep, CalculateInput, DoseResult, Warning } from './types.ts';

export const MIN_AGE_DAYS = 29;
export const MAX_WEIGHT_KG = 150;
const EPS = 1e-9;

const f = (n: number): string => formatClinical(n);
const scheduleMinutes = (r: { min: number; max: number }): string =>
  r.min === r.max ? f(r.min) : `${f(r.min)}–${f(r.max)}`;

export function calculateDose(input: CalculateInput): DoseResult {
  const { rule, presentation, patient, chosenMgPerKg } = input;
  const u = input.doseUnit ?? 'mg';
  const { weightKg, ageDays } = patient;

  if (!(weightKg > 0) || weightKg > MAX_WEIGHT_KG) {
    return { status: 'not_calculable', reason: 'invalid_weight' };
  }
  if (!(ageDays >= 0)) {
    return { status: 'not_calculable', reason: 'invalid_age' };
  }
  if (ageDays < MIN_AGE_DAYS && rule.neonatal !== true) {
    return { status: 'not_calculable', reason: 'neonate_v2' };
  }
  if (ageDays < rule.ageMinDays || (rule.ageMaxDays !== undefined && ageDays > rule.ageMaxDays)) {
    return { status: 'not_calculable', reason: 'age_out_of_rule' };
  }
  if (
    (rule.weightMinKg !== undefined && weightKg < rule.weightMinKg) ||
    (rule.weightMaxKg !== undefined && weightKg >= rule.weightMaxKg)
  ) {
    return { status: 'not_calculable', reason: 'weight_out_of_rule' };
  }
  if (rule.presentationIds !== undefined && !rule.presentationIds.includes(presentation.id)) {
    return { status: 'not_calculable', reason: 'presentation_not_allowed' };
  }
  if (
    chosenMgPerKg !== undefined &&
    (chosenMgPerKg < rule.amountMin - EPS || chosenMgPerKg > rule.amountMax + EPS)
  ) {
    return { status: 'not_calculable', reason: 'choice_out_of_range' };
  }

  // Pauta programada: tomas por día. Repetible o única: dosis del episodio (tope acumulado).
  // Infusión continua: 24 «tomas» de una hora; la dosis es la cantidad por hora.
  const continuous = rule.continuous === true;
  const dosesPerDay = continuous
    ? 24
    : rule.intervalHours !== undefined
      ? 24 / rule.intervalHours
      : (rule.maxDoses ?? 1);
  const per = continuous ? '/h' : '';
  const selected = chosenMgPerKg ?? rule.usual ?? rule.amountMin;
  const steps: CalcStep[] = [];

  // mg por toma antes de aplicar topes.
  let toDose: (amount: number) => number;
  if (rule.basis === 'mcg/kg/min') {
    // mcg/min × 60 = mcg/h; si la ficha va en mg, ÷ 1000.
    const factor = u === 'mcg' ? 60 : 60 / 1000;
    toDose = (a) => weightKg * a * factor;
    const perMinute = weightKg * selected;
    steps.push({
      label: 'Dosis por minuto',
      expression: `${f(weightKg)} kg × ${f(selected)} mcg/kg/min`,
      result: `${f(perMinute)} mcg/min`,
    });
    steps.push({
      label: 'Dosis por hora',
      expression:
        u === 'mcg' ? `${f(perMinute)} mcg/min × 60` : `${f(perMinute)} mcg/min × 60 ÷ 1000`,
      result: `${f(toDose(selected))} ${u}/h`,
    });
  } else if (rule.basis === 'mg/kg/h') {
    toDose = (a) => weightKg * a;
    steps.push({
      label: 'Dosis por hora',
      expression: `${f(weightKg)} kg × ${f(selected)} ${u}/kg/h`,
      result: `${f(toDose(selected))} ${u}/h`,
    });
  } else if (rule.basis === 'mg/kg/dose') {
    toDose = (a) => weightKg * a;
    steps.push({
      label: 'Dosis por toma',
      expression: `${f(weightKg)} kg × ${f(selected)} ${u}/kg`,
      result: `${f(toDose(selected))} ${u}`,
    });
  } else if (rule.basis === 'mg/kg/day') {
    toDose = (a) => (weightKg * a) / dosesPerDay;
    const daily = weightKg * selected;
    steps.push({
      label: 'Dosis diaria',
      expression: `${f(weightKg)} kg × ${f(selected)} ${u}/kg/día`,
      result: `${f(daily)} ${u}/día`,
    });
    steps.push({
      label: 'Dosis por toma',
      expression: `${f(daily)} ${u} ÷ ${f(dosesPerDay)} tomas`,
      result: `${f(daily / dosesPerDay)} ${u}`,
    });
  } else {
    toDose = (a) => a;
    steps.push({
      label: 'Dosis por edad',
      expression: 'Dosis fija según la edad',
      result: `${f(selected)} ${u}`,
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
          ? continuous
            ? `Máximo ${f(rule.maxPerDoseMg)} ${u}/h`
            : `Máximo ${f(rule.maxPerDoseMg)} ${u} por toma`
          : rule.intervalHours !== undefined
            ? `Máximo ${f(rule.maxPerDayMg)} ${u}/día ÷ ${f(dosesPerDay)} tomas`
            : `Máximo acumulado ${f(rule.maxPerDayMg)} ${u} ÷ ${f(dosesPerDay)} dosis`,
      result: `${f(cap)} ${u}${per}`,
    });
  }
  const chosen = Math.min(raw, cap);
  const mgPerDose = {
    min: Math.min(toDose(rule.amountMin), cap),
    max: Math.min(toDose(rule.amountMax), cap),
    chosen,
  };

  steps.push(
    continuous
      ? { label: 'Frecuencia', expression: 'Infusión continua', result: '24 h' }
      : rule.intervalHours !== undefined
        ? {
            label: 'Frecuencia',
            expression: `Cada ${f(rule.intervalHours)} h`,
            result: `${f(dosesPerDay)} tomas/día`,
          }
        : rule.repeatMinutes !== undefined
          ? {
              label: 'Frecuencia',
              expression: `Repetir cada ${scheduleMinutes(rule.repeatMinutes)} min si es necesario`,
              result:
                rule.maxDoses === undefined
                  ? 'según respuesta'
                  : `máximo ${f(rule.maxDoses)} dosis`,
            }
          : { label: 'Frecuencia', expression: 'Dosis única', result: '1 dosis' },
  );

  const rounding = roundToStep(
    chosen / presentation.mgPerUnit,
    presentation.step,
    cap / presentation.mgPerUnit,
  );
  const unitLabel = continuous ? `${presentation.unit}/h` : presentation.unit;
  steps.push({
    label: continuous ? 'Velocidad' : 'Cantidad',
    expression: `${f(chosen)} ${u}${per} ÷ ${f(presentation.mgPerUnit)} ${u}/${presentation.unit}`,
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
