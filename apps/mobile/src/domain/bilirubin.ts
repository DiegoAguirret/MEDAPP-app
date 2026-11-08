import { AAP2022_TABLES } from './bilirubinTables';

/**
 * Umbrales de bilirrubina sérica total (BST) en recién nacidos de 35 semanas o más, según la guía
 * AAP 2022 (Kemper et al.): fototerapia (Supplemental Tables 1 y 2), exsanguinotransfusión (3 y 4)
 * y escalamiento de la atención, 2 mg/dL por debajo de la exsanguinotransfusión (KAS 17).
 * Las tablas van de la hora 1 al día 14 (hora 359).
 */

type Table = Record<number, string>;

const cache = new Map<string, number[]>();
function series(table: Table, ga: number, key: string): number[] {
  const k = `${key}:${ga}`;
  let v = cache.get(k);
  if (!v) {
    v = (table[ga] ?? '').split(',').map(Number);
    cache.set(k, v);
  }
  return v;
}

function at(values: number[], hour: number): number | null {
  if (values.length === 0) return null;
  const v = values[Math.min(hour, values.length) - 1];
  return v === undefined ? null : v;
}

const LAST_HOUR = 359;

export interface Thresholds {
  photo: number;
  escalation: number;
  exchange: number;
}

/**
 * Umbrales a la edad en horas cumplidas. Fototerapia sin factores: tablas de 35 a 40 semanas
 * (40 = 40 o más); con factor de neurotoxicidad: 35 a 38 (38 = 38 o más). Exsanguinotransfusión:
 * 35 a 38 en ambas. Null fuera de rango (menos de 35 semanas, hora 0 o más de 14 días).
 */
export function thresholdsAt(gaWeeks: number, ageHours: number, risk: boolean): Thresholds | null {
  const ga = Math.floor(gaWeeks);
  const hour = Math.floor(ageHours);
  if (ga < 35 || hour < 1 || hour > LAST_HOUR) return null;
  const photoGa = risk ? Math.min(ga, 38) : Math.min(ga, 40);
  const exGa = Math.min(ga, 38);
  const photo = at(
    series(
      risk ? AAP2022_TABLES.photoRisk : AAP2022_TABLES.photoNoRisk,
      photoGa,
      risk ? 'pr' : 'pn',
    ),
    hour,
  );
  const exchange = at(
    series(
      risk ? AAP2022_TABLES.exchangeRisk : AAP2022_TABLES.exchangeNoRisk,
      exGa,
      risk ? 'er' : 'en',
    ),
    hour,
  );
  if (photo === null || exchange === null) return null;
  return { photo, exchange, escalation: Math.round((exchange - 2) * 10) / 10 };
}

export type BiliLevel = 'below' | 'photo' | 'escalation' | 'exchange';

export interface BiliAssessment extends Thresholds {
  level: BiliLevel;
  /** mg/dL que faltan para el umbral de fototerapia (0 si ya lo alcanzó). */
  belowPhoto: number;
}

export function assessBilirubin(input: {
  gaWeeks: number;
  ageHours: number;
  tsb: number;
  risk: boolean;
}): BiliAssessment | null {
  const t = thresholdsAt(input.gaWeeks, input.ageHours, input.risk);
  if (!t) return null;
  const { tsb } = input;
  const level: BiliLevel =
    tsb >= t.exchange
      ? 'exchange'
      : tsb >= t.escalation
        ? 'escalation'
        : tsb >= t.photo
          ? 'photo'
          : 'below';
  return { ...t, level, belowPhoto: Math.max(t.photo - tsb, 0) };
}

/** Factores de riesgo de neurotoxicidad por hiperbilirrubinemia distintos de la edad gestacional (Tabla 2). */
export const NEUROTOXICITY_RISK_FACTORS = [
  'Albúmina < 3.0 g/dL',
  'Enfermedad hemolítica isoinmune (Coombs directo positivo), déficit de G6PD u otra condición hemolítica',
  'Sepsis',
  'Inestabilidad clínica significativa en las 24 h previas',
];

export const BILI_ACTIONS: Record<BiliLevel, { title: string; text: string }> = {
  below: {
    title: 'Por debajo del umbral de fototerapia',
    text: 'Programa el seguimiento según la diferencia con el umbral (Figura 7 de la guía) y el juicio clínico.',
  },
  photo: {
    title: 'Fototerapia intensiva',
    text: 'La BST alcanzó el umbral de fototerapia (KAS 10). En hospitalizados, controlar la BST dentro de las 12 h de iniciada (KAS 12).',
  },
  escalation: {
    title: 'Escalamiento de la atención',
    text: 'Hidratación IV y fototerapia intensiva urgente; consultar a neonatología para traslado a una UCIN que pueda hacer exanguinotransfusión (KAS 19). Enviar STAT bilirrubina total y directa, hemograma, albúmina, bioquímica y grupo con prueba cruzada (KAS 18). BST al menos cada 2 h (KAS 20).',
  },
  exchange: {
    title: 'Exanguinotransfusión urgente',
    text: 'La BST está en o sobre el umbral de exanguinotransfusión (KAS 23). También es urgente ante signos de encefalopatía bilirrubínica aguda intermedia o avanzada (KAS 22).',
  },
};

export const BILI_SOURCE =
  'Kemper AR, Newman TB, Slaughter JL, et al. Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics. 2022;150(3):e2022058859 (AAP). Supplemental Tables 1–4, Tabla 2 y KAS 10, 17–23.';
