import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { useSettings } from '../state/settings';
import { RenalPanel } from '../ui/RenalPanel';
import { space } from '../ui/theme';

export default function FuncionRenalScreen() {
  const { decimal } = useSettings();
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
        <RenalPanel decimalSeparator={decimal} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 }, pad: { padding: 20, paddingBottom: space.xxl } });
