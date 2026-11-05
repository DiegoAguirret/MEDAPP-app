import { createContext, useContext } from 'react';

/**
 * Sistema visual «cinta de colores por peso»: tarjetas blancas sobre fondo gris frío, tinta
 * #1B2430, azul de marca para acciones; la franja de peso del paciente tiñe su cabecera.
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
  ground: '#F4F5F7',
  surface: '#FFFFFF',
  raised: '#F4F5F7',
  border: '#E3E6EB',
  rule: '#ECEEF2',
  control: '#CBD1D9',
  selected: '#FFFFFF',
  text: '#1B2430',
  muted: '#5B6472',
  accent: '#1F5FAD',
  accentSoft: '#E7EEF8',
  onAccent: '#FFFFFF',
  ink: '#1F5FAD',
  onInk: '#FFFFFF',
  danger: '#C62828',
  dangerBg: '#FDECEC',
  warning: '#9A5B00',
  warningBg: '#FFF4E0',
  ok: '#1E7B45',
  okBg: '#E5F4EA',
};

export const darkColors: Palette = {
  ground: '#0E1116',
  surface: '#171B22',
  raised: '#202631',
  border: '#2A313C',
  rule: '#232A34',
  control: '#3A4350',
  selected: '#2D3542',
  text: '#F2F4F7',
  muted: '#A9B2BF',
  accent: '#7DB0FF',
  accentSoft: '#162740',
  onAccent: '#0E1116',
  ink: '#7DB0FF',
  onInk: '#0E1116',
  danger: '#FF8A80',
  dangerBg: '#3A1B1B',
  warning: '#FFB74D',
  warningBg: '#33270F',
  ok: '#73D49A',
  okBg: '#12301F',
};

/**
 * Roboto (cara del sistema Android), cargada también para la vista web. Cada peso es su propia
 * familia porque en Android una familia propia no responde a fontWeight.
 */
export const family = {
  regular: 'Roboto_400Regular',
  medium: 'Roboto_500Medium',
  bold: 'Roboto_700Bold',
  black: 'Roboto_900Black',
} as const;

/** Escala tipográfica (sp): cifra de dosis, titular, título, cuerpo, etiqueta, leyenda. */
export const type = {
  figure: 40,
  headline: 26,
  title: 17,
  body: 15,
  label: 13,
  caption: 12,
} as const;

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
/** Paneles suaves; controles en píldora. */
export const radius = { sm: 10, md: 12, lg: 14, pill: 999 } as const;
export const font = { small: 13, body: 16, title: 20, big: 28, figure: 40 } as const;
/** Área táctil mínima recomendada (dp). */
export const MIN_TOUCH = 48;

export const ThemeContext = createContext<Palette>(lightColors);
export const useColors = (): Palette => useContext(ThemeContext);
