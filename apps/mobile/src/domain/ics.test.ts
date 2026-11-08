import { ICS_GROUPS } from './ics';

describe('corticoides inhalados (GINA 2025, Box 4-2 y Box 11-3)', () => {
  it('tiene los tres grupos de edad', () => {
    expect(ICS_GROUPS.map((g) => g.id)).toEqual(['0-5', '6-11', '12+']);
  });

  it('copia los valores de 6 a 11 años de la Box 4-2', () => {
    const g = ICS_GROUPS.find((x) => x.id === '6-11');
    const bud = g?.rows.find((r) => r.drug === 'Budesonida' && r.device.startsWith('DPI'));
    expect(bud).toMatchObject({ low: '100–200', medium: '>200–400', high: '>400' });
    const neb = g?.rows.find((r) => r.device === 'nebulizada');
    expect(neb).toMatchObject({ low: '250–500', medium: '>500–1000', high: '>1000' });
  });

  it('en menores de 5 años solo hay dosis baja y la edad con datos', () => {
    const g = ICS_GROUPS.find((x) => x.id === '0-5');
    const flu = g?.rows.find((r) => r.drug === 'Fluticasona propionato');
    expect(flu).toMatchObject({ low: '50', note: 'desde los 4 años' });
    expect(g?.rows.every((r) => r.medium === undefined && r.high === undefined)).toBe(true);
  });
});
