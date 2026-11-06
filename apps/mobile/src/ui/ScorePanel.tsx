import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import { scoreResult, type ScoreDef } from '../domain/scores';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Reveal } from './motion';
import { family, MIN_TOUCH, radius, space, type, useColors, type Palette } from './theme';

/** Calculadora de puntaje: un criterio por tarjeta, el total y su interpretación arriba. */
export function ScorePanel({ def }: { def: ScoreDef }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [picks, setPicks] = useState<Record<string, number | undefined>>({});
  const r = scoreResult(def, picks);
  const tone = r.band
    ? { ok: [c.ok, c.okBg], warning: [c.warning, c.warningBg], danger: [c.danger, c.dangerBg] }[
        r.band.tone
      ]
    : [c.muted, c.raised];

  return (
    <View style={s.screen}>
      <View style={s.head}>
        <View style={s.headIcon}>
          <MaterialCommunityIcons name={def.icon} size={24} color={c.accent} />
        </View>
        <View style={s.flex}>
          <Text accessibilityRole="header" style={s.title}>
            {def.title}
          </Text>
          <Text style={s.subtitle}>{def.subtitle}</Text>
        </View>
      </View>

      <View style={s.result} accessibilityLiveRegion="polite">
        <View style={s.resultTop}>
          <Reveal trigger={r.total}>
            <Text style={s.total}>
              <Text testID="score-total">{r.total}</Text>
              <Text style={s.totalMax}> / {r.max}</Text>
            </Text>
          </Reveal>
          {r.band ? (
            <Text style={[s.band, { color: tone[0], backgroundColor: tone[1] }]}>
              {r.band.label}
            </Text>
          ) : null}
        </View>
        {r.derived ? (
          <Text style={s.derived}>
            {r.derived.weeks} semanas
            {r.derived.days > 0
              ? ` y ${r.derived.days} ${r.derived.days === 1 ? 'día' : 'días'}`
              : ''}
          </Text>
        ) : null}
        <View style={s.progress}>
          <View
            style={[
              s.progressFill,
              { width: `${(r.answered / def.items.length) * 100}%`, backgroundColor: c.accent },
            ]}
          />
        </View>
        <View style={s.resultFoot}>
          <Text style={s.progressText}>
            {r.answered} de {def.items.length} criterios
          </Text>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Reiniciar"
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setPicks({});
            }}
            hitSlop={8}
            style={s.reset}
          >
            <MaterialCommunityIcons name="restart" size={16} color={c.accent} />
            <Text style={s.resetText}>Reiniciar</Text>
          </Pressable>
        </View>
      </View>

      {def.howTo ? <Text style={s.howTo}>{def.howTo}</Text> : null}

      {def.items.map((item) => (
        <View key={item.id} style={s.card}>
          <View style={s.itemHead}>
            <Text style={s.itemLabel}>{item.label}</Text>
            {picks[item.id] !== undefined ? (
              <MaterialCommunityIcons name="check-circle" size={18} color={c.ok} />
            ) : null}
          </View>
          {item.options.map((o) => {
            const on = picks[item.id] === o.points;
            return (
              <Pressable
                key={o.label}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                accessibilityLabel={`${o.label}, ${o.points} ${o.points === 1 ? 'punto' : 'puntos'}`}
                onPress={() => setPicks((p) => ({ ...p, [item.id]: o.points }))}
                style={({ pressed }) => [s.option, on && s.optionOn, pressed && { opacity: 0.75 }]}
              >
                <View style={[s.radio, on && { borderColor: c.accent }]}>
                  {on ? <View style={[s.radioDot, { backgroundColor: c.accent }]} /> : null}
                </View>
                <Text style={[s.optionText, on && s.optionTextOn]}>{o.label}</Text>
                <Text style={[s.points, on && { backgroundColor: c.accent, color: c.onAccent }]}>
                  {o.points}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ))}

      <View style={s.card}>
        {def.bands.length > 0 ? (
          <>
            <Text style={s.itemLabel}>Interpretación</Text>
            {def.bands.map((b) => (
              <Text key={b.label} style={s.bandRow}>
                {def.bandsOn === 'derived' ? '' : `${b.min}–${b.max}: `}
                {b.label}
              </Text>
            ))}
          </>
        ) : null}
        <Text style={[s.itemLabel, s.gapTop]}>Fuentes</Text>
        {def.sources.map((src) => (
          <Text key={src} style={s.source}>
            {src}
          </Text>
        ))}
      </View>
      <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: { padding: space.lg, gap: 12, paddingBottom: space.xxl },
    flex: { flex: 1 },
    head: { flexDirection: 'row', alignItems: 'center', gap: space.md },
    headIcon: {
      width: 46,
      height: 46,
      borderRadius: radius.md,
      backgroundColor: c.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { fontFamily: family.black, fontSize: type.headline, lineHeight: 30, color: c.text },
    subtitle: { fontFamily: family.regular, fontSize: type.label, color: c.muted },
    result: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.lg,
      gap: space.sm,
    },
    resultTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    total: {
      fontFamily: family.black,
      fontSize: type.figure,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    totalMax: { fontFamily: family.bold, fontSize: 20, color: c.muted },
    band: {
      fontFamily: family.bold,
      fontSize: 14,
      paddingHorizontal: 12,
      paddingVertical: 5,
      borderRadius: radius.pill,
      overflow: 'hidden',
      maxWidth: '60%',
      textAlign: 'center',
    },
    derived: { fontFamily: family.bold, fontSize: type.title, color: c.accent },
    progress: { height: 6, borderRadius: 3, backgroundColor: c.rule, overflow: 'hidden' },
    progressFill: { height: 6, borderRadius: 3 },
    resultFoot: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    progressText: { fontFamily: family.medium, fontSize: type.label, color: c.muted },
    reset: { flexDirection: 'row', alignItems: 'center', gap: 4, minHeight: 36 },
    resetText: { fontFamily: family.bold, fontSize: type.label, color: c.accent },
    howTo: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    card: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.md,
      gap: 6,
    },
    itemHead: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
      paddingBottom: 2,
    },
    itemLabel: { fontFamily: family.bold, fontSize: 16, color: c.text },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      minHeight: MIN_TOUCH,
      paddingHorizontal: space.md,
      paddingVertical: 10,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.ground,
    },
    optionOn: { borderColor: c.accent, backgroundColor: c.accentSoft },
    radio: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: c.control,
      alignItems: 'center',
      justifyContent: 'center',
    },
    radioDot: { width: 10, height: 10, borderRadius: 5 },
    optionText: {
      flex: 1,
      fontFamily: family.regular,
      fontSize: 15,
      lineHeight: 20,
      color: c.text,
    },
    optionTextOn: { fontFamily: family.medium },
    points: {
      fontFamily: family.bold,
      fontSize: 13,
      minWidth: 28,
      height: 28,
      lineHeight: 28,
      textAlign: 'center',
      borderRadius: 14,
      overflow: 'hidden',
      color: c.muted,
      backgroundColor: c.rule,
      fontVariant: ['tabular-nums'],
    },
    bandRow: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.text },
    gapTop: { marginTop: space.sm },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    disclaimer: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
