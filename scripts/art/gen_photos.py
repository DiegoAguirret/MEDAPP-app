"""Escribe apps/mobile/src/ui/art/photos.ts con un import por cada WebP de assets/art."""
from pathlib import Path

ART = Path(r'C:/Users/Diego/Escritorio/MEDAPP/apps/mobile/assets/art')
OUT = Path(r'C:/Users/Diego/Escritorio/MEDAPP/apps/mobile/src/ui/art/photos.ts')
SHARED = {'capurro-mama': 4, 'silverman-movimientos': 3, }
# Ballard tiene una versión para niño y otra para niña; las ilustraciones neuromusculares son las mismas.
SCORES = {
    'capurro': ['capurro'],
    'silverman': ['silverman-andersen'],
    'ballard': ['ballard-nino', 'ballard-nina'],
}
lines = [
    "import type { ImageSourcePropType } from 'react-native';",
]
entries = []
for i, f in enumerate(sorted(ART.glob('*.webp'))):
    prefix, *rest, idx = f.stem.split('-')
    item = '-'.join(rest)  # el criterio puede llevar guion, p. ej. talon-oreja
    var = f'img{i}'
    lines.append(f"import {var} from '../../../assets/art/{f.name}';")
    if idx == 'all':  # una sola imagen para todas las opciones; las marcas van en OVERLAYS
        keys = range(SHARED[f'{prefix}-{item}'])
    else:
        keys = [idx]
    entries += [f"  '{sid}/{item}/{k}': {var}," for sid in SCORES[prefix] for k in keys]
lines += [
    '',
    '/**',
    ' * Ilustraciones raster de las opciones de las escalas neonatales (generadas con Google Flow,',
    ' * revisadas una por una contra el texto de su opción). Clave: «escala/criterio/índice».',
    ' */',
    'export const PHOTOS: Record<string, ImageSourcePropType> = {',
    *entries,
    '};',
    '',
]
OUT.write_text('\n'.join(lines), encoding='utf-8', newline='\n')
print(f'{len(entries)} imágenes')
