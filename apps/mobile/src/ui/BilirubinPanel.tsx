import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { Pressable, Share, StyleSheet, Text, View } from 'react-native';
import {
  assessBilirubin,
  BILI_ACTIONS,
  BILI_SOURCE,
  NEUROTOXICITY_RISK_FACTORS,
  type BiliLevel,
} from '../domain/bilirubin';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Card, Collapsible, NumberField, SectionTitle } from './components';
import { family, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

function num(text: string): number | null {
  const t = text.trim().replace(',', '.');
  if (t === '') return null;
  return /^\d+(\.\d+)?$/.test(t) ? Number(t) : NaN;
}

/** Umbrales de fototerapia, escalamiento y exanguinotransfusión (AAP 2022) para ≥ 35 semanas. */
export function BilirubinPanel({ decimalSeparator }: { decimalSeparator: '.' | ',' }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [gaText, setGaText] = useState('');
  const [daysText, setDaysText] = useState('');
  const [hoursText, setHoursText] = useState('');
  const [tsbText, setTsbText] = useState('');
  const [factors, setFactors] = useState<Record<string, boolean>>({});

  const dec = (n: number) => n.toFixed(1).replace('.', decimalSeparator);
  const ga = num(gaText);
  const days = num(daysText) ?? 0;
  const hours = num(hoursText) ?? 0;
  const tsb = num(tsbText);
  const hasAge = daysText.trim() !== '' || hoursText.trim() !== '';
  const ageHours = Math.floor(days * 24 + hours);
  const risk = Object.values(factors).some(Boolean);
  const valid =
    ga !== null && !Number.isNaN(ga) && hasAge && !Number.isNaN(days) && !Number.isNaN(hours);
  const result =
    valid && tsb !== null && !Number.isNaN(tsb)
      ? assessBilirubin({ gaWeeks: ga, ageHours, tsb, risk })
      : null;
  const outOfRange =
    valid && tsb !== null && result === null
      ? ga < 35
        ? 'La guía AAP 2022 es para recién nacidos de 35 semanas o más.'
        : 'Las tablas van de la primera hora de vida a los 14 días.'
      : null;

  const tone = (l: BiliLevel) =>
    ({
      below: [c.ok, c.okBg],
      photo: [c.warning, c.warningBg],
      escalation: [c.danger, c.dangerBg],
      exchange: [c.danger, c.dangerBg],
    })[l];

  const report = () =>
    result
      ? [
          `Bilirrubina (AAP 2022): EG ${ga} sem, ${ageHours} h de vida, BST ${tsbText} mg/dL${risk ? ', con factor de neurotoxicidad' : ''}`,
          `Fototerapia ${dec(result.photo)} · Escalamiento ${dec(result.escalation)} · Exanguinotransfusión ${dec(result.exchange)} mg/dL`,
          `${BILI_ACTIONS[result.level].title}.`,
        ].join('\n')
      : '';

  const row = (label: string, value: number, reached: boolean, color: string) => (
    <View style={s.row} key={label}>
      <View style={[s.rowBar, { backgroundColor: color }]} />
      <Text style={s.rowLabel}>{label}</Text>
      <Text style={s.rowValue}>{dec(value)} mg/dL</Text>
      <MaterialCommunityIcons
        name={reached ? 'alert-circle' : 'circle-outline'}
        size={20}
        color={reached ? color : c.border}
        accessibilityLabel={reached ? 'alcanzado' : 'no alcanzado'}
      />
    </View>
  );

  return (
    <View>
      <Card>
        <SectionTitle>Recién nacido</SectionTitle>
        <NumberField
          label="Edad gestacional en semanas"
          caption="Edad gestacional"
          suffix="sem"
          keyboardType="number-pad"
          inputMode="numeric"
          value={gaText}
          onChangeText={setGaText}
          placeholder="38"
        />
        <View style={s.cols}>
          <View style={s.flex}>
            <NumberField
              label="Días de vida"
              caption="Días de vida"
              keyboardType="number-pad"
              inputMode="numeric"
              value={daysText}
              onChangeText={setDaysText}
              placeholder="0"
            />
          </View>
          <View style={s.flex}>
            <NumberField
              label="Horas de vida"
              caption="Horas"
              keyboardType="number-pad"
              inputMode="numeric"
              value={hoursText}
              onChangeText={setHoursText}
              placeholder="0"
            />
          </View>
        </View>
        <NumberField
          label="Bilirrubina sérica total en mg/dL"
          caption="Bilirrubina sérica total (BST)"
          suffix="mg/dL"
          value={tsbText}
          onChangeText={setTsbText}
          placeholder="0"
        />
        <Text style={s.hint}>
          Usa la BST sin restar la bilirrubina directa. Si la directa supera el 50 % de la total,
          consulta a un experto.
        </Text>
      </Card>

      <Card>
        <SectionTitle>Factores de riesgo de neurotoxicidad</SectionTitle>
        <Text style={s.hint}>
          La edad gestacional menor de 38 semanas ya está incluida en las tablas. Marca si hay
          alguno de estos:
        </Text>
        {NEUROTOXICITY_RISK_FACTORS.map((f) => {
          const on = !!factors[f];
          return (
            <Pressable
              key={f}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: on }}
              accessibilityLabel={f}
              onPress={() => setFactors((x) => ({ ...x, [f]: !x[f] }))}
              style={s.check}
            >
              <MaterialCommunityIcons
                name={on ? 'checkbox-marked' : 'checkbox-blank-outline'}
                size={24}
                color={on ? c.accent : c.muted}
              />
              <Text style={s.checkText}>{f}</Text>
            </Pressable>
          );
        })}
      </Card>

      {outOfRange ? <Text style={s.warn}>{outOfRange}</Text> : null}

      {result ? (
        <>
          <View style={[s.status, { backgroundColor: tone(result.level)[1] }]}>
            <Text style={[s.statusTitle, { color: tone(result.level)[0] }]}>
              {BILI_ACTIONS[result.level].title}
            </Text>
            {result.level === 'below' ? (
              <Text style={s.statusText}>
                Está {dec(result.belowPhoto)} mg/dL por debajo del umbral de fototerapia.
              </Text>
            ) : null}
            <Text style={s.statusText}>{BILI_ACTIONS[result.level].text}</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Compartir resultado"
              onPress={() => void Share.share({ message: report() })}
              style={({ pressed }) => [s.share, pressed && { opacity: 0.8 }]}
            >
              <MaterialCommunityIcons name="share-variant-outline" size={18} color={c.onInk} />
              <Text style={s.shareText}>Compartir resultado</Text>
            </Pressable>
          </View>
          <Card>
            <SectionTitle>
              Umbrales a las {ageHours} h{risk ? ', con factor de riesgo' : ''}
            </SectionTitle>
            {row('Fototerapia', result.photo, (tsb ?? 0) >= result.photo, c.warning)}
            {row('Escalamiento', result.escalation, (tsb ?? 0) >= result.escalation, c.danger)}
            {row('Exanguinotransfusión', result.exchange, (tsb ?? 0) >= result.exchange, c.danger)}
          </Card>
        </>
      ) : !outOfRange ? (
        <View style={s.empty}>
          <MaterialCommunityIcons name="white-balance-sunny" size={28} color={c.accent} />
          <Text style={s.emptyText}>
            Escribe la edad gestacional, las horas de vida y la BST para ver los umbrales de la
            guía.
          </Text>
        </View>
      ) : null}

      <Collapsible icon="book-open-variant" title="Fuente">
        <Text style={s.source}>{BILI_SOURCE}</Text>
        <Text style={s.source}>
          Los umbrales se basan en opinión de expertos, no en evidencia fuerte, como indica la guía.
        </Text>
      </Collapsible>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    cols: { flexDirection: 'row', gap: space.sm },
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    warn: {
      fontFamily: family.medium,
      fontSize: 15,
      color: c.warning,
      backgroundColor: c.warningBg,
      padding: space.md,
      borderRadius: radius.md,
      overflow: 'hidden',
      marginBottom: space.lg,
    },
    check: { flexDirection: 'row', alignItems: 'center', gap: 10, minHeight: MIN_TOUCH },
    checkText: { flex: 1, fontFamily: family.regular, fontSize: 15, lineHeight: 20, color: c.text },
    status: { borderRadius: radius.lg, padding: space.lg, gap: space.sm, marginBottom: space.lg },
    statusTitle: { fontFamily: family.black, fontSize: 22, lineHeight: 28 },
    statusText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.text },
    share: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: MIN_TOUCH,
      borderRadius: radius.pill,
      backgroundColor: c.ink,
      marginTop: 4,
    },
    shareText: { fontFamily: family.bold, fontSize: 15, color: c.onInk },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      minHeight: MIN_TOUCH,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.border,
    },
    rowBar: { width: 4, height: 24, borderRadius: 2 },
    rowLabel: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    rowValue: {
      fontFamily: family.bold,
      fontSize: 17,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    empty: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      padding: space.lg,
      borderRadius: radius.lg,
      backgroundColor: c.accentSoft,
      marginBottom: space.lg,
    },
    emptyText: { flex: 1, fontFamily: family.medium, fontSize: 15, lineHeight: 21, color: c.text },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
