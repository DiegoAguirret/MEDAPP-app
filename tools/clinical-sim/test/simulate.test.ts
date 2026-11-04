import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadContent } from '../../content-build/src/load.ts';
import { concentrationFromLabel, manualDose } from '../src/manual.ts';
import { simulate } from '../src/simulate.ts';

describe('concentrationFromLabel', () => {
  it.each([
    ['Suspensión 250 mg/5 mL', 50],
    ['Jarabe 120 mg/5 mL', 24],
    ['Gotas 100 mg/mL', 100],
    ['Solución oral 4 mg/5 mL', 0.8],
    ['Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina)', 80],
    ['Tableta 500 mg', 500],
    ['Gotas orales 500 mg/mL — 1 gota = 25 mg', 25],
    ['Solución oral 1 mg/mL (5 mg/5 mL)', 1],
  ])('%s → %s', (label, mg) => {
    expect(concentrationFromLabel(label)).toBeCloseTo(mg, 9);
  });
});

describe('manualDose (hand calculation)', () => {
  it('worked example: paracetamol 15 mg/kg, 10 kg, 120 mg/5 mL → 150 mg = 6.25 mL', () => {
    const r = manualDose(
      {
        id: 'r',
        indication: 'x',
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
      },
      {
        id: 'p',
        label: 'Jarabe 120 mg/5 mL',
        form: 'jarabe',
        mgPerUnit: 24,
        unit: 'mL',
        step: 0.1,
        brandsPE: [],
      },
      10,
    );
    expect(r).toEqual({ mgPerDose: 150, capped: false, exactAmount: 6.25 });
  });
});

describe('physician simulation over the real content', () => {
  const content = loadContent(resolve(import.meta.dirname, '../../../content'));
  const rows = simulate(content.drugs);

  it('covers every drug, rule and presentation with typical patients', () => {
    expect(rows.length).toBeGreaterThan(300);
  });

  it('has zero discrepancies between the app and the hand calculation', () => {
    const mismatches = rows.filter((r) => r.verdict === 'mismatch');
    expect(mismatches).toEqual([]);
  });
});

describe('the simulation catches deliberate errors', () => {
  const content = loadContent(resolve(import.meta.dirname, '../../../content'));
  const clone = () => structuredClone(content.drugs);

  it('detects a mistyped concentration (250 mg/5 mL entered as 25 mg/mL)', () => {
    const drugs = clone();
    const amox = drugs.find((d) => d.id === 'amoxicilina')!;
    amox.presentations.find((p) => p.id === 'susp-250-5')!.mgPerUnit = 25;
    expect(simulate(drugs).some((r) => r.verdict === 'mismatch')).toBe(true);
  });

  it('detects an engine that ignores the daily cap', () => {
    const drugs = clone();
    const para = drugs.find((d) => d.id === 'paracetamol')!;
    // Con tope diario menor al tope por toma × 4, el manual limita; si la app no, hay discrepancia.
    para.rules[0]!.maxPerDayMg = 1000;
    para.rules[0]!.maxPerDoseMg = 1000;
    const rows = simulate(drugs).filter(
      (r) => r.drug === 'paracetamol' && r.verdict !== 'not_applicable',
    );
    expect(rows.every((r) => r.verdict === 'ok')).toBe(true);
    expect(rows.some((r) => r.note === 'tope aplicado')).toBe(true);
  });
});
