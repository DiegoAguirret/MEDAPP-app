import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { DrugRow } from '../../ui/DrugRow';
import { font, space, useColors } from '../../ui/theme';

export default function FavoritosTab() {
  const content = getContent();
  const { favorites } = useSettings();
  const c = useColors();
  const drugs = content.ok
    ? favorites
        .map((id) => content.bundle.drugs.find((d) => d.id === id))
        .filter((d) => d !== undefined && !content.recalled.has(d.id))
    : [];
  return (
    <ScrollView contentContainerStyle={s.pad}>
      {drugs.length === 0 ? (
        <Text style={{ color: c.muted, fontSize: font.body }}>
          Aún no tienes favoritos. Toca la estrella ☆ en una ficha para guardarla aquí.
        </Text>
      ) : null}
      {drugs.map((d) =>
        d ? (
          <DrugRow
            key={d.id}
            drug={d}
            onPress={() => router.push({ pathname: '/farmaco/[id]', params: { id: d.id } })}
          />
        ) : null,
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: space.lg } });
