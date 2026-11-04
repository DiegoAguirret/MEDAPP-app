import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { SettingsProvider, useSettings } from '../state/settings';
import { darkColors, lightColors, ThemeContext } from '../ui/theme';

function Themed({ children }: { children: ReactNode }) {
  const { theme } = useSettings();
  const system = useColorScheme();
  const dark = theme === 'dark' || (theme === 'system' && system === 'dark');
  return (
    <ThemeContext.Provider value={dark ? darkColors : lightColors}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      {children}
    </ThemeContext.Provider>
  );
}

function Navigator() {
  const { theme } = useSettings();
  const system = useColorScheme();
  const c =
    theme === 'dark' || (theme === 'system' && system === 'dark') ? darkColors : lightColors;
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: c.card },
        headerTintColor: c.primary,
        headerTitleStyle: { color: c.text, fontWeight: '800' },
        contentStyle: { backgroundColor: c.bg },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="farmaco/[id]" options={{ title: 'Ficha' }} />
      <Stack.Screen name="categoria/[id]" options={{ title: 'Categoría' }} />
      <Stack.Screen name="manual" options={{ title: 'Calculadora manual' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <SettingsProvider>
      <Themed>
        <Navigator />
      </Themed>
    </SettingsProvider>
  );
}
