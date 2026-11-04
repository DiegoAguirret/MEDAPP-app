import { calculateDose, formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { customPresentation, manualRule } from '../domain/custom';
import { CLINICAL_DISCLAIMER, REASON_TEXT, WARNING_TEXT } from '../domain/messages';
import { parseWeight } from '../domain/patientInput';
import { Banner, Card, NumberField, SectionTitle, Segmented } from './components';
import { font, radius, space, useColors, type Palette } from './theme';

type Interval = 4 | 6 | 8 | 12 | 24;
const INTERVALS = ['4', '6', '8', '12', '24'] as const;

/** Calculadora manual: dosis libre por kg, para fármacos o pautas que no están en la app. */
export function ManualPanel({ decimalSeparator }: { decimalSeparator: '.' | ',' }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);

  const [weightText, setWeightText] = useState('');
  const [basis, setBasis] = useState<'mg/kg/dose' | 'mg/kg/day'>('mg/kg/dose');
  const [interval, setInterval] = useState<(typeof INTERVALS)[number]>('6');
  const [amountText, setAmountText] = useState('');
  const [maxText, setMaxText] = useState('');
  const [mgText, setMgText] = useState('');
  const [mlText, setMlText] = useState('');

  const weight = parseWeight(weightText);
  const rule = manualRule({
    amountText,
    basis,
    intervalHours: Number(interval) as Interval,
    maxPerDoseText: maxText,
  });
  const presentation = customPresentation(mgText, mlText);
  const result =
    weight.ok && rule && presentation
      ? calculateDose({ rule, presentation, patient: { weightKg: weight.kg, ageDays: 365 } })
      : null;

  return (
    <View>
      <Banner tone="warning">
        Cálculo libre sin ficha: verifique la dosis, el intervalo y el máximo en una fuente oficial.
      </Banner>
      <Card>
        <SectionTitle>Paciente</SectionTitle>
        <NumberField
          label="Peso en kilogramos"
          suffix="kg"
          value={weightText}
          onChangeText={setWeightText}
          placeholder="0"
        />
        {weightText.trim() !== '' && !weight.ok ? (
          <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
        ) : null}
      </Card>
      <Card>
        <SectionTitle>Dosis</SectionTitle>
        <Segmented
          label="Tipo de dosis"
          options={[
            { value: 'mg/kg/dose', label: 'mg/kg/dosis' },
            { value: 'mg/kg/day', label: 'mg/kg/día' },
          ]}
          value={basis}
          onChange={setBasis}
        />
        <NumberField
          label="Dosis por kg"
          suffix={basis === 'mg/kg/dose' ? 'mg/kg/dosis' : 'mg/kg/día'}
          value={amountText}
          onChangeText={setAmountText}
          placeholder="0"
        />
        <SectionTitle>Frecuencia</SectionTitle>
        <Segmented
          label="Intervalo"
          options={INTERVALS.map((h) => ({ value: h, label: `c/${h} h` }))}
          value={interval}
          onChange={setInterval}
        />
        <NumberField
          label="Dosis máxima por toma (opcional)"
          suffix="mg"
          value={maxText}
          onChangeText={setMaxText}
          placeholder="sin tope"
        />
      </Card>
      <Card>
        <SectionTitle>Concentración del preparado</SectionTitle>
        <View style={s.row}>
          <NumberField
            label="mg del preparado"
            suffix="mg"
            value={mgText}
            onChangeText={setMgText}
            placeholder="250"
          />
          <NumberField
            label="en mL"
            suffix="mL"
            value={mlText}
            onChangeText={setMlText}
            placeholder="5"
          />
        </View>
      </Card>

      {result?.status === 'ok' ? (
        <View style={s.result}>
          <Text style={s.resultLabel}>DOSIS POR TOMA</Text>
          <Text testID="result-mg" style={s.resultMg}>
            {fmt(result.mgPerDose.chosen)} mg
          </Text>
          <Text testID="result-amount" style={s.resultAmount}>
            {fmt(result.amount.value)} mL
          </Text>
          <Text style={s.resultSub}>
            Cada {interval} h · {fmt(result.dosesPerDay)} tomas/día · {fmt(result.mgPerDay)} mg/día
          </Text>
        </View>
      ) : null}
      {result?.status === 'ok' && rule?.notes ? <Banner tone="warning">{rule.notes}</Banner> : null}
      {result?.status === 'ok'
        ? result.warnings
            .filter((w) => w !== 'weight_implausible')
            .map((w) => (
              <Banner key={w} tone="warning">
                {WARNING_TEXT[w]}
              </Banner>
            ))
        : null}
      {result?.status === 'ok' ? (
        <Card>
          <SectionTitle>Cálculo paso a paso</SectionTitle>
          {result.steps.map((st) => (
            <Text key={st.label} style={s.body}>
              {st.label}: {st.expression.replace(/\./g, decimalSeparator)} ={' '}
              {st.result.replace(/\./g, decimalSeparator)}
            </Text>
          ))}
        </Card>
      ) : null}
      <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    row: { flexDirection: 'row', gap: space.md },
    error: { color: c.danger, fontSize: font.body },
    body: { fontSize: font.body, color: c.text },
    result: {
      backgroundColor: c.primary,
      borderRadius: radius.lg,
      padding: space.xl,
      marginBottom: space.md,
      gap: space.xs,
    },
    resultLabel: { color: c.primaryText, fontSize: font.small, fontWeight: '800', opacity: 0.85 },
    resultMg: { color: c.primaryText, fontSize: 40, fontWeight: '900' },
    resultAmount: { color: c.primaryText, fontSize: font.big, fontWeight: '800' },
    resultSub: { color: c.primaryText, fontSize: font.body, opacity: 0.9 },
    disclaimer: {
      fontSize: font.small,
      color: c.muted,
      fontStyle: 'italic',
      marginVertical: space.md,
    },
  });
}
