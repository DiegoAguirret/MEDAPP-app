import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { StyleSheet, type ColorValue } from 'react-native';
import { family, useColors } from '../../ui/theme';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;
const icon =
  (off: IconName, on: IconName) =>
  ({ color, size, focused }: { color: ColorValue; size: number; focused: boolean }) => (
    <MaterialCommunityIcons
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
        tabBarActiveTintColor: c.accent,
        tabBarInactiveTintColor: c.muted,
        tabBarStyle: {
          backgroundColor: c.surface,
          borderTopColor: c.border,
          borderTopWidth: StyleSheet.hairlineWidth,
          elevation: 0,
          height: 64,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontFamily: family.bold, fontSize: 11 },
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
          tabBarIcon: icon('eyedropper', 'eyedropper'),
        }}
      />
      <Tabs.Screen
        name="urgencias"
        options={{
          title: 'Urgencias',
          headerShown: false,
          tabBarIcon: icon('ambulance', 'ambulance'),
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
