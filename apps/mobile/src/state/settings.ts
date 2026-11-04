import Storage from 'expo-sqlite/kv-store';
import { useCallback, useState } from 'react';

/** Solo preferencias del médico. Nunca datos de pacientes. */
const KEYS = { disclaimer: 'disclaimerAcceptedV1', decimal: 'decimalSeparator' } as const;

export function useSettings() {
  const [accepted, setAccepted] = useState(() => Storage.getItemSync(KEYS.disclaimer) === 'yes');
  const [decimal, setDecimal] = useState<'.' | ','>(() =>
    Storage.getItemSync(KEYS.decimal) === ',' ? ',' : '.',
  );
  const accept = useCallback(() => {
    Storage.setItemSync(KEYS.disclaimer, 'yes');
    setAccepted(true);
  }, []);
  const changeDecimal = useCallback((sep: '.' | ',') => {
    Storage.setItemSync(KEYS.decimal, sep);
    setDecimal(sep);
  }, []);
  return { accepted, accept, decimal, changeDecimal };
}
