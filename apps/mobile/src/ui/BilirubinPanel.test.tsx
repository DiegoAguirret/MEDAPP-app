import { fireEvent, render, screen } from '@testing-library/react-native';
import { BilirubinPanel } from './BilirubinPanel';

async function fill(label: string, value: string) {
  await fireEvent.changeText(screen.getByLabelText(label), value);
}

describe('BilirubinPanel', () => {
  it('indica fototerapia cuando la BST alcanza el umbral', async () => {
    await render(<BilirubinPanel decimalSeparator="." />);
    await fill('Edad gestacional en semanas', '40');
    await fill('Días de vida', '1');
    await fill('Bilirrubina sérica total en mg/dL', '13.5');
    expect(screen.getByText('Fototerapia intensiva')).toBeOnTheScreen();
    expect(screen.getByText('13.3 mg/dL')).toBeOnTheScreen();
  });

  it('un factor de riesgo baja el umbral', async () => {
    await render(<BilirubinPanel decimalSeparator="." />);
    await fill('Edad gestacional en semanas', '39');
    await fill('Días de vida', '5');
    await fill('Bilirrubina sérica total en mg/dL', '19');
    expect(screen.getByText('Por debajo del umbral de fototerapia')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('checkbox', { name: 'Sepsis' }));
    expect(screen.getByText('Fototerapia intensiva')).toBeOnTheScreen();
  });

  it('avisa que la guía es para 35 semanas o más', async () => {
    await render(<BilirubinPanel decimalSeparator="." />);
    await fill('Edad gestacional en semanas', '33');
    await fill('Horas de vida', '30');
    await fill('Bilirrubina sérica total en mg/dL', '10');
    expect(screen.getByText(/35 semanas o más/)).toBeOnTheScreen();
  });
});
