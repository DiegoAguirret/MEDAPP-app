import { fireEvent, render, screen } from '@testing-library/react-native';
import { DevelopmentPanel } from './DevelopmentPanel';

describe('DevelopmentPanel', () => {
  it('sugiere la pauta según la edad', async () => {
    await render(<DevelopmentPanel />);
    await fireEvent.changeText(screen.getByLabelText('Edad en meses'), '7');
    expect(screen.getByRole('radio', { name: 'Pauta 6 meses' })).toBeSelected();
  });

  it('corrige la edad del prematuro', async () => {
    await render(<DevelopmentPanel />);
    await fireEvent.changeText(screen.getByLabelText('Edad en meses'), '4');
    await fireEvent.press(screen.getByRole('switch', { name: 'Nació prematuro' }));
    await fireEvent.changeText(screen.getByLabelText('Edad gestacional al nacer en semanas'), '32');
    expect(screen.getByText(/Edad corregida: 2 meses/)).toBeOnTheScreen();
    expect(screen.getByRole('radio', { name: 'Pauta Recién nacido' })).toBeSelected();
  });

  it('interpreta cuando falta un hito', async () => {
    await render(<DevelopmentPanel />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Pauta 3 meses' }));
    await fireEvent.press(
      screen.getByRole('button', { name: 'Marcar las pautas anteriores como logradas' }),
    );
    const yes = screen.getAllByRole('radio', { name: /^Sí, / });
    for (const b of yes.slice(1)) await fireEvent.press(b);
    const no = screen.getAllByRole('radio', { name: /^No, / })[0];
    if (!no) throw new Error('falta el botón No');
    await fireEvent.press(no);
    expect(screen.getByText('Hallazgo positivo: 1 hito no logrado')).toBeOnTheScreen();
  });
});
