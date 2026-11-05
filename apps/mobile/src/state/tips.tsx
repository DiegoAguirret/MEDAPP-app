import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { prefs } from './storage';

/** Guías de uso: qué globos ya vio el médico y si las apagó. Solo preferencias. */
const KEYS = { seen: 'tipsSeenV1', off: 'tipsOffV1' } as const;

export interface Tips {
  /** false sin proveedor o si el médico tocó «Omitir guía». */
  enabled: boolean;
  seen: ReadonlySet<string>;
  markSeen: (id: string) => void;
  skipAll: () => void;
  reset: () => void;
}

function readSeen(): Set<string> {
  try {
    const raw = prefs.get(KEYS.seen);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return new Set(
      Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [],
    );
  } catch {
    return new Set();
  }
}

/** Primera guía no vista cuya condición se cumple (una sola a la vez por pantalla). */
export function firstUnseen(
  seen: ReadonlySet<string>,
  candidates: readonly (readonly [string, boolean])[],
): string | null {
  for (const [id, ready] of candidates) if (ready && !seen.has(id)) return id;
  return null;
}

const NONE: Tips = {
  enabled: false,
  seen: new Set(),
  markSeen: () => {},
  skipAll: () => {},
  reset: () => {},
};

const TipsContext = createContext<Tips>(NONE);

export function TipsProvider({ children }: { children: ReactNode }) {
  const [seen, setSeen] = useState<Set<string>>(readSeen);
  const [off, setOff] = useState(() => prefs.get(KEYS.off) === 'yes');

  const markSeen = useCallback((id: string) => {
    setSeen((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev).add(id);
      prefs.set(KEYS.seen, JSON.stringify([...next]));
      return next;
    });
  }, []);
  const skipAll = useCallback(() => {
    prefs.set(KEYS.off, 'yes');
    setOff(true);
  }, []);
  const reset = useCallback(() => {
    prefs.set(KEYS.off, 'no');
    prefs.set(KEYS.seen, '[]');
    setOff(false);
    setSeen(new Set());
  }, []);

  const value = useMemo<Tips>(
    () => ({ enabled: !off, seen, markSeen, skipAll, reset }),
    [off, seen, markSeen, skipAll, reset],
  );
  return <TipsContext.Provider value={value}>{children}</TipsContext.Provider>;
}

export function useTips(): Tips {
  return useContext(TipsContext);
}

export interface TipQueue {
  /** La guía que toca mostrar ahora en esta pantalla, o null. */
  active: string | null;
  /** Posición de la activa en la secuencia de la pantalla (desde 1) y su largo. */
  step: number;
  total: number;
}

/** Secuencia de guías de una pantalla: [id, condición para mostrarla]. */
export function useTipQueue(candidates: readonly (readonly [string, boolean])[]): TipQueue {
  const { enabled, seen } = useTips();
  const active = enabled ? firstUnseen(seen, candidates) : null;
  const step = active === null ? 0 : candidates.findIndex(([id]) => id === active) + 1;
  return { active, step, total: candidates.length };
}
