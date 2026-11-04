import { createContext, useContext } from 'react';

export interface Palette {
  bg: string;
  card: string;
  text: string;
  muted: string;
  border: string;
  primary: string;
  primaryText: string;
  primarySoft: string;
  chip: string;
  danger: string;
  dangerBg: string;
  warning: string;
  warningBg: string;
  ok: string;
  okBg: string;
}

/** Paleta clínica con contraste AA. */
export const lightColors: Palette = {
  bg: '#F3F6F9',
  card: '#FFFFFF',
  text: '#14212B',
  muted: '#52606D',
  border: '#D9E2EC',
  primary: '#0B6E8A',
  primaryText: '#FFFFFF',
  primarySoft: '#E3F2F7',
  chip: '#EEF3F7',
  danger: '#B42318',
  dangerBg: '#FEF3F2',
  warning: '#8A5300',
  warningBg: '#FFF7E6',
  ok: '#1E6B3A',
  okBg: '#ECFDF3',
};

export const darkColors: Palette = {
  bg: '#0E151B',
  card: '#17222B',
  text: '#E6EDF3',
  muted: '#9AA9B6',
  border: '#2A3A47',
  primary: '#4FC3E0',
  primaryText: '#06202A',
  primarySoft: '#123543',
  chip: '#1F2D38',
  danger: '#FF8A80',
  dangerBg: '#3A1715',
  warning: '#FFC266',
  warningBg: '#36260C',
  ok: '#7BDCA0',
  okBg: '#12301F',
};

/** Compatibilidad: estilos estáticos que aún no dependen del tema. */
export const colors = lightColors;

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 } as const;
export const radius = { sm: 10, md: 16, lg: 22 } as const;
export const font = { small: 13, body: 16, title: 20, big: 30 } as const;
/** Área táctil mínima recomendada (dp). */
export const MIN_TOUCH = 48;

export const ThemeContext = createContext<Palette>(lightColors);
export const useColors = (): Palette => useContext(ThemeContext);
