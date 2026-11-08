import { useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from './components';
import { APP_NAME } from './StartScreen';
import { family, radius, space, useColors, type Palette } from './theme';

/** Bienvenida de tres pasos. La primera muestra un resultado real de la app (10 kg, FNME). */
export function Onboarding({ onDone }: { onDone: () => void }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [i, setI] = useState(0);
  const last = i === 2;

  return (
    <SafeAreaView style={s.screen}>
      <ScrollView contentContainerStyle={s.content}>
        <Text style={s.step}>{i + 1} de 3</Text>

        {i === 0 ? (
          <>
            <Image
              source={logo}
              style={s.logo}
              resizeMode="contain"
              accessibilityIgnoresInvertColors
            />
            <Text accessibilityRole="header" style={s.title}>
              {APP_NAME}
            </Text>
            <Text style={s.text}>
              Dosis pediátricas: la dosis por peso en mg y en mL, con la fuente que la respalda: el
              Formulario Nacional (DIGEMID), las normas del MINSA y las fichas de FDA y AEMPS.
            </Text>
            <View style={s.specimen}>
              <View style={s.specimenTop}>
                <Text style={s.rx}>Rp/</Text>
                <Text style={s.specimenDrug}>Paracetamol jarabe 120 mg/5 mL</Text>
              </View>
              <Text style={s.figure}>6.3 mL</Text>
              <Text style={s.specimenLine}>
                <Text style={s.strong}>150 mg</Text> por toma · vía oral cada 6 h
              </Text>
              <Text style={s.specimenNote}>Paciente de 10 kg · fuente principal: FNME</Text>
            </View>
          </>
        ) : null}

        {i === 1 ? (
          <>
            <Text accessibilityRole="header" style={s.title}>
              Elige, ingresa y lee
            </Text>
            <View style={s.lines}>
              <Line s={s} title="Elige" text="la indicación y la presentación que tienes a mano." />
              <Line s={s} title="Ingresa" text="el peso, en kg o lb, y la edad." />
              <Line
                s={s}
                title="Lee"
                text="los mL a indicar, los mg, la frecuencia y los topes. Debajo está el cálculo paso a paso y las diferencias por país."
              />
            </View>
          </>
        ) : null}

        {i === 2 ? (
          <>
            <Text accessibilityRole="header" style={s.title}>
              Para profesionales de la salud
            </Text>
            <Text style={s.text}>
              La app calcula; la decisión clínica es del médico tratante. Revisa siempre la
              presentación que tienes en la mano antes de indicar.
            </Text>
            <Text style={s.text}>
              No se guardan nombres de pacientes. El historial de cálculos (fármaco, dosis, peso y
              edad) queda solo en tu teléfono y lo puedes borrar cuando quieras.
            </Text>
          </>
        ) : null}
      </ScrollView>

      <View style={s.footer}>
        {last ? (
          <Button label="Soy profesional de la salud y acepto" onPress={onDone} />
        ) : (
          <Button label="Siguiente" onPress={() => setI(i + 1)} />
        )}
        {i > 0 ? <Button variant="quiet" label="Atrás" onPress={() => setI(i - 1)} /> : null}
      </View>
    </SafeAreaView>
  );
}

type Styles = ReturnType<typeof makeStyles>;

function Line({ s, title, text }: { s: Styles; title: string; text: string }) {
  return (
    <Text style={s.text}>
      <Text style={s.strong}>{title} </Text>
      {text}
    </Text>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: c.ground },
    content: { paddingHorizontal: space.xl, paddingTop: 56, paddingBottom: space.xl, gap: 20 },
    step: { fontFamily: family.medium, fontSize: 14, color: c.muted },
    title: { fontFamily: family.black, fontSize: 40, lineHeight: 44, color: c.text },
    logo: { width: 112, height: 112, marginBottom: 8 },
    text: { fontFamily: family.regular, fontSize: 17, lineHeight: 26, color: c.text },
    strong: { fontFamily: family.bold },
    lines: { gap: 14 },
    specimen: {
      marginTop: space.sm,
      backgroundColor: c.accentSoft,
      borderRadius: radius.lg,
      padding: 20,
      gap: 6,
    },
    specimenTop: { flexDirection: 'row', alignItems: 'baseline', gap: 10 },
    rx: { fontFamily: family.black, fontSize: 22, color: c.accent },
    specimenDrug: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    figure: { fontFamily: family.black, fontSize: 40, lineHeight: 46, color: c.accent },
    specimenLine: { fontFamily: family.regular, fontSize: 16, color: c.text },
    specimenNote: { fontFamily: family.regular, fontSize: 13, color: c.muted, marginTop: 4 },
    footer: { paddingHorizontal: space.xl, paddingBottom: space.lg, gap: space.xs },
  });
}
