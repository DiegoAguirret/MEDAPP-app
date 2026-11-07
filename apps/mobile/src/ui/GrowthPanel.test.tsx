import { fireEvent, render, screen } from '@testing-library/react-native';
import { GrowthPanel } from './GrowthPanel';

async function fill(label: string, value: string) {
  await fireEvent.changeText(screen.getByLabelText(label), value);
}

describe('GrowthPanel', () => {
  it('pide sexo, edad y una medida antes de calcular', async () => {
    await render(<GrowthPanel decimalSeparator="," />);
    expect(screen.getByText(/Elige el sexo, escribe la edad/)).toBeOnTheScreen();
  });

  it('clasifica el peso para la edad con la NTS 238', async () => {
    await render(<GrowthPanel decimalSeparator="," />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niño' }));
    await fill('Edad en años', '1');
    await fill('Peso en kilogramos', '7,7');
    expect(screen.getByText('Peso para la edad')).toBeOnTheScreen();
    expect(screen.getByText('−2,05')).toBeOnTheScreen();
    expect(screen.getByText('Bajo peso')).toBeOnTheScreen();
  });

  it('en menores de 5 años pregunta cómo se midió y calcula peso para la longitud', async () => {
    await render(<GrowthPanel decimalSeparator="." />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niña' }));
    await fill('Edad en meses', '10');
    await fill('Peso en kilogramos', '8');
    await fill('Longitud o talla en centímetros', '70');
    expect(screen.getByRole('radio', { name: 'Acostado' })).toBeOnTheScreen();
    expect(screen.getByText('Peso para la longitud')).toBeOnTheScreen();
  });

  it('desde los 5 años usa IMC para la edad y oculta perímetros', async () => {
    await render(<GrowthPanel decimalSeparator="." />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niño' }));
    await fill('Edad en años', '8');
    await fill('Peso en kilogramos', '25');
    await fill('Longitud o talla en centímetros', '128');
    expect(screen.getByText('IMC para la edad')).toBeOnTheScreen();
    expect(screen.queryByLabelText('Perímetro cefálico en centímetros')).toBeNull();
    expect(screen.queryByRole('radio', { name: 'Acostado' })).toBeNull();
  });
});
