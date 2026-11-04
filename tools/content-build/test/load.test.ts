import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { loadContent } from '../src/load.ts';

function dir(recalls: string | null): string {
  const d = mkdtempSync(join(tmpdir(), 'medapp-'));
  mkdirSync(join(d, 'drugs'));
  writeFileSync(join(d, 'sources.yaml'), '[]');
  if (recalls !== null) writeFileSync(join(d, 'recalls.yaml'), recalls);
  return d;
}

describe('loadContent recalls', () => {
  it('fails when recalls.yaml is not a list', () => {
    expect(() => loadContent(dir('metamizol: true'))).toThrow(/recalls/);
  });
  it('fails when a recalled id does not exist', () => {
    expect(() => loadContent(dir('[metamizoll]'))).toThrow(/metamizoll/);
  });
  it('accepts a missing recalls file', () => {
    expect(loadContent(dir(null)).recalledDrugIds).toEqual([]);
  });
});
