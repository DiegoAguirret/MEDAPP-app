import { fireEvent, render, screen } from '@testing-library/react-native';
import { IcsPanel } from './IcsPanel';

describe('IcsPanel', () => {
  it('muestra por defecto 6 a 11 años con dosis baja, media y alta', async () => {
    await render(<IcsPanel />);
    expect(screen.getAllByLabelText('Dosis baja: 100–200 mcg al día').length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText(/Dosis alta/).length).toBeGreaterThan(0);
  });

  it('en 5 años o menos muestra solo la dosis baja y la edad con datos', async () => {
    await render(<IcsPanel />);
    await fireEvent.press(screen.getByRole('radio', { name: '≤ 5 años' }));
    expect(screen.queryAllByLabelText(/Dosis alta/)).toHaveLength(0);
    expect(screen.getByText(/desde 1 año/)).toBeOnTheScreen();
  });

  it('advierte que no es una tabla de equivalencia', async () => {
    await render(<IcsPanel />);
    expect(screen.getByText(/No es una tabla de equivalencia/)).toBeOnTheScreen();
  });
});
