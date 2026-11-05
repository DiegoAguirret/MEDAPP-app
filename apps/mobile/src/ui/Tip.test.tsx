import { fireEvent, render, screen } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { TipsProvider, useTipQueue } from '../state/tips';
import { Tip } from './Tip';

function Screen({ ready = true }: { ready?: boolean }) {
  const queue = useTipQueue([
    ['franja', true],
    ['resultado', ready],
  ]);
  return (
    <View>
      <Text>Contenido</Text>
      <Tip id="franja" queue={queue} />
      <Tip id="resultado" queue={queue} />
    </View>
  );
}

const withTips = (ui: React.ReactElement) => render(<TipsProvider>{ui}</TipsProvider>);

describe('Tip (globo de guía)', () => {
  it('no aparece sin TipsProvider (pantallas de prueba y vista previa intactas)', async () => {
    await render(<Screen />);
    expect(screen.queryByText('Entendido')).toBeNull();
  });

  it('muestra una sola guía a la vez, con su paso', async () => {
    await withTips(<Screen />);
    expect(screen.getAllByRole('button', { name: 'Siguiente' })).toHaveLength(1);
    expect(screen.getByText('El color es el peso')).toBeOnTheScreen();
    expect(screen.getByLabelText('Guía 1 de 2')).toBeOnTheScreen();
  });

  it('«Siguiente» pasa a la siguiente y no la vuelve a mostrar; la última dice «Entendido»', async () => {
    const first = await withTips(<Screen />);
    await fireEvent.press(screen.getByRole('button', { name: 'Siguiente' }));
    expect(screen.getByRole('button', { name: 'Entendido' })).toBeOnTheScreen();
    expect(screen.queryByText('El color es el peso')).toBeNull();
    expect(screen.getByText('Lo que vas a medir')).toBeOnTheScreen();
    await first.unmount();
    await withTips(<Screen />);
    expect(screen.queryByText('El color es el peso')).toBeNull();
  });

  it('no muestra una guía cuya condición aún no se cumple', async () => {
    await withTips(<Screen ready={false} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Siguiente' }));
    expect(screen.queryByRole('button', { name: /Siguiente|Entendido/ })).toBeNull();
  });

  it('«Omitir guía» las oculta todas', async () => {
    await withTips(<Screen />);
    await fireEvent.press(screen.getByRole('button', { name: 'Omitir guía' }));
    expect(screen.queryByRole('button', { name: /Siguiente|Entendido/ })).toBeNull();
  });
});
