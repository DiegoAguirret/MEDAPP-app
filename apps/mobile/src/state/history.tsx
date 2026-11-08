import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { PatientFields } from '../domain/patientInput';
import { prefs } from './storage';

/**
 * Historial de cálculos: lo que el médico calculó, para volver a abrirlo después. Se guarda solo en
 * este teléfono, sin nombres ni datos que identifiquen al paciente; se borra desde Ajustes o el propio
 * historial.
 */
export const MAX_HISTORY = 60;
const KEY = 'doseHistoryV1';

export interface HistoryDraft {
  drugId: string;
  drugName: string;
  indication: string;
  presentation: string;
  /** Texto de la dosis tal como se vio, p. ej. «6.3 mL (150 mg) c/6 h». */
  dose: string;
  patient: PatientFields;
  patientSummary: string;
}

export interface HistoryEntry extends HistoryDraft {
  id: string;
  /** Fecha y hora ISO del cálculo. */
  at: string;
}

interface HistoryApi {
  entries: HistoryEntry[];
  /** Guarda un cálculo; con `id`, reemplaza ese registro (correcciones en la misma visita). */
  save: (draft: HistoryDraft, id?: string) => string;
  remove: (id: string) => void;
  clear: () => void;
}

function read(): HistoryEntry[] {
  try {
    const raw = prefs.get(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter(
          (e): e is HistoryEntry =>
            typeof e === 'object' && e !== null && typeof (e as HistoryEntry).id === 'string',
        )
      : [];
  } catch {
    return [];
  }
}

let counter = 0;
const newId = () => `${Date.now().toString(36)}-${(counter++).toString(36)}`;

const HistoryContext = createContext<HistoryApi | null>(null);

export function HistoryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<HistoryEntry[]>(read);

  const persist = (next: HistoryEntry[]) => {
    prefs.set(KEY, JSON.stringify(next));
    return next;
  };

  const save = useCallback((draft: HistoryDraft, id?: string) => {
    const entryId = id ?? newId();
    const entry: HistoryEntry = { ...draft, id: entryId, at: new Date().toISOString() };
    setEntries((prev) =>
      persist([entry, ...prev.filter((e) => e.id !== entryId)].slice(0, MAX_HISTORY)),
    );
    return entryId;
  }, []);
  const remove = useCallback((id: string) => {
    setEntries((prev) => persist(prev.filter((e) => e.id !== id)));
  }, []);
  const clear = useCallback(() => setEntries(persist([])), []);

  const value = useMemo(() => ({ entries, save, remove, clear }), [entries, save, remove, clear]);
  return <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>;
}

/** Historial; fuera del proveedor (pruebas aisladas) no guarda nada. */
export function useHistory(): HistoryApi | null {
  return useContext(HistoryContext);
}
