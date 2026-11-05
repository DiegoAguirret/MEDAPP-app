import { fireEvent, render, screen } from '@testing-library/react-native';
import { Pressable, Text, View } from 'react-native';
import { firstUnseen, TipsProvider, useTips } from './tips';

function Probe() {
  const tips = useTips();
  return (
    <View>
      <Text testID="state">
        {tips.enabled ? 'on' : 'off'}:{[...tips.seen].join(',')}
      </Text>
      <Pressable accessibilityRole="button" onPress={() => tips.markSeen('franja')}>
        <Text>ver</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={tips.skipAll}>
        <Text>omitir</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={tips.reset}>
        <Text>reiniciar</Text>
      </Pressable>
    </View>
  );
}
const shown = () => screen.getByTestId('state');
const press = (name: string) => fireEvent.press(screen.getByRole('button', { name }));
const withProvider = () =>
  render(
    <TipsProvider>
      <Probe />
    </TipsProvider>,
  );

describe('guías (tips)', () => {
  it('sin proveedor no muestra ninguna guía', async () => {
    await render(<Probe />);
    expect(shown()).toHaveTextContent('off:');
  });

  it('marca una guía como vista y la recuerda al volver a abrir', async () => {
    const first = await withProvider();
    expect(shown()).toHaveTextContent(/^on:$/);
    await press('ver');
    expect(shown()).toHaveTextContent('on:franja');
    await first.unmount();
    await withProvider();
    expect(shown()).toHaveTextContent('on:franja');
  });

  it('«Omitir guía» apaga todas, aun al volver a abrir', async () => {
    const first = await withProvider();
    await press('omitir');
    expect(shown()).toHaveTextContent('off:');
    await first.unmount();
    await withProvider();
    expect(shown()).toHaveTextContent('off:');
  });

  it('«Volver a ver las guías» las enciende y olvida las vistas', async () => {
    await withProvider();
    await press('ver');
    await press('omitir');
    await press('reiniciar');
    expect(shown()).toHaveTextContent(/^on:$/);
  });

  it('firstUnseen devuelve la primera guía pendiente cuya condición se cumple', () => {
    const seen = new Set(['a']);
    expect(
      firstUnseen(seen, [
        ['a', true],
        ['b', false],
        ['c', true],
      ]),
    ).toBe('c');
    expect(firstUnseen(seen, [['a', true]])).toBeNull();
  });
});
