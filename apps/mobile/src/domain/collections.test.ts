import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { BUNDLE_JSON } from '../content/bundled';
import { collectionDrugs, COLLECTIONS, isCollection } from './collections';

const drugs = (JSON.parse(BUNDLE_JSON) as Bundle).drugs as Drug[];
const ids = (list: Drug[]) => list.map((d) => d.id);

describe('colecciones del inicio', () => {
  it('infusiones: solo las fichas con alguna regla de infusión continua', () => {
    const list = ids(collectionDrugs('infusiones', drugs));
    expect(list).toEqual(expect.arrayContaining(['norepinefrina', 'alprostadil', 'adrenalina']));
    expect(list).not.toContain('paracetamol');
    expect(
      collectionDrugs('infusiones', drugs).every((d) => d.rules.some((r) => r.continuous)),
    ).toBe(true);
  });

  it('neonatos: solo las fichas con alguna regla neonatal', () => {
    const list = ids(collectionDrugs('neonatos', drugs));
    expect(list).toEqual(expect.arrayContaining(['cafeina-citrato', 'gentamicina']));
    expect(list).not.toContain('metilfenidato');
  });

  it('respeta las fichas retiradas y ordena de la A a la Z', () => {
    const list = collectionDrugs('infusiones', drugs, new Set(['adrenalina']));
    expect(ids(list)).not.toContain('adrenalina');
    const names = list.map((d) => d.name);
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, 'es')));
  });

  it('reconoce sus ids y tiene título para cada una', () => {
    expect(isCollection('infusiones')).toBe(true);
    expect(isCollection('antibiotico')).toBe(false);
    expect(COLLECTIONS.infusiones.title).toBe('Infusiones continuas');
  });
});
