// Almacenamiento clave-valor en memoria para las pruebas (sustituye a expo-sqlite/kv-store).
const mockStore = new Map<string, string>();

jest.mock('expo-sqlite/kv-store', () => ({
  __esModule: true,
  default: {
    getItemSync: (k: string) => mockStore.get(k) ?? null,
    setItemSync: (k: string, v: string) => void mockStore.set(k, v),
    clear: () => mockStore.clear(),
  },
}));

beforeEach(() => mockStore.clear());
