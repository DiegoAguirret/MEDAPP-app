import { fireEvent, render, screen } from '@testing-library/react-native';
import { useState } from 'react';
import { Text } from 'react-native';
import { SearchBox } from './SearchBox';

function Probe() {
  const [q, setQ] = useState('');
  return (
    <>
      <SearchBox value={q} onChangeText={setQ} placeholder="Buscar" label="Buscar fármaco" />
      <Text testID="q">{q}</Text>
    </>
  );
}

describe('buscador', () => {
  it('escribe y se borra con la x', async () => {
    await render(<Probe />);
    expect(screen.queryByRole('button', { name: 'Borrar búsqueda' })).toBeNull();
    await fireEvent.changeText(screen.getByLabelText('Buscar fármaco'), 'amox');
    expect(screen.getByTestId('q')).toHaveTextContent('amox');
    await fireEvent.press(screen.getByRole('button', { name: 'Borrar búsqueda' }));
    expect(screen.getByTestId('q')).toHaveTextContent('');
  });
});
