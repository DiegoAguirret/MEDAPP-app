import { fireEvent, render, screen } from '@testing-library/react-native';
import { FluidsPanel } from './FluidsPanel';

describe('FluidsPanel', () => {
  it('maintenance fluids for 15 kg: 1250 mL/día and 52.1 mL/h', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '15');
    expect(screen.getByTestId('maint-day')).toHaveTextContent('1250 mL/día');
    expect(screen.getByTestId('maint-hour')).toHaveTextContent('52.1 mL/h');
  });

  it('plan B (MINSA) for 10 kg: 500–1000 mL in 3–4 h', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '10');
    expect(screen.getByTestId('plan-b')).toHaveTextContent(/500–1000 mL de SRO en 3–4 h/);
  });

  it('plan C for an 8 kg infant under 12 months', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '8');
    await fireEvent.press(screen.getByText('Menor de 12 meses'));
    expect(screen.getByTestId('plan-c-1')).toHaveTextContent(/240 mL en 60 min/);
    expect(screen.getByTestId('plan-c-2')).toHaveTextContent(/560 mL en 300 min/);
  });

  it('body surface area for 20 kg and 110 cm is 0.78 m²', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '20');
    await fireEvent.changeText(screen.getByLabelText('Talla en centímetros'), '110');
    expect(screen.getByTestId('bsa')).toHaveTextContent('0.78 m²');
  });

  it('accepts adolescent heights above 150 cm (50 kg, 160 cm → 1.49 m²)', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '50');
    await fireEvent.changeText(screen.getByLabelText('Talla en centímetros'), '160');
    expect(screen.getByTestId('bsa')).toHaveTextContent('1.49 m²');
  });

  it('shows nothing for an invalid weight', async () => {
    await render(<FluidsPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '-2');
    expect(screen.queryByTestId('maint-day')).toBeNull();
  });
});
