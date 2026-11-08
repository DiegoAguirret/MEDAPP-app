import { assessBilirubin, thresholdsAt } from './bilirubin';

describe('bilirrubina neonatal (AAP 2022, Supplemental Tables 1–4)', () => {
  it('lee el umbral de fototerapia por hora: 40 semanas sin factores', () => {
    // Tabla 1, 40 semanas: día 1 hora 0 = 13.3; día 2 hora 0 = 17.0.
    expect(thresholdsAt(40, 24, false)?.photo).toBe(13.3);
    expect(thresholdsAt(40, 48, false)?.photo).toBe(17.0);
    // Primera celda: día 0, hora 1 = 8.9.
    expect(thresholdsAt(40, 1, false)?.photo).toBe(8.9);
  });

  it('mantiene la meseta después de la última celda', () => {
    // Tabla 1, 40 semanas: ≥ 96 h es 21.8.
    expect(thresholdsAt(40, 96, false)?.photo).toBe(21.8);
    expect(thresholdsAt(41, 200, false)?.photo).toBe(21.8);
    // Tabla 2, 38 semanas o más con factor: meseta 18.2 desde 96 h.
    expect(thresholdsAt(39, 120, true)?.photo).toBe(18.2);
  });

  it('el escalamiento es 2 mg/dL bajo la exsanguinotransfusión', () => {
    // Tabla 3, 38 semanas o más sin factor: ≥ 96 h es 27.0.
    const t = thresholdsAt(38, 100, false);
    expect(t?.exchange).toBe(27.0);
    expect(t?.escalation).toBe(25.0);
  });

  it('fuera de rango: menos de 35 semanas, hora 0 o más de 14 días', () => {
    expect(thresholdsAt(34, 24, false)).toBeNull();
    expect(thresholdsAt(38, 0, false)).toBeNull();
    expect(thresholdsAt(38, 360, false)).toBeNull();
  });

  it('clasifica la BST frente a los umbrales', () => {
    expect(assessBilirubin({ gaWeeks: 40, ageHours: 24, tsb: 12, risk: false })?.level).toBe(
      'below',
    );
    expect(assessBilirubin({ gaWeeks: 40, ageHours: 24, tsb: 13.3, risk: false })?.level).toBe(
      'photo',
    );
    expect(assessBilirubin({ gaWeeks: 38, ageHours: 100, tsb: 25, risk: false })?.level).toBe(
      'escalation',
    );
    expect(assessBilirubin({ gaWeeks: 38, ageHours: 100, tsb: 27, risk: false })?.level).toBe(
      'exchange',
    );
    expect(
      assessBilirubin({ gaWeeks: 40, ageHours: 24, tsb: 12, risk: false })?.belowPhoto,
    ).toBeCloseTo(1.3, 5);
  });
});
