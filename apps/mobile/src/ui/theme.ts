import { createContext, useContext } from 'react';
import { Platform, type TextStyle } from 'react-native';

/**
 * Sistema visual «clínico cian»: fondo frío apenas teñido, tarjetas blancas en bento, cian
 * clínico #0E7490 para acciones y verde #047857 para lo verificado. Cada categoría conserva su
 * tono; la franja de peso del paciente sigue tiñendo su cabecera. Todos los textos superan 4.5:1
 * sobre la superficie donde se apoyan, en claro y en oscuro.
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
  /** Botón principal. */
  ink: string;
  onInk: string;
  /** Superficie destacada de la marca (tarjeta principal del inicio). */
  hero: string;
  onHero: string;
  heroMuted: string;
  danger: string;
  dangerBg: string;
  warning: string;
  warningBg: string;
  ok: string;
  okBg: string;
  /** Globo de guía (invertido sobre la pantalla). */
  tip: string;
  onTip: string;
  tipMuted: string;
}

export const lightColors: Palette = {
  ground: '#F1F6F8',
  surface: '#FFFFFF',
  raised: '#EDF3F6',
  border: '#DCE7EC',
  rule: '#E6EEF2',
  control: '#BFD0D8',
  selected: '#FFFFFF',
  text: '#0F2A36',
  muted: '#4A6070',
  accent: '#0E7490',
  accentSoft: '#DDF1F6',
  onAccent: '#FFFFFF',
  ink: '#0E7490',
  onInk: '#FFFFFF',
  hero: '#0B5A70',
  onHero: '#FFFFFF',
  heroMuted: '#BFE6EF',
  danger: '#C62828',
  dangerBg: '#FDECEC',
  warning: '#9A5B00',
  warningBg: '#FFF4E0',
  ok: '#047857',
  okBg: '#E3F5EE',
  tip: '#0F2A36',
  onTip: '#FFFFFF',
  tipMuted: '#B6CAD2',
};

export const darkColors: Palette = {
  ground: '#0B1418',
  surface: '#12212A',
  raised: '#1A2C37',
  border: '#22394A',
  rule: '#1C3040',
  control: '#2F4B5A',
  selected: '#22394A',
  text: '#EAF4F7',
  muted: '#A3BAC5',
  accent: '#5ED0E8',
  accentSoft: '#123643',
  onAccent: '#062027',
  ink: '#5ED0E8',
  onInk: '#062027',
  hero: '#0E4E61',
  onHero: '#FFFFFF',
  heroMuted: '#A8DDEA',
  danger: '#FF8A80',
  dangerBg: '#3A1B1B',
  warning: '#FFB74D',
  warningBg: '#33270F',
  ok: '#6EE7B7',
  okBg: '#0F2E24',
  tip: '#22394A',
  onTip: '#EAF4F7',
  tipMuted: '#B6CAD2',
};

/**
 * Figtree: sans geométrica moderna y muy legible en cifras. Cada peso es su propia familia
 * porque en Android una familia propia no responde a fontWeight.
 */
export const family = {
  regular: 'Figtree_400Regular',
  medium: 'Figtree_500Medium',
  bold: 'Figtree_700Bold',
  black: 'Figtree_800ExtraBold',
} as const;

/** Escala tipográfica (sp): cifra de dosis, titular, título, cuerpo, etiqueta, leyenda. */
export const type = {
  figure: 42,
  headline: 26,
  title: 17,
  body: 15,
  label: 13,
  caption: 12,
} as const;

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;
/** Bento: tarjetas de 20 dp, controles de 14 dp, chips y botones en píldora. */
export const radius = { sm: 12, md: 14, lg: 20, pill: 999 } as const;
export const font = { small: 13, body: 16, title: 20, big: 28, figure: 42 } as const;
/** Área táctil mínima recomendada (dp). */
export const MIN_TOUCH = 48;

export const ThemeContext = createContext<Palette>(lightColors);
export const useColors = (): Palette => useContext(ThemeContext);

/**
 * Vista web: quita el contorno de foco del navegador en campos que ya marcan el foco con su
 * propio borde (en Android no existe).
 */
export const WEB_NO_OUTLINE: TextStyle | undefined =
  Platform.OS === 'web' ? ({ outlineStyle: 'none' } as unknown as TextStyle) : undefined;
