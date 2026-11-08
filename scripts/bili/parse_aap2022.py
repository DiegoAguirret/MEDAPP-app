"""Extrae las Supplemental Tables 1–4 de AAP 2022 (Kemper et al., Pediatrics 2022;150:e2022058859).

Salida aap2022.json: {tabla: {eg: [umbral (mg/dL) para cada hora desde la hora 1 hasta la última
celda de la tabla]}}. Desde la última celda el umbral se mantiene (meseta marcada con «a» o día 14).

Validaciones: día 0 con 23 valores (horas 1–23), días 1–14 con 24; horas continuas; la celda
marcada con «a» es el inicio de la meseta y todo lo posterior es igual; umbrales no decrecientes.
La tabla 3 a 36 semanas viene en dos columnas intercaladas (horas 0–6 a la izquierda y 7–23 a la
derecha, con la derecha desplazada): se reconstruye por orden de aparición.
"""
import json
import re
from pathlib import Path

D = Path(r'C:/Users/Diego/AppData/Local/Temp/claude/1fe9c7206d3ef9d7/3848fbd5-d1a2-4d38-82f7-e48df0af7237/scratchpad/bili')
lines = (D / 'neored.txt').read_text(encoding='utf-8', errors='ignore').split('\n')

NUM = re.compile(r'^\d+\.\d[a-z]?$')
table = None
ga = None
blocks: dict = {}
for line in lines:
    m = re.match(r'\s*SUPPLEMENTAL TABLE (\d)', line)
    if m:
        table, ga = int(m.group(1)), None
        continue
    if table is None:
        continue
    m = re.match(r'\s*Gestational age of (\d\d)', line)
    if m:
        ga = int(m.group(1))
        blocks.setdefault(table, {})[ga] = []
        continue
    if ga is None or re.match(r'\s*[a-z]The threshold', line) or 'Downloaded' in line:
        continue
    toks = line.split()
    if not toks:
        continue
    if re.match(r'^\d{1,2}$', toks[0]) and len(toks) > 1 and all(NUM.match(t) for t in toks[1:]):
        blocks[table][ga].append(('day', int(toks[0]), toks[1:], line))
    elif all(NUM.match(t) for t in toks) and len(toks) >= 10:
        blocks[table][ga].append(('right', None, toks, line))

def num(t: str) -> float:
    return float(re.sub('[a-z]', '', t))

out: dict = {}
problems = []
for t, gas in sorted(blocks.items()):
    for g, rows in sorted(gas.items()):
        hours: dict[int, str] = {}
        if any(kind == 'right' for kind, *_ in rows):
            lefts = [(d, toks) for kind, d, toks, _ in rows if kind == 'day']
            rights = []
            for kind, d, toks, line in rows:
                if kind == 'right':
                    rights.append(toks)
                else:
                    n_left = 6 if d == 0 else 7
                    if len(toks) > n_left:
                        rights.append(toks[n_left:])
            for d, toks in lefts:
                n_left = 6 if d == 0 else 7
                start = 1 if d == 0 else 0
                for k, tok in enumerate(toks[:n_left]):
                    hours[d * 24 + start + k] = tok
            for d, toks in enumerate(rights):
                if len(toks) != 17:
                    problems.append(f'T{t} EG{g} bloque derecho {d} con {len(toks)} valores')
                for k, tok in enumerate(toks):
                    hours[d * 24 + 7 + k] = tok
        else:
            for kind, d, toks, _ in rows:
                exp = 23 if d == 0 else 24
                if len(toks) != exp:
                    problems.append(f'T{t} EG{g} día {d} con {len(toks)} valores')
                start = 1 if d == 0 else 0
                for k, tok in enumerate(toks):
                    hours[d * 24 + start + k] = tok
        last = max(hours)
        missing = [h for h in range(1, last + 1) if h not in hours]
        if missing:
            problems.append(f'T{t} EG{g} faltan horas {missing[:5]} ({len(missing)})')
            continue
        values = [num(hours[h]) for h in range(1, last + 1)]
        marked = [h for h in range(1, last + 1) if hours[h][-1].isalpha()]
        if marked:
            ph = marked[0]
            values = values[:ph]  # hasta la celda marcada inclusive
            if any(num(hours[h]) != values[-1] for h in range(ph, last + 1)):
                problems.append(f'T{t} EG{g} la meseta desde {ph} h no es constante')
        if any(b < a for a, b in zip(values, values[1:])):
            problems.append(f'T{t} EG{g} umbral decreciente')
        out.setdefault(str(t), {})[str(g)] = values
        print(f'T{t} EG{g}: horas 1–{len(values)}{" (meseta " + str(values[-1]) + ")" if marked else ""}')
(D / 'aap2022.json').write_text(json.dumps(out), encoding='utf-8')
print('PROBLEMAS:\n' + '\n'.join(problems) if problems else 'sin problemas')
