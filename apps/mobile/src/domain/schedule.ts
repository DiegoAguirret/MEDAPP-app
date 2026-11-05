import type { DoseRule } from '@medapp/content-schema';

type Schedule = Pick<DoseRule, 'intervalHours' | 'repeatMinutes' | 'once'>;

/** Pauta programada por horas (no urgencia ni dosis única). */
export function isScheduled(rule: Schedule): boolean {
  return rule.intervalHours !== undefined;
}

/** Texto de la pauta tal como se escribe en la indicación. */
export function scheduleText(rule: Schedule): string {
  if (rule.intervalHours !== undefined) return `cada ${rule.intervalHours} h`;
  if (rule.repeatMinutes !== undefined) {
    const { min, max } = rule.repeatMinutes;
    return min === max
      ? `repetir a los ${min} min si es necesario`
      : `repetir cada ${min}–${max} min si es necesario`;
  }
  return 'dosis única';
}
