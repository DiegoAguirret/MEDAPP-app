import Storage from 'expo-sqlite/kv-store';

/** Almacén clave-valor síncrono para preferencias (nativo: SQLite kv-store). */
export const prefs = {
  get: (key: string): string | null => Storage.getItemSync(key),
  set: (key: string, value: string): void => {
    Storage.setItemSync(key, value);
  },
};
