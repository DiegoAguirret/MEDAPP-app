import { describe, expect, it } from 'vitest';
import { calculateDose, isWeightPlausible, type DoseResult } from '../src/index.ts';
import { presentation, rule } from './fixtures.ts';

function ok(result: DoseResult): Extract<DoseResult, { status: 'ok' }> {
  if (result.status !== 'ok') throw new Error(`expected ok, got ${result.reason}`);
  return result;
}

const toddler = { weightKg: 10, ageDays: 400 };

describe('calculateDose — mg/kg/dose', () => {
  it('paracetamol 15 mg/kg for 10 kg gives 150 mg = 6.3 mL', () => {
    const r = ok(calculateDose({ rule: rule(), presentation: presentation(), patient: toddler }));
    expect(r.mgPerDose).toEqual({ min: 100, max: 150, chosen: 150 });
    expect(r.amount.value).toBe(6.3);
    expect(r.amount.unit).toBe('mL');
    expect(r.cappedBy).toBeNull();
    expect(r.dosesPerDay).toBe(4);
    expect(r.mgPerDay).toBe(600);
    expect(r.warnings).toEqual([]);
  });

  it('caps ibuprofen at the maximum per dose for 45 kg', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 5,
          amountMax: 10,
          usual: 10,
          intervalHours: 8,
          maxPerDoseMg: 400,
          maxPerDayMg: 1200,
        }),
        presentation: presentation({ mgPerUnit: 20 }),
        patient: { weightKg: 45, ageDays: 12 * 365 },
      }),
    );
    expect(r.mgPerDose.chosen).toBe(400);
    expect(r.mgPerDose.max).toBe(400);
    expect(r.cappedBy).toBe('per_dose');
    expect(r.warnings).toContain('capped_adult_max');
    expect(r.amount.value).toBe(20);
  });

  it('caps by the daily maximum when the per-dose cap is not reached', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 15,
          amountMax: 15,
          usual: 15,
          intervalHours: 4,
          maxPerDoseMg: 1000,
          maxPerDayMg: 3000,
        }),
        presentation: presentation(),
        patient: { weightKg: 40, ageDays: 10 * 365 },
      }),
    );
    expect(r.mgPerDose.chosen).toBe(500);
    expect(r.cappedBy).toBe('per_day');
    expect(r.mgPerDay).toBe(3000);
  });

  it('uses a chosen value inside the range', () => {
    const r = ok(
      calculateDose({
        rule: rule(),
        presentation: presentation(),
        patient: toddler,
        chosenMgPerKg: 12,
      }),
    );
    expect(r.mgPerDose.chosen).toBe(120);
    expect(r.amount.value).toBe(5);
  });

  it('defaults to amountMin when there is no usual dose', () => {
    const r = ok(
      calculateDose({
        rule: rule({ usual: undefined }),
        presentation: presentation(),
        patient: toddler,
      }),
    );
    expect(r.mgPerDose.chosen).toBe(100);
  });

  it('rejects a chosen value outside the range', () => {
    const r = calculateDose({
      rule: rule(),
      presentation: presentation(),
      patient: toddler,
      chosenMgPerKg: 20,
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'choice_out_of_range' });
  });
});

describe('calculateDose — mg/kg/day', () => {
  it('amoxicillin 90 mg/kg/day q12h for 12 kg gives 540 mg = 10.8 mL', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          basis: 'mg/kg/day',
          amountMin: 80,
          amountMax: 90,
          usual: 90,
          intervalHours: 12,
          maxPerDoseMg: 2000,
          maxPerDayMg: 4000,
        }),
        presentation: presentation({ mgPerUnit: 50, label: 'Suspensión 250 mg/5 mL' }),
        patient: { weightKg: 12, ageDays: 730 },
      }),
    );
    expect(r.mgPerDay).toBe(1080);
    expect(r.mgPerDose).toEqual({ min: 480, max: 540, chosen: 540 });
    expect(r.amount.value).toBe(10.8);
    expect(r.steps.map((s) => s.label)).toContain('Dosis diaria');
  });
});

