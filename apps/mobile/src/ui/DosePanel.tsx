import { sourcePriority, type Country, type Drug, type Source } from '@medapp/content-schema';
import { calculateDose, formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CLINICAL_DISCLAIMER, REASON_TEXT, WARNING_TEXT } from '../domain/messages';
import { ageToDays, parseWeight } from '../domain/patientInput';
import { Banner, Card, Chip, NumberField, ReviewBadge, SectionTitle } from './components';
import { colors, font, space } from './theme';

const UNIT_LABEL: Record<string, string> = {
  mL: 'mL',
  gota: 'gotas',
  tableta: 'tableta(s)',
  capsula: 'cápsula(s)',
  supositorio: 'supositorio(s)',
};

const COUNTRY_LABEL: Record<Country, string> = {
  PE: 'Perú',
  US: 'EE. UU.',
  ES: 'España',
  UK: 'Reino Unido',
  CA: 'Canadá',
  INT: 'Internacional',
};

const BASIS_LABEL = {
  'mg/kg/dose': 'mg/kg/dosis',
  'mg/kg/day': 'mg/kg/día',
  fixed_by_age: 'mg',
} as const;

type Choice = 'min' | 'usual' | 'max';

function parseInt0(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d{1,3}$/.test(t) ? Number(t) : null;
}

