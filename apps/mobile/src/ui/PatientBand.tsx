import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { patientSummary, readPatient } from '../domain/patientInput';
import { weightZone, ZONES } from '../domain/zones';
import type { PatientState } from '../state/patient';
import { useColorFade } from './motion';
import { family, radius, space, type, useColors, type Palette } from './theme';

/**
 * Cabecera del paciente: su franja de color por peso tiñe la banda, para saber siempre de quién
 * son las dosis en pantalla. Debajo, la cinta completa con la franja actual marcada.
 */
export function PatientBand({
  patient,
  decimalSeparator,
  onClear,
}: {
  patient: PatientState;
  decimalSeparator: '.' | ',';
  onClear?: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const reading = readPatient(patient);
  const summary = patientSummary(reading, decimalSeparator);
  const zone = reading.weightKg === null ? null : weightZone(reading.weightKg);
  const fill = zone?.fill ?? c.text;
  const onFill = zone?.onFill ?? c.ground;
  const bg = useColorFade(fill);
  if (summary === null) return null;

  return (
    <View
      accessibilityRole="summary"
      accessibilityLabel={`Paciente actual, ${summary}${zone ? `, ${zone.label}` : ''}`}
    >
      <Animated.View
        style={[s.band, { backgroundColor: bg }, zone?.id === 'blanco' && s.bandOutline]}
      >
        <View style={s.flex}>
          <Text style={[s.zone, { color: onFill }]}>
            {zone ? zone.label : 'Fuera de la cinta (3–36 kg)'}
          </Text>
          <Text style={[s.summary, { color: onFill }]}>{summary}</Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Nuevo paciente"
          onPress={() => {
            patient.clear();
            onClear?.();
          }}
          hitSlop={10}
          style={({ pressed }) => [s.clear, { borderColor: onFill }, pressed && { opacity: 0.6 }]}
        >
          <MaterialCommunityIcons name="account-child-outline" size={18} color={onFill} />
          <Text style={[s.clearText, { color: onFill }]}>Nuevo</Text>
        </Pressable>
      </Animated.View>
      <View style={s.tape} importantForAccessibility="no-hide-descendants">
        {ZONES.map((z) => (
          <View
            key={z.id}
            style={[
              s.tapeCell,
              { backgroundColor: z.fill },
              z.id === 'blanco' && s.tapeWhite,
              zone?.id === z.id && s.tapeOn,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    band: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      borderRadius: radius.lg,
      paddingHorizontal: space.lg,
      paddingVertical: 12,
    },
    bandOutline: { borderWidth: 1, borderColor: c.control },
    zone: { fontFamily: family.bold, fontSize: type.caption, letterSpacing: 0.2 },
    summary: {
      fontFamily: family.black,
      fontSize: 22,
      lineHeight: 28,
      fontVariant: ['tabular-nums'],
    },
    clear: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      minHeight: 36,
      paddingHorizontal: 10,
      borderRadius: radius.pill,
      borderWidth: 1.5,
    },
    clearText: { fontFamily: family.bold, fontSize: type.label },
    tape: { flexDirection: 'row', gap: 2, marginTop: 6, height: 6 },
    tapeCell: { flex: 1, borderRadius: 2, opacity: 0.45 },
    tapeWhite: { borderWidth: 1, borderColor: c.control },
    tapeOn: { flex: 2.4, opacity: 1 },
  });
}
