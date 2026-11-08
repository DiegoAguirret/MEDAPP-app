import {
  dropsPerMinute,
  DROP_FACTORS,
  kdigoCategory,
  renalTierFor,
  schwartzEgfr,
  tierLabel,
} from './renal';

describe('TFG de Schwartz a pie de cama (Schwartz 2009)', () => {
  it('es 0.413 × talla (cm) / creatinina (mg/dL)', () => {
    expect(schwartzEgfr(100, 0.5)).toBeCloseTo(82.6, 5);
    expect(schwartzEgfr(140, 1.4)).toBeCloseTo(41.3, 5);
  });

  it('no calcula con datos imposibles', () => {
    expect(schwartzEgfr(0, 0.5)).toBeNull();
    expect(schwartzEgfr(100, 0)).toBeNull();
    expect(schwartzEgfr(100, -1)).toBeNull();
  });
});

describe('categorías de TFG de KDIGO 2012', () => {
  it.each([
    [120, 'G1'],
    [90, 'G1'],
    [89.9, 'G2'],
    [60, 'G2'],
    [59, 'G3a'],
    [45, 'G3a'],
    [44, 'G3b'],
    [30, 'G3b'],
    [29, 'G4'],
    [15, 'G4'],
    [14.9, 'G5'],
  ])('%s mL/min/1.73 m² → %s', (gfr, cat) => {
    expect(kdigoCategory(gfr).id).toBe(cat);
  });
});

describe('goteo en gotas por minuto', () => {
  it('es mL/h × factor del equipo / 60', () => {
    expect(dropsPerMinute(60, 60)).toBe(60);
    expect(dropsPerMinute(42, 20)).toBe(14);
    expect(dropsPerMinute(100, 15)).toBe(25);
  });

  it('redondea a gotas enteras', () => {
    expect(dropsPerMinute(37, 20)).toBe(12);
  });

  it('ofrece el microgotero y los macrogoteros comunes', () => {
    expect(DROP_FACTORS.map((f) => f.perMl)).toEqual([60, 20, 15, 10]);
  });
});

describe('tramo renal del paciente', () => {
  const tiers = [
    { gfrMin: 0, gfrMax: 20, text: 'niveles', sourceIds: ['a'] },
    { gfrMin: 20, gfrMax: 40, text: 'c/24 h', sourceIds: ['a'] },
    { gfrMin: 60, text: 'c/8 h', sourceIds: ['a'] },
  ];

  it('elige el tramo con el mínimo incluido y el máximo excluido', () => {
    expect(renalTierFor(tiers, 19.9)?.text).toBe('niveles');
    expect(renalTierFor(tiers, 20)?.text).toBe('c/24 h');
    expect(renalTierFor(tiers, 75)?.text).toBe('c/8 h');
  });

  it('no inventa un tramo donde la fuente no dice nada', () => {
    expect(renalTierFor(tiers, 50)).toBeNull();
  });

  it('rotula cada tramo', () => {
    expect(tierLabel(tiers[0]!)).toBe('< 20');
    expect(tierLabel(tiers[1]!)).toBe('20 a < 40');
    expect(tierLabel(tiers[2]!)).toBe('≥ 60');
  });
});
