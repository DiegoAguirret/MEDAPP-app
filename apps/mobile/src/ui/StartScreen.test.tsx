import { act, fireEvent, render, screen } from '@testing-library/react-native';
import { StartScreen } from './StartScreen';

describe('pantalla de inicio', () => {
  it('muestra el nombre y pasa sola a la app', async () => {
    jest.useFakeTimers();
    const onDone = jest.fn();
    await render(<StartScreen onDone={onDone} duration={1000} />);
    expect(screen.getByText('Dosikid')).toBeOnTheScreen();
    await act(() => jest.advanceTimersByTime(1000));
    expect(onDone).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('se salta al tocarla', async () => {
    const onDone = jest.fn();
    await render(<StartScreen onDone={onDone} duration={60000} />);
    await fireEvent.press(screen.getByRole('button', { name: /Toca para entrar/ }));
    expect(onDone).toHaveBeenCalled();
  });
});
