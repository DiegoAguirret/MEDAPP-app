import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  BP_ACTIONS,
  BP_DIAGNOSIS,
  BP_LABELS,
  BP_SOURCE,
  bpUrgent,
  classifyBp,
  HEIGHT_PERCENTILES,
  nearestHeightColumn,
  thresholdsFor,
  type BpCategory,
  type Sex,
} from '../domain/bp';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Card, Chip, Collapsible, NumberField, SectionTitle } from './components';
import { family, radius, space, useColors, type Palette } from './theme';

function num(text: string): number | null {
  const t = text.trim().replace(',', '.');
  return /^\d+(\.\d+)?$/.test(t) ? Number(t) : null;
}

/** Clasificación de la presión arterial de 1 a 17 años (AAP 2017). */
export function BpPanel() {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [sex, setSex] = useState<Sex | null>(null);
  const [ageText, setAgeText] = useState('');
  const [heightText, setHeightText] = useState('');
  const [column, setColumn] = useState<number | null>(null);
  const [sbpText, setSbpText] = useState('');
  const [dbpText, setDbpText] = useState('');

  const age = num(ageText);
  const ageYears = age !== null && Number.isInteger(age) ? age : null;
  const height = num(heightText);
  const inRange = ageYears !== null && ageYears >= 1 && ageYears <= 17;
  const auto =
    sex && inRange && height !== null ? nearestHeightColumn(sex, ageYears, height) : null;
  const col = column ?? auto;
  const t = sex && inRange && col !== null ? thresholdsFor(sex, ageYears, col) : null;
  const sbp = num(sbpText);
  const dbp = num(dbpText);
  const result =
    sex && inRange && col !== null && sbp !== null && dbp !== null
      ? classifyBp({ sex, ageYears, column: col, sbp, dbp })
      : null;
  const urgent = result && sbp !== null && dbp !== null ? bpUrgent(result, sbp, dbp) : false;

  const tone = (k: BpCategory) =>
    ({
      normal: [c.ok, c.okBg],
      elevated: [c.warning, c.warningBg],
      stage1: [c.danger, c.dangerBg],
      stage2: [c.danger, c.dangerBg],
    })[k];

  return (
    <View>
      <Card>
        <SectionTitle>Paciente</SectionTitle>
        <View style={s.row} accessibilityRole="radiogroup" accessibilityLabel="Sexo">
          <Chip label="Niño" selected={sex === 'male'} onPress={() => setSex('male')} />
          <Chip label="Niña" selected={sex === 'female'} onPress={() => setSex('female')} />
        </View>
        <View style={s.cols}>
          <View style={s.flex}>
            <NumberField
              label="Edad en años cumplidos"
              caption="Edad (años)"
              keyboardType="number-pad"
              inputMode="numeric"
              value={ageText}
              onChangeText={(v) => {
                setAgeText(v);
                setColumn(null);
              }}
              placeholder="0"
            />
          </View>
          <View style={s.flex}>
            <NumberField
              label="Talla en centímetros"
              caption="Talla"
              suffix="cm"
              value={heightText}
              onChangeText={(v) => {
                setHeightText(v);
                setColumn(null);
              }}
              placeholder="0"
            />
          </View>
        </View>
        {ageYears !== null && !inRange ? (
          <Text style={s.warn}>Las tablas de la AAP 2017 son para niños de 1 a 17 años.</Text>
        ) : null}
        {sex && inRange ? (
          <>
            <Text style={s.hint}>
              Percentil de talla (columna de la tabla)
              {auto !== null && column === null ? ': la más cercana a la talla medida' : ''}
            </Text>
            <View
              style={s.row}
              accessibilityRole="radiogroup"
              accessibilityLabel="Percentil de talla"
            >
              {HEIGHT_PERCENTILES.map((p, i) => (
                <Chip key={p} label={`p${p}`} selected={col === i} onPress={() => setColumn(i)} />
              ))}
            </View>
            {t ? <Text style={s.hint}>Talla de esa columna: {t.cm} cm.</Text> : null}
          </>
        ) : null}
      </Card>

      <Card>
        <SectionTitle>Presión arterial medida</SectionTitle>
        <View style={s.cols}>
          <View style={s.flex}>
            <NumberField
              label="Presión sistólica en mm Hg"
              caption="Sistólica"
              suffix="mm Hg"
              keyboardType="number-pad"
              inputMode="numeric"
              value={sbpText}
              onChangeText={setSbpText}
              placeholder="0"
            />
          </View>
          <View style={s.flex}>
            <NumberField
              label="Presión diastólica en mm Hg"
              caption="Diastólica"
              suffix="mm Hg"
              keyboardType="number-pad"
              inputMode="numeric"
              value={dbpText}
              onChangeText={setDbpText}
              placeholder="0"
            />
          </View>
        </View>
      </Card>

      {result ? (
        <View style={[s.status, { backgroundColor: tone(result.category)[1] }]}>
          <Text style={[s.statusTitle, { color: tone(result.category)[0] }]}>
            {BP_LABELS[result.category]}
          </Text>
          {urgent ? (
            <View style={s.urgent}>
              <MaterialCommunityIcons name="ambulance" size={20} color={c.surface} />
              <Text style={s.urgentText}>
                Derivar de inmediato a emergencia: estadio 2 con PA más de 30 mm Hg sobre el p95
                {result.adolescent ? ' (o más de 180/120 en adolescentes)' : ''}. También si está
                sintomático.
              </Text>
            </View>
          ) : null}
          {BP_ACTIONS[result.category].map((a) => (
            <Text key={a} style={s.statusText}>
              • {a}
            </Text>
          ))}
          <Text style={s.hint}>{BP_DIAGNOSIS}</Text>
        </View>
      ) : null}

      {t ? (
        <Card>
          <SectionTitle>
            Percentiles para esta edad y talla{result?.adolescent ? ' (referencia)' : ''}
          </SectionTitle>
          {(
            [
              ['p50', t.p50],
              ['p90', t.p90],
              ['p95', t.p95],
              ['p95 + 12', t.p95p12],
            ] as const
          ).map(([k, v]) => (
            <View key={k} style={s.tRow}>
              <Text style={s.tLabel}>{k}</Text>
              <Text style={s.tValue}>
                {v.s}/{v.d} mm Hg
              </Text>
            </View>
          ))}
          {result?.adolescent ? (
            <Text style={s.hint}>
              Desde los 13 años la guía clasifica con cifras fijas: elevada 120–129/&lt;80, estadio
              1 130/80–139/89 y estadio 2 ≥ 140/90.
            </Text>
          ) : null}
        </Card>
      ) : null}

      <Collapsible icon="book-open-variant" title="Fuente">
        <Text style={s.source}>{BP_SOURCE}</Text>
      </Collapsible>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    cols: { flexDirection: 'row', gap: space.sm },
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    warn: { fontFamily: family.medium, fontSize: 14, color: c.warning },
    status: { borderRadius: radius.lg, padding: space.lg, gap: space.sm, marginBottom: space.lg },
    statusTitle: { fontFamily: family.black, fontSize: 22, lineHeight: 28 },
    statusText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.text },
    urgent: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'flex-start',
      padding: space.md,
      borderRadius: radius.md,
      backgroundColor: c.danger,
    },
    urgentText: {
      flex: 1,
      fontFamily: family.bold,
      fontSize: 14,
      lineHeight: 20,
      color: c.surface,
    },
    tRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.border,
    },
    tLabel: { fontFamily: family.medium, fontSize: 15, color: c.text },
    tValue: { fontFamily: family.bold, fontSize: 16, color: c.text, fontVariant: ['tabular-nums'] },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
