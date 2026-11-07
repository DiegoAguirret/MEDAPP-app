import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Drug } from '@medapp/content-schema';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/**
 * Colecciones que cruzan categorías: se arman desde las reglas de cada ficha, nunca a mano, así
 * que una ficha nueva con infusión o con dosis neonatal aparece sola.
 */
export const COLLECTIONS = {
  infusiones: {
    title: 'Infusiones continuas',
    icon: 'water-pump' as IconName,
    pick: (d: Drug) => d.rules.some((r) => r.continuous === true),
  },
  neonatos: {
    title: 'Dosis neonatales',
    icon: 'baby-face-outline' as IconName,
    pick: (d: Drug) => d.rules.some((r) => r.neonatal === true),
  },
} as const;

export type CollectionId = keyof typeof COLLECTIONS;

export const isCollection = (id: string): id is CollectionId => id in COLLECTIONS;

export function collectionDrugs(
  id: CollectionId,
  drugs: Drug[],
  recalled: Set<string> = new Set(),
): Drug[] {
  return drugs
    .filter((d) => !recalled.has(d.id) && COLLECTIONS[id].pick(d))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
}
