import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, type ColorValue } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useReduceMotion } from '../../ui/motion';
import { family, radius, useColors } from '../../ui/theme';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/** Ícono de pestaña con el indicador en píldora de Material 3, que se abre al enfocarla. */
function TabIcon({
  off,
  on,
  focused,
  color,
}: {
  off: IconName;
  on: IconName;
  focused: boolean;
  color: ColorValue;
}) {
  const c = useColors();
  const reduce = useReduceMotion();
  const v = useRef(new Animated.Value(focused ? 1 : 0)).current;
  useEffect(() => {
    if (reduce) {
      v.setValue(focused ? 1 : 0);
      return;
    }
    Animated.timing(v, {
      toValue: focused ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [focused, reduce, v]);
  return (
    <Animated.View style={s.iconWrap}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          s.pill,
          {
            backgroundColor: c.accentSoft,
            opacity: v,
            transform: [{ scaleX: v.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }],
          },
        ]}
      />
      <MaterialCommunityIcons
        name={focused ? on : off}
        color={typeof color === 'string' ? color : undefined}
        size={22}
      />
    </Animated.View>
  );
}

const icon =
  (off: IconName, on: IconName) =>
  ({ color, focused }: { color: ColorValue; focused: boolean }) => (
    <TabIcon off={off} on={on} focused={focused} color={color} />
  );

const s = StyleSheet.create({
  iconWrap: { width: 56, height: 30, alignItems: 'center', justifyContent: 'center' },
  pill: { borderRadius: radius.pill },
});

export default function TabsLayout() {
  const c = useColors();
  // La barra de pestañas queda sobre la barra de navegación del celular, no debajo.
  const { bottom } = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: c.accent,
        tabBarInactiveTintColor: c.muted,
        tabBarStyle: {
          backgroundColor: c.surface,
          borderTopColor: c.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          height: 68 + bottom,
          paddingTop: 6,
          paddingBottom: 8 + bottom,
        },
        tabBarLabelStyle: { fontFamily: family.bold, fontSize: 11, marginTop: 2 },
        headerStyle: { backgroundColor: c.ground },
        headerShadowVisible: false,
        headerTitleStyle: { color: c.text, fontFamily: family.bold, fontSize: 18 },
        sceneStyle: { backgroundColor: c.ground },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dosis',
          headerShown: false,
          tabBarIcon: icon('medication-outline', 'medication'),
        }}
      />
      <Tabs.Screen
        name="urgencias"
        options={{
          title: 'Urgencias',
          headerShown: false,
          tabBarIcon: icon('alarm-light-outline', 'alarm-light'),
        }}
      />
      <Tabs.Screen
        name="calculadoras"
        options={{
          title: 'Cálculos',
          tabBarIcon: icon('calculator-variant-outline', 'calculator-variant'),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{ title: 'Favoritos', tabBarIcon: icon('star-outline', 'star') }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{ title: 'Ajustes', tabBarIcon: icon('cog-outline', 'cog') }}
      />
    </Tabs>
  );
}
