"""Recorta a 3:2, reduce a 720x480 y guarda WebP en apps/mobile/assets/art/.

Uso: python -I process.py [nombre ...]   (sin nombres: procesa todos los .jpg de flow/)
Opcional: un archivo crop.json con {"nombre": [cx, cy]} (centro del recorte en fracciones 0–1).
"""
import json
import sys
from pathlib import Path

from PIL import Image

HERE = Path(r'C:/Users/Diego/AppData/Local/Temp/claude/1fe9c7206d3ef9d7/3848fbd5-d1a2-4d38-82f7-e48df0af7237/scratchpad/ai-art')
SRC = HERE / 'flow'
OUT = Path(r'C:/Users/Diego/Escritorio/MEDAPP/apps/mobile/assets/art')
OUT.mkdir(parents=True, exist_ok=True)
crops = json.loads((HERE / 'crop.json').read_text()) if (HERE / 'crop.json').exists() else {}

names = sys.argv[1:] or [p.stem for p in sorted(SRC.glob('*.jpg')) if not p.stem.startswith('sheet')]
for name in names:
    im = Image.open(SRC / f'{name}.jpg').convert('RGB')
    w, h = im.size
    cx, cy, *z = crops.get(name, [0.5, 0.5])
    zoom = z[0] if z else 1.0
    if w / h > 1.5:
        nw, nh = round(h * 1.5), h
    else:
        nw, nh = w, round(w / 1.5)
    nw, nh = round(nw / zoom), round(nh / zoom)
    left = min(max(round(cx * w - nw / 2), 0), w - nw)
    top = min(max(round(cy * h - nh / 2), 0), h - nh)
    im = im.crop((left, top, left + nw, top + nh)).resize((720, 480), Image.LANCZOS)
    dest = OUT / f'{name}.webp'
    im.save(dest, 'WEBP', quality=78, method=6)
    print(f'{name}: {dest.stat().st_size // 1024} KB')
