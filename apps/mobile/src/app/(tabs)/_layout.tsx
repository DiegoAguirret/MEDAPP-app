import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StyleSheet, type ColorValue } from 'react-native';
import { family, useColors } from '../../ui/theme';

type IconName = keyof typeof Ionicons.glyphMap;
const icon =
  (off: IconName, on: IconName) =>
  ({ color, size, focused }: { color: ColorValue; size: number; focused: boolean }) => (
    <Ionicons
      name={focused ? on : off}
      color={typeof color === 'string' ? color : undefined}
      size={size - 2}
    />
  );

export default function TabsLayout() {
  const c = useColors();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: c.text,
        tabBarInactiveTintColor: c.muted,
        tabBarStyle: {
          backgroundColor: c.ground,
          borderTopColor: c.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          height: 64,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontFamily: family.medium, fontSize: 12 },
        headerStyle: { backgroundColor: c.ground },
        headerShadowVisible: false,
        headerTitleStyle: { color: c.text, fontFamily: family.semibold, fontSize: 18 },
        sceneStyle: { backgroundColor: c.ground },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dosis',
          headerShown: false,
          tabBarIcon: icon('eyedrop-outline', 'eyedrop'),
        }}
      />
      <Tabs.Screen
        name="calculadoras"
        options={{ title: 'Calculadoras', tabBarIcon: icon('calculator-outline', 'calculator') }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{ title: 'Favoritos', tabBarIcon: icon('star-outline', 'star') }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{ title: 'Ajustes', tabBarIcon: icon('options-outline', 'options') }}
      />
    </Tabs>
  );
}
