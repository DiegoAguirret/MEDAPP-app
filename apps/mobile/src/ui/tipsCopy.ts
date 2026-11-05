/**
 * Textos de las guías de uso. Describen la app, no dan consejo clínico: cada frase debe ser
 * verdad sobre lo que la pantalla hace.
 */
export interface TipCopy {
  title: string;
  body: string;
  /** Hacia dónde apunta la flecha: el elemento explicado está arriba o abajo del globo. */
  pointer: 'up' | 'down';
  align?: 'start' | 'center' | 'end';
}

export const TIPS = {
  paciente: {
    title: 'El paciente se ingresa una vez',
    body: 'El peso y la edad pasan a todas las fichas y a Urgencias hasta que toques «Nuevo». No se guardan en el teléfono.',
    pointer: 'up',
  },
  franja: {
    title: 'El color es el peso',
    body: 'Cada color es una zona de peso de la cinta pediátrica de reanimación (Broselow–Luten). Va en cada ficha para que sepas de qué paciente son las dosis.',
    pointer: 'up',
  },
  indicacion: {
    title: 'La indicación se elige sola',
    body: 'Es la primera que calza con la edad y el peso. Tócala para ver las demás; las que no aplican lo dicen.',
    pointer: 'up',
  },
  presentacion: {
    title: 'Desliza las presentaciones',
    body: 'Hay más a la derecha. Si la tuya no está, usa «Personalizar concentración» al final.',
    pointer: 'up',
  },
  resultado: {
    title: 'Lo que vas a medir',
    body: 'Arriba, la cantidad con la presentación elegida; debajo, los mg y los topes. «Compartir indicación» la envía como texto.',
    pointer: 'up',
  },
  hoja: {
    title: 'Ya están calculadas',
    body: 'Cada fila es una dosis para este peso. Tócala para abrir la ficha completa, con fuentes y cálculo paso a paso.',
    pointer: 'down',
  },
} satisfies Record<string, TipCopy>;

export type TipId = keyof typeof TIPS;
