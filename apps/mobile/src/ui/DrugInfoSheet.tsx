import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Drug, Source } from '@medapp/content-schema';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTips } from '../state/tips';
import { Button } from './components';
import { Sheet } from './Sheet';
import { family, radius, space, type, useColors, type Palette } from './theme';

type IconName =
  | 'account-child-outline'
  | 'clipboard-text-outline'
  | 'bottle-tonic-outline'
  | 'check-decagram-outline';

/** Los cuatro pasos de la ficha, en el orden de la pantalla. */
const STEPS: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'account-child-outline',
    title: 'Paciente',
    text: 'Peso y edad. Se ingresan una vez y sirven para todas las fichas.',
  },
  {
    icon: 'clipboard-text-outline',
    title: 'Indicación',
    text: 'Se elige sola según la edad y el peso. Tócala para ver las demás.',
  },
  {
    icon: 'bottle-tonic-outline',
    title: 'Presentación',
    text: 'Elige la que tienes a mano o personaliza la concentración.',
  },
  {
    icon: 'check-decagram-outline',
    title: 'Resultado',
    text: 'Cantidad a medir, mg por dosis y topes. Revisa las alertas y las fuentes.',
  },
];

/** Botón «i» de la ficha: cómo usarla, sus fuentes y volver a ver la guía. */
export function DrugInfoSheet({
  visible,
  drug,
  sources,
  onClose,
}: {
  visible: boolean;
  drug: Drug;
  sources: Source[];
  onClose: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const tips = useTips();
  const used = useMemo(() => {
    const ids = new Set(drug.rules.flatMap((r) => r.sourceIds));
    return sources.filter((x) => ids.has(x.id));
  }, [drug, sources]);

  return (
    <Sheet
      visible={visible}
      title="Cómo usar esta ficha"
      subtitle={drug.name}
      icon="information-outline"
      onClose={onClose}
    >
      <View style={s.card}>
        {STEPS.map((step, i) => (
          <View key={step.title} style={[s.step, i > 0 && s.ruled]}>
            <View style={s.stepIcon}>
              <MaterialCommunityIcons name={step.icon} size={20} color={c.accent} />
            </View>
            <View style={s.flex}>
              <Text style={s.stepTitle}>{step.title}</Text>
              <Text style={s.stepText}>{step.text}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={s.section}>Fuentes de esta ficha</Text>
      <View style={s.card}>
        {used.map((src, i) => (
          <View key={src.id} style={[s.source, i > 0 && s.ruled]}>
            <MaterialCommunityIcons name="book-open-variant" size={16} color={c.muted} />
            <Text style={[s.flex, s.sourceText]}>
              {src.title}
              {src.year === undefined ? '' : ` (${src.year})`}
            </Text>
          </View>
        ))}
      </View>

      <Button
        label="Repetir la guía"
        onPress={() => {
          tips.reset();
          onClose();
        }}
      />
    </Sheet>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    card: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      paddingHorizontal: space.md,
    },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.border },
    step: { flexDirection: 'row', gap: space.md, paddingVertical: 12 },
    stepIcon: {
      width: 36,
      height: 36,
      borderRadius: radius.sm,
      backgroundColor: c.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepTitle: { fontFamily: family.bold, fontSize: 15, color: c.text },
    stepText: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    section: {
      fontFamily: family.bold,
      fontSize: type.title,
      color: c.text,
      marginTop: space.sm,
    },
    source: { flexDirection: 'row', gap: space.sm, paddingVertical: 10, alignItems: 'flex-start' },
    sourceText: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.text },
  });
}
