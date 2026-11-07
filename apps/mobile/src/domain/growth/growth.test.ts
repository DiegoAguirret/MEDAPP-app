import {
  ageInDays,
  chartDomain,
  sdLines,
  assessGrowth,
  lmsAt,
  ntsClass,
  percentileFromZ,
  zScore,
  type GrowthInput,
} from './growth';

const find = (input: GrowthInput, id: string) => assessGrowth(input).find((r) => r.id === id);

describe('zScore (fórmula LMS de la OMS)', () => {
  it('vale 0 en la mediana', () => {
    expect(zScore(9.646, { l: 0.0645, m: 9.646, s: 0.10925 }, true)).toBe(0);
  });

  it('corrige por encima de +3 DE con la distancia entre +2 y +3 DE', () => {
    const lms = { l: 0.0645, m: 9.646, s: 0.10925 };
    const sd = (k: number) => lms.m * (1 + lms.l * lms.s * k) ** (1 / lms.l);
    const y = sd(3) + 0.5 * (sd(3) - sd(2));
    expect(zScore(y, lms, true)).toBeCloseTo(3.5, 2);
  });

  it('sin ajuste usa la fórmula simple', () => {
    const lms = { l: 1, m: 50, s: 0.04 };
    expect(zScore(50 + 4 * 2, lms, false)).toBeCloseTo(4, 6);
  });
});

describe('lmsAt', () => {
  it('interpola entre dos filas de 0,1 cm', () => {
    const a = lmsAt('wfl', 'male', 45);
    const b = lmsAt('wfl', 'male', 45.1);
    const mid = lmsAt('wfl', 'male', 45.05);
    expect(a?.m).toBe(2.441);
    expect(b?.m).toBe(2.4577);
    expect(mid?.m).toBeCloseTo((2.441 + 2.4577) / 2, 6);
  });

  it('devuelve null fuera de la tabla', () => {
    expect(lmsAt('wfl', 'male', 44.9)).toBeNull();
    expect(lmsAt('wfl', 'male', 110.1)).toBeNull();
  });
});

describe('ageInDays', () => {
  it('convierte años, meses y días como la OMS (365,25 y 30,4375)', () => {
    expect(ageInDays({ years: 1, months: 0, days: 0 })).toBe(365);
    expect(ageInDays({ years: 0, months: 6, days: 0 })).toBe(183);
    expect(ageInDays({ years: 0, months: 0, days: 10 })).toBe(10);
  });
});

describe('percentileFromZ', () => {
  it('z 0 es el percentil 50 y ±1,96 son 2,5 y 97,5', () => {
    expect(percentileFromZ(0)).toBeCloseTo(50, 4);
    expect(percentileFromZ(1.96)).toBeCloseTo(97.5, 1);
    expect(percentileFromZ(-1.96)).toBeCloseTo(2.5, 1);
  });
});

describe('assessGrowth — menores de 5 años (OMS 2006)', () => {
  it('peso para la edad: niño de 12 meses con 7,7 kg está en −2,05 DE (bajo peso)', () => {
    const r = find({ sex: 'male', ageDays: 365, weightKg: 7.7 }, 'wfa');
    expect(r?.z).toBe(-2.05);
    expect(r?.reference).toBe('OMS 2006');
    expect(r?.nts?.label).toBe('Bajo peso');
  });

  it('la mediana de peso a los 12 meses es normal', () => {
    const r = find({ sex: 'male', ageDays: 365, weightKg: 9.646 }, 'wfa');
    expect(r?.z).toBe(0);
    expect(r?.nts?.label).toBe('Normal');
  });

  it('suma 0,7 cm si un menor de 2 años se midió de pie', () => {
    const lying = find({ sex: 'male', ageDays: 730, lengthCm: 87.8018, position: 'lying' }, 'lfa');
    const standing = find(
      { sex: 'male', ageDays: 730, lengthCm: 87.1018, position: 'standing' },
      'lfa',
    );
    expect(lying?.z).toBe(0);
    expect(standing?.z).toBe(0);
  });

  it('resta 0,7 cm si un niño de 2 años o más se midió acostado', () => {
    const r = find({ sex: 'male', ageDays: 731, lengthCm: 87.8303, position: 'lying' }, 'lfa');
    expect(r?.z).toBe(0);
  });

  it('peso para la talla usa la tabla de longitud antes de los 731 días', () => {
    const r = find(
      { sex: 'male', ageDays: 300, weightKg: 2.441, lengthCm: 45, position: 'lying' },
      'wfl',
    );
    expect(r?.z).toBe(0);
  });

  it('no clasifica antes de los 29 días pero sí da el puntaje z', () => {
    const r = find({ sex: 'female', ageDays: 10, weightKg: 3.2 }, 'wfa');
    expect(r?.z).not.toBeNull();
    expect(r?.nts).toBeUndefined();
    expect(r?.note).toMatch(/29 días/);
  });

  it('perímetro cefálico se clasifica solo hasta antes de los 3 años', () => {
    const young = find({ sex: 'male', ageDays: 400, headCm: 30 }, 'hcfa');
    const old = find({ sex: 'male', ageDays: 1200, headCm: 50 }, 'hcfa');
    expect(young?.nts?.label).toBe('Riesgo de microcefalia');
    expect(old?.nts).toBeUndefined();
  });

  it('perímetro braquial empieza a los 3 meses y no tiene punto de corte NTS', () => {
    expect(find({ sex: 'male', ageDays: 60, armCm: 12 }, 'acfa')).toBeUndefined();
    const r = find({ sex: 'male', ageDays: 200, armCm: 14 }, 'acfa');
    expect(r?.z).not.toBeNull();
    expect(r?.nts).toBeUndefined();
  });

  it('calcula el IMC con la talla corregida', () => {
    const r = find(
      { sex: 'male', ageDays: 365, weightKg: 9.6, lengthCm: 75, position: 'lying' },
      'bfa',
    );
    expect(r?.value).toBeCloseTo(9.6 / 0.75 ** 2, 2);
  });
});

