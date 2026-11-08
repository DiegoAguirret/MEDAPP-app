"""Escribe apps/mobile/src/domain/bilirubinTables.ts desde aap2022.json."""
import json
from pathlib import Path

S = Path(r'C:/Users/Diego/AppData/Local/Temp/claude/1fe9c7206d3ef9d7/3848fbd5-d1a2-4d38-82f7-e48df0af7237/scratchpad/bili')
OUT = Path(r'C:/Users/Diego/Escritorio/MEDAPP/apps/mobile/src/domain/bilirubinTables.ts')
d = json.loads((S / 'aap2022.json').read_text())
names = {'1': 'photoNoRisk', '2': 'photoRisk', '3': 'exchangeNoRisk', '4': 'exchangeRisk'}
lines = [
    '// Archivo generado por scripts/bili/parse_aap2022.py; no editar a mano.',
    '// Fuente: AAP 2022 (Kemper AR et al. Pediatrics 2022;150(3):e2022058859), Supplemental Tables 1–4.',
    '// Cada cadena es el umbral de BST (mg/dL) para cada hora desde la hora 1; después del último',
    '// valor el umbral se mantiene (meseta de la tabla).',
    '',
    'export const AAP2022_TABLES = {',
]
for t, key in names.items():
    lines.append(f'  {key}: {{')
    for g, vals in sorted(d[t].items()):
        lines.append(f"    {g}: '{','.join(f'{v:.1f}' for v in vals)}',")
    lines.append('  },')
lines.append('} as const;')
lines.append('')
OUT.write_text('\n'.join(lines), encoding='utf-8', newline='\n')
print('ok', OUT.stat().st_size)
