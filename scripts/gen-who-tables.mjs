// Genera apps/mobile/src/domain/growth/whoTables.ts a partir de las tablas LMS oficiales de la OMS.
//
// Uso: node scripts/gen-who-tables.mjs <carpeta-con-los-txt>
//
// Los .txt se descargan sin cambios de los repositorios oficiales de la OMS:
//   https://github.com/WorldHealthOrganization/anthro/tree/master/data-raw/growthstandards
//     weianthro, lenanthro, wflanthro, wfhanthro, bmianthro, hcanthro, acanthro (0–5 años, 2006)
//   https://github.com/WorldHealthOrganization/anthroplus/tree/main/data-raw/growthstandards
//     wfawho2007, hfawho2007, bfawho2007 (5–19 años, 2007)
// Cada fila de la salida conserva los valores L, M, S tal como vienen en el archivo.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = process.argv[2];
if (!dir) throw new Error('Falta la carpeta con las tablas de la OMS');

const TABLES = {
  wfa: { file: 'weianthro', step: 1 },
  lfa: { file: 'lenanthro', step: 1 },
  wfl: { file: 'wflanthro', step: 0.1 },
  wfh: { file: 'wfhanthro', step: 0.1 },
  bfa: { file: 'bmianthro', step: 1 },
  hcfa: { file: 'hcanthro', step: 1 },
  acfa: { file: 'acanthro', step: 1 },
  wfa07: { file: 'wfawho2007', step: 1 },
  hfa07: { file: 'hfawho2007', step: 1 },
  bfa07: { file: 'bfawho2007', step: 1 },
};

const out = [];
out.push('// Archivo generado por scripts/gen-who-tables.mjs; no editar a mano.');
out.push('// Fuente: tablas LMS de los Patrones de Crecimiento Infantil de la OMS (2006) y de la');
out.push(
  '// Referencia de Crecimiento OMS 2007, tomadas de los paquetes oficiales anthro y anthroplus.',
);
out.push('// Cada fila es «L,M,S»; las filas van separadas por «;» desde `start` cada `step`.');
out.push('');
out.push('export interface RawLms {');
out.push('  start: number;');
out.push('  step: number;');
out.push('  rows: string;');
out.push('}');
out.push('');
out.push('export const WHO_TABLES = {');
for (const [key, { file, step }] of Object.entries(TABLES)) {
  const lines = readFileSync(join(dir, `${file}.txt`), 'utf8')
    .trim()
    .split(/\r?\n/)
    .slice(1);
  out.push(`  ${key}: {`);
  for (const sex of ['1', '2']) {
    const rows = lines.map((l) => l.trim().split(/\s+/)).filter((c) => c[0] === sex);
    const xs = rows.map((c) => Number(c[1]));
    for (let i = 1; i < xs.length; i++) {
      if (Math.abs(xs[i] - xs[i - 1] - step) > 1e-6) {
        throw new Error(`${file} sexo ${sex}: salto en la fila ${i} (${xs[i - 1]} → ${xs[i]})`);
      }
    }
    const body = rows.map((c) => `${c[2]},${c[3]},${c[4]}`).join(';');
    out.push(`    ${sex === '1' ? 'male' : 'female'}: {`);
    out.push(`      start: ${xs[0]},`);
    out.push(`      step: ${step},`);
    out.push(`      rows: '${body}',`);
    out.push('    },');
  }
  out.push('  },');
}
out.push('} satisfies Record<string, { male: RawLms; female: RawLms }>;');
out.push('');

const target = 'apps/mobile/src/domain/growth/whoTables.ts';
writeFileSync(target, out.join('\n'));
console.log(`escrito ${target}`);
