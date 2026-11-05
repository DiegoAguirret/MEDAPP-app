import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Category, Drug } from '@medapp/content-schema';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { searchDrugs } from '../data/content';
import { CATEGORIES, CATEGORY_ORDER } from '../domain/categories';
import { usePatient } from '../state/patient';
import { DrugList } from './DrugRow';
import { PressableScale } from './motion';
import { PatientBand } from './PatientBand';
import { family, MIN_TOUCH, radius, space, type, useColors, type Palette } from './theme';

export function Home({
  drugs,
  recalled,
  onOpenDrug,
  onOpenCategory,
  onOpenManual,
  onOpenEmergency,
  decimalSeparator = '.',
}: {
  decimalSeparator?: '.' | ',';
  drugs: Drug[];
  recalled: Set<string>;
  onOpenDrug: (id: string) => void;
  onOpenCategory: (c: Category) => void;
  onOpenManual: () => void;
  onOpenEmergency?: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [query, setQuery] = useState('');
  const patient = usePatient();
  const visible = useMemo(
    () =>
      drugs.filter((d) => !recalled.has(d.id)).sort((a, b) => a.name.localeCompare(b.name, 'es')),
    [drugs, recalled],
  );
  const results = useMemo(
    () => (query.trim() === '' ? [] : searchDrugs(visible, query, recalled)),
    [visible, query, recalled],
  );
  const counts = useMemo(() => {
    const m = new Map<Category, number>();
    for (const d of visible) m.set(d.category, (m.get(d.category) ?? 0) + 1);
    return m;
  }, [visible]);
  const categories = CATEGORY_ORDER.filter((cat) => (counts.get(cat) ?? 0) > 0);
  const searching = query.trim() !== '';

  return (
    <View style={s.screen}>
      <View style={s.head}>
        <View style={s.mark}>
          <Text style={s.markText}>Rp/</Text>
        </View>
        <View style={s.flex}>
          <Text accessibilityRole="header" style={s.brand}>
            Dosis pediátricas
          </Text>
          <Text style={s.lede}>{visible.length} fármacos · FNME, MINSA, FDA, OMS</Text>
        </View>
      </View>

      <PatientBand patient={patient} decimalSeparator={decimalSeparator} />

      <View style={s.search}>
        <MaterialCommunityIcons name="magnify" size={22} color={c.muted} />
        <TextInput
          accessibilityLabel="Buscar fármaco o diagnóstico"
          placeholder="Fármaco o diagnóstico"
          placeholderTextColor={c.muted}
          value={query}
          onChangeText={setQuery}
          style={s.searchInput}
          autoCorrect={false}
          returnKeyType="search"
        />
        {searching ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Borrar búsqueda"
            onPress={() => setQuery('')}
            hitSlop={12}
          >
            <MaterialCommunityIcons name="close-circle" size={20} color={c.muted} />
          </Pressable>
        ) : null}
      </View>

      {searching ? (
        results.length === 0 ? (
          <Text style={s.empty}>
            Nada coincide con «{query.trim()}». Prueba con el nombre genérico o el diagnóstico, o
            usa la calculadora manual.
          </Text>
        ) : (
          <DrugList drugs={results} onOpen={onOpenDrug} />
        )
      ) : (
        <>
          <View style={s.quick}>
            {onOpenEmergency ? (
              <PressableScale
                accessibilityRole="button"
                accessibilityLabel="Hoja de urgencias"
                onPress={onOpenEmergency}
                outerStyle={s.flex}
                style={[s.quickBtn, s.quickUrgent]}
              >
                <MaterialCommunityIcons name="ambulance" size={20} color="#FFFFFF" />
                <Text style={[s.quickText, s.quickTextOn]}>Urgencias</Text>
              </PressableScale>
            ) : null}
            <PressableScale
              accessibilityRole="button"
              accessibilityLabel="Calculadora manual"
              onPress={onOpenManual}
              outerStyle={s.flex}
              style={s.quickBtn}
            >
              <MaterialCommunityIcons
                name="calculator-variant-outline"
                size={20}
                color={c.accent}
              />
              <Text style={s.quickText}>Cálculo manual</Text>
            </PressableScale>
          </View>

          <Text style={s.section}>Categorías</Text>
          <View style={s.grid}>
            {categories.map((cat) => {
              const n = counts.get(cat) ?? 0;
              const meta = CATEGORIES[cat];
              return (
                <PressableScale
                  key={cat}
                  accessibilityRole="button"
                  accessibilityLabel={`${meta.label}, ${n} fármacos`}
                  onPress={() => onOpenCategory(cat)}
                  outerStyle={s.tileOuter}
                  style={s.tile}
                >
                  <View style={[s.tileIcon, { backgroundColor: meta.hue + '1F' }]}>
                    <MaterialCommunityIcons name={meta.icon} size={22} color={meta.hue} />
                  </View>
                  <Text style={s.tileLabel} numberOfLines={2}>
                    {meta.label}
                  </Text>
                  <Text style={s.tileCount}>{n === 1 ? '1 fármaco' : `${n} fármacos`}</Text>
                </PressableScale>
              );
            })}
          </View>

          <Text style={s.section}>Todos los fármacos</Text>
          <DrugList drugs={visible} onOpen={onOpenDrug} />
        </>
      )}
    </View>
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
    mark: {
      width: 44,
      height: 44,
      borderRadius: radius.md,
      backgroundColor: c.accent,
      alignItems: 'center',
      justifyContent: 'center',
    },
    markText: { fontFamily: family.black, fontSize: 17, color: c.onAccent },
    brand: { fontFamily: family.black, fontSize: type.headline, lineHeight: 30, color: c.text },
    lede: { fontFamily: family.regular, fontSize: type.label, color: c.muted },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 50,
      backgroundColor: c.surface,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.control,
      paddingHorizontal: 14,
    },
    searchInput: {
      flex: 1,
      fontFamily: family.regular,
      fontSize: 16,
      color: c.text,
      minHeight: MIN_TOUCH,
    },
    empty: { fontFamily: family.regular, color: c.muted, fontSize: type.body, lineHeight: 22 },
    quick: { flexDirection: 'row', gap: space.sm },
    quickBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: MIN_TOUCH,
      borderRadius: radius.md,
      backgroundColor: c.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
    },
    quickUrgent: { backgroundColor: '#C62828', borderColor: '#C62828' },
    quickText: { fontFamily: family.bold, fontSize: 15, color: c.accent },
    quickTextOn: { color: '#FFFFFF' },
    section: {
      fontFamily: family.bold,
      fontSize: type.title,
      color: c.text,
      marginTop: space.sm,
    },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    tileOuter: { width: '48.6%' },
    tile: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: 12,
      gap: 6,
      minHeight: 108,
    },
    tileIcon: {
      width: 38,
      height: 38,
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileLabel: { fontFamily: family.bold, fontSize: 15, lineHeight: 19, color: c.text },
    tileCount: {
      fontFamily: family.medium,
      fontSize: type.caption,
      color: c.muted,
      fontVariant: ['tabular-nums'],
    },
  });
}
