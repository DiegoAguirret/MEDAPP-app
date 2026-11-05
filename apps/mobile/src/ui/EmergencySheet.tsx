import Ionicons from '@expo/vector-icons/Ionicons';
import type { Drug, Route } from '@medapp/content-schema';
import { formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { emergencyItems, type EmergencyItem } from '../domain/emergency';
import { CLINICAL_DISCLAIMER, REASON_TEXT } from '../domain/messages';
import { ageToDays, parseWeight } from '../domain/patientInput';
import { scheduleText } from '../domain/schedule';
import { Card, NumberField, SectionTitle } from './components';
import { family, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

/** Orden de la hoja: primero lo que salva la vida en minutos. */
const ORDER = [
  'adrenalina',
  'salbutamol',
  'diazepam',
  'fenobarbital',
  'fenitoina',
  'glucosa',
  'naloxona',
  'atropina',
];
const ROUTE_SHORT: Record<Route, string> = {
  VO: 'VO',
  IV: 'IV',
  IM: 'IM',
  IR: 'Rectal',
  SL: 'SL',
  INH: 'Nebulizado',
};
const UNIT_LABEL: Record<string, string> = {
  mL: 'mL',
  gota: 'gotas',
  tableta: 'tableta(s)',
  capsula: 'cápsula(s)',
  supositorio: 'supositorio(s)',
};

function rank(id: string): number {
  const i = ORDER.indexOf(id);
  return i === -1 ? ORDER.length : i;
}

function parseCount(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d{1,3}$/.test(t) ? Number(t) : null;
}

export function EmergencySheet({
  drugs,
  recalled,
  decimalSeparator,
  onOpenDrug,
}: {
  drugs: Drug[];
  recalled: Set<string>;
  decimalSeparator: '.' | ',';
  onOpenDrug: (id: string) => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const [weightText, setWeightText] = useState('');
  const [yearsText, setYearsText] = useState('');
  const [monthsText, setMonthsText] = useState('');

  const weight = parseWeight(weightText);
  const years = parseCount(yearsText);
  const months = parseCount(monthsText);
  const hasAge = yearsText.trim() !== '' || monthsText.trim() !== '';
  const ageDays =
    hasAge && years !== null && months !== null && months < 12 ? ageToDays(years, months) : null;

  const items = useMemo(
    () =>
      weight.ok && ageDays !== null
        ? emergencyItems(drugs, recalled, weight.kg, ageDays).sort(
            (a, b) => rank(a.drug.id) - rank(b.drug.id),
          )
        : [],
    [drugs, recalled, weight, ageDays],
  );

  return (
    <View style={s.screen}>
      <View style={s.head}>
        <Text accessibilityRole="header" style={s.title}>
          Urgencias
        </Text>
        <Text style={s.lede}>
          Dosis de rescate calculadas con el peso. Antes de administrar, confirma la vía y la
          dilución.
        </Text>
      </View>

      <Card>
        <NumberField
          label="Peso en kilogramos"
          suffix="kg"
          value={weightText}
          onChangeText={setWeightText}
          placeholder="0"
        />
        <View style={s.row}>
          <NumberField
            label="Edad, años"
            suffix="años"
            value={yearsText}
            onChangeText={setYearsText}
            keyboardType="number-pad"
            placeholder="0"
          />
          <NumberField
            label="Edad, meses"
            suffix="meses"
            value={monthsText}
            onChangeText={setMonthsText}
            keyboardType="number-pad"
            placeholder="0"
          />
        </View>
        {weightText.trim() !== '' && !weight.ok ? (
          <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
        ) : null}
        {hasAge && ageDays === null ? (
          <Text style={s.error}>Revise la edad (meses de 0 a 11).</Text>
        ) : null}
      </Card>

      {items.length === 0 ? (
        <View style={[s.empty, { borderColor: c.control }]}>
          <Text style={s.emptyText}>
            {weight.ok && ageDays !== null
              ? 'Ninguna dosis de urgencia aplica a este peso y edad.'
              : 'Ingresa el peso y la edad para ver las dosis.'}
          </Text>
        </View>
      ) : (
        <View style={s.block}>
          <SectionTitle>
            {items.length} dosis para {fmt(weight.ok ? weight.kg : 0)} kg
          </SectionTitle>
          {items.map((item) => (
            <Item
              key={`${item.drug.id}/${item.rule.id}`}
              item={item}
              s={s}
              c={c}
              fmt={fmt}
              onPress={() => onOpenDrug(item.drug.id)}
            />
          ))}
        </View>
      )}
      <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

type Styles = ReturnType<typeof makeStyles>;

function Item({
  item,
  s,
  c,
  fmt,
  onPress,
}: {
  item: EmergencyItem;
  s: Styles;
  c: Palette;
  fmt: (n: number) => string;
  onPress: () => void;
}) {
  const { drug, rule, presentation, result } = item;
  const unit = UNIT_LABEL[presentation.unit] ?? presentation.unit;
  const amount = `${fmt(result.amount.value)} ${unit}`;
  const limit = rule.maxDoses === undefined ? '' : ` · máximo ${rule.maxDoses} dosis`;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${drug.name}, ${rule.indication}, ${amount}`}
      onPress={onPress}
      style={({ pressed }) => [s.item, pressed && { opacity: 0.7 }]}
    >
      <View style={s.itemTop}>
        <Text style={s.drug}>{drug.name}</Text>
        <Text style={s.route}>{ROUTE_SHORT[rule.route]}</Text>
      </View>
      <Text style={s.indication}>{rule.indication}</Text>
      <View style={s.doseRow}>
        <Text style={s.amount}>{amount}</Text>
        <Text style={s.mg}>{fmt(result.mgPerDose.chosen)} mg</Text>
        <Ionicons name="chevron-forward" size={18} color={c.muted} style={s.chev} />
      </View>
      <Text style={s.schedule}>
        {scheduleText(rule)}
        {limit}
      </Text>
      <Text style={s.presentation}>{presentation.label}</Text>
      {result.warnings.includes('rounding_exceeds_5pct') ? (
        <Text style={s.warn}>Cantidad exacta: no es medible con esta presentación.</Text>
      ) : null}
    </Pressable>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: { paddingHorizontal: 20, paddingTop: space.xl, paddingBottom: space.xxl, gap: 16 },
    head: { gap: 6 },
    title: { fontFamily: family.serif, fontSize: 34, lineHeight: 38, color: c.text },
    lede: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.muted },
    row: { flexDirection: 'row', gap: space.md },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
    empty: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: radius.lg,
      padding: 20,
    },
    emptyText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.muted },
    block: { gap: 10 },
    item: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      padding: space.lg,
      gap: 4,
      minHeight: MIN_TOUCH,
    },
    itemTop: { flexDirection: 'row', alignItems: 'baseline', gap: space.sm },
    drug: { flex: 1, fontFamily: family.semibold, fontSize: 16, color: c.text },
    route: { fontFamily: family.medium, fontSize: 13, color: c.muted },
    indication: { fontFamily: family.regular, fontSize: 14, color: c.muted },
    doseRow: { flexDirection: 'row', alignItems: 'baseline', gap: 10, marginTop: 4 },
    amount: {
      fontFamily: family.serif,
      fontSize: 30,
      lineHeight: 36,
      color: c.accent,
      fontVariant: ['tabular-nums'],
    },
    mg: {
      flex: 1,
      fontFamily: family.medium,
      fontSize: 15,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    chev: { alignSelf: 'center' },
    schedule: { fontFamily: family.medium, fontSize: 14, color: c.text },
    presentation: { fontFamily: family.regular, fontSize: 13, color: c.muted },
    warn: { fontFamily: family.regular, fontSize: 13, color: c.warning },
    disclaimer: {
      fontFamily: family.regular,
      fontSize: 13,
      lineHeight: 19,
      color: c.muted,
      marginVertical: space.md,
    },
  });
}
