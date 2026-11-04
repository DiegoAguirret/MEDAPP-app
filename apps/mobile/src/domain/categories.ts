import type { Category } from '@medapp/content-schema';

/** Etiqueta, ícono (Ionicons) y color de acento de cada categoría. */
export const CATEGORIES: Record<Category, { label: string; icon: string; color: string }> = {
  antibiotico: { label: 'Antibióticos', icon: 'shield-checkmark-outline', color: '#2F80ED' },
  analgesico: {
    label: 'Analgésicos y antipiréticos',
    icon: 'thermometer-outline',
    color: '#F2994A',
  },
  antihistaminico: { label: 'Antihistamínicos', icon: 'flower-outline', color: '#BB6BD9' },
  respiratorio: { label: 'Respiratorio', icon: 'cloud-outline', color: '#2D9CDB' },
  corticoide: { label: 'Corticoides', icon: 'flask-outline', color: '#9B51E0' },
  gastrointestinal: { label: 'Gastrointestinal', icon: 'nutrition-outline', color: '#8D6E63' },
  antiparasitario: { label: 'Antiparasitarios', icon: 'bug-outline', color: '#6D4C41' },
  antiviral: { label: 'Antivirales', icon: 'medical-outline', color: '#27AE60' },
  antifungico: { label: 'Antifúngicos', icon: 'leaf-outline', color: '#B620E0' },
  anticonvulsivante: { label: 'Anticonvulsivantes', icon: 'pulse-outline', color: '#5B5BD6' },
  cardiovascular: { label: 'Cardiovascular', icon: 'heart-outline', color: '#EB5757' },
  vitamina: { label: 'Vitaminas y minerales', icon: 'sunny-outline', color: '#F2C94C' },
  otro: { label: 'Otros', icon: 'bandage-outline', color: '#828282' },
};

export const CATEGORY_ORDER = Object.keys(CATEGORIES) as Category[];
