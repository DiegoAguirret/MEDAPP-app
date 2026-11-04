import type { DoseRule, Presentation } from '@medapp/content-schema';

export function rule(overrides: Partial<DoseRule> = {}): DoseRule {
  const base: DoseRule = {
    id: 'r',
    indication: 'Fiebre o dolor',
    route: 'VO',
    ageMinDays: 29,
    basis: 'mg/kg/dose',
    amountMin: 10,
    amountMax: 15,
    usual: 15,
    intervalHours: 6,
    maxPerDoseMg: 1000,
    maxPerDayMg: 4000,
    sourceIds: ['a', 'b'],
  };
  const merged = Object.entries({ ...base, ...overrides }).filter(([, v]) => v !== undefined);
  return Object.fromEntries(merged) as DoseRule;
}

export function presentation(overrides: Partial<Presentation> = {}): Presentation {
  return {
    id: 'p',
    label: 'Suspensión 120 mg/5 mL',
    form: 'suspension',
    mgPerUnit: 24,
    unit: 'mL',
    step: 0.1,
    brandsPE: [],
    ...overrides,
  };
}
