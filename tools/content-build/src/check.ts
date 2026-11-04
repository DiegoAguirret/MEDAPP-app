import type { Drug, Source } from '@medapp/content-schema';
import { calculateDose } from '@medapp/dose-engine';

export type CheckErrorCode =
  'unknown_source' | 'test_case_failed' | 'not_validated' | 'duplicate_id' | 'review_overdue';

export interface CheckError {
  drugId: string;
  code: CheckErrorCode;
  detail: string;
}

const TOLERANCE = 0.01;
const close = (a: number, b: number): boolean => Math.abs(a - b) <= TOLERANCE;

/**
 * Comprueba la coherencia del contenido: fuentes existentes, casos clínicos
 * que coinciden con el motor, ids únicos y, en modo release, fichas validadas
 * y con revisión vigente.
 */
export function checkContent(
  drugs: Drug[],
  sources: Source[],
  mode: 'tester' | 'release',
  today: Date,
): CheckError[] {
  const errors: CheckError[] = [];
  const sourceIds = new Set(sources.map((s) => s.id));
  const seen = new Set<string>();

  for (const drug of drugs) {
    if (seen.has(drug.id)) {
      errors.push({ drugId: drug.id, code: 'duplicate_id', detail: `id repetido: ${drug.id}` });
    }
    seen.add(drug.id);

    for (const rule of drug.rules) {
      const noteSources = (rule.countryNotes ?? []).flatMap((n) => n.sourceIds);
      for (const sid of [...rule.sourceIds, ...noteSources]) {
        if (!sourceIds.has(sid)) {
          errors.push({
            drugId: drug.id,
            code: 'unknown_source',
            detail: `regla ${rule.id}: fuente desconocida ${sid}`,
          });
        }
      }
    }

    drug.testCases.forEach((tc, i) => {
      const rule = drug.rules.find((r) => r.id === tc.ruleId);
      const presentation = drug.presentations.find((p) => p.id === tc.presentationId);
      // parseDrug ya garantiza que existen; se comprueba por seguridad de tipos.
      if (rule === undefined || presentation === undefined) return;
      const result = calculateDose({
        rule,
        presentation,
        patient: { weightKg: tc.weightKg, ageDays: tc.ageDays },
        ...(tc.chosenMgPerKg === undefined ? {} : { chosenMgPerKg: tc.chosenMgPerKg }),
      });
      const label = `caso ${i + 1} (${tc.ruleId}, ${tc.weightKg} kg)`;
      if (result.status !== 'ok') {
        errors.push({
          drugId: drug.id,
          code: 'test_case_failed',
          detail: `${label}: no calculable (${result.reason})`,
        });
        return;
      }
      const capped = result.cappedBy !== null;
      const mismatch =
        !close(result.mgPerDose.chosen, tc.expect.mgPerDose) ||
        !close(result.amount.value, tc.expect.amount) ||
        result.amount.unit !== tc.expect.unit ||
        (tc.expect.capped !== undefined && tc.expect.capped !== capped);
      if (mismatch) {
        errors.push({
          drugId: drug.id,
          code: 'test_case_failed',
          detail:
            `${label}: esperado ${tc.expect.mgPerDose} mg → ${tc.expect.amount} ${tc.expect.unit}` +
            `${tc.expect.capped === undefined ? '' : ` (tope: ${tc.expect.capped})`}; ` +
            `obtenido ${result.mgPerDose.chosen} mg → ${result.amount.value} ${result.amount.unit} (tope: ${capped})`,
        });
      }
    });

    if (mode === 'release') {
      if (drug.review.status === 'borrador') {
        errors.push({
          drugId: drug.id,
          code: 'not_validated',
          detail: 'ficha en borrador (sin verificar)',
        });
      } else if (
        drug.review.nextReviewAt !== undefined &&
        new Date(`${drug.review.nextReviewAt}T00:00:00Z`) < today
      ) {
        errors.push({
          drugId: drug.id,
          code: 'review_overdue',
          detail: `revisión vencida el ${drug.review.nextReviewAt}`,
        });
      }
    }
  }
  return errors;
}
