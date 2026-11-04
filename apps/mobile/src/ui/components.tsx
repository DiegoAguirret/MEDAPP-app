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
import { font, MIN_TOUCH, radius, space, useColors, type Palette } from './theme';

function makeStyles(c: Palette) {
  return StyleSheet.create({
    card: {
      backgroundColor: c.card,
      borderRadius: radius.md,
      borderWidth: 1,
      borderColor: c.border,
      padding: space.lg,
      marginBottom: space.md,
      gap: space.sm,
    },
    section: {
      fontSize: font.small,
      fontWeight: '800',
      letterSpacing: 0.6,
      color: c.muted,
      textTransform: 'uppercase',
    },
    banner: { borderWidth: 1, borderRadius: radius.sm, padding: space.md, marginBottom: space.md },
    bannerText: { fontSize: font.body, fontWeight: '600' },
    badge: {
      alignSelf: 'flex-start',
      backgroundColor: c.okBg,
      borderRadius: radius.sm,
      paddingHorizontal: space.md,
      paddingVertical: space.xs,
      marginBottom: space.md,
    },
    badgeText: { color: c.ok, fontSize: font.small, fontWeight: '700' },
    pill: {
      alignSelf: 'flex-start',
      backgroundColor: c.primarySoft,
      borderRadius: 999,
      paddingHorizontal: space.md,
      paddingVertical: space.xs,
    },
    pillText: { color: c.primary, fontSize: font.small, fontWeight: '700' },
    chip: {
      minHeight: MIN_TOUCH,
      justifyContent: 'center',
      paddingHorizontal: space.md,
      borderRadius: radius.sm,
      backgroundColor: c.chip,
      borderWidth: 1,
      borderColor: c.border,
    },
    chipSelected: { backgroundColor: c.primary, borderColor: c.primary },
    chipText: { color: c.text, fontSize: font.body },
    chipTextSelected: { color: c.primaryText, fontWeight: '700' },
    segment: {
      flexDirection: 'row',
      backgroundColor: c.chip,
      borderRadius: radius.sm,
      padding: 3,
      alignSelf: 'flex-start',
    },
    segmentItem: {
      minHeight: 40,
      minWidth: 56,
      paddingHorizontal: space.md,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: radius.sm - 2,
    },
    segmentItemOn: { backgroundColor: c.primary },
    segmentText: { color: c.muted, fontWeight: '700', fontSize: font.small },
    segmentTextOn: { color: c.primaryText },
    field: { flex: 1, gap: space.xs },
    fieldLabel: { color: c.muted, fontSize: font.small, fontWeight: '700' },
    inputRow: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
    input: {
      flex: 1,
      minHeight: 56,
      borderWidth: 1,
      borderColor: c.border,
      borderRadius: radius.sm,
      paddingHorizontal: space.md,
      fontSize: 24,
      fontWeight: '700',
      color: c.text,
      backgroundColor: c.bg,
    },
    suffix: { color: c.muted, fontSize: font.body },
    button: {
      minHeight: MIN_TOUCH,
      backgroundColor: c.primary,
      borderRadius: radius.sm,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: space.lg,
    },
    buttonText: { color: c.primaryText, fontSize: font.body, fontWeight: '800' },
    collapsibleHead: {
      minHeight: MIN_TOUCH,
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
    },
    collapsibleTitle: { flex: 1, color: c.text, fontSize: font.body, fontWeight: '700' },
    count: {
      minWidth: 28,
      height: 28,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 6,
    },
    countText: { color: '#FFFFFF', fontWeight: '800', fontSize: font.small },
    chevron: { color: c.muted, fontSize: font.title },
  });
}

export function useStyles() {
  const c = useColors();
  return useMemo(() => makeStyles(c), [c]);
}

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
    danger: { bg: c.dangerBg, fg: c.danger },
    warning: { bg: c.warningBg, fg: c.warning },
    ok: { bg: c.okBg, fg: c.ok },
  }[tone];
  return (
    <View
      accessibilityRole="alert"
      style={[s.banner, { backgroundColor: palette.bg, borderColor: palette.fg }]}
    >
      <Text style={[s.bannerText, { color: palette.fg }]}>{children}</Text>
    </View>
  );
}

const fmtDate = (iso: string) => iso.split('-').reverse().join('/');

/** Estado de revisión de la ficha: discreto si está verificada, alerta solo si no lo está. */
export function ReviewBadge({ review }: { review: Review }) {
  const s = useStyles();
  if (review.status === 'borrador') {
    return <Banner tone="danger">Ficha sin verificar: no usar en pacientes.</Banner>;
  }
  const date = review.reviewedAt ? ` · ${fmtDate(review.reviewedAt)}` : '';
  const text =
    review.status === 'validado'
      ? `Revisado por ${review.reviewers.join(', ')}${date}`
      : `Fuentes verificadas${date}`;
  return (
    <View style={s.badge}>
      <Text style={s.badgeText}>✓ {text}</Text>
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
      style={[s.chip, selected && s.chipSelected]}
    >
      <Text style={[s.chipText, selected && s.chipTextSelected]}>{label}</Text>
    </Pressable>
  );
}

/** Selector compacto de 2–4 opciones (kg/lb, años/días, oral/IV…). */
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
  suffix,
  ...props
}: { label: string; suffix?: string } & Omit<TextInputProps, 'style'>) {
  const s = useStyles();
  const c = useColors();
  return (
    <View style={s.field}>
      <Text style={s.fieldLabel}>{label}</Text>
      <View style={s.inputRow}>
        <TextInput
          accessibilityLabel={label}
          keyboardType="decimal-pad"
          inputMode="decimal"
          style={s.input}
          placeholderTextColor={c.muted}
          {...props}
        />
        {suffix ? <Text style={s.suffix}>{suffix}</Text> : null}
      </View>
    </View>
  );
}

export function Button({ label, onPress }: { label: string; onPress: () => void }) {
  const s = useStyles();
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={s.button}>
      <Text style={s.buttonText}>{label}</Text>
    </Pressable>
  );
}

/** Sección plegable con contador, como «Contraindicaciones (3)». */
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
  const bg = { primary: c.primary, danger: c.danger, warning: c.warning, ok: c.ok }[tone];
  return (
    <View style={s.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={title}
        onPress={() => setOpen((v) => !v)}
        style={s.collapsibleHead}
      >
        <Text style={s.collapsibleTitle}>{title}</Text>
        {count !== undefined ? (
          <View style={[s.count, { backgroundColor: bg }]}>
            <Text style={s.countText}>{count}</Text>
          </View>
        ) : null}
        <Text style={s.chevron}>{open ? '▴' : '▾'}</Text>
      </Pressable>
      {open ? children : null}
    </View>
  );
}
