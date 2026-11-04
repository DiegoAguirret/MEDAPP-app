import {
  BUNDLE_JSON,
  BUNDLE_SIG,
  CONTENT_PUBLIC_KEY,
  MANIFEST_JSON,
  MANIFEST_SIG,
} from '../content/bundled';
import { loadVerifiedContent, type LoadedContent } from '../data/content';

let cached: LoadedContent | null = null;

/** Verifica una sola vez el paquete incluido en la app. Si la firma falla, no se muestran dosis. */
export function getContent(): LoadedContent {
  cached ??= loadVerifiedContent(
    {
      bundleJson: BUNDLE_JSON,
      bundleSig: BUNDLE_SIG,
      manifestJson: MANIFEST_JSON,
      manifestSig: MANIFEST_SIG,
    },
    CONTENT_PUBLIC_KEY,
  );
  return cached;
}
