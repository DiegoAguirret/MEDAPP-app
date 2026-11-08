import { act, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { EMPTY_PATIENT } from '../domain/patientInput';
import { HistoryProvider, MAX_HISTORY, useHistory, type HistoryDraft } from './history';

let api: ReturnType<typeof useHistory> | null = null;
function Probe() {
  api = useHistory();
  return <Text testID="n">{api?.entries.map((e) => e.drugName).join(',')}</Text>;
}
const draft = (name: string, dose = '5 mL'): HistoryDraft => ({
  drugId: name.toLowerCase(),
  drugName: name,
  indication: 'Fiebre',
  presentation: 'Jarabe',
  dose,
  patient: { ...EMPTY_PATIENT, weightText: '10', yearsText: '1' },
  patientSummary: '10 kg · 1 a 0 m',
});
const mount = () =>
  render(
    <HistoryProvider>
      <Probe />
    </HistoryProvider>,
  );

describe('historial de cálculos', () => {
  it('guarda lo último primero y lo recuerda al volver a abrir', async () => {
    const first = await mount();
    await act(() => {
      api?.save(draft('Paracetamol'));
      api?.save(draft('Amoxicilina'));
    });
    expect(screen.getByTestId('n')).toHaveTextContent('Amoxicilina,Paracetamol');
    await first.unmount();
    await mount();
    expect(screen.getByTestId('n')).toHaveTextContent('Amoxicilina,Paracetamol');
  });

  it('actualiza el mismo registro si se corrige en la misma visita', async () => {
    await mount();
    let id = '';
    await act(() => {
      id = api?.save(draft('Paracetamol', '5 mL')) ?? '';
    });
    await act(() => {
      api?.save(draft('Paracetamol', '6 mL'), id);
    });
    expect(api?.entries).toHaveLength(1);
    expect(api?.entries[0]?.dose).toBe('6 mL');
  });

  it('guarda como máximo el tope y se puede borrar', async () => {
    await mount();
    await act(() => {
      for (let i = 0; i < MAX_HISTORY + 5; i++) api?.save(draft(`F${i}`));
    });
    expect(api?.entries).toHaveLength(MAX_HISTORY);
    const victim = api?.entries[0]?.id ?? '';
    await act(() => api?.remove(victim));
    expect(api?.entries).toHaveLength(MAX_HISTORY - 1);
    await act(() => api?.clear());
    expect(api?.entries).toHaveLength(0);
  });
});
