import type { ScoreBand, ScoreDef, ScoreItem } from './scores';

/**
 * New Ballard Score (NBS): Ballard JL, Khoury JC, Wedig K, et al. New Ballard Score, expanded to
 * include extremely premature infants. J Pediatr 1991;119:417–423, figura 1 y tabla de madurez.
 * Los textos de las opciones neuromusculares que en la figura son dibujos vienen de las páginas
 * oficiales de entrenamiento (ballardscore.com): puntos de referencia del signo de la bufanda y del
 * talón-oreja, y descripción de la postura (rana en el 3, aducción de caderas en el 4).
 */

const SOURCES = [
  'Ballard JL, Khoury JC, Wedig K, Wang L, Eilers-Walsman BL, Lipp R. New Ballard Score, expanded to include extremely premature infants. J Pediatr. 1991;119(3):417–423, figura 1 (reimpresión en ballardscore.com).',
  'Ballard Score, páginas oficiales de entrenamiento (ballardscore.com): método de cada criterio neuromuscular.',
];

const neuro: ScoreItem[] = [
  {
    id: 'postura',
    label: 'Postura',
    options: [
      { label: 'Brazos y piernas extendidos', points: 0 },
      { label: 'Brazos extendidos; inicio de flexión de las piernas', points: 1 },
      { label: 'Brazos extendidos; piernas flexionadas y separadas', points: 2 },
      {
        label: 'Brazos algo flexionados; caderas flexionadas sin aducción («en rana»)',
        points: 3,
      },
      { label: 'Flexión completa de brazos y piernas; caderas en aducción', points: 4 },
    ],
  },
  {
    id: 'ventana',
    label: 'Ventana cuadrada (muñeca)',
    options: [
      { label: 'Más de 90°', points: -1 },
      { label: '90°', points: 0 },
      { label: '60°', points: 1 },
      { label: '45°', points: 2 },
      { label: '30°', points: 3 },
      { label: '0°', points: 4 },
    ],
  },
  {
    id: 'rebote',
    label: 'Rebote del brazo',
    options: [
      { label: '180° (sin rebote)', points: 0 },
      { label: '140° a 180°', points: 1 },
      { label: '110° a 140°', points: 2 },
      { label: '90° a 110°', points: 3 },
      { label: 'Menos de 90° (el puño toca la cara)', points: 4 },
    ],
  },
  {
    id: 'popliteo',
    label: 'Ángulo poplíteo',
    options: [
      { label: '180°', points: -1 },
      { label: '160°', points: 0 },
      { label: '140°', points: 1 },
      { label: '120°', points: 2 },
      { label: '100°', points: 3 },
      { label: '90°', points: 4 },
      { label: 'Menos de 90°', points: 5 },
    ],
  },
  {
    id: 'bufanda',
    label: 'Signo de la bufanda',
    options: [
      { label: 'El codo llega al cuello (bufanda completa)', points: -1 },
      { label: 'El codo llega a la línea axilar del lado opuesto', points: 0 },
      { label: 'El codo llega a la línea mamilar del lado opuesto', points: 1 },
      { label: 'El codo llega al apéndice xifoides', points: 2 },
      { label: 'El codo llega a la línea mamilar del mismo lado', points: 3 },
      { label: 'El codo llega a la línea axilar del mismo lado', points: 4 },
    ],
  },
  {
    id: 'talon-oreja',
    label: 'Talón-oreja',
    options: [
      { label: 'Resistencia con el talón en la oreja', points: -1 },
      { label: 'Resistencia con el talón en la nariz', points: 0 },
      { label: 'Resistencia con el talón a la altura del mentón', points: 1 },
      { label: 'Resistencia con el talón en la línea mamilar', points: 2 },
      { label: 'Resistencia con el talón en la zona umbilical', points: 3 },
      { label: 'Resistencia con el talón en el pliegue femoral', points: 4 },
    ],
  },
];

