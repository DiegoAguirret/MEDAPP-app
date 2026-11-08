import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import {
  VACCINE_NOTES,
  VACCINE_SOURCE,
  VISITS,
  visitsForAge,
  type Visit,
} from '../domain/vaccines';
import { Card, Collapsible, NumberField, SectionTitle } from './components';
import { family, radius, space, useColors, type Palette } from './theme';

function int(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d+$/.test(t) ? Number(t) : null;
}

/** Esquema nacional de vacunación (NTS 246-2026) con lo que toca a la edad y el calendario. */
export function VaccinePanel() {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [yearsText, setYearsText] = useState('');
  const [monthsText, setMonthsText] = useState('');
  const y = int(yearsText);
  const m = int(monthsText);
  const hasAge = yearsText.trim() !== '' || monthsText.trim() !== '';
  const months = hasAge && y !== null && m !== null ? y * 12 + m : null;
  const r = months !== null ? visitsForAge(months) : null;
  const currentLabels = new Set(r?.current.map((v) => v.label));

  const visitCard = (v: Visit, highlight: boolean) => (
    <View key={v.label} style={[s.visit, highlight && s.visitOn]}>
      <View style={s.visitHead}>
        <View style={[s.dot, highlight && { backgroundColor: c.accent }]} />
        <Text style={s.visitAge}>{v.label}</Text>
        {highlight ? <Text style={s.now}>Le corresponde</Text> : null}
      </View>
      {v.vaccines.map((vac) => (
        <View key={vac.name} style={s.vac}>
          <MaterialCommunityIcons name="needle" size={16} color={c.accent} style={s.vacIcon} />
          <View style={s.flex}>
            <Text style={s.vacName}>{vac.name}</Text>
            <Text style={s.vacDose}>{vac.dose}</Text>
            {vac.note ? <Text style={s.vacNote}>{vac.note}</Text> : null}
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View>
      <Card>
        <SectionTitle>Edad del niño o niña</SectionTitle>
        <View style={s.cols}>
          <View style={s.flex}>
            <NumberField
              label="Edad en años"
              caption="Años"
              keyboardType="number-pad"
              inputMode="numeric"
              value={yearsText}
              onChangeText={setYearsText}
              placeholder="0"
            />
          </View>
          <View style={s.flex}>
            <NumberField
              label="Edad en meses"
              caption="Meses"
              keyboardType="number-pad"
              inputMode="numeric"
              value={monthsText}
              onChangeText={setMonthsText}
              placeholder="0"
            />
          </View>
        </View>
        {r ? (
          <View style={s.summary}>
            <Text style={s.summaryText}>
              {r.current.length > 0
                ? `A esta edad le corresponde: ${r.current.map((v) => v.label).join(' y ')}.`
                : 'A esta edad no hay una vacuna programada en el esquema regular.'}
            </Text>
            {r.next ? <Text style={s.summaryNext}>Próxima visita: {r.next.label}.</Text> : null}
          </View>
        ) : (
          <Text style={s.hint}>
            Escribe la edad para resaltar lo que le toca; abajo está el esquema completo.
          </Text>
        )}
      </Card>

      {r && r.current.length > 0 ? r.current.map((v) => visitCard(v, true)) : null}

      <Text style={s.section}>Esquema completo, de 0 a 17 años</Text>
      {VISITS.filter((v) => !currentLabels.has(v.label)).map((v) => visitCard(v, false))}

      <Card>
        <SectionTitle>Notas de la norma</SectionTitle>
        {VACCINE_NOTES.map((n) => (
          <Text key={n} style={s.note}>
            {n}
          </Text>
        ))}
      </Card>
      <Collapsible icon="book-open-variant" title="Fuente">
        <Text style={s.source}>{VACCINE_SOURCE}</Text>
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
    summary: { gap: 4, padding: space.md, borderRadius: radius.md, backgroundColor: c.accentSoft },
    summaryText: { fontFamily: family.bold, fontSize: 15, lineHeight: 21, color: c.text },
    summaryNext: { fontFamily: family.medium, fontSize: 14, color: c.accent },
    section: {
      fontFamily: family.bold,
      fontSize: 13,
      letterSpacing: 0.6,
      color: c.muted,
      marginTop: space.sm,
      marginBottom: space.sm,
      textTransform: 'uppercase',
    },
    visit: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.lg,
      gap: space.sm,
      marginBottom: space.md,
    },
    visitOn: { borderWidth: 2, borderColor: c.accent },
    visitHead: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: c.border },
    visitAge: { flex: 1, fontFamily: family.black, fontSize: 18, color: c.text },
    now: {
      fontFamily: family.bold,
      fontSize: 12,
      color: c.onAccent,
      backgroundColor: c.accent,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: radius.pill,
      overflow: 'hidden',
    },
    vac: { flexDirection: 'row', gap: 8 },
    vacIcon: { marginTop: 2 },
    vacName: { fontFamily: family.medium, fontSize: 15, lineHeight: 21, color: c.text },
    vacDose: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    vacNote: { fontFamily: family.regular, fontSize: 13, lineHeight: 18, color: c.muted },
    note: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.text },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
