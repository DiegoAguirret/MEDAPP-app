// Genera apps/mobile/src/content/bundled.ts con el paquete firmado (texto exacto)
// y la clave pública con la que la app lo verifica.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const src = (f) => readFileSync(resolve(root, 'dist/content', f), 'utf8').trim();
const dest = resolve(root, 'apps/mobile/src/content');
mkdirSync(dest, { recursive: true });

const file = `// ARCHIVO GENERADO por scripts/copy-content.mjs — no editar a mano.
export const BUNDLE_JSON = ${JSON.stringify(src('bundle.json'))};
export const BUNDLE_SIG = ${JSON.stringify(src('bundle.sig'))};
export const MANIFEST_JSON = ${JSON.stringify(src('manifest.json'))};
export const MANIFEST_SIG = ${JSON.stringify(src('manifest.sig'))};
export const CONTENT_PUBLIC_KEY = ${JSON.stringify(src('public-key.txt'))};
`;
writeFileSync(resolve(dest, 'bundled.ts'), file);
console.log(`Contenido generado en ${resolve(dest, 'bundled.ts')}`);
