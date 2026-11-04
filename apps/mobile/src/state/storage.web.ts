/** Almacén clave-valor síncrono para preferencias (web: localStorage, solo vista previa). */
export const prefs = {
  get: (key: string): string | null => {
    try {
      return globalThis.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key: string, value: string): void => {
    try {
      globalThis.localStorage.setItem(key, value);
    } catch {
      // sin almacenamiento disponible: la preferencia vive solo en memoria
    }
  },
};
