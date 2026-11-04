import {
  sha256Hex,
  verifyBundle,
  verifyManifest,
  type Bundle,
  type Manifest,
} from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';

export interface RawContent {
  bundleJson: string;
  bundleSig: string;
  manifestJson: string;
  manifestSig: string;
}

export type LoadedContent =
  | { ok: true; bundle: Bundle; manifest: Manifest; recalled: Set<string> }
  | { ok: false; reason: 'bad_signature' | 'hash_mismatch' | 'parse_error' };

/** Verifica firma del paquete y del manifiesto y que el hash coincida. Nunca lanza. */
export function loadVerifiedContent(raw: RawContent, publicKeyHex: string): LoadedContent {
  if (
    !verifyBundle(raw.bundleJson, raw.bundleSig, publicKeyHex) ||
    !verifyManifest(raw.manifestJson, raw.manifestSig, publicKeyHex)
  ) {
    return { ok: false, reason: 'bad_signature' };
  }
  try {
    const manifest = JSON.parse(raw.manifestJson) as Manifest;
    if (manifest.sha256 !== sha256Hex(raw.bundleJson))
      return { ok: false, reason: 'hash_mismatch' };
    const bundle = JSON.parse(raw.bundleJson) as Bundle;
    return { ok: true, bundle, manifest, recalled: new Set(manifest.recalledDrugIds) };
  } catch {
    return { ok: false, reason: 'parse_error' };
  }
}

export function normalize(text: string): string {
  // Elimina los diacríticos combinantes (U+0300–U+036F) tras descomponer en NFD.
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

function haystack(d: Drug): string {
  return normalize(
    [d.name, ...d.synonyms, ...d.diagnoses, ...d.rules.map((r) => r.indication)].join(' '),
  );
}

/** Búsqueda sin tildes por nombre, sinónimos, diagnósticos e indicaciones. Excluye retiradas. */
export function searchDrugs(drugs: Drug[], query: string, recalled: Set<string>): Drug[] {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return drugs
    .filter((d) => !recalled.has(d.id))
    .filter((d) => {
      const h = haystack(d);
      return terms.every((t) => h.includes(t));
    })
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
}
