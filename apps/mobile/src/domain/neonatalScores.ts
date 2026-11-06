import type { ScoreDef } from './scores';

/**
 * Calculadoras de neonatología, en el orden en que se usan al nacer. Textos y puntos copiados de
 * las fuentes citadas en cada una (verificación: docs/validacion/fuentes-verificadas.md).
 */
const NTS214 =
  'NTS N° 214-MINSA/DGIESP-2024, Norma Técnica de Salud para la Atención Integral de Salud Neonatal (RM 545-2024/MINSA)';

const apgar: ScoreDef = {
  id: 'apgar',
  title: 'Apgar',
  subtitle: 'Vitalidad al nacer, al minuto y a los 5 minutos',
  icon: 'heart-pulse',
  items: [
    {
      id: 'fc',
      label: 'Frecuencia cardíaca',
      options: [
        { label: 'Ausente', points: 0 },
        { label: 'Menos de 100 lpm', points: 1 },
        { label: 'Más de 100 lpm', points: 2 },
      ],
    },
    {
      id: 'resp',
      label: 'Esfuerzo respiratorio',
      options: [
        { label: 'Ausente', points: 0 },
        { label: 'Irregular, lento', points: 1 },
        { label: 'Llanto vigoroso', points: 2 },
      ],
    },
    {
      id: 'tono',
      label: 'Tono muscular',
      options: [
        { label: 'Flácido', points: 0 },
        { label: 'Extremidades algo flexionadas', points: 1 },
        { label: 'Movimientos activos', points: 2 },
      ],
    },
    {
      id: 'reflejo',
      label: 'Respuesta a estímulos (irritabilidad refleja)',
      options: [
        { label: 'Sin respuesta', points: 0 },
        { label: 'Muecas', points: 1 },
        { label: 'Llanto', points: 2 },
      ],
    },
    {
      id: 'color',
      label: 'Coloración',
      options: [
        { label: 'Cianosis o palidez', points: 0 },
        { label: 'Acrocianosis, tronco rosado', points: 1 },
        { label: 'Rosado', points: 2 },
      ],
    },
  ],
  bands: [
    { min: 0, max: 3, label: 'Bajo', tone: 'danger' },
    { min: 4, max: 6, label: 'Moderadamente anormal', tone: 'warning' },
    { min: 7, max: 10, label: 'Tranquilizador', tone: 'ok' },
  ],
  howTo:
    'Se evalúa al minuto y a los 5 minutos (NTS 214). Si a los 5 minutos es menor de 7, se repite cada 5 minutos hasta los 20 (ACOG/AAP). La interpretación es la del puntaje de los 5 minutos en el recién nacido a término y pretérmino tardío (ACOG/AAP). La necesidad de reanimación no se decide con el Apgar (NTS 214).',
  sources: [
    `${NTS214}, pág. 24–25.`,
    'ACOG Committee Opinion N° 644 / AAP, «The Apgar Score», 2015 (Pediatrics 2015;136:819–822): franjas de interpretación.',
  ],
};

const silverman: ScoreDef = {
  id: 'silverman-andersen',
  title: 'Silverman-Andersen',
  subtitle: 'Dificultad respiratoria del recién nacido',
  icon: 'lungs',
  items: [
    {
      id: 'movimientos',
      label: 'Movimientos tóraco-abdominales',
      options: [
        { label: 'Rítmicos y regulares', points: 0 },
        { label: 'Tórax inmóvil, abdomen en movimiento', points: 1 },
        { label: 'Disociación tóraco-abdominal', points: 2 },
      ],
    },
    {
      id: 'tiraje',
      label: 'Tiraje intercostal',
      options: [
        { label: 'No', points: 0 },
        { label: 'Leve', points: 1 },
        { label: 'Intenso y constante', points: 2 },
      ],
    },
    {
      id: 'xifoidea',
      label: 'Retracción xifoidea',
      options: [
        { label: 'No', points: 0 },
        { label: 'Leve', points: 1 },
        { label: 'Intenso', points: 2 },
      ],
    },
    {
      id: 'aleteo',
      label: 'Aleteo nasal',
      options: [
        { label: 'No', points: 0 },
        { label: 'Leve', points: 1 },
        { label: 'Intenso', points: 2 },
      ],
    },
    {
      id: 'quejido',
      label: 'Quejido respiratorio',
      options: [
        { label: 'No', points: 0 },
        { label: 'Leve', points: 1 },
        { label: 'Intenso y constante', points: 2 },
      ],
    },
  ],
  bands: [
    { min: 0, max: 3, label: 'Leve', tone: 'ok' },
    { min: 4, max: 6, label: 'Moderada', tone: 'warning' },
    { min: 7, max: 10, label: 'Severa', tone: 'danger' },
  ],
  howTo:
    'Signos y puntos de la guía MINSA 2007. Sus franjas de interpretación se solapan («superior a 3» discreta, «entre 3 y 5» moderada), así que se usan las de la guía de Nicaragua 2013, que no se solapan: leve 0–3, moderada 4–6, severa más de 6. Según esa guía, hasta 2 puntos pueden ser fisiológicos en la primera hora; después debe ser 0. La guía MINSA 2007 indica asistencia ventilatoria con más de 7.',
  sources: [
    'MINSA Perú, Guías de práctica clínica para la atención del recién nacido (Guía Técnica, 2007), pág. 132: tabla de signos.',
    'MINSA Nicaragua, Normativa 108, Guía Clínica para la Atención del Neonato (2013), pág. 133: franjas leve, moderada y severa.',
  ],
};

