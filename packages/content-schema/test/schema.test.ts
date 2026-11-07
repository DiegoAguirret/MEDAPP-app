import { describe, expect, it } from 'vitest';
import { parseDrug, parseSource, sourcePriority } from '../src/index.ts';

function validDrug(): Record<string, unknown> {
  return {
    id: 'paracetamol',
    name: 'Paracetamol',
    category: 'analgesico',
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

  it('rejects an unknown category', () => {
    expect(() => parseDrug(mutate((d) => (d.category = 'magia')))).toThrow();
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

  it('accepts verificado with the verification date', () => {
    const drug = parseDrug(
      mutate(
        (d) =>
          (d.review = {
            status: 'verificado',
            author: 'Diego',
            reviewers: [],
            reviewedAt: '2026-11-05',
          }),
      ),
    );
    expect(drug.review.status).toBe('verificado');
  });

  it('rejects verificado without a verification date', () => {
    expect(() =>
      parseDrug(
        mutate((d) => (d.review = { status: 'verificado', author: 'Diego', reviewers: [] })),
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

  it('accepts a repeatable emergency rule (every 5–15 min) without intervalHours', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].repeatMinutes = { min: 5, max: 15 };
    });
    expect(() => parseDrug(d)).not.toThrow();
  });

  it('accepts a single loading dose (once) without intervalHours', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].once = true;
    });
    expect(() => parseDrug(d)).not.toThrow();
  });

  it('accepts a continuous infusion in mcg/kg/min', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].continuous = true;
      x.rules[0].basis = 'mcg/kg/min';
      x.rules[0].route = 'IV';
      x.rules[0].presentationIds = ['susp-120-5'];
    });
    expect(parseDrug(d).rules[0]?.continuous).toBe(true);
  });

  it('accepts a continuous infusion in mg/kg/h', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].continuous = true;
      x.rules[0].basis = 'mg/kg/h';
      x.rules[0].route = 'IV';
      x.rules[0].presentationIds = ['susp-120-5'];
    });
    expect(() => parseDrug(d)).not.toThrow();
  });

  it('rejects a per-time basis without continuous', () => {
    expect(() => parseDrug(mutate((x) => (x.rules[0].basis = 'mcg/kg/min')))).toThrow();
  });

  it('rejects continuous with a per-dose basis', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].continuous = true;
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects continuous together with intervalHours', () => {
    const d = mutate((x) => {
      x.rules[0].continuous = true;
      x.rules[0].basis = 'mg/kg/h';
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects an infusion whose presentation is not measured in mL', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].continuous = true;
      x.rules[0].basis = 'mg/kg/h';
      x.rules[0].route = 'IV';
      x.rules[0].presentationIds = ['susp-120-5'];
      x.presentations[0].unit = 'tableta';
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects mcg/kg/min in a drug dosed in UI', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].continuous = true;
      x.rules[0].basis = 'mcg/kg/min';
      x.rules[0].route = 'IV';
      x.rules[0].presentationIds = ['susp-120-5'];
      x.doseUnit = 'UI';
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects a rule with no schedule at all', () => {
    expect(() => parseDrug(mutate((x) => delete x.rules[0].intervalHours))).toThrow();
  });

  it('rejects a rule with both intervalHours and repeatMinutes', () => {
    expect(() =>
      parseDrug(mutate((x) => (x.rules[0].repeatMinutes = { min: 5, max: 15 }))),
    ).toThrow();
  });

  it('rejects repeatMinutes with min greater than max', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].repeatMinutes = { min: 20, max: 10 };
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects maxDoses on a scheduled (intervalHours) rule', () => {
    expect(() => parseDrug(mutate((x) => (x.rules[0].maxDoses = 2)))).toThrow();
  });

  it('rejects mg/kg/day on a repeatable rule', () => {
    const d = mutate((x) => {
      delete x.rules[0].intervalHours;
      x.rules[0].repeatMinutes = { min: 5, max: 15 };
      x.rules[0].basis = 'mg/kg/day';
    });
    expect(() => parseDrug(d)).toThrow();
  });

  it('rejects a rule below 29 days that is not marked neonatal', () => {
    expect(() => parseDrug(mutate((x) => (x.rules[0].ageMinDays = 0)))).toThrow();
  });

  it('accepts a neonatal rule from day 0', () => {
    const d = mutate((x) => {
      x.rules[0].ageMinDays = 0;
      x.rules[0].ageMaxDays = 28;
      x.rules[0].neonatal = true;
    });
    expect(() => parseDrug(d)).not.toThrow();
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
  it('accepts doses in micrograms (doseUnit mcg)', () => {
    expect(parseDrug(mutate((d) => (d.doseUnit = 'mcg'))).doseUnit).toBe('mcg');
  });

  it('rejects an unknown dose unit', () => {
    expect(() => parseDrug(mutate((d) => (d.doseUnit = 'g')))).toThrow();
  });
});

describe('parseSource', () => {
  it('accepts a source without a known year', () => {
    expect(
      parseSource({ id: 'libro', title: 'Libro', kind: 'libro', country: 'PE' }).year,
    ).toBeUndefined();
  });
  it('requires the kind and country of each source', () => {
    expect(() => parseSource({ id: 'x', title: 'X' })).toThrow();
  });
});

describe('sourcePriority', () => {
  it('ranks Peruvian norms first, then regulators, guidelines and books', () => {
    const order = (['libro', 'guia', 'norma-peru', 'regulador'] as const)
      .slice()
      .sort((a, b) => sourcePriority(a) - sourcePriority(b));
    expect(order).toEqual(['norma-peru', 'regulador', 'guia', 'libro']);
  });
});

describe('parseDrug countryNotes', () => {
  it('accepts per-country differences with sources', () => {
    const d = parseDrug(
      mutate(
        (x) =>
          (x.rules[0].countryNotes = [{ country: 'US', text: 'Máx. 4 g/día', sourceIds: ['fda'] }]),
      ),
    );
    expect(d.rules[0]?.countryNotes?.[0]?.country).toBe('US');
  });
  it('rejects a country note without sources', () => {
    expect(() =>
      parseDrug(
        mutate((x) => (x.rules[0].countryNotes = [{ country: 'US', text: 'x', sourceIds: [] }])),
      ),
    ).toThrow();
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
