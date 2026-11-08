import { findScore } from './neonatalScores';
import { PEDIATRIC_SCORES } from './pediatricScores';
import { scoreResult } from './scores';

describe('Glasgow modificada para lactantes y niños (Manual MSD)', () => {
  it('tiene una versión para lactantes y otra para niños, de 3 a 15 puntos', () => {
    expect(PEDIATRIC_SCORES.map((d) => d.id)).toEqual(['glasgow-lactante', 'glasgow-nino']);
    for (const d of PEDIATRIC_SCORES) {
      expect(d.items.map((i) => i.options.length)).toEqual([4, 5, 6]);
      expect(scoreResult(d, {}).max).toBe(15);
    }
  });

  it('usa los textos de cada columna', () => {
    const lact = findScore('glasgow-lactante');
    const nino = findScore('glasgow-nino');
    expect(lact?.items[1]?.options[0]).toEqual({ label: 'Arrullos y balbuceos', points: 5 });
    expect(nino?.items[1]?.options[0]).toEqual({ label: 'Orientada y apropiada', points: 5 });
    expect(lact?.items[2]?.options[1]).toEqual({ label: 'Se retira al tocarlo', points: 5 });
    expect(nino?.items[2]?.options[1]).toEqual({
      label: 'Localiza el estímulo doloroso',
      points: 5,
    });
  });

  it('interpreta ≤ 8 y ≤ 12 como dice la tabla', () => {
    const d = PEDIATRIC_SCORES[0];
    if (!d) throw new Error('falta la escala');
    const band = (t: number) => d.bands.find((b) => t >= b.min && t <= b.max)?.label;
    expect(band(8)).toMatch(/intubación/);
    expect(band(12)).toMatch(/grave/);
    expect(band(13)).toBeDefined();
  });
});
