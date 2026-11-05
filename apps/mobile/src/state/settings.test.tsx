import { fireEvent, render, screen } from '@testing-library/react-native';
import { Pressable, Text, View } from 'react-native';
import { SettingsProvider, useSettings } from './settings';

function Probe() {
  const { recents, pushRecent } = useSettings();
  return (
    <View>
      <Text testID="recents">{recents.join(',')}</Text>
      {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map((id) => (
        <Pressable key={id} accessibilityRole="button" onPress={() => pushRecent(id)}>
          <Text>{`abrir ${id}`}</Text>
        </Pressable>
      ))}
    </View>
  );
}
const open = (id: string) => fireEvent.press(screen.getByRole('button', { name: `abrir ${id}` }));
const withSettings = () =>
  render(
    <SettingsProvider>
      <Probe />
    </SettingsProvider>,
  );

describe('fármacos recientes', () => {
  it('pone el último abierto primero, sin repetir', async () => {
    await withSettings();
    await open('a');
    await open('b');
    await open('a');
    expect(screen.getByTestId('recents')).toHaveTextContent(/^a,b$/);
  });

  it('guarda como máximo 8 y los recuerda al volver a abrir', async () => {
    const first = await withSettings();
    for (const id of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']) await open(id);
    expect(screen.getByTestId('recents')).toHaveTextContent(/^i,h,g,f,e,d,c,b$/);
    await first.unmount();
    await withSettings();
    expect(screen.getByTestId('recents')).toHaveTextContent(/^i,h,g,f,e,d,c,b$/);
  });
});
