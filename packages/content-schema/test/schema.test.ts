import { describe, expect, it } from 'vitest';
import { parseDrug, parseSource } from '../src/index.ts';

function validDrug(): Record<string, unknown> {
  return {
    id: 'paracetamol',
    name: 'Paracetamol',
    synonyms: ['acetaminofén'],
    presentations: [
      {
        id: 'susp-120-5',
        label: 'Suspensión 120 mg/5 mL',
        form: 'suspension',
        mgPerUnit: 24,
        unit: 'mL',
        step: 0.1,
        brandsPE: ['Panadol'],
      },
    ],
    rules: [
      {
        id: 'fiebre-vo',
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
        sourceIds: ['bnfc-2025', 'harriet-lane-23'],
      },
    ],
    warnings: [],
    contraindications: [],
    diagnoses: ['fiebre'],
    review: { status: 'borrador', author: 'Diego', reviewers: [] },
    testCases: [
      {
        ruleId: 'fiebre-vo',
        presentationId: 'susp-120-5',
        weightKg: 10,
        ageDays: 400,
        expect: { mgPerDose: 150, amount: 6.3, unit: 'mL' },
      },
    ],
  };
}

type Mutable = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

function mutate(fn: (d: Mutable) => void): unknown {
  const d = validDrug() as Mutable;
  fn(d);
  return d;
}

describe('parseDrug', () => {
  it('accepts a minimal valid drug', () => {
    expect(parseDrug(validDrug()).id).toBe('paracetamol');
  });

  it('rejects amountMin greater than amountMax', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].amountMin = 20)))).toThrow();
  });

  it('rejects usual outside the range', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].usual = 16)))).toThrow();
  });

  it('rejects non-positive mgPerUnit', () => {
    expect(() => parseDrug(mutate((d) => (d.presentations[0].mgPerUnit = 0)))).toThrow();
  });

  it('rejects non-positive step', () => {
    expect(() => parseDrug(mutate((d) => (d.presentations[0].step = 0)))).toThrow();
  });

  it('rejects an interval outside 4, 6, 8, 12, 24 hours', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].intervalHours = 5)))).toThrow();
  });

  it('rejects validado without reviewedAt', () => {
    expect(() =>
      parseDrug(
        mutate((d) => (d.review = { status: 'validado', author: 'Diego', reviewers: ['Dr. X'] })),
      ),
    ).toThrow();
  });

  it('rejects validado without reviewers', () => {
    expect(() =>
      parseDrug(
        mutate(
          (d) =>
            (d.review = {
              status: 'validado',
              author: 'Diego',
              reviewers: [],
              reviewedAt: '2026-11-04',
            }),
        ),
      ),
    ).toThrow();
  });

  it('accepts validado with reviewer and date', () => {
    const drug = parseDrug(
      mutate(
        (d) =>
          (d.review = {
            status: 'validado',
            author: 'Diego',
            reviewers: ['Dr. X'],
            reviewedAt: '2026-11-04',
            nextReviewAt: '2027-11-04',
          }),
      ),
    );
    expect(drug.review.status).toBe('validado');
  });

  it('rejects a rule without sources', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].sourceIds = [])))).toThrow();
  });

  it('accepts drops (gota) as a unit', () => {
    const drug = parseDrug(mutate((d) => (d.presentations[0].unit = 'gota')));
    expect(drug.presentations[0]?.unit).toBe('gota');
  });

  it('rejects empty testCases', () => {
    expect(() => parseDrug(mutate((d) => (d.testCases = [])))).toThrow();
  });

  it('rejects a test case pointing to an unknown rule', () => {
    expect(() => parseDrug(mutate((d) => (d.testCases[0].ruleId = 'nope')))).toThrow();
  });

  it('rejects a test case pointing to an unknown presentation', () => {
    expect(() => parseDrug(mutate((d) => (d.testCases[0].presentationId = 'nope')))).toThrow();
  });

  it('rejects ageMaxDays not greater than ageMinDays', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].ageMaxDays = 29)))).toThrow();
  });

  it('rejects an invalid ISO date', () => {
    expect(() =>
      parseDrug(
        mutate(
          (d) =>
            (d.review = {
              status: 'validado',
              author: 'Diego',
              reviewers: ['Dr. X'],
              reviewedAt: '04/11/2026',
            }),
        ),
      ),
    ).toThrow();
  });
});

describe('parseSource', () => {
  it('accepts a source without a known year', () => {
    expect(parseSource({ id: 'libro', title: 'Libro' }).year).toBeUndefined();
  });
});

describe('parseDrug presentationIds', () => {
  it('rejects presentationIds that do not exist', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].presentationIds = ['nope'])))).toThrow();
  });
  it('requires presentationIds for parenteral rules', () => {
    expect(() => parseDrug(mutate((d) => (d.rules[0].route = 'IV')))).toThrow();
  });
  it('accepts valid presentationIds', () => {
    expect(
      parseDrug(mutate((d) => (d.rules[0].presentationIds = ['susp-120-5']))).rules[0]
        ?.presentationIds,
    ).toEqual(['susp-120-5']);
  });
});
