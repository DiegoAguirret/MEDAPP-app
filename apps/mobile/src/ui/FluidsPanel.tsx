import { bsaMosteller, dehydrationPlan, formatClinical, hollidaySegar } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CLINICAL_DISCLAIMER, REASON_TEXT } from '../domain/messages';
import { parseHeight, parseWeight } from '../domain/patientInput';
import { Card, Chip, NumberField, SectionTitle } from './components';
import { family, space, useColors, type Palette } from './theme';

export function FluidsPanel({ decimalSeparator }: { decimalSeparator: '.' | ',' }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const [weightText, setWeightText] = useState('');
  const [heightText, setHeightText] = useState('');
  const [infant, setInfant] = useState(false);
  const weight = parseWeight(weightText);
  const height = parseHeight(heightText);

  const maint = weight.ok ? hollidaySegar(weight.kg) : null;
  const planB = weight.ok ? dehydrationPlan('B', weight.kg, infant ? 200 : 400) : null;
  const planC = weight.ok ? dehydrationPlan('C', weight.kg, infant ? 200 : 400) : null;
  const bsa = weight.ok && height.ok ? bsaMosteller(weight.kg, height.cm) : null;
  const b = planB?.phases[0];

  return (
    <View>
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
        <View style={s.wrap}>
          <Chip label="Menor de 12 meses" selected={infant} onPress={() => setInfant(true)} />
          <Chip label="12 meses o más" selected={!infant} onPress={() => setInfant(false)} />
        </View>
      </Card>

      {maint ? (
        <Card>
          <SectionTitle>Mantenimiento (Holliday-Segar)</SectionTitle>
          <Text testID="maint-day" style={s.big}>
            {fmt(maint.mlPerDay)} mL/día
          </Text>
          <Text testID="maint-hour" style={s.body}>
            {fmt(maint.mlPerHour)} mL/h
          </Text>
          <Text style={s.muted}>
            100 mL/kg los primeros 10 kg, 50 mL/kg los 10 siguientes, 20 mL/kg el resto (máx. 2400
            mL/día).
          </Text>
        </Card>
      ) : null}

      {b && planC ? (
        <Card>
          <SectionTitle>Deshidratación (GPC EDA MINSA 2017)</SectionTitle>
          <Text testID="plan-b" style={s.body}>
            Plan B: {fmt(b.ml)}–{fmt(b.mlMax ?? b.ml)} mL de SRO en 3–4 h
          </Text>
          <Text style={s.body}>Plan C sin shock ({planC.phases[0]?.fluid}):</Text>
          {planC.phases.map((p, i) => (
            <Text key={i} testID={`plan-c-${i + 1}`} style={s.body}>
              • {fmt(p.ml)} mL en {p.minutes} min
            </Text>
          ))}
          <Text style={s.muted}>
            Con shock: bolo de 20 mL/kg de NaCl 0.9 % en 15–20 min, según la guía.
          </Text>
        </Card>
      ) : null}

      <Card>
        <SectionTitle>Superficie corporal (Mosteller)</SectionTitle>
        <NumberField
          label="Talla en centímetros"
          suffix="cm"
          value={heightText}
          onChangeText={setHeightText}
          placeholder="0"
        />
        {bsa !== null ? (
          <Text testID="bsa" style={s.big}>
            {fmt(bsa)} m²
          </Text>
        ) : null}
      </Card>
      <Text style={s.muted}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(colors: Palette) {
  return StyleSheet.create({
    wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    error: { fontFamily: family.regular, color: colors.danger, fontSize: 15 },
    big: {
      fontFamily: family.black,
      fontSize: 34,
      lineHeight: 40,
      color: colors.accent,
      fontVariant: ['tabular-nums'],
    },
    body: { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: colors.text },
    muted: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: colors.muted },
  });
}
