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
  /** Entero creciente en cada publicación. La app rechaza un manifiesto que no sea más nuevo. */
  sequence: number;
  issuedAt: string;
}

/** Etiquetas de dominio: una firma de manifiesto no sirve como firma de paquete y viceversa. */
const BUNDLE_TAG = 'medapp-bundle-v1\n';
const MANIFEST_TAG = 'medapp-manifest-v1\n';

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

function signText(tag: string, text: string, privateKeyHex: string): string {
  return bytesToHex(ed25519.sign(utf8ToBytes(tag + text), hexToBytes(privateKeyHex)));
}

/** Verifica firma y que el texto sea JSON canónico. Nunca lanza excepción. */
function verifyText(
  tag: string,
  text: string,
  signatureHex: string,
  publicKeyHex: string,
): boolean {
  try {
    if (canonicalJson(JSON.parse(text)) !== text) return false;
    return ed25519.verify(
      hexToBytes(signatureHex),
      utf8ToBytes(tag + text),
      hexToBytes(publicKeyHex),
    );
  } catch {
    return false;
  }
}

export function signBundle(
  bundle: Bundle,
  privateKeyHex: string,
): { bundleJson: string; signatureHex: string } {
  const bundleJson = canonicalJson(bundle);
  return { bundleJson, signatureHex: signText(BUNDLE_TAG, bundleJson, privateKeyHex) };
}

export function verifyBundle(
  bundleJson: string,
  signatureHex: string,
  publicKeyHex: string,
): boolean {
  return verifyText(BUNDLE_TAG, bundleJson, signatureHex, publicKeyHex);
}

export function signManifest(
  manifest: Manifest,
  privateKeyHex: string,
): { manifestJson: string; signatureHex: string } {
  const manifestJson = canonicalJson(manifest);
  return { manifestJson, signatureHex: signText(MANIFEST_TAG, manifestJson, privateKeyHex) };
}

export function verifyManifest(
  manifestJson: string,
  signatureHex: string,
  publicKeyHex: string,
): boolean {
  return verifyText(MANIFEST_TAG, manifestJson, signatureHex, publicKeyHex);
}

/** Protección contra reenvío de manifiestos antiguos (p. ej. anteriores a un retiro). */
export function isManifestNewer(current: Manifest | null, candidate: Manifest): boolean {
  return current === null || candidate.sequence > current.sequence;
}
