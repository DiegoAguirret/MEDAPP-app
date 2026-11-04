import type { Bundle } from '@medapp/content-bundle';
import type { Drug } from '@medapp/content-schema';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { BUNDLE_JSON } from '../content/bundled';
import { DosePanel } from './DosePanel';

const bundle = JSON.parse(BUNDLE_JSON) as Bundle;
const drugs = bundle.drugs as Drug[];
const sources = bundle.sources;
const drug = (id: string) => drugs.find((d) => d.id === id)!;

async function fillPatient(weight: string, years: string, months: string) {
  await fireEvent.changeText(screen.getByLabelText('Peso en kilogramos'), weight);
  await fireEvent.changeText(screen.getByLabelText('Edad, años'), years);
  await fireEvent.changeText(screen.getByLabelText('Edad, meses'), months);
}

describe('DosePanel', () => {
  it('paracetamol 10 kg, 1 año 1 mes, jarabe 120 mg/5 mL → 150 mg = 6.3 mL', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '1');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('150 mg');
    expect(screen.getByTestId('result-amount')).toHaveTextContent('6.3 mL');
  });

  it('recalculates when the presentation changes', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '1');
    await fireEvent.press(screen.getByText('Solución oral 100 mg/mL'));
    expect(screen.getByTestId('result-amount')).toHaveTextContent('1.5 mL');
  });

  it('accepts a comma decimal weight', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="," sources={sources} />);
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('12,5', '2', '0');
    expect(screen.getByTestId('result-mg')).toHaveTextContent('187,5 mg');
  });

  it('shows a verified-sources badge and no alarm banner for verified content', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
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
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    await fillPatient('0', '1', '0');
    expect(screen.queryByTestId('result-amount')).toBeNull();
    expect(screen.getByText(/peso entre/i)).toBeOnTheScreen();
  });

  it('shows cap and implausible weight warnings', async () => {
    await render(<DosePanel drug={drug('ibuprofeno')} decimalSeparator="." sources={sources} />);
    await fillPatient('45', '0', '7');
    expect(screen.getByText(/tope máximo/i)).toBeOnTheScreen();
    expect(screen.getByText(/no es habitual para la edad/i)).toBeOnTheScreen();
  });

  it('explains when the age is outside the indication', async () => {
    await render(<DosePanel drug={drug('ibuprofeno')} decimalSeparator="." sources={sources} />);
    await fillPatient('5', '0', '2');
    expect(screen.queryByTestId('result-amount')).toBeNull();
    expect(screen.getByText(/fuera del rango de edad/i)).toBeOnTheScreen();
  });

  it('shows the sources of the selected indication', async () => {
    await render(<DosePanel drug={drug('azitromicina')} decimalSeparator="." sources={sources} />);
    expect(screen.getByText(/Azithromycin — prescribing information/)).toBeOnTheScreen();
    expect(screen.getByText(/Azitromicina Sandoz/)).toBeOnTheScreen();
  });

  it('never stores the patient: a new render starts empty', async () => {
    const first = await render(
      <DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />,
    );
    await fillPatient('10', '1', '0');
    await first.unmount();
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    expect(screen.getByLabelText('Peso en kilogramos').props.value).toBe('');
  });

  it('lets the doctor choose the minimum of the range', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    await fireEvent.press(screen.getByText('Jarabe 120 mg/5 mL'));
    await fillPatient('10', '1', '0');
    await fireEvent.press(screen.getByText('Mínima 10 mg/kg/dosis'));
    expect(screen.getByTestId('result-mg')).toHaveTextContent('100 mg');
  });

  it('shows per-country differences', async () => {
    await render(<DosePanel drug={drug('cefalexina')} decimalSeparator="." sources={sources} />);
    expect(screen.getByText(/Diferencias por país/i)).toBeOnTheScreen();
    expect(screen.getByText(/EE\. UU\.: La FDA admite hasta 4 g\/día/)).toBeOnTheScreen();
  });

  it('lists the Peruvian norm first and marks the main source', async () => {
    await render(<DosePanel drug={drug('paracetamol')} decimalSeparator="." sources={sources} />);
    expect(
      screen.getByText(/Fuente principal: Formulario Nacional de Medicamentos Esenciales/),
    ).toBeOnTheScreen();
  });
});
