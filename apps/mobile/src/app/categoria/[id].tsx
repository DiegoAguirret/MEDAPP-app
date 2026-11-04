import type { Category } from '@medapp/content-schema';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { getContent } from '../../state/content';
import { DrugList } from '../../ui/DrugRow';

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
      <DrugList
        drugs={drugs}
        onOpen={(drugId) => router.push({ pathname: '/farmaco/[id]', params: { id: drugId } })}
      />
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20 } });
