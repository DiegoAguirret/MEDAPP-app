import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PEDIATRIC_SCORES } from '../domain/pediatricScores';
import { Segmented } from '../ui/components';
import { ScorePanel } from '../ui/ScorePanel';
import { space } from '../ui/theme';

/** Glasgow pediátrico: la misma pantalla con la columna de lactantes o la de niños. */
export default function GlasgowScreen() {
  const [id, setId] = useState<'glasgow-lactante' | 'glasgow-nino'>('glasgow-nino');
  const def = PEDIATRIC_SCORES.find((d) => d.id === id);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={s.switch}>
        <Segmented
          label="Columna de la escala"
          options={[
            { value: 'glasgow-lactante', label: 'Lactante' },
            { value: 'glasgow-nino', label: 'Niño' },
          ]}
          value={id}
          onChange={setId}
        />
      </View>
      {def ? <ScorePanel key={def.id} def={def} /> : null}
    </ScrollView>
  );
}

const s = StyleSheet.create({ switch: { paddingHorizontal: 20, paddingTop: space.lg } });
