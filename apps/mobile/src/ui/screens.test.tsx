import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';
import { BUNDLE_JSON } from '../content/bundled';
import { SettingsProvider, useSettings } from '../state/settings';
import { TipsProvider } from '../state/tips';
import { DrugInfoSheet } from './DrugInfoSheet';
import { DrugList } from './DrugRow';
import { FavoriteButton } from './FavoriteButton';
import { EmergencySheet } from './EmergencySheet';
import { Home } from './Home';
import { ManualPanel } from './ManualPanel';
import { Onboarding } from './Onboarding';

const bundle = JSON.parse(BUNDLE_JSON) as Bundle;
const drugs = bundle.drugs as Drug[];
const antibiotics = `Antibióticos, ${drugs.filter((d) => d.category === 'antibiotico').length} fármacos`;
const analgesics = drugs.filter((d) => d.category === 'analgesico');

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
    expect(
      screen.getByLabelText(`Analgésicos y antipiréticos, ${analgesics.length} fármacos`),
    ).toBeOnTheScreen();
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

  it('offers the manual calculator when the search finds nothing', async () => {
    const h = handlers();
    await render(<Home drugs={drugs} recalled={new Set()} {...h} />);
    await fireEvent.changeText(screen.getByLabelText('Buscar fármaco o diagnóstico'), 'zzzz');
    await fireEvent.press(screen.getByText('Abrir cálculo manual'));
    expect(h.onOpenManual).toHaveBeenCalled();
  });

  it('does not repeat the tab bar or the full list: categories plus one A–Z entry', async () => {
    const h = handlers();
    await render(<Home drugs={drugs} recalled={new Set()} {...h} />);
    expect(screen.queryByLabelText('Hoja de urgencias')).toBeNull();
    expect(screen.queryByLabelText('Calculadora manual')).toBeNull();
    expect(screen.queryByText(/^paracetamol$/i)).toBeNull();
    await fireEvent.press(screen.getByLabelText(`Todos de la A a la Z, ${drugs.length} fármacos`));
    expect(h.onOpenCategory).toHaveBeenCalledWith('todos');
  });

  it('asks for the patient first', async () => {
    await render(<Home drugs={drugs} recalled={new Set()} {...handlers()} />);
    expect(screen.getByText('¿Para quién es la dosis?')).toBeOnTheScreen();
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '12');
    expect(screen.getByText('Franja amarilla · 12–14 kg')).toBeOnTheScreen();
  });

  it('keeps the patient fields while typing and shows the band after leaving them', async () => {
    await render(<Home drugs={drugs} recalled={new Set()} {...handlers()} />);
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '20');
    await fireEvent(screen.getByLabelText('Edad, años'), 'focus');
    await fireEvent.changeText(screen.getByLabelText('Edad, años'), '5');
    expect(screen.getByLabelText('Edad, meses')).toBeOnTheScreen();
    await fireEvent(screen.getByLabelText('Edad, años'), 'blur');
    await fireEvent(screen.getByLabelText('Edad, meses'), 'focus');
    await fireEvent.changeText(screen.getByLabelText('Edad, meses'), '3');
    await fireEvent(screen.getByLabelText('Edad, meses'), 'blur');
    await waitFor(() => expect(screen.queryByLabelText('Edad, meses')).toBeNull());
    expect(screen.getByText(/20 kg · 5 a 3 m/)).toBeOnTheScreen();
  });

  it('shows recent drugs and opens them', async () => {
    const h = handlers();
    await render(
      <Home drugs={drugs} recalled={new Set()} recentIds={['ibuprofeno', 'gone']} {...h} />,
    );
    await fireEvent.press(screen.getByLabelText('Abrir Ibuprofeno'));
    expect(h.onOpenDrug).toHaveBeenCalledWith('ibuprofeno');
  });

  it('hides recalled drugs from the counts', async () => {
    await render(<Home drugs={drugs} recalled={new Set(['metamizol'])} {...handlers()} />);
    expect(
      screen.getByLabelText(`Analgésicos y antipiréticos, ${analgesics.length - 1} fármacos`),
    ).toBeOnTheScreen();
  });
});

describe('DrugList', () => {
  it('muestra las vías de cada fármaco', async () => {
    await render(
      <DrugList drugs={drugs.filter((d) => d.id === 'adrenalina')} onOpen={jest.fn()} />,
    );
    expect(screen.getByText('IM')).toBeOnTheScreen();
    expect(screen.getByText('IV')).toBeOnTheScreen();
  });
});

describe('DrugInfoSheet', () => {
  it('explica cómo usar la ficha, lista sus fuentes y permite repetir la guía', async () => {
    const onClose = jest.fn();
    const amox = drugs.find((d) => d.id === 'amoxicilina')!;
    await render(
      <TipsProvider>
        <DrugInfoSheet visible drug={amox} sources={bundle.sources} onClose={onClose} />
      </TipsProvider>,
    );
    expect(screen.getByText('Cómo usar esta ficha')).toBeOnTheScreen();
    expect(screen.getByText(/Formulario Nacional/)).toBeOnTheScreen();
    await fireEvent.press(screen.getByRole('button', { name: 'Repetir la guía' }));
    expect(onClose).toHaveBeenCalled();
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

describe('EmergencySheet', () => {
  it('asks for weight and age first', async () => {
    await render(
      <EmergencySheet
        drugs={drugs}
        recalled={new Set()}
        decimalSeparator="."
        onOpenDrug={jest.fn()}
      />,
    );
    expect(screen.getByText('Ingresa el peso y la edad para ver las dosis.')).toBeOnTheScreen();
  });

  it('12 kg, 2 años: adrenalina IM 0.12 mL first and opens the drug', async () => {
    const onOpenDrug = jest.fn();
    await render(
      <EmergencySheet
        drugs={drugs}
        recalled={new Set()}
        decimalSeparator="."
        onOpenDrug={onOpenDrug}
      />,
    );
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '12');
    await fireEvent.changeText(screen.getByLabelText('Edad, años'), '2');
    const adrenalina = screen.getByLabelText(/^Adrenalina \(epinefrina\), Anafilaxia.*0\.12 mL$/);
    expect(adrenalina).toBeOnTheScreen();
    expect(screen.getByText('repetir cada 5–15 min si es necesario')).toBeOnTheScreen();
    expect(
      screen.getByLabelText(/^Diazepam, Convulsión \(vía rectal\), 1\.2 mL$/),
    ).toBeOnTheScreen();
    await fireEvent.press(adrenalina);
    expect(onOpenDrug).toHaveBeenCalledWith('adrenalina');
  });
});
