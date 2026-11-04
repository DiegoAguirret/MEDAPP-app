import { createContext, useContext } from 'react';

/**
 * Sistema visual: fondo blanco, paneles en un tono apenas más oscuro, tinta casi negra y un solo
 * acento (verde azulado) reservado para el dato clínico y el control seleccionado.
 * Todos los textos superan 4.5:1 sobre la superficie donde se apoyan.
 */
export interface Palette {
  /** Fondo de pantalla. */
  ground: string;
  /** Panel tonal (un paso sobre el fondo). */
  surface: string;
  /** Tarjeta o campo dentro de un panel. */
  raised: string;
  /** Borde de panel y tarjeta. */
  border: string;
  /** Separador entre filas. */
  rule: string;
  /** Borde de campos y controles. */
  control: string;
  /** Opción elegida en un selector segmentado. */
  selected: string;
  text: string;
  muted: string;
  /** Acento: el dato clínico y la opción elegida. */
  accent: string;
  accentSoft: string;
  onAccent: string;
  /** Botón principal (tinta). */
  ink: string;
  onInk: string;
  danger: string;
  dangerBg: string;
  warning: string;
  warningBg: string;
  ok: string;
  okBg: string;
}

export const lightColors: Palette = {
  ground: '#FFFFFF',
  surface: '#F5F5F2',
  raised: '#FFFFFF',
  border: '#E6E6E1',
  rule: '#ECECE8',
  control: '#D6D6D0',
  selected: '#FFFFFF',
  text: '#1F201D',
  muted: '#5F605B',
  accent: '#1B6E66',
  accentSoft: '#E3EFED',
  onAccent: '#FFFFFF',
  ink: '#1F201D',
  onInk: '#FFFFFF',
  danger: '#B42318',
  dangerBg: '#FDECEA',
  warning: '#92400E',
  warningBg: '#FFF8EB',
  ok: '#1E6B3A',
  okBg: '#E6F4EA',
};

export const darkColors: Palette = {
  ground: '#000000',
  surface: '#141414',
  raised: '#1E1E1E',
  border: '#262626',
  rule: '#222222',
  control: '#444444',
  selected: '#3A3A3A',
  text: '#F4F4F2',
  muted: '#B4B4B0',
  accent: '#5BC0B4',
  accentSoft: '#13302C',
  onAccent: '#04201C',
  ink: '#F4F4F2',
  onInk: '#111111',
  danger: '#F07A6E',
  dangerBg: '#2C1A18',
  warning: '#F2B45C',
  warningBg: '#2A2112',
  ok: '#6FCB8E',
  okBg: '#13281A',
};

/**
 * Familias por peso (en Android una familia propia no responde a fontWeight).
 * Sans para todo; la serif solo para la voz de receta: el nombre del fármaco y la dosis.
 */
export const family = {
  regular: 'InstrumentSans_400Regular',
  medium: 'InstrumentSans_500Medium',
  semibold: 'InstrumentSans_600SemiBold',
  serif: 'InstrumentSerif_400Regular',
} as const;

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
/** Paneles suaves; controles en píldora. */
export const radius = { sm: 10, md: 16, lg: 22, pill: 999 } as const;
export const font = { small: 13, body: 16, title: 20, big: 28, figure: 40 } as const;
/** Área táctil mínima recomendada (dp). */
export const MIN_TOUCH = 48;

export const ThemeContext = createContext<Palette>(lightColors);
export const useColors = (): Palette => useContext(ThemeContext);
