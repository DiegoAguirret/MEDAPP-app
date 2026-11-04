import type { Drug } from '@medapp/content-schema';
import { calculateDose } from '@medapp/dose-engine';
import { concentrationFromLabel, manualDose } from './manual.ts';

/** Pacientes típicos de consulta (peso medio aproximado por edad) más extremos. */
export const PATIENTS: readonly { label: string; ageDays: number; weightKg: number }[] = [
  { label: '1 mes', ageDays: 30, weightKg: 4.2 },
  { label: '2 meses', ageDays: 60, weightKg: 5.1 },
  { label: '4 meses', ageDays: 120, weightKg: 6.4 },
  { label: '6 meses', ageDays: 183, weightKg: 7.6 },
  { label: '9 meses', ageDays: 274, weightKg: 8.6 },
  { label: '1 año', ageDays: 365, weightKg: 9.6 },
  { label: '18 meses', ageDays: 548, weightKg: 10.9 },
  { label: '2 años', ageDays: 730, weightKg: 12.2 },
  { label: '3 años', ageDays: 1095, weightKg: 14.3 },
  { label: '4 años', ageDays: 1460, weightKg: 16.3 },
  { label: '5 años', ageDays: 1825, weightKg: 18.3 },
  { label: '6 años', ageDays: 2190, weightKg: 20.5 },
  { label: '8 años', ageDays: 2920, weightKg: 25.6 },
  { label: '10 años', ageDays: 3650, weightKg: 32 },
  { label: '12 años', ageDays: 4380, weightKg: 40 },
  { label: '14 años', ageDays: 5110, weightKg: 50 },
  { label: '16 años', ageDays: 5840, weightKg: 58 },
  { label: '17 años, obeso', ageDays: 6205, weightKg: 95 },
];

export type Verdict = 'ok' | 'mismatch' | 'not_applicable';

export interface SimRow {
  drug: string;
  rule: string;
  presentation: string;
  patient: string;
  weightKg: number;
  verdict: Verdict;
  manualMg: number | null;
  appMg: number | null;
  manualAmount: number | null;
  appAmount: number | null;
  unit: string;
  note: string;
}

const MG_TOLERANCE = 1e-6;
const AMOUNT_TOLERANCE_PCT = 5;

export function simulate(drugs: Drug[]): SimRow[] {
  const rows: SimRow[] = [];
  for (const drug of drugs) {
    for (const rule of drug.rules) {
      const presentations = drug.presentations.filter(
        (p) => rule.presentationIds === undefined || rule.presentationIds.includes(p.id),
      );
      for (const pres of presentations) {
        const labelConc = concentrationFromLabel(pres.label);
        for (const pt of PATIENTS) {
          const base = {
            drug: drug.id,
            rule: rule.id,
            presentation: pres.label,
            patient: pt.label,
            weightKg: pt.weightKg,
            unit: pres.unit,
          };
          const inAge =
            pt.ageDays >= Math.max(rule.ageMinDays, 29) &&
            (rule.ageMaxDays === undefined || pt.ageDays <= rule.ageMaxDays);
          const app = calculateDose({
            rule,
            presentation: pres,
            patient: { weightKg: pt.weightKg, ageDays: pt.ageDays },
          });
          if (!inAge) {
            rows.push({
              ...base,
              verdict: app.status === 'not_calculable' ? 'not_applicable' : 'mismatch',
              manualMg: null,
              appMg: app.status === 'ok' ? app.mgPerDose.chosen : null,
              manualAmount: null,
              appAmount: app.status === 'ok' ? app.amount.value : null,
              note:
                app.status === 'not_calculable'
                  ? `fuera de edad: la app no calcula (${app.reason})`
                  : 'ERROR: la app calculó fuera del rango de edad',
            });
            continue;
          }
          const manual = manualDose(rule, pres, pt.weightKg);
          const problems: string[] = [];
          if (labelConc === null || Math.abs(labelConc - pres.mgPerUnit) > 1e-9) {
            problems.push(
              `concentración de la etiqueta (${labelConc}) ≠ mgPerUnit (${pres.mgPerUnit})`,
            );
          }
          if (app.status !== 'ok') {
            problems.push(`la app no calculó (${app.reason})`);
          } else {
            if (Math.abs(app.mgPerDose.chosen - manual.mgPerDose) > MG_TOLERANCE) {
              problems.push('mg distintos');
            }
            if ((app.cappedBy !== null) !== manual.capped) problems.push('tope distinto');
            const errPct =
              (Math.abs(app.amount.value - manual.exactAmount) / manual.exactAmount) * 100;
            if (errPct > AMOUNT_TOLERANCE_PCT + 1e-9)
              problems.push(`volumen difiere ${errPct.toFixed(1)} %`);
            if (app.amount.value * pres.mgPerUnit > rule.maxPerDoseMg + MG_TOLERANCE) {
              problems.push('la cantidad supera la dosis máxima');
            }
          }
          rows.push({
            ...base,
            verdict: problems.length === 0 ? 'ok' : 'mismatch',
            manualMg: manual.mgPerDose,
            appMg: app.status === 'ok' ? app.mgPerDose.chosen : null,
            manualAmount: manual.exactAmount,
            appAmount: app.status === 'ok' ? app.amount.value : null,
            note:
              problems.join('; ') ||
              (app.status === 'ok' && app.warnings.includes('rounding_exceeds_5pct')
                ? 'no medible con esta presentación: se muestra el valor exacto'
                : manual.capped
                  ? 'tope aplicado'
                  : ''),
          });
        }
      }
    }
  }
  return rows;
}
