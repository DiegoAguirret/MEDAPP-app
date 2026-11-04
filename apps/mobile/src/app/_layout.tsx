import { InstrumentSans_400Regular } from '@expo-google-fonts/instrument-sans/400Regular';
import { InstrumentSans_500Medium } from '@expo-google-fonts/instrument-sans/500Medium';
import { InstrumentSans_600SemiBold } from '@expo-google-fonts/instrument-sans/600SemiBold';
import { InstrumentSerif_400Regular } from '@expo-google-fonts/instrument-serif/400Regular';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { SettingsProvider, useSettings } from '../state/settings';
import { Onboarding } from '../ui/Onboarding';
import { darkColors, family, lightColors, ThemeContext, type Palette } from '../ui/theme';

void SplashScreen.preventAutoHideAsync();

function usePalette(): { c: Palette; dark: boolean } {
  const { theme } = useSettings();
  const system = useColorScheme();
  const dark = theme === 'dark' || (theme === 'system' && system === 'dark');
  return { c: dark ? darkColors : lightColors, dark };
}

function Themed({ children }: { children: ReactNode }) {
  const { c, dark } = usePalette();
  return (
    <ThemeContext.Provider value={c}>
      <StatusBar style={dark ? 'light' : 'dark'} />
      {children}
    </ThemeContext.Provider>
  );
}

function Navigator() {
  const { c } = usePalette();
  const { accepted, accept } = useSettings();
  if (!accepted) return <Onboarding onDone={accept} />;
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: c.ground },
        headerShadowVisible: false,
        headerTintColor: c.text,
        headerTitleStyle: { color: c.text, fontFamily: family.semibold, fontSize: 18 },
        headerBackButtonDisplayMode: 'minimal',
        contentStyle: { backgroundColor: c.ground },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="farmaco/[id]" options={{ title: '' }} />
      <Stack.Screen name="categoria/[id]" options={{ title: 'Categoría' }} />
      <Stack.Screen name="manual" options={{ title: 'Calculadora manual' }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InstrumentSans_400Regular,
    InstrumentSans_500Medium,
    InstrumentSans_600SemiBold,
    InstrumentSerif_400Regular,
  });
  const ready = loaded || error !== null;

  useEffect(() => {
    if (ready) void SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;
  return (
    <SettingsProvider>
      <Themed>
        <Navigator />
      </Themed>
    </SettingsProvider>
  );
}
