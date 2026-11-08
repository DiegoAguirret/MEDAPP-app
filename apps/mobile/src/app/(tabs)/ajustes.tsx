import Constants from 'expo-constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text } from 'react-native';
import { CLINICAL_DISCLAIMER } from '../../domain/messages';
import { getContent } from '../../state/content';
import { useSettings, type ThemeMode } from '../../state/settings';
import { useTips } from '../../state/tips';
import { Button, Card, Collapsible, SectionTitle, Segmented } from '../../ui/components';
import { family, font, space, useColors } from '../../ui/theme';

export default function AjustesTab() {
  const content = getContent();
  const { decimal, changeDecimal, theme, changeTheme } = useSettings();
  const c = useColors();
  const tips = useTips();
  const [tipsBack, setTipsBack] = useState(false);
  const body = { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: c.text };
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
        <SectionTitle>Guías de uso</SectionTitle>
        <Text style={body}>
          Globos breves que explican la franja de color, la indicación automática y otros detalles.
          Cada uno sale una sola vez.
        </Text>
        <Button
          label="Volver a ver las guías"
          variant="quiet"
          onPress={() => {
            tips.reset();
            setTipsBack(true);
          }}
        />
        {tipsBack ? (
          <Text accessibilityLiveRegion="polite" style={[body, { color: c.muted }]}>
            Listo: las verás otra vez al usar la app.
          </Text>
        ) : null}
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

      <Card>
        <SectionTitle>Privacidad</SectionTitle>
        <Text style={body}>No hay cuentas ni registro.</Text>
        <Text style={body}>
          La app no envía datos a ningún servidor: todo el contenido clínico viene dentro de la app.
        </Text>
        <Text style={body}>
          El peso y la edad del paciente quedan solo en la memoria del teléfono y se borran al
          cerrar la app o al tocar «Nuevo paciente».
        </Text>
        <Text style={body}>
          En el teléfono se guardan tus preferencias (tema, separador decimal, favoritos y
          presentación habitual) y el historial de cálculos: fármaco, dosis, peso y edad, sin
          nombres. Puedes borrar el historial cuando quieras.
        </Text>
        <Button label="Ver o borrar el historial" onPress={() => router.push('/historial')} />
      </Card>

      <Card>
        <SectionTitle>Acerca de</SectionTitle>
        <Text style={body}>
          Dosis Pediátricas · versión {Constants.expoConfig?.version ?? '1.0.0'}
        </Text>
        {content.ok ? (
          <Text style={body}>
            Contenido {content.bundle.contentVersion} · {content.bundle.drugs.length} fichas
            verificadas
          </Text>
        ) : null}
        <Text style={body}>Hecha en Lima, Perú, para médicos que atienden niños.</Text>
      </Card>

      {content.ok ? (
        <Collapsible title="Fuentes" count={content.bundle.sources.length}>
          <Text style={{ fontFamily: family.regular, color: c.muted, fontSize: font.small }}>
            Versión del contenido {content.bundle.contentVersion} · {content.bundle.drugs.length}{' '}
            fichas
          </Text>
          {content.bundle.sources.map((src) => (
            <Text
              key={src.id}
              style={src.url ? { ...body, color: c.accent } : body}
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

const s = StyleSheet.create({ pad: { padding: 20, paddingBottom: space.xxl } });
