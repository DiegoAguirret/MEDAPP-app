import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { BUNDLE_JSON } from '../content/bundled';
import { emergencyItems } from './emergency';

const drugs = (JSON.parse(BUNDLE_JSON) as Bundle).drugs as Drug[];
const key = (i: { drug: Drug; rule: { id: string } }) => `${i.drug.id}/${i.rule.id}`;

describe('emergencyItems', () => {
  it('12 kg, 2 años: adrenalina IM 0.12 mL, diazepam rectal 1.2 mL, glucosa 60 mL', () => {
    const items = emergencyItems(drugs, new Set(), 12, 730);
    const byKey = new Map(items.map((i) => [key(i), i]));
    expect(byKey.get('adrenalina/anafilaxia-im')?.result.amount.value).toBe(0.12);
    expect(byKey.get('diazepam/convulsion-rectal')?.result.amount.value).toBe(1.2);
    expect(byKey.get('glucosa/hipoglucemia')?.result.amount.value).toBe(60);
  });

  it('only includes urgent schedules (repeatable or single), not scheduled oral rules', () => {
    const items = emergencyItems(drugs, new Set(), 12, 730);
    expect(items.every((i) => i.rule.intervalHours === undefined)).toBe(true);
    expect(items.some((i) => key(i) === 'salbutamol/crisis-nebulizado')).toBe(true);
    expect(items.some((i) => key(i) === 'salbutamol/vo-2-5-anos')).toBe(false);
  });

  it('skips rules outside the age band (diazepam IV 5 años o más at 2 years)', () => {
    const items = emergencyItems(drugs, new Set(), 12, 730);
    expect(items.some((i) => key(i) === 'diazepam/convulsion-iv-5-o-mas')).toBe(false);
    expect(items.some((i) => key(i) === 'diazepam/convulsion-iv-menor-5')).toBe(true);
  });

  it('hides recalled drugs', () => {
    const items = emergencyItems(drugs, new Set(['adrenalina']), 12, 730);
    expect(items.some((i) => i.drug.id === 'adrenalina')).toBe(false);
  });

  it('returns nothing for an invalid weight', () => {
    expect(emergencyItems(drugs, new Set(), 0, 730)).toEqual([]);
  });
});
