export interface FormatOptions {
  maxDecimals?: number;
  decimalSeparator?: '.' | ',';
}

/** Redondeo decimal sin artefactos binarios (1.005 → 1.01). */
export function roundDecimals(value: number, decimals: number): number {
  return Number(`${Math.round(Number(`${value}e${decimals}`))}e-${decimals}`);
}

/**
 * Formato clínico seguro: sin ceros finales, con cero a la izquierda
 * y sin separador de miles (para no confundirlo con el decimal).
 */
export function formatNumber(value: number, opts: FormatOptions = {}): string {
  const { maxDecimals = 2, decimalSeparator = '.' } = opts;
  const text = String(roundDecimals(value, maxDecimals));
  return decimalSeparator === '.' ? text : text.replace('.', decimalSeparator);
}

/**
 * Formato para pasos y resultados clínicos: 3 cifras significativas por debajo
 * de 1 (0.005, 0.0123) y hasta 2 decimales a partir de 1. Nunca muestra 0 para
 * un valor positivo.
 */
export function formatClinical(value: number, decimalSeparator: '.' | ',' = '.'): string {
  const n = Math.abs(value) < 1 ? Number(value.toPrecision(3)) : roundDecimals(value, 2);
  const [int = '', dec] = String(n).split('.');
  // Desde 10 000 (p. ej. 200 000 UI), miles con espacio fino que no se corta: nunca punto ni coma.
  const grouped = Math.abs(n) >= 10000 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : int;
  return dec === undefined ? grouped : `${grouped}${decimalSeparator}${dec}`;
}
