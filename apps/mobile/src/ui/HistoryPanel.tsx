import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { normalize } from '../data/content';
import type { HistoryEntry } from '../state/history';
import { SearchBox } from './SearchBox';
import { family, radius, space, useColors, type Palette } from './theme';

function dayLabel(iso: string, now: Date): string {
  const d = new Date(iso);
  const same = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
  if (same(d, now)) return 'Hoy';
  const y = new Date(now);
  y.setDate(now.getDate() - 1);
  if (same(d, y)) return 'Ayer';
  return d.toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' });
}

function time(iso: string): string {
  const d = new Date(iso);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

/** Lista del historial, agrupada por día, con búsqueda por fármaco, indicación o dosis. */
export function HistoryPanel({
  entries,
  onOpen,
  onRemove,
  onClear,
  now = new Date(),
}: {
  entries: HistoryEntry[];
  onOpen: (e: HistoryEntry) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
  now?: Date;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [query, setQuery] = useState('');
  const [confirm, setConfirm] = useState(false);
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const shown = entries.filter((e) => {
    const h = normalize(`${e.drugName} ${e.indication} ${e.presentation} ${e.dose}`);
    return terms.every((t) => h.includes(t));
  });

  if (entries.length === 0) {
    return (
      <View style={s.empty}>
        <MaterialCommunityIcons name="history" size={32} color={c.muted} />
        <Text style={s.emptyText}>
          Aún no hay cálculos. Cada dosis que calcules en una ficha se guarda aquí para volver a
          abrirla.
        </Text>
      </View>
    );
  }

  let lastDay = '';
  return (
    <View style={s.wrap}>
      <SearchBox
        value={query}
        onChangeText={setQuery}
        placeholder="Buscar en el historial"
        label="Buscar en el historial"
      />
      {shown.length === 0 ? (
        <Text style={s.emptyText}>Nada coincide con «{query.trim()}».</Text>
      ) : null}
      {shown.map((e) => {
        const day = dayLabel(e.at, now);
        const head = day !== lastDay ? day : null;
        lastDay = day;
        return (
          <View key={e.id}>
            {head ? <Text style={s.day}>{head}</Text> : null}
            <View style={s.row}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Abrir ${e.drugName}, ${e.patientSummary}, ${e.dose}`}
                onPress={() => onOpen(e)}
                style={({ pressed }) => [s.main, pressed && { opacity: 0.7 }]}
              >
                <Text style={s.name}>
                  {e.drugName} <Text style={s.time}>· {time(e.at)}</Text>
                </Text>
                <Text style={s.dose}>{e.dose}</Text>
                <Text style={s.meta} numberOfLines={2}>
                  {e.patientSummary} · {e.indication} · {e.presentation}
                </Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Borrar ${e.drugName} del historial`}
                onPress={() => onRemove(e.id)}
                hitSlop={10}
                style={s.del}
              >
                <MaterialCommunityIcons name="close" size={20} color={c.muted} />
              </Pressable>
            </View>
          </View>
        );
      })}
      {confirm ? (
        <View style={s.confirm}>
          <Text style={s.meta}>¿Borrar todo el historial? No se puede deshacer.</Text>
          <View style={s.confirmRow}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cancelar"
              onPress={() => setConfirm(false)}
              style={s.btn}
            >
              <Text style={s.btnText}>Cancelar</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Borrar todo"
              onPress={() => {
                onClear();
                setConfirm(false);
              }}
              style={[s.btn, s.btnDanger]}
            >
              <Text style={[s.btnText, { color: c.danger }]}>Borrar todo</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Borrar historial"
          onPress={() => setConfirm(true)}
          style={s.clear}
        >
          <MaterialCommunityIcons name="delete-outline" size={18} color={c.danger} />
          <Text style={[s.btnText, { color: c.danger }]}>Borrar historial</Text>
        </Pressable>
      )}
      <Text style={s.note}>
        El historial se guarda solo en este teléfono, sin nombres de pacientes.
      </Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    wrap: { gap: space.sm },
    empty: { alignItems: 'center', gap: space.sm, paddingVertical: space.xl },
    emptyText: {
      fontFamily: family.regular,
      fontSize: 15,
      lineHeight: 22,
      color: c.muted,
      textAlign: 'center',
    },
    day: {
      fontFamily: family.bold,
      fontSize: 13,
      color: c.muted,
      marginTop: space.md,
      marginBottom: 4,
      textTransform: 'uppercase',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      marginBottom: space.sm,
    },
    main: { flex: 1, padding: space.md, gap: 2 },
    name: { fontFamily: family.bold, fontSize: 16, color: c.text },
    time: { fontFamily: family.regular, fontSize: 13, color: c.muted },
    dose: { fontFamily: family.bold, fontSize: 15, color: c.accent },
    meta: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    del: { padding: space.md },
    clear: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'center',
      padding: space.md,
    },
    confirm: {
      gap: space.sm,
      padding: space.md,
      borderRadius: radius.lg,
      backgroundColor: c.dangerBg,
    },
    confirmRow: { flexDirection: 'row', gap: space.sm, justifyContent: 'flex-end' },
    btn: { paddingHorizontal: space.md, paddingVertical: 10, borderRadius: radius.pill },
    btnDanger: { backgroundColor: c.surface },
    btnText: { fontFamily: family.bold, fontSize: 15, color: c.text },
    note: {
      fontFamily: family.regular,
      fontSize: 12,
      lineHeight: 17,
      color: c.muted,
      textAlign: 'center',
    },
  });
}
