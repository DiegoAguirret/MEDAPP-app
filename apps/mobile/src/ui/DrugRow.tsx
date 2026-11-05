import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Drug } from '@medapp/content-schema';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../domain/categories';
import { PressableScale } from './motion';
import { family, MIN_TOUCH, radius, space, type, useColors, type Palette } from './theme';

/** Fila de un fármaco: ícono de su categoría, nombre y para qué se usa. */
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
  const cat = CATEGORIES[drug.category];
  return (
    <PressableScale
      accessibilityRole="button"
      onPress={onPress}
      scaleTo={0.98}
      style={[s.row, !first && s.ruled]}
    >
      <View style={[s.chip, { backgroundColor: cat.hue + '1F' }]}>
        <MaterialCommunityIcons name={cat.icon} size={20} color={cat.hue} />
      </View>
      <View style={s.body}>
        <Text style={s.title} numberOfLines={1}>
          {drug.tallMan ?? drug.name}
        </Text>
        <Text style={s.sub} numberOfLines={1}>
          {drug.diagnoses.join(' · ')}
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={20} color={c.muted} />
    </PressableScale>
  );
}

/** Lista de fármacos en una tarjeta, separados por líneas finas. */
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

/** Primera letra sin tilde, para agrupar el índice (Á → A). */
const initial = (name: string) => name.normalize('NFD').replace(/[̀-ͯ]/g, '').charAt(0).toUpperCase();

/** Índice alfabético: una tarjeta por letra, con la letra como encabezado. */
export function DrugIndex({ drugs, onOpen }: { drugs: Drug[]; onOpen: (id: string) => void }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const groups = useMemo(() => {
    const m = new Map<string, Drug[]>();
    for (const d of [...drugs].sort((a, b) => a.name.localeCompare(b.name, 'es'))) {
      const k = initial(d.name);
      m.set(k, [...(m.get(k) ?? []), d]);
    }
    return [...m.entries()];
  }, [drugs]);
  return (
    <View style={s.index}>
      {groups.map(([letter, list]) => (
        <View key={letter} style={s.group}>
          <Text accessibilityRole="header" style={[s.letter, { color: c.accent }]}>
            {letter}
          </Text>
          <DrugList drugs={list} onOpen={onOpen} />
        </View>
      ))}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    panel: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      paddingHorizontal: space.md,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      minHeight: MIN_TOUCH + 8,
      paddingVertical: 9,
    },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.border },
    chip: {
      width: 36,
      height: 36,
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: { flex: 1, gap: 1 },
    title: { fontFamily: family.bold, fontSize: 16, color: c.text },
    sub: { fontFamily: family.regular, fontSize: type.label, color: c.muted },
    index: { gap: space.lg },
    group: { gap: 6 },
    letter: { fontFamily: family.black, fontSize: type.title, paddingLeft: 4 },
  });
}
