/**
 * Función renal y goteo.
 *
 * - TFG «a pie de cama» de Schwartz: Schwartz GJ, Muñoz A, Schneider MF, et al. New equations to estimate
 *   GFR in children with CKD. J Am Soc Nephrol 2009;20:629–637 (PubMed 19158356):
 *   TFG (mL/min/1.73 m²) = 0.413 × talla (cm) / creatinina sérica (mg/dL). Se derivó en niños de 1 a 16
 *   años con enfermedad renal crónica (cohorte CKiD).
 * - Categorías de TFG: KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of CKD,
 *   recomendación 1.2.3 (tabla 5).
 * - Goteo: gotas/min = mL/h × gotas por mL del equipo / 60. El factor viene impreso en el equipo.
 */

export const SCHWARTZ_SOURCE =
  'Schwartz GJ et al. New equations to estimate GFR in children with CKD. J Am Soc Nephrol 2009;20:629–637. Categorías: KDIGO 2012, recomendación 1.2.3.';

export function schwartzEgfr(heightCm: number, creatinineMgDl: number): number | null {
  if (!(heightCm > 0) || !(creatinineMgDl > 0)) return null;
  return (0.413 * heightCm) / creatinineMgDl;
}

export interface KdigoCategory {
  id: 'G1' | 'G2' | 'G3a' | 'G3b' | 'G4' | 'G5';
  label: string;
  range: string;
  tone: 'ok' | 'warning' | 'danger';
}

const CATEGORIES: (KdigoCategory & { min: number })[] = [
  { id: 'G1', min: 90, label: 'Normal o alta', range: '≥ 90', tone: 'ok' },
  { id: 'G2', min: 60, label: 'Levemente disminuida', range: '60–89', tone: 'ok' },
  { id: 'G3a', min: 45, label: 'Leve a moderadamente disminuida', range: '45–59', tone: 'warning' },
  {
    id: 'G3b',
    min: 30,
    label: 'Moderada a gravemente disminuida',
    range: '30–44',
    tone: 'warning',
  },
  { id: 'G4', min: 15, label: 'Gravemente disminuida', range: '15–29', tone: 'danger' },
  { id: 'G5', min: 0, label: 'Falla renal', range: '< 15', tone: 'danger' },
];

export function kdigoCategory(gfr: number): KdigoCategory {
  const found = CATEGORIES.find((c) => gfr >= c.min) ?? CATEGORIES[CATEGORIES.length - 1];
  if (!found) throw new Error('sin categorías');
  return { id: found.id, label: found.label, range: found.range, tone: found.tone };
}

/** Gotas por mL de los equipos: microgotero y macrogoteros comunes. */
export const DROP_FACTORS = [
  { perMl: 60, label: 'Microgotero (60 gotas/mL)' },
  { perMl: 20, label: 'Macrogotero 20 gotas/mL' },
  { perMl: 15, label: 'Macrogotero 15 gotas/mL' },
  { perMl: 10, label: 'Macrogotero 10 gotas/mL' },
] as const;

export function dropsPerMinute(mlPerHour: number, dropsPerMl: number): number {
  return Math.round((mlPerHour * dropsPerMl) / 60);
}

/** Tramo de ajuste renal de una ficha (umbrales tal como los dan sus fuentes). */
export interface RenalTierLike {
  gfrMin: number;
  gfrMax?: number;
  text: string;
  sourceIds: string[];
}

/** Tramo que corresponde a la TFG o depuración del paciente; null si la fuente no dice nada. */
export function renalTierFor<T extends RenalTierLike>(tiers: readonly T[], gfr: number): T | null {
  return tiers.find((t) => gfr >= t.gfrMin && (t.gfrMax === undefined || gfr < t.gfrMax)) ?? null;
}

export function tierLabel(t: RenalTierLike): string {
  if (t.gfrMax === undefined) return `≥ ${t.gfrMin}`;
  if (t.gfrMin === 0) return `< ${t.gfrMax}`;
  return `${t.gfrMin} a < ${t.gfrMax}`;
}
