import { BALLARD_SCORES, ballardWeeks } from './ballard';
import { findScore } from './neonatalScores';
import { scoreResult } from './scores';

describe('New Ballard Score (Ballard et al., J Pediatr 1991)', () => {
  it('tiene versión para niño y para niña con 12 criterios', () => {
    expect(BALLARD_SCORES.map((d) => d.id)).toEqual(['ballard-nino', 'ballard-nina']);
    for (const d of BALLARD_SCORES) expect(d.items).toHaveLength(12);
    expect(findScore('ballard-nina')?.items[11]?.label).toBe('Genitales (femeninos)');
  });

  it('copia los puntajes de la figura 1', () => {
    const d = findScore('ballard-nino');
    const item = (id: string) => d?.items.find((i) => i.id === id);
    expect(item('postura')?.options.map((o) => o.points)).toEqual([0, 1, 2, 3, 4]);
    expect(item('ventana')?.options.map((o) => o.points)).toEqual([-1, 0, 1, 2, 3, 4]);
    expect(item('popliteo')?.options.map((o) => o.points)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    expect(item('plantar')?.options.map((o) => o.points)).toEqual([-2, -1, 0, 1, 2, 3, 4]);
    expect(item('ojo-oreja')?.options.map((o) => o.points)).toEqual([-2, -1, 0, 1, 2, 3, 4]);
    expect(item('piel')?.options.map((o) => o.points)).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    expect(item('bufanda')?.options[0]?.label).toMatch(/cuello/);
    expect(item('talon-oreja')?.options[5]?.label).toMatch(/pliegue femoral/);
  });

  it('el máximo es 50, como la tabla de madurez', () => {
    for (const d of BALLARD_SCORES) expect(scoreResult(d, {}).max).toBe(50);
  });

  it('convierte el total con la tabla de madurez, sin interpolar', () => {
    expect(ballardWeeks(-10)).toBe('20 semanas');
    expect(ballardWeeks(40)).toBe('40 semanas');
    expect(ballardWeeks(50)).toBe('44 semanas');
    expect(ballardWeeks(23)).toBe('entre 32 y 34 semanas');
    expect(ballardWeeks(-12)).toBe('menos de 20 semanas (fuera de la tabla)');
  });

  it('cada total tiene su interpretación en las bandas', () => {
    const d = BALLARD_SCORES[0];
    if (!d) throw new Error('falta Ballard');
    for (let t = -12; t <= 50; t++) {
      expect(d.bands.some((b) => t >= b.min && t <= b.max)).toBe(true);
    }
  });
});
