import { bpUrgent, classifyBp, HEIGHT_PERCENTILES, nearestHeightColumn, thresholdsFor } from './bp';

describe('presión arterial pediátrica (AAP 2017, Tablas 3, 4 y 5)', () => {
  it('elige la columna de talla más cercana', () => {
    expect(nearestHeightColumn('male', 1, 82.4)).toBe(3);
    expect(nearestHeightColumn('male', 1, 70)).toBe(0);
    expect(nearestHeightColumn('male', 1, 99)).toBe(6);
    expect(HEIGHT_PERCENTILES[3]).toBe(50);
  });

  it('lee los percentiles de la tabla', () => {
    const t = thresholdsFor('male', 10, 3);
    expect(t?.p90).toEqual({ s: 112, d: 74 });
    expect(t?.p95).toEqual({ s: 116, d: 77 });
    expect(t?.p95p12).toEqual({ s: 128, d: 89 });
    expect(thresholdsFor('female', 10, 3)?.p95).toEqual({ s: 116, d: 76 });
  });

  it('de 1 a 12 años usa percentiles con el límite fijo si es menor', () => {
    // Niño de 10 años, columna p50: p90 112/74, p95 116/77, p95+12 128/89.
    expect(classifyBp({ sex: 'male', ageYears: 10, column: 3, sbp: 110, dbp: 70 }).category).toBe(
      'normal',
    );
    expect(classifyBp({ sex: 'male', ageYears: 10, column: 3, sbp: 113, dbp: 70 }).category).toBe(
      'elevated',
    );
    expect(classifyBp({ sex: 'male', ageYears: 10, column: 3, sbp: 116, dbp: 70 }).category).toBe(
      'stage1',
    );
    expect(classifyBp({ sex: 'male', ageYears: 10, column: 3, sbp: 110, dbp: 89 }).category).toBe(
      'stage2',
    );
    // Niño de 12 años, columna p95: p95 SBP 128 < 130, así que estadio 1 desde 128.
    expect(classifyBp({ sex: 'male', ageYears: 12, column: 6, sbp: 128, dbp: 60 }).category).toBe(
      'stage1',
    );
    // Niño de 17 años en la tabla sería p90 134, pero desde los 13 se usan cifras fijas.
  });

  it('desde los 13 años usa los cortes fijos de la Tabla 3', () => {
    const c = (sbp: number, dbp: number) =>
      classifyBp({ sex: 'female', ageYears: 14, column: 3, sbp, dbp }).category;
    expect(c(118, 78)).toBe('normal');
    expect(c(125, 70)).toBe('elevated');
    expect(c(132, 70)).toBe('stage1');
    expect(c(118, 85)).toBe('stage1');
    expect(c(142, 70)).toBe('stage2');
    expect(c(120, 90)).toBe('stage2');
  });

  it('fuera de 1 a 17 años no clasifica', () => {
    expect(thresholdsFor('male', 0, 3)).toBeNull();
    expect(thresholdsFor('male', 18, 3)).toBeNull();
  });

  it('marca la derivación inmediata a emergencia', () => {
    const kid = { sex: 'male' as const, ageYears: 10, column: 3, sbp: 147, dbp: 70 };
    expect(bpUrgent(classifyBp(kid), kid.sbp, kid.dbp)).toBe(true);
    const kid2 = { ...kid, sbp: 146 };
    expect(bpUrgent(classifyBp(kid2), kid2.sbp, kid2.dbp)).toBe(false);
    const teen = { sex: 'female' as const, ageYears: 15, column: 3, sbp: 181, dbp: 80 };
    expect(bpUrgent(classifyBp(teen), teen.sbp, teen.dbp)).toBe(true);
  });
});
