import { ScrollView, StyleSheet } from 'react-native';
import { IcsPanel } from '../ui/IcsPanel';
import { space } from '../ui/theme';

export default function CorticoidesInhaladosScreen() {
  return (
    <ScrollView contentContainerStyle={s.pad}>
      <IcsPanel />
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20, paddingBottom: space.xxl } });
