import { formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DROP_FACTORS, dropsPerMinute } from '../domain/renal';
import { Chip } from './components';
import { family, space, useColors, type Palette } from './theme';

/** Convierte una velocidad en mL/h a gotas por minuto según el factor del equipo de venoclisis. */
export function DripRate({
  mlPerHour,
  decimalSeparator,
}: {
  mlPerHour: number;
  decimalSeparator: '.' | ',';
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [factor, setFactor] = useState<number>(DROP_FACTORS[0].perMl);
  const drops = dropsPerMinute(mlPerHour, factor);

  return (
    <View style={s.box}>
      <Text style={s.head}>Goteo sin bomba</Text>
      <View style={s.row} accessibilityRole="radiogroup" accessibilityLabel="Factor del equipo">
        {DROP_FACTORS.map((f) => (
          <Chip
            key={f.perMl}
            label={`${f.perMl} gotas/mL`}
            selected={factor === f.perMl}
            onPress={() => setFactor(f.perMl)}
          />
        ))}
      </View>
      <Text
        testID="drip-rate"
        style={s.value}
        accessibilityLabel={`${drops} gotas por minuto con un equipo de ${factor} gotas por mililitro`}
      >
        {drops} gotas/min
      </Text>
      <Text style={s.note}>
        {formatClinical(mlPerHour, decimalSeparator)} mL/h × {factor} ÷ 60. El factor (gotas por mL)
        viene impreso en el equipo; el microgotero es de 60.
      </Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    box: { gap: space.sm, marginTop: space.md },
    head: { fontFamily: family.bold, fontSize: 15, color: c.text },
    row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    value: {
      fontFamily: family.black,
      fontSize: 24,
      lineHeight: 30,
      color: c.accent,
      fontVariant: ['tabular-nums'],
    },
    note: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