describe('calculateDose — fixed_by_age', () => {
  const cetirizine = rule({
    basis: 'fixed_by_age',
    ageMinDays: 180,
    ageMaxDays: 730,
    amountMin: 2.5,
    amountMax: 2.5,
    usual: 2.5,
    intervalHours: 24,
    maxPerDoseMg: 2.5,
    maxPerDayMg: 5,
  });
  const solution = presentation({ mgPerUnit: 1, label: 'Solución 1 mg/mL' });

  it('ignores weight for the dose', () => {
    const a = ok(
      calculateDose({
        rule: cetirizine,
        presentation: solution,
        patient: { weightKg: 8, ageDays: 365 },
      }),
    );
    const b = ok(
      calculateDose({
        rule: cetirizine,
        presentation: solution,
        patient: { weightKg: 12, ageDays: 365 },
      }),
    );
    expect(a.mgPerDose.chosen).toBe(2.5);
    expect(b.mgPerDose.chosen).toBe(2.5);
    expect(a.amount.value).toBe(2.5);
    expect(a.steps[0]?.label).toBe('Dosis por edad');
  });

  it('rejects a chosen mg outside the fixed range', () => {
    const r = calculateDose({
      rule: cetirizine,
      presentation: solution,
      patient: { weightKg: 8, ageDays: 365 },
      chosenMgPerKg: 5,
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'choice_out_of_range' });
  });
});

describe('calculateDose — neonatos (reglas neonatales explícitas)', () => {
  it('ampicilina neonatal 50 mg/kg cada 12 h: 3 kg, 4 días → 150 mg', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          neonatal: true,
          ageMinDays: 0,
          ageMaxDays: 6,
          amountMin: 50,
          amountMax: 50,
          usual: 50,
          intervalHours: 12,
          maxPerDoseMg: 225,
          maxPerDayMg: 450,
        }),
        presentation: presentation({ mgPerUnit: 250 / 1.5, step: 0.1 }),
        patient: { weightKg: 3, ageDays: 4 },
      }),
    );
    expect(r.mgPerDose.chosen).toBe(150);
    expect(r.amount.value).toBe(0.9);
  });

  it('still refuses a non-neonatal rule for a 4-day-old', () => {
    const r = calculateDose({
      rule: rule({ ageMinDays: 0 }),
      presentation: presentation(),
      patient: { weightKg: 3, ageDays: 4 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'neonate_v2' });
  });

  it('a neonatal rule respects its own age band', () => {
    const r = calculateDose({
      rule: rule({ neonatal: true, ageMinDays: 7, ageMaxDays: 28 }),
      presentation: presentation(),
      patient: { weightKg: 3, ageDays: 3 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'age_out_of_rule' });
  });
});

