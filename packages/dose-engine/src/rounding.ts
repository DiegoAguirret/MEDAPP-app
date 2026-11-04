import { roundDecimals } from './format.ts';

export interface RoundingResult {
  /** Cantidad a administrar. Si el paso más cercano erraría > 5 %, es el valor exacto. */
  value: number;
  exact: number;
  /** Error porcentual del paso medible más cercano respecto del valor exacto. */
  errorPct: number;
  exceeds5pct: boolean;
}

const EPS = 1e-9;
const MAX_ERROR_PCT = 5;

/** Redondea `exactAmount` al paso medible sin superar nunca `maxAmount`. */
export function roundToStep(exactAmount: number, step: number, maxAmount: number): RoundingResult {
  if (!(exactAmount > 0) || !(step > 0) || !(maxAmount > 0)) {
    throw new RangeError('roundToStep requiere valores positivos');
  }
  let steps = Math.round(exactAmount / step + EPS);
  let candidate = roundDecimals(steps * step, 6);
  if (candidate > maxAmount + EPS) {
    steps = Math.floor(exactAmount / step + EPS);
    candidate = roundDecimals(steps * step, 6);
  }
  const errorPct = roundDecimals((Math.abs(candidate - exactAmount) / exactAmount) * 100, 2);
  const exceeds5pct = errorPct > MAX_ERROR_PCT;
  const value = exceeds5pct ? Math.min(toSignificant(exactAmount), maxAmount) : candidate;
  return { value, exact: exactAmount, errorPct, exceeds5pct };
}

/** Valor exacto con 3 cifras significativas (error de presentación < 0.5 %). */
function toSignificant(value: number): number {
  return Number(value.toPrecision(3));
}
