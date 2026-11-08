import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo, useState } from 'react';
import { Pressable, Share, StyleSheet, Text, View } from 'react-native';
import {
  ageInDays,
  assessGrowth,
  type IndicatorResult,
  type Position,
  type Sex,
  type Tone,
} from '../domain/growth/growth';
import { CLINICAL_DISCLAIMER } from '../domain/messages';
import { Card, Chip, Collapsible, NumberField, SectionTitle } from './components';
import { family, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

const SOURCES = [
  'NTS N.° 238-MINSA/DGIESP-2025, Norma Técnica de Salud para el Control de Crecimiento y Desarrollo de la Niña y el Niño (RM N.° 682-2025-MINSA), Tablas 2 y 3.',
  'OMS. Patrones de Crecimiento Infantil (2006), menores de 5 años.',
  'OMS. Referencia de Crecimiento 2007, 5 a 19 años.',
];

/** Número positivo escrito con coma o punto; undefined si está vacío o no es válido. */
function num(text: string): number | undefined {
  const t = text.trim();
  if (!/^\d+(?:[.,]\d+)?$/.test(t)) return undefined;
  const n = Number(t.replace(',', '.'));
  return n > 0 ? n : undefined;
}

function int(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d+$/.test(t) ? Number(t) : null;
}

export function GrowthPanel({ decimalSeparator }: { decimalSeparator: '.' | ',' }) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const [sex, setSex] = useState<Sex | null>(null);
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [position, setPosition] = useState<Position | null>(null);
  const [head, setHead] = useState('');
  const [arm, setArm] = useState('');

  const dec = (n: number, digits: number) => n.toFixed(digits).replace('.', decimalSeparator);
  const y = int(years);
  const m = int(months);
  const d = int(days);
  const hasAge = [years, months, days].some((t) => t.trim() !== '');
  const ageDays =
    hasAge && y !== null && m !== null && d !== null
      ? ageInDays({ years: y, months: m, days: d })
      : null;
  const ageError = hasAge && (ageDays === null || ageDays > 19 * 365.25);
  const validAge = ageDays !== null && !ageError ? ageDays : null;
  const under5 = validAge !== null && validAge / 30.4375 < 60;
  const defaultPosition: Position = validAge !== null && validAge < 731 ? 'lying' : 'standing';
  const pos = position ?? defaultPosition;

  const results =
    sex && validAge !== null
      ? assessGrowth({
          sex,
          ageDays: validAge,
          weightKg: num(weight),
          lengthCm: num(length),
          position: under5 ? pos : undefined,
          headCm: under5 ? num(head) : undefined,
          armCm: under5 ? num(arm) : undefined,
        })
      : [];

  const zText = (z: number) => `${z > 0 ? '+' : z < 0 ? '−' : ''}${dec(Math.abs(z), 2)}`;
  const pText = (p: number) => (p < 1 || p > 99 ? dec(p, 1) : String(Math.round(p)));
  const toneColors = (t: Tone) =>
    ({
      ok: { fg: c.ok, bg: c.okBg },
      warning: { fg: c.warning, bg: c.warningBg },
      danger: { fg: c.danger, bg: c.dangerBg },
    })[t];

  const report = () => {
    const ageLabel = [
      y ? `${y} ${y === 1 ? 'año' : 'años'}` : null,
      m ? `${m} ${m === 1 ? 'mes' : 'meses'}` : null,
      d ? `${d} ${d === 1 ? 'día' : 'días'}` : null,
    ]
      .filter(Boolean)
      .join(', ');
    return [
      `Valoración del crecimiento (${sex === 'male' ? 'niño' : 'niña'}, ${ageLabel || '0 días'})`,
      ...results.map(
        (r) =>
          `· ${r.label}: ${dec(r.value, 1)} ${r.unit}, z ${zText(r.z)}, P${pText(r.percentile)}${r.nts ? ` — ${r.nts.label}` : ''}`,
      ),
      'Referencia: OMS 2006/2007; clasificación NTS N.° 238-MINSA/DGIESP-2025.',
    ].join('\n');
  };

  return (
    <View>
      <Card>
        <SectionTitle>Paciente</SectionTitle>
        <View style={s.row} accessibilityRole="radiogroup" accessibilityLabel="Sexo">
          <Chip label="Niño" selected={sex === 'male'} onPress={() => setSex('male')} />
          <Chip label="Niña" selected={sex === 'female'} onPress={() => setSex('female')} />
        </View>
        <View style={s.cols}>
          <View style={s.col}>
            <NumberField
              label="Edad en años"
              caption="Años"
              keyboardType="number-pad"
              inputMode="numeric"
              value={years}
              onChangeText={setYears}
              placeholder="0"
            />
          </View>
          <View style={s.col}>
            <NumberField
              label="Edad en meses"
              caption="Meses"
              keyboardType="number-pad"
              inputMode="numeric"
              value={months}
              onChangeText={setMonths}
              placeholder="0"
            />
          </View>
          <View style={s.col}>
            <NumberField
              label="Edad en días"
              caption="Días"
              keyboardType="number-pad"
              inputMode="numeric"
              value={days}
              onChangeText={setDays}
              placeholder="0"
            />
          </View>
        </View>
        {ageError ? (
          <Text style={s.error}>Escribe la edad en números enteros, hasta 19 años.</Text>
        ) : null}
      </Card>

      <Card>
        <SectionTitle>Medidas</SectionTitle>
        <NumberField
          label="Peso en kilogramos"
          caption="Peso"
          suffix="kg"
          value={weight}
          onChangeText={setWeight}
          placeholder="0"
        />
        <NumberField
          label="Longitud o talla en centímetros"
          caption={under5 ? 'Longitud o talla' : 'Talla'}
          suffix="cm"
          value={length}
          onChangeText={setLength}
          placeholder="0"
        />
        {under5 ? (
          <>
            <Text style={s.hint}>¿Cómo se midió?</Text>
            <View style={s.row} accessibilityRole="radiogroup" accessibilityLabel="Posición">
              <Chip
                label="Acostado"
                selected={pos === 'lying'}
                onPress={() => setPosition('lying')}
              />
              <Chip
                label="De pie"
                selected={pos === 'standing'}
                onPress={() => setPosition('standing')}
              />
            </View>
            <Text style={s.hint}>
              Antes de los 2 años se mide acostado (longitud) y desde los 2 años, de pie (talla). Si
              se midió de otra forma, la app corrige 0,7 cm como indica la OMS.
            </Text>
            <NumberField
              label="Perímetro cefálico en centímetros"
              caption="Perímetro cefálico (opcional)"
              suffix="cm"
              value={head}
              onChangeText={setHead}
              placeholder="0"
            />
            <NumberField
              label="Perímetro braquial en centímetros"
              caption="Perímetro braquial (opcional, desde los 3 meses)"
              suffix="cm"
              value={arm}
              onChangeText={setArm}
              placeholder="0"
            />
          </>
        ) : null}
      </Card>

      {results.length === 0 ? (
        <View style={s.empty}>
          <MaterialCommunityIcons name="chart-bell-curve-cumulative" size={28} color={c.accent} />
          <Text style={s.emptyText}>
            Elige el sexo, escribe la edad y al menos una medida para ver el puntaje z, el percentil
            y la clasificación de la NTS 238.
          </Text>
        </View>
      ) : (
        <View style={s.results}>
          {results.map((r) => (
            <ResultCard
              key={r.id}
              r={r}
              s={s}
              c={c}
              zText={zText}
              pText={pText}
              dec={dec}
              tone={r.nts ? toneColors(r.nts.tone) : null}
            />
          ))}
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
      )}

      <Collapsible icon="book-open-variant" title="Fuentes">
        {SOURCES.map((src) => (
          <Text key={src} style={s.source}>
            {src}
          </Text>
        ))}
      </Collapsible>
      <Text style={s.hint}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function ResultCard({
  r,
  s,
  c,
  zText,
  pText,
  dec,
  tone,
}: {
  r: IndicatorResult;
  s: ReturnType<typeof makeStyles>;
  c: Palette;
  zText: (z: number) => string;
  pText: (p: number) => string;
  dec: (n: number, digits: number) => string;
  tone: { fg: string; bg: string } | null;
}) {
  // Marcador en la barra de −4 a +4 DE.
  const pos = Math.min(Math.max((r.z + 4) / 8, 0), 1);
  return (
    <View style={s.card}>
      <View style={s.cardHead}>
        <Text style={s.cardTitle}>{r.label}</Text>
        <Text style={s.ref}>{r.reference}</Text>
      </View>
      <Text style={s.value}>
        {dec(r.value, 1)} {r.unit}
      </Text>
      <View style={s.figures}>
        <View>
          <Text style={s.figLabel}>Puntaje z</Text>
          <Text style={s.z}>{zText(r.z)}</Text>
        </View>
        <View>
          <Text style={s.figLabel}>Percentil</Text>
          <Text style={s.p}>{pText(r.percentile)}</Text>
        </View>
        {r.nts && tone ? (
          <View style={[s.badge, { backgroundColor: tone.bg }]}>
            <Text style={[s.badgeText, { color: tone.fg }]}>{r.nts.label}</Text>
          </View>
        ) : null}
      </View>
      <View
        style={s.gauge}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        <View style={[s.zone, { flex: 1, backgroundColor: c.dangerBg }]} />
        <View style={[s.zone, { flex: 1, backgroundColor: c.warningBg }]} />
        <View style={[s.zone, { flex: 4, backgroundColor: c.okBg }]} />
        <View style={[s.zone, { flex: 1, backgroundColor: c.warningBg }]} />
        <View style={[s.zone, { flex: 1, backgroundColor: c.dangerBg }]} />
        <View
          style={[s.marker, { left: `${pos * 100}%`, backgroundColor: tone?.fg ?? c.accent }]}
        />
      </View>
      <View
        style={s.ticks}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {[-3, -2, 0, 2, 3].map((k) => (
          <Text key={k} style={[s.tick, { left: `${((k + 4) / 8) * 100}%` }]}>
            {k > 0 ? `+${k}` : k < 0 ? `−${-k}` : '0'}
          </Text>
        ))}
      </View>
      {r.note ? <Text style={s.hint}>{r.note}</Text> : null}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    row: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    cols: { flexDirection: 'row', gap: space.sm },
    col: { flex: 1 },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
    hint: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
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
    results: { gap: space.md, marginBottom: space.lg },
    card: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.lg,
      gap: space.sm,
    },
    cardHead: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
    },
    cardTitle: { flex: 1, fontFamily: family.bold, fontSize: 17, color: c.text },
    ref: {
      fontFamily: family.medium,
      fontSize: 12,
      color: c.muted,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: radius.pill,
      backgroundColor: c.raised,
      overflow: 'hidden',
    },
    value: { fontFamily: family.medium, fontSize: 14, color: c.muted },
    figures: { flexDirection: 'row', alignItems: 'flex-end', gap: space.xl, flexWrap: 'wrap' },
    figLabel: { fontFamily: family.medium, fontSize: 12, color: c.muted },
    z: {
      fontFamily: family.black,
      fontSize: 34,
      lineHeight: 40,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    p: {
      fontFamily: family.bold,
      fontSize: 24,
      lineHeight: 40,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    badge: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: radius.pill,
      marginBottom: 6,
    },
    badgeText: { fontFamily: family.bold, fontSize: 15 },
    gauge: {
      flexDirection: 'row',
      height: 10,
      borderRadius: radius.pill,
      overflow: 'visible',
      marginTop: 4,
    },
    zone: { height: 10 },
    marker: {
      position: 'absolute',
      top: -4,
      width: 6,
      height: 18,
      marginLeft: -3,
      borderRadius: 3,
      borderWidth: 1.5,
      borderColor: c.surface,
    },
    ticks: { height: 16 },
    tick: {
      position: 'absolute',
      width: 28,
      marginLeft: -14,
      fontFamily: family.medium,
      fontSize: 11,
      color: c.muted,
      textAlign: 'center',
    },
    share: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      minHeight: MIN_TOUCH,
      borderRadius: radius.pill,
      backgroundColor: c.ink,
    },
    shareText: { fontFamily: family.bold, fontSize: 15, color: c.onInk },
    source: { fontFamily: family.regular, fontSize: 13, lineHeight: 19, color: c.muted },
  });
}