const capurro: ScoreDef = {
  id: 'capurro',
  title: 'Capurro',
  subtitle: 'Edad gestacional por examen físico (somático)',
  icon: 'calendar-clock',
  items: [
    {
      id: 'oreja',
      label: 'Forma de la oreja',
      options: [
        { label: 'Chata, deforme; pabellón no incurvado', points: 0 },
        { label: 'Pabellón parcialmente incurvado en el borde superior', points: 8 },
        { label: 'Pabellón incurvado en todo el borde superior', points: 16 },
        { label: 'Pabellón totalmente incurvado', points: 24 },
      ],
    },
    {
      id: 'mama',
      label: 'Tamaño de la glándula mamaria',
      options: [
        { label: 'No palpable', points: 0 },
        { label: 'Palpable, menor de 5 mm', points: 5 },
        { label: 'Palpable, entre 5 y 10 mm', points: 10 },
        { label: 'Palpable, mayor de 10 mm', points: 15 },
      ],
    },
    {
      id: 'pezon',
      label: 'Formación del pezón',
      options: [
        { label: 'Apenas visible, sin areola', points: 0 },
        { label: 'Diámetro menor de 7.5 mm; areola lisa y chata', points: 5 },
        { label: 'Diámetro mayor de 7.5 mm; areola punteada, borde no elevado', points: 10 },
        { label: 'Diámetro mayor de 7.5 mm; areola punteada, borde levantado', points: 15 },
      ],
    },
    {
      id: 'piel',
      label: 'Textura de la piel',
      options: [
        { label: 'Muy fina, gelatinosa', points: 0 },
        { label: 'Fina, lisa', points: 5 },
        { label: 'Más gruesa, descamación superficial discreta', points: 10 },
        { label: 'Gruesa, grietas superficiales, descamación en manos y pies', points: 15 },
        { label: 'Gruesa, grietas profundas apergaminadas', points: 20 },
      ],
    },
    {
      id: 'pliegues',
      label: 'Pliegues plantares',
      options: [
        { label: 'Sin pliegues', points: 0 },
        { label: 'Marcas mal definidas en la mitad anterior', points: 5 },
        {
          label: 'Marcas bien definidas en la mitad anterior; surcos en el tercio anterior',
          points: 10,
        },
        { label: 'Surcos en la mitad anterior', points: 15 },
        { label: 'Surcos en más de la mitad anterior', points: 20 },
      ],
    },
  ],
  bands: [],
  bandsOn: 'derived',
  formula: { constant: 204, divisor: 7, unit: 'semanas' },
  howTo:
    'Se suman los puntos de las 5 características, se suman 204 (constante) y el resultado se divide entre 7 (NTS 214). El método tiene un margen de ± 9 días (NTS 106). En la tercera opción de pliegues, la NTS 214 dice «1/2 anterior»; la NTS 106 dice «1/3», que es la progresión que usa esta calculadora.',
  sources: [
    `${NTS214}, Anexo 4, pág. 61–62: tabla, constante 204 y división entre 7.`,
    'NTS N° 106-MINSA/DGSP-V.01 (RM 828-2013/MINSA), Anexo 2: margen de ± 9 días y «1/3 anterior» en pliegues.',
  ],
};

export const NEONATAL_SCORES: ScoreDef[] = [apgar, silverman, capurro];

export const findScore = (id: string): ScoreDef | undefined =>
  NEONATAL_SCORES.find((d) => d.id === id);
