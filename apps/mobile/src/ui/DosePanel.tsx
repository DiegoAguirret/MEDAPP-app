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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../domain/categories';
import { isScheduled, scheduleText } from '../domain/schedule';
import { usePatient } from '../state/patient';
import { useFavoritePresentation } from '../state/settings';
import { useTipQueue } from '../state/tips';
import { weightZone } from '../domain/zones';
import { Reveal } from './motion';
import { Sheet } from './Sheet';
import { Tip } from './Tip';
import { DripRate } from './DripRate';
import { RenalTiers } from './RenalTiers';
import { PatientBand } from './PatientBand';
import { PatientCard } from './PatientCard';
import { customPresentation } from '../domain/custom';
import { CLINICAL_DISCLAIMER, REASON_TEXT, WARNING_TEXT } from '../domain/messages';
import { readPatient } from '../domain/patientInput';
import { ruleFits } from '../domain/rules';
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
  // «mcg» no contiene «mg»: queda igual aunque la ficha vaya en mg.
  'mcg/kg/min': 'mcg/kg/min',
  'mg/kg/h': 'mg/kg/h',
} as const;
const UNIT_LABEL: Record<string, string> = {
  mL: 'mL',
  gota: 'gotas',
  tableta: 'tableta(s)',
  capsula: 'cápsula(s)',
  supositorio: 'supositorio(s)',
  puff: 'puffs',
  sobre: 'sobre(s)',
};
const FORM_LABEL: Record<Presentation['form'], string> = {
  suspension: 'Suspensión',
  jarabe: 'Jarabe',
  gotas: 'Gotas',
  tableta: 'Tableta',
  capsula: 'Cápsula',
  supositorio: 'Supositorio',
  ampolla: 'Ampolla',
  nebulizacion: 'Nebulización',
  inhalador: 'Inhalador',
  granulado: 'Granulado',
  solucion: 'Solución oral',
};

type Choice = 'min' | 'usual' | 'max';
const CUSTOM_ID = 'personalizada';

/** «mg/kg/dosis» o, si la ficha dosifica en UI, «UI/kg/dosis». */
const basisLabel = (rule: DoseRule, du: 'mg' | 'mcg' | 'UI' | 'mEq') =>
  BASIS_LABEL[rule.basis].replace('mg', du);

