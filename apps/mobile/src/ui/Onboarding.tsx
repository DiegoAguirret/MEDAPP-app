import Ionicons from '@expo/vector-icons/Ionicons';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from './components';
import { font, radius, space, useColors, type Palette } from './theme';

const SLIDES = [
  {
    icon: 'medkit-outline',
    title: 'Dosis pediátricas con fuentes',
    text: 'Cada ficha cita su fuente principal (FNME de DIGEMID, MINSA, FDA, AEMPS, guías) y muestra las diferencias por país.',
  },
  {
    icon: 'calculator-outline',
    title: 'Elige, ingresa y calcula',
    text: 'Elige la indicación y la presentación, ingresa peso y edad: verás mg, mL, frecuencia, topes y el cálculo paso a paso.',
  },
  {
    icon: 'shield-checkmark-outline',
    title: 'Herramienta para profesionales',
    text: 'La decisión clínica es responsabilidad del médico tratante. La app no guarda datos de pacientes.',
  },
] as const;

export function Onboarding({ onDone }: { onDone: () => void }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [i, setI] = useState(0);
  const slide = SLIDES[i] ?? SLIDES[0];
  const last = i === SLIDES.length - 1;
  return (
    <View style={s.screen}>
      <View style={s.iconWrap}>
        <Ionicons name={slide.icon} size={64} color={c.primary} />
      </View>
      <Text style={s.title}>{slide.title}</Text>
      <Text style={s.text}>{slide.text}</Text>
      <View style={s.dots}>
        {SLIDES.map((sl, k) => (
          <View key={sl.title} style={[s.dot, k === i && s.dotOn]} />
        ))}
      </View>
      {last ? (
        <Button label="Soy profesional de la salud y acepto" onPress={onDone} />
      ) : (
        <Pressable accessibilityRole="button" onPress={() => setI(i + 1)} style={s.next}>
          <Text style={s.nextText}>Siguiente</Text>
        </Pressable>
      )}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      padding: space.xl,
      justifyContent: 'center',
      gap: space.lg,
      backgroundColor: c.bg,
    },
    iconWrap: {
      alignSelf: 'center',
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: c.primarySoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { fontSize: 26, fontWeight: '900', color: c.text, textAlign: 'center' },
    text: { fontSize: font.body, color: c.muted, textAlign: 'center', lineHeight: 24 },
    dots: { flexDirection: 'row', justifyContent: 'center', gap: space.sm },
    dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: c.border },
    dotOn: { width: 24, backgroundColor: c.primary },
    next: {
      minHeight: 52,
      borderRadius: radius.sm,
      backgroundColor: c.primarySoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    nextText: { color: c.primary, fontWeight: '800', fontSize: font.body },
  });
}
