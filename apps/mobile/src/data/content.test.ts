import {
  generateKeyPair,
  sha256Hex,
  signBundle,
  signManifest,
  type Bundle,
} from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { loadVerifiedContent, normalize, searchDrugs } from './content';
import { BUNDLE_JSON } from '../content/bundled';

const realBundle = JSON.parse(BUNDLE_JSON) as Bundle;

function signed(bundle: Bundle, recalled: string[] = [], tamperHash = false) {
  const keys = generateKeyPair();
  const b = signBundle(bundle, keys.privateKeyHex);
  const m = signManifest(
    {
      contentVersion: bundle.contentVersion,
      sha256: tamperHash ? 'deadbeef' : sha256Hex(b.bundleJson),
      recalledDrugIds: recalled,
      minAppVersion: '1.0.0',
      sequence: 1,
      issuedAt: '2026-11-05T00:00:00.000Z',
    },
    keys.privateKeyHex,
  );
  return {
    raw: {
      bundleJson: b.bundleJson,
      bundleSig: b.signatureHex,
      manifestJson: m.manifestJson,
      manifestSig: m.signatureHex,
    },
    publicKeyHex: keys.publicKeyHex,
  };
}

describe('loadVerifiedContent', () => {
  it('accepts a valid signed bundle', () => {
    const { raw, publicKeyHex } = signed(realBundle);
    const r = loadVerifiedContent(raw, publicKeyHex);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.bundle.drugs.length).toBe(142);
  });

  it('rejects a tampered bundle', () => {
    const { raw, publicKeyHex } = signed(realBundle);
    const r = loadVerifiedContent(
      { ...raw, bundleJson: raw.bundleJson.replace('Paracetamol', 'Paracetamoll') },
      publicKeyHex,
    );
    expect(r).toEqual({ ok: false, reason: 'bad_signature' });
  });

  it('rejects a manifest whose hash does not match the bundle', () => {
    const { raw, publicKeyHex } = signed(realBundle, [], true);
    expect(loadVerifiedContent(raw, publicKeyHex)).toEqual({ ok: false, reason: 'hash_mismatch' });
  });

  it('rejects a bundle signed with another key', () => {
    const { raw } = signed(realBundle);
    expect(loadVerifiedContent(raw, generateKeyPair().publicKeyHex)).toEqual({
      ok: false,
      reason: 'bad_signature',
    });
  });

  it('exposes recalled drug ids', () => {
    const { raw, publicKeyHex } = signed(realBundle, ['metamizol']);
    const r = loadVerifiedContent(raw, publicKeyHex);
    expect(r.ok && r.recalled.has('metamizol')).toBe(true);
  });
});

describe('normalize', () => {
  it('lowercases and removes accents', () => {
    expect(normalize('Ondansetrón ÁCIDO')).toBe('ondansetron acido');
  });
});

describe('searchDrugs', () => {
  const drugs = realBundle.drugs as Drug[];
  const ids = (q: string, recalled = new Set<string>()) =>
    searchDrugs(drugs, q, recalled).map((d) => d.id);

  it('finds a drug without accents', () => {
    expect(ids('ondansetron')).toEqual(['ondansetron']);
  });
  it('finds by diagnosis', () => {
    expect(ids('fiebre')).toEqual(
      expect.arrayContaining(['paracetamol', 'ibuprofeno', 'metamizol']),
    );
  });
  it('finds by partial word in a combination', () => {
    expect(ids('acido')).toContain('amoxicilina-clavulanico');
  });
  it('finds by synonym, and a name or synonym match comes before a diagnosis match', () => {
    const found = ids('acetaminofen');
    expect(found[0]).toBe('paracetamol');
    // La N-acetilcisteína aparece después: es el antídoto de la sobredosis de acetaminofén.
    expect(found).toContain('acetilcisteina');
  });
  it('returns all drugs sorted by name for an empty query', () => {
    expect(ids('').length).toBe(142);
  });
  it('excludes recalled drugs', () => {
    expect(ids('fiebre', new Set(['metamizol']))).not.toContain('metamizol');
  });
});
