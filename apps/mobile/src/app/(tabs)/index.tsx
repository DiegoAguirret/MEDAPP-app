import { router } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { Banner } from '../../ui/components';
import { Home } from '../../ui/Home';
import { Onboarding } from '../../ui/Onboarding';
import { space, useColors } from '../../ui/theme';

export default function DosisTab() {
  const content = getContent();
  const { accepted, accept } = useSettings();
  const c = useColors();

  if (!accepted) return <Onboarding onDone={accept} />;

  return (
    <SafeAreaView style={[s.flex, { backgroundColor: c.bg }]} edges={['top']}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {content.ok ? (
          <Home
            drugs={content.bundle.drugs}
            recalled={content.recalled}
            onOpenDrug={(id) => router.push({ pathname: '/farmaco/[id]', params: { id } })}
            onOpenCategory={(id) => router.push({ pathname: '/categoria/[id]', params: { id } })}
            onOpenManual={() => router.push('/manual')}
          />
        ) : (
          <Banner tone="danger">
            El contenido clínico no pasó la verificación de seguridad ({content.reason}). No se
            mostrarán dosis. Reinstale la app.
          </Banner>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 }, pad: { padding: space.lg } });