describe('calculateDose — guards', () => {
  it('does not calculate for neonates under 29 days', () => {
    const r = calculateDose({
      rule: rule(),
      presentation: presentation(),
      patient: { weightKg: 3.5, ageDays: 20 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'neonate_v2' });
  });

  it.each([0, -3, 151, Number.NaN])('rejects invalid weight %s', (weightKg) => {
    const r = calculateDose({
      rule: rule(),
      presentation: presentation(),
      patient: { weightKg, ageDays: 400 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'invalid_weight' });
  });

  it.each([-1, Number.NaN])('rejects invalid age %s', (ageDays) => {
    const r = calculateDose({
      rule: rule(),
      presentation: presentation(),
      patient: { weightKg: 10, ageDays },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'invalid_age' });
  });

  it('rejects an age below the rule minimum', () => {
    const r = calculateDose({
      rule: rule({ ageMinDays: 180 }),
      presentation: presentation(),
      patient: { weightKg: 6, ageDays: 60 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'age_out_of_rule' });
  });

  it('rejects an age above the rule maximum', () => {
    const r = calculateDose({
      rule: rule({ ageMaxDays: 730 }),
      presentation: presentation(),
      patient: { weightKg: 15, ageDays: 1000 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'age_out_of_rule' });
  });

  it('rejects a weight below the rule minimum (loratadina 10 mg desde 30 kg)', () => {
    const r = calculateDose({
      rule: rule({ weightMinKg: 30 }),
      presentation: presentation(),
      patient: { weightKg: 22, ageDays: 2555 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'weight_out_of_rule' });
  });

  it('rejects a weight at or above the rule maximum (loratadina 5 mg bajo 30 kg)', () => {
    const r = calculateDose({
      rule: rule({ weightMaxKg: 30 }),
      presentation: presentation(),
      patient: { weightKg: 30, ageDays: 2555 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'weight_out_of_rule' });
  });

  it('accepts a weight inside the rule band', () => {
    const r = calculateDose({
      rule: rule({ weightMinKg: 30 }),
      presentation: presentation(),
      patient: { weightKg: 30, ageDays: 2555 },
    });
    expect(r.status).toBe('ok');
  });

  it('warns but still calculates for an implausible weight', () => {
    const r = ok(
      calculateDose({
        rule: rule(),
        presentation: presentation(),
        patient: { weightKg: 45, ageDays: 180 },
      }),
    );
    expect(r.warnings).toContain('weight_implausible');
  });

  it('warns about obesity when the rule asks for it', () => {
    const r = ok(
      calculateDose({
        rule: rule({ obesityNote: true }),
        presentation: presentation(),
        patient: toddler,
      }),
    );
    expect(r.warnings).toContain('obesity_check');
  });

  it('warns when the presentation cannot measure the dose within 5%', () => {
    const r = ok(
      calculateDose({
        rule: rule(),
        presentation: presentation({
          form: 'tableta',
          unit: 'tableta',
          mgPerUnit: 500,
          step: 0.5,
          label: 'Tableta 500 mg',
        }),
        patient: toddler,
      }),
    );
    expect(r.warnings).toContain('rounding_exceeds_5pct');
    expect(r.amount.value).toBe(0.3);
  });
});

describe('calculateDose — steps', () => {
  it('returns at least 3 steps ending with the amount and unit', () => {
    const r = ok(calculateDose({ rule: rule(), presentation: presentation(), patient: toddler }));
    expect(r.steps.length).toBeGreaterThanOrEqual(3);
    expect(r.steps[0]).toEqual({
      label: 'Dosis por toma',
      expression: '10 kg × 15 mg/kg',
      result: '150 mg',
    });
    expect(r.steps.at(-1)?.result).toBe('6.3 mL');
  });

  it('includes the cap step when capped', () => {
    const r = ok(
      calculateDose({
        rule: rule({ maxPerDoseMg: 100, maxPerDayMg: 400 }),
        presentation: presentation(),
        patient: toddler,
      }),
    );
    expect(r.steps.map((s) => s.label)).toContain('Tope aplicado');
  });
});

describe('isWeightPlausible', () => {
  it.each([
    [4, 40, true],
    [9, 40, false],
    [10, 400, true],
    [45, 180, false],
    [70, 20 * 365, true],
    [20, 20 * 365, false],
    [10, Number.NaN, false],
  ])('%s kg at %s days → %s', (kg, days, expected) => {
    expect(isWeightPlausible(kg, days)).toBe(expected);
  });
});

describe('calculateDose — small doses keep their precision', () => {
  it('shows 0.005 mg/kg and 0.015 mg instead of rounding to 2 decimals', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 0.005,
          amountMax: 0.005,
          usual: 0.005,
          maxPerDoseMg: 1,
          maxPerDayMg: 4,
        }),
        presentation: presentation({ mgPerUnit: 0.05 }),
        patient: { weightKg: 3, ageDays: 60 },
      }),
    );
    expect(r.steps[0]?.expression).toBe('3 kg × 0.005 mg/kg');
    expect(r.steps[0]?.result).toBe('0.015 mg');
    expect(r.steps.at(-1)?.result).toBe('0.3 mL');
  });

  it('never shows 0 for a tiny but positive volume', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 0.01,
          amountMax: 0.01,
          usual: 0.01,
          maxPerDoseMg: 1,
          maxPerDayMg: 4,
        }),
        presentation: presentation({ mgPerUnit: 50 }),
        patient: { weightKg: 3, ageDays: 60 },
      }),
    );
    expect(r.steps.at(-1)?.result).not.toMatch(/^0 /);
  });
});

