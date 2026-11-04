import Ionicons from '@expo/vector-icons/Ionicons';
import type { Drug } from '@medapp/content-schema';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../domain/categories';
import { font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

/** Fila de un fármaco en listas (búsqueda, categoría, favoritos). */
export function DrugRow({ drug, onPress }: { drug: Drug; onPress: () => void }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const meta = CATEGORIES[drug.category];
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={s.row}>
      <View style={[s.icon, { backgroundColor: meta.color + '22' }]}>
        <Ionicons name={meta.icon as keyof typeof Ionicons.glyphMap} size={22} color={meta.color} />
      </View>
      <View style={s.body}>
        <Text style={s.title}>{drug.tallMan ?? drug.name}</Text>
        <Text style={s.sub} numberOfLines={1}>
          {drug.diagnoses.join(' · ')}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={c.muted} />
    </Pressable>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      backgroundColor: c.card,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.md,
      padding: space.md,
      marginBottom: space.sm,
      minHeight: MIN_TOUCH + 16,
    },
    icon: {
      width: 44,
      height: 44,
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: { flex: 1 },
    title: { fontSize: font.title, fontWeight: '800', color: c.text },
    sub: { fontSize: font.small, color: c.muted },
  });
}
