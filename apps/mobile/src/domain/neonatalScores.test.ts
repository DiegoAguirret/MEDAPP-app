import { NEONATAL_SCORES } from './neonatalScores';
import { scoreResult } from './scores';

describe('puntajes neonatales: integridad de cada definición', () => {
  it('hay calculadoras registradas', () => {
    expect(NEONATAL_SCORES.length).toBeGreaterThan(0);
  });

  for (const def of NEONATAL_SCORES) {
    describe(def.title, () => {
      it('cada criterio tiene opciones con puntos distintos y cita fuentes', () => {
        expect(def.sources.length).toBeGreaterThan(0);
        for (const item of def.items) {
          const pts = item.options.map((o) => o.points);
          expect(new Set(pts).size).toBe(pts.length);
        }
      });

      if (def.bandsOn !== 'derived') {
        it('las franjas cubren todos los totales posibles, sin huecos ni solapes', () => {
          const max = def.items.reduce(
            (a, i) => a + Math.max(...i.options.map((o) => o.points)),
            0,
          );
          const min = def.items.reduce(
            (a, i) => a + Math.min(...i.options.map((o) => o.points)),
            0,
          );
          for (let t = min; t <= max; t++) {
            const hits = def.bands.filter((b) => t >= b.min && t <= b.max);
            expect(hits).toHaveLength(1);
          }
        });
      }

      it('con todo en el mínimo y todo en el máximo da un resultado interpretado', () => {
        const lo = Object.fromEntries(
          def.items.map((i) => [i.id, Math.min(...i.options.map((o) => o.points))]),
        );
        const hi = Object.fromEntries(
          def.items.map((i) => [i.id, Math.max(...i.options.map((o) => o.points))]),
        );
        expect(scoreResult(def, lo).complete).toBe(true);
        const out = scoreResult(def, hi);
        if (def.bands.length > 0) expect(out.band).not.toBeNull();
        else expect(out.derived).not.toBeNull();
      });
    });
  }
});

describe('puntajes neonatales: casos verificados a mano', () => {
  const def = (id: string) => NEONATAL_SCORES.find((d) => d.id === id)!;
  const all = (id: string, pick: (pts: number[]) => number) =>
    Object.fromEntries(def(id).items.map((i) => [i.id, pick(i.options.map((o) => o.points))]));

  it('Apgar 10 es tranquilizador; 5 es moderadamente anormal; 3 es bajo', () => {
    expect(
      scoreResult(
        def('apgar'),
        all('apgar', (p) => Math.max(...p)),
      ).band?.label,
    ).toBe('Tranquilizador');
    const five = { fc: 2, resp: 1, tono: 1, reflejo: 1, color: 0 };
    expect(scoreResult(def('apgar'), five)).toMatchObject({ total: 5 });
    expect(scoreResult(def('apgar'), five).band?.label).toBe('Moderadamente anormal');
    expect(
      scoreResult(def('apgar'), { fc: 1, resp: 1, tono: 1, reflejo: 0, color: 0 }).band?.label,
    ).toBe('Bajo');
  });

  it('Silverman-Andersen 4 es moderada y 7 es severa', () => {
    const d = def('silverman-andersen');
    expect(
      scoreResult(d, { movimientos: 1, tiraje: 1, xifoidea: 1, aleteo: 1, quejido: 0 }).band?.label,
    ).toBe('Moderada');
    expect(
      scoreResult(d, { movimientos: 2, tiraje: 2, xifoidea: 2, aleteo: 1, quejido: 0 }).band?.label,
    ).toBe('Severa');
  });

  it('Capurro: (puntos + 204) / 7, con semanas y días', () => {
    const d = def('capurro');
    // Todo en 0: 204 días = 29 semanas y 1 día.
    expect(
      scoreResult(
        d,
        all('capurro', (p) => Math.min(...p)),
      ).derived,
    ).toMatchObject({ weeks: 29, days: 1 });
    // Todo en el máximo: 94 + 204 = 298 días = 42 semanas y 4 días.
    expect(
      scoreResult(
        d,
        all('capurro', (p) => Math.max(...p)),
      ).derived,
    ).toMatchObject({ weeks: 42, days: 4 });
    // 16 + 10 + 10 + 15 + 15 = 66; 270 días = 38 semanas y 4 días.
    expect(
      scoreResult(d, { oreja: 16, mama: 10, pezon: 10, piel: 15, pliegues: 15 }).derived,
    ).toMatchObject({ weeks: 38, days: 4 });
  });
});
