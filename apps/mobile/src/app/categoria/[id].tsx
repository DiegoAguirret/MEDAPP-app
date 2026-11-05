import type { Category } from '@medapp/content-schema';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { getContent } from '../../state/content';
import { DrugIndex, DrugList } from '../../ui/DrugRow';
import { ALL_DRUGS } from '../../ui/Home';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: Category | typeof ALL_DRUGS }>();
  const content = getContent();
  const all = id === ALL_DRUGS;
  const drugs = content.ok
    ? content.bundle.drugs
        .filter((d) => (all || d.category === id) && !content.recalled.has(d.id))
        .sort((a, b) => a.name.localeCompare(b.name, 'es'))
    : [];
  const open = (drugId: string) =>
    router.push({ pathname: '/farmaco/[id]', params: { id: drugId } });
  const title = all ? 'Todos A–Z' : (CATEGORIES[id as Category]?.label ?? 'Categoría');
  return (
    <ScrollView contentContainerStyle={s.pad}>
      <Stack.Screen options={{ title }} />
      {all ? <DrugIndex drugs={drugs} onOpen={open} /> : <DrugList drugs={drugs} onOpen={open} />}
    </ScrollView>
  );
}

const s = StyleSheet.create({ pad: { padding: 20 } });
