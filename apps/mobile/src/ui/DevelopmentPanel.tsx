import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { LayoutAnimation, Pressable, Share, StyleSheet, Text, View } from 'react-native';
import {
  correctedAgeDays,
  DEVELOPMENT_SOURCE,
  evaluateMilestones,
  PAUTAS,
  pautaForAgeDays,
  type Milestone,
  type Pauta,
} from '../domain/development';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Card, NumberField, SectionTitle } from './components';
import { family, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

const DAYS_PER_MONTH = 30.4375;
const AREA_ICON: Record<Milestone['area'], keyof typeof MaterialCommunityIcons.glyphMap> = {
  'Motor grueso': 'run',
  'Motor fino': 'hand-back-right-outline',
  Social: 'emoticon-happy-outline',
  Cognitivo: 'head-lightbulb-outline',
  Habla: 'chat-processing-outline',
};

function int(text: string): number | null {
  const t = text.trim();
  return /^\d+$/.test(t) ? Number(t) : null;
}

function ageText(days: number): string {
  const months = Math.floor((days + 1) / DAYS_PER_MONTH);
  const rest = Math.max(Math.round(days - months * DAYS_PER_MONTH), 0);
  return `${months} ${months === 1 ? 'mes' : 'meses'}${rest > 0 ? ` y ${rest} ${rest === 1 ? 'día' : 'días'}` : ''}`;
}

/**
 * Vigilancia del neurodesarrollo de 0 a 36 meses (NTS 238, Anexo 10): edad (corregida en
 * prematuros), pauta de edad, hitos de la pauta y de las anteriores con Sí/No, e interpretación.
 */
export function DevelopmentPanel() {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [monthsText, setMonthsText] = useState('');
  const [daysText, setDaysText] = useState('');
  const [preterm, setPreterm] = useState(false);
  const [gaText, setGaText] = useState('');
  const [chosen, setChosen] = useState<Pauta['id'] | null>(null);
  const [answers, setAnswers] = useState<Record<string, boolean | undefined>>({});
  const [showPrev, setShowPrev] = useState(false);

  const months = int(monthsText);
  const days = daysText.trim() === '' ? 0 : int(daysText);
  const chrono =
    months !== null && days !== null ? Math.round(months * DAYS_PER_MONTH + days) : null;
  const ga = int(gaText);
  const corrected =
    chrono !== null && preterm && ga !== null && ga >= 22 && ga < 37
      ? correctedAgeDays(chrono, ga)
      : null;
  const ageDays = corrected ?? chrono;
  const suggested = ageDays !== null ? pautaForAgeDays(ageDays) : null;
  const pautaId = chosen ?? suggested?.id ?? null;
  const idx = PAUTAS.findIndex((p) => p.id === pautaId);
  const pauta = idx >= 0 ? PAUTAS[idx] : undefined;
  const previous = idx > 0 ? PAUTAS.slice(0, idx).flatMap((p) => p.milestones) : [];
  const all = pauta ? [...previous, ...pauta.milestones] : [];
  const answered = all.filter((mi) => answers[mi.id] !== undefined).length;
  const failed = all.filter((mi) => answers[mi.id] === false);
  const complete = all.length > 0 && answered === all.length;
  const result = complete ? evaluateMilestones(failed.length) : null;
  const prevDone = previous.filter((mi) => answers[mi.id] !== undefined).length;

  const set = (id: string, v: boolean) => setAnswers((a) => ({ ...a, [id]: v }));
  const tone = result
    ? { ok: [c.ok, c.okBg], warning: [c.warning, c.warningBg], danger: [c.danger, c.dangerBg] }[
        result.tone
      ]
    : null;

  const report = () =>
    [
      `Vigilancia del desarrollo (NTS 238): pauta ${pauta?.label ?? ''}`,
      ageDays !== null
        ? `Edad${corrected !== null ? ' corregida' : ''}: ${ageText(ageDays)}`
        : null,
      result ? `Resultado: ${result.label}` : null,
      ...failed.map((mi) => `· No logra: ${mi.name} (${mi.area})`),
      result ? result.action : null,
    ]
      .filter((x): x is string => x !== null)
      .join('\n');

  const row = (mi: Milestone) => {
    const v = answers[mi.id];
    return (
      <View key={mi.id} style={s.item}>
        <View style={s.itemHead}>
          <View style={s.areaChip}>
            <MaterialCommunityIcons name={AREA_ICON[mi.area]} size={14} color={c.accent} />
            <Text style={s.areaText}>{mi.area}</Text>
          </View>
        </View>
        <Text style={s.itemName}>{mi.name}</Text>
        <Text style={s.itemText}>{mi.text}</Text>
        <View style={s.yesNo} accessibilityRole="radiogroup" accessibilityLabel={mi.name}>
          {([true, false] as const).map((val) => {
            const on = v === val;
            return (
              <Pressable
                key={String(val)}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                accessibilityLabel={`${val ? 'Sí' : 'No'}, ${mi.name} (${mi.area})`}
                onPress={() => set(mi.id, val)}
                style={({ pressed }) => [
                  s.choice,
                  on && (val ? s.choiceYes : s.choiceNo),
                  pressed && { opacity: 0.8 },
                ]}
              >
                <MaterialCommunityIcons
                  name={val ? 'check' : 'close'}
                  size={18}
                  color={on ? c.surface : c.muted}
                />
                <Text style={[s.choiceText, on && { color: c.surface }]}>
                  {val ? 'Sí lo hace' : 'No lo hace'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View>
      <Card>
        <SectionTitle>Edad</SectionTitle>
        <View style={s.cols}>
          <View style={s.col}>
            <NumberField
              label="Edad en meses"
              caption="Meses"
              keyboardType="number-pad"
              inputMode="numeric"
              value={monthsText}
              onChangeText={(t) => {
                setMonthsText(t);
                setChosen(null);
              }}
              placeholder="0"
            />
          </View>
          <View style={s.col}>
            <NumberField
              label="Edad en días"
              caption="Días"
              keyboardType="number-pad"
              inputMode="numeric"
              value={daysText}
              onChangeText={(t) => {
                setDaysText(t);
                setChosen(null);
              }}
              placeholder="0"
            />
          </View>
        </View>
        <Pressable
          accessibilityRole="switch"
          accessibilityLabel="Nació prematuro"
          accessibilityState={{ checked: preterm }}
          onPress={() => {
            setPreterm((p) => !p);
            setChosen(null);
          }}
          style={s.switchRow}
        >
          <MaterialCommunityIcons
            name={preterm ? 'checkbox-marked' : 'checkbox-blank-outline'}
            size={24}
            color={preterm ? c.accent : c.muted}
          />
          <Text style={s.switchText}>Nació prematuro (menos de 37 semanas)</Text>
        </Pressable>
        {preterm ? (
          <NumberField
            label="Edad gestacional al nacer en semanas"
            caption="Edad gestacional al nacer"
            suffix="sem"
            keyboardType="number-pad"
            inputMode="numeric"
            value={gaText}
            onChangeText={(t) => {
              setGaText(t);
              setChosen(null);
            }}
            placeholder="0"
          />
        ) : null}
        {corrected !== null ? (
          <Text style={s.hint}>
            Edad corregida: {ageText(corrected)} (se usa hasta los 2 años: se restan{' '}
            {(40 - (ga ?? 40)) * 7} días).
          </Text>
        ) : null}
        {ageDays !== null && suggested === null ? (
          <Text style={s.hint}>
            Este instrumento es para niños hasta los 36 meses. Desde los 4 años la NTS 238 usa la
            lista de habilidades y conductas por edad.
          </Text>
        ) : null}
      </Card>

      <Card>
        <SectionTitle>Pauta de edad</SectionTitle>
        <View style={s.pills} accessibilityRole="radiogroup" accessibilityLabel="Pauta de edad">
          {PAUTAS.map((p) => {
            const on = p.id === pautaId;
            return (
              <Pressable
                key={p.id}
                accessibilityRole="radio"
                accessibilityLabel={`Pauta ${p.label}`}
                accessibilityState={{ selected: on }}
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                  setChosen(p.id);
                }}
                style={[s.pill, on && s.pillOn]}
              >
                <Text style={[s.pillText, on && s.pillTextOn]}>{p.label}</Text>
              </Pressable>
            );
          })}
        </View>
        {pauta ? <Text style={s.hint}>Se aplica: {pauta.ages.toLowerCase()}.</Text> : null}
      </Card>

      {pauta ? (
        <>
          {result && tone ? (
            <View style={[s.result, { backgroundColor: tone[1] }]}>
              <Text style={[s.resultLabel, { color: tone[0] }]}>{result.label}</Text>
              <Text style={s.resultAction}>{result.action}</Text>
              {failed.length > 0 ? (
                <Text style={s.resultAction}>
                  No logra: {failed.map((mi) => `${mi.name} (${mi.area.toLowerCase()})`).join(', ')}
                  .
                </Text>
              ) : null}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Compartir resultado"
                onPress={() => void Share.share({ message: report() })}
                style={({ pressed }) => [s.share, pressed && { opacity: 0.8 }]}
              >
                <MaterialCommunityIcons name="share-variant-outline" size={18} color={c.onInk} />
                <Text style={s.shareText}>Compartir resultado</Text>
              </Pressable>
            </View>
          ) : (
            <Text style={s.progress}>
              {answered} de {all.length} hitos evaluados
            </Text>
          )}

          {previous.length > 0 ? (
            <Card>
              <SectionTitle>Pautas anteriores</SectionTitle>
              <Text style={s.hint}>
                La norma pide comprobar también todos los hitos de las pautas anteriores ({prevDone}{' '}
                de {previous.length} evaluados).
              </Text>
              <View style={s.prevActions}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Marcar las pautas anteriores como logradas"
                  onPress={() =>
                    setAnswers((a) => ({
                      ...a,
                      ...Object.fromEntries(previous.map((mi) => [mi.id, true])),
                    }))
                  }
                  style={({ pressed }) => [s.quiet, pressed && { opacity: 0.7 }]}
                >
                  <MaterialCommunityIcons name="check-all" size={18} color={c.accent} />
                  <Text style={s.quietText}>Todas logradas</Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ expanded: showPrev }}
                  onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    setShowPrev((v) => !v);
                  }}
                  style={({ pressed }) => [s.quiet, pressed && { opacity: 0.7 }]}
                >
                  <MaterialCommunityIcons
                    name={showPrev ? 'chevron-up' : 'chevron-down'}
                    size={18}
                    color={c.accent}
                  />
                  <Text style={s.quietText}>{showPrev ? 'Ocultar' : 'Revisar una por una'}</Text>
                </Pressable>
              </View>
              {showPrev ? previous.map(row) : null}
            </Card>
          ) : null}

          <Card>
            <SectionTitle>Hitos de la pauta: {pauta.label}</SectionTitle>
            <Text style={s.hint}>
              Observa directamente al niño o niña; si no es posible, pregunta a la madre, padre o
              cuidador. Si la información no es confiable, el hito se considera no logrado.
            </Text>
            {pauta.milestones.map(row)}
          </Card>
        </>
      ) : (
        <View style={s.empty}>
          <MaterialCommunityIcons name="human-child" size={28} color={c.accent} />
          <Text style={s.emptyText}>
            Escribe la edad o elige una pauta para ver los hitos que debe lograr el niño o niña.
          </Text>
        </View>
      )}

      <Card>
        <SectionTitle>Fuente</SectionTitle>
        <Text style={s.source}>{DEVELOPMENT_SOURCE}</Text>
      </Card>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    cols: { flexDirection: 'row', gap: space.sm },
    col: { flex: 1 },
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
    switchRow: { flexDirection: 'row', alignItems: 'center', gap: 10, minHeight: MIN_TOUCH },
    switchText: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    pills: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    pill: {
      minHeight: 40,
      paddingHorizontal: 14,
      justifyContent: 'center',
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.surface,
    },
    pillOn: { backgroundColor: c.text, borderColor: c.text },
    pillText: { fontFamily: family.bold, fontSize: 14, color: c.text },
    pillTextOn: { color: c.surface },
    progress: {
      fontFamily: family.bold,
      fontSize: 13,
      letterSpacing: 0.5,
      color: c.muted,
      marginBottom: space.sm,
    },
    item: {
      gap: 6,
      paddingVertical: space.md,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.border,
    },
    itemHead: { flexDirection: 'row' },
    areaChip: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: radius.pill,
      backgroundColor: c.accentSoft,
    },
    areaText: { fontFamily: family.bold, fontSize: 12, color: c.accent },
    itemName: { fontFamily: family.bold, fontSize: 17, color: c.text },
    itemText: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.text },
    yesNo: { flexDirection: 'row', gap: space.sm, marginTop: 4 },
    choice: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minHeight: MIN_TOUCH,
      borderRadius: radius.md,
      borderWidth: 1.5,
      borderColor: c.border,
      backgroundColor: c.ground,
    },
    choiceYes: { backgroundColor: c.ok, borderColor: c.ok },
    choiceNo: { backgroundColor: c.danger, borderColor: c.danger },
    choiceText: { fontFamily: family.bold, fontSize: 15, color: c.text },
    result: { borderRadius: radius.lg, padding: space.lg, gap: space.sm, marginBottom: space.lg },
    resultLabel: { fontFamily: family.black, fontSize: 20, lineHeight: 26 },
    resultAction: { fontFamily: family.regular, fontSize: 15, lineHeight: 21, color: c.text },
    share: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: MIN_TOUCH,
      borderRadius: radius.pill,
      backgroundColor: c.ink,
      marginTop: 4,
    },
    shareText: { fontFamily: family.bold, fontSize: 15, color: c.onInk },
    prevActions: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    quiet: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      minHeight: MIN_TOUCH,
      paddingHorizontal: 12,
      borderRadius: radius.pill,
      backgroundColor: c.accentSoft,
    },
    quietText: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    empty: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      padding: space.lg,
      borderRadius: radius.lg,
      backgroundColor: c.accentSoft,
      marginBottom: space.lg,
    },
    emptyText: { flex: 1, fontFamily: family.medium, fontSize: 15, lineHeight: 21, color: c.text },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
