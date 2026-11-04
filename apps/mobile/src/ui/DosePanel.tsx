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
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../domain/categories';
import { customPresentation } from '../domain/custom';
import { CLINICAL_DISCLAIMER, REASON_TEXT, WARNING_TEXT } from '../domain/messages';
import { ageToDays, parseWeight } from '../domain/patientInput';
import {
  Banner,
  Card,
  Chip,
  Collapsible,
  NumberField,
  ReviewBadge,
  SectionTitle,
  Segmented,
} from './components';
import { family, font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

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
/** Vía tal como se escribe en la receta. */
const ROUTE_RX: Record<Route, string> = {
  VO: 'vía oral',
  IV: 'vía IV',
  IM: 'vía IM',
  IR: 'vía rectal',
  SL: 'vía sublingual',
  INH: 'vía inhalada',
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
    result?.status === 'not_calculable' &&
    (result.reason === 'age_out_of_rule' || result.reason === 'weight_out_of_rule') &&
    ageDays !== null &&
    weightKg !== null
      ? drug.rules.filter(
          (r) =>
            ageDays >= r.ageMinDays &&
            (r.ageMaxDays === undefined || ageDays <= r.ageMaxDays) &&
            (r.weightMinKg === undefined || weightKg >= r.weightMinKg) &&
            (r.weightMaxKg === undefined || weightKg < r.weightMaxKg),
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

  const amountText = result?.status === 'ok' ? `${fmt(result.amount.value)} ${unit}` : '';
  const rxLine =
    result?.status === 'ok' && presentation
      ? `${drug.name} ${presentation.label}: ${amountText} ${ROUTE_RX[rule.route]} cada ${rule.intervalHours} h` +
        (rule.durationText ? `, ${rule.durationText}` : '') +
        ` (${fmt(result.mgPerDose.chosen)} mg por toma; ${fmt(result.mgPerDay)} mg/día).`
      : '';

  return (
    <View>
      <View style={s.head}>
        <Text accessibilityRole="header" style={s.drugName}>
          {drug.tallMan ?? drug.name}
        </Text>
        <Text style={s.drugMeta}>{CATEGORIES[drug.category].label}</Text>
        <ReviewBadge review={drug.review} />
      </View>

      <Card>
        {routes.length > 1 ? (
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
        ) : null}
        <SectionTitle>Indicación</SectionTitle>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cambiar indicación"
          accessibilityState={{ expanded: pickingRule }}
          onPress={() => setPickingRule((v) => !v)}
          style={({ pressed }) => [s.indication, pressed && { opacity: 0.7 }]}
        >
          <View style={s.flex}>
            <Text style={s.indicationTitle}>{rule.indication}</Text>
            <Text style={s.indicationSub}>
              {rangeText(rule, fmt)} · cada {rule.intervalHours} h
            </Text>
          </View>
          {rulesForRoute.length > 1 ? (
            <View style={s.indicationSide}>
              <Text style={s.indicationCount}>
                {ruleIndex + 1} de {rulesForRoute.length}
              </Text>
              <Ionicons
                name={pickingRule ? 'chevron-up' : 'chevron-down'}
                size={18}
                color={c.muted}
              />
            </View>
          ) : null}
        </Pressable>
        {pickingRule ? (
          <View style={s.options}>
            {rulesForRoute.map((r, i) => {
              const on = r.id === rule.id;
              return (
                <Pressable
                  key={r.id}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  onPress={() => selectRule(r)}
                  style={[s.option, i > 0 && s.ruled]}
                >
                  <View style={s.flex}>
                    <Text style={s.optionText}>{r.indication}</Text>
                    <Text style={s.optionSub}>
                      {rangeText(r, fmt)} · cada {r.intervalHours} h
                    </Text>
                  </View>
                  {on ? <Ionicons name="checkmark" size={20} color={c.accent} /> : null}
                </Pressable>
              );
            })}
          </View>
        ) : null}
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

      <View style={s.block}>
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
                <Text style={s.presForm}>{FORM_LABEL[p.form]}</Text>
                <Text style={s.presLabel}>{p.label}</Text>
                {p.brandsPE.length > 0 ? (
                  <Text style={s.presBrands} numberOfLines={2}>
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
            <Ionicons name="add" size={22} color={c.text} />
            <Text style={s.presLabel}>Personalizar concentración</Text>
          </Pressable>
        </ScrollView>
      </View>
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
          <SectionTitle>Peso</SectionTitle>
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

        <View style={[s.headRow, s.gapTop]}>
          <SectionTitle>Edad</SectionTitle>
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
            ? `\nPara este paciente: ${fittingRules.map((r) => r.indication).join(' · ')}.`
            : ''}
        </Banner>
      ) : null}

      {result?.status === 'ok' ? (
        <View style={s.result}>
          <View style={s.resultTop}>
            <Text style={s.rx}>Rp/</Text>
            <Text style={s.resultFor} numberOfLines={2}>
              {presentation ? presentation.label : ''}
            </Text>
          </View>
          <Text testID="result-amount" style={s.resultAmount}>
            {amountText}
          </Text>
          <Text style={s.resultLine}>
            <Text testID="result-mg" style={s.resultMg}>
              {fmt(result.mgPerDose.chosen)} mg
            </Text>
            {` por toma · ${ROUTE_RX[rule.route]} cada ${rule.intervalHours} h`}
          </Text>
          <View style={s.facts}>
            <Fact s={s} label="Tomas al día" value={fmt(result.dosesPerDay)} />
            <Fact s={s} label="Total diario" value={`${fmt(result.mgPerDay)} mg`} />
            <Fact
              s={s}
              label="Rango por toma"
              value={`${fmt(result.mgPerDose.min)}–${fmt(result.mgPerDose.max)} mg`}
            />
            {rule.durationText ? <Fact s={s} label="Duración" value={rule.durationText} /> : null}
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Compartir indicación"
            onPress={() => void Share.share({ message: rxLine })}
            style={({ pressed }) => [s.share, pressed && { opacity: 0.7 }]}
          >
            <Ionicons name="share-outline" size={18} color={c.accent} />
            <Text style={s.shareText}>Compartir indicación</Text>
          </Pressable>
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
              {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {drug.warnings.length > 0 ? (
        <Collapsible title="Advertencias" count={drug.warnings.length} tone="warning">
          {drug.warnings.map((x) => (
            <Text key={x} style={s.body}>
              {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {rule.countryNotes && rule.countryNotes.length > 0 ? (
        <Collapsible title="Diferencias por país" count={rule.countryNotes.length}>
          {rule.countryNotes.map((n) => (
            <Text key={n.country + n.text} style={s.body}>
              <Text style={s.strong}>{COUNTRY_LABEL[n.country]}: </Text>
              {n.text}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      <Collapsible title="Fuentes" count={orderedSources.length}>
        {orderedSources.map((src, i) => (
          <Text key={src.id} style={i === 0 ? s.body : s.muted}>
            {i === 0 ? `Fuente principal: ${sourceLabel(src)}` : sourceLabel(src)}
          </Text>
        ))}
      </Collapsible>
      <Text style={s.disclaimer}>{CLINICAL_DISCLAIMER}</Text>
    </View>
  );
}

type Styles = ReturnType<typeof makeStyles>;

function Fact({ s, label, value }: { s: Styles; label: string; value: string }) {
  return (
    <View style={s.fact}>
      <Text style={s.factLabel}>{label}</Text>
      <Text style={s.factValue}>{value}</Text>
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    flex: { flex: 1 },
    head: { gap: 4, marginBottom: 20 },
    drugName: { fontFamily: family.serif, fontSize: 34, lineHeight: 38, color: c.text },
    drugMeta: { fontFamily: family.regular, fontSize: 15, color: c.muted, marginBottom: 4 },
    block: { gap: 10, marginBottom: space.md },
    wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: space.sm },
    row: { flexDirection: 'row', gap: space.md },
    gapTop: { marginTop: space.sm },
    headRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: space.sm,
      flexWrap: 'wrap',
    },
    indication: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      borderRadius: radius.md,
      backgroundColor: c.raised,
      paddingHorizontal: space.lg,
      paddingVertical: 14,
      minHeight: MIN_TOUCH,
    },
    indicationTitle: { fontFamily: family.semibold, color: c.text, fontSize: 17, lineHeight: 23 },
    indicationSub: { fontFamily: family.regular, color: c.muted, fontSize: 14, marginTop: 2 },
    indicationSide: { flexDirection: 'row', alignItems: 'center', gap: 4 },
    indicationCount: {
      fontFamily: family.medium,
      color: c.muted,
      fontSize: 13,
      fontVariant: ['tabular-nums'],
    },
    options: { backgroundColor: c.raised, borderRadius: radius.md, paddingHorizontal: space.lg },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      paddingVertical: space.md,
      minHeight: MIN_TOUCH,
    },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.control },
    optionText: { fontFamily: family.medium, color: c.text, fontSize: 15 },
    optionSub: { fontFamily: family.regular, color: c.muted, fontSize: 13 },
    presRow: { gap: 10, paddingRight: 20 },
    presCard: {
      width: 156,
      minHeight: 104,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      backgroundColor: c.ground,
      padding: 14,
      gap: 3,
    },
    presCardOn: { borderColor: c.ink, borderWidth: 2, padding: 13 },
    presCustom: { borderStyle: 'dashed', borderColor: c.control, justifyContent: 'center' },
    presForm: { fontFamily: family.regular, color: c.muted, fontSize: 13 },
    presLabel: { fontFamily: family.semibold, color: c.text, fontSize: 15, lineHeight: 20 },
    presBrands: { fontFamily: family.regular, color: c.muted, fontSize: 13, lineHeight: 18 },
    result: {
      backgroundColor: c.accentSoft,
      borderRadius: radius.lg,
      padding: 20,
      marginBottom: space.md,
      gap: 6,
    },
    resultTop: { flexDirection: 'row', alignItems: 'baseline', gap: 10 },
    rx: { fontFamily: family.serif, fontSize: 22, color: c.accent },
    resultFor: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    resultAmount: {
      fontFamily: family.serif,
      fontSize: font.figure,
      lineHeight: 46,
      color: c.accent,
      fontVariant: ['tabular-nums'],
    },
    resultLine: { fontFamily: family.regular, fontSize: 16, lineHeight: 22, color: c.text },
    resultMg: { fontFamily: family.semibold, color: c.text, fontVariant: ['tabular-nums'] },
    facts: {
      marginTop: space.sm,
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: c.accent,
      paddingTop: space.sm,
    },
    fact: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: space.md,
      paddingVertical: 5,
    },
    factLabel: { fontFamily: family.regular, fontSize: 14, color: c.muted },
    factValue: {
      flexShrink: 1,
      textAlign: 'right',
      fontFamily: family.medium,
      fontSize: 14,
      color: c.text,
      fontVariant: ['tabular-nums'],
    },
    share: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      alignSelf: 'flex-start',
      minHeight: MIN_TOUCH,
      marginTop: 2,
    },
    shareText: { fontFamily: family.semibold, fontSize: 15, color: c.accent },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
    body: { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: c.text },
    strong: { fontFamily: family.semibold },
    muted: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    disclaimer: {
      fontFamily: family.regular,
      fontSize: 13,
      lineHeight: 19,
      color: c.muted,
      marginVertical: space.md,
    },
  });
}
