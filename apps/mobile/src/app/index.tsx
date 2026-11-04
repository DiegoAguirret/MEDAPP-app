import { Link, router } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { searchDrugs } from '../data/content';
import { getContent } from '../state/content';
import { useSettings } from '../state/settings';
import { Banner, Button, Card } from '../ui/components';
import { colors, font, MIN_TOUCH, radius, space } from '../ui/theme';

export default function Home() {
  const content = getContent();
  const { accepted, accept } = useSettings();
  const [query, setQuery] = useState('');

  const results = useMemo(
    () => (content.ok ? searchDrugs(content.bundle.drugs, query, content.recalled) : []),
    [content, query],
  );

  if (!content.ok) {
    return (
      <View style={s.screen}>
        <Banner tone="danger">
          El contenido clínico no pasó la verificación de seguridad ({content.reason}). No se
          mostrarán dosis. Reinstale la app.
        </Banner>
      </View>
    );
  }

  if (!accepted) {
    return (
      <View style={s.screen}>
        <Card>
          <Text style={s.title}>Antes de empezar</Text>
          <Text style={s.body}>
            Esta app es una herramienta de apoyo para profesionales de la salud. Las dosis provienen
            de fichas técnicas y guías citadas en cada ficha. La decisión clínica es responsabilidad
            del médico tratante.
          </Text>
          <Text style={s.body}>
            Versión de prueba: las fichas marcadas «NO VALIDADO» están en revisión médica y no deben
            usarse en pacientes.
          </Text>
          <Text style={s.body}>La app no guarda datos de pacientes.</Text>
          <Button label="Soy profesional de la salud y acepto" onPress={accept} />
        </Card>
      </View>
    );
  }

  return (
    <View style={s.screen}>
      <TextInput
        accessibilityLabel="Buscar fármaco o diagnóstico"
        placeholder="Buscar fármaco o diagnóstico"
        placeholderTextColor={colors.muted}
        value={query}
        onChangeText={setQuery}
        style={s.search}
        autoCorrect={false}
      />
      <View style={s.links}>
        <Link href="/calculadoras" asChild>
          <Pressable style={s.link}>
            <Text style={s.linkText}>Calculadoras</Text>
          </Pressable>
        </Link>
        <Link href="/ajustes" asChild>
          <Pressable style={s.link}>
            <Text style={s.linkText}>Ajustes y fuentes</Text>
          </Pressable>
        </Link>
      </View>
      <FlatList
        data={results}
        keyExtractor={(d) => d.id}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={s.body}>Sin resultados.</Text>}
        renderItem={({ item }) => (
          <Pressable
            accessibilityRole="button"
            onPress={() => router.push({ pathname: '/farmaco/[id]', params: { id: item.id } })}
            style={s.item}
          >
            <Text style={s.itemTitle}>{item.tallMan ?? item.name}</Text>
            <Text style={s.itemSub} numberOfLines={1}>
              {item.diagnoses.join(' · ')}
            </Text>
            {item.review.status === 'borrador' ? <Text style={s.draft}>NO VALIDADO</Text> : null}
          </Pressable>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, padding: space.lg, gap: space.md },
  title: { fontSize: font.title, fontWeight: '800', color: colors.text },
  body: { fontSize: font.body, color: colors.text },
  search: {
    minHeight: MIN_TOUCH,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: space.lg,
    fontSize: font.body,
    color: colors.text,
  },
  links: { flexDirection: 'row', gap: space.sm },
  link: {
    flex: 1,
    minHeight: MIN_TOUCH,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    backgroundColor: colors.chip,
  },
  linkText: { color: colors.primary, fontWeight: '700', fontSize: font.body },
  item: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: space.lg,
    marginBottom: space.sm,
    minHeight: MIN_TOUCH,
  },
  itemTitle: { fontSize: font.title, fontWeight: '700', color: colors.text },
  itemSub: { fontSize: font.small, color: colors.muted },
  draft: { marginTop: space.xs, color: colors.danger, fontWeight: '700', fontSize: font.small },
});
