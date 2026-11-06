import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native';
import { findScore } from '../../domain/neonatalScores';
import { Banner } from '../../ui/components';
import { ScorePanel } from '../../ui/ScorePanel';

export default function NeonatalScoreScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const def = findScore(id);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Stack.Screen options={{ title: '' }} />
      {def ? <ScorePanel def={def} /> : <Banner tone="danger">Calculadora no disponible.</Banner>}
    </ScrollView>
  );
}
