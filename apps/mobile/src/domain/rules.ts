import type { DoseRule } from '@medapp/content-schema';

/** La regla aplica a esta edad (días) y peso (kg). */
export function ruleFits(rule: DoseRule, ageDays: number, weightKg: number): boolean {
  return (
    ageDays >= rule.ageMinDays &&
    (rule.ageMaxDays === undefined || ageDays <= rule.ageMaxDays) &&
    (rule.weightMinKg === undefined || weightKg >= rule.weightMinKg) &&
    (rule.weightMaxKg === undefined || weightKg < rule.weightMaxKg)
  );
}
