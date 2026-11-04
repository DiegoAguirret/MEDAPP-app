export { calculateDose, MIN_AGE_DAYS, MAX_WEIGHT_KG } from './calculate.ts';
export { formatNumber, roundDecimals, type FormatOptions } from './format.ts';
export { isWeightPlausible } from './plausibility.ts';
export { roundToStep, type RoundingResult } from './rounding.ts';
export type {
  CalcStep,
  CalculateInput,
  DoseResult,
  NotCalculableReason,
  Patient,
  Warning,
} from './types.ts';
