import { describe, expect, it } from 'vitest';
import { formatClinical, formatNumber } from '../src/format.ts';

describe('formatNumber', () => {
  it('drops trailing zeros on integers', () => {
    expect(formatNumber(5)).toBe('5');
    expect(formatNumber(5.0)).toBe('5');
  });
  it('keeps the leading zero', () => {
    expect(formatNumber(0.5)).toBe('0.5');
  });
  it('keeps up to two decimals', () => {
    expect(formatNumber(6.25)).toBe('6.25');
  });
  it('drops a trailing zero after the decimal', () => {
    expect(formatNumber(6.3)).toBe('6.3');
    expect(formatNumber(2.1)).toBe('2.1');
  });
  it('supports comma as decimal separator', () => {
    expect(formatNumber(6.3, { decimalSeparator: ',' })).toBe('6,3');
  });
  it('never inserts a thousands separator', () => {
    expect(formatNumber(1000)).toBe('1000');
  });
  it('rounds to maxDecimals', () => {
    expect(formatNumber(0.125, { maxDecimals: 2 })).toBe('0.13');
    expect(formatNumber(2.5, { maxDecimals: 0 })).toBe('3');
  });
});

describe('formatClinical', () => {
  it.each([
    [0.005, '0.005'],
    [0.015, '0.015'],
    [0.0123456, '0.0123'],
    [0.5, '0.5'],
    [6.25, '6.25'],
    [150, '150'],
    [1000, '1000'],
    [0, '0'],
  ])('%s → %s', (v, s) => {
    expect(formatClinical(v)).toBe(s);
  });
  it('supports comma', () => {
    expect(formatClinical(0.015, ',')).toBe('0,015');
  });
});

describe('formatClinical — miles', () => {
  it('desde 10 000 agrupa los miles con un espacio fino que no se corta (nunca punto ni coma)', () => {
    expect(formatClinical(200000)).toBe('200 000');
    expect(formatClinical(12500.5)).toBe('12 500.5');
    expect(formatClinical(12500.5, ',')).toBe('12 500,5');
    expect(formatClinical(2400000)).toBe('2 400 000');
  });
  it('hasta 9999 no agrupa', () => {
    expect(formatClinical(9999)).toBe('9999');
    expect(formatClinical(1000)).toBe('1000');
  });
});
