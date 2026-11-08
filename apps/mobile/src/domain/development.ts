/**
 * Vigilancia del neurodesarrollo de 0 a 36 meses según la NTS N.° 238-MINSA/DGIESP-2025, Anexo 10:
 * Tabla N.° 2 «Hitos del desarrollo según área» (adaptada del Huanca Test), la tabla de pauta por
 * edad, la Tabla N.° 1 de edad corregida y la interpretación. El texto de cada hito es el de la norma.
 */

export type Area = 'Motor grueso' | 'Motor fino' | 'Social' | 'Cognitivo' | 'Habla';

export interface Milestone {
  id: string;
  area: Area;
  name: string;
  text: string;
}

export interface Pauta {
  id: 'rn' | '3' | '6' | '9' | '12' | '18' | '24' | '30';
  label: string;
  /** Edades a las que se aplica, como en la tabla de la norma. */
  ages: string;
  milestones: Milestone[];
}

const m = (pauta: string, area: Area, name: string, text: string): Milestone => ({
  id: `${pauta}-${name.toLowerCase()}`,
  area,
  name,
  text,
});

export const PAUTAS: Pauta[] = [
  {
    id: 'rn',
    label: 'Recién nacido',
    ages: 'De 15 a 21 días y a los 2 meses',
    milestones: [
      m(
        'rn',
        'Motor grueso',
        'Postura fetal',
        'Permanece con las extremidades flexionadas, por momentos las estira.',
      ),
      m(
        'rn',
        'Motor fino',
        'Manos cerradas',
        'Mantiene las manos empuñadas y abre los dedos por momentos.',
      ),
      m('rn', 'Social', 'Mira', 'Fija la mirada en los ojos de la persona que le mira.'),
      m('rn', 'Cognitivo', 'Mira', 'Fija la mirada en los ojos de la persona que le mira.'),
      m('rn', 'Habla', 'Llora', 'Comunica sus necesidades a través de distintos tipos de llanto.'),
    ],
  },
  {
    id: '3',
    label: '3 meses',
    ages: 'De 3 a 5 meses',
    milestones: [
      m(
        '3',
        'Motor grueso',
        'Sostén cefálico',
        'Al sostenerlo por los hombros mantiene la cabeza erguida firmemente.',
      ),
      m(
        '3',
        'Motor fino',
        'Manos abiertas',
        'Mantiene las manos abiertas la mayor parte del tiempo.',
      ),
      m(
        '3',
        'Social',
        'Sonríe-ríe',
        'Mira a los ojos y sonríe-ríe a las personas sin necesidad de hacerle cosquillas.',
      ),
      m(
        '3',
        'Cognitivo',
        'Se interesa',
        'Intenta coger objetos que ve, como un juguete en movimiento delante de él o ella.',
      ),
      m(
        '3',
        'Habla',
        'Guturea',
        'Emite sonidos guturales. Son consonantes y vocales aisladas: «aaa», «mmm», «eee».',
      ),
    ],
  },
  {
    id: '6',
    label: '6 meses',
    ages: 'De 6 a 8 meses',
    milestones: [
      m(
        '6',
        'Motor grueso',
        'Se mantiene sentado',
        'Permanece sentado sin apoyo y sin caerse cuando lo sientan.',
      ),
      m('6', 'Motor fino', 'Transfiere', 'Lleva un objeto de una mano a otra.'),
      m(
        '6',
        'Social',
        'Abraza',
        'Mira a los ojos, sonríe, estira los brazos para que lo carguen y se abraza fuertemente.',
      ),
      m(
        '6',
        'Cognitivo',
        'Examina',
        'Coge objetos, examina juguetes: los mira, los huele, los lleva a la boca y los tira.',
      ),
      m(
        '6',
        'Habla',
        'Silabea',
        'Une una consonante con una vocal. Dice sílabas aisladas como: «ma», «pa», «ta», «ka».',
      ),
    ],
  },
  {
    id: '9',
    label: '9 meses',
    ages: 'De 9 a 11 meses',
    milestones: [
      m('9', 'Motor grueso', 'Se sienta', 'Estando echado, se impulsa y sin ayuda se sienta solo.'),
      m('9', 'Motor fino', 'Pinza inmadura', 'Coge objetos con toda la mano.'),
      m(
        '9',
        'Social',
        'Imita',
        'Mira a los ojos, sonríe, hace «ojitos», dice adiós con la mano, aplaude, da besos, se tapa con el pañal como juego, se esconde y juega a «¿Dónde está el bebé? ¡Aquí está!».',
      ),
      m(
        '9',
        'Cognitivo',
        'Busca',
        'Busca y encuentra objetos o juguetes que ve esconder o tapar con un pañal.',
      ),
      m(
        '9',
        'Habla',
        'Balbucea',
        'Une dos o más sílabas y las repite, todavía sin un sentido o significado, por ejemplo: «mamamama», «papapapa».',
      ),
    ],
  },
  {
    id: '12',
    label: '12 meses',
    ages: 'De 12 a 17 meses',
    milestones: [
      m('12', 'Motor grueso', 'Camina', 'Sin apoyo da unos pasos de un lado a otro.'),
      m('12', 'Motor fino', 'Pinza madura', 'Coge objetos pequeños entre el pulgar y el índice.'),
      m(
        '12',
        'Social',
        'Señala',
        'Cuando quiere algo que no puede alcanzar, mira a los ojos y con la mano o con el dedo lo señala. Siempre mira a los ojos de las personas y les sonríe.',
      ),
      m(
        '12',
        'Cognitivo',
        'Voltea',
        'Gira la cabeza y mira a la persona cuando lo llaman por su nombre. Entiende de 3 a 5 palabras, incluyendo su nombre. Sabe quién es mamá, quién es papá.',
      ),
      m(
        '12',
        'Habla',
        'Palabrea',
        'Dice una palabra suelta con sentido o significado. Le dice «mamá» a la mamá, «papá» al papá.',
      ),
    ],
  },
  {
    id: '18',
    label: '18 meses',
    ages: 'De 18 a 23 meses',
    milestones: [
      m(
        '18',
        'Motor grueso',
        'Corre',
        'Estando echado se sienta, se para sin ayuda, camina y corre.',
      ),
      m(
        '18',
        'Social',
        'Muestra',
        'Mira a los ojos, sonríe y trae objetos para jugar, muestra y comparte su interés.',
      ),
      m(
        '18',
        'Cognitivo',
        'Reconoce',
        'Reconoce partes de su cuerpo. Entre tres o más objetos que están a la vista en la habitación, selecciona y trae el que se le pide.',
      ),
      m(
        '18',
        'Habla',
        'Parlotea',
        'Dice algunas palabras en medio de muchos sonidos: «uhmm mamá, uhmmm papá».',
      ),
    ],
  },
  {
    id: '24',
    label: '24 meses',
    ages: 'De 24 a 29 meses',
    milestones: [
      m('24', 'Social', 'Juega', 'Mira a los ojos, sonríe y se acerca a otros niños para jugar.'),
      m(
        '24',
        'Cognitivo',
        'Recuerda',
        'Cuando se le indica, sale a buscar y trae objetos que le piden y que están en otra habitación.',
      ),
      m(
        '24',
        'Habla',
        'Frasea',
        'Dice dos o más palabras juntas, sin verbo: «mamá leche», «mamá pan».',
      ),
    ],
  },
  {
    id: '30',
    label: '30 meses',
    ages: 'De 30 a 36 meses',
    milestones: [
      m(
        '30',
        'Cognitivo',
        'Obedece',
        'Sigue dos órdenes seguidas, como: «Abre la boca y tócate la nariz» o «cierra la puerta y apaga la luz».',
      ),
      m(
        '30',
        'Habla',
        'Oraciones',
        'Dice dos o más palabras juntas incluyendo el verbo: «mamá dame leche».',
      ),
    ],
  },
];

