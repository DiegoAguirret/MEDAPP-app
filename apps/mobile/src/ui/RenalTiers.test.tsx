import { fireEvent, render, screen } from '@testing-library/react-native';
import { RenalTiers } from './RenalTiers';

const tiers = [
  { gfrMin: 0, gfrMax: 20, text: 'Guiarse por niveles séricos.', sourceIds: ['fnme-2008'] },
  { gfrMin: 20, gfrMax: 40, text: 'Cada 24 h.', sourceIds: ['fnme-2008'] },
  { gfrMin: 60, text: 'Cada 8 h (intervalo habitual).', sourceIds: ['fnme-2008'] },
];

describe('tramos de ajuste renal en la ficha', () => {
  it('lista todos los tramos', async () => {
    await render(<RenalTiers tiers={tiers} />);
    expect(screen.getByText('< 20 mL/min')).toBeOnTheScreen();
    expect(screen.getByText('≥ 60 mL/min')).toBeOnTheScreen();
  });

  it('resalta el tramo de la TFG escrita', async () => {
    await render(<RenalTiers tiers={tiers} />);
    await fireEvent.changeText(screen.getByLabelText('TFG o depuración del paciente'), '25');
    expect(screen.getByTestId('renal-tier-match')).toHaveTextContent(
      '20 a < 40 mL/min: Cada 24 h.',
    );
  });

  it('dice cuando la fuente no da ajuste para ese valor', async () => {
    await render(<RenalTiers tiers={tiers} />);
    await fireEvent.changeText(screen.getByLabelText('TFG o depuración del paciente'), '50');
    expect(screen.getByTestId('renal-tier-match')).toHaveTextContent(/no da un ajuste/);
  });
});
