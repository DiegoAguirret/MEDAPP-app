import { Roboto_400Regular } from '@expo-google-fonts/roboto/400Regular';
import { Roboto_500Medium } from '@expo-google-fonts/roboto/500Medium';
import { Roboto_700Bold } from '@expo-google-fonts/roboto/700Bold';
import { Roboto_900Black } from '@expo-google-fonts/roboto/900Black';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, type ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { PatientProvider } from '../state/patient';
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
        headerTitleStyle: { color: c.text, fontFamily: family.bold, fontSize: 18 },
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
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });
  const ready = loaded || error !== null;

  useEffect(() => {
    if (ready) void SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;
  return (
    <SettingsProvider>
      <PatientProvider>
        <Themed>
          <Navigator />
        </Themed>
      </PatientProvider>
    </SettingsProvider>
  );
}
