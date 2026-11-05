import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  AccessibilityInfo,
  Animated,
  Easing,
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

/** Respeta «Quitar animaciones» del sistema. */
export function useReduceMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    let alive = true;
    void AccessibilityInfo.isReduceMotionEnabled().then((v) => {
      if (alive) setReduce(v);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduce);
    return () => {
      alive = false;
      sub.remove();
    };
  }, []);
  return reduce;
}

/** Pressable que se encoge levemente al tocar (resorte), como respuesta táctil. */
export function PressableScale({
  style,
  children,
  scaleTo = 0.97,
  outerStyle,
  ...props
}: Omit<PressableProps, 'style' | 'children'> & {
  style?: StyleProp<ViewStyle>;
  /** Estilo del contenedor externo (tamaño en cuadrículas, márgenes). */
  outerStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  scaleTo?: number;
}) {
  const reduce = useReduceMotion();
  const scale = useRef(new Animated.Value(1)).current;
  const to = (v: number) =>
    Animated.spring(scale, { toValue: v, useNativeDriver: true, speed: 40, bounciness: 6 }).start();
  return (
    <Pressable
      {...props}
      style={outerStyle}
      onPressIn={(e) => {
        if (!reduce) to(scaleTo);
        props.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        if (!reduce) to(1);
        props.onPressOut?.(e);
      }}
    >
      <Animated.View style={[style, { transform: [{ scale }] }]}>{children}</Animated.View>
    </Pressable>
  );
}

/** Vuelve a entrar (fundido y leve ascenso) cada vez que cambia `trigger`. */
export function Reveal({
  trigger,
  children,
  style,
}: {
  trigger: string | number;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const reduce = useReduceMotion();
  const v = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (reduce) return;
    v.setValue(0);
    Animated.timing(v, {
      toValue: 1,
      duration: 180,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [trigger, reduce, v]);
  return (
    <Animated.View
      style={[
        style,
        {
          opacity: v.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }),
          transform: [{ translateY: v.interpolate({ inputRange: [0, 1], outputRange: [6, 0] }) }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

/** Funde el color de fondo cuando cambia (la franja del paciente). */
export function useColorFade(color: string): Animated.AnimatedInterpolation<string> | string {
  const reduce = useReduceMotion();
  const prev = useRef(color);
  const v = useRef(new Animated.Value(1)).current;
  const [pair, setPair] = useState<[string, string]>([color, color]);
  useEffect(() => {
    if (prev.current === color) return;
    setPair([prev.current, color]);
    prev.current = color;
    if (reduce) {
      v.setValue(1);
      return;
    }
    v.setValue(0);
    Animated.timing(v, { toValue: 1, duration: 220, useNativeDriver: false }).start();
  }, [color, reduce, v]);
  if (pair[0] === pair[1]) return color;
  return v.interpolate({ inputRange: [0, 1], outputRange: pair });
}

/**
 * Entrada escalonada al montar (fundido y ascenso de 10 dp, 280 ms, 32 ms entre elementos).
 * Parte ya visible (35 %) para no dejar huecos si la animación se interrumpe.
 */
export function Enter({
  index,
  children,
  style,
}: {
  index: number;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const reduce = useReduceMotion();
  const v = useRef(new Animated.Value(reduce ? 1 : 0)).current;
  useEffect(() => {
    if (reduce) {
      v.setValue(1);
      return;
    }
    Animated.timing(v, {
      toValue: 1,
      duration: 280,
      delay: Math.min(index, 12) * 32,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [index, reduce, v]);
  return (
    <Animated.View
      style={[
        style,
        {
          opacity: v.interpolate({ inputRange: [0, 1], outputRange: [0.35, 1] }),
          transform: [{ translateY: v.interpolate({ inputRange: [0, 1], outputRange: [10, 0] }) }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
