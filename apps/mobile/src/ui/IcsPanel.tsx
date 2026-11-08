import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICS_GROUPS, ICS_NOTES, type IcsGroup } from '../domain/ics';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Card, SectionTitle, Segmented } from './components';
import { family, radius, space, useColors, type Palette } from './theme';

/** Tabla de consulta de dosis diarias de corticoides inhalados (GINA 2025) por edad. */
export function IcsPanel() {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [groupId, setGroupId] = useState<IcsGroup['id']>('6-11');
  const group = ICS_GROUPS.find((g) => g.id === groupId) ?? ICS_GROUPS[0];
  if (!group) return null;
  const onlyLow = group.id === '0-5';

  return (
    <View>
      <Card>
        <SectionTitle>Edad</SectionTitle>
        <Segmented
          label="Grupo de edad"
          options={ICS_GROUPS.map((g) => ({ value: g.id, label: g.label }))}
          value={groupId}
          onChange={setGroupId}
        />
        <Text style={s.hint}>
          Dosis diaria total en microgramos (mcg/día).{' '}
          {onlyLow ? 'En 5 años o menos GINA solo da la dosis baja.' : ''}
        </Text>
      </Card>

      {group.rows.map((r) => (
        <View key={`${r.drug}-${r.device}`} style={s.row}>
          <Text style={s.drug}>{r.drug}</Text>
          <Text style={s.device}>{r.device}</Text>
          <View style={s.doses}>
            <Dose s={s} label="Baja" value={r.low} tone={c.ok} />
            {onlyLow ? null : (
              <>
                <Dose s={s} label="Media" value={r.medium ?? '—'} tone={c.warning} />
                <Dose s={s} label="Alta" value={r.high ?? '—'} tone={c.danger} />
              </>
            )}
          </View>
          {r.note ? <Text style={s.note}>Con datos de seguridad y eficacia {r.note}.</Text> : null}
        </View>
      ))}

      <Card>
        <View style={s.warnHead}>
          <MaterialCommunityIcons name="alert-circle-outline" size={20} color={c.warning} />
          <SectionTitle>Antes de usar la tabla</SectionTitle>
        </View>
        {ICS_NOTES.map((n) => (
          <Text key={n} style={s.bullet}>
            • {n}
          </Text>
        ))}
      </Card>

      <Card>
        <SectionTitle>Fuente</SectionTitle>
        <Text style={s.source}>{group.source}</Text>
        <Text style={s.source}>
          Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention,
          actualización 2025.
        </Text>
      </Card>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function Dose({
  s,
  label,
  value,
  tone,
}: {
  s: ReturnType<typeof makeStyles>;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <View
      style={s.dose}
      accessible
      accessibilityLabel={`Dosis ${label.toLowerCase()}: ${value} mcg al día`}
    >
      <View style={[s.doseBar, { backgroundColor: tone }]} />
      <Text style={s.doseLabel}>{label}</Text>
      <Text style={s.doseValue}>{value}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    row: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.lg,
      gap: 4,
      marginBottom: space.md,
    },
    drug: { fontFamily: family.bold, fontSize: 17, color: c.text },
    device: { fontFamily: family.medium, fontSize: 13, color: c.muted },
    doses: { flexDirection: 'row', gap: space.sm, marginTop: space.sm },
    dose: {
      flex: 1,
      borderRadius: radius.md,
      backgroundColor: c.ground,
      paddingVertical: 8,
      paddingHorizontal: 8,
      paddingLeft: 10,
      overflow: 'hidden',
    },
    doseBar: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4 },
    doseLabel: { fontFamily: family.bold, fontSize: 12, color: c.muted },
    doseValue: {
      fontFamily: family.bold,
      fontSize: 15,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    note: { fontFamily: family.regular, fontSize: 13, color: c.muted, marginTop: 4 },
    warnHead: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    bullet: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.text },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
