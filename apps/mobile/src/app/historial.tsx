import { router } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { useHistory } from '../state/history';
import { usePatient } from '../state/patient';
import { HistoryPanel } from '../ui/HistoryPanel';
import { space } from '../ui/theme';

export default function HistorialScreen() {
  const history = useHistory();
  const patient = usePatient();
  if (!history) return null;
  return (
    <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
      <HistoryPanel
        entries={history.entries}
        onOpen={(e) => {
          // Reabre la ficha con el mismo peso y edad del cálculo guardado.
          patient.update(e.patient);
          router.push({ pathname: '/farmaco/[id]', params: { id: e.drugId } });
        }}
        onRemove={history.remove}
        onClear={history.clear}
      />
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20, paddingBottom: space.xxl } });
