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
import { collectionDrugs, type CollectionId } from '../domain/collections';
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

/** Funciones de la app a las que lleva el inicio. */
export type Tool = 'urgencias' | 'calculadoras' | 'favoritos' | 'manual' | CollectionId;

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/**
 * Inicio: primero el paciente (la cinta se marca al escribir el peso), luego buscar, y después
 * «¿Qué necesitas?»: cada función de la app en una tarjeta que dice qué hace y lleva a ella.
 */
export function Home({
  drugs,
  recalled,
  onOpenDrug,
  onOpenCategory,
  onOpenManual,
  onOpenTool = () => {},
  recentIds = [],
  decimalSeparator = '.',
}: {
  decimalSeparator?: '.' | ',';
  drugs: Drug[];
  recalled: Set<string>;
  onOpenDrug: (id: string) => void;
  onOpenCategory: (c: Category | typeof ALL_DRUGS) => void;
  onOpenManual: () => void;
  /** Abre una función de la app (pestaña, colección o calculadora). */
  onOpenTool?: (tool: Tool) => void;
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
  const nInfusions = collectionDrugs('infusiones', drugs, recalled).length;
  const nNeonatal = collectionDrugs('neonatos', drugs, recalled).length;
  const tools: {
    id: Tool;
    title: string;
    text: string;
    icon: IconName;
    hue: string;
    badge?: string;
  }[] = [
    {
      id: 'urgencias',
      title: 'Urgencias',
      text: 'Bolos de reanimación listos para el peso',
      icon: 'alarm-light-outline',
      hue: '#C62828',
    },
    {
      id: 'infusiones',
      title: 'Infusiones',
      text: 'Velocidad de la bomba en mL/h',
      icon: 'water-pump',
      hue: '#4F5FB8',
      badge: String(nInfusions),
    },
    {
      id: 'neonatos',
      title: 'Neonatología',
      text: 'Apgar, Silverman, Capurro y dosis del recién nacido',
      icon: 'baby-face-outline',
      hue: '#B4458C',
      badge: String(nNeonatal),
    },
    {
      id: 'calculadoras',
      title: 'Líquidos y superficie',
      text: 'Holliday-Segar, deshidratación y superficie corporal',
      icon: 'water-outline',
      hue: '#0B8AA8',
    },
    {
      id: 'manual',
      title: 'Cálculo manual',
      text: 'Tu dosis por kg con cualquier concentración',
      icon: 'calculator-variant-outline',
      hue: '#5B6472',
    },
    {
      id: 'favoritos',
      title: 'Favoritos',
      text: 'Las fichas que marcaste con la estrella',
      icon: 'star-outline',
      hue: '#B26A00',
    },
  ];

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
          <Text style={s.lede}>
            {visible.length} fármacos con fuente verificada · FNME, MINSA, OMS, FDA
          </Text>
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
          <View style={s.block}>
            <Text accessibilityRole="header" style={s.section}>
              ¿Qué necesitas?
            </Text>
            <Enter index={0}>
              <PressableScale
                accessibilityRole="button"
                accessibilityLabel={`Todos de la A a la Z, ${visible.length} fármacos`}
                accessibilityHint="Dosis por fármaco: abre la lista completa"
                onPress={() => onOpenCategory(ALL_DRUGS)}
                style={s.hero}
              >
                <View style={s.heroTop}>
                  <View style={s.heroIcon}>
                    <MaterialCommunityIcons name="medication-outline" size={26} color={c.onHero} />
                  </View>
                  <Text style={s.heroCount}>{visible.length}</Text>
                </View>
                <Text style={s.heroTitle}>Dosis por fármaco</Text>
                <Text style={s.heroText}>
                  mg y volumen exacto para el peso, con la frecuencia, el tope y la fuente de cada
                  número.
                </Text>
                <View style={s.heroCta}>
                  <Text style={s.heroCtaText}>Ver todos de la A a la Z</Text>
                  <MaterialCommunityIcons name="arrow-right" size={18} color={c.hero} />
                </View>
              </PressableScale>
            </Enter>
            <View style={s.grid}>
              {tools.map((t, i) => (
                <Enter key={t.id} index={i + 1} style={s.tileOuter}>
                  <PressableScale
                    accessibilityRole="button"
                    accessibilityLabel={`${t.title}: ${t.text}`}
                    onPress={() => onOpenTool(t.id)}
                    style={s.tool}
                  >
                    <View style={s.toolTop}>
                      <View style={[s.toolIcon, { backgroundColor: t.hue }]}>
                        <MaterialCommunityIcons name={t.icon} size={22} color="#FFFFFF" />
                      </View>
                      {t.badge ? <Text style={s.toolBadge}>{t.badge}</Text> : null}
                    </View>
                    <Text style={s.toolTitle}>{t.title}</Text>
                    <Text style={s.toolText} numberOfLines={3}>
                      {t.text}
                    </Text>
                  </PressableScale>
                </Enter>
              ))}
            </View>
          </View>

          {recents.length > 0 ? (
            <View style={s.block}>
              <View style={s.sectionRow}>
                <MaterialCommunityIcons name="history" size={18} color={c.muted} />
                <Text style={s.sectionSmall}>Recientes</Text>
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
              <MaterialCommunityIcons name="shape-outline" size={18} color={c.muted} />
              <Text style={s.sectionSmall}>Por categoría</Text>
            </View>
            <View style={s.catList}>
              {categories.map((cat, i) => {
                const n = counts.get(cat) ?? 0;
                const meta = CATEGORIES[cat];
                return (
                  <PressableScale
                    key={cat}
                    accessibilityRole="button"
                    accessibilityLabel={`${meta.label}, ${n} fármacos`}
                    onPress={() => onOpenCategory(cat)}
                    style={[s.catRow, i > 0 && s.catRule]}
                  >
                    <View style={[s.catIcon, { backgroundColor: meta.hue }]}>
                      <MaterialCommunityIcons name={meta.icon} size={18} color="#FFFFFF" />
                    </View>
                    <Text style={s.catLabel} numberOfLines={1}>
                      {meta.label}
                    </Text>
                    <Text style={s.catCount}>{n}</Text>
                    <MaterialCommunityIcons name="chevron-right" size={20} color={c.muted} />
                  </PressableScale>
                );
              })}
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
      width: 46,
      height: 46,
      borderRadius: 15,
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
    block: { gap: 12, marginTop: space.md },
    sectionRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    section: { fontFamily: family.black, fontSize: 22, lineHeight: 28, color: c.text },
    sectionSmall: { fontFamily: family.bold, fontSize: type.title, color: c.text },
    hero: {
      backgroundColor: c.hero,
      borderRadius: radius.lg,
      padding: 18,
      gap: 8,
      overflow: 'hidden',
    },
    heroTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    heroIcon: {
      width: 46,
      height: 46,
      borderRadius: 14,
      backgroundColor: 'rgba(255,255,255,0.16)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroCount: {
      fontFamily: family.black,
      fontSize: 34,
      color: c.onHero,
      fontVariant: ['tabular-nums'],
    },
    heroTitle: { fontFamily: family.black, fontSize: 22, color: c.onHero, marginTop: 4 },
    heroText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.heroMuted },
    heroCta: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: 6,
      marginTop: 6,
      minHeight: 40,
      paddingHorizontal: 16,
      borderRadius: radius.pill,
      backgroundColor: c.onHero,
    },
    heroCtaText: { fontFamily: family.bold, fontSize: 14, color: c.hero },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
    tileOuter: { width: '48.5%' },
    tool: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: c.border,
      padding: 14,
      gap: 6,
      minHeight: 148,
    },
    toolTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    toolIcon: {
      width: 42,
      height: 42,
      borderRadius: 13,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 4,
    },
    toolBadge: {
      fontFamily: family.bold,
      fontSize: 12,
      color: c.muted,
      backgroundColor: c.raised,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: radius.pill,
      overflow: 'hidden',
      fontVariant: ['tabular-nums'],
    },
    toolTitle: { fontFamily: family.bold, fontSize: 16, lineHeight: 20, color: c.text },
    toolText: { fontFamily: family.regular, fontSize: 13, lineHeight: 18, color: c.muted },
    bleed: { marginHorizontal: -space.lg },
    recentRow: { gap: space.sm, paddingHorizontal: space.lg },
    recent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 48,
      maxWidth: 230,
      paddingLeft: 8,
      paddingRight: 16,
      borderRadius: radius.pill,
      backgroundColor: c.surface,
      borderWidth: 1,
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
    catList: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: c.border,
      overflow: 'hidden',
    },
    catRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      minHeight: 56,
      paddingHorizontal: 14,
    },
    catRule: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.rule },
    catIcon: {
      width: 32,
      height: 32,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    catLabel: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    catCount: {
      fontFamily: family.bold,
      fontSize: 14,
      color: c.muted,
      fontVariant: ['tabular-nums'],
    },
  });
}
