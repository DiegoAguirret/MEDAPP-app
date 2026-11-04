import { describe, expect, it } from 'vitest';
import { roundToStep } from '../src/rounding.ts';

describe('roundToStep', () => {
  it('rounds half up to the nearest step', () => {
    expect(roundToStep(6.25, 0.1, 100).value).toBe(6.3);
  });
  it('rounds down when closer to the lower step', () => {
    expect(roundToStep(6.24, 0.1, 100).value).toBe(6.2);
  });
  it('never rounds above the maximum', () => {
    expect(roundToStep(7.96, 0.1, 7.98).value).toBe(7.9);
  });
  it('returns the exact value when the nearest step errs more than 5%', () => {
    const r = roundToStep(0.8, 0.5, 2);
    expect(r.value).toBe(0.8);
    expect(r.errorPct).toBe(25);
    expect(r.exceeds5pct).toBe(true);
  });
  it('never returns zero for a tiny volume', () => {
    const r = roundToStep(0.02, 0.1, 1);
    expect(r.value).toBe(0.02);
    expect(r.exceeds5pct).toBe(true);
  });
  it('avoids floating point artifacts', () => {
    expect(roundToStep(0.3, 0.1, 1).value).toBe(0.3);
    expect(roundToStep(0.7, 0.1, 1).value).toBe(0.7);
  });
  it('reports the rounding error percentage', () => {
    const r = roundToStep(6.25, 0.1, 100);
    expect(r.exact).toBe(6.25);
    expect(r.errorPct).toBe(0.8);
    expect(r.exceeds5pct).toBe(false);
  });
  it('rejects non-positive inputs', () => {
    expect(() => roundToStep(0, 0.1, 1)).toThrow(RangeError);
    expect(() => roundToStep(1, 0, 1)).toThrow(RangeError);
    expect(() => roundToStep(1, 0.1, 0)).toThrow(RangeError);
  });
});

describe('roundToStep with microscopic volumes', () => {
  it('keeps a positive value below 0.005', () => {
    const r = roundToStep(0.004, 0.1, 1);
    expect(r.value).toBeGreaterThan(0);
    expect(r.value).toBeCloseTo(0.004, 6);
  });
});

describe('roundToStep exact fallback precision', () => {
  it.each([0.015, 0.022, 0.034])('returns %s exactly (3 significant figures)', (x) => {
    expect(roundToStep(x, 0.1, 1).value).toBe(x);
  });
});
