import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { ZONES } from '../domain/zones';
import { useReduceMotion } from './motion';
import { useColors, type Palette } from './theme';

/**
 * La cinta de reanimación en miniatura: las 9 franjas de peso, con la del paciente ensanchada y
 * encendida. Al escribir el peso, la franja se marca sola (la cinta «responde»).
 */
export function Tape({ activeId, height = 6 }: { activeId: string | null; height?: number }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const reduce = useReduceMotion();
  const cells = useRef(
    ZONES.map((z) => ({ z, v: new Animated.Value(z.id === activeId ? 1 : 0) })),
  ).current;

  useEffect(() => {
    cells.forEach(({ z, v }) => {
      const to = z.id === activeId ? 1 : 0;
      if (reduce) {
        v.setValue(to);
        return;
      }
      Animated.timing(v, {
        toValue: to,
        duration: 260,
        easing: Easing.out(Easing.exp),
        useNativeDriver: false,
      }).start();
    });
  }, [activeId, reduce, cells]);

  return (
    <View style={[s.tape, { height }]} importantForAccessibility="no-hide-descendants">
      {cells.map(({ z, v }) => {
        return (
          <Animated.View
            key={z.id}
            style={[
              s.cell,
              z.id === 'blanco' && s.white,
              {
                backgroundColor: z.fill,
                flex: v.interpolate({ inputRange: [0, 1], outputRange: [1, 2.6] }),
                opacity: v.interpolate({
                  inputRange: [0, 1],
                  outputRange: [activeId === null ? 0.85 : 0.4, 1],
                }),
              },
            ]}
          />
        );
      })}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    tape: { flexDirection: 'row', gap: 2 },
    cell: { borderRadius: 2 },
    white: { borderWidth: 1, borderColor: c.control },
  });
}
