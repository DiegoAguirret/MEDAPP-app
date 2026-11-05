import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useContext, useEffect, useMemo, useRef, type ComponentProps, type ReactNode } from 'react';
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { useReduceMotion } from './motion';
import { family, radius, space, type, useColors, type Palette } from './theme';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

/**
 * Hoja inferior (como en Android y Pediatrum): sube desde abajo sobre un velo, se cierra con la
 * X, tocando el velo o con el botón «Atrás».
 */
export function Sheet({
  visible,
  title,
  subtitle,
  icon,
  onClose,
  children,
}: {
  visible: boolean;
  title: string;
  subtitle?: string;
  icon?: IconName;
  onClose: () => void;
  children: ReactNode;
}) {
  const c = useColors();
  const s = useMemo(() => makeStyles(c), [c]);
  const reduce = useReduceMotion();
  // Sin proveedor (pruebas), sin margen inferior extra.
  const bottomInset = useContext(SafeAreaInsetsContext)?.bottom ?? 0;
  const v = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!visible) return;
    if (reduce) {
      v.setValue(1);
      return;
    }
    v.setValue(0);
    Animated.timing(v, {
      toValue: 1,
      duration: 260,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [visible, reduce, v]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={s.root}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cerrar"
          style={StyleSheet.absoluteFill}
          onPress={onClose}
        >
          <View style={s.scrim} />
        </Pressable>
        <Animated.View
          accessibilityViewIsModal
          style={[
            s.panel,
            { paddingBottom: bottomInset + space.lg },
            {
              transform: [
                { translateY: v.interpolate({ inputRange: [0, 1], outputRange: [48, 0] }) },
              ],
            },
          ]}
        >
          <View style={s.handle} />
          <View style={s.head}>
            {icon ? (
              <View style={s.icon}>
                <MaterialCommunityIcons name={icon} size={22} color={c.accent} />
              </View>
            ) : null}
            <View style={s.flex}>
              <Text accessibilityRole="header" style={s.title}>
                {title}
              </Text>
              {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Cerrar hoja"
              onPress={onClose}
              hitSlop={8}
              style={({ pressed }) => [s.close, pressed && { opacity: 0.6 }]}
            >
              <MaterialCommunityIcons name="close" size={22} color={c.text} />
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={s.body} keyboardShouldPersistTaps="handled">
            {children}
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

function makeStyles(c: Palette) {
  return StyleSheet.create({
    root: { flex: 1, justifyContent: 'flex-end' },
    scrim: { flex: 1, backgroundColor: 'rgba(8, 12, 18, 0.55)' },
    flex: { flex: 1 },
    panel: {
      maxHeight: '86%',
      backgroundColor: c.ground,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      paddingTop: space.sm,
    },
    handle: {
      alignSelf: 'center',
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: c.control,
      marginBottom: space.sm,
    },
    head: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: space.md,
      paddingHorizontal: space.lg,
      paddingBottom: space.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: c.border,
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: radius.md,
      backgroundColor: c.accentSoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: { fontFamily: family.black, fontSize: 20, lineHeight: 24, color: c.text },
    subtitle: { fontFamily: family.regular, fontSize: type.label, color: c.muted, marginTop: 1 },
    close: {
      width: 44,
      height: 44,
      borderRadius: radius.md,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: c.surface,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: c.border,
    },
    body: { padding: space.lg, gap: space.sm },
  });
}
