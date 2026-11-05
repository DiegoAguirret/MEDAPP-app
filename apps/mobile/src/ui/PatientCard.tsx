import { formatClinical } from '@medapp/dose-engine';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { REASON_TEXT } from '../domain/messages';
import { readPatient } from '../domain/patientInput';
import type { PatientState } from '../state/patient';
import { Card, NumberField, SectionTitle, Segmented } from './components';
import { family, space, useColors, type Palette } from './theme';

/** Peso y edad del paciente actual (compartidos entre fichas; solo en memoria). */
export function PatientCard({
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
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const { weight, ageInvalid } = readPatient(patient);
  const hasData =
    patient.weightText !== '' ||
    patient.yearsText !== '' ||
    patient.monthsText !== '' ||
    patient.daysText !== '';

  return (
    <Card>
      <View style={s.headRow}>
        <SectionTitle>Paciente</SectionTitle>
        {hasData ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Nuevo paciente"
            onPress={() => {
              patient.clear();
              onClear?.();
            }}
            hitSlop={10}
          >
            <Text style={s.clear}>Nuevo paciente</Text>
          </Pressable>
        ) : null}
      </View>
      <View style={s.headRow}>
        <Text style={s.fieldGroup}>Peso</Text>
        <Segmented
          label="Unidad de peso"
          options={[
            { value: 'kg', label: 'kg' },
            { value: 'lb', label: 'lb' },
          ]}
          value={patient.weightUnit}
          onChange={(u) => patient.update({ weightUnit: u })}
        />
      </View>
      <NumberField
        label={patient.weightUnit === 'kg' ? 'Peso en kilogramos' : 'Peso en libras'}
        suffix={patient.weightUnit}
        value={patient.weightText}
        onChangeText={(v) => patient.update({ weightText: v })}
        placeholder="0"
      />
      {patient.weightUnit === 'lb' && weight.ok ? (
        <Text style={s.muted}>≈ {fmt(weight.kg)} kg</Text>
      ) : null}
      {patient.weightText.trim() !== '' && !weight.ok ? (
        <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
      ) : null}

      <View style={[s.headRow, s.gapTop]}>
        <Text style={s.fieldGroup}>Edad</Text>
        <Segmented
          label="Formato de edad"
          options={[
            { value: 'ym', label: 'Años y meses' },
            { value: 'd', label: 'Días' },
          ]}
          value={patient.ageMode}
          onChange={(m) => patient.update({ ageMode: m })}
        />
      </View>
      {patient.ageMode === 'ym' ? (
        <View style={s.row}>
          <NumberField
            label="Edad, años"
            suffix="años"
            value={patient.yearsText}
            onChangeText={(v) => patient.update({ yearsText: v })}
            keyboardType="number-pad"
            placeholder="0"
          />
          <NumberField
            label="Edad, meses"
            suffix="meses"
            value={patient.monthsText}
            onChangeText={(v) => patient.update({ monthsText: v })}
            keyboardType="number-pad"
            placeholder="0"
          />
        </View>
      ) : (
        <NumberField
          label="Edad en días"
          suffix="días"
          value={patient.daysText}
          onChangeText={(v) => patient.update({ daysText: v })}
          keyboardType="number-pad"
          placeholder="0"
        />
      )}
      {ageInvalid ? <Text style={s.error}>Revise la edad (meses de 0 a 11).</Text> : null}
    </Card>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    headRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: space.sm,
      flexWrap: 'wrap',
    },
    gapTop: { marginTop: space.sm },
    row: { flexDirection: 'row', gap: space.md },
    clear: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    fieldGroup: { fontFamily: family.medium, fontSize: 14, color: c.muted },
    muted: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
  });
}
