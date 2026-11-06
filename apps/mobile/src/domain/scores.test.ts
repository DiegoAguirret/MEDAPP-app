import { scoreResult, type ScoreDef } from './scores';

// Definición de prueba (no clínica): solo ejercita el cálculo.
const demo: ScoreDef = {
  id: 'demo',
  title: 'Demo',
  subtitle: 'Prueba',
  icon: 'heart-outline',
  items: [
    {
      id: 'a',
      label: 'A',
      options: [
        { label: 'a0', points: 0 },
        { label: 'a2', points: 2 },
      ],
    },
    {
      id: 'b',
      label: 'B',
      options: [
        { label: 'b0', points: 0 },
        { label: 'b1', points: 1 },
      ],
    },
  ],
  bands: [
    { min: 0, max: 1, label: 'Bajo', tone: 'danger' },
    { min: 2, max: 3, label: 'Alto', tone: 'ok' },
  ],
  sources: ['Fuente de prueba'],
};

describe('scoreResult', () => {
  it('suma los puntos elegidos y dice cuántos criterios faltan', () => {
    const r = scoreResult(demo, { a: 2 });
    expect(r.total).toBe(2);
    expect(r.answered).toBe(1);
    expect(r.complete).toBe(false);
    expect(r.band).toBeNull();
  });

  it('con todos los criterios, da el total, el máximo y la interpretación', () => {
    const r = scoreResult(demo, { a: 2, b: 1 });
    expect(r).toMatchObject({ total: 3, max: 3, complete: true });
    expect(r.band?.label).toBe('Alto');
  });

  it('convierte el total con una fórmula (constante + total) / divisor, redondeando a semanas y días', () => {
    const withFormula: ScoreDef = {
      ...demo,
      formula: { constant: 200, divisor: 7, unit: 'semanas' },
    };
    const r = scoreResult(withFormula, { a: 2, b: 1 });
    // (200 + 3) / 7 = 29 semanas exactas
    expect(r.derived).toEqual({ value: 29, weeks: 29, days: 0, unit: 'semanas' });
    const r2 = scoreResult(withFormula, { a: 2, b: 0 });
    // 202 días = 28 semanas y 6 días
    expect(r2.derived).toMatchObject({ weeks: 28, days: 6 });
  });

  it('la interpretación puede ir sobre el valor derivado', () => {
    const def: ScoreDef = {
      ...demo,
      formula: { constant: 200, divisor: 7, unit: 'semanas' },
      bandsOn: 'derived',
      bands: [
        { min: 0, max: 28.99, label: 'Menor', tone: 'warning' },
        { min: 29, max: 99, label: 'Mayor', tone: 'ok' },
      ],
    };
    expect(scoreResult(def, { a: 2, b: 1 }).band?.label).toBe('Mayor');
    expect(scoreResult(def, { a: 2, b: 0 }).band?.label).toBe('Menor');
  });
});
