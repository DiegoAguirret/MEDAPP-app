import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Category, Drug } from '@medapp/content-schema';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  LayoutAnimation,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { searchDrugs } from '../data/content';
import { CATEGORIES, CATEGORY_ORDER } from '../domain/categories';
import { readPatient } from '../domain/patientInput';
import { usePatient } from '../state/patient';
import { useTipQueue } from '../state/tips';
import { Button } from './components';
import { DrugList } from './DrugRow';
import { Enter, PressableScale, Reveal } from './motion';
import { PatientBand } from './PatientBand';
import { PatientCard } from './PatientCard';
import { Tip } from './Tip';
import {
  family,
  MIN_TOUCH,
  radius,
  space,
  type,
  useColors,
  WEB_NO_OUTLINE,
  type Palette,
} from './theme';

/** Destino del índice alfabético completo (las categorías lo engloban; no se repite abajo). */
export const ALL_DRUGS = 'todos';

/**
 * Inicio: primero el paciente (la cinta se marca al escribir el peso), luego buscar o explorar.
 * Urgencias y Cálculos viven en la barra inferior; aquí no se repiten.
 */
export function Home({
  drugs,
  recalled,
  onOpenDrug,
  onOpenCategory,
  onOpenManual,
  recentIds = [],
  decimalSeparator = '.',
}: {
  decimalSeparator?: '.' | ',';
  drugs: Drug[];
  recalled: Set<string>;
  onOpenDrug: (id: string) => void;
  onOpenCategory: (c: Category | typeof ALL_DRUGS) => void;
  onOpenManual: () => void;
  /** Fichas abiertas hace poco, la última primero. */
  recentIds?: string[];
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [query, setQuery] = useState('');
  const patient = usePatient();
  const { complete } = readPatient(patient);
  // Mientras se escribe, la tarjeta no se reemplaza por la franja (faltarían los meses).
  const [typing, setTyping] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    },
    [],
  );
  const onEditingChange = (editing: boolean) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    if (editing) {
      setTyping(true);
      return;
    }
    // Pasar de un campo a otro dispara blur y luego focus: se espera un instante.
    leaveTimer.current = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setTyping(false);
    }, 150);
  };
  const showBand = complete && !typing;
  const tips = useTipQueue([
    ['paciente', !complete],
    ['franja', complete],
  ]);

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
  const recents = useMemo(
    () =>
      recentIds
        .map((id) => visible.find((d) => d.id === id))
        .filter((d): d is Drug => d !== undefined),
    [recentIds, visible],
  );
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

      {showBand ? (
        <PatientBand patient={patient} decimalSeparator={decimalSeparator} />
      ) : (
        <PatientCard
          patient={patient}
          decimalSeparator={decimalSeparator}
          intro
          onEditingChange={onEditingChange}
        />
      )}
      <Tip id="paciente" queue={tips} />
      <Tip id="franja" queue={tips} />

      <View style={s.search}>
        <MaterialCommunityIcons name="magnify" size={22} color={c.muted} />
        <TextInput
          accessibilityLabel="Buscar fármaco o diagnóstico"
          placeholder="Fármaco o diagnóstico"
          placeholderTextColor={c.muted}
          value={query}
          onChangeText={setQuery}
          style={[s.searchInput, WEB_NO_OUTLINE]}
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
          <View style={s.empty}>
            <MaterialCommunityIcons name="text-search" size={28} color={c.muted} />
            <Text style={s.emptyText}>
              Nada coincide con «{query.trim()}». Prueba con el nombre genérico o el diagnóstico.
            </Text>
            <Button label="Abrir cálculo manual" variant="quiet" onPress={onOpenManual} />
          </View>
        ) : (
          <Reveal trigger={results.length}>
            <Text style={s.count}>
              {results.length === 1 ? '1 resultado' : `${results.length} resultados`}
            </Text>
            <DrugList drugs={results} onOpen={onOpenDrug} />
          </Reveal>
        )
      ) : (
        <>
          {recents.length > 0 ? (
            <View style={s.block}>
              <View style={s.sectionRow}>
                <MaterialCommunityIcons name="history" size={18} color={c.muted} />
                <Text style={s.section}>Recientes</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={s.recentRow}
                style={s.bleed}
              >
                {recents.map((d) => {
                  const meta = CATEGORIES[d.category];
                  return (
                    <PressableScale
                      key={d.id}
                      accessibilityRole="button"
                      accessibilityLabel={`Abrir ${d.name}`}
                      onPress={() => onOpenDrug(d.id)}
                      style={s.recent}
                    >
                      <View style={[s.recentDot, { backgroundColor: meta.hue }]}>
                        <MaterialCommunityIcons name={meta.icon} size={14} color="#FFFFFF" />
                      </View>
                      <Text style={s.recentText} numberOfLines={1}>
                        {d.name}
                      </Text>
                    </PressableScale>
                  );
                })}
              </ScrollView>
            </View>
          ) : null}

          <View style={s.block}>
            <View style={s.sectionRow}>
              <MaterialCommunityIcons name="view-grid-outline" size={18} color={c.muted} />
              <Text style={s.section}>Explorar</Text>
            </View>
            <View style={s.grid}>
              {categories.map((cat, i) => {
                const n = counts.get(cat) ?? 0;
                const meta = CATEGORIES[cat];
                return (
                  <Enter key={cat} index={i} style={s.tileOuter}>
                    <PressableScale
                      accessibilityRole="button"
                      accessibilityLabel={`${meta.label}, ${n} fármacos`}
                      onPress={() => onOpenCategory(cat)}
                      style={[s.tile, { borderColor: meta.hue + '38' }]}
                    >
                      <View
                        style={[StyleSheet.absoluteFill, { backgroundColor: meta.hue + '14' }]}
                      />
                      <View style={s.tileTop}>
                        <View style={[s.tileIcon, { backgroundColor: meta.hue }]}>
                          <MaterialCommunityIcons name={meta.icon} size={22} color="#FFFFFF" />
                        </View>
                        <Text style={s.tileCount}>{n}</Text>
                      </View>
                      <Text style={s.tileLabel} numberOfLines={2}>
                        {meta.label}
                      </Text>
                    </PressableScale>
                  </Enter>
                );
              })}
              <Enter index={categories.length} style={s.tileOuter}>
                <PressableScale
                  accessibilityRole="button"
                  accessibilityLabel={`Todos de la A a la Z, ${visible.length} fármacos`}
                  onPress={() => onOpenCategory(ALL_DRUGS)}
                  style={[s.tile, { borderColor: c.control }]}
                >
                  <View style={s.tileTop}>
                    <View style={[s.tileIcon, { backgroundColor: c.text }]}>
                      <MaterialCommunityIcons
                        name="sort-alphabetical-variant"
                        size={22}
                        color={c.surface}
                      />
                    </View>
                    <Text style={s.tileCount}>{visible.length}</Text>
                  </View>
                  <Text style={s.tileLabel}>Todos A–Z</Text>
                </PressableScale>
              </Enter>
            </View>
          </View>
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
    head: { flexDirection: 'row', alignItems: 'center', gap: space.md, marginBottom: 2 },
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
      minHeight: 52,
      backgroundColor: c.surface,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.control,
      paddingHorizontal: space.lg,
    },
    searchInput: {
      flex: 1,
      fontFamily: family.regular,
      fontSize: 16,
      color: c.text,
      minHeight: MIN_TOUCH,
    },
    empty: { alignItems: 'center', gap: space.sm, paddingVertical: space.lg },
    emptyText: {
      fontFamily: family.regular,
      color: c.muted,
      fontSize: type.body,
      lineHeight: 22,
      textAlign: 'center',
    },
    count: {
      fontFamily: family.medium,
      fontSize: type.label,
      color: c.muted,
      marginBottom: space.sm,
    },
    block: { gap: 10, marginTop: space.sm },
    sectionRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    section: { fontFamily: family.bold, fontSize: type.title, color: c.text },
    bleed: { marginHorizontal: -space.lg },
    recentRow: { gap: space.sm, paddingHorizontal: space.lg },
    recent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 44,
      maxWidth: 220,
      paddingLeft: 6,
      paddingRight: 14,
      borderRadius: radius.pill,
      backgroundColor: c.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
    },
    recentDot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    recentText: { flexShrink: 1, fontFamily: family.bold, fontSize: 14, color: c.text },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    tileOuter: { width: '48.6%' },
    tile: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      padding: 12,
      gap: 10,
      minHeight: 114,
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    tileTop: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
    tileIcon: {
      width: 40,
      height: 40,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileLabel: { fontFamily: family.bold, fontSize: 15, lineHeight: 19, color: c.text },
    tileCount: {
      fontFamily: family.black,
      fontSize: type.title,
      color: c.muted,
      fontVariant: ['tabular-nums'],
    },
  });
}
