import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTips, type TipQueue } from '../state/tips';
import { useReduceMotion } from './motion';
import { family, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';
import { TIPS, type TipId } from './tipsCopy';

/** Amarillo de la cinta: el foco de la guía, ligado al mundo visual de la app. */
const BULB = '#F6C343';

/**
 * Globo de guía en línea, junto al elemento que explica (como las marcas de Duolingo o
 * Pediatrum). Solo se muestra si es la guía activa de la pantalla.
 */
export function Tip({ id, queue }: { id: TipId; queue: TipQueue }) {
  if (queue.active !== id) return null;
  return <Bubble id={id} step={queue.step} total={queue.total} />;
}

function Bubble({ id, step, total }: { id: TipId; step: number; total: number }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const { markSeen, skipAll } = useTips();
  const reduce = useReduceMotion();
  const copy: (typeof TIPS)[TipId] & { align?: 'start' | 'center' | 'end' } = TIPS[id];
  const align = copy.align ?? 'center';
  const v = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (reduce) {
      v.setValue(1);
      return;
    }
    Animated.timing(v, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [reduce, v]);

  const close = (fn: () => void) => {
    if (!reduce) LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    fn();
  };
  const rise = copy.pointer === 'up' ? -6 : 6;
  const arrow = (
    <View
      style={[
        s.arrowRow,
        align === 'start' && s.arrowStart,
        align === 'end' && s.arrowEnd,
        align === 'center' && s.arrowCenter,
      ]}
    >
      <View style={[s.arrow, copy.pointer === 'up' ? s.arrowUp : s.arrowDown]} />
    </View>
  );

  return (
    <Animated.View
      accessibilityLiveRegion="polite"
      style={[
        s.wrap,
        {
          opacity: v,
          transform: [
            { translateY: v.interpolate({ inputRange: [0, 1], outputRange: [rise, 0] }) },
            { scale: v.interpolate({ inputRange: [0, 1], outputRange: [0.97, 1] }) },
          ],
        },
      ]}
    >
      {copy.pointer === 'up' ? arrow : null}
      <View style={s.bubble}>
        <View style={s.top}>
          <View style={s.bulb}>
            <MaterialCommunityIcons name="lightbulb-on-outline" size={18} color={c.tip} />
          </View>
          <View style={s.flex}>
            <Text style={s.title}>{copy.title}</Text>
            <Text style={s.body}>{copy.body}</Text>
          </View>
        </View>
        <View style={s.actions}>
          {total > 1 ? (
            <View accessible accessibilityLabel={`Guía ${step} de ${total}`} style={s.dots}>
              {Array.from({ length: total }, (_, i) => (
                <View key={i} style={[s.dot, i + 1 === step && s.dotOn]} />
              ))}
            </View>
          ) : (
            <View style={s.flex} />
          )}
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Omitir guía"
            onPress={() => close(skipAll)}
            hitSlop={6}
            style={({ pressed }) => [s.skip, pressed && { opacity: 0.6 }]}
          >
            <Text style={s.skipText}>Omitir guía</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={step < total ? 'Siguiente' : 'Entendido'}
            onPress={() => close(() => markSeen(id))}
            style={({ pressed }) => [s.ok, pressed && { opacity: 0.8 }]}
          >
            <Text style={s.okText}>{step < total ? 'Siguiente' : 'Entendido'}</Text>
            {step < total ? (
              <MaterialCommunityIcons name="arrow-right" size={16} color={c.tip} />
            ) : null}
          </Pressable>
        </View>
      </View>
      {copy.pointer === 'down' ? arrow : null}
    </Animated.View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    wrap: { marginVertical: -2 },
    flex: { flex: 1 },
    arrowRow: { height: 8, overflow: 'hidden', flexDirection: 'row' },
    arrowStart: { paddingLeft: 28 },
    arrowEnd: { justifyContent: 'flex-end', paddingRight: 28 },
    arrowCenter: { justifyContent: 'center' },
    arrow: {
      width: 16,
      height: 16,
      backgroundColor: c.tip,
      transform: [{ rotate: '45deg' }],
      borderRadius: 2,
    },
    arrowUp: { marginTop: 3 },
    arrowDown: { marginTop: -11 },
    bubble: {
      backgroundColor: c.tip,
      borderRadius: radius.lg,
      paddingHorizontal: space.lg,
      paddingTop: 14,
      paddingBottom: space.xs,
      gap: space.xs,
    },
    top: { flexDirection: 'row', gap: space.md },
    bulb: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: BULB,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1,
    },
    title: { fontFamily: family.bold, fontSize: 15, lineHeight: 20, color: c.onTip },
    body: {
      fontFamily: family.regular,
      fontSize: 14,
      lineHeight: 20,
      color: c.tipMuted,
      marginTop: 2,
    },
    actions: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
    dots: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 5, paddingLeft: 42 },
    dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: c.tipMuted, opacity: 0.45 },
    dotOn: { width: 16, opacity: 1, backgroundColor: c.onTip },
    skip: { minHeight: MIN_TOUCH, justifyContent: 'center', paddingHorizontal: space.sm },
    skipText: { fontFamily: family.medium, fontSize: 14, color: c.tipMuted },
    ok: {
      flexDirection: 'row',
      gap: 4,
      minHeight: 40,
      paddingHorizontal: space.lg,
      borderRadius: radius.pill,
      backgroundColor: c.onTip,
      alignItems: 'center',
      justifyContent: 'center',
    },
    okText: { fontFamily: family.bold, fontSize: 14, color: c.tip },
  });
}
