import Ionicons from '@expo/vector-icons/Ionicons';
import type { Category, Drug } from '@medapp/content-schema';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { searchDrugs } from '../data/content';
import { CATEGORIES, CATEGORY_ORDER } from '../domain/categories';
import { patientSummary, readPatient } from '../domain/patientInput';
import { usePatient } from '../state/patient';
import { DrugList } from './DrugRow';
import { family, font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

export function Home({
  drugs,
  recalled,
  onOpenDrug,
  onOpenCategory,
  onOpenManual,
  decimalSeparator = '.',
}: {
  decimalSeparator?: '.' | ',';
  drugs: Drug[];
  recalled: Set<string>;
  onOpenDrug: (id: string) => void;
  onOpenCategory: (c: Category) => void;
  onOpenManual: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [query, setQuery] = useState('');
  const patient = usePatient();
  const summary = patientSummary(readPatient(patient), decimalSeparator);
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
        <Text accessibilityRole="header" style={s.brand}>
          Dosis pediátricas
        </Text>
        <Text style={s.lede}>
          {visible.length} fármacos con fuentes de DIGEMID (FNME), MINSA, FDA, AEMPS y OMS.
        </Text>
      </View>

      {summary !== null ? (
        <View style={s.patientBar}>
          <View style={s.flex}>
            <Text style={s.patientLabel}>Paciente actual</Text>
            <Text style={s.patientValue}>{summary}</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Nuevo paciente"
            onPress={patient.clear}
            hitSlop={10}
          >
            <Text style={s.patientClear}>Nuevo paciente</Text>
          </Pressable>
        </View>
      ) : null}

      <View style={s.search}>
        <Ionicons name="search-outline" size={20} color={c.muted} />
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
            <Ionicons name="close-circle" size={20} color={c.muted} />
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
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Calculadora manual"
            onPress={onOpenManual}
            style={({ pressed }) => [s.manual, pressed && { opacity: 0.7 }]}
          >
            <Ionicons name="calculator-outline" size={22} color={c.text} />
            <View style={s.flex}>
              <Text style={s.manualTitle}>Calculadora manual</Text>
              <Text style={s.manualSub}>Cualquier fármaco: mg/kg, intervalo y concentración</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={c.muted} />
          </Pressable>

          <View style={s.block}>
            <Text style={s.section}>Categorías</Text>
            <View style={s.panel}>
              {categories.map((cat, i) => {
                const n = counts.get(cat) ?? 0;
                const label = CATEGORIES[cat].label;
                return (
                  <Pressable
                    key={cat}
                    accessibilityRole="button"
                    accessibilityLabel={`${label}, ${n} fármacos`}
                    onPress={() => onOpenCategory(cat)}
                    style={({ pressed }) => [
                      s.catRow,
                      i > 0 && s.ruled,
                      pressed && { opacity: 0.6 },
                    ]}
                  >
                    <Text style={s.catLabel}>{label}</Text>
                    <Text style={s.catCount}>{n}</Text>
                    <Ionicons name="chevron-forward" size={18} color={c.muted} />
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={s.block}>
            <Text style={s.section}>Todos los fármacos</Text>
            <DrugList drugs={visible} onOpen={onOpenDrug} />
          </View>
        </>
      )}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: { paddingHorizontal: 20, paddingTop: space.xl, paddingBottom: space.xxl, gap: 20 },
    flex: { flex: 1 },
    head: { gap: 6 },
    brand: { fontFamily: family.serif, fontSize: 34, lineHeight: 38, color: c.text },
    lede: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.muted },
    patientBar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      backgroundColor: c.accentSoft,
      borderRadius: radius.lg,
      paddingHorizontal: space.lg,
      paddingVertical: 12,
    },
    patientLabel: { fontFamily: family.medium, fontSize: 13, color: c.muted },
    patientValue: {
      fontFamily: family.semibold,
      fontSize: 16,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    patientClear: { fontFamily: family.semibold, fontSize: 14, color: c.accent },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 52,
      backgroundColor: c.surface,
      borderRadius: radius.pill,
      paddingHorizontal: 18,
    },
    searchInput: {
      flex: 1,
      fontFamily: family.regular,
      fontSize: font.body,
      color: c.text,
      minHeight: MIN_TOUCH,
    },
    empty: { fontFamily: family.regular, color: c.muted, fontSize: 15, lineHeight: 22 },
    manual: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 14,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.lg,
      paddingHorizontal: space.lg,
      paddingVertical: 14,
    },
    manualTitle: { fontFamily: family.semibold, fontSize: font.body, color: c.text },
    manualSub: { fontFamily: family.regular, fontSize: 14, color: c.muted },
    block: { gap: 10 },
    section: { fontFamily: family.semibold, fontSize: 14, color: c.text },
    panel: { backgroundColor: c.surface, borderRadius: radius.lg, paddingHorizontal: space.lg },
    catRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      minHeight: 54,
    },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.control },
    catLabel: { flex: 1, fontFamily: family.medium, fontSize: font.body, color: c.text },
    catCount: {
      fontFamily: family.regular,
      fontSize: 15,
      color: c.muted,
      fontVariant: ['tabular-nums'],
    },
  });
}
