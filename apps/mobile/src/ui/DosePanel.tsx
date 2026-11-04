import {
  sourcePriority,
  type Country,
  type DoseRule,
  type Drug,
  type Presentation,
  type Route,
  type Source,
} from '@medapp/content-schema';
import { calculateDose, formatClinical } from '@medapp/dose-engine';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { customPresentation } from '../domain/custom';
import { CLINICAL_DISCLAIMER, REASON_TEXT, WARNING_TEXT } from '../domain/messages';
import { ageToDays, parseWeight } from '../domain/patientInput';
import {
  Banner,
  Card,
  Chip,
  Collapsible,
  NumberField,
  Pill,
  ReviewBadge,
  SectionTitle,
  Segmented,
} from './components';
import { font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

const COUNTRY_LABEL: Record<Country, string> = {
  PE: 'Perú',
  US: 'EE. UU.',
  ES: 'España',
  UK: 'Reino Unido',
  CA: 'Canadá',
  INT: 'Internacional',
};
const ROUTE_LABEL: Record<Route, string> = {
  VO: 'Oral',
  IV: 'IV',
  IM: 'IM',
  IR: 'Rectal',
  SL: 'Sublingual',
  INH: 'Inhalada',
};
const BASIS_LABEL = {
  'mg/kg/dose': 'mg/kg/dosis',
  'mg/kg/day': 'mg/kg/día',
  fixed_by_age: 'mg',
} as const;
const UNIT_LABEL: Record<string, string> = {
  mL: 'mL',
  gota: 'gotas',
  tableta: 'tableta(s)',
  capsula: 'cápsula(s)',
  supositorio: 'supositorio(s)',
};
const FORM_LABEL: Record<Presentation['form'], string> = {
  suspension: 'Suspensión',
  jarabe: 'Jarabe',
  gotas: 'Gotas',
  tableta: 'Tableta',
  capsula: 'Cápsula',
  supositorio: 'Supositorio',
  ampolla: 'Ampolla',
};

type Choice = 'min' | 'usual' | 'max';
const CUSTOM_ID = 'personalizada';

function parseInt0(text: string): number | null {
  const t = text.trim();
  if (t === '') return 0;
  return /^\d{1,4}$/.test(t) ? Number(t) : null;
}

function rangeText(rule: DoseRule, fmt: (n: number) => string): string {
  const unit = BASIS_LABEL[rule.basis];
  return rule.amountMin === rule.amountMax
    ? `${fmt(rule.amountMin)} ${unit}`
    : `${fmt(rule.amountMin)}–${fmt(rule.amountMax)} ${unit}`;
}

/** La concentración personalizada no figura en la lista de la ficha: se quita esa restricción. */
function withoutPresentationLimit(rule: DoseRule): DoseRule {
  const copy: DoseRule = { ...rule };
  delete copy.presentationIds;
  return copy;
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
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);

  // Vía e indicación
  const routes = [...new Set(drug.rules.map((r) => r.route))];
  const [route, setRoute] = useState<Route>(routes[0] ?? 'VO');
  const rulesForRoute = drug.rules.filter((r) => r.route === route);
  const [ruleId, setRuleId] = useState(rulesForRoute[0]?.id ?? '');
  const rule = rulesForRoute.find((r) => r.id === ruleId) ?? rulesForRoute[0];
  const ruleIndex = rule ? rulesForRoute.indexOf(rule) : 0;
  const [pickingRule, setPickingRule] = useState(false);
  const [choice, setChoice] = useState<Choice>('usual');

  // Presentación (incluida la concentración personalizada)
  const allowed = drug.presentations.filter(
    (p) => rule?.presentationIds === undefined || rule.presentationIds.includes(p.id),
  );
  const [presId, setPresId] = useState(allowed[0]?.id ?? '');
  const [customMg, setCustomMg] = useState('');
  const [customMl, setCustomMl] = useState('');
  const custom = presId === CUSTOM_ID ? customPresentation(customMg, customMl) : null;
  const presentation =
    presId === CUSTOM_ID ? custom : (allowed.find((p) => p.id === presId) ?? allowed[0]);

  // Paciente: solo en memoria de esta pantalla, nunca se guarda.
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lb'>('kg');
  const [weightText, setWeightText] = useState('');
  const [ageMode, setAgeMode] = useState<'ym' | 'd'>('ym');
  const [yearsText, setYearsText] = useState('');
  const [monthsText, setMonthsText] = useState('');
  const [daysText, setDaysText] = useState('');

  const weight = parseWeight(weightText, weightUnit);
  let ageDays: number | null;
  let hasAge: boolean;
  if (ageMode === 'd') {
    hasAge = daysText.trim() !== '';
    ageDays = parseInt0(daysText);
  } else {
    hasAge = yearsText.trim() !== '' || monthsText.trim() !== '';
    const y = parseInt0(yearsText);
    const m = parseInt0(monthsText);
    ageDays = y !== null && m !== null && m < 12 ? ageToDays(y, m) : null;
  }

  const chosenValue = !rule
    ? undefined
    : choice === 'min'
      ? rule.amountMin
      : choice === 'max'
        ? rule.amountMax
        : (rule.usual ?? rule.amountMin);

  const weightKg = weight.ok ? weight.kg : null;
  const result = useMemo(() => {
    if (!rule || !presentation || weightKg === null || ageDays === null || !hasAge) return null;
    return calculateDose({
      rule: presentation.id === CUSTOM_ID ? withoutPresentationLimit(rule) : rule,
      presentation,
      patient: { weightKg, ageDays },
      ...(chosenValue === undefined ? {} : { chosenMgPerKg: chosenValue }),
    });
  }, [rule, presentation, weightKg, ageDays, hasAge, chosenValue]);

  const fittingRules =
    result?.status === 'not_calculable' && result.reason === 'age_out_of_rule' && ageDays !== null
      ? drug.rules.filter(
          (r) => ageDays >= r.ageMinDays && (r.ageMaxDays === undefined || ageDays <= r.ageMaxDays),
        )
      : [];

  const orderedSources = (rule?.sourceIds ?? [])
    .map((id) => sources.find((x) => x.id === id))
    .filter((x): x is Source => x !== undefined)
    .sort((a, b) => sourcePriority(a.kind) - sourcePriority(b.kind));
  const sourceLabel = (src: Source) =>
    `${src.title}${src.year === undefined ? '' : ` (${src.year})`}`;

  if (!rule) return <Banner tone="danger">Ficha incompleta.</Banner>;
  const unit = presentation ? (UNIT_LABEL[presentation.unit] ?? presentation.unit) : '';

  const selectRule = (r: DoseRule) => {
    setRuleId(r.id);
    setChoice('usual');
    setPickingRule(false);
    const nextAllowed = drug.presentations.filter(
      (p) => r.presentationIds === undefined || r.presentationIds.includes(p.id),
    );
    if (presId !== CUSTOM_ID && !nextAllowed.some((p) => p.id === presId)) {
      setPresId(nextAllowed[0]?.id ?? '');
    }
  };

  return (
    <View>
      <ReviewBadge review={drug.review} />

      <Card>
        {routes.length > 1 ? (
          <>
            <SectionTitle>Vía de administración</SectionTitle>
            <Segmented
              label="Vía de administración"
              options={routes.map((r) => ({ value: r, label: ROUTE_LABEL[r] }))}
              value={route}
              onChange={(r) => {
                setRoute(r);
                const first = drug.rules.find((x) => x.route === r);
                if (first) selectRule(first);
              }}
            />
          </>
        ) : null}
        <SectionTitle>Indicación</SectionTitle>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cambiar indicación"
          onPress={() => setPickingRule((v) => !v)}
          style={s.indication}
        >
          <View style={s.indicationTop}>
            <Text style={s.indicationTitle}>{rule.indication}</Text>
            <Text style={s.indicationCount}>
              {ruleIndex + 1}/{rulesForRoute.length} · toca para cambiar
            </Text>
          </View>
          <Pill>{rangeText(rule, fmt)}</Pill>
        </Pressable>
        {pickingRule
          ? rulesForRoute.map((r) => (
              <Pressable
                key={r.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: r.id === rule.id }}
                onPress={() => selectRule(r)}
                style={[s.option, r.id === rule.id && s.optionOn]}
              >
                <Text style={s.optionText}>{r.indication}</Text>
                <Text style={s.optionSub}>{rangeText(r, fmt)}</Text>
              </Pressable>
            ))
          : null}
        {rule.amountMin !== rule.amountMax ? (
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
        ) : null}
      </Card>

      <SectionTitle>Presentación</SectionTitle>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.presRow}
      >
        {allowed.map((p) => {
          const on = p.id === presId;
          return (
            <Pressable
              key={p.id}
              accessibilityRole="radio"
              accessibilityState={{ selected: on }}
              onPress={() => setPresId(p.id)}
              style={[s.presCard, on && s.presCardOn]}
            >
              <Text style={[s.presForm, on && s.presTextOn]}>{FORM_LABEL[p.form]}</Text>
              <Text style={[s.presLabel, on && s.presTextOn]}>{p.label}</Text>
              {p.brandsPE.length > 0 ? (
                <Text style={[s.presBrands, on && s.presTextOn]} numberOfLines={1}>
                  {p.brandsPE.join(' · ')}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
        <Pressable
          accessibilityRole="radio"
          accessibilityState={{ selected: presId === CUSTOM_ID }}
          onPress={() => setPresId(CUSTOM_ID)}
          style={[s.presCard, s.presCustom, presId === CUSTOM_ID && s.presCardOn]}
        >
          <Text style={[s.presPlus, presId === CUSTOM_ID && s.presTextOn]}>＋</Text>
          <Text style={[s.presLabel, presId === CUSTOM_ID && s.presTextOn]}>
            Personalizar concentración
          </Text>
        </Pressable>
      </ScrollView>
      {presId === CUSTOM_ID ? (
        <Card>
          <View style={s.row}>
            <NumberField
              label="mg del preparado"
              suffix="mg"
              value={customMg}
              onChangeText={setCustomMg}
              placeholder="250"
            />
            <NumberField
              label="en mL"
              suffix="mL"
              value={customMl}
              onChangeText={setCustomMl}
              placeholder="5"
            />
          </View>
          {customMg.trim() !== '' && customMl.trim() !== '' && !custom ? (
            <Text style={s.error}>Ingrese mg y mL mayores que cero.</Text>
          ) : null}
        </Card>
      ) : null}

      <Card>
        <View style={s.headRow}>
          <SectionTitle>Peso del paciente</SectionTitle>
          <Segmented
            label="Unidad de peso"
            options={[
              { value: 'kg', label: 'kg' },
              { value: 'lb', label: 'lb' },
            ]}
            value={weightUnit}
            onChange={setWeightUnit}
          />
        </View>
        <NumberField
          label={weightUnit === 'kg' ? 'Peso en kilogramos' : 'Peso en libras'}
          suffix={weightUnit}
          value={weightText}
          onChangeText={setWeightText}
          placeholder="0"
        />
        {weightUnit === 'lb' && weight.ok ? (
          <Text style={s.muted}>≈ {fmt(weight.kg)} kg</Text>
        ) : null}
        {weightText.trim() !== '' && !weight.ok ? (
          <Text style={s.error}>{REASON_TEXT.invalid_weight}</Text>
        ) : null}

        <View style={s.headRow}>
          <SectionTitle>Edad del paciente</SectionTitle>
          <Segmented
            label="Formato de edad"
            options={[
              { value: 'ym', label: 'Años y meses' },
              { value: 'd', label: 'Días' },
            ]}
            value={ageMode}
            onChange={setAgeMode}
          />
        </View>
        {ageMode === 'ym' ? (
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
        ) : (
          <NumberField
            label="Edad en días"
            suffix="días"
            value={daysText}
            onChangeText={setDaysText}
            keyboardType="number-pad"
            placeholder="0"
          />
        )}
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
        <View style={s.result}>
          <Text style={s.resultLabel}>DOSIS POR TOMA</Text>
          <Text testID="result-mg" style={s.resultMg}>
            {fmt(result.mgPerDose.chosen)} mg
          </Text>
          <Text testID="result-amount" style={s.resultAmount}>
            {fmt(result.amount.value)} {unit}
          </Text>
          <Text style={s.resultSub}>
            Cada {rule.intervalHours} h · {fmt(result.dosesPerDay)} tomas/día ·{' '}
            {fmt(result.mgPerDay)} mg/día
          </Text>
          {rule.durationText ? (
            <Text style={s.resultSub}>Duración: {rule.durationText}</Text>
          ) : null}
          <Text style={s.resultSub}>
            Rango de la ficha: {fmt(result.mgPerDose.min)}–{fmt(result.mgPerDose.max)} mg por toma
          </Text>
        </View>
      ) : null}
      {result?.status === 'ok'
        ? result.warnings.map((w) => (
            <Banner key={w} tone="warning">
              {WARNING_TEXT[w]}
            </Banner>
          ))
        : null}
      {result?.status === 'ok' ? (
        <Collapsible title="Cálculo paso a paso" count={result.steps.length}>
          {result.steps.map((st) => (
            <Text key={st.label} style={s.body}>
              {st.label}: {st.expression.replace(/\./g, decimalSeparator)} ={' '}
              {st.result.replace(/\./g, decimalSeparator)}
            </Text>
          ))}
        </Collapsible>
      ) : null}

      {rule.notes ? (
        <Card>
          <SectionTitle>Notas de la indicación</SectionTitle>
          <Text style={s.body}>{rule.notes}</Text>
        </Card>
      ) : null}
      {drug.contraindications.length > 0 ? (
        <Collapsible title="Contraindicaciones" count={drug.contraindications.length} tone="danger">
          {drug.contraindications.map((x) => (
            <Text key={x} style={s.body}>
              ⛔ {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {drug.warnings.length > 0 ? (
        <Collapsible title="Advertencias" count={drug.warnings.length} tone="warning">
          {drug.warnings.map((x) => (
            <Text key={x} style={s.body}>
              ⚠ {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {rule.countryNotes && rule.countryNotes.length > 0 ? (
        <Collapsible title="Diferencias por país" count={rule.countryNotes.length} tone="ok">
          {rule.countryNotes.map((n) => (
            <Text key={n.country + n.text} style={s.body}>
              {COUNTRY_LABEL[n.country]}: {n.text}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      <Collapsible title="Fuentes" count={orderedSources.length}>
        {orderedSources.map((src, i) => (
          <Text key={src.id} style={i === 0 ? s.body : s.muted}>
            {i === 0 ? `Fuente principal: ${sourceLabel(src)}` : `• ${sourceLabel(src)}`}
          </Text>
        ))}
      </Collapsible>
      <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    row: { flexDirection: 'row', gap: space.md },
    headRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: space.sm,
      flexWrap: 'wrap',
    },
    indication: {
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.sm,
      padding: space.md,
      gap: space.sm,
      backgroundColor: c.bg,
      minHeight: MIN_TOUCH,
    },
    indicationTop: { gap: space.xs },
    indicationTitle: { color: c.text, fontSize: font.title, fontWeight: '800' },
    indicationCount: { color: c.muted, fontSize: font.small, fontWeight: '700' },
    option: {
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.sm,
      padding: space.md,
      minHeight: MIN_TOUCH,
    },
    optionOn: { borderColor: c.primary, backgroundColor: c.primarySoft },
    optionText: { color: c.text, fontSize: font.body, fontWeight: '700' },
    optionSub: { color: c.muted, fontSize: font.small },
    presRow: { gap: space.sm, paddingVertical: space.sm, paddingRight: space.lg },
    presCard: {
      width: 150,
      minHeight: 96,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.card,
      padding: space.md,
      gap: space.xs,
      justifyContent: 'center',
    },
    presCardOn: { backgroundColor: c.primary, borderColor: c.primary },
    presCustom: { borderStyle: 'dashed', alignItems: 'center' },
    presForm: {
      color: c.muted,
      fontSize: font.small,
      fontWeight: '800',
      textTransform: 'uppercase',
    },
    presLabel: { color: c.text, fontSize: font.body, fontWeight: '700' },
    presBrands: { color: c.muted, fontSize: font.small },
    presPlus: { color: c.primary, fontSize: 28, fontWeight: '800' },
    presTextOn: { color: c.primaryText },
    result: {
      backgroundColor: c.primary,
      borderRadius: radius.lg,
      padding: space.xl,
      marginBottom: space.md,
      gap: space.xs,
    },
    resultLabel: { color: c.primaryText, fontSize: font.small, fontWeight: '800', opacity: 0.85 },
    resultMg: { color: c.primaryText, fontSize: 40, fontWeight: '900' },
    resultAmount: { color: c.primaryText, fontSize: font.big, fontWeight: '800' },
    resultSub: { color: c.primaryText, fontSize: font.body, opacity: 0.9 },
    error: { color: c.danger, fontSize: font.body },
    body: { fontSize: font.body, color: c.text },
    muted: { fontSize: font.small, color: c.muted },
    disclaimer: {
      fontSize: font.small,
      color: c.muted,
      fontStyle: 'italic',
      marginVertical: space.md,
    },
  });
}
