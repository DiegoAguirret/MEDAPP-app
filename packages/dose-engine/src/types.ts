import type { DoseRule, Presentation } from '@medapp/content-schema';

export interface Patient {
  weightKg: number;
  ageDays: number;
}

export interface CalculateInput {
  rule: DoseRule;
  presentation: Presentation;
  patient: Patient;
  /**
   * Valor elegido por el médico dentro del rango de la regla, en la misma
   * unidad que `amountMin`/`amountMax` (mg/kg/dosis, mg/kg/día o mg si es por edad).
   */
  chosenMgPerKg?: number;
  /** Unidad de la dosis en los pasos del cálculo (por defecto mg; UI para penicilinas, nistatina). */
  doseUnit?: 'mg' | 'UI';
}

export interface CalcStep {
  label: string;
  expression: string;
  result: string;
}

export type Warning =
  'weight_implausible' | 'rounding_exceeds_5pct' | 'obesity_check' | 'capped_adult_max';

export type NotCalculableReason =
  | 'neonate_v2'
  | 'invalid_weight'
  | 'invalid_age'
  | 'age_out_of_rule'
  | 'weight_out_of_rule'
  | 'choice_out_of_range'
  | 'presentation_not_allowed';

export type DoseResult =
  | { status: 'not_calculable'; reason: NotCalculableReason }
  | {
      status: 'ok';
      mgPerDose: { min: number; max: number; chosen: number };
      mgPerDay: number;
      dosesPerDay: number;
      cappedBy: 'per_dose' | 'per_day' | null;
      amount: { value: number; exact: number; unit: string; errorPct: number };
      steps: CalcStep[];
      warnings: Warning[];
    };
