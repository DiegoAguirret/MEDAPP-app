import { prefs } from './storage';
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

/** Solo preferencias del médico. Nunca datos de pacientes. */
const KEYS = {
  disclaimer: 'disclaimerAcceptedV1',
  decimal: 'decimalSeparator',
  theme: 'theme',
  favorites: 'favorites',
} as const;

export type ThemeMode = 'system' | 'light' | 'dark';

interface Settings {
  accepted: boolean;
  accept: () => void;
  decimal: '.' | ',';
  changeDecimal: (sep: '.' | ',') => void;
  theme: ThemeMode;
  changeTheme: (mode: ThemeMode) => void;
  favorites: string[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
}

function readFavorites(): string[] {
  try {
    const raw = prefs.get(KEYS.favorites);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

const SettingsContext = createContext<Settings | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [accepted, setAccepted] = useState(() => prefs.get(KEYS.disclaimer) === 'yes');
  const [decimal, setDecimal] = useState<'.' | ','>(() =>
    prefs.get(KEYS.decimal) === ',' ? ',' : '.',
  );
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const v = prefs.get(KEYS.theme);
    return v === 'light' || v === 'dark' ? v : 'system';
  });
  const [favorites, setFavorites] = useState<string[]>(readFavorites);

  const accept = useCallback(() => {
    prefs.set(KEYS.disclaimer, 'yes');
    setAccepted(true);
  }, []);
  const changeDecimal = useCallback((sep: '.' | ',') => {
    prefs.set(KEYS.decimal, sep);
    setDecimal(sep);
  }, []);
  const changeTheme = useCallback((mode: ThemeMode) => {
    prefs.set(KEYS.theme, mode);
    setTheme(mode);
  }, []);
  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      prefs.set(KEYS.favorites, JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo<Settings>(
    () => ({
      accepted,
      accept,
      decimal,
      changeDecimal,
      theme,
      changeTheme,
      favorites,
      isFavorite: (id) => favorites.includes(id),
      toggleFavorite,
    }),
    [accepted, accept, decimal, changeDecimal, theme, changeTheme, favorites, toggleFavorite],
  );
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext);
  if (ctx === null) throw new Error('useSettings debe usarse dentro de SettingsProvider');
  return ctx;
}
