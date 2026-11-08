import { router, Stack, useLocalSearchParams } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { getContent } from '../../state/content';
import { useSettings } from '../../state/settings';
import { Banner } from '../../ui/components';
import { DosePanel } from '../../ui/DosePanel';
import { DrugInfoSheet } from '../../ui/DrugInfoSheet';
import { FavoriteButton } from '../../ui/FavoriteButton';
import { MIN_TOUCH, space, useColors } from '../../ui/theme';

export default function DrugScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = getContent();
  const { decimal, pushRecent } = useSettings();
  const c = useColors();
  const [info, setInfo] = useState(false);
  const drug =
    content.ok && !content.recalled.has(id)
      ? content.bundle.drugs.find((d) => d.id === id)
      : undefined;
  const openedId = drug?.id;
  useEffect(() => {
    if (openedId !== undefined) pushRecent(openedId);
  }, [openedId, pushRecent]);

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
          headerRight: () => (
            <View style={s.actions}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Cómo usar esta ficha"
                onPress={() => setInfo(true)}
                hitSlop={8}
                style={s.action}
              >
                <MaterialCommunityIcons name="information-outline" size={24} color={c.text} />
              </Pressable>
              <FavoriteButton drugId={drug.id} />
            </View>
          ),
        }}
      />
      <ScrollView contentContainerStyle={s.screen} keyboardShouldPersistTaps="handled">
        <DosePanel
          key={drug.id}
          drug={drug}
          decimalSeparator={decimal}
          sources={content.bundle.sources}
          onOpenRenalCalc={() => router.push('/funcion-renal')}
        />
      </ScrollView>
      <DrugInfoSheet
        visible={info}
        drug={drug}
        sources={content.bundle.sources}
        onClose={() => setInfo(false)}
      />
    </KeyboardAvoidingView>
  );
}

const s = StyleSheet.create({
  flex: { flex: 1 },
  actions: { flexDirection: 'row', alignItems: 'center' },
  action: {
    minWidth: MIN_TOUCH,
    minHeight: MIN_TOUCH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: { padding: 20, paddingBottom: space.xxl },
});
