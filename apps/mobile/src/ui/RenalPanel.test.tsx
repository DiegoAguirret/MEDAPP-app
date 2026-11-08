import { fireEvent, render, screen } from '@testing-library/react-native';
import { RenalPanel } from './RenalPanel';

describe('función renal (Schwartz 2009 y KDIGO 2012)', () => {
  it('calcula la TFG y su categoría', async () => {
    await render(<RenalPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Talla en centímetros'), '140');
    await fireEvent.changeText(screen.getByLabelText('Creatinina sérica en mg/dL'), '1.4');
    expect(screen.getByTestId('egfr')).toHaveTextContent(/^41.3 mL/);
    expect(screen.getByText(/G3b/)).toBeOnTheScreen();
  });

  it('acepta coma decimal y no calcula sin datos', async () => {
    await render(<RenalPanel decimalSeparator="," />);
    expect(screen.queryByTestId('egfr')).toBeNull();
    await fireEvent.changeText(screen.getByLabelText('Talla en centímetros'), '100');
    await fireEvent.changeText(screen.getByLabelText('Creatinina sérica en mg/dL'), '0,5');
    expect(screen.getByTestId('egfr')).toHaveTextContent(/^82,6 mL/);
  });
});
