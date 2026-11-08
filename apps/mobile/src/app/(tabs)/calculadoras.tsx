import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NEONATAL_SCORES } from '../../domain/neonatalScores';
import { useSettings } from '../../state/settings';
import { Button, Card, SectionTitle } from '../../ui/components';
import { FluidsPanel } from '../../ui/FluidsPanel';
import { Enter, PressableScale } from '../../ui/motion';
import { family, radius, space, type, useColors, type Palette } from '../../ui/theme';

export default function CalculadorasTab() {
  const { decimal } = useSettings();
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <ScrollView contentContainerStyle={s.pad} keyboardShouldPersistTaps="handled">
        {NEONATAL_SCORES.length > 0 ? (
          <View style={s.block}>
            <View style={s.sectionRow}>
              <MaterialCommunityIcons name="baby-face-outline" size={18} color={c.muted} />
              <Text style={s.section}>Neonatología</Text>
            </View>
            <View style={s.grid}>
              {NEONATAL_SCORES.map((d, i) => (
                <Enter key={d.id} index={i} style={s.tileOuter}>
                  <PressableScale
                    accessibilityRole="button"
                    accessibilityLabel={`${d.title}, ${d.subtitle}`}
                    onPress={() => router.push({ pathname: '/neonato/[id]', params: { id: d.id } })}
                    style={s.tile}
                  >
                    <View style={s.tileIcon}>
                      <MaterialCommunityIcons name={d.icon} size={22} color={c.accent} />
                    </View>
                    <Text style={s.tileTitle}>{d.title}</Text>
                    <Text style={s.tileSub} numberOfLines={2}>
                      {d.subtitle}
                    </Text>
                  </PressableScale>
                </Enter>
              ))}
            </View>
          </View>
        ) : null}
        <Card>
          <SectionTitle>Crecimiento y estado nutricional</SectionTitle>
          <Text style={s.cardText}>
            Peso, talla, IMC y perímetros con puntaje z y percentil OMS, clasificados con la NTS 238
            del MINSA.
          </Text>
          <Button
            label="Abrir valoración del crecimiento"
            onPress={() => router.push('/crecimiento')}
          />
        </Card>
        <Card>
          <SectionTitle>Desarrollo infantil</SectionTitle>
          <Text style={s.cardText}>
            Hitos del desarrollo de 0 a 36 meses con edad corregida e interpretación de la NTS 238.
          </Text>
          <Button
            label="Abrir vigilancia del desarrollo"
            onPress={() => router.push('/desarrollo')}
          />
        </Card>
        <Card>
          <SectionTitle>Asma: corticoides inhalados</SectionTitle>
          <Text style={s.cardText}>
            Dosis diaria total baja, media y alta por grupo de edad, según GINA 2025.
          </Text>
          <Button
            label="Abrir tabla de corticoides inhalados"
            onPress={() => router.push('/corticoides-inhalados')}
          />
        </Card>
        <Card>
          <SectionTitle>Dosis libre</SectionTitle>
          <Button label="Abrir calculadora manual" onPress={() => router.push('/manual')} />
        </Card>
        <FluidsPanel decimalSeparator={decimal} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    pad: { padding: 20, paddingBottom: space.xxl },
    block: { gap: 10, marginBottom: space.lg },
    sectionRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    section: { fontFamily: family.bold, fontSize: type.title, color: c.text },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    tileOuter: { width: '48.6%' },
    tile: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: 12,
      gap: 4,
      minHeight: 120,
    },
    tileIcon: {
      width: 40,
      height: 40,
      borderRadius: radius.md,
      backgroundColor: c.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 6,
    },
    tileTitle: { fontFamily: family.bold, fontSize: 16, color: c.text },
    cardText: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    tileSub: { fontFamily: family.regular, fontSize: type.label, lineHeight: 18, color: c.muted },
  });
}
