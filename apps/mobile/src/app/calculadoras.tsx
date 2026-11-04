import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { useSettings } from '../state/settings';
import { FluidsPanel } from '../ui/FluidsPanel';
import { space } from '../ui/theme';

export default function Calculators() {
  const { decimal } = useSettings();
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <ScrollView contentContainerStyle={s.screen} keyboardShouldPersistTaps="handled">
        <FluidsPanel decimalSeparator={decimal} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 }, screen: { padding: space.lg } });
