import type { Drug, Source } from '@medapp/content-schema';
import { ed25519 } from '@noble/curves/ed25519.js';
import { sha256 } from '@noble/hashes/sha2.js';
import { bytesToHex, hexToBytes, utf8ToBytes } from '@noble/hashes/utils.js';

export interface Bundle {
  schemaVersion: 1;
  contentVersion: string;
  generatedAt: string;
  mode: 'tester' | 'release';
  drugs: Drug[];
  sources: Source[];
}

/** Manifiesto pequeño que la app consulta para saber si hay contenido nuevo o fichas retiradas. */
export interface Manifest {
  contentVersion: string;
  /** SHA-256 del JSON canónico del paquete. */
  sha256: string;
  recalledDrugIds: string[];
  minAppVersion: string;
}

/** JSON determinista: claves ordenadas, sin espacios. Es lo que se firma. */
export function canonicalJson(value: unknown): string {
  return JSON.stringify(sortKeys(value));
}

function sortKeys(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
        .map(([k, v]) => [k, sortKeys(v)]),
    );
  }
  return value;
}

export function sha256Hex(text: string): string {
  return bytesToHex(sha256(utf8ToBytes(text)));
}

export function generateKeyPair(): { privateKeyHex: string; publicKeyHex: string } {
  const secret = ed25519.utils.randomSecretKey();
  return {
    privateKeyHex: bytesToHex(secret),
    publicKeyHex: bytesToHex(ed25519.getPublicKey(secret)),
  };
}

export function publicKeyFromPrivate(privateKeyHex: string): string {
  return bytesToHex(ed25519.getPublicKey(hexToBytes(privateKeyHex)));
}

function signText(text: string, privateKeyHex: string): string {
  return bytesToHex(ed25519.sign(utf8ToBytes(text), hexToBytes(privateKeyHex)));
}

/** Verifica firma y que el texto sea JSON canónico. Nunca lanza excepción. */
function verifyText(text: string, signatureHex: string, publicKeyHex: string): boolean {
  try {
    if (canonicalJson(JSON.parse(text)) !== text) return false;
    return ed25519.verify(hexToBytes(signatureHex), utf8ToBytes(text), hexToBytes(publicKeyHex));
  } catch {
    return false;
  }
}

export function signBundle(
  bundle: Bundle,
  privateKeyHex: string,
): { bundleJson: string; signatureHex: string } {
  const bundleJson = canonicalJson(bundle);
  return { bundleJson, signatureHex: signText(bundleJson, privateKeyHex) };
}

export function verifyBundle(
  bundleJson: string,
  signatureHex: string,
  publicKeyHex: string,
): boolean {
  return verifyText(bundleJson, signatureHex, publicKeyHex);
}

export function signManifest(
  manifest: Manifest,
  privateKeyHex: string,
): { manifestJson: string; signatureHex: string } {
  const manifestJson = canonicalJson(manifest);
  return { manifestJson, signatureHex: signText(manifestJson, privateKeyHex) };
}

export function verifyManifest(
  manifestJson: string,
  signatureHex: string,
  publicKeyHex: string,
): boolean {
  return verifyText(manifestJson, signatureHex, publicKeyHex);
}
