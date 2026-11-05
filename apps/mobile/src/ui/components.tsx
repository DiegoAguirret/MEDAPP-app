import Ionicons from '@expo/vector-icons/Ionicons';
import { LayoutAnimation } from 'react-native';
import type { Review } from '@medapp/content-schema';
import { useMemo, useState, type ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type TextInputProps,
  type ViewStyle,
} from 'react-native';
import {
  family,
  font,
  MIN_TOUCH,
  radius,
  space,
  useColors,
  WEB_NO_OUTLINE,
  type Palette,
} from './theme';

function makeStyles(c: Palette) {
  return StyleSheet.create({
    card: {
      backgroundColor: c.surface,
      borderRadius: radius.lg,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
      padding: space.lg,
      marginBottom: space.md,
      gap: space.md,
    },
    section: { fontFamily: family.bold, fontSize: 14, color: c.text },
    banner: {
      flexDirection: 'row',
      gap: space.sm,
      borderWidth: 1,
      borderRadius: radius.md,
      paddingHorizontal: space.lg,
      paddingVertical: space.md,
      marginBottom: space.md,
    },
    bannerText: { flex: 1, fontFamily: family.medium, fontSize: 14, lineHeight: 20 },
    review: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    reviewText: { fontFamily: family.regular, fontSize: font.small, color: c.muted },
    pill: {
      alignSelf: 'flex-start',
      backgroundColor: c.rule,
      borderRadius: radius.pill,
      paddingHorizontal: 10,
      paddingVertical: 3,
    },
    pillText: { fontFamily: family.medium, color: c.text, fontSize: 12 },
    chip: {
      minHeight: 44,
      justifyContent: 'center',
      paddingHorizontal: space.lg,
      borderRadius: radius.pill,
      backgroundColor: c.raised,
      borderWidth: 1,
      borderColor: c.control,
    },
    chipSelected: { backgroundColor: c.ink, borderColor: c.ink },
    chipText: { fontFamily: family.medium, color: c.text, fontSize: 15 },
    chipTextSelected: { color: c.onInk },
    segment: {
      flexDirection: 'row',
      backgroundColor: c.rule,
      borderRadius: radius.pill,
      padding: 3,
      alignSelf: 'flex-start',
    },
    segmentItem: {
      minHeight: 38,
      minWidth: 56,
      paddingHorizontal: 14,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius.pill,
    },
    segmentItemOn: { backgroundColor: c.selected },
    segmentText: { fontFamily: family.medium, color: c.muted, fontSize: 14 },
    segmentTextOn: { color: c.text },
    field: { flex: 1, gap: 6 },
    fieldLabel: { fontFamily: family.medium, color: c.muted, fontSize: font.small },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: 52,
      borderWidth: 1,
      borderColor: c.control,
      borderRadius: 14,
      backgroundColor: c.raised,
      paddingHorizontal: 14,
      gap: space.xs,
    },
    input: {
      flex: 1,
      minWidth: 0,
      width: '100%',
      minHeight: 50,
      fontFamily: family.bold,
      fontSize: 22,
      color: c.text,
      fontVariant: ['tabular-nums'],
      padding: 0,
    },
    suffix: { fontFamily: family.regular, color: c.muted, fontSize: 15 },
    button: {
      minHeight: 52,
      backgroundColor: c.ink,
      borderRadius: radius.pill,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: space.xl,
    },
    buttonText: { fontFamily: family.bold, color: c.onInk, fontSize: font.body },
    quiet: {
      minHeight: MIN_TOUCH,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: space.lg,
    },
    quietText: { fontFamily: family.bold, color: c.text, fontSize: 15 },
    collapsibleHead: {
      minHeight: MIN_TOUCH,
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
    },
    collapsibleTitle: { flex: 1, fontFamily: family.medium, color: c.text, fontSize: font.body },
    count: { fontFamily: family.medium, fontSize: 14, fontVariant: ['tabular-nums'] },
    collapsibleBody: { gap: space.sm, paddingBottom: space.xs },
  });
}

export function useStyles() {
  const c = useColors();
  return useMemo(() => makeStyles(c), [c]);
}

/** Panel tonal: agrupa sin bordes ni sombras. */
export function Card({ children, style }: { children: ReactNode; style?: ViewStyle }) {
  const s = useStyles();
  return <View style={[s.card, style]}>{children}</View>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  const s = useStyles();
  return <Text style={s.section}>{children}</Text>;
}

export function Banner({
  tone,
  children,
}: {
  tone: 'danger' | 'warning' | 'ok';
  children: ReactNode;
}) {
  const s = useStyles();
  const c = useColors();
  const palette = {
    danger: { bg: c.dangerBg, fg: c.danger, icon: 'alert-circle-outline' },
    warning: { bg: c.warningBg, fg: c.warning, icon: 'information-circle-outline' },
    ok: { bg: c.okBg, fg: c.ok, icon: 'checkmark-circle-outline' },
  }[tone];
  return (
    <View
      accessibilityRole="alert"
      style={[s.banner, { backgroundColor: palette.bg, borderColor: palette.bg }]}
    >
      <Ionicons
        name={palette.icon as keyof typeof Ionicons.glyphMap}
        size={18}
        color={palette.fg}
        style={{ marginTop: 1 }}
      />
      <Text style={[s.bannerText, { color: palette.fg }]}>{children}</Text>
    </View>
  );
}

