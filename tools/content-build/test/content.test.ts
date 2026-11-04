import { calculateDose } from '@medapp/dose-engine';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { checkContent } from '../src/check.ts';
import { loadContent } from '../src/load.ts';

const content = loadContent(resolve(import.meta.dirname, '../../../content'));
const drug = (id: string) => {
  const d = content.drugs.find((x) => x.id === id);
  if (d === undefined) throw new Error(`missing ${id}`);
  return d;
};
const ruleOf = (drugId: string, ruleId: string) => {
  const r = drug(drugId).rules.find((x) => x.id === ruleId);
  if (r === undefined) throw new Error(`missing ${drugId}/${ruleId}`);
  return r;
};

describe('real content', () => {
  it('passes every clinical test case in tester mode', () => {
    expect(checkContent(content.drugs, content.sources, 'tester', new Date('2026-11-05'))).toEqual(
      [],
    );
  });

  it('does not allow high-dose amoxicillin for otitis before 6 months', () => {
    const r = calculateDose({
      rule: ruleOf('amoxicilina', 'oma-dosis-alta'),
      presentation: drug('amoxicilina').presentations[0]!,
      patient: { weightKg: 4, ageDays: 30 },
    });
    expect(r).toEqual({ status: 'not_calculable', reason: 'age_out_of_rule' });
  });

  it('does not allow streptococcal pharyngitis dosing before 3 years', () => {
    expect(ruleOf('amoxicilina', 'faringitis-estreptococica').ageMinDays).toBeGreaterThanOrEqual(
      1095,
    );
  });

  it('limits amoxicillin under 3 months to 30 mg/kg/day', () => {
    const r = ruleOf('amoxicilina', 'menores-3-meses');
    expect(r.ageMaxDays).toBeLessThanOrEqual(89);
    expect(r.amountMax).toBeLessThanOrEqual(30);
  });

  it('caps prednisolone at 20 mg under 2 years and 30 mg from 2 to 5 years', () => {
    const pred = drug('prednisolona');
    const sol = pred.presentations[0]!;
    const under2 = pred.rules.find((r) => r.ageMinDays <= 400 && (r.ageMaxDays ?? 0) >= 400);
    const twoToFive = pred.rules.find((r) => r.ageMinDays <= 1100 && (r.ageMaxDays ?? 0) >= 1100);
    expect(under2?.maxPerDoseMg).toBe(20);
    expect(twoToFive?.maxPerDoseMg).toBe(30);
    const r = calculateDose({
      rule: twoToFive!,
      presentation: sol,
      patient: { weightKg: 18, ageDays: 1100 },
      chosenMgPerKg: 2,
    });
    expect(r.status === 'ok' && r.mgPerDose.chosen).toBe(30);
  });

  it.each([
    ['ibuprofeno', 'tab-400'],
    ['ondansetron', 'tab-4'],
    ['azitromicina', 'tab-500'],
    ['metamizol', 'tab-500'],
  ])('does not split the non-scored %s %s', (drugId, presId) => {
    const p = drug(drugId).presentations.find((x) => x.id === presId);
    expect(p?.step).toBe(1);
  });
});
