import { fireEvent, render, screen } from '@testing-library/react-native';
import type { ScoreDef } from '../domain/scores';
import { ScorePanel } from './ScorePanel';

const demo: ScoreDef = {
  id: 'demo',
  title: 'Demo',
  subtitle: 'Prueba',
  icon: 'heart-outline',
  items: [
    {
      id: 'a',
      label: 'Criterio A',
      options: [
        { label: 'a cero', points: 0 },
        { label: 'a dos', points: 2 },
      ],
    },
    {
      id: 'b',
      label: 'Criterio B',
      options: [
        { label: 'b cero', points: 0 },
        { label: 'b uno', points: 1 },
      ],
    },
  ],
  bands: [
    { min: 0, max: 1, label: 'Bajo', tone: 'danger' },
    { min: 2, max: 3, label: 'Alto', tone: 'ok' },
  ],
  sources: ['Fuente de prueba'],
};

describe('ScorePanel', () => {
  it('guía criterio por criterio y muestra total e interpretación al completar', async () => {
    await render(<ScorePanel def={demo} />);
    expect(screen.getByText('0 de 2 criterios')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('radio', { name: 'a dos, 2 puntos' }));
    expect(screen.getByText('1 de 2 criterios')).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('radio', { name: 'b uno, 1 punto' }));
    expect(screen.getByTestId('score-total')).toHaveTextContent('3');
    expect(screen.getByText('Alto')).toBeOnTheScreen();
  });

  it('«Reiniciar» borra las respuestas', async () => {
    await render(<ScorePanel def={demo} />);
    await fireEvent.press(screen.getByRole('radio', { name: 'a dos, 2 puntos' }));
    await fireEvent.press(screen.getByRole('button', { name: 'Reiniciar' }));
    expect(screen.getByText('0 de 2 criterios')).toBeOnTheScreen();
  });

  it('muestra las fuentes', async () => {
    await render(<ScorePanel def={demo} />);
    expect(screen.getByText('Fuente de prueba')).toBeOnTheScreen();
  });
});