const MONTHS = [
  'ene.',
  'feb.',
  'mar.',
  'abr.',
  'may.',
  'jun.',
  'jul.',
  'ago.',
  'sept.',
  'oct.',
  'nov.',
  'dic.',
];
/** «2026-11-04» → «4 nov. 2026»: sin la ambigüedad de 04/11 (¿4 de noviembre o 11 de abril?). */
export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[(m ?? 1) - 1]} ${y}`;
};

/** Estado de revisión de la ficha: una línea discreta si está verificada, alerta solo si no lo está. */
export function ReviewBadge({ review }: { review: Review }) {
  const s = useStyles();
  const c = useColors();
  if (review.status === 'borrador') {
    return <Banner tone="danger">Ficha sin verificar: no usar en pacientes.</Banner>;
  }
  // Dice qué se hizo, cuándo y qué falta: no es la fecha de hoy ni una revisión médica.
  const on = review.reviewedAt ? ` el ${fmtDate(review.reviewedAt)}` : '';
  const text =
    review.status === 'validado'
      ? `Revisado por ${review.reviewers.join(', ')}${on}`
      : `Dosis cotejadas con sus fuentes${on}` +
        (review.reviewers.length === 0 ? ' · falta revisión médica' : '');
  return (
    <View style={s.review}>
      <Ionicons name="checkmark-circle-outline" size={15} color={c.ok} />
      <Text style={s.reviewText}>{text}</Text>
    </View>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  const s = useStyles();
  return (
    <View style={s.pill}>
      <Text style={s.pillText}>{children}</Text>
    </View>
  );
}

export function Chip({
  label,
  selected,
  onPress,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
}) {
  const s = useStyles();
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={({ pressed }) => [s.chip, selected && s.chipSelected, pressed && { opacity: 0.7 }]}
    >
      <Text style={[s.chipText, selected && s.chipTextSelected]}>{label}</Text>
    </Pressable>
  );
}

/** Selector compacto de 2–5 opciones (kg/lb, años/días, oral/IV…). */
export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  const s = useStyles();
  return (
    <View accessibilityRole="radiogroup" accessibilityLabel={label} style={s.segment}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <Pressable
            key={o.value}
            accessibilityRole="radio"
            accessibilityState={{ selected: on }}
            onPress={() => onChange(o.value)}
            style={[s.segmentItem, on && s.segmentItemOn]}
          >
            <Text style={[s.segmentText, on && s.segmentTextOn]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function NumberField({
  label,
  caption,
  suffix,
  ...props
}: {
  /** Nombre accesible (y visible si no hay caption). */
  label: string;
  /** Rótulo visible corto, p. ej. «Peso» para «Peso en kilogramos». */
  caption?: string;
  suffix?: string;
} & Omit<TextInputProps, 'style'>) {
  const s = useStyles();
  const c = useColors();
  const [focused, setFocused] = useState(false);
  return (
    <View style={s.field}>
      <Text style={s.fieldLabel}>{caption ?? label}</Text>
      <View style={[s.inputRow, focused && { borderColor: c.accent }]}>
        <TextInput
          accessibilityLabel={label}
          keyboardType="decimal-pad"
          inputMode="decimal"
          style={[s.input, WEB_NO_OUTLINE]}
          placeholderTextColor={c.muted}
          {...props}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
        />
        {suffix ? <Text style={s.suffix}>{suffix}</Text> : null}
      </View>
    </View>
  );
}

export function Button({
  label,
  onPress,
  variant = 'primary',
}: {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'quiet';
}) {
  const s = useStyles();
  const quiet = variant === 'quiet';
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [quiet ? s.quiet : s.button, pressed && { opacity: 0.75 }]}
    >
      <Text style={quiet ? s.quietText : s.buttonText}>{label}</Text>
    </Pressable>
  );
}

/** Sección plegable con contador, como «Contraindicaciones 3». */
export function Collapsible({
  title,
  count,
  tone = 'primary',
  initiallyOpen = false,
  children,
}: {
  title: string;
  count?: number;
  tone?: 'primary' | 'danger' | 'warning' | 'ok';
  initiallyOpen?: boolean;
  children: ReactNode;
}) {
  const s = useStyles();
  const c = useColors();
  const [open, setOpen] = useState(initiallyOpen);
  const countColor = { primary: c.muted, danger: c.danger, warning: c.warning, ok: c.ok }[tone];
  return (
    <View style={[s.card, { paddingVertical: space.sm }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={title}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setOpen((v) => !v);
        }}
        style={s.collapsibleHead}
      >
        <Text style={s.collapsibleTitle}>{title}</Text>
        {count !== undefined ? <Text style={[s.count, { color: countColor }]}>{count}</Text> : null}
        <Ionicons name={open ? 'chevron-up' : 'chevron-down'} size={18} color={c.muted} />
      </Pressable>
      {open ? <View style={s.collapsibleBody}>{children}</View> : null}
    </View>
  );
}
