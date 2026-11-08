import { VACCINE_NOTES, VISITS, visitsForAge } from './vaccines';

describe('esquema nacional de inmunizaciones (NTS N.° 246-MINSA/DGIESP-2026)', () => {
  it('tiene las visitas de la tabla 6.2.2 y del adolescente en orden', () => {
    expect(VISITS.map((v) => v.label)).toEqual([
      'Recién nacido',
      '2 meses',
      '4 meses',
      '6 meses',
      '1 a 6 meses',
      '7 meses',
      '12 meses',
      '15 meses',
      '18 meses',
      '2 años',
      '3 años',
      '4 años',
      '5 a 11 años',
      '9 a 11 años',
      '12 a 17 años',
      '14 a 17 años',
    ]);
  });

  it('copia las vacunas y dosis de los 12 meses', () => {
    const v = VISITS.find((x) => x.label === '12 meses');
    expect(v?.vaccines.map((x) => `${x.name}: ${x.dose}`)).toEqual([
      'Sarampión, Paperas, Rubéola (SPR): 1.ª dosis',
      'Neumococo: 3.ª dosis',
      'Varicela: 1.ª dosis',
      'Influenza pediátrica: Dosis única',
    ]);
  });

  it('a los 4 meses toca la 2.ª dosis y la siguiente visita es la de 6 meses', () => {
    const r = visitsForAge(4);
    expect(r.current.map((v) => v.label)).toEqual(['4 meses', '1 a 6 meses']);
    expect(r.next?.label).toBe('6 meses');
  });

  it('a los 10 años aplican los rangos de 5 a 11 y de 9 a 11 años', () => {
    const r = visitsForAge(120);
    expect(r.current.map((v) => v.label)).toEqual(['5 a 11 años', '9 a 11 años']);
  });

  it('trae las 4 notas de la tabla', () => {
    expect(VACCINE_NOTES).toHaveLength(4);
    expect(VACCINE_NOTES[3]).toMatch(/Varicela/);
  });
});
