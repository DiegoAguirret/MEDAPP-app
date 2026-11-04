import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { BUNDLE_JSON } from '../content/bundled';
import { SettingsProvider, useSettings } from '../state/settings';
import { FavoriteButton } from './FavoriteButton';
import { Home } from './Home';
import { ManualPanel } from './ManualPanel';
import { Onboarding } from './Onboarding';

const bundle = JSON.parse(BUNDLE_JSON) as Bundle;
const drugs = bundle.drugs as Drug[];
const antibiotics = `Antibióticos, ${drugs.filter((d) => d.category === 'antibiotico').length} fármacos`;

describe('Home', () => {
  const handlers = () => ({
    onOpenDrug: jest.fn(),
    onOpenCategory: jest.fn(),
    onOpenManual: jest.fn(),
  });

  it('shows categories with their drug counts', async () => {
    await render(<Home drugs={drugs} recalled={new Set()} {...handlers()} />);
    expect(screen.getByText('Antibióticos')).toBeOnTheScreen();
    expect(screen.getByLabelText(antibiotics)).toBeOnTheScreen();
    expect(screen.getByLabelText('Analgésicos y antipiréticos, 3 fármacos')).toBeOnTheScreen();
  });

  it('opens a category', async () => {
    const h = handlers();
    await render(<Home drugs={drugs} recalled={new Set()} {...h} />);
    await fireEvent.press(screen.getByLabelText(antibiotics));
    expect(h.onOpenCategory).toHaveBeenCalledWith('antibiotico');
  });

  it('searches without accents and opens the drug', async () => {
    const h = handlers();
    await render(<Home drugs={drugs} recalled={new Set()} {...h} />);
    await fireEvent.changeText(
      screen.getByLabelText('Buscar fármaco o diagnóstico'),
      'ondansetron',
    );
    await fireEvent.press(screen.getByText('ONDANSETRÓN'));
    expect(h.onOpenDrug).toHaveBeenCalledWith('ondansetron');
  });

  it('opens the manual calculator', async () => {
    const h = handlers();
    await render(<Home drugs={drugs} recalled={new Set()} {...h} />);
    await fireEvent.press(screen.getByLabelText('Calculadora manual'));
    expect(h.onOpenManual).toHaveBeenCalled();
  });

  it('hides recalled drugs from the counts', async () => {
    await render(<Home drugs={drugs} recalled={new Set(['metamizol'])} {...handlers()} />);
    expect(screen.getByLabelText('Analgésicos y antipiréticos, 2 fármacos')).toBeOnTheScreen();
  });
});

describe('ManualPanel', () => {
  it('15 mg/kg/dosis, 10 kg, 120 mg/5 mL → 150 mg = 6.3 mL', async () => {
    await render(<ManualPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '10');
    await fireEvent.changeText(screen.getByLabelText('Dosis por kg'), '15');
    await fireEvent.changeText(screen.getByLabelText('mg del preparado'), '120');
    await fireEvent.changeText(screen.getByLabelText('en mL'), '5');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('150 mg');
    expect(screen.getByTestId('result-amount')).toHaveTextContent('6.3 mL');
  });

  it('divides a daily dose by the doses per day', async () => {
    await render(<ManualPanel decimalSeparator="." />);
    await fireEvent.press(screen.getByText('mg/kg/día'));
    await fireEvent.press(screen.getByText('c/12 h'));
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '12');
    await fireEvent.changeText(screen.getByLabelText('Dosis por kg'), '90');
    await fireEvent.changeText(screen.getByLabelText('mg del preparado'), '250');
    await fireEvent.changeText(screen.getByLabelText('en mL'), '5');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('540 mg');
    expect(screen.getByTestId('result-amount')).toHaveTextContent('10.8 mL');
  });

  it('applies the maximum dose when given', async () => {
    await render(<ManualPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '45');
    await fireEvent.changeText(screen.getByLabelText('Dosis por kg'), '10');
    await fireEvent.changeText(screen.getByLabelText('Dosis máxima por toma (opcional)'), '400');
    await fireEvent.changeText(screen.getByLabelText('mg del preparado'), '100');
    await fireEvent.changeText(screen.getByLabelText('en mL'), '5');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('400 mg');
  });

  it('warns when there is no maximum dose', async () => {
    await render(<ManualPanel decimalSeparator="." />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '10');
    await fireEvent.changeText(screen.getByLabelText('Dosis por kg'), '15');
    await fireEvent.changeText(screen.getByLabelText('mg del preparado'), '120');
    await fireEvent.changeText(screen.getByLabelText('en mL'), '5');
    expect(screen.getByText(/Sin tope/)).toBeOnTheScreen();
  });
});

describe('FavoriteButton', () => {
  function Count() {
    const { favorites } = useSettings();
    return <Text testID="fav-count">{favorites.length}</Text>;
  }

  it('toggles a favorite', async () => {
    await render(
      <SettingsProvider>
        <FavoriteButton drugId="paracetamol" />
        <Count />
      </SettingsProvider>,
    );
    await fireEvent.press(screen.getByLabelText('Agregar a favoritos'));
    expect(screen.getByTestId('fav-count')).toHaveTextContent('1');
    await fireEvent.press(screen.getByLabelText('Quitar de favoritos'));
    expect(screen.getByTestId('fav-count')).toHaveTextContent('0');
  });
});

describe('Onboarding', () => {
  it('walks through the slides and accepts at the end', async () => {
    const onDone = jest.fn();
    await render(<Onboarding onDone={onDone} />);
    await fireEvent.press(screen.getByText('Siguiente'));
    await fireEvent.press(screen.getByText('Siguiente'));
    await fireEvent.press(screen.getByText('Soy profesional de la salud y acepto'));
    expect(onDone).toHaveBeenCalled();
  });
});
