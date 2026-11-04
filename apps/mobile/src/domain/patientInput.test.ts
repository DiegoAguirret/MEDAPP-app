import { ageToDays, parseHeight, parseWeight } from './patientInput';

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
