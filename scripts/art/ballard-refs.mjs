// Plantillas de pose para las ilustraciones neuromusculares de Ballard.
// Cada SVG tiene el ángulo o el punto de referencia exacto de su opción (figura 1 de Ballard 1991);
// en Google Flow se pinta encima pidiendo conservar la pose, y el resultado se mide antes de usarlo
// (ver docs/validacion/fuentes-verificadas.md). Uso: node scripts/art/ballard-refs.mjs CARPETA
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.argv[2] ?? 'ballard-refs';
mkdirSync(out, { recursive: true });

const R = (d) => (d * Math.PI) / 180;
const P = (o, deg, len) => [o[0] + len * Math.cos(R(deg)), o[1] - len * Math.sin(R(deg))];
const skin = '#F6C7A6';
const line = '#B9785A';
const L = (pts, w) => {
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');
  return `<path d="${d}" stroke="${line}" stroke-width="${w + 1.6}" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="${d}" stroke="${skin}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`;
};
const ell = (cx, cy, rx, ry) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${skin}" stroke="${line}" stroke-width="0.9"/>`;
const circ = (cx, cy, r, f = skin) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" stroke="${line}" stroke-width="0.9"/>`;
const topBaby = () =>
  L(
    [
      [72, 86],
      [69, 112],
    ],
    12,
  ) +
  L(
    [
      [88, 86],
      [91, 112],
    ],
    12,
  ) +
  `<rect x="75" y="30" width="10" height="10" fill="${skin}"/>` +
  ell(80, 62, 21, 26) +
  '<path d="M60 74 Q80 70 100 74 L98 86 Q80 96 62 86 Z" fill="#fff" stroke="#D9CFC8" stroke-width="0.8"/>' +
  circ(80, 21, 14);
const sideBaby = () =>
  L(
    [
      [100, 82],
      [128, 84],
      [152, 86],
    ],
    11,
  ) +
  ell(74, 76, 32, 14) +
  '<path d="M92 64 Q104 66 108 76 Q106 88 92 89 Z" fill="#fff" stroke="#D9CFC8" stroke-width="0.8"/>' +
  `<rect x="38" y="68" width="10" height="14" fill="${skin}"/>` +
  circ(30, 68, 15) +
  `<ellipse cx="27" cy="69" rx="3.4" ry="4.6" fill="#EBAA87" stroke="${line}" stroke-width="0.7"/>`;

const refs = {};
// Ventana cuadrada: ángulo entre la palma y la cara anterior del antebrazo (>90 se dibuja a 120).
[120, 90, 60, 45, 30, 0].forEach((deg, i) => {
  const piv = [78, 44];
  const pal = P(piv, -90 + deg, 18);
  const tip = P(piv, -90 + deg, 34);
  refs[`ventana-${i}`] =
    L(
      [
        [72, 120],
        [72, 44],
      ],
      17,
    ) +
    L([piv, pal], 14) +
    L([pal, tip], 10);
});
// Rebote del brazo: ángulo del codo (los rangos se dibujan con un valor interno).
[180, 160, 125, 100, 65].forEach((deg, i) => {
  let s = topBaby();
  for (const [sh, up, side] of [
    [[63, 40], -104, 1],
    [[97, 40], -76, -1],
  ]) {
    const el = P(sh, up, 24);
    const hd = P(el, up - side * (180 - deg), 21);
    s += L([sh, el, hd], 8.5) + circ(hd[0], hd[1], 4.6);
  }
  refs[`rebote-${i}`] = s;
});
// Ángulo poplíteo: muslo sobre el abdomen, ángulo detrás de la rodilla (<90 se dibuja a 75).
[180, 160, 140, 120, 100, 90, 75].forEach((deg, i) => {
  const hip = [104, 76];
  const kn = P(hip, 160, 32);
  const legDir = 160 - (180 - deg);
  const an = P(kn, legDir, 30);
  refs[`popliteo-${i}`] = sideBaby() + L([hip, kn], 13) + L([kn, an, P(an, legDir - 90, 6)], 9.5);
});
// Bufanda: cuello, axilar opuesta, mamilar opuesta, xifoides, mamilar y axilar del mismo lado.
[
  [109, 33],
  [103, 56],
  [91, 56],
  [80, 60],
  [69, 58],
  [57, 58],
].forEach((el, i) => {
  const hd = [Math.min(el[0] + 14, 118), el[1] - 15];
  refs[`bufanda-${i}`] =
    topBaby() +
    L(
      [
        [100, 40],
        [105, 62],
        [108, 78],
      ],
      8.5,
    ) +
    circ(108, 80, 4.6) +
    L([[60, 40], el, hd], 8.5) +
    circ(hd[0], hd[1], 4.6);
});
// Talón-oreja: oreja, nariz, mentón, línea mamilar, ombligo y pliegue femoral (pierna de 2 segmentos).
[
  [28, 66],
  [33, 50],
  [46, 57],
  [61, 58],
  [78, 58],
  [95, 62],
].forEach((T, i) => {
  const H = [102, 74];
  const seg = 38;
  const dx = T[0] - H[0];
  const dy = T[1] - H[1];
  const d = Math.hypot(dx, dy);
  const [ux, uy] = [dx / d, dy / d];
  const a = d / 2;
  const h = Math.sqrt(Math.max(0, seg * seg - a * a));
  const k1 = [H[0] + a * ux - h * uy, H[1] + a * uy + h * ux];
  const k2 = [H[0] + a * ux + h * uy, H[1] + a * uy - h * ux];
  const K = k1[1] < k2[1] ? k1 : k2;
  refs[`talon-oreja-${i}`] = sideBaby() + L([H, K], 12) + L([K, T, [T[0] + 1, T[1] - 6]], 9);
});

for (const [k, inner] of Object.entries(refs)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 160 106.667"><rect width="160" height="106.667" fill="#FBEDE0"/>${inner}</svg>`;
  writeFileSync(join(out, `ref-${k}.svg`), svg);
}
console.log(`${Object.keys(refs).length} plantillas en ${out}`);
