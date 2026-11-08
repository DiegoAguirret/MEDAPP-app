import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useMemo } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { family, MIN_TOUCH, radius, space, useColors, WEB_NO_OUTLINE, type Palette } from './theme';

/** Campo de búsqueda con lupa y botón para borrar. */
export function SearchBox({
  value,
  onChangeText,
  placeholder,
  label,
}: {
  value: string;
  onChangeText: (v: string) => void;
  placeholder: string;
  label: string;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  return (
    <View style={s.search}>
      <MaterialCommunityIcons name="magnify" size={22} color={c.muted} />
      <TextInput
        accessibilityLabel={label}
        placeholder={placeholder}
        placeholderTextColor={c.muted}
        value={value}
        onChangeText={onChangeText}
        style={[s.input, WEB_NO_OUTLINE]}
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.trim() !== '' ? (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Borrar búsqueda"
          onPress={() => onChangeText('')}
          hitSlop={12}
        >
          <MaterialCommunityIcons name="close-circle" size={20} color={c.muted} />
        </Pressable>
      ) : null}
    </View>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.sm,
      minHeight: 52,
      backgroundColor: c.surface,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: c.control,
      paddingHorizontal: space.lg,
    },
    input: {
      flex: 1,
      fontFamily: family.regular,
      fontSize: 16,
      color: c.text,
      minHeight: MIN_TOUCH,
    },
  });
}
