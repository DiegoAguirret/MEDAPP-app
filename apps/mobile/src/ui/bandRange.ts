const num = (n: number) => (n < 0 ? `−${-n}` : `${n}`);

/** Texto del rango de puntos de una banda: «40», «0–3» o «−12 a −11». */
export function bandRange({ min, max }: { min: number; max: number }): string {
  if (min === max) return num(min);
  return min < 0 || max < 0 ? `${num(min)} a ${num(max)}` : `${min}–${max}`;
}
