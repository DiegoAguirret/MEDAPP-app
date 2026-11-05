import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { Category } from '@medapp/content-schema';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/** Etiqueta, ícono (MaterialCommunityIcons) y tono de cada categoría, en el orden en que se muestran. */
export const CATEGORIES: Record<Category, { label: string; icon: IconName; hue: string }> = {
  urgencia: { label: 'Urgencias y antídotos', icon: 'ambulance', hue: '#C62828' },
  analgesico: { label: 'Analgésicos y antipiréticos', icon: 'thermometer', hue: '#D9730D' },
  antibiotico: { label: 'Antibióticos', icon: 'bacteria-outline', hue: '#1F5FAD' },
  antihistaminico: { label: 'Antihistamínicos', icon: 'flower-pollen-outline', hue: '#B4458C' },
  respiratorio: { label: 'Respiratorio', icon: 'lungs', hue: '#0B8AA8' },
  corticoide: { label: 'Corticoides', icon: 'flask-outline', hue: '#6B5BB5' },
  gastrointestinal: { label: 'Gastrointestinal', icon: 'stomach', hue: '#8A6A1F' },
  antiparasitario: { label: 'Antiparasitarios', icon: 'bug-outline', hue: '#5E8A1E' },
  antiviral: { label: 'Antivirales', icon: 'virus-outline', hue: '#B03A5B' },
  antifungico: { label: 'Antifúngicos', icon: 'mushroom-outline', hue: '#7A5230' },
  anticonvulsivante: { label: 'Anticonvulsivantes', icon: 'brain', hue: '#4F5FB8' },
  cardiovascular: { label: 'Cardiovascular', icon: 'heart-pulse', hue: '#C2410C' },
  vitamina: { label: 'Vitaminas y minerales', icon: 'food-apple-outline', hue: '#2E8B57' },
  otro: { label: 'Otros', icon: 'pill', hue: '#5B6472' },
};

export const CATEGORY_ORDER = Object.keys(CATEGORIES) as Category[];