export function DosePanel({
  drug,
  decimalSeparator,
  sources,
}: {
  drug: Drug;
  decimalSeparator: '.' | ',';
  sources: Source[];
}) {
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const [ruleId, setRuleId] = useState(drug.rules[0]?.id ?? '');
  const rule = drug.rules.find((r) => r.id === ruleId) ?? drug.rules[0];
  const allowed = drug.presentations.filter(
    (p) => rule?.presentationIds === undefined || rule.presentationIds.includes(p.id),
  );
  const [presId, setPresId] = useState(allowed[0]?.id ?? '');
  const [choice, setChoice] = useState<Choice>('usual');
  const presentation = allowed.find((p) => p.id === presId) ?? allowed[0];

  // Datos del paciente: solo en memoria de esta pantalla, nunca se guardan.
  const [weightText, setWeightText] = useState('');
  const [yearsText, setYearsText] = useState('');
  const [monthsText, setMonthsText] = useState('');

  const weight = parseWeight(weightText);
  const years = parseInt0(yearsText);
  const months = parseInt0(monthsText);
  const hasAge = yearsText.trim() !== '' || monthsText.trim() !== '';
  const ageDays =
    years !== null && months !== null && months < 12 ? ageToDays(years, months) : null;

  const chosenValue =
    rule === undefined
      ? undefined
      : choice === 'min'
        ? rule.amountMin
        : choice === 'max'
          ? rule.amountMax
          : (rule.usual ?? rule.amountMin);

  const result = useMemo(() => {
    if (!rule || !presentation || !weight.ok || ageDays === null || !hasAge) return null;
    return calculateDose({
      rule,
      presentation,
      patient: { weightKg: weight.kg, ageDays },
      ...(chosenValue === undefined ? {} : { chosenMgPerKg: chosenValue }),
    });
  }, [rule, presentation, weight, ageDays, hasAge, chosenValue]);

  const orderedSources = (rule?.sourceIds ?? [])
    .map((id) => sources.find((x) => x.id === id))
    .filter((x): x is Source => x !== undefined)
    .sort((a, b) => sourcePriority(a.kind) - sourcePriority(b.kind));
  const sourceLabel = (src: Source) =>
    `${src.title}${src.year === undefined ? '' : ` (${src.year})`}`;

  const fittingRules =
    result?.status === 'not_calculable' && result.reason === 'age_out_of_rule' && ageDays !== null
      ? drug.rules.filter(
          (r) => ageDays >= r.ageMinDays && (r.ageMaxDays === undefined || ageDays <= r.ageMaxDays),
        )
      : [];

  if (!rule || !presentation) return <Banner tone="danger">Ficha incompleta.</Banner>;
  const unit = UNIT_LABEL[presentation.unit] ?? presentation.unit;

  return (
    <View>
      <ReviewBadge review={drug.review} />

      <Card>
        <SectionTitle>Indicación</SectionTitle>
        <View style={s.wrap}>
          {drug.rules.map((r) => (
            <Chip
              key={r.id}
              label={r.indication}
              selected={r.id === rule.id}
              onPress={() => {
                setRuleId(r.id);
                setChoice('usual');
                const nextAllowed = drug.presentations.filter(
                  (p) => r.presentationIds === undefined || r.presentationIds.includes(p.id),
                );
                if (!nextAllowed.some((p) => p.id === presId)) setPresId(nextAllowed[0]?.id ?? '');
              }}
            />
          ))}
        </View>
        <SectionTitle>Presentación</SectionTitle>
        <View style={s.wrap}>
          {allowed.map((p) => (
            <Chip
              key={p.id}
              label={p.label}
              selected={p.id === presentation.id}
              onPress={() => setPresId(p.id)}
            />
          ))}
        </View>
        {rule.amountMin !== rule.amountMax ? (
          <>
            <SectionTitle>Dosis dentro del rango de la ficha</SectionTitle>
            <View style={s.wrap}>
              <Chip
                label={`Mínima ${fmt(rule.amountMin)} ${BASIS_LABEL[rule.basis]}`}
                selected={choice === 'min'}
                onPress={() => setChoice('min')}
              />
              {rule.usual !== undefined &&
              rule.usual !== rule.amountMin &&
              rule.usual !== rule.amountMax ? (
                <Chip
                  label={`Habitual ${fmt(rule.usual)} ${BASIS_LABEL[rule.basis]}`}
                  selected={choice === 'usual'}
                  onPress={() => setChoice('usual')}
                />
              ) : null}
              <Chip
                label={`Máxima ${fmt(rule.amountMax)} ${BASIS_LABEL[rule.basis]}`}
                selected={choice === 'max' || (choice === 'usual' && rule.usual === rule.amountMax)}
                onPress={() => setChoice('max')}
              />
            </View>
          </>
        ) : null}
      </Card>

      <Card>
        <SectionTitle>Paciente</SectionTitle>
        <NumberField
          label="Peso en kilogramos"
          suffix="kg"
          value={weightText}
          onChangeText={setWeightText}
          placeholder="0"
        />
        <View style={s.row}>
          <NumberField
            label="Edad, años"
            suffix="años"
            value={yearsText}
            onChangeText={setYearsText}
            keyboardType="number-pad"
            placeholder="0"
          />
          <NumberField
            label="Edad, meses"
            suffix="meses"
            value={monthsText}
            onChangeText={setMonthsText}
            keyboardType="number-pad"
            placeholder="0"
          />
        </View>
        {weightText.trim() !== '' && !weight.ok ? (
          <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
        ) : null}
        {hasAge && ageDays === null ? (
          <Text style={s.error}>Revise la edad (meses de 0 a 11).</Text>
        ) : null}
      </Card>

      {result?.status === 'not_calculable' ? (
        <Banner tone="warning">
          {REASON_TEXT[result.reason]}
          {fittingRules.length > 0
            ? `\nPara esta edad: ${fittingRules.map((r) => r.indication).join(' · ')}.`
            : ''}
        </Banner>
      ) : null}

      {result?.status === 'ok' ? (
        <Card>
          <SectionTitle>Resultado</SectionTitle>
          <Text testID="result-mg" style={s.big}>
            {fmt(result.mgPerDose.chosen)} mg
          </Text>
          <Text testID="result-amount" style={s.amount}>
            {fmt(result.amount.value)} {unit}
          </Text>
          <Text style={s.body}>
            Cada {rule.intervalHours} h ({fmt(result.dosesPerDay)} tomas/día ·{' '}
            {fmt(result.mgPerDay)} mg/día)
          </Text>
          <Text style={s.muted}>
            Rango de la ficha: {fmt(result.mgPerDose.min)}–{fmt(result.mgPerDose.max)} mg por toma
          </Text>
          {rule.durationText ? <Text style={s.body}>Duración: {rule.durationText}</Text> : null}
          {result.warnings.map((w) => (
            <Banner key={w} tone="warning">
              {WARNING_TEXT[w]}
            </Banner>
          ))}
          <SectionTitle>Cálculo paso a paso</SectionTitle>
          {result.steps.map((st) => (
            <Text key={st.label} style={s.body}>
              {st.label}: {st.expression.replace(/\./g, decimalSeparator)} ={' '}
              {st.result.replace(/\./g, decimalSeparator)}
            </Text>
          ))}
          <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
        </Card>
      ) : null}

      <Card>
        <SectionTitle>Notas y fuentes</SectionTitle>
        {rule.notes ? <Text style={s.body}>{rule.notes}</Text> : null}
        {orderedSources.map((src, i) => (
          <Text key={src.id} style={i === 0 ? s.body : s.muted}>
            {i === 0 ? `Fuente principal: ${sourceLabel(src)}` : `• ${sourceLabel(src)}`}
          </Text>
        ))}
        {rule.countryNotes && rule.countryNotes.length > 0 ? (
          <>
            <SectionTitle>Diferencias por país</SectionTitle>
            {rule.countryNotes.map((n) => (
              <Text key={n.country + n.text} style={s.body}>
                {COUNTRY_LABEL[n.country]}: {n.text}
              </Text>
            ))}
          </>
        ) : null}
        {drug.warnings.map((w) => (
          <Text key={w} style={s.body}>
            ⚠ {w}
          </Text>
        ))}
        {drug.contraindications.map((c) => (
          <Text key={c} style={s.body}>
            ⛔ {c}
          </Text>
        ))}
      </Card>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
  row: { flexDirection: 'row', gap: space.md },
  error: { color: colors.danger, fontSize: font.body },
  big: { fontSize: font.big, fontWeight: '800', color: colors.text },
  amount: { fontSize: font.big, fontWeight: '800', color: colors.primary },
  body: { fontSize: font.body, color: colors.text },
  muted: { fontSize: font.small, color: colors.muted },
  disclaimer: {
    fontSize: font.small,
    color: colors.muted,
    fontStyle: 'italic',
    marginTop: space.sm,
  },
});
