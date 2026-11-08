/**
 * Dosis diarias totales (medidas) de corticoides inhalados, baja, media y alta, de GINA 2025:
 * Box 4-2 (6 a 11 años y 12 años o más) y Box 11-3 (5 años o menos, solo dosis baja).
 * No es una tabla de equivalencia: GINA lo advierte expresamente.
 */

export interface IcsRow {
  drug: string;
  device: string;
  /** mcg/día, tal como en GINA ('>' incluido). */
  low: string;
  medium?: string;
  high?: string;
  note?: string;
}

export interface IcsGroup {
  id: '0-5' | '6-11' | '12+';
  label: string;
  source: string;
  rows: IcsRow[];
}

export const ICS_GROUPS: IcsGroup[] = [
  {
    id: '0-5',
    label: '≤ 5 años',
    source: 'GINA 2025, Box 11-3 (pág. 195): dosis diaria baja total.',
    rows: [
      {
        drug: 'Beclometasona dipropionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '100',
        note: 'desde los 5 años',
      },
      {
        drug: 'Beclometasona dipropionato',
        device: 'pMDI, partícula extrafina, HFA',
        low: '50',
        note: 'desde los 5 años',
      },
      { drug: 'Budesonida', device: 'nebulizada', low: '500', note: 'desde 1 año' },
      {
        drug: 'Fluticasona propionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '50',
        note: 'desde los 4 años',
      },
      {
        drug: 'Mometasona furoato',
        device: 'pMDI, partícula estándar, HFA',
        low: '100',
        note: 'desde los 5 años',
      },
    ],
  },
  {
    id: '6-11',
    label: '6–11 años',
    source: 'GINA 2025, Box 4-2 (pág. 71): niños de 6 a 11 años.',
    rows: [
      {
        drug: 'Beclometasona dipropionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '100–200',
        medium: '>200–400',
        high: '>400',
      },
      {
        drug: 'Beclometasona dipropionato',
        device: 'pMDI, partícula extrafina, HFA',
        low: '50–100',
        medium: '>100–200',
        high: '>200',
      },
      {
        drug: 'Budesonida',
        device: 'DPI o pMDI, partícula estándar, HFA',
        low: '100–200',
        medium: '>200–400',
        high: '>400',
      },
      {
        drug: 'Budesonida',
        device: 'nebulizada',
        low: '250–500',
        medium: '>500–1000',
        high: '>1000',
      },
      {
        drug: 'Ciclesonida',
        device: 'pMDI, partícula extrafina, HFA',
        low: '80',
        medium: '>80–160',
        high: '>160',
      },
      { drug: 'Fluticasona furoato', device: 'DPI', low: '50', medium: 'n.a.' },
      {
        drug: 'Fluticasona propionato',
        device: 'DPI',
        low: '50–100',
        medium: '>100–200',
        high: '>200',
      },
      {
        drug: 'Fluticasona propionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '50–100',
        medium: '>100–200',
        high: '>200',
      },
      {
        drug: 'Mometasona furoato',
        device: 'pMDI, partícula estándar, HFA',
        low: '100',
        medium: '200',
      },
    ],
  },
  {
    id: '12+',
    label: '≥ 12 años',
    source: 'GINA 2025, Box 4-2 (pág. 71): adultos y adolescentes.',
    rows: [
      {
        drug: 'Beclometasona dipropionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '200–500',
        medium: '>500–1000',
        high: '>1000',
      },
      {
        drug: 'Beclometasona dipropionato',
        device: 'DPI o pMDI, partícula extrafina, HFA',
        low: '100–200',
        medium: '>200–400',
        high: '>400',
      },
      {
        drug: 'Budesonida',
        device: 'DPI o pMDI, partícula estándar, HFA',
        low: '200–400',
        medium: '>400–800',
        high: '>800',
      },
      {
        drug: 'Ciclesonida',
        device: 'pMDI, partícula extrafina, HFA',
        low: '80–160',
        medium: '>160–320',
        high: '>320',
      },
      { drug: 'Fluticasona furoato', device: 'DPI', low: '100', medium: '200' },
      {
        drug: 'Fluticasona propionato',
        device: 'DPI',
        low: '100–250',
        medium: '>250–500',
        high: '>500',
      },
      {
        drug: 'Fluticasona propionato',
        device: 'pMDI, partícula estándar, HFA',
        low: '100–250',
        medium: '>250–500',
        high: '>500',
      },
      {
        drug: 'Mometasona furoato',
        device: 'pMDI, partícula estándar, HFA',
        low: '200–400',
        medium: '>400',
      },
    ],
  },
];

export const ICS_NOTES = [
  'No es una tabla de equivalencia: pasar de una dosis «media» de un corticoide a la «media» de otro puede bajar o subir la potencia.',
  'Son dosis diarias totales medidas (metered); la dosis liberada está en la ficha del producto.',
  'El inhalador presurizado (pMDI) se usa preferentemente con espaciador; en niños de 5 años o menos, siempre.',
  'La dosis baja da la mayor parte del beneficio; la alta se reserva para muy pocos pacientes por sus efectos adversos.',
];
