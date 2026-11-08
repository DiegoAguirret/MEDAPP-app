import type { ScoreBand, ScoreDef, ScoreItem } from './scores';

/**
 * Escala del Coma de Glasgow modificada para lactantes y niños, copiada de la tabla del Manual MSD
 * (versión para profesionales, en español), que la adapta de Davis 1987, James 1985, Morray 1984
 * y Carney 2017. Una versión por columna: la tabla no fija una edad de corte entre ambas.
 */
const MSD =
  'Manual MSD, versión para profesionales: «Escala del Coma de Glasgow modificada para lactantes y niños» (adaptada de Davis RJ et al., 1987; James H et al., 1985; Morray JP et al., Crit Care Med 1984;12:1018–1020; Carney N et al., Neurosurgery 2017;80:6–15).';

const eyes: ScoreItem = {
  id: 'ojos',
  label: 'Apertura de los ojos',
  options: [
    { label: 'Abre espontáneamente', points: 4 },
    { label: 'Los abre en respuesta a los estímulos verbales', points: 3 },
    { label: 'Los abre sólo en respuesta al dolor', points: 2 },
    { label: 'Ausencia de respuesta', points: 1 },
  ],
};

const bands: ScoreBand[] = [
  {
    min: 3,
    max: 8,
    label:
      '≤ 8: sugiere la posible necesidad de intubación y ventilación, y de controlar la presión intracraneal',
    tone: 'danger',
  },
  { min: 9, max: 12, label: '≤ 12: sugiere un traumatismo encefálico grave', tone: 'warning' },
  { min: 13, max: 15, label: 'Más de 12: sin los criterios de gravedad de la tabla', tone: 'ok' },
];

const howTo =
  'Elige la columna según el paciente: lactantes (respuesta verbal con arrullos, balbuceo o llanto) o niños (respuesta verbal con palabras). Si el paciente está intubado, inconsciente o no habla, la parte más importante de la escala es la respuesta motora y debe valorarse con mucho cuidado.';

const infant: ScoreDef = {
  id: 'glasgow-lactante',
  title: 'Glasgow lactante',
  subtitle: 'Escala del coma modificada, columna de lactantes',
  icon: 'baby-face-outline',
  items: [
    eyes,
    {
      id: 'verbal',
      label: 'Respuesta verbal',
      options: [
        { label: 'Arrullos y balbuceos', points: 5 },
        { label: 'Llanto irritable', points: 4 },
        { label: 'Llora en respuesta al dolor', points: 3 },
        { label: 'Se queja en respuesta al dolor', points: 2 },
        { label: 'Ausencia de respuesta', points: 1 },
      ],
    },
    {
      id: 'motora',
      label: 'Respuesta motora',
      options: [
        { label: 'Se mueve espontánea e intencionalmente', points: 6 },
        { label: 'Se retira al tocarlo', points: 5 },
        { label: 'Se retira en respuesta al dolor', points: 4 },
        {
          label: 'Responde al dolor con una postura de decorticación (flexión anormal)',
          points: 3,
        },
        {
          label: 'Responde al dolor con una postura de descerebración (extensión anormal)',
          points: 2,
        },
        { label: 'Ausencia de respuesta', points: 1 },
      ],
    },
  ],
  bands,
  howTo,
  sources: [MSD],
};

const child: ScoreDef = {
  id: 'glasgow-nino',
  title: 'Glasgow niño',
  subtitle: 'Escala del coma modificada, columna de niños',
  icon: 'human-child',
  items: [
    eyes,
    {
      id: 'verbal',
      label: 'Respuesta verbal',
      options: [
        { label: 'Orientada y apropiada', points: 5 },
        { label: 'Confusa', points: 4 },
        { label: 'Palabras inadecuadas', points: 3 },
        { label: 'Palabras incomprensibles o sonidos inespecíficos', points: 2 },
        { label: 'Ausencia de respuesta', points: 1 },
      ],
    },
    {
      id: 'motora',
      label: 'Respuesta motora',
      options: [
        { label: 'Obedece las indicaciones', points: 6 },
        { label: 'Localiza el estímulo doloroso', points: 5 },
        { label: 'Se retira en respuesta al dolor', points: 4 },
        {
          label: 'Responde al dolor con una postura de decorticación (flexión anormal)',
          points: 3,
        },
        {
          label: 'Responde al dolor con una postura de descerebración (extensión anormal)',
          points: 2,
        },
        { label: 'Ausencia de respuesta', points: 1 },
      ],
    },
  ],
  bands,
  howTo,
  sources: [MSD],
};

export const PEDIATRIC_SCORES: ScoreDef[] = [infant, child];
