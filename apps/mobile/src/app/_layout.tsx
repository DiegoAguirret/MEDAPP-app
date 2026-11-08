import { Figtree_400Regular } from '@expo-google-fonts/figtree/400Regular';
import { Figtree_500Medium } from '@expo-google-fonts/figtree/500Medium';
import { Figtree_700Bold } from '@expo-google-fonts/figtree/700Bold';
import { Figtree_800ExtraBold } from '@expo-google-fonts/figtree/800ExtraBold';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { PatientProvider } from '../state/patient';
import { SettingsProvider, useSettings } from '../state/settings';
import { TipsProvider } from '../state/tips';
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
        headerTitleStyle: { color: c.text, fontFamily: family.bold, fontSize: 18 },
        headerBackButtonDisplayMode: 'minimal',
        contentStyle: { backgroundColor: c.ground },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="farmaco/[id]" options={{ title: '' }} />
      <Stack.Screen name="categoria/[id]" options={{ title: 'Categoría' }} />
      <Stack.Screen name="manual" options={{ title: 'Calculadora manual' }} />
      <Stack.Screen name="crecimiento" options={{ title: 'Crecimiento' }} />
      <Stack.Screen name="desarrollo" options={{ title: 'Desarrollo' }} />
      <Stack.Screen name="vacunas" options={{ title: 'Vacunas' }} />
      <Stack.Screen name="corticoides-inhalados" options={{ title: 'Corticoides inhalados' }} />
      <Stack.Screen name="neonato/[id]" options={{ title: 'Neonatología' }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_700Bold,
    Figtree_800ExtraBold,
  });
  const ready = loaded || error !== null;

  useEffect(() => {
    if (ready) void SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;
  return (
    <SettingsProvider>
      <PatientProvider>
        <TipsProvider>
          <Themed>
            <Navigator />
          </Themed>
        </TipsProvider>
      </PatientProvider>
    </SettingsProvider>
  );
}
