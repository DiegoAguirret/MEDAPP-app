import Storage from 'expo-sqlite/kv-store';
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
    const raw = Storage.getItemSync(KEYS.favorites);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

const SettingsContext = createContext<Settings | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [accepted, setAccepted] = useState(() => Storage.getItemSync(KEYS.disclaimer) === 'yes');
  const [decimal, setDecimal] = useState<'.' | ','>(() =>
    Storage.getItemSync(KEYS.decimal) === ',' ? ',' : '.',
  );
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const v = Storage.getItemSync(KEYS.theme);
    return v === 'light' || v === 'dark' ? v : 'system';
  });
  const [favorites, setFavorites] = useState<string[]>(readFavorites);

  const accept = useCallback(() => {
    Storage.setItemSync(KEYS.disclaimer, 'yes');
    setAccepted(true);
  }, []);
  const changeDecimal = useCallback((sep: '.' | ',') => {
    Storage.setItemSync(KEYS.decimal, sep);
    setDecimal(sep);
  }, []);
  const changeTheme = useCallback((mode: ThemeMode) => {
    Storage.setItemSync(KEYS.theme, mode);
    setTheme(mode);
  }, []);
  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      Storage.setItemSync(KEYS.favorites, JSON.stringify(next));
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
