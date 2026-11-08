import { fireEvent, render, screen } from '@testing-library/react-native';
import { EMPTY_PATIENT } from '../domain/patientInput';
import type { HistoryEntry } from '../state/history';
import { HistoryPanel } from './HistoryPanel';

const now = new Date('2026-11-08T15:00:00');
const entry = (id: string, drugName: string, at: string): HistoryEntry => ({
  id,
  at,
  drugId: drugName.toLowerCase(),
  drugName,
  indication: 'Fiebre',
  presentation: 'Jarabe 120 mg/5 mL',
  dose: '6.3 mL (150 mg) c/6 h',
  patient: { ...EMPTY_PATIENT, weightText: '10', yearsText: '1' },
  patientSummary: '10 kg · 1 a 0 m',
});
const entries = [
  entry('a', 'Paracetamol', '2026-11-08T10:00:00'),
  entry('b', 'Amoxicilina', '2026-11-07T09:30:00'),
];

describe('pantalla de historial', () => {
  it('agrupa por día y abre un registro', async () => {
    const onOpen = jest.fn();
    await render(
      <HistoryPanel
        entries={entries}
        onOpen={onOpen}
        onRemove={jest.fn()}
        onClear={jest.fn()}
        now={now}
      />,
    );
    expect(screen.getByText('Hoy')).toBeOnTheScreen();
    expect(screen.getByText('Ayer')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: /Abrir Amoxicilina/ }));
    expect(onOpen).toHaveBeenCalledWith(entries[1]);
  });

  it('filtra por la búsqueda', async () => {
    await render(
      <HistoryPanel
        entries={entries}
        onOpen={jest.fn()}
        onRemove={jest.fn()}
        onClear={jest.fn()}
        now={now}
      />,
    );
    await fireEvent.changeText(screen.getByLabelText('Buscar en el historial'), 'amox');
    expect(screen.queryByRole('button', { name: /Abrir Paracetamol/ })).toBeNull();
    expect(screen.getByRole('button', { name: /Abrir Amoxicilina/ })).toBeOnTheScreen();
  });

  it('pide confirmación antes de borrar todo', async () => {
    const onClear = jest.fn();
    await render(
      <HistoryPanel
        entries={entries}
        onOpen={jest.fn()}
        onRemove={jest.fn()}
        onClear={onClear}
        now={now}
      />,
    );
    await fireEvent.press(screen.getByRole('button', { name: 'Borrar historial' }));
    expect(onClear).not.toHaveBeenCalled();
    await fireEvent.press(screen.getByRole('button', { name: 'Borrar todo' }));
    expect(onClear).toHaveBeenCalled();
  });

  it('explica qué es cuando está vacío', async () => {
    await render(
      <HistoryPanel entries={[]} onOpen={jest.fn()} onRemove={jest.fn()} onClear={jest.fn()} />,
    );
    expect(screen.getByText(/Aún no hay cálculos/)).toBeOnTheScreen();
  });
});
