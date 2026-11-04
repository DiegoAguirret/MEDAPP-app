import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../ui/theme';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.card },
          headerTintColor: colors.primary,
          headerTitleStyle: { color: colors.text },
          contentStyle: { backgroundColor: colors.bg },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Dosis Pediátricas' }} />
        <Stack.Screen name="farmaco/[id]" options={{ title: 'Ficha' }} />
        <Stack.Screen name="calculadoras" options={{ title: 'Calculadoras' }} />
        <Stack.Screen name="ajustes" options={{ title: 'Ajustes y fuentes' }} />
      </Stack>
    </>
  );
}
