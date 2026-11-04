import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { colors, font, MIN_TOUCH, radius, space } from './theme';

export function Card({ children }: { children: ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Text style={styles.section}>{children}</Text>;
}

export function Banner({
  tone,
  children,
}: {
  tone: 'danger' | 'warning' | 'ok';
  children: ReactNode;
}) {
  const palette = {
    danger: { bg: colors.dangerBg, fg: colors.danger },
    warning: { bg: colors.warningBg, fg: colors.warning },
    ok: { bg: colors.okBg, fg: colors.ok },
  }[tone];
  return (
    <View
      accessibilityRole="alert"
      style={[styles.banner, { backgroundColor: palette.bg, borderColor: palette.fg }]}
    >
      <Text style={[styles.bannerText, { color: palette.fg }]}>{children}</Text>
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
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[styles.chip, selected && styles.chipSelected]}
    >
      <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{label}</Text>
    </Pressable>
  );
}

export function NumberField({
  label,
  suffix,
  ...props
}: { label: string; suffix?: string } & Omit<TextInputProps, 'style'>) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          accessibilityLabel={label}
          keyboardType="decimal-pad"
          inputMode="decimal"
          style={styles.input}
          placeholderTextColor={colors.muted}
          {...props}
        />
        {suffix ? <Text style={styles.suffix}>{suffix}</Text> : null}
      </View>
    </View>
  );
}

export function Button({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: space.lg,
    marginBottom: space.md,
    gap: space.sm,
  },
  section: {
    fontSize: font.small,
    fontWeight: '700',
    color: colors.muted,
    textTransform: 'uppercase',
  },
  banner: { borderWidth: 1, borderRadius: radius.sm, padding: space.md, marginBottom: space.md },
  bannerText: { fontSize: font.body, fontWeight: '600' },
  chip: {
    minHeight: MIN_TOUCH,
    justifyContent: 'center',
    paddingHorizontal: space.md,
    borderRadius: radius.sm,
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: font.body },
  chipTextSelected: { color: colors.primaryText, fontWeight: '700' },
  field: { flex: 1, gap: space.xs },
  fieldLabel: { color: colors.muted, fontSize: font.small },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: space.xs },
  input: {
    flex: 1,
    minHeight: MIN_TOUCH,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingHorizontal: space.md,
    fontSize: font.title,
    color: colors.text,
    backgroundColor: colors.card,
  },
  suffix: { color: colors.muted, fontSize: font.body },
  button: {
    minHeight: MIN_TOUCH,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: space.lg,
  },
  buttonText: { color: colors.primaryText, fontSize: font.body, fontWeight: '700' },
});
