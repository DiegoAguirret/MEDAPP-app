import { router } from 'expo-router';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { Banner } from '../../ui/components';
import { EmergencySheet } from '../../ui/EmergencySheet';
import { useColors } from '../../ui/theme';

export default function UrgenciasTab() {
  const content = getContent();
  const { decimal } = useSettings();
  const c = useColors();
  return (
    <SafeAreaView style={[s.flex, { backgroundColor: c.ground }]} edges={['top']}>
      <KeyboardAvoidingView style={s.flex} behavior="height">
        <ScrollView keyboardShouldPersistTaps="handled">
          {content.ok ? (
            <EmergencySheet
              drugs={content.bundle.drugs}
              recalled={content.recalled}
              decimalSeparator={decimal}
              onOpenDrug={(id) => router.push({ pathname: '/farmaco/[id]', params: { id } })}
            />
          ) : (
            <Banner tone="danger">
              El contenido clínico no pasó la verificación de seguridad ({content.reason}). No se
              mostrarán dosis.
            </Banner>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 } });
