import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { CLINICAL_DISCLAIMER } from '../../domain/messages';
import { getContent } from '../../state/content';
import { useSettings, type ThemeMode } from '../../state/settings';
import { Card, Collapsible, SectionTitle, Segmented } from '../../ui/components';
import { font, space, useColors } from '../../ui/theme';

export default function AjustesTab() {
  const content = getContent();
  const { decimal, changeDecimal, theme, changeTheme } = useSettings();
  const c = useColors();
  const body = { fontSize: font.body, color: c.text };
  return (
    <ScrollView contentContainerStyle={s.pad}>
      <Card>
        <SectionTitle>Tema</SectionTitle>
        <Segmented<ThemeMode>
          label="Tema"
          options={[
            { value: 'system', label: 'Sistema' },
            { value: 'light', label: 'Claro' },
            { value: 'dark', label: 'Oscuro' },
          ]}
          value={theme}
          onChange={changeTheme}
        />
        <SectionTitle>Separador decimal</SectionTitle>
        <Segmented<'.' | ','>
          label="Separador decimal"
          options={[
            { value: '.', label: 'Punto (6.3)' },
            { value: ',', label: 'Coma (6,3)' },
          ]}
          value={decimal}
          onChange={changeDecimal}
        />
      </Card>

      <Card>
        <SectionTitle>Metodología</SectionTitle>
        <Text style={body}>
          Cada dosis se calcula con el peso y la regla de su ficha. Se aplican siempre los topes por
          toma y por día; el redondeo a lo medible (0.1 mL, 1 gota o tableta) nunca supera el
          máximo.
        </Text>
        <Text style={body}>
          Prioridad de fuentes: norma peruana (FNME de DIGEMID, MINSA) → ficha de agencia reguladora
          (FDA, AEMPS) → guía científica → libro. Las diferencias se muestran por país.
        </Text>
        <Text style={body}>
          El contenido está firmado digitalmente: si fuera alterado, la app no mostraría dosis. No
          se guardan datos de pacientes.
        </Text>
        <Text style={body}>{CLINICAL_DISCLAIMER}</Text>
      </Card>

      {content.ok ? (
        <Collapsible title="Fuentes" count={content.bundle.sources.length}>
          <Text style={{ color: c.muted, fontSize: font.small }}>
            Versión del contenido {content.bundle.contentVersion} · {content.bundle.drugs.length}{' '}
            fichas
          </Text>
          {content.bundle.sources.map((src) => (
            <Text
              key={src.id}
              style={src.url ? { ...body, color: c.primary } : body}
              onPress={src.url ? () => void Linking.openURL(src.url ?? '') : undefined}
            >
              • {src.title}
              {src.year === undefined ? '' : ` (${src.year})`}
            </Text>
          ))}
        </Collapsible>
      ) : null}
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: space.lg } });
