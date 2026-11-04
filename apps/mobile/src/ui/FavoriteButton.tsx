import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable } from 'react-native';
import { useSettings } from '../state/settings';
import { MIN_TOUCH, useColors } from './theme';

export function FavoriteButton({ drugId }: { drugId: string }) {
  const { isFavorite, toggleFavorite } = useSettings();
  const c = useColors();
  const on = isFavorite(drugId);
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={on ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      onPress={() => toggleFavorite(drugId)}
      hitSlop={8}
      style={{
        minWidth: MIN_TOUCH,
        minHeight: MIN_TOUCH,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Ionicons name={on ? 'star' : 'star-outline'} size={24} color={on ? '#F2B705' : c.muted} />
    </Pressable>
  );
}
