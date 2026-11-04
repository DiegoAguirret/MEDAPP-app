import { router } from 'expo-router';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { useSettings } from '../../state/settings';
import { Button, Card, SectionTitle } from '../../ui/components';
import { FluidsPanel } from '../../ui/FluidsPanel';
import { space } from '../../ui/theme';

export default function CalculadorasTab() {
  const { decimal } = useSettings();
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
        <Card>
          <SectionTitle>Dosis libre</SectionTitle>
          <Button label="Abrir calculadora manual (mg/kg)" onPress={() => router.push('/manual')} />
        </Card>
        <FluidsPanel decimalSeparator={decimal} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 }, pad: { padding: space.lg } });
