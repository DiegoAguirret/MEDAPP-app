import {
  correctedAgeDays,
  evaluateMilestones,
  milestonesToCheck,
  PAUTAS,
  pautaForAgeDays,
} from './development';

describe('hitos del desarrollo (NTS 238, Anexo 10)', () => {
  it('tiene las 8 pautas de la Tabla 2 con 5 áreas', () => {
    expect(PAUTAS.map((p) => p.id)).toEqual(['rn', '3', '6', '9', '12', '18', '24', '30']);
    const rn = PAUTAS[0];
    expect(rn?.milestones.map((m) => m.area)).toEqual([
      'Motor grueso',
      'Motor fino',
      'Social',
      'Cognitivo',
      'Habla',
    ]);
    expect(PAUTAS.find((p) => p.id === '30')?.milestones.map((m) => m.name)).toEqual([
      'Obedece',
      'Oraciones',
    ]);
  });

  it('elige la pauta según la edad, como la tabla de la norma', () => {
    const d = (months: number) => Math.round(months * 30.4375);
    expect(pautaForAgeDays(18)?.id).toBe('rn');
    expect(pautaForAgeDays(d(2))?.id).toBe('rn');
    expect(pautaForAgeDays(d(3))?.id).toBe('3');
    expect(pautaForAgeDays(d(5) + 20)?.id).toBe('3');
    expect(pautaForAgeDays(d(15))?.id).toBe('12');
    expect(pautaForAgeDays(d(29) + 10)?.id).toBe('24');
    expect(pautaForAgeDays(d(36))?.id).toBe('30');
    expect(pautaForAgeDays(d(37))).toBeNull();
  });

  it('corrige la edad en prematuros menores de 2 años (Tabla 1)', () => {
    // Ejemplo de la norma: 130 días, 32 semanas → 74 días.
    expect(correctedAgeDays(130, 32)).toBe(74);
    expect(correctedAgeDays(130, 38)).toBe(130);
    expect(correctedAgeDays(800, 30)).toBe(800);
  });

  it('se evalúan la pauta de la edad y todas las anteriores', () => {
    const items = milestonesToCheck('6');
    expect(items.some((m) => m.name === 'Postura fetal')).toBe(true);
    expect(items.some((m) => m.name === 'Abraza')).toBe(true);
    expect(items.some((m) => m.name === 'Se sienta')).toBe(false);
  });

  it('interpreta: todos logrados, un hito no logrado y dos o más', () => {
    expect(evaluateMilestones(0).label).toBe('Normal');
    expect(evaluateMilestones(1).label).toBe('Hallazgo positivo: 1 hito no logrado');
    expect(evaluateMilestones(1).action).toMatch(/seguimiento al mes/);
    expect(evaluateMilestones(2).label).toBe('Hallazgo positivo: 2 o más hitos no logrados');
    expect(evaluateMilestones(3).action).toMatch(/EDI/);
  });
});