describe('calculateDose — presentation must match the rule', () => {
  it('rejects a presentation not listed in presentationIds', () => {
    const r = calculateDose({
      rule: rule({ presentationIds: ['other'] }),
      presentation: presentation(),
      patient: toddler,
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'presentation_not_allowed' });
  });

  it('accepts a listed presentation', () => {
    const r = calculateDose({
      rule: rule({ presentationIds: ['p'] }),
      presentation: presentation(),
      patient: toddler,
    });
    expect(r.status).toBe('ok');
  });
});

describe('calculateDose — urgencias (dosis repetibles y únicas)', () => {
  const adrenalina = presentation({
    id: 'amp',
    label: 'Ampolla 1 mg/mL',
    mgPerUnit: 1,
    step: 0.01,
  });

  it('adrenalina IM 0.01 mg/kg, 12 kg → 0.12 mg = 0.12 mL, repetible', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          route: 'IM',
          amountMin: 0.01,
          amountMax: 0.01,
          usual: 0.01,
          intervalHours: undefined,
          repeatMinutes: { min: 5, max: 15 },
          maxPerDoseMg: 0.3,
          maxPerDayMg: 0.3,
        }),
        presentation: adrenalina,
        patient: { weightKg: 12, ageDays: 1095 },
      }),
    );
    expect(r.mgPerDose.chosen).toBeCloseTo(0.12, 10);
    expect(r.amount.value).toBe(0.12);
    expect(r.dosesPerDay).toBe(1);
    expect(r.steps.find((s) => s.label === 'Frecuencia')?.expression).toBe(
      'Repetir cada 5–15 min si es necesario',
    );
  });

  it('caps adrenalina IM at 0.3 mg for 40 kg', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 0.01,
          amountMax: 0.01,
          usual: 0.01,
          intervalHours: undefined,
          repeatMinutes: { min: 5, max: 15 },
          maxPerDoseMg: 0.3,
          maxPerDayMg: 0.3,
        }),
        presentation: adrenalina,
        patient: { weightKg: 40, ageDays: 4000 },
      }),
    );
    expect(r.mgPerDose.chosen).toBeCloseTo(0.3, 10);
    expect(r.cappedBy).toBe('per_dose');
  });

  it('splits an episode maximum across maxDoses', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 0.5,
          amountMax: 0.5,
          usual: 0.5,
          intervalHours: undefined,
          repeatMinutes: { min: 10, max: 10 },
          maxDoses: 2,
          maxPerDoseMg: 10,
          maxPerDayMg: 10,
        }),
        presentation: presentation({ mgPerUnit: 5, step: 0.05 }),
        patient: { weightKg: 30, ageDays: 3000 },
      }),
    );
    expect(r.dosesPerDay).toBe(2);
    expect(r.mgPerDose.chosen).toBe(5);
    expect(r.cappedBy).toBe('per_day');
  });

  it('a single loading dose reads «Dosis única»', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          amountMin: 20,
          amountMax: 20,
          usual: 20,
          intervalHours: undefined,
          once: true,
          maxPerDoseMg: 1000,
          maxPerDayMg: 1000,
        }),
        presentation: presentation({ mgPerUnit: 100, step: 0.1 }),
        patient: { weightKg: 10, ageDays: 400 },
      }),
    );
    expect(r.mgPerDose.chosen).toBe(200);
    expect(r.amount.value).toBe(2);
    expect(r.steps.find((s) => s.label === 'Frecuencia')?.expression).toBe('Dosis única');
  });
});

describe('calculateDose — unidades internacionales (UI)', () => {
  it('con doseUnit UI, los pasos dicen UI y nunca mg', () => {
    const r = ok(
      calculateDose({
        rule: rule({
          basis: 'mg/kg/dose',
          amountMin: 50000,
          amountMax: 50000,
          usual: 50000,
          maxPerDoseMg: 2400000,
          maxPerDayMg: 2400000,
        }),
        presentation: presentation({ mgPerUnit: 300000, unit: 'mL', step: 0.1 }),
        patient: toddler,
        doseUnit: 'UI',
      }),
    );
    expect(r.mgPerDose.chosen).toBe(500000);
    const text = r.steps.map((s) => `${s.expression} ${s.result}`).join(' | ');
    expect(text).toContain('UI/kg');
    expect(text).not.toMatch(/\bmg\b/);
  });
});
