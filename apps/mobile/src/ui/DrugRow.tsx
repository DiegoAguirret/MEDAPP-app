import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Drug, Route } from '@medapp/content-schema';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../domain/categories';
import { PressableScale } from './motion';
import { family, MIN_TOUCH, radius, space, type, useColors, type Palette } from './theme';

/** Vías en la lista (como en Pediatrum): se ve de un vistazo si hay oral, IV o IM. */
const ROUTE_CHIP: Record<Route, string> = {
  VO: 'Oral',
  IV: 'IV',
  IM: 'IM',
  IR: 'Rectal',
  SL: 'SL',
  INH: 'Inhalado',
};
const ROUTE_ORDER: Route[] = ['VO', 'IV', 'IM', 'INH', 'IR', 'SL'];

/** Fila de un fármaco: ícono de su categoría, nombre, vías y para qué se usa. */
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
  const routes = ROUTE_ORDER.filter((r) => drug.rules.some((rule) => rule.route === r));
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
        <View style={s.titleRow}>
          <Text style={s.title} numberOfLines={1}>
            {drug.tallMan ?? drug.name}
          </Text>
          {routes.map((r) => (
            <Text key={r} style={s.route} numberOfLines={1}>
              {ROUTE_CHIP[r]}
            </Text>
          ))}
        </View>
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
    titleRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
    title: { flexShrink: 1, fontFamily: family.bold, fontSize: 16, color: c.text, marginRight: 2 },
    route: {
      fontFamily: family.bold,
      fontSize: 11,
      color: c.ok,
      backgroundColor: c.okBg,
      paddingHorizontal: 6,
      paddingVertical: 1,
      borderRadius: radius.pill,
      overflow: 'hidden',
      flexShrink: 0,
    },
    sub: { fontFamily: family.regular, fontSize: type.label, color: c.muted },
    index: { gap: space.lg },
    group: { gap: 6 },
    letter: { fontFamily: family.black, fontSize: type.title, paddingLeft: 4 },
  });
}
