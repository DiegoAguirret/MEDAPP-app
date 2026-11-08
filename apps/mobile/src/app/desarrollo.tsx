import { ScrollView, StyleSheet } from 'react-native';
import { DevelopmentPanel } from '../ui/DevelopmentPanel';
import { space } from '../ui/theme';

export default function DesarrolloScreen() {
  return (
    <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
      <DevelopmentPanel />
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20, paddingBottom: space.xxl } });
