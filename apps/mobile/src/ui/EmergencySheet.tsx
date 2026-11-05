import Ionicons from '@expo/vector-icons/Ionicons';
import type { Drug, Route } from '@medapp/content-schema';
import { formatClinical } from '@medapp/dose-engine';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { emergencyItems, type EmergencyItem } from '../domain/emergency';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { readPatient } from '../domain/patientInput';
import { scheduleText } from '../domain/schedule';
import { usePatient } from '../state/patient';
import { useTipQueue } from '../state/tips';
import { SectionTitle } from './components';
import { weightZone } from '../domain/zones';
import { PressableScale } from './motion';
import { PatientBand } from './PatientBand';
import { PatientCard } from './PatientCard';
import { Tip } from './Tip';
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
  INH: 'Inhalado',
};
const UNIT_LABEL: Record<string, string> = {
  mL: 'mL',
  gota: 'gotas',
  tableta: 'tableta(s)',
  capsula: 'cápsula(s)',
  supositorio: 'supositorio(s)',
  puff: 'puffs',
  sobre: 'sobre(s)',
};

function rank(id: string): number {
  const i = ORDER.indexOf(id);
  return i === -1 ? ORDER.length : i;
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
  const patient = usePatient();
  const { weightKg, ageDays, complete } = readPatient(patient);

  const items = useMemo(
    () =>
      complete && weightKg !== null && ageDays !== null
        ? emergencyItems(drugs, recalled, weightKg, ageDays).sort(
            (a, b) => rank(a.drug.id) - rank(b.drug.id),
          )
        : [],
    [drugs, recalled, complete, weightKg, ageDays],
  );
  const tips = useTipQueue([
    ['franja', complete],
    ['hoja', items.length > 0],
  ]);

  return (
    <View style={s.screen}>
      <View style={s.head}>
        <View style={s.headIcon}>
          <Ionicons name="medkit" size={22} color="#FFFFFF" />
        </View>
        <View style={s.flex}>
          <Text accessibilityRole="header" style={s.title}>
            Urgencias
          </Text>
          <Text style={s.lede}>Rescate por peso · confirma vía y dilución</Text>
        </View>
      </View>

      <PatientBand patient={patient} decimalSeparator={decimalSeparator} />
      <Tip id="franja" queue={tips} />
      <PatientCard patient={patient} decimalSeparator={decimalSeparator} hideClear={complete} />

      {items.length === 0 ? (
        <View style={[s.empty, { borderColor: c.control }]}>
          <Text style={s.emptyText}>
            {complete
              ? 'Ninguna dosis de urgencia aplica a este peso y edad.'
              : 'Ingresa el peso y la edad para ver las dosis.'}
          </Text>
        </View>
      ) : (
        <View style={s.block}>
          <SectionTitle>
            {items.length} dosis para {fmt(weightKg ?? 0)} kg
            {weightKg !== null && weightZone(weightKg) ? ` · ${weightZone(weightKg)?.name}` : ''}
          </SectionTitle>
          <Tip id="hoja" queue={tips} />
          <View style={s.list}>
            {items.map((item) => (
              <Item
                key={`${item.drug.id}/${item.rule.id}`}
                item={item}
                s={s}
                fmt={fmt}
                onPress={() => onOpenDrug(item.drug.id)}
              />
            ))}
          </View>
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
  fmt,
  onPress,
}: {
  item: EmergencyItem;
  s: Styles;
  fmt: (n: number) => string;
  onPress: () => void;
}) {
  const { drug, rule, presentation, result } = item;
  const unit = UNIT_LABEL[presentation.unit] ?? presentation.unit;
  const amount = `${fmt(result.amount.value)} ${unit}`;
  const limit = rule.maxDoses === undefined ? '' : ` · máximo ${rule.maxDoses} dosis`;
  return (
    <PressableScale
      accessibilityRole="button"
      accessibilityLabel={`${drug.name}, ${rule.indication}, ${amount}`}
      onPress={onPress}
      scaleTo={0.98}
      style={s.item}
    >
      <View style={s.itemBody}>
        <View style={s.itemTop}>
          <Text style={s.drug} numberOfLines={1}>
            {drug.name}
          </Text>
          <Text style={s.route}>{ROUTE_SHORT[rule.route]}</Text>
        </View>
        <Text style={s.indication} numberOfLines={2}>
          {rule.indication}
        </Text>
        <Text style={s.schedule}>
          {scheduleText(rule)}
          {limit}
        </Text>
        <Text style={s.presentation} numberOfLines={1}>
          {presentation.label}
        </Text>
        {result.warnings.includes('rounding_exceeds_5pct') ? (
          <Text style={s.warn}>Cantidad exacta: no es medible con esta presentación.</Text>
        ) : null}
      </View>
      <View style={s.dose}>
        <Text style={s.amount}>{amount}</Text>
        <Text style={s.mg}>{fmt(result.mgPerDose.chosen)} mg</Text>
      </View>
    </PressableScale>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: {
      paddingHorizontal: space.lg,
      paddingTop: space.lg,
      paddingBottom: space.xxl,
      gap: 12,
    },
    flex: { flex: 1 },
    head: { flexDirection: 'row', alignItems: 'center', gap: space.md },
    headIcon: {
      width: 44,
      height: 44,
      borderRadius: radius.md,
      backgroundColor: '#C62828',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { fontFamily: family.black, fontSize: 26, lineHeight: 30, color: c.text },
    lede: { fontFamily: family.regular, fontSize: 13, color: c.muted },
    empty: {
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: radius.lg,
      padding: space.lg,
    },
    emptyText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.muted },
    block: { gap: 10 },
    list: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      overflow: 'hidden',
    },
    item: {
      flexDirection: 'row',
      gap: space.md,
      paddingHorizontal: space.md,
      paddingVertical: 12,
      minHeight: MIN_TOUCH,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.border,
    },
    itemBody: { flex: 1, gap: 2 },
    itemTop: { flexDirection: 'row', alignItems: 'baseline', gap: space.sm },
    drug: { flexShrink: 1, fontFamily: family.bold, fontSize: 16, color: c.text },
    route: {
      fontFamily: family.bold,
      fontSize: 11,
      color: c.accent,
      backgroundColor: c.accentSoft,
      paddingHorizontal: 6,
      paddingVertical: 1,
      borderRadius: 999,
      overflow: 'hidden',
    },
    indication: { fontFamily: family.regular, fontSize: 13, color: c.muted },
    schedule: { fontFamily: family.medium, fontSize: 13, color: c.text },
    presentation: { fontFamily: family.regular, fontSize: 12, color: c.muted },
    dose: { alignItems: 'flex-end', justifyContent: 'center', minWidth: 96 },
    amount: {
      fontFamily: family.black,
      fontSize: 26,
      lineHeight: 30,
      color: c.accent,
      fontVariant: ['tabular-nums'],
    },
    mg: {
      fontFamily: family.medium,
      fontSize: 13,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
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
