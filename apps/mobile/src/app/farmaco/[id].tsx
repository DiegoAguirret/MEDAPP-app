import { Stack, useLocalSearchParams } from 'expo-router';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { Banner } from '../../ui/components';
import { DosePanel } from '../../ui/DosePanel';
import { FavoriteButton } from '../../ui/FavoriteButton';
import { space } from '../../ui/theme';

export default function DrugScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = getContent();
  const { decimal } = useSettings();
  const drug =
    content.ok && !content.recalled.has(id)
      ? content.bundle.drugs.find((d) => d.id === id)
      : undefined;

  if (!content.ok || drug === undefined) {
    return (
      <ScrollView contentContainerStyle={s.screen}>
        <Banner tone="danger">Ficha no disponible o retirada por seguridad.</Banner>
      </ScrollView>
    );
  }
  return (
    <KeyboardAvoidingView style={s.flex} behavior="height">
      <Stack.Screen
        options={{
          title: '',
          headerBackTitle: CATEGORIES[drug.category].label,
          headerRight: () => <FavoriteButton drugId={drug.id} />,
        }}
      />
      <ScrollView contentContainerStyle={s.screen} keyboardShouldPersistTaps="handled">
        <DosePanel
          key={drug.id}
          drug={drug}
          decimalSeparator={decimal}
          sources={content.bundle.sources}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1 },
  screen: { padding: 20, paddingBottom: space.xxl },
});
