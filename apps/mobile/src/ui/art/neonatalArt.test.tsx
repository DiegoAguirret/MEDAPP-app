import { render, screen } from '@testing-library/react-native';
import { BALLARD_SCORES } from '../../domain/ballard';
import { NEONATAL_SCORES } from '../../domain/neonatalScores';
import { ScorePanel } from '../ScorePanel';
import { hasScoreArt } from './neonatalArt';

describe('ilustraciones de las escalas neonatales', () => {
  it.each(['capurro', 'silverman-andersen'])('%s tiene una imagen para cada opción', (id) => {
    const def = NEONATAL_SCORES.find((d) => d.id === id);
    expect(def).toBeDefined();
    for (const item of def?.items ?? []) {
      expect(hasScoreArt(id, item.id, item.options.length)).toBe(true);
    }
  });

  it.each(['ballard-nino', 'ballard-nina'])(
    '%s tiene imagen para cada opción de postura y ventana cuadrada',
    (id) => {
      const def = BALLARD_SCORES.find((d) => d.id === id);
      for (const itemId of ['postura', 'ventana']) {
        const item = def?.items.find((i) => i.id === itemId);
        expect(item && hasScoreArt(id, item.id, item.options.length)).toBe(true);
      }
    },
  );

  it('el Apgar no lleva imágenes', () => {
    const apgar = NEONATAL_SCORES.find((d) => d.id === 'apgar');
    expect(apgar?.items.some((it) => hasScoreArt('apgar', it.id, it.options.length))).toBe(false);
  });

  it('ScorePanel muestra la imagen sobre cada opción de Capurro', async () => {
    const capurro = NEONATAL_SCORES.find((d) => d.id === 'capurro');
    if (!capurro) throw new Error('falta Capurro');
    await render(<ScorePanel def={capurro} />);
    expect(screen.getByTestId('arte-oreja-0')).toBeOnTheScreen();
    expect(screen.getByTestId('arte-oreja-3')).toBeOnTheScreen();
  });
});