describe('assessGrowth — 5 a 19 años (OMS 2007)', () => {
  it('IMC de una niña de 10 años en la mediana es normal', () => {
    const h = 140;
    const w = 16.6133 * (h / 100) ** 2;
    const r = find(
      {
        sex: 'female',
        ageDays: ageInDays({ years: 10, months: 0, days: 0 }),
        weightKg: w,
        lengthCm: h,
      },
      'bfa',
    );
    expect(r?.reference).toBe('OMS 2007');
    expect(r?.z).toBe(0);
    expect(r?.nts?.label).toBe('Normal');
  });

  it('no usa peso para la talla desde los 5 años', () => {
    const input: GrowthInput = {
      sex: 'male',
      ageDays: ageInDays({ years: 6, months: 0, days: 0 }),
      weightKg: 20,
      lengthCm: 115,
    };
    expect(find(input, 'wfl')).toBeUndefined();
    expect(find(input, 'wfa')?.nts).toBeUndefined();
  });

  it('a partir de los 12 años da el puntaje z sin clasificación NTS', () => {
    const r = find(
      {
        sex: 'male',
        ageDays: ageInDays({ years: 13, months: 0, days: 0 }),
        weightKg: 45,
        lengthCm: 155,
      },
      'bfa',
    );
    expect(r?.z).not.toBeNull();
    expect(r?.nts).toBeUndefined();
    expect(r?.note).toMatch(/11 años/);
  });
});

describe('ntsClass (NTS N.° 238-MINSA/DGIESP-2025, Tabla 3)', () => {
  it('peso para la talla en menores de 5 años', () => {
    expect(ntsClass('wfl', 3.01, 400)?.label).toBe('Obesidad');
    expect(ntsClass('wfl', 3, 400)?.label).toBe('Sobrepeso');
    expect(ntsClass('wfl', 2, 400)?.label).toBe('Normal');
    expect(ntsClass('wfl', -2, 400)?.label).toBe('Normal');
    expect(ntsClass('wfl', -2.01, 400)?.label).toBe('Bajo peso (emaciado)');
    expect(ntsClass('wfl', -3.01, 400)?.label).toBe('Bajo peso severo');
  });

  it('talla para la edad: alto, talla baja y talla baja severa', () => {
    expect(ntsClass('lfa', 2.01, 400)?.label).toBe('Alto');
    expect(ntsClass('lfa', -2.5, 400)?.label).toBe('Talla baja');
    expect(ntsClass('lfa', -3.5, 400)?.label).toBe('Talla baja severa');
    expect(ntsClass('lfa', 2.01, 2500)?.label).toBe('Talla alta');
  });

  it('IMC para la edad de 5 a 11 años', () => {
    const d = 3000;
    expect(ntsClass('bfa', 3, d)?.label).toBe('Obesidad severa');
    expect(ntsClass('bfa', 2.01, d)?.label).toBe('Obesidad');
    expect(ntsClass('bfa', 2, d)?.label).toBe('Sobrepeso');
    expect(ntsClass('bfa', 1, d)?.label).toBe('Normal');
    expect(ntsClass('bfa', -2.5, d)?.label).toBe('Delgadez');
    expect(ntsClass('bfa', -3.01, d)?.label).toBe('Delgadez severa');
  });
});

describe('curvas de referencia', () => {
  it('cada resultado dice qué tabla y qué punto usar en la gráfica', () => {
    const r = assessGrowth({ sex: 'male', ageDays: 365, weightKg: 7.7, lengthCm: 70 });
    const wfa = r.find((x) => x.id === 'wfa');
    const wfl = r.find((x) => x.id === 'wfl');
    expect(wfa?.chart).toEqual({ table: 'wfa', x: 365 });
    expect(wfl?.chart).toEqual({ table: 'wfl', x: 70 });
  });

  it('sdLines devuelve la mediana en k = 0 y respeta el dominio de la tabla', () => {
    const lines = sdLines('wfa', 'male', [0, 2]);
    const median = lines.find((l) => l.k === 0);
    expect(median?.points[0]).toEqual({ x: 0, y: 3.3464 });
    const last = median?.points[median.points.length - 1];
    expect(last?.x).toBe(1826);
    expect(lines.find((l) => l.k === 2)?.points[0]?.y).toBeGreaterThan(3.3464);
  });

  it('chartDomain da el eje x de cada tabla', () => {
    expect(chartDomain('wfl')).toEqual({ from: 45, to: 110 });
    expect(chartDomain('acfa')).toEqual({ from: 91, to: 1826 });
    expect(chartDomain('bfa07')).toEqual({ from: 60, to: 228 });
  });
});
