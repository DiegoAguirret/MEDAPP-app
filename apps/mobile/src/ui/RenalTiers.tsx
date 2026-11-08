import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { renalTierFor, tierLabel, type RenalTierLike } from '../domain/renal';
import { NumberField } from './components';
import { family, radius, space, useColors, type Palette } from './theme';

function num(text: string): number | null {
  const t = text.trim().replace(',', '.');
  return /^\d+(\.\d+)?$/.test(t) ? Number(t) : null;
}

/** Ajuste renal por tramos, con el tramo del paciente resaltado. */
export function RenalTiers({ tiers }: { tiers: readonly RenalTierLike[] }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [gfrText, setGfrText] = useState('');
  const gfr = num(gfrText);
  const match = gfr !== null ? renalTierFor(tiers, gfr) : null;
  const sorted = [...tiers].sort((a, b) => a.gfrMin - b.gfrMin);

  return (
    <View style={s.box}>
      <NumberField
        label="TFG o depuración del paciente"
        caption="TFG del paciente"
        suffix="mL/min"
        value={gfrText}
        onChangeText={setGfrText}
        placeholder="0"
      />
      {gfr !== null ? (
        <Text testID="renal-tier-match" style={[s.match, match ? s.matchOn : s.matchOff]}>
          {match
            ? `${tierLabel(match)} mL/min: ${match.text}`
            : 'La fuente no da un ajuste para ese valor.'}
        </Text>
      ) : null}
      {sorted.map((t) => {
        const on = match === t;
        return (
          <View key={t.gfrMin} style={[s.row, on && s.rowOn]}>
            <Text style={s.range}>{`${tierLabel(t)} mL/min`}</Text>
            <Text style={s.text}>{t.text}</Text>
          </View>
        );
      })}
      <Text style={s.note}>
        Las fuentes usan la depuración de creatinina en mL/min; la TFG de Schwartz se expresa por
        1.73 m².
      </Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    box: { gap: space.sm, marginTop: space.sm },
    match: {
      fontFamily: family.bold,
      fontSize: 15,
      lineHeight: 21,
      padding: space.md,
      borderRadius: radius.md,
    },
    matchOn: { color: c.text, backgroundColor: c.warningBg },
    matchOff: { color: c.muted, backgroundColor: c.surface },
    row: {
      flexDirection: 'row',
      gap: space.md,
      paddingVertical: 8,
      paddingHorizontal: space.sm,
      borderRadius: radius.md,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.border,
    },
    rowOn: { backgroundColor: c.warningBg },
    range: { width: 134, fontFamily: family.bold, fontSize: 14, color: c.text },
    text: { flex: 1, fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.text },
    note: { fontFamily: family.regular, fontSize: 12, lineHeight: 17, color: c.muted },
  });
}