function rangeText(
  rule: DoseRule,
  fmt: (n: number) => string,
  du: 'mg' | 'mcg' | 'UI' | 'mEq' = 'mg',
): string {
  const unit = basisLabel(rule, du);
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
  onOpenRenalCalc,
}: {
  drug: Drug;
  decimalSeparator: '.' | ',';
  sources: Source[];
  /** Abre la calculadora de función renal (la pantalla pasa la navegación). */
  onOpenRenalCalc?: () => void;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const fmt = (n: number) => formatClinical(n, decimalSeparator);
  const du = drug.doseUnit ?? 'mg';

  // Paciente: compartido entre fichas mientras la app está abierta; nunca se guarda en disco.
  const patient = usePatient();
  const reading = readPatient(patient);
  const { weightKg, ageDays, hasAge } = reading;
  // Si el paciente ya venía completo de otra ficha, sus datos se pliegan tras «Editar».
  const [editingPatient, setEditingPatient] = useState(!reading.complete);
  const showPatientForm = editingPatient || !reading.complete;
  const zone = weightKg === null ? null : weightZone(weightKg);
  const fits = (r: DoseRule) =>
    ageDays !== null && weightKg !== null && ruleFits(r, ageDays, weightKg);

  // Vía e indicación: sin elección manual, la primera que aplica al paciente.
  const routes = [...new Set(drug.rules.map((r) => r.route))];
  const [route, setRoute] = useState<Route>(routes[0] ?? 'VO');
  const rulesForRoute = drug.rules.filter((r) => r.route === route);
  const [pickedRuleId, setPickedRuleId] = useState<string | null>(null);
  const autoRule = rulesForRoute.find(fits) ?? rulesForRoute[0];
  const picked =
    pickedRuleId === null ? undefined : rulesForRoute.find((r) => r.id === pickedRuleId);
  const rule = picked ?? autoRule;
  const autoChosen = picked === undefined && reading.complete && rule !== undefined && fits(rule);
  const ruleIndex = rule ? rulesForRoute.indexOf(rule) : 0;
  const [pickingRule, setPickingRule] = useState(false);
  const [choice, setChoice] = useState<Choice>('usual');

  // Presentación (incluida la concentración personalizada)
  const allowed = drug.presentations.filter(
    (p) => rule?.presentationIds === undefined || rule.presentationIds.includes(p.id),
  );
  const [favPresId, setFavPresId] = useFavoritePresentation(drug.id);
  // La presentación habitual del médico, si la indicación la admite; si no, la primera.
  const pickDefault = (list: typeof allowed) =>
    (list.find((p) => p.id === favPresId) ?? list[0])?.id ?? '';
  const [presId, setPresId] = useState(() => pickDefault(allowed));
  const [customMg, setCustomMg] = useState('');
  const [customMl, setCustomMl] = useState('');
  const custom = presId === CUSTOM_ID ? customPresentation(customMg, customMl, du) : null;
  const presentation =
    presId === CUSTOM_ID
      ? custom
      : (allowed.find((p) => p.id === presId) ??
        allowed.find((p) => p.id === favPresId) ??
        allowed[0]);

  const chosenValue = !rule
    ? undefined
    : choice === 'min'
      ? rule.amountMin
      : choice === 'max'
        ? rule.amountMax
        : (rule.usual ?? rule.amountMin);

  const result = useMemo(() => {
    if (!rule || !presentation || weightKg === null || ageDays === null || !hasAge) return null;
    return calculateDose({
      doseUnit: du,
      rule: presentation.id === CUSTOM_ID ? withoutPresentationLimit(rule) : rule,
      presentation,
      patient: { weightKg, ageDays },
      ...(chosenValue === undefined ? {} : { chosenMgPerKg: chosenValue }),
    });
  }, [rule, presentation, weightKg, ageDays, hasAge, chosenValue, du]);

  const fittingRules =
    result?.status === 'not_calculable' &&
    (result.reason === 'age_out_of_rule' || result.reason === 'weight_out_of_rule') &&
    ageDays !== null &&
    weightKg !== null
      ? drug.rules.filter((r) => ruleFits(r, ageDays, weightKg))
      : [];

  const orderedSources = (rule?.sourceIds ?? [])
    .map((id) => sources.find((x) => x.id === id))
    .filter((x): x is Source => x !== undefined)
    .sort((a, b) => sourcePriority(a.kind) - sourcePriority(b.kind));
  const sourceLabel = (src: Source) =>
    `${src.title}${src.year === undefined ? '' : ` (${src.year})`}`;

  // Guías de la ficha, una a la vez, en el orden en que se usa la pantalla.
  const tips = useTipQueue([
    ['paciente', !reading.complete],
    ['franja', reading.complete],
    ['indicacion', autoChosen && rulesForRoute.length > 1],
    ['presentacion', reading.complete && allowed.length > 1],
    ['resultado', result?.status === 'ok'],
  ]);

  if (!rule) return <Banner tone="danger">Ficha incompleta.</Banner>;
  const unit = presentation ? (UNIT_LABEL[presentation.unit] ?? presentation.unit) : '';

  const selectRule = (r: DoseRule) => {
    setPickedRuleId(r.id);
    setChoice('usual');
    setPickingRule(false);
    const nextAllowed = drug.presentations.filter(
      (p) => r.presentationIds === undefined || r.presentationIds.includes(p.id),
    );
    if (presId !== CUSTOM_ID && !nextAllowed.some((p) => p.id === presId)) {
      setPresId(pickDefault(nextAllowed));
    }
  };

  const amountText =
    result?.status === 'ok'
      ? `${fmt(result.amount.value)} ${rule?.continuous === true ? result.amount.unit : unit}`
      : '';
  const rxLine =
    result?.status === 'ok' && presentation
      ? `${drug.name} ${presentation.label}: ${amountText} ${ROUTE_RX[rule.route]} ${scheduleText(rule)}` +
        (rule.durationText ? `, ${rule.durationText}` : '') +
        (rule.continuous === true
          ? ` (${fmt(result.mgPerDose.chosen)} ${du}/h; ${fmt(result.mgPerDay)} ${du}/día).`
          : ` (${fmt(result.mgPerDose.chosen)} ${du} por toma; ${fmt(result.mgPerDay)} ${du}/día).`)
      : '';

  return (
    <View>
      <View style={s.head}>
        <View style={[s.headIcon, { backgroundColor: CATEGORIES[drug.category].hue + '1F' }]}>
          <MaterialCommunityIcons
            name={CATEGORIES[drug.category].icon}
            size={24}
            color={CATEGORIES[drug.category].hue}
          />
        </View>
        <View style={s.flex}>
          <Text accessibilityRole="header" style={s.drugName}>
            {drug.tallMan ?? drug.name}
          </Text>
          <Text style={s.drugMeta}>{CATEGORIES[drug.category].label}</Text>
        </View>
      </View>
      <View style={s.review}>
        <ReviewBadge review={drug.review} />
      </View>

      <View style={s.bandWrap}>
        <PatientBand
          patient={patient}
          decimalSeparator={decimalSeparator}
          onClear={() => {
            setPickedRuleId(null);
            setEditingPatient(true);
          }}
        />
        {reading.complete && !showPatientForm ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Editar paciente"
            onPress={() => setEditingPatient(true)}
            hitSlop={8}
            style={s.editPatient}
          >
            <MaterialCommunityIcons name="pencil-outline" size={16} color={c.accent} />
            <Text style={s.editPatientText}>Editar peso o edad</Text>
          </Pressable>
        ) : null}
      </View>
      <Tip id="franja" queue={tips} />

      {showPatientForm ? (
        <PatientCard
          patient={patient}
          decimalSeparator={decimalSeparator}
          onClear={() => setPickedRuleId(null)}
          hideClear={reading.complete}
        />
      ) : null}
      <Tip id="paciente" queue={tips} />

      {result?.status === 'ok' && presentation ? (
        <View
          style={s.quick}
          accessible
          accessibilityLabel={`Dosis calculada: ${amountText}, ${fmt(result.mgPerDose.chosen)} ${du}${rule.continuous === true ? ' por hora' : ''}, ${scheduleText(rule)}. El detalle está más abajo.`}
        >
          <Text style={s.quickRx}>Rp/</Text>
          <View style={s.flex}>
            <Text style={s.quickAmount}>{amountText}</Text>
            <Text style={s.quickSub} numberOfLines={1}>
              {fmt(result.mgPerDose.chosen)} {du}
              {rule.continuous === true ? '/h' : ''} · {scheduleText(rule)}
            </Text>
          </View>
          <MaterialCommunityIcons name="arrow-down" size={20} color={c.onHero} />
        </View>
      ) : null}

      <Card>
        {routes.length > 1 ? (
          <Segmented
            label="Vía de administración"
            options={routes.map((r) => ({ value: r, label: ROUTE_LABEL[r] }))}
            value={route}
            onChange={(r) => {
              setRoute(r);
              setPickedRuleId(null);
              setPickingRule(false);
            }}
          />
        ) : null}
        <SectionTitle>Indicación</SectionTitle>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cambiar indicación"
          accessibilityState={{ expanded: pickingRule }}
          onPress={() => setPickingRule(true)}
          style={({ pressed }) => [s.indication, pressed && { opacity: 0.7 }]}
        >
          <View style={s.flex}>
            <Text style={s.indicationTitle}>{rule.indication}</Text>
            <View style={s.indicationMeta}>
              <Text style={s.rangePill}>{rangeText(rule, fmt, du)}</Text>
              <Text style={s.indicationSub}>{scheduleText(rule)}</Text>
            </View>
            {autoChosen ? <Text style={s.autoHint}>Elegida según la edad y el peso</Text> : null}
          </View>
          {rulesForRoute.length > 1 ? (
            <View style={s.indicationSide}>
              <Text style={s.indicationCount}>
                {ruleIndex + 1} de {rulesForRoute.length}
              </Text>
              <Text style={s.indicationTap}>Cambiar</Text>
            </View>
          ) : null}
        </Pressable>
        {rule.notes ? <Note key={rule.id} text={rule.notes} s={s} /> : null}
        <Sheet
          visible={pickingRule}
          title="Elegir indicación"
          subtitle={rulesForRoute.length === 1 ? '1 opción' : `${rulesForRoute.length} opciones`}
          icon="clipboard-text-outline"
          onClose={() => setPickingRule(false)}
        >
          {rulesForRoute.map((r) => {
            const on = r.id === rule.id;
            const no = reading.complete && !fits(r);
            return (
              <Pressable
                key={r.id}
                accessibilityRole="radio"
                accessibilityState={{ selected: on }}
                onPress={() => selectRule(r)}
                style={({ pressed }) => [s.option, on && s.optionOn, pressed && { opacity: 0.75 }]}
              >
                <View style={s.flex}>
                  <Text style={s.optionText}>{r.indication}</Text>
                  <View style={s.indicationMeta}>
                    <Text style={s.rangePill}>{rangeText(r, fmt, du)}</Text>
                    <Text style={s.optionSub}>{scheduleText(r)}</Text>
                  </View>
                  {no ? <Text style={s.optionNo}>No aplica a este paciente</Text> : null}
                </View>
                {on ? <Ionicons name="checkmark-circle" size={22} color={c.accent} /> : null}
              </Pressable>
            );
          })}
        </Sheet>
        {rule.amountMin !== rule.amountMax ? (
          <View style={s.wrap}>
            <Chip
              label={`Mínima ${fmt(rule.amountMin)} ${basisLabel(rule, du)}`}
              selected={choice === 'min'}
              onPress={() => setChoice('min')}
            />
            {rule.usual !== undefined &&
            rule.usual !== rule.amountMin &&
            rule.usual !== rule.amountMax ? (
              <Chip
                label={`Habitual ${fmt(rule.usual)} ${basisLabel(rule, du)}`}
                selected={choice === 'usual'}
                onPress={() => setChoice('usual')}
              />
            ) : null}
            <Chip
              label={`Máxima ${fmt(rule.amountMax)} ${basisLabel(rule, du)}`}
              selected={choice === 'max' || (choice === 'usual' && rule.usual === rule.amountMax)}
              onPress={() => setChoice('max')}
            />
          </View>
        ) : null}
      </Card>
      <Tip id="indicacion" queue={tips} />

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
                {p.label.toLowerCase().startsWith(FORM_LABEL[p.form].toLowerCase()) ? null : (
                  <Text style={s.presForm}>{FORM_LABEL[p.form]}</Text>
                )}
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
      {presentation && presId !== CUSTOM_ID && allowed.length > 1 ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            favPresId === presentation.id
              ? 'Presentación habitual. Quitar'
              : 'Usar siempre esta presentación'
          }
          onPress={() => setFavPresId(favPresId === presentation.id ? null : presentation.id)}
          hitSlop={8}
          style={s.favPres}
        >
          <Ionicons
            name={favPresId === presentation.id ? 'star' : 'star-outline'}
            size={18}
            color={c.accent}
          />
          <Text style={s.favPresText}>
            {favPresId === presentation.id
              ? 'Presentación habitual · quitar'
              : 'Usar siempre esta presentación'}
          </Text>
        </Pressable>
      ) : null}
      <Tip id="presentacion" queue={tips} />
      {presId === CUSTOM_ID ? (
        <Card>
          <View style={s.row}>
            <NumberField
              label={`${du} del preparado`}
              suffix={du}
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
            <Text style={s.error}>Ingresa {du} y mL mayores que cero.</Text>
          ) : null}
        </Card>
      ) : null}

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
          {zone ? (
            <View
              style={[s.resultTape, { backgroundColor: zone.fill }]}
              accessibilityLabel={zone.label}
            />
          ) : null}
          <View style={s.resultTop}>
            <Text style={s.rx}>Rp/</Text>
            <Text style={s.resultFor} numberOfLines={2}>
              {presentation ? presentation.label : ''}
            </Text>
          </View>
          <Reveal trigger={amountText}>
            <Text testID="result-amount" style={s.resultAmount}>
              {amountText}
            </Text>
          </Reveal>
          <Text style={s.resultLine}>
            <Text testID="result-mg" style={s.resultMg}>
              {fmt(result.mgPerDose.chosen)} {du}
              {rule.continuous === true ? '/h' : ''}
            </Text>
            {rule.continuous === true
              ? ` · ${ROUTE_RX[rule.route]} ${scheduleText(rule)}`
              : ` por ${isScheduled(rule) ? 'toma' : 'dosis'} · ${ROUTE_RX[rule.route]} ${scheduleText(rule)}`}
          </Text>
          <View style={s.facts}>
            {isScheduled(rule) ? (
              <>
                <Fact s={s} label="Tomas al día" value={fmt(result.dosesPerDay)} />
                <Fact s={s} label="Total diario" value={`${fmt(result.mgPerDay)} ${du}`} />
              </>
            ) : null}
            {rule.maxDoses !== undefined ? (
              <Fact s={s} label="Máximo de dosis" value={fmt(rule.maxDoses)} />
            ) : null}
            {rule.continuous === true ? (
              <>
                <Fact s={s} label="Total diario" value={`${fmt(result.mgPerDay)} ${du}`} />
                <Fact s={s} label="Tope por hora" value={`${fmt(rule.maxPerDoseMg)} ${du}/h`} />
              </>
            ) : !isScheduled(rule) ? (
              <Fact s={s} label="Tope por dosis" value={`${fmt(rule.maxPerDoseMg)} ${du}`} />
            ) : null}
            <Fact
              s={s}
              label={
                rule.continuous === true
                  ? 'Rango por hora'
                  : isScheduled(rule)
                    ? 'Rango por toma'
                    : 'Rango por dosis'
              }
              value={`${fmt(result.mgPerDose.min)}–${fmt(result.mgPerDose.max)} ${du}${rule.continuous === true ? '/h' : ''}`}
            />
            {rule.durationText ? <Fact s={s} label="Duración" value={rule.durationText} /> : null}
          </View>
          {rule.continuous === true && result.amount.unit === 'mL/h' ? (
            <DripRate mlPerHour={result.amount.value} decimalSeparator={decimalSeparator} />
          ) : null}
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
      {result?.status === 'ok' ? <Tip id="resultado" queue={tips} /> : null}
      {result?.status === 'ok'
        ? result.warnings.map((w) => (
            <Banner key={w} tone="warning">
              {WARNING_TEXT[w]}
            </Banner>
          ))
        : null}
      {result?.status === 'ok' ? (
        <Collapsible
          icon="calculator-variant-outline"
          title="Cálculo paso a paso"
          count={result.steps.length}
        >
          {result.steps.map((st) => (
            <Text key={st.label} style={s.body}>
              {st.label}: {st.expression.replace(/\./g, decimalSeparator)} ={' '}
              {st.result.replace(/\./g, decimalSeparator)}
            </Text>
          ))}
        </Collapsible>
      ) : null}

      {drug.renal ? (
        <Collapsible icon="water-outline" title="Ajuste renal" tone="ok">
          <Text style={s.body}>{drug.renal}</Text>
          {drug.renalTiers ? <RenalTiers tiers={drug.renalTiers} /> : null}
          {onOpenRenalCalc ? (
            <Pressable
              accessibilityRole="link"
              onPress={onOpenRenalCalc}
              hitSlop={8}
              style={s.favPres}
            >
              <Ionicons name="calculator-outline" size={18} color={c.accent} />
              <Text style={s.favPresText}>Calcular la TFG (Schwartz)</Text>
            </Pressable>
          ) : null}
        </Collapsible>
      ) : null}
      {drug.contraindications.length > 0 ? (
        <Collapsible
          icon="cancel"
          title="Contraindicaciones"
          count={drug.contraindications.length}
          tone="danger"
        >
          {drug.contraindications.map((x) => (
            <Text key={x} style={s.body}>
              {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {drug.interactions && drug.interactions.length > 0 ? (
        <Collapsible
          icon="swap-horizontal"
          title="Interacciones"
          count={drug.interactions.length}
          tone="warning"
        >
          {drug.interactions.map((x) => (
            <Text key={x} style={s.body}>
              {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {drug.warnings.length > 0 ? (
        <Collapsible
          icon="alert-outline"
          title="Advertencias"
          count={drug.warnings.length}
          tone="warning"
        >
          {drug.warnings.map((x) => (
            <Text key={x} style={s.body}>
              {x}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      {rule.countryNotes && rule.countryNotes.length > 0 ? (
        <Collapsible icon="earth" title="Diferencias por país" count={rule.countryNotes.length}>
          {rule.countryNotes.map((n) => (
            <Text key={n.country + n.text} style={s.body}>
              <Text style={s.strong}>{COUNTRY_LABEL[n.country]}: </Text>
              {n.text}
            </Text>
          ))}
        </Collapsible>
      ) : null}
      <Collapsible icon="book-open-variant" title="Fuentes" count={orderedSources.length}>
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

/** Nota de la indicación: dos líneas y «Ver más» (las notas citan fuentes y pueden ser largas). */
function Note({ text, s }: { text: string; s: Styles }) {
  const c = useColors();
  const [open, setOpen] = useState(false);
  const long = text.length > 110;
  return (
    <View style={s.note}>
      <Ionicons name="information-circle-outline" size={18} color={c.muted} style={s.noteIcon} />
      <View style={s.flex}>
        <Text style={s.noteText} numberOfLines={open || !long ? undefined : 2}>
          {text}
        </Text>
        {long ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={open ? 'Ver menos' : 'Ver más'}
            onPress={() => setOpen((v) => !v)}
            hitSlop={8}
            style={s.noteMore}
          >
            <Text style={s.noteMoreText}>{open ? 'Ver menos' : 'Ver más'}</Text>
            <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={14} color={c.accent} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

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
    head: { flexDirection: 'row', alignItems: 'center', gap: space.md },
    headIcon: {
      width: 46,
      height: 46,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
    },
    drugName: { fontFamily: family.black, fontSize: 26, lineHeight: 30, color: c.text },
    drugMeta: { fontFamily: family.regular, fontSize: 13, color: c.muted },
    review: { marginTop: 6, marginBottom: space.md },
    bandWrap: { marginBottom: space.md, gap: 6 },
    editPatient: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      minHeight: 36,
    },
    editPatientText: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    resultTape: { height: 6, borderRadius: 3, marginBottom: 4 },
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
    indicationTitle: { fontFamily: family.bold, color: c.text, fontSize: 17, lineHeight: 23 },
    indicationSub: { fontFamily: family.regular, color: c.muted, fontSize: 14, marginTop: 2 },
    indicationSide: { alignItems: 'flex-end', gap: 2 },
    indicationTap: { fontFamily: family.bold, fontSize: 12, color: c.accent },
    indicationMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 6,
    },
    rangePill: {
      fontFamily: family.bold,
      fontSize: 13,
      color: c.accent,
      backgroundColor: c.accentSoft,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: radius.pill,
      overflow: 'hidden',
      fontVariant: ['tabular-nums'],
    },
    note: { flexDirection: 'row', gap: space.sm, paddingHorizontal: 2 },
    noteIcon: { marginTop: 1 },
    noteText: { fontFamily: family.regular, fontSize: 14, lineHeight: 20, color: c.muted },
    noteMore: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 2,
      alignSelf: 'flex-start',
      minHeight: 32,
    },
    noteMoreText: { fontFamily: family.bold, fontSize: 13, color: c.accent },
    indicationCount: {
      fontFamily: family.medium,
      color: c.muted,
      fontSize: 13,
      fontVariant: ['tabular-nums'],
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      padding: space.lg,
      minHeight: MIN_TOUCH,
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: 1,
      borderColor: c.border,
    },
    optionOn: { borderColor: c.accent, borderWidth: 2, padding: space.lg - 1 },
    ruled: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: c.control },
    optionText: { fontFamily: family.bold, color: c.text, fontSize: 16, lineHeight: 21 },
    optionSub: { fontFamily: family.regular, color: c.muted, fontSize: 13 },
    presRow: { gap: 10, paddingRight: 20 },
    favPres: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
      alignSelf: 'flex-start',
      minHeight: MIN_TOUCH,
      marginTop: -6,
      marginBottom: 6,
    },
    favPresText: { fontFamily: family.bold, fontSize: 14, color: c.accent },
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
    clear: { fontFamily: family.bold, fontSize: 14, color: c.accent },
    fieldGroup: { fontFamily: family.medium, fontSize: 14, color: c.muted },
    autoHint: { fontFamily: family.medium, fontSize: 13, color: c.accent, marginTop: 4 },
    optionNo: { fontFamily: family.regular, fontSize: 12, color: c.warning, marginTop: 2 },
    presForm: { fontFamily: family.regular, color: c.muted, fontSize: 13 },
    presLabel: { fontFamily: family.bold, color: c.text, fontSize: 15, lineHeight: 20 },
    presBrands: { fontFamily: family.regular, color: c.muted, fontSize: 13, lineHeight: 18 },
    quick: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      backgroundColor: c.hero,
      borderRadius: radius.lg,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    quickRx: { fontFamily: family.black, fontSize: 18, color: c.heroMuted },
    quickAmount: {
      fontFamily: family.black,
      fontSize: 28,
      lineHeight: 32,
      color: c.onHero,
      fontVariant: ['tabular-nums'],
    },
    quickSub: { fontFamily: family.medium, fontSize: 13, color: c.heroMuted },
    result: {
      backgroundColor: c.accentSoft,
      borderRadius: radius.lg,
      padding: space.lg,
      marginBottom: space.md,
      gap: 6,
    },
    resultTop: { flexDirection: 'row', alignItems: 'baseline', gap: 10 },
    rx: { fontFamily: family.black, fontSize: 22, color: c.accent },
    resultFor: { flex: 1, fontFamily: family.medium, fontSize: 15, color: c.text },
    resultAmount: {
      fontFamily: family.black,
      fontSize: font.figure,
      lineHeight: 46,
      color: c.accent,
      fontVariant: ['tabular-nums'],
    },
    resultLine: { fontFamily: family.regular, fontSize: 16, lineHeight: 22, color: c.text },
    resultMg: { fontFamily: family.bold, color: c.text, fontVariant: ['tabular-nums'] },
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
    shareText: { fontFamily: family.bold, fontSize: 15, color: c.accent },
    error: { fontFamily: family.regular, color: c.danger, fontSize: 15 },
    body: { fontFamily: family.regular, fontSize: 15, lineHeight: 22, color: c.text },
    strong: { fontFamily: family.bold },
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
