/**
 * Franjas de color por peso de las cintas de reanimación pediátrica (zonas Broselow–Luten,
 * rangos listados en WikEM). Solo es una referencia visual de qué paciente está en pantalla:
 * no reemplaza la cinta ni cambia ninguna dosis.
 */
export interface WeightZone {
  id: string;
  name: string;
  /** Incluido. */
  minKg: number;
  /** Excluido. */
  maxKg: number;
  fill: string;
  onFill: string;
  /** Rango tal como se lee en la cinta (kg enteros). */
  range: string;
  label: string;
}

const zone = (
  id: string,
  name: string,
  minKg: number,
  maxKg: number,
  fill: string,
  onFill: string,
): WeightZone => {
  const range = `${minKg}–${maxKg - 1} kg`;
  return { id, name, minKg, maxKg, fill, onFill, range, label: `Franja ${name} · ${range}` };
};

const INK = '#1B2430';
const WHITE = '#FFFFFF';

export const ZONES: readonly WeightZone[] = [
  zone('gris', 'gris', 3, 6, '#A3A9B1', INK),
  zone('rosado', 'rosada', 6, 8, '#F2A7BC', INK),
  zone('rojo', 'roja', 8, 10, '#D3302F', WHITE),
  zone('morado', 'morada', 10, 12, '#7B4FA0', WHITE),
  zone('amarillo', 'amarilla', 12, 15, '#F6C343', INK),
  zone('blanco', 'blanca', 15, 19, '#F4F4F2', INK),
  zone('azul', 'azul', 19, 24, '#1E6FD1', WHITE),
  zone('naranja', 'naranja', 24, 30, '#F2882B', INK),
  zone('verde', 'verde', 30, 37, '#2E9E5B', WHITE),
];

export function weightZone(kg: number): WeightZone | null {
  return ZONES.find((z) => kg >= z.minKg && kg < z.maxKg) ?? null;
}
