import { ScrollView, StyleSheet } from 'react-native';
import { space } from '../ui/theme';
import { VaccinePanel } from '../ui/VaccinePanel';

export default function VacunasScreen() {
  return (
    <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
      <VaccinePanel />
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20, paddingBottom: space.xxl } });
