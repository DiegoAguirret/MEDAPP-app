import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import { useReduceMotion } from './motion';
import { family, space, useColors, type Palette } from './theme';

export const APP_NAME = 'Dosikid';
export const APP_TAGLINE = 'Dosis pediátricas con fuente verificada';

/** Pantalla de inicio: logo, nombre y lema por un instante; se salta tocándola. */
export function StartScreen({
  onDone,
  duration = 1100,
}: {
  onDone: () => void;
  duration?: number;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const reduce = useReduceMotion();
  const v = useRef(new Animated.Value(reduce ? 1 : 0)).current;

  useEffect(() => {
    if (!reduce) {
      Animated.timing(v, {
        toValue: 1,
        duration: 420,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
    const t = setTimeout(onDone, reduce ? Math.min(duration, 600) : duration);
    return () => clearTimeout(t);
  }, [duration, onDone, reduce, v]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${APP_NAME}. Toca para entrar`}
      onPress={onDone}
      style={s.screen}
    >
      <Animated.View
        style={[
          s.center,
          {
            opacity: v,
            transform: [{ scale: v.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] }) }],
          },
        ]}
      >
        <Image source={logo} style={s.logo} resizeMode="contain" accessibilityIgnoresInvertColors />
        <Text style={s.name}>{APP_NAME}</Text>
        <Text style={s.tagline}>{APP_TAGLINE}</Text>
      </Animated.View>
      <View style={s.footer}>
        <Text style={s.foot}>FNME · MINSA · OMS · FDA</Text>
      </View>
    </Pressable>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: c.ground,
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: { alignItems: 'center', gap: space.sm, paddingHorizontal: space.xl },
    logo: { width: 168, height: 168, marginBottom: space.md },
    name: { fontFamily: family.black, fontSize: 40, lineHeight: 46, color: c.text },
    tagline: {
      fontFamily: family.medium,
      fontSize: 16,
      lineHeight: 22,
      color: c.muted,
      textAlign: 'center',
    },
    footer: { position: 'absolute', bottom: 48 },
    foot: { fontFamily: family.bold, fontSize: 12, letterSpacing: 1, color: c.muted },
  });
}
