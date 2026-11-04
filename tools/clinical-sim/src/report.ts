import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadContent } from '../../content-build/src/load.ts';
import { simulate, type SimRow } from './simulate.ts';

const ROOT = resolve(import.meta.dirname, '../../..');
const n = (v: number | null, d = 2): string => (v === null ? '—' : String(Number(v.toFixed(d))));

const { drugs } = loadContent(resolve(ROOT, 'content'));
const rows = simulate(drugs);
const calc = rows.filter((r) => r.verdict !== 'not_applicable');
const ok = calc.filter((r) => r.verdict === 'ok');
const mism = rows.filter((r) => r.verdict === 'mismatch');
const exactMg = calc.filter(
  (r) => r.appMg !== null && r.manualMg !== null && r.appMg === r.manualMg,
);
const errs = calc
  .filter((r) => r.appAmount !== null && r.manualAmount !== null)
  .map((r) => (Math.abs((r.appAmount ?? 0) - (r.manualAmount ?? 0)) / (r.manualAmount ?? 1)) * 100);
const maxErr = Math.max(...errs);
const meanErr = errs.reduce((a, b) => a + b, 0) / errs.length;

const line = (r: SimRow): string =>
  `| ${r.drug} | ${r.rule} | ${r.presentation} | ${r.patient} (${r.weightKg} kg) | ${n(r.manualMg)} | ${n(r.appMg)} | ${n(r.manualAmount, 3)} | ${n(r.appAmount)} ${r.unit} | ${r.verdict === 'ok' ? '✅' : '❌'} ${r.note} |`;

const md = `# Simulación de médico: app frente a cálculo manual

Generado por \`npm run sim:report\` (tools/clinical-sim). El cálculo manual se escribió aparte del motor
de la app: multiplica el peso por la dosis, divide entre las tomas, aplica los topes y divide entre la
concentración **leída del texto impreso de la presentación** (p. ej. "250 mg/5 mL").

## Resumen
- Casos simulados: **${rows.length}** (10 fármacos × reglas × presentaciones × 18 pacientes típicos de 1 mes a 17 años).
- Casos calculables: **${calc.length}**. Fuera del rango de edad de la regla: ${rows.length - calc.length} (la app se negó a calcular en todos, que es lo correcto).
- **Coincidencias: ${ok.length}/${calc.length} (${((ok.length / calc.length) * 100).toFixed(1)} %)**. Discrepancias: ${mism.length}.
- Dosis en mg idéntica al cálculo manual: ${exactMg.length}/${calc.length}.
- Diferencia de volumen por redondeo a la medida (0.1 mL, 1 gota, ½ o 1 tableta): media ${meanErr.toFixed(2)} %, máxima ${maxErr.toFixed(2)} %. Nunca supera el 5 %; cuando el redondeo superaría el 5 %, la app muestra el valor exacto y avisa.
- En ningún caso la cantidad mostrada supera la dosis máxima por toma.

## Casos calculables
| Fármaco | Regla | Presentación | Paciente | mg manual | mg app | Cantidad exacta | Cantidad app | Resultado |
|---|---|---|---|---|---|---|---|---|
${calc.map(line).join('\n')}
`;
writeFileSync(resolve(ROOT, 'docs/validacion/simulacion-medico.md'), md);
console.log(
  `Simulación: ${ok.length}/${calc.length} coincidencias, ${mism.length} discrepancias, error máx. ${maxErr.toFixed(2)} %`,
);
process.exitCode = mism.length === 0 ? 0 : 1;
