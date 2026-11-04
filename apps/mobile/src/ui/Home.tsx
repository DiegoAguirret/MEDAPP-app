import Ionicons from '@expo/vector-icons/Ionicons';
import type { Category, Drug } from '@medapp/content-schema';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { searchDrugs } from '../data/content';
import { CATEGORIES, CATEGORY_ORDER } from '../domain/categories';
import { DrugRow } from './DrugRow';
import { font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

const SOURCE_BADGES = ['FNME · DIGEMID', 'MINSA', 'FDA', 'AEMPS', 'OMS'];

export function Home({
  drugs,
  recalled,
  onOpenDrug,
  onOpenCategory,
  onOpenManual,
}: {
  drugs: Drug[];
  recalled: Set<string>;
  onOpenDrug: (id: string) => void;
  onOpenCategory: (c: Category) => void;
  onOpenManual: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [query, setQuery] = useState('');
  const visible = useMemo(() => drugs.filter((d) => !recalled.has(d.id)), [drugs, recalled]);
  const results = useMemo(
    () => (query.trim() === '' ? [] : searchDrugs(visible, query, recalled)),
    [visible, query, recalled],
  );
  const counts = useMemo(() => {
    const m = new Map<Category, number>();
    for (const d of visible) m.set(d.category, (m.get(d.category) ?? 0) + 1);
    return m;
  }, [visible]);

  return (
    <View style={s.screen}>
      <Text style={s.brand}>Dosis Pediátricas</Text>
      <View style={s.badges}>
        {SOURCE_BADGES.map((b) => (
          <Text key={b} style={s.badge}>
            {b}
          </Text>
        ))}
      </View>

      <View style={s.searchRow}>
        <View style={s.search}>
          <Ionicons name="search" size={20} color={c.muted} />
          <TextInput
            accessibilityLabel="Buscar fármaco o diagnóstico"
            placeholder="Buscar fármaco o diagnóstico"
            placeholderTextColor={c.muted}
            value={query}
            onChangeText={setQuery}
            style={s.searchInput}
            autoCorrect={false}
          />
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Calculadora manual"
          onPress={onOpenManual}
          style={s.manual}
        >
          <Ionicons name="calculator" size={22} color={c.primaryText} />
          <Text style={s.manualText}>MANUAL</Text>
        </Pressable>
      </View>

      {query.trim() !== '' ? (
        <View>
          {results.length === 0 ? <Text style={s.muted}>Sin resultados.</Text> : null}
          {results.map((d) => (
            <DrugRow key={d.id} drug={d} onPress={() => onOpenDrug(d.id)} />
          ))}
        </View>
      ) : (
        <>
          <Text style={s.section}>CATEGORÍAS</Text>
          <View style={s.grid}>
            {CATEGORY_ORDER.filter((cat) => (counts.get(cat) ?? 0) > 0).map((cat) => {
              const meta = CATEGORIES[cat];
              const n = counts.get(cat) ?? 0;
              return (
                <Pressable
                  key={cat}
                  accessibilityRole="button"
                  accessibilityLabel={`${meta.label}, ${n} fármacos`}
                  onPress={() => onOpenCategory(cat)}
                  style={[s.tile, { borderLeftColor: meta.color }]}
                >
                  <View style={[s.tileIcon, { backgroundColor: meta.color + '22' }]}>
                    <Ionicons
                      name={meta.icon as keyof typeof Ionicons.glyphMap}
                      size={24}
                      color={meta.color}
                    />
                  </View>
                  <Text style={s.tileTitle} numberOfLines={2}>
                    {meta.label}
                  </Text>
                  <Text style={[s.tileCount, { color: meta.color }]}>
                    {n} {n === 1 ? 'fármaco' : 'fármacos'}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </>
      )}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: { padding: space.lg, gap: space.md },
    brand: { fontSize: 30, fontWeight: '900', color: c.text, letterSpacing: -0.5 },
    badges: { flexDirection: 'row', flexWrap: 'wrap', gap: space.xs },
    badge: {
      fontSize: 11,
      fontWeight: '800',
      color: c.muted,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.sm,
      paddingHorizontal: space.sm,
      paddingVertical: 3,
      letterSpacing: 0.5,
    },
    searchRow: { flexDirection: 'row', gap: space.sm },
    search: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 56,
      backgroundColor: c.card,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.md,
      paddingHorizontal: space.md,
    },
    searchInput: { flex: 1, fontSize: font.body, color: c.text, minHeight: MIN_TOUCH },
    manual: {
      width: 84,
      backgroundColor: c.primary,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
    },
    manualText: { color: c.primaryText, fontSize: 11, fontWeight: '900', letterSpacing: 0.5 },
    section: { fontSize: font.small, fontWeight: '800', color: c.muted, letterSpacing: 0.8 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.md },
    tile: {
      width: '47%',
      minHeight: 120,
      backgroundColor: c.card,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      borderLeftWidth: 5,
      padding: space.md,
      gap: space.sm,
    },
    tileIcon: {
      width: 44,
      height: 44,
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileTitle: { fontSize: font.body, fontWeight: '800', color: c.text },
    tileCount: { fontSize: font.small, fontWeight: '800' },
    muted: { color: c.muted, fontSize: font.body },
  });
}
