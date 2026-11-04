import type { Category } from '@medapp/content-schema';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { getContent } from '../../state/content';
import { DrugRow } from '../../ui/DrugRow';
import { space } from '../../ui/theme';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: Category }>();
  const content = getContent();
  const drugs = content.ok
    ? content.bundle.drugs
        .filter((d) => d.category === id && !content.recalled.has(d.id))
        .sort((a, b) => a.name.localeCompare(b.name, 'es'))
    : [];
  return (
    <ScrollView contentContainerStyle={s.pad}>
      <Stack.Screen options={{ title: CATEGORIES[id]?.label ?? 'Categoría' }} />
      {drugs.map((d) => (
        <DrugRow
          key={d.id}
          drug={d}
          onPress={() => router.push({ pathname: '/farmaco/[id]', params: { id: d.id } })}
        />
      ))}
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: space.lg } });
