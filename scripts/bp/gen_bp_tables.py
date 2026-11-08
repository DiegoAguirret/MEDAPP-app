"""Escribe apps/mobile/src/domain/bpTables.ts desde el JSON extraído de las Tablas 4 y 5 de la AAP 2017.

El JSON se obtuvo del HTML oficial (publications.aap.org, Flynn JT et al., Pediatrics 2017;140(3):e20171904)
leyendo las celdas de cada tabla; se validó que las tallas coincidan en PAS y PAD y que «95th + 12» sea
exactamente p95 + 12 en todas las celdas.
Uso: python -I scripts/bp/gen_bp_tables.py <ruta-al-json>
"""
import json
import sys
from pathlib import Path

src = Path(sys.argv[1])
out = Path(__file__).resolve().parents[2] / 'apps/mobile/src/domain/bpTables.ts'
d = json.loads(src.read_text(encoding='utf-8'))

def arr(v):
    return '[' + ', '.join(f'{x:g}' for x in v) + ']'

lines = [
    '// Archivo generado por scripts/bp/gen_bp_tables.py; no editar a mano.',
    '// Fuente: AAP 2017 (Flynn JT et al. Pediatrics 2017;140(3):e20171904), Tablas 4 (niños) y 5 (niñas):',
    '// PA por edad (1–17 años) y percentil de talla (5, 10, 25, 50, 75, 90 y 95), con la talla en cm de',
    '// cada columna; s = sistólica y d = diastólica, en mm Hg.',
    '',
    'export interface BpRow {',
    '  s: readonly number[];',
    '  d: readonly number[];',
    '}',
    'export interface BpAge {',
    '  cm: readonly number[];',
    '  p50: BpRow;',
    '  p90: BpRow;',
    '  p95: BpRow;',
    '  p95p12: BpRow;',
    '}',
    '',
    'export const BP_TABLES: Record<"male" | "female", Record<number, BpAge>> = {',
]
for sex, key in (('male', 'boys'), ('female', 'girls')):
    lines.append(f'  {sex}: {{')
    for age in sorted(d[key], key=int):
        a = d[key][age]
        lines.append(f'    {age}: {{')
        lines.append(f'      cm: {arr(a["cm"])},')
        for p in ('p50', 'p90', 'p95', 'p95p12'):
            lines.append(f'      {p}: {{ s: {arr(a[p]["s"])}, d: {arr(a[p]["d"])} }},')
        lines.append('    },')
    lines.append('  },')
lines.append('};')
lines.append('')
out.write_text('\n'.join(lines), encoding='utf-8', newline='\n')
print('ok', out)
