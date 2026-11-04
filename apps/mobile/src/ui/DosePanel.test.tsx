import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { BUNDLE_JSON } from '../content/bundled';
import { DosePanel } from './DosePanel';

const bundle = JSON.parse(BUNDLE_JSON) as Bundle;
const drugs = bundle.drugs as Drug[];
const sources = bundle.sources;
const drug = (id: string) => drugs.find((d) => d.id === id)!;

async function show(id: string, sep: '.' | ',' = '.') {
  await render(<DosePanel drug={drug(id)} decimalSeparator={sep} sources={sources} />);
}

async function fillPatient(weight: string, years: string, months: string) {
  await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), weight);
  await fireEvent.changeText(screen.getByLabelText('Edad, años'), years);
  await fireEvent.changeText(screen.getByLabelText('Edad, meses'), months);
}

describe('DosePanel — cálculo', () => {
  it('paracetamol 10 kg, 1 año 1 mes, jarabe 120 mg/5 mL → 150 mg = 6.3 mL', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '1');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('150 mg');
    expect(screen.getByTestId('result-amount')).toHaveTextContent('6.3 mL');
  });

  it('recalculates when the presentation changes', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '1');
    await fireEvent.press(screen.getByText('Solución oral 100 mg/mL'));
    expect(screen.getByTestId('result-amount')).toHaveTextContent('1.5 mL');
  });

  it('accepts a comma decimal weight', async () => {
    await show('paracetamol', ',');
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('12,5', '2', '0');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('187,5 mg');
  });

  it('accepts the weight in pounds (22 lb ≈ 9.98 kg)', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByText('lb'));
    await fireEvent.changeText(screen.getByLabelText('Peso en libras'), '22');
    await fireEvent.changeText(screen.getByLabelText('Edad, años'), '1');
    // 22 lb = 9.979 kg × 15 mg/kg = 149.69 mg
    expect(screen.getByTestId('result-mg')).toHaveTextContent('149.69 mg');
    expect(screen.getByText(/≈ 9.98 kg/)).toBeOnTheScreen();
  });

  it('accepts the age in days', async () => {
    await show('amoxicilina');
    await fireEvent.press(screen.getByText('Días'));
    await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), '4');
    await fireEvent.changeText(screen.getByLabelText('Edad en días'), '40');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('60 mg');
  });

  it('calculates with a custom concentration', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByText('Personalizar concentración'));
    await fireEvent.changeText(screen.getByLabelText('mg del preparado'), '250');
    await fireEvent.changeText(screen.getByLabelText('en mL'), '5');
    await fillPatient('10', '1', '0');
    expect(screen.getByTestId('result-amount')).toHaveTextContent('3 mL');
  });

  it('lets the doctor choose the minimum of the range', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '0');
    await fireEvent.press(screen.getByText('Mínima 10 mg/kg/dosis'));
    expect(screen.getByTestId('result-mg')).toHaveTextContent('100 mg');
  });

  it('changes the indication from the selector', async () => {
    await show('azitromicina');
    expect(screen.getByText(/1\/4 · toca para cambiar/)).toBeOnTheScreen();
    await fireEvent.press(screen.getByLabelText('Cambiar indicación'));
    await fireEvent.press(screen.getByText(/Faringoamigdalitis \(2 años o más\)/));
    await fillPatient('15', '3', '0');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('180 mg');
  });
});

describe('DosePanel — seguridad', () => {
  it('shows a verified-sources badge and no alarm banner', async () => {
    await show('paracetamol');
    expect(screen.getByText(/Fuentes verificadas · 05\/11\/2026/)).toBeOnTheScreen();
    expect(screen.queryByText(/NO VALIDADO/)).toBeNull();
  });

  it('keeps the warning banner for unverified drafts', async () => {
    const draft = {
      ...drug('paracetamol'),
      review: { status: 'borrador' as const, author: 'x', reviewers: [] },
    };
    await render(<DosePanel drug={draft} decimalSeparator="." sources={sources} />);
    expect(screen.getByText(/Ficha sin verificar/)).toBeOnTheScreen();
  });

  it('shows no result for an invalid weight', async () => {
    await show('paracetamol');
    await fillPatient('0', '1', '0');
    expect(screen.queryByTestId('result-amount')).toBeNull();
    expect(screen.getByText(/peso entre/i)).toBeOnTheScreen();
  });

  it('shows cap and implausible weight warnings', async () => {
    await show('ibuprofeno');
    await fillPatient('45', '0', '7');
    expect(screen.getByText(/tope máximo/i)).toBeOnTheScreen();
    expect(screen.getByText(/no es habitual para la edad/i)).toBeOnTheScreen();
  });

  it('explains when the age is outside the indication', async () => {
    await show('ibuprofeno');
    await fillPatient('5', '0', '2');
    expect(screen.queryByTestId('result-amount')).toBeNull();
    expect(screen.getByText(/fuera del rango de edad/i)).toBeOnTheScreen();
  });

  it('never stores the patient: a new render starts empty', async () => {
    const first = await render(
      <DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />,
    );
    await fillPatient('10', '1', '0');
    await first.unmount();
    await show('paracetamol');
    expect(screen.getByLabelText('Peso en kilogramos').props.value).toBe('');
  });
});

describe('DosePanel — secciones plegables', () => {
  it('lists the sources with the Peruvian norm first', async () => {
    await show('paracetamol');
    await fireEvent.press(screen.getByLabelText('Fuentes'));
    expect(
      screen.getByText(/Fuente principal: Formulario Nacional de Medicamentos Esenciales/),
    ).toBeOnTheScreen();
  });

  it('shows the sources of the selected indication', async () => {
    await show('azitromicina');
    await fireEvent.press(screen.getByLabelText('Fuentes'));
    expect(screen.getByText(/Azithromycin — prescribing information/)).toBeOnTheScreen();
  });

  it('shows per-country differences', async () => {
    await show('cefalexina');
    await fireEvent.press(screen.getByLabelText('Diferencias por país'));
    expect(screen.getByText(/EE\. UU\.: La FDA admite hasta 4 g\/día/)).toBeOnTheScreen();
  });

  it('counts contraindications', async () => {
    await show('metamizol');
    await fireEvent.press(screen.getByLabelText('Contraindicaciones'));
    expect(screen.getByText(/agranulocitosis o alteraciones de la médula/)).toBeOnTheScreen();
  });
});
