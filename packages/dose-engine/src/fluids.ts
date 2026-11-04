import { formatNumber, roundDecimals } from './format.ts';
import type { CalcStep } from './types.ts';

const f = (n: number): string => formatNumber(n, { maxDecimals: 1 });
const MAX_MAINTENANCE_ML_DAY = 2400;

function requirePositive(...values: number[]): void {
  if (values.some((v) => !(v > 0))) throw new RangeError('Se requieren valores positivos');
}

/** Líquidos de mantenimiento (Holliday-Segar, 100/50/20 mL/kg/día), con tope de 2400 mL/día. */
export function hollidaySegar(weightKg: number): {
  mlPerDay: number;
  mlPerHour: number;
  steps: CalcStep[];
} {
  requirePositive(weightKg);
  const first = Math.min(weightKg, 10);
  const second = Math.min(Math.max(weightKg - 10, 0), 10);
  const rest = Math.max(weightKg - 20, 0);
  const raw = first * 100 + second * 50 + rest * 20;
  const mlPerDay = roundDecimals(Math.min(raw, MAX_MAINTENANCE_ML_DAY), 1);
  const steps: CalcStep[] = [
    {
      label: 'Primeros 10 kg',
      expression: `${f(first)} kg × 100 mL/kg`,
      result: `${f(first * 100)} mL`,
    },
    {
      label: 'Siguientes 10 kg',
      expression: `${f(second)} kg × 50 mL/kg`,
      result: `${f(second * 50)} mL`,
    },
    { label: 'Resto', expression: `${f(rest)} kg × 20 mL/kg`, result: `${f(rest * 20)} mL` },
  ];
  if (raw > MAX_MAINTENANCE_ML_DAY) {
    steps.push({ label: 'Tope aplicado', expression: 'Máximo 2400 mL/día', result: '2400 mL' });
  }
  const mlPerHour = roundDecimals(mlPerDay / 24, 1);
  steps.push({
    label: 'Por hora',
    expression: `${f(mlPerDay)} mL ÷ 24 h`,
    result: `${f(mlPerHour)} mL/h`,
  });
  return { mlPerDay, mlPerHour, steps };
}

/** Superficie corporal (Mosteller): √(talla cm × peso kg / 3600), en m² con 2 decimales. */
export function bsaMosteller(weightKg: number, heightCm: number): number {
  requirePositive(weightKg, heightCm);
  return roundDecimals(Math.sqrt((heightCm * weightKg) / 3600), 2);
}

export interface FluidPhase {
  ml: number;
  minutes: number;
  fluid: string;
}

const ISOTONIC = 'Lactato de Ringer o NaCl 0.9 %';

/**
 * Planes de rehidratación B (SRO) y C (endovenoso), según la OMS.
 * PENDIENTE: contrastar con la norma técnica vigente del MINSA (EDA).
 */
export function dehydrationPlan(
  plan: 'B' | 'C',
  weightKg: number,
  ageDays: number,
): { phases: FluidPhase[]; steps: CalcStep[] } {
  requirePositive(weightKg);
  if (!(Number.isFinite(ageDays) && ageDays >= 0)) throw new RangeError('Edad inválida');
  if (plan === 'B') {
    const ml = roundDecimals(weightKg * 75, 0);
    return {
      phases: [{ ml, minutes: 240, fluid: 'SRO' }],
      steps: [
        { label: 'SRO en 4 h', expression: `${f(weightKg)} kg × 75 mL/kg`, result: `${f(ml)} mL` },
      ],
    };
  }
  const infant = ageDays < 365;
  const first = roundDecimals(weightKg * 30, 0);
  const second = roundDecimals(weightKg * 70, 0);
  const [m1, m2] = infant ? [60, 300] : [30, 150];
  return {
    phases: [
      { ml: first, minutes: m1, fluid: ISOTONIC },
      { ml: second, minutes: m2, fluid: ISOTONIC },
    ],
    steps: [
      {
        label: `Fase 1 (${m1} min)`,
        expression: `${f(weightKg)} kg × 30 mL/kg`,
        result: `${f(first)} mL`,
      },
      {
        label: `Fase 2 (${m2} min)`,
        expression: `${f(weightKg)} kg × 70 mL/kg`,
        result: `${f(second)} mL`,
      },
    ],
  };
}
