import fc from 'fast-check';
import { describe, expect, it } from 'vitest';
import { calculateDose } from '../src/index.ts';
import { presentation, rule } from './fixtures.ts';

const EPS = 1e-6;

const scenario = fc
  .record({
    basis: fc.constantFrom('mg/kg/dose' as const, 'mg/kg/day' as const, 'fixed_by_age' as const),
    amountMin: fc.double({ min: 0.5, max: 100, noNaN: true }),
    spread: fc.double({ min: 0, max: 50, noNaN: true }),
    pick: fc.double({ min: 0, max: 1, noNaN: true }),
    intervalHours: fc.constantFrom(4 as const, 6 as const, 8 as const, 12 as const, 24 as const),
    maxPerDoseMg: fc.double({ min: 1, max: 3000, noNaN: true }),
    dayFactor: fc.double({ min: 1, max: 8, noNaN: true }),
    mgPerUnit: fc.double({ min: 0.5, max: 500, noNaN: true }),
    step: fc.constantFrom(0.05, 0.1, 0.5, 1),
    weightKg: fc.double({ min: 2, max: 150, noNaN: true }),
    ageDays: fc.integer({ min: 29, max: 25 * 365 }),
  })
  .map((s) => ({
    rule: rule({
      basis: s.basis,
      amountMin: s.amountMin,
      amountMax: s.amountMin + s.spread,
      usual: s.amountMin + s.spread * s.pick,
      intervalHours: s.intervalHours,
      maxPerDoseMg: s.maxPerDoseMg,
      maxPerDayMg: s.maxPerDoseMg * s.dayFactor,
    }),
    presentation: presentation({ mgPerUnit: s.mgPerUnit, step: s.step }),
    patient: { weightKg: s.weightKg, ageDays: s.ageDays },
  }));

describe('calculateDose invariants', () => {
  it('never exceeds caps and always yields a positive amount', () => {
    fc.assert(
      fc.property(scenario, (input) => {
        const r = calculateDose(input);
        expect(r.status).toBe('ok');
        if (r.status !== 'ok') return;
        expect(r.amount.value).toBeGreaterThan(0);
        expect(r.mgPerDose.chosen).toBeLessThanOrEqual(input.rule.maxPerDoseMg + EPS);
        expect(r.mgPerDose.chosen * r.dosesPerDay).toBeLessThanOrEqual(
          input.rule.maxPerDayMg + EPS,
        );
        expect(r.amount.value * input.presentation.mgPerUnit).toBeLessThanOrEqual(
          input.rule.maxPerDoseMg + EPS,
        );
        expect(r.mgPerDose.min).toBeLessThanOrEqual(r.mgPerDose.chosen + EPS);
        expect(r.mgPerDose.chosen).toBeLessThanOrEqual(r.mgPerDose.max + EPS);
      }),
      { numRuns: 2000 },
    );
  });
});