const physical: ScoreItem[] = [
  {
    id: 'piel',
    label: 'Piel',
    options: [
      { label: 'Pegajosa, friable, transparente', points: -1 },
      { label: 'Gelatinosa, roja, translúcida', points: 0 },
      { label: 'Lisa, rosada, venas visibles', points: 1 },
      { label: 'Descamación superficial y/o erupción; pocas venas', points: 2 },
      { label: 'Agrietada, áreas pálidas, venas escasas', points: 3 },
      { label: 'Apergaminada, grietas profundas, sin vasos', points: 4 },
      { label: 'Correosa, agrietada, arrugada', points: 5 },
    ],
  },
  {
    id: 'lanugo',
    label: 'Lanugo',
    options: [
      { label: 'Ninguno', points: -1 },
      { label: 'Escaso', points: 0 },
      { label: 'Abundante', points: 1 },
      { label: 'Adelgazado', points: 2 },
      { label: 'Áreas sin lanugo', points: 3 },
      { label: 'Mayormente sin lanugo', points: 4 },
    ],
  },
  {
    id: 'plantar',
    label: 'Superficie plantar',
    options: [
      { label: 'Talón-dedo menos de 40 mm', points: -2 },
      { label: 'Talón-dedo de 40 a 50 mm', points: -1 },
      { label: 'Más de 50 mm, sin pliegues', points: 0 },
      { label: 'Marcas rojas tenues', points: 1 },
      { label: 'Solo pliegue transverso anterior', points: 2 },
      { label: 'Pliegues en los 2/3 anteriores', points: 3 },
      { label: 'Pliegues en toda la planta', points: 4 },
    ],
  },
  {
    id: 'mama',
    label: 'Mama',
    options: [
      { label: 'Imperceptible', points: -1 },
      { label: 'Apenas perceptible', points: 0 },
      { label: 'Areola plana, sin botón', points: 1 },
      { label: 'Areola punteada, botón de 1 a 2 mm', points: 2 },
      { label: 'Areola elevada, botón de 3 a 4 mm', points: 3 },
      { label: 'Areola completa, botón de 5 a 10 mm', points: 4 },
    ],
  },
  {
    id: 'ojo-oreja',
    label: 'Ojo / oreja',
    options: [
      { label: 'Párpados fusionados firmemente', points: -2 },
      { label: 'Párpados fusionados levemente', points: -1 },
      { label: 'Párpados abiertos; pabellón plano, queda plegado', points: 0 },
      { label: 'Pabellón algo curvado, blando; retracción lenta', points: 1 },
      { label: 'Pabellón bien curvado, blando pero con retracción rápida', points: 2 },
      { label: 'Formado y firme; retracción instantánea', points: 3 },
      { label: 'Cartílago grueso; oreja rígida', points: 4 },
    ],
  },
];

const male: ScoreItem = {
  id: 'genitales',
  label: 'Genitales (masculinos)',
  options: [
    { label: 'Escroto plano, liso', points: -1 },
    { label: 'Escroto vacío, arrugas tenues', points: 0 },
    { label: 'Testículos en el conducto superior, arrugas escasas', points: 1 },
    { label: 'Testículos descendiendo, pocas arrugas', points: 2 },
    { label: 'Testículos descendidos, buenas arrugas', points: 3 },
    { label: 'Testículos péndulos, arrugas profundas', points: 4 },
  ],
};

const female: ScoreItem = {
  id: 'genitales',
  label: 'Genitales (femeninos)',
  options: [
    { label: 'Clítoris prominente, labios planos', points: -1 },
    { label: 'Clítoris prominente, labios menores pequeños', points: 0 },
    { label: 'Clítoris prominente, labios menores creciendo', points: 1 },
    { label: 'Labios mayores y menores igual de prominentes', points: 2 },
    { label: 'Labios mayores grandes, menores pequeños', points: 3 },
    { label: 'Labios mayores cubren el clítoris y los menores', points: 4 },
  ],
};

/** Tabla de madurez (score → semanas): −10 → 20 y cada 5 puntos, 2 semanas más, hasta 50 → 44. */
const RATING: [number, number][] = Array.from({ length: 13 }, (_, i) => [-10 + i * 5, 20 + i * 2]);

/** Semanas de la tabla de madurez; entre dos filas no interpola, da el rango. */
export function ballardWeeks(total: number): string {
  if (total < -10) return 'menos de 20 semanas (fuera de la tabla)';
  const exact = RATING.find(([s]) => s === total);
  if (exact) return `${exact[1]} semanas`;
  const lower = [...RATING].reverse().find(([s]) => s < total);
  const upper = RATING.find(([s]) => s > total);
  return lower && upper ? `entre ${lower[1]} y ${upper[1]} semanas` : 'fuera de la tabla';
}

/** Una banda por interpretación: los totales seguidos con la misma lectura se agrupan. */
const bands: ScoreBand[] = [];
for (let t = -12; t <= 50; t++) {
  const label = ballardWeeks(t);
  const last = bands[bands.length - 1];
  if (last?.label === label) last.max = t;
  else bands.push({ min: t, max: t, label, tone: 'ok' });
}

const howTo =
  'Se suman los 6 criterios de madurez neuromuscular y los 6 de madurez física; el total se lleva a la tabla de madurez (−10 = 20 semanas, 50 = 44 semanas, 2 semanas cada 5 puntos). Entre dos filas de la tabla la app da el rango, sin interpolar.';

const base = (id: string, title: string, genitals: ScoreItem): ScoreDef => ({
  id,
  title,
  subtitle: 'Edad gestacional (New Ballard Score)',
  icon: 'baby-face-outline',
  items: [...neuro, ...physical, genitals],
  bands,
  howTo,
  sources: SOURCES,
});

export const BALLARD_SCORES: ScoreDef[] = [
  base('ballard-nino', 'Ballard', male),
  base('ballard-nina', 'Ballard', female),
];
