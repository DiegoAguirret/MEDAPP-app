import type { DoseRule, Drug, Presentation } from '@medapp/content-schema';
import { calculateDose, type DoseResult } from '@medapp/dose-engine';

export interface EmergencyItem {
  drug: Drug;
  rule: DoseRule;
  presentation: Presentation;
  result: Extract<DoseResult, { status: 'ok' }>;
}

/**
 * Hoja de urgencias: para un peso y una edad, todas las dosis de rescate (reglas repetibles o de
 * dosis única de los fármacos marcados como urgencia) que aplican al paciente, con la primera
 * presentación permitida. Las reglas fuera de edad o peso no aparecen.
 */
export function emergencyItems(
  drugs: Drug[],
  recalled: Set<string>,
  weightKg: number,
  ageDays: number,
): EmergencyItem[] {
  if (!(weightKg > 0)) return [];
  const items: EmergencyItem[] = [];
  for (const drug of drugs) {
    if (drug.emergency !== true || recalled.has(drug.id)) continue;
    for (const rule of drug.rules) {
      // Solo bolos de urgencia: ni pautas programadas ni infusiones continuas.
      if (rule.intervalHours !== undefined || rule.continuous === true) continue;
      const presentation = drug.presentations.find(
        (p) => rule.presentationIds === undefined || rule.presentationIds.includes(p.id),
      );
      if (!presentation) continue;
      const result = calculateDose({
        rule,
        presentation,
        patient: { weightKg, ageDays },
        doseUnit: drug.doseUnit ?? 'mg',
      });
      if (result.status === 'ok') items.push({ drug, rule, presentation, result });
    }
  }
  return items;
}
