import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/**
 * Puntajes clínicos (Apgar, Silverman-Anderson, Capurro…). Cada criterio, opción, punto y
 * umbral viene de una fuente verificada que se cita en `sources`; aquí no se inventa nada.
 */
export interface ScoreOption {
  label: string;
  points: number;
}
export interface ScoreItem {
  id: string;
  label: string;
  options: ScoreOption[];
}
export interface ScoreBand {
  /** Incluido. */
  min: number;
  /** Incluido. */
  max: number;
  label: string;
  tone: 'ok' | 'warning' | 'danger';
}
export interface ScoreDef {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
  items: ScoreItem[];
  bands: ScoreBand[];
  /** Sobre qué se interpreta: el total (por defecto) o el valor derivado de la fórmula. */
  bandsOn?: 'total' | 'derived';
  /** Valor derivado = (constante + total) / divisor, p. ej. la edad gestacional de Capurro. */
  formula?: { constant: number; divisor: number; unit: 'semanas' };
  /** Cómo y cuándo se aplica, tal como lo dice la fuente. */
  howTo?: string;
  sources: string[];
}

export interface ScoreResult {
  total: number;
  max: number;
  answered: number;
  complete: boolean;
  derived: { value: number; weeks: number; days: number; unit: 'semanas' } | null;
  band: ScoreBand | null;
}

export function scoreResult(
  def: ScoreDef,
  picks: Readonly<Record<string, number | undefined>>,
): ScoreResult {
  let total = 0;
  let answered = 0;
  let max = 0;
  for (const item of def.items) {
    max += Math.max(...item.options.map((o) => o.points));
    const p = picks[item.id];
    if (p !== undefined) {
      total += p;
      answered += 1;
    }
  }
  const complete = answered === def.items.length;
  let derived: ScoreResult['derived'] = null;
  if (complete && def.formula) {
    const daysTotal = def.formula.constant + total;
    const value = daysTotal / def.formula.divisor;
    derived = {
      value: Math.round(value * 10) / 10,
      weeks: Math.floor(daysTotal / def.formula.divisor),
      days: daysTotal % def.formula.divisor,
      unit: def.formula.unit,
    };
  }
  const on = def.bandsOn === 'derived' ? derived?.value : total;
  const band =
    complete && on !== undefined
      ? (def.bands.find((b) => on >= b.min && on <= b.max) ?? null)
      : null;
  return { total, max, answered, complete, derived, band };
}
