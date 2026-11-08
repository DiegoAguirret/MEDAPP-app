import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Category } from '@medapp/content-schema';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../../domain/categories';
import { collectionDrugs, COLLECTIONS, isCollection } from '../../domain/collections';
import { NEONATAL_SCORES } from '../../domain/neonatalScores';
import { getContent } from '../../state/content';
import { DrugIndex, DrugList } from '../../ui/DrugRow';
import { ALL_DRUGS } from '../../ui/Home';
import { PressableScale } from '../../ui/motion';
import { family, radius, useColors, type Palette } from '../../ui/theme';

const INTRO: Record<string, string> = {
  infusiones:
    'Fármacos con reglas de infusión continua: la ficha da la velocidad de la bomba en mL/h para la mezcla elegida o una propia.',
  neonatos:
    'Escalas del recién nacido y los fármacos que tienen dosis verificadas para neonatos (menores de 29 días).',
};

export default function CategoryScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const content = getContent();
  const all = id === ALL_DRUGS;
  const collection = isCollection(id) ? id : null;
  const drugs = !content.ok
    ? []
    : collection
      ? collectionDrugs(collection, content.bundle.drugs, content.recalled)
      : content.bundle.drugs
          .filter((d) => (all || d.category === id) && !content.recalled.has(d.id))
          .sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const open = (drugId: string) =>
    router.push({ pathname: '/farmaco/[id]', params: { id: drugId } });
  const title = all
    ? 'Todos A–Z'
    : collection
      ? COLLECTIONS[collection].title
      : (CATEGORIES[id as Category]?.label ?? 'Categoría');
  return (
    <ScrollView contentContainerStyle={s.pad}>
      <Stack.Screen options={{ title }} />
      {collection ? <Text style={s.intro}>{INTRO[collection]}</Text> : null}
      {collection === 'neonatos' ? (
        <View style={s.scores}>
          <PressableScale
            accessibilityRole="button"
            accessibilityLabel="Bilirrubina neonatal, umbrales AAP 2022"
            onPress={() => router.push('/bilirrubina')}
            style={s.score}
          >
            <MaterialCommunityIcons name="white-balance-sunny" size={20} color={c.accent} />
            <Text style={s.scoreText}>Bilirrubina</Text>
          </PressableScale>
          <PressableScale
            accessibilityRole="button"
            accessibilityLabel="Ballard, edad gestacional (New Ballard Score)"
            onPress={() => router.push('/ballard')}
            style={s.score}
          >
            <MaterialCommunityIcons name="calendar-clock" size={20} color={c.accent} />
            <Text style={s.scoreText}>Ballard</Text>
          </PressableScale>
          {NEONATAL_SCORES.map((sc) => (
            <PressableScale
              key={sc.id}
              accessibilityRole="button"
              accessibilityLabel={`${sc.title}, ${sc.subtitle}`}
              onPress={() => router.push({ pathname: '/neonato/[id]', params: { id: sc.id } })}
              style={s.score}
            >
              <MaterialCommunityIcons name={sc.icon} size={20} color={c.accent} />
              <Text style={s.scoreText}>{sc.title}</Text>
            </PressableScale>
          ))}
        </View>
      ) : null}
      {all ? <DrugIndex drugs={drugs} onOpen={open} /> : <DrugList drugs={drugs} onOpen={open} />}
    </ScrollView>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    pad: { padding: 20, gap: 14 },
    intro: { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: c.muted },
    scores: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    score: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      minHeight: 48,
      paddingHorizontal: 16,
      borderRadius: radius.pill,
      backgroundColor: c.accentSoft,
    },
    scoreText: { fontFamily: family.bold, fontSize: 15, color: c.text },
  });
}
