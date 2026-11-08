import { fireEvent, render, screen } from '@testing-library/react-native';
import { BpPanel } from './BpPanel';

async function fill(label: string, value: string) {
  await fireEvent.changeText(screen.getByLabelText(label), value);
}

describe('BpPanel', () => {
  it('clasifica con la columna de talla más cercana', async () => {
    await render(<BpPanel />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niño' }));
    await fill('Edad en años cumplidos', '10');
    await fill('Talla en centímetros', '141');
    await fill('Presión sistólica en mm Hg', '113');
    await fill('Presión diastólica en mm Hg', '70');
    expect(screen.getByRole('radio', { name: 'p50' })).toBeSelected();
    expect(screen.getByText('PA elevada')).toBeOnTheScreen();
    expect(screen.getByText('112/74 mm Hg')).toBeOnTheScreen();
  });

  it('avisa la derivación inmediata en estadio 2 muy alto', async () => {
    await render(<BpPanel />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niña' }));
    await fill('Edad en años cumplidos', '15');
    await fill('Talla en centímetros', '160');
    await fill('Presión sistólica en mm Hg', '185');
    await fill('Presión diastólica en mm Hg', '95');
    expect(screen.getByText('HTA estadio 2')).toBeOnTheScreen();
    expect(screen.getByText(/Derivar de inmediato a emergencia/)).toBeOnTheScreen();
  });

  it('fuera de 1 a 17 años avisa el rango', async () => {
    await render(<BpPanel />);
    await fireEvent.press(screen.getByRole('radio', { name: 'Niño' }));
    await fill('Edad en años cumplidos', '18');
    expect(screen.getByText(/1 a 17 años/)).toBeOnTheScreen();
  });
});
