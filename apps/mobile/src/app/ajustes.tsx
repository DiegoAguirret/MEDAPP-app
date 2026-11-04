import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { getContent } from '../state/content';
import { useSettings } from '../state/settings';
import { Card, Chip, SectionTitle } from '../ui/components';
import { colors, font, space } from '../ui/theme';

export default function Settings() {
  const content = getContent();
  const { decimal, changeDecimal } = useSettings();
  return (
    <ScrollView contentContainerStyle={s.screen}>
      <Card>
        <SectionTitle>Separador decimal</SectionTitle>
        <View style={s.wrap}>
          <Chip
            label="Punto (6.3 mL)"
            selected={decimal === '.'}
            onPress={() => changeDecimal('.')}
          />
          <Chip
            label="Coma (6,3 mL)"
            selected={decimal === ','}
            onPress={() => changeDecimal(',')}
          />
        </View>
      </Card>

      <Card>
        <SectionTitle>Metodología</SectionTitle>
        <Text style={s.body}>
          Cada dosis se calcula con el peso del paciente y la regla de su ficha. Se aplican siempre
          los topes por toma y por día, y el redondeo a la medida (0.1 mL, 1 gota o tableta) nunca
          supera el máximo. El cálculo paso a paso aparece en cada resultado.
        </Text>
        <Text style={s.body}>
          El contenido clínico está firmado digitalmente: si fuera alterado, la app no mostraría
          dosis. No se guardan datos de pacientes.
        </Text>
        <Text style={s.body}>{CLINICAL_DISCLAIMER}</Text>
      </Card>

      {content.ok ? (
        <Card>
          <SectionTitle>Contenido</SectionTitle>
          <Text style={s.body}>Versión: {content.bundle.contentVersion}</Text>
          <Text style={s.body}>
            Fichas: {content.bundle.drugs.length} · verificadas con fuentes:{' '}
            {content.bundle.drugs.filter((d) => d.review.status !== 'borrador').length}
          </Text>
          <SectionTitle>Fuentes</SectionTitle>
          {content.bundle.sources.map((src) => (
            <Text
              key={src.id}
              style={src.url ? s.link : s.body}
              onPress={src.url ? () => void Linking.openURL(src.url ?? '') : undefined}
            >
              • {src.title}
              {src.year === undefined ? '' : ` (${src.year})`}
            </Text>
          ))}
        </Card>
      ) : null}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { padding: space.lg },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  body: { fontSize: font.body, color: colors.text },
  link: { fontSize: font.body, color: colors.primary, textDecorationLine: 'underline' },
});