const DAYS_PER_MONTH = 30.4375;

/**
 * Pauta que corresponde a la edad (en días, corregida si aplica). La norma asigna la pauta del
 * recién nacido de los 15–21 días a los 2 meses; antes de los 3 meses se usa esa pauta. Desde los
 * 37 meses no aplica este instrumento (null).
 */
export function pautaForAgeDays(days: number): Pauta | null {
  // +1 día: 91 días (3 × 30,4375 redondeado) ya son 3 meses.
  const months = Math.floor((days + 1) / DAYS_PER_MONTH);
  if (months > 36) return null;
  const id: Pauta['id'] =
    months < 3
      ? 'rn'
      : months < 6
        ? '3'
        : months < 9
          ? '6'
          : months < 12
            ? '9'
            : months < 18
              ? '12'
              : months < 24
                ? '18'
                : months < 30
                  ? '24'
                  : '30';
  return PAUTAS.find((p) => p.id === id) ?? null;
}

/**
 * Edad corregida (Tabla N.° 1): en prematuros (menos de 37 semanas) menores de 2 años se restan
 * (40 − edad gestacional) × 7 días a la edad cronológica.
 */
export function correctedAgeDays(chronoDays: number, gestationalWeeks: number): number {
  if (gestationalWeeks >= 37 || chronoDays >= 730) return chronoDays;
  return Math.max(chronoDays - (40 - gestationalWeeks) * 7, 0);
}

/** Hitos a comprobar: los de la pauta y todos los de las pautas anteriores. */
export function milestonesToCheck(pautaId: Pauta['id']): Milestone[] {
  const idx = PAUTAS.findIndex((p) => p.id === pautaId);
  return PAUTAS.slice(0, idx + 1).flatMap((p) => p.milestones);
}

export interface DevelopmentResult {
  label: string;
  tone: 'ok' | 'warning' | 'danger';
  action: string;
}

/** Interpretación e intervención del Anexo 10 según el número de hitos no logrados. */
export function evaluateMilestones(notAchieved: number): DevelopmentResult {
  if (notAchieved === 0) {
    return {
      label: 'Normal',
      tone: 'ok',
      action: 'Logra todos los hitos esperados para su edad.',
    };
  }
  if (notAchieved === 1) {
    return {
      label: 'Hallazgo positivo: 1 hito no logrado',
      tone: 'warning',
      action:
        'Consejería en desarrollo infantil para estimular el área en riesgo, sesiones semanales de atención temprana y seguimiento al mes. Si al mes no logra el hito, se mantienen las sesiones y se realiza el tamizaje con la prueba EDI.',
    };
  }
  return {
    label: 'Hallazgo positivo: 2 o más hitos no logrados',
    tone: 'danger',
    action: 'Sesiones semanales de atención temprana y tamizaje del desarrollo con la prueba EDI.',
  };
}

export const DEVELOPMENT_SOURCE =
  'NTS N.° 238-MINSA/DGIESP-2025, Anexo 10: Tabla N.° 1 (edad corregida), Tabla N.° 2 (hitos del desarrollo según área, adaptada de Huanca D., Guía de Vigilancia del Neurodesarrollo, 2023) e interpretación.';
