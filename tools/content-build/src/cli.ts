import {
  canonicalJson,
  generateKeyPair,
  publicKeyFromPrivate,
  sha256Hex,
  signBundle,
  signManifest,
  type Bundle,
  type Manifest,
} from '@medapp/content-bundle';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { checkContent } from './check.ts';
import { loadContent } from './load.ts';

const ROOT = resolve(import.meta.dirname, '../../..');
const MIN_APP_VERSION = '1.0.0';

function signingKey(mode: 'tester' | 'release'): string {
  if (mode === 'release') {
    const key = process.env['CONTENT_SIGNING_KEY'];
    if (key === undefined || !/^[0-9a-f]{64}$/i.test(key)) {
      throw new Error('Modo release: defina CONTENT_SIGNING_KEY (clave Ed25519 en hexadecimal).');
    }
    return key;
  }
  const keyFile = join(ROOT, 'keys', 'dev.key');
  if (!existsSync(keyFile)) {
    mkdirSync(join(ROOT, 'keys'), { recursive: true });
    writeFileSync(keyFile, generateKeyPair().privateKeyHex, { mode: 0o600 });
    console.log('Clave de desarrollo creada en keys/dev.key (no se versiona).');
  }
  return readFileSync(keyFile, 'utf8').trim();
}

function main(): number {
  const { values } = parseArgs({
    options: { mode: { type: 'string', default: 'tester' }, keygen: { type: 'boolean' } },
  });
  if (values.keygen === true) {
    const pair = generateKeyPair();
    console.log(`Clave privada (guárdela fuera del repositorio):\n${pair.privateKeyHex}`);
    console.log(`Clave pública (va dentro de la app):\n${pair.publicKeyHex}`);
    return 0;
  }
  const mode = values.mode === 'release' ? 'release' : 'tester';

  const { drugs, sources, recalledDrugIds } = loadContent(join(ROOT, 'content'));
  const errors = checkContent(drugs, sources, mode, new Date());
  if (errors.length > 0) {
    console.error(`✗ ${errors.length} error(es) en el contenido (modo ${mode}):`);
    for (const e of errors) console.error(`  [${e.code}] ${e.drugId}: ${e.detail}`);
    return 1;
  }

  const privateKey = signingKey(mode);
  const contentHash = sha256Hex(canonicalJson({ drugs, sources })).slice(0, 8);
  const contentVersion = `${new Date().toISOString().slice(0, 10).replaceAll('-', '.')}-${contentHash}`;
  const bundle: Bundle = {
    schemaVersion: 1,
    contentVersion,
    generatedAt: new Date().toISOString(),
    mode,
    drugs,
    sources,
  };
  const { bundleJson, signatureHex } = signBundle(bundle, privateKey);
  const manifest: Manifest = {
    contentVersion,
    sha256: sha256Hex(bundleJson),
    recalledDrugIds,
    minAppVersion: MIN_APP_VERSION,
    // Segundos desde 1970: crece en cada publicación sin estado adicional.
    sequence: Math.floor(Date.now() / 1000),
    issuedAt: new Date().toISOString(),
  };
  const signedManifest = signManifest(manifest, privateKey);

  const out = join(ROOT, 'dist', 'content');
  mkdirSync(out, { recursive: true });
  writeFileSync(join(out, 'bundle.json'), bundleJson);
  writeFileSync(join(out, 'bundle.sig'), signatureHex);
  writeFileSync(join(out, 'manifest.json'), signedManifest.manifestJson);
  writeFileSync(join(out, 'manifest.sig'), signedManifest.signatureHex);
  writeFileSync(join(out, 'public-key.txt'), publicKeyFromPrivate(privateKey));

  const drafts = drugs.filter((d) => d.review.status === 'borrador').length;
  console.log(
    `✓ Paquete ${contentVersion} (${mode}): ${drugs.length} fichas, ${drafts} en borrador.`,
  );
  console.log(`  Salida: ${out}`);
  return 0;
}

try {
  process.exitCode = main();
} catch (err) {
  console.error(`✗ ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}
