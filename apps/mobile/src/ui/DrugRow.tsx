import Ionicons from '@expo/vector-icons/Ionicons';
import type { Drug } from '@medapp/content-schema';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { family, font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

/** Fila de un fármaco: nombre en la voz de receta y, debajo, para qué se usa. */
export function DrugRow({
  drug,
  onPress,
  first = false,
}: {
  drug: Drug;
  onPress: () => void;
  first?: boolean;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [s.row, !first && s.ruled, pressed && { opacity: 0.6 }]}
    >
      <View style={s.body}>
        <Text style={s.title}>{drug.tallMan ?? drug.name}</Text>
        <Text style={s.sub} numberOfLines={1}>
          {drug.diagnoses.join(' · ')}
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={c.muted} />
    </Pressable>
  );
}

/** Lista de fármacos en un panel, separados por líneas finas. */
export function DrugList({ drugs, onOpen }: { drugs: Drug[]; onOpen: (id: string) => void }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  return (
    <View style={s.panel}>
      {drugs.map((d, i) => (
        <DrugRow key={d.id} drug={d} first={i === 0} onPress={() => onOpen(d.id)} />
      ))}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    panel: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      paddingHorizontal: space.lg,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      minHeight: MIN_TOUCH + 16,
      paddingVertical: space.md,
    },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.control },
    body: { flex: 1, gap: 2 },
    title: { fontFamily: family.semibold, fontSize: font.body, color: c.text, letterSpacing: 0.2 },
    sub: { fontFamily: family.regular, fontSize: 14, color: c.muted },
  });
}
