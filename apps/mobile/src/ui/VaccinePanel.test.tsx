import { fireEvent, render, screen } from '@testing-library/react-native';
import { VaccinePanel } from './VaccinePanel';

describe('VaccinePanel', () => {
  it('muestra el esquema completo sin edad', async () => {
    await render(<VaccinePanel />);
    expect(screen.getByText('Recién nacido')).toBeOnTheScreen();
    expect(screen.getByText('14 a 17 años')).toBeOnTheScreen();
  });

  it('resalta lo que corresponde a la edad y la próxima visita', async () => {
    await render(<VaccinePanel />);
    await fireEvent.changeText(screen.getByLabelText('Edad en meses'), '12');
    expect(screen.getByText('A esta edad le corresponde: 12 meses.')).toBeOnTheScreen();
    expect(screen.getByText('Próxima visita: 15 meses.')).toBeOnTheScreen();
    expect(screen.getByText('Le corresponde')).toBeOnTheScreen();
  });

  it('avisa cuando no hay vacuna programada a esa edad', async () => {
    await render(<VaccinePanel />);
    await fireEvent.changeText(screen.getByLabelText('Edad en meses'), '9');
    expect(screen.getByText(/no hay una vacuna programada/)).toBeOnTheScreen();
  });
});
