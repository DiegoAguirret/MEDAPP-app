import type { DoseRule } from '@medapp/content-schema';
import { isScheduled, scheduleText } from './schedule';

const base = { intervalHours: undefined } as unknown as DoseRule;

describe('scheduleText', () => {
  it('programada: «cada 6 h»', () => {
    expect(scheduleText({ ...base, intervalHours: 6 })).toBe('cada 6 h');
  });
  it('repetible: «repetir cada 5–15 min si es necesario»', () => {
    expect(scheduleText({ ...base, repeatMinutes: { min: 5, max: 15 } })).toBe(
      'repetir cada 5–15 min si es necesario',
    );
  });
  it('repetible con intervalo fijo: «repetir a los 10 min si es necesario»', () => {
    expect(scheduleText({ ...base, repeatMinutes: { min: 10, max: 10 } })).toBe(
      'repetir a los 10 min si es necesario',
    );
  });
  it('dosis única', () => {
    expect(scheduleText({ ...base, once: true })).toBe('dosis única');
  });
  it('isScheduled solo para pautas por horas', () => {
    expect(isScheduled({ ...base, intervalHours: 8 })).toBe(true);
    expect(isScheduled({ ...base, once: true })).toBe(false);
  });
});
