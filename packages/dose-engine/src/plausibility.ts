/**
 * Bandas amplias de peso plausible por edad (kg). Sirven solo para detectar
 * errores de tipeo (p. ej. 45 kg en un lactante): nunca bloquean el cálculo.
 * PENDIENTE: validar con el médico tester (spec §9b.2).
 */
const BANDS: readonly { maxAgeDays: number; minKg: number; maxKg: number }[] = [
  { maxAgeDays: 89, minKg: 2, maxKg: 8 },
  { maxAgeDays: 179, minKg: 3, maxKg: 11 },
  { maxAgeDays: 364, minKg: 4.5, maxKg: 14 },
  { maxAgeDays: 729, minKg: 6, maxKg: 19 },
  { maxAgeDays: 1824, minKg: 8, maxKg: 27 },
  { maxAgeDays: 3284, minKg: 12, maxKg: 50 },
  { maxAgeDays: 4744, minKg: 18, maxKg: 85 },
  { maxAgeDays: 6569, minKg: 25, maxKg: 130 },
];
const ADULT_BAND = { minKg: 30, maxKg: 150 };

export function isWeightPlausible(weightKg: number, ageDays: number): boolean {
  const band = BANDS.find((b) => ageDays <= b.maxAgeDays) ?? ADULT_BAND;
  return weightKg >= band.minKg && weightKg <= band.maxKg;
}
