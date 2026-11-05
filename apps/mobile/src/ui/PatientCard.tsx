import { formatClinical } from '@medapp/dose-engine';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { REASON_TEXT } from '../domain/messages';
import { readPatient } from '../domain/patientInput';
import { weightZone } from '../domain/zones';
import type { PatientState } from '../state/patient';
import { Card, NumberField, SectionTitle, Segmented } from './components';
import { Tape } from './Tape';
import { family, space, type, useColors, type Palette } from './theme';

/** Peso y edad del paciente actual (compartidos entre fichas; solo en memoria). */
export function PatientCard({
  patient,
  decimalSeparator,
  onClear,
  hideClear = false,
  intro = false,
  onEditingChange,
}: {
  patient: PatientState;
  decimalSeparator: '.' | ',';
  onClear?: () => void;
  /** La franja del paciente ya muestra «Nuevo». */
  hideClear?: boolean;
  /** En el inicio: pregunta por el paciente y muestra la cinta, que se marca al escribir el peso. */
  intro?: boolean;
  /** true al enfocar un campo, false al salir de todos. */
  onEditingChange?: (editing: boolean) => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const { weight, ageInvalid } = readPatient(patient);
  const zone = weight.ok ? weightZone(weight.kg) : null;
  const needWeight = patient.weightText.trim() === '';
  const needAge =
    patient.ageMode === 'ym'
      ? patient.yearsText.trim() === '' && patient.monthsText.trim() === ''
      : patient.daysText.trim() === '';
  const focus = {
    onFocus: () => onEditingChange?.(true),
    onBlur: () => onEditingChange?.(false),
  };
  const hasData =
    patient.weightText !== '' ||
    patient.yearsText !== '' ||
    patient.monthsText !== '' ||
    patient.daysText !== '';

  return (
    <Card style={intro ? { marginBottom: 0 } : undefined}>
      <View style={s.headRow}>
        {intro ? (
          <Text accessibilityRole="header" style={s.introTitle}>
            ¿Para quién es la dosis?
          </Text>
        ) : (
          <SectionTitle>Paciente</SectionTitle>
        )}
        {!intro && (needWeight || needAge) ? (
          <Text style={s.missing}>
            {needWeight && needAge
              ? 'Faltan peso y edad'
              : needWeight
                ? 'Falta el peso'
                : 'Falta la edad'}
          </Text>
        ) : null}
        {hasData && !hideClear ? (
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
      {intro ? (
        <View style={s.introTape}>
          <Tape activeId={zone?.id ?? null} height={8} />
          <Text style={s.introHint} accessibilityLiveRegion="polite">
            {zone
              ? zone.label
              : weight.ok
                ? 'Fuera de la cinta (3–36 kg)'
                : 'Escribe el peso: la franja de color se marca sola.'}
          </Text>
        </View>
      ) : null}
      <View style={s.row}>
        <View style={s.weight}>
          <NumberField
            label={patient.weightUnit === 'kg' ? 'Peso en kilogramos' : 'Peso en libras'}
            caption="Peso"
            required={needWeight}
            suffix={patient.weightUnit}
            value={patient.weightText}
            onChangeText={(v) => patient.update({ weightText: v })}
            placeholder="0"
            {...focus}
          />
        </View>
        {patient.ageMode === 'ym' ? (
          <>
            <NumberField
              label="Edad, años"
              caption="Años"
              required={needAge}
              value={patient.yearsText}
              onChangeText={(v) => patient.update({ yearsText: v })}
              keyboardType="number-pad"
              placeholder="0"
              {...focus}
            />
            <NumberField
              label="Edad, meses"
              caption="Meses"
              value={patient.monthsText}
              onChangeText={(v) => patient.update({ monthsText: v })}
              keyboardType="number-pad"
              placeholder="0"
              {...focus}
            />
          </>
        ) : (
          <View style={s.days}>
            <NumberField
              label="Edad en días"
              caption="Días de vida"
              required={needAge}
              value={patient.daysText}
              onChangeText={(v) => patient.update({ daysText: v })}
              keyboardType="number-pad"
              placeholder="0"
              {...focus}
            />
          </View>
        )}
      </View>
      <View style={s.toggles}>
        <Segmented
          label="Unidad de peso"
          options={[
            { value: 'kg', label: 'kg' },
            { value: 'lb', label: 'lb' },
          ]}
          value={patient.weightUnit}
          onChange={(u) => patient.update({ weightUnit: u })}
        />
        <Segmented
          label="Formato de edad"
          options={[
            { value: 'ym', label: 'Años/meses' },
            { value: 'd', label: 'Días' },
          ]}
          value={patient.ageMode}
          onChange={(m) => patient.update({ ageMode: m })}
        />
      </View>
      {patient.weightUnit === 'lb' && weight.ok ? (
        <Text style={s.muted}>≈ {fmt(weight.kg)} kg</Text>
      ) : null}
      {patient.weightText.trim() !== '' && !weight.ok ? (
        <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
      ) : null}
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
    row: { flexDirection: 'row', gap: space.sm },
    weight: { flex: 1.25 },
    days: { flex: 2 },
    toggles: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: space.sm,
      justifyContent: 'space-between',
    },
    clear: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    missing: {
      fontFamily: family.bold,
      fontSize: 12,
      color: c.warning,
      backgroundColor: c.warningBg,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 999,
      overflow: 'hidden',
    },
    introTitle: { fontFamily: family.black, fontSize: type.title + 1, color: c.text },
    introTape: { gap: 6, marginTop: -4 },
    introHint: { fontFamily: family.medium, fontSize: type.label, color: c.muted },
    fieldGroup: { fontFamily: family.medium, fontSize: 14, color: c.muted },
    muted: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
  });
}
