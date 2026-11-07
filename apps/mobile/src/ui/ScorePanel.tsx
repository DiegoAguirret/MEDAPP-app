import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { LayoutAnimation, Pressable, Share, StyleSheet, Text, View } from 'react-native';
import { scoreResult, type ScoreDef } from '../domain/scores';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { hasScoreArt, ScoreArt } from './art/neonatalArt';
import { Reveal } from './motion';
import { Sheet } from './Sheet';
import { family, MIN_TOUCH, radius, space, type, useColors, type Palette } from './theme';

/**
 * Calculadora de puntaje guiada: un criterio a la vez, con fichas numeradas para saltar entre
 * ellos; al elegir una opción pasa solo al siguiente criterio sin responder. El total y su
 * interpretación quedan arriba; la hoja «Cómo se usa» reúne pasos, fórmula, interpretación y
 * fuentes.
 */
export function ScorePanel({ def }: { def: ScoreDef }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [picks, setPicks] = useState<Record<string, number | undefined>>({});
  const [current, setCurrent] = useState(0);
  const [info, setInfo] = useState(false);
  const r = scoreResult(def, picks);
  const item = def.items[current] ?? def.items[0];
  if (item === undefined) return null;
  const pick = (itemId: string, points: number) => {
    const next = { ...picks, [itemId]: points };
    setPicks(next);
    const idx = def.items.findIndex((it, i) => i > current && next[it.id] === undefined);
    const wrap = def.items.findIndex((it) => next[it.id] === undefined);
    const to = idx !== -1 ? idx : wrap;
    if (to !== -1 && to !== current) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setCurrent(to);
    }
  };
  const derivedText = r.derived
    ? `${r.derived.weeks} semanas${
        r.derived.days > 0 ? ` y ${r.derived.days} ${r.derived.days === 1 ? 'día' : 'días'}` : ''
      }`
    : null;
  const report = [
    `${def.title}: ${r.total} de ${r.max} puntos`,
    derivedText,
    r.band ? `Interpretación: ${r.band.label}` : null,
    ...def.items.map((it) => {
      const o = it.options.find((op) => op.points === picks[it.id]);
      return o ? `· ${it.label}: ${o.label} (${o.points})` : null;
    }),
  ]
    .filter((x): x is string => x !== null)
    .join('\n');
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
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cómo se usa"
          onPress={() => setInfo(true)}
          hitSlop={8}
          style={({ pressed }) => [s.infoBtn, pressed && { opacity: 0.7 }]}
        >
          <MaterialCommunityIcons name="information-outline" size={22} color={c.accent} />
        </Pressable>
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
        {derivedText ? <Text style={s.derived}>{derivedText}</Text> : null}
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

      {r.complete ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Compartir resultado"
          onPress={() => void Share.share({ message: report })}
          style={({ pressed }) => [s.share, pressed && { opacity: 0.8 }]}
        >
          <MaterialCommunityIcons name="share-variant-outline" size={18} color={c.onInk} />
          <Text style={s.shareText}>Compartir resultado</Text>
        </Pressable>
      ) : null}

      <View style={s.steps} accessibilityRole="tablist">
        {def.items.map((it, i) => {
          const done = picks[it.id] !== undefined;
          const on = i === current;
          return (
            <Pressable
              key={it.id}
              accessibilityRole="tab"
              accessibilityLabel={`Criterio ${i + 1}: ${it.label}`}
              accessibilityState={{ selected: on }}
              onPress={() => setCurrent(i)}
              style={[s.step, done && s.stepDone, on && s.stepOn]}
            >
              {done && !on ? (
                <MaterialCommunityIcons name="check" size={18} color={c.ok} />
              ) : (
                <Text style={[s.stepText, on && s.stepTextOn]}>{i + 1}</Text>
              )}
            </Pressable>
          );
        })}
      </View>

      <View style={s.card}>
        <View style={s.itemHead}>
          <Text style={s.itemLabel}>{item.label}</Text>
          <Text style={s.itemCount}>
            {current + 1} de {def.items.length}
          </Text>
        </View>
        <View style={s.options}>
          {item.options.map((o, idx) => {
            const on = picks[item.id] === o.points;
            const art = hasScoreArt(def.id, item.id, item.options.length);
            return (
              <Pressable
                key={o.label}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                accessibilityLabel={`${o.label}, ${o.points} ${o.points === 1 ? 'punto' : 'puntos'}`}
                onPress={() => pick(item.id, o.points)}
                style={({ pressed }) => [
                  s.option,
                  art && s.optionArt,
                  on && s.optionOn,
                  pressed && { opacity: 0.8 },
                ]}
              >
                {art ? (
                  <View style={s.art} testID={`arte-${item.id}-${idx}`}>
                    <ScoreArt scoreId={def.id} itemId={item.id} index={idx} />
                  </View>
                ) : null}
                <Text
                  style={[
                    s.points,
                    art && s.pointsOnArt,
                    on && { backgroundColor: c.accent, color: c.onAccent },
                  ]}
                >
                  {o.points} {o.points === 1 ? 'pt' : 'pts'}
                </Text>
                <Text style={[s.optionText, art && s.optionTextArt, on && s.optionTextOn]}>
                  {o.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <Sheet
        visible={info}
        title={def.title}
        subtitle="Cómo se usa"
        icon="information-outline"
        onClose={() => setInfo(false)}
      >
        <View style={s.sheetBody}>
          <Text style={s.sheetHead}>Pasos</Text>
          <Text style={s.howTo}>
            1. Toca la opción que mejor describe al paciente en cada criterio; la app pasa sola al
            siguiente.{'\n'}2. Las fichas numeradas de arriba permiten volver a cualquier criterio.
            {'\n'}3. Al completar todos, el total y su interpretación aparecen arriba y se pueden
            compartir.
          </Text>
          {def.howTo ? <Text style={s.howTo}>{def.howTo}</Text> : null}
          {def.formula ? (
            <>
              <Text style={s.sheetHead}>Fórmula</Text>
              <Text style={s.formula}>EG (días) = {def.formula.constant} + suma de puntos</Text>
              <Text style={s.formula}>EG (semanas) = EG (días) ÷ {def.formula.divisor}</Text>
            </>
          ) : null}
          {def.bands.length > 0 ? (
            <>
              <Text style={s.sheetHead}>Interpretación</Text>
              {def.bands.map((b) => (
                <Text key={b.label} style={s.bandRow}>
                  {def.bandsOn === 'derived' ? '' : `${b.min}–${b.max}: `}
                  {b.label}
                </Text>
              ))}
            </>
          ) : null}
          <Text style={s.sheetHead}>Fuentes</Text>
          {def.sources.map((src) => (
            <Text key={src} style={s.source}>
              {src}
            </Text>
          ))}
        </View>
      </Sheet>

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
    howTo: { fontFamily: family.regular, fontSize: 14, lineHeight: 21, color: c.muted },
    infoBtn: {
      width: MIN_TOUCH,
      height: MIN_TOUCH,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    share: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: MIN_TOUCH,
      borderRadius: radius.pill,
      backgroundColor: c.ink,
    },
    shareText: { fontFamily: family.bold, fontSize: 15, color: c.onInk },
    steps: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    step: {
      width: MIN_TOUCH,
      height: MIN_TOUCH,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepDone: { backgroundColor: c.okBg, borderColor: c.okBg },
    stepOn: { backgroundColor: c.text, borderColor: c.text },
    stepText: { fontFamily: family.bold, fontSize: 16, color: c.muted },
    stepTextOn: { color: c.surface },
    itemCount: { fontFamily: family.bold, fontSize: 12, color: c.muted, letterSpacing: 1 },
    options: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    sheetBody: { gap: 10, paddingBottom: space.lg },
    sheetHead: { fontFamily: family.bold, fontSize: 16, color: c.text, marginTop: 6 },
    formula: {
      fontFamily: family.medium,
      fontSize: 15,
      color: c.text,
      backgroundColor: c.raised,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: radius.sm,
      overflow: 'hidden',
    },
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
      width: '48.5%',
      gap: 8,
      minHeight: 96,
      padding: space.md,
      borderRadius: radius.md,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.ground,
    },
    optionOn: { borderColor: c.accent, backgroundColor: c.accentSoft },
    optionArt: { padding: 0, overflow: 'hidden', gap: 0, backgroundColor: c.surface },
    art: { width: '100%', aspectRatio: 3 / 2, backgroundColor: '#F8DFCF' },
    pointsOnArt: {
      position: 'absolute',
      top: 8,
      right: 8,
      backgroundColor: c.text,
      color: c.surface,
    },
    optionTextArt: { flex: 0, padding: space.md, minHeight: 64 },
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
      alignSelf: 'flex-start',
      fontFamily: family.bold,
      fontSize: 13,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: radius.pill,
      overflow: 'hidden',
      color: c.onTip,
      backgroundColor: c.tip,
      fontVariant: ['tabular-nums'],
    },
    bandRow: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.text },
    gapTop: { marginTop: space.sm },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    disclaimer: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
