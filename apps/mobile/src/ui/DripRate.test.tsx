import { fireEvent, render, screen } from '@testing-library/react-native';
import { DripRate } from './DripRate';

describe('goteo en gotas por minuto', () => {
  it('muestra el microgotero por defecto y cambia con el factor del equipo', async () => {
    await render(<DripRate mlPerHour={42} decimalSeparator="." />);
    expect(screen.getByTestId('drip-rate')).toHaveTextContent('42 gotas/min');
    await fireEvent.press(screen.getByText('20 gotas/mL'));
    expect(screen.getByTestId('drip-rate')).toHaveTextContent('14 gotas/min');
  });

  it('avisa que el factor viene impreso en el equipo', async () => {
    await render(<DripRate mlPerHour={10} decimalSeparator="." />);
    expect(screen.getByText(/impreso en el equipo/)).toBeOnTheScreen();
  });
});
