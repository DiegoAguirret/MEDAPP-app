import { describe, expect, it } from 'vitest';
import { bsaMosteller, dehydrationPlan, hollidaySegar } from '../src/index.ts';

describe('hollidaySegar', () => {
  it.each([
    [8, 800],
    [10, 1000],
    [15, 1250],
    [25, 1600],
    [70, 2400],
  ])('%s kg → %s mL/day', (kg, ml) => {
    expect(hollidaySegar(kg).mlPerDay).toBe(ml);
  });

  it('gives the hourly rate', () => {
    expect(hollidaySegar(15).mlPerHour).toBeCloseTo(52.1, 1);
  });

  it('explains the calculation in steps', () => {
    expect(hollidaySegar(25).steps.length).toBeGreaterThanOrEqual(3);
  });

  it('rejects non-positive weight', () => {
    expect(() => hollidaySegar(0)).toThrow(RangeError);
  });
});

describe('bsaMosteller', () => {
  it('computes body surface area with two decimals', () => {
    expect(bsaMosteller(20, 110)).toBe(0.78);
  });
  it('rejects non-positive inputs', () => {
    expect(() => bsaMosteller(0, 110)).toThrow(RangeError);
    expect(() => bsaMosteller(20, 0)).toThrow(RangeError);
  });
});

describe('dehydrationPlan', () => {
  it('plan B (MINSA): 50 to 100 mL/kg of ORS over 3 to 4 hours', () => {
    const p = dehydrationPlan('B', 10, 400);
    expect(p.phases).toEqual([
      { ml: 500, mlMax: 1000, minutes: 180, minutesMax: 240, fluid: 'SRO' },
    ]);
  });

  it('plan C under 12 months: 30 mL/kg in 1 h then 70 mL/kg in 5 h', () => {
    const p = dehydrationPlan('C', 8, 200);
    expect(p.phases.map((x) => [x.ml, x.minutes])).toEqual([
      [240, 60],
      [560, 300],
    ]);
  });

  it('plan C from 12 months: 30 mL/kg in 30 min then 70 mL/kg in 2.5 h', () => {
    const p = dehydrationPlan('C', 15, 3 * 365);
    expect(p.phases.map((x) => [x.ml, x.minutes])).toEqual([
      [450, 30],
      [1050, 150],
    ]);
  });

  it('plan C uses an isotonic IV fluid', () => {
    expect(dehydrationPlan('C', 15, 3 * 365).phases[0]?.fluid).toBe(
      'Solución polielectrolítica (MINSA) o Lactato de Ringer (OMS)',
    );
  });

  it('includes steps', () => {
    expect(dehydrationPlan('B', 10, 400).steps.length).toBeGreaterThanOrEqual(1);
  });

  it('rejects non-positive weight', () => {
    expect(() => dehydrationPlan('B', 0, 400)).toThrow(RangeError);
  });
});

describe('dehydrationPlan age validation', () => {
  it.each([Number.NaN, -1, Number.POSITIVE_INFINITY])('rejects age %s', (age) => {
    expect(() => dehydrationPlan('C', 8, age)).toThrow(RangeError);
  });
});
