import { weightZone, ZONES } from './zones';

describe('weightZone (franjas Broselow–Luten, WikEM)', () => {
  it.each([
    [3, 'gris'],
    [5.9, 'gris'],
    [6, 'rosado'],
    [8, 'rojo'],
    [11.9, 'morado'],
    [12, 'amarillo'],
    [14.9, 'amarillo'],
    [15, 'blanco'],
    [19, 'azul'],
    [24, 'naranja'],
    [30, 'verde'],
    [36.9, 'verde'],
  ])('%s kg → %s', (kg, id) => {
    expect(weightZone(kg)?.id).toBe(id);
  });

  it('no asigna franja fuera de 3–36 kg', () => {
    expect(weightZone(2.9)).toBeNull();
    expect(weightZone(37)).toBeNull();
  });

  it('las 9 franjas son contiguas y en orden', () => {
    expect(ZONES).toHaveLength(9);
    for (let i = 1; i < ZONES.length; i++) expect(ZONES[i]!.minKg).toBe(ZONES[i - 1]!.maxKg);
  });

  it('etiqueta legible: «Franja amarilla · 12–14 kg»', () => {
    expect(weightZone(13)?.label).toBe('Franja amarilla · 12–14 kg');
  });
});
