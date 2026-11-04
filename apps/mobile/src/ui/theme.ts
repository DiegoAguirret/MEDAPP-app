/** Paleta clínica sobria con contraste AA sobre blanco. */
export const colors = {
  bg: '#F6F8FA',
  card: '#FFFFFF',
  text: '#14212B',
  muted: '#52606D',
  border: '#D9E2EC',
  primary: '#0B6E8A',
  primaryText: '#FFFFFF',
  chip: '#E6F1F5',
  danger: '#B42318',
  dangerBg: '#FEF3F2',
  warning: '#8A5300',
  warningBg: '#FFF7E6',
  ok: '#1E6B3A',
  okBg: '#ECFDF3',
} as const;

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 } as const;
export const radius = { sm: 8, md: 12 } as const;
export const font = { small: 13, body: 16, title: 20, big: 28 } as const;
/** Área táctil mínima recomendada (dp). */
export const MIN_TOUCH = 48;
