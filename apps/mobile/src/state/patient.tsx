import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { EMPTY_PATIENT, type PatientFields } from '../domain/patientInput';

/**
 * Paciente actual, compartido entre fichas y la hoja de urgencias.
 * Vive solo en memoria: se borra al cerrar la app y nunca se escribe en disco.
 */
export interface PatientState extends PatientFields {
  update: (patch: Partial<PatientFields>) => void;
  clear: () => void;
}

const PatientContext = createContext<PatientState | null>(null);

function usePatientStore(): PatientState {
  const [fields, setFields] = useState<PatientFields>(EMPTY_PATIENT);
  const update = useCallback(
    (patch: Partial<PatientFields>) => setFields((f) => ({ ...f, ...patch })),
    [],
  );
  const clear = useCallback(() => setFields(EMPTY_PATIENT), []);
  return useMemo(() => ({ ...fields, update, clear }), [fields, update, clear]);
}

export function PatientProvider({ children }: { children: ReactNode }) {
  const store = usePatientStore();
  return <PatientContext.Provider value={store}>{children}</PatientContext.Provider>;
}

/** Paciente compartido; sin proveedor (p. ej. en pruebas aisladas) cada pantalla tiene el suyo. */
export function usePatient(): PatientState {
  const shared = useContext(PatientContext);
  const local = usePatientStore();
  return shared ?? local;
}
