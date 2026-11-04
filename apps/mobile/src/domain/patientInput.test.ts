import { ageToDays, parseHeight, parseWeight } from './patientInput';
import { customPresentation, manualRule } from './custom';

describe('parseWeight', () => {
  it.each([
    ['12,5', 12.5],
    ['12.5', 12.5],
    [' 7 ', 7],
    ['0,8', 0.8],
  ])('%s → %s kg', (text, kg) => {
    expect(parseWeight(text)).toEqual({ ok: true, kg });
  });

  it('rejects empty input', () => {
    expect(parseWeight('  ')).toEqual({ ok: false, error: 'empty' });
  });

  it.each(['abc', '1,2,3', '12..5', '1e3', '12 kg'])('rejects malformed %s', (text) => {
    expect(parseWeight(text)).toEqual({ ok: false, error: 'invalid' });
  });

  it.each(['0', '-3', '151'])('rejects out of range %s', (text) => {
    expect(parseWeight(text)).toEqual({ ok: false, error: 'out_of_range' });
  });
});

describe('parseHeight', () => {
  it.each([
    ['160', 160],
    ['72,5', 72.5],
  ])('%s → %s cm', (t, cm) => {
    expect(parseHeight(t)).toEqual({ ok: true, cm });
  });
  it.each(['10', '250', 'x'])('rejects %s', (t) => {
    expect(parseHeight(t).ok).toBe(false);
  });
});

describe('ageToDays', () => {
  it('converts years', () => expect(ageToDays(1, 0)).toBe(365));
  it('converts months', () => expect(ageToDays(0, 6)).toBe(182));
  it('converts days', () => expect(ageToDays(0, 0, 40)).toBe(40));
  it('combines years and months', () => expect(ageToDays(1, 1)).toBe(395));
});

describe('parseWeight in pounds', () => {
  it('converts 22 lb to 9.98 kg', () => {
    const r = parseWeight('22', 'lb');
    expect(r.ok && Number(r.kg.toFixed(2))).toBe(9.98);
  });
  it('rejects more than 150 kg after conversion', () => {
    expect(parseWeight('340', 'lb')).toEqual({ ok: false, error: 'out_of_range' });
  });
});

describe('customPresentation', () => {
  it('builds 250 mg / 5 mL as 50 mg per mL', () => {
    const p = customPresentation('250', '5');
    expect(p?.mgPerUnit).toBe(50);
    expect(p?.unit).toBe('mL');
    expect(p?.label).toBe('Personalizada 250 mg/5 mL');
  });
  it('accepts comma decimals', () => {
    expect(customPresentation('2,5', '1')?.mgPerUnit).toBe(2.5);
  });
  it.each([
    ['0', '5'],
    ['250', '0'],
    ['x', '5'],
    ['', ''],
  ])('rejects %s mg / %s mL', (mg, ml) => {
    expect(customPresentation(mg, ml)).toBeNull();
  });
});

describe('manualRule', () => {
  it('builds a per-dose rule with a cap', () => {
    const r = manualRule({
      amountText: '15',
      basis: 'mg/kg/dose',
      intervalHours: 6,
      maxPerDoseText: '1000',
    });
    expect(r).toMatchObject({
      basis: 'mg/kg/dose',
      amountMin: 15,
      amountMax: 15,
      maxPerDoseMg: 1000,
      maxPerDayMg: 4000,
    });
  });
  it('allows no cap (very high limit) and flags it', () => {
    const r = manualRule({
      amountText: '90',
      basis: 'mg/kg/day',
      intervalHours: 12,
      maxPerDoseText: '',
    });
    expect(r?.notes).toMatch(/sin tope/i);
  });
  it('rejects an invalid dose', () => {
    expect(
      manualRule({ amountText: 'abc', basis: 'mg/kg/dose', intervalHours: 6, maxPerDoseText: '' }),
    ).toBeNull();
  });
});
