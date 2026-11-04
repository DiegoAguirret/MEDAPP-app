import { describe, expect, it } from 'vitest';
import {
  canonicalJson,
  generateKeyPair,
  isManifestNewer,
  sha256Hex,
  signBundle,
  signManifest,
  verifyBundle,
  verifyManifest,
  type Bundle,
  type Manifest,
} from '../src/index.ts';

const bundle: Bundle = {
  schemaVersion: 1,
  contentVersion: '2026.11.04-1',
  generatedAt: '2026-11-04T00:00:00.000Z',
  mode: 'tester',
  drugs: [],
  sources: [],
};

describe('canonicalJson', () => {
  it('sorts keys and removes whitespace', () => {
    expect(canonicalJson({ b: 1, a: 2 })).toBe('{"a":2,"b":1}');
  });
  it('sorts nested keys and keeps array order', () => {
    expect(canonicalJson({ z: [{ y: 1, x: 2 }], a: null })).toBe('{"a":null,"z":[{"x":2,"y":1}]}');
  });
});

describe('bundle signature', () => {
  const { privateKeyHex, publicKeyHex } = generateKeyPair();

  it('verifies a bundle signed with the matching key', () => {
    const { bundleJson, signatureHex } = signBundle(bundle, privateKeyHex);
    expect(verifyBundle(bundleJson, signatureHex, publicKeyHex)).toBe(true);
  });

  it('rejects a tampered bundle', () => {
    const { bundleJson, signatureHex } = signBundle(bundle, privateKeyHex);
    const tampered = bundleJson.replace('tester', 'releas');
    expect(verifyBundle(tampered, signatureHex, publicKeyHex)).toBe(false);
  });

  it('rejects a signature from another key', () => {
    const other = generateKeyPair();
    const { bundleJson, signatureHex } = signBundle(bundle, other.privateKeyHex);
    expect(verifyBundle(bundleJson, signatureHex, publicKeyHex)).toBe(false);
  });

  it('returns false instead of throwing on malformed hex', () => {
    const { bundleJson } = signBundle(bundle, privateKeyHex);
    expect(verifyBundle(bundleJson, 'zz-not-hex', publicKeyHex)).toBe(false);
    expect(verifyBundle(bundleJson, 'abcd', 'also-not-hex')).toBe(false);
  });

  it('rejects valid JSON that is not canonical', () => {
    const { bundleJson, signatureHex } = signBundle(bundle, privateKeyHex);
    const reformatted = JSON.stringify(JSON.parse(bundleJson), null, 2);
    expect(verifyBundle(reformatted, signatureHex, publicKeyHex)).toBe(false);
  });
});

describe('manifest signature', () => {
  const { privateKeyHex, publicKeyHex } = generateKeyPair();
  const manifest: Manifest = {
    contentVersion: '2026.11.04-1',
    sha256: sha256Hex('{}'),
    recalledDrugIds: ['metamizol'],
    minAppVersion: '1.0.0',
    sequence: 1762214400,
    issuedAt: '2026-11-04T00:00:00.000Z',
  };

  it('verifies a signed manifest', () => {
    const { manifestJson, signatureHex } = signManifest(manifest, privateKeyHex);
    expect(verifyManifest(manifestJson, signatureHex, publicKeyHex)).toBe(true);
  });

  it('rejects a manifest whose recall list was removed', () => {
    const { manifestJson, signatureHex } = signManifest(manifest, privateKeyHex);
    const tampered = manifestJson.replace('"metamizol"', '');
    expect(verifyManifest(tampered, signatureHex, publicKeyHex)).toBe(false);
  });
});

describe('sha256Hex', () => {
  it('hashes utf-8 text', () => {
    expect(sha256Hex('abc')).toBe(
      'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
    );
  });
});

describe('domain separation', () => {
  const { privateKeyHex, publicKeyHex } = generateKeyPair();
  const manifest: Manifest = {
    contentVersion: 'x',
    sha256: sha256Hex('{}'),
    recalledDrugIds: [],
    minAppVersion: '1.0.0',
    sequence: 2,
    issuedAt: '2026-11-04T00:00:00.000Z',
  };

  it('a signed manifest is not accepted as a bundle', () => {
    const { manifestJson, signatureHex } = signManifest(manifest, privateKeyHex);
    expect(verifyBundle(manifestJson, signatureHex, publicKeyHex)).toBe(false);
  });

  it('a signed bundle is not accepted as a manifest', () => {
    const { bundleJson, signatureHex } = signBundle(bundle, privateKeyHex);
    expect(verifyManifest(bundleJson, signatureHex, publicKeyHex)).toBe(false);
  });
});

describe('isManifestNewer (rollback protection)', () => {
  const base = {
    contentVersion: 'x',
    sha256: 'h',
    recalledDrugIds: [],
    minAppVersion: '1.0.0',
    issuedAt: '2026-11-04T00:00:00.000Z',
  };
  it('accepts a higher sequence', () => {
    expect(isManifestNewer({ ...base, sequence: 1 }, { ...base, sequence: 2 })).toBe(true);
  });
  it('rejects an equal or older sequence (replay)', () => {
    expect(isManifestNewer({ ...base, sequence: 2 }, { ...base, sequence: 2 })).toBe(false);
    expect(isManifestNewer({ ...base, sequence: 3 }, { ...base, sequence: 2 })).toBe(false);
  });
  it('accepts any manifest when there is none yet', () => {
    expect(isManifestNewer(null, { ...base, sequence: 1 })).toBe(true);
  });
});
