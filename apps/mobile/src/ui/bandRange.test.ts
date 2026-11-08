import { bandRange } from './bandRange';

describe('rango de una banda de interpretación', () => {
  it('muestra un solo número si la banda es de un punto', () => {
    expect(bandRange({ min: 40, max: 40 })).toBe('40');
    expect(bandRange({ min: -10, max: -10 })).toBe('−10');
  });

  it('usa guion entre positivos y «a» si hay negativos', () => {
    expect(bandRange({ min: 0, max: 3 })).toBe('0–3');
    expect(bandRange({ min: -12, max: -11 })).toBe('−12 a −11');
    expect(bandRange({ min: -9, max: -6 })).toBe('−9 a −6');
  });
});
