import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { BALLARD_SCORES } from '../domain/ballard';
import { Segmented } from '../ui/components';
import { ScorePanel } from '../ui/ScorePanel';
import { space } from '../ui/theme';

/** New Ballard Score: misma escala con los genitales del sexo elegido. */
export default function BallardScreen() {
  const [id, setId] = useState<'ballard-nino' | 'ballard-nina'>('ballard-nino');
  const def = BALLARD_SCORES.find((d) => d.id === id);
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={s.switch}>
        <Segmented
          label="Sexo del recién nacido"
          options={[
            { value: 'ballard-nino', label: 'Niño' },
            { value: 'ballard-nina', label: 'Niña' },
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
