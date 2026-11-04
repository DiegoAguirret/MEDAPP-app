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
