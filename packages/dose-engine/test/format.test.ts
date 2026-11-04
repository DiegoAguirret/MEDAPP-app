import { describe, expect, it } from 'vitest';
import { formatNumber } from '../src/format.ts';

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
