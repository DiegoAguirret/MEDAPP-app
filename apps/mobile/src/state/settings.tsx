import { prefs } from './storage';
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

/** Solo preferencias del médico. Nunca datos de pacientes. */
const KEYS = {
  disclaimer: 'disclaimerAcceptedV1',
  decimal: 'decimalSeparator',
  theme: 'theme',
  favorites: 'favorites',
  recents: 'recentDrugsV1',
  presentations: 'favoritePresentationsV1',
} as const;

/** Cuántos fármacos recientes se recuerdan (solo ids de fichas, nunca datos del paciente). */
const MAX_RECENTS = 8;

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
  /** Fichas abiertas hace poco, la última primero. */
  recents: string[];
  pushRecent: (id: string) => void;
  /** Presentación que el médico usa siempre para un fármaco (id de la ficha → id de la presentación). */
  favoritePresentation: (drugId: string) => string | undefined;
  setFavoritePresentation: (drugId: string, presentationId: string | null) => void;
}

function readMap(key: string): Record<string, string> {
  try {
    const raw = prefs.get(key);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).filter((e): e is [string, string] => typeof e[1] === 'string'),
    );
  } catch {
    return {};
  }
}

function readIds(key: string): string[] {
  try {
    const raw = prefs.get(key);
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
  const [favorites, setFavorites] = useState<string[]>(() => readIds(KEYS.favorites));
  const [recents, setRecents] = useState<string[]>(() => readIds(KEYS.recents));
  const [presentations, setPresentations] = useState<Record<string, string>>(() =>
    readMap(KEYS.presentations),
  );

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

  const pushRecent = useCallback((id: string) => {
    setRecents((prev) => {
      if (prev[0] === id) return prev;
      const next = [id, ...prev.filter((x) => x !== id)].slice(0, MAX_RECENTS);
      prefs.set(KEYS.recents, JSON.stringify(next));
      return next;
    });
  }, []);

  const setFavoritePresentation = useCallback((drugId: string, presentationId: string | null) => {
    setPresentations((prev) => {
      const next =
        presentationId === null
          ? Object.fromEntries(Object.entries(prev).filter(([k]) => k !== drugId))
          : { ...prev, [drugId]: presentationId };
      prefs.set(KEYS.presentations, JSON.stringify(next));
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
      recents,
      pushRecent,
      favoritePresentation: (drugId) => presentations[drugId],
      setFavoritePresentation,
    }),
    [
      accepted,
      accept,
      decimal,
      changeDecimal,
      theme,
      changeTheme,
      favorites,
      toggleFavorite,
      recents,
      pushRecent,
      presentations,
      setFavoritePresentation,
    ],
  );
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): Settings {
  const ctx = useContext(SettingsContext);
  if (ctx === null) throw new Error('useSettings debe usarse dentro de SettingsProvider');
  return ctx;
}

/**
 * Presentación habitual de un fármaco. Fuera de `SettingsProvider` (pruebas aisladas) no recuerda
 * nada y no falla.
 */
export function useFavoritePresentation(
  drugId: string,
): [string | undefined, (presentationId: string | null) => void] {
  const ctx = useContext(SettingsContext);
  const set = useCallback(
    (presentationId: string | null) => ctx?.setFavoritePresentation(drugId, presentationId),
    [ctx, drugId],
  );
  return [ctx?.favoritePresentation(drugId), set];
}
