import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { BpPanel } from '../ui/BpPanel';
import { space } from '../ui/theme';

export default function PresionArterialScreen() {
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
        <BpPanel />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({ flex: { flex: 1 }, pad: { padding: 20, paddingBottom: space.xxl } });
