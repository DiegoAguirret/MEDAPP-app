import type { Drug } from '@medapp/content-schema';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { DrugList } from '../../ui/DrugRow';
import { family, radius, useColors } from '../../ui/theme';

export default function FavoritosTab() {
  const content = getContent();
  const { favorites } = useSettings();
  const c = useColors();
  const drugs = content.ok
    ? favorites
        .map((id) => content.bundle.drugs.find((d) => d.id === id))
        .filter((d): d is Drug => d !== undefined && !content.recalled.has(d.id))
    : [];
  return (
    <ScrollView contentContainerStyle={s.pad}>
      {drugs.length === 0 ? (
        <View style={[s.empty, { borderColor: c.control }]}>
          <Text style={[s.emptyTitle, { color: c.text }]}>Sin favoritos todavía</Text>
          <Text style={[s.emptyText, { color: c.muted }]}>
            En cualquier ficha, toca la estrella de arriba a la derecha y el fármaco quedará aquí.
          </Text>
        </View>
      ) : (
        <DrugList
          drugs={drugs}
          onOpen={(id) => router.push({ pathname: '/farmaco/[id]', params: { id } })}
        />
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  pad: { padding: 20 },
  empty: { borderWidth: 1, borderStyle: 'dashed', borderRadius: radius.lg, padding: 20, gap: 6 },
  emptyTitle: { fontFamily: family.semibold, fontSize: 16 },
  emptyText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21 },
});
