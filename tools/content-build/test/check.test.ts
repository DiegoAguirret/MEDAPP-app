import { parseDrug, type Drug, type Source } from '@medapp/content-schema';
import { describe, expect, it } from 'vitest';
import { checkContent } from '../src/check.ts';

const sources: Source[] = [
  { id: 'bnfc-2025', title: 'BNFC', year: 2025 },
  { id: 'harriet-lane-23', title: 'Harriet Lane', year: 2023 },
];

function drug(overrides: Record<string, unknown> = {}): Drug {
  return parseDrug({
    id: 'paracetamol',
    name: 'Paracetamol',
    synonyms: [],
    presentations: [
      {
        id: 'jarabe-120-5',
        label: 'Jarabe 120 mg/5 mL',
        form: 'jarabe',
        mgPerUnit: 24,
        unit: 'mL',
        step: 0.1,
        brandsPE: [],
      },
    ],
    rules: [
      {
        id: 'fiebre',
        indication: 'Fiebre',
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
    diagnoses: [],
    review: { status: 'borrador', author: 'Diego', reviewers: [] },
    testCases: [
      {
        ruleId: 'fiebre',
        presentationId: 'jarabe-120-5',
        weightKg: 10,
        ageDays: 400,
        expect: { mgPerDose: 150, amount: 6.3, unit: 'mL' },
      },
    ],
    ...overrides,
  });
}

const validated = {
  status: 'validado',
  author: 'Diego',
  reviewers: ['Dr. X'],
  reviewedAt: '2026-11-04',
  nextReviewAt: '2027-11-04',
};
const today = new Date('2026-11-05T00:00:00Z');

describe('checkContent', () => {
  it('accepts consistent tester content', () => {
    expect(checkContent([drug()], sources, 'tester', today)).toEqual([]);
  });

  it('flags an unknown source', () => {
    const d = drug();
    d.rules[0]!.sourceIds = ['bnfc-2025', 'nope'];
    const errors = checkContent([d], sources, 'tester', today);
    expect(errors).toEqual([
      expect.objectContaining({ drugId: 'paracetamol', code: 'unknown_source' }),
    ]);
  });

  it('flags a test case whose expectation differs from the engine', () => {
    const d = drug();
    d.testCases[0]!.expect.amount = 6.2;
    const errors = checkContent([d], sources, 'tester', today);
    expect(errors[0]?.code).toBe('test_case_failed');
    expect(errors[0]?.detail).toContain('6.2');
    expect(errors[0]?.detail).toContain('6.3');
  });

  it('flags a test case whose capped flag differs', () => {
    const d = drug();
    d.testCases[0]!.expect.capped = true;
    expect(checkContent([d], sources, 'tester', today)[0]?.code).toBe('test_case_failed');
  });

  it('flags a test case the engine cannot calculate', () => {
    const d = drug();
    d.testCases[0]!.ageDays = 10;
    const errors = checkContent([d], sources, 'tester', today);
    expect(errors[0]?.code).toBe('test_case_failed');
    expect(errors[0]?.detail).toContain('neonate_v2');
  });

  it('flags unvalidated drugs only in release mode', () => {
    expect(checkContent([drug()], sources, 'tester', today)).toEqual([]);
    expect(checkContent([drug()], sources, 'release', today)[0]?.code).toBe('not_validated');
  });

  it('accepts validated drugs in release mode', () => {
    expect(checkContent([drug({ review: validated })], sources, 'release', today)).toEqual([]);
  });

  it('flags duplicate drug ids', () => {
    const errors = checkContent([drug(), drug()], sources, 'tester', today);
    expect(errors.map((e) => e.code)).toContain('duplicate_id');
  });

  it('flags overdue reviews as errors only in release mode', () => {
    const overdue = drug({ review: { ...validated, nextReviewAt: '2026-01-01' } });
    expect(checkContent([overdue], sources, 'release', today)[0]?.code).toBe('review_overdue');
    expect(checkContent([overdue], sources, 'tester', today)).toEqual([]);
  });
});
