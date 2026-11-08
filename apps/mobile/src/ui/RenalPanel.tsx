import { formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { kdigoCategory, SCHWARTZ_SOURCE, schwartzEgfr } from '../domain/renal';
import { Card, NumberField, SectionTitle } from './components';
import { family, radius, space, useColors, type Palette } from './theme';

function num(text: string): number | null {
  const t = text.trim().replace(',', '.');
  return /^\d+(\.\d+)?$/.test(t) ? Number(t) : null;
}

/** TFG estimada con la fórmula de Schwartz a pie de cama y su categoría KDIGO. */
export function RenalPanel({ decimalSeparator }: { decimalSeparator: '.' | ',' }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [heightText, setHeightText] = useState('');
  const [creatText, setCreatText] = useState('');
  const height = num(heightText);
  const creat = num(creatText);
  const gfr = height !== null && creat !== null ? schwartzEgfr(height, creat) : null;
  const cat = gfr !== null ? kdigoCategory(gfr) : null;
  const tone = (t: 'ok' | 'warning' | 'danger') =>
    ({ ok: [c.ok, c.okBg], warning: [c.warning, c.warningBg], danger: [c.danger, c.dangerBg] })[t];

  return (
    <View>
      <Card>
        <SectionTitle>Paciente</SectionTitle>
        <View style={s.cols}>
          <View style={s.flex}>
            <NumberField
              label="Talla en centímetros"
              caption="Talla"
              suffix="cm"
              value={heightText}
              onChangeText={setHeightText}
              placeholder="0"
            />
          </View>
          <View style={s.flex}>
            <NumberField
              label="Creatinina sérica en mg/dL"
              caption="Creatinina"
              suffix="mg/dL"
              value={creatText}
              onChangeText={setCreatText}
              placeholder="0"
            />
          </View>
        </View>
        <Text style={s.hint}>
          Si el laboratorio da la creatinina en µmol/L, divide entre 88.4 para pasarla a mg/dL.
        </Text>
      </Card>

      {gfr !== null && cat ? (
        <View style={[s.status, { backgroundColor: tone(cat.tone)[1] }]}>
          <Text testID="egfr" style={[s.value, { color: tone(cat.tone)[0] }]}>
            {formatClinical(Math.round(gfr * 10) / 10, decimalSeparator)} mL/min/1.73 m²
          </Text>
          <Text style={s.cat}>
            {cat.id} · {cat.label} ({cat.range})
          </Text>
          <Text style={s.hint}>
            0.413 × {heightText} cm ÷ {creatText} mg/dL. Usa la TFG para el apartado «Ajuste renal»
            de cada ficha.
          </Text>
        </View>
      ) : null}

      <Card>
        <SectionTitle>Cómo usarla</SectionTitle>
        <Text style={s.body}>
          • Se derivó en niños de 1 a 16 años con enfermedad renal crónica; no se validó en menores
          de 1 año ni en el recién nacido.
        </Text>
        <Text style={s.body}>
          • Necesita una creatinina medida por método enzimático (el del estudio original).
        </Text>
        <Text style={s.body}>
          • Las categorías G1 a G5 de KDIGO describen la TFG; para hablar de enfermedad renal
          crónica hace falta daño renal o TFG baja por más de 3 meses.
        </Text>
      </Card>
      <Card>
        <SectionTitle>Fuente</SectionTitle>
        <Text style={s.hint}>{SCHWARTZ_SOURCE}</Text>
      </Card>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    cols: { flexDirection: 'row', gap: space.sm },
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    body: { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: c.text },
    status: { borderRadius: radius.lg, padding: space.lg, gap: space.sm, marginBottom: space.lg },
    value: {
      fontFamily: family.black,
      fontSize: 26,
      lineHeight: 32,
      fontVariant: ['tabular-nums'],
    },
    cat: { fontFamily: family.bold, fontSize: 16, color: c.text },
  });
}
