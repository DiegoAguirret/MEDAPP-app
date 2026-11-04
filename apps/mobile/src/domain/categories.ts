import type { Category } from '@medapp/content-schema';

/** Etiqueta de cada categoría, en el orden en que se muestran. */
export const CATEGORIES: Record<Category, { label: string }> = {
  analgesico: { label: 'Analgésicos y antipiréticos' },
  antibiotico: { label: 'Antibióticos' },
  antihistaminico: { label: 'Antihistamínicos' },
  respiratorio: { label: 'Respiratorio' },
  corticoide: { label: 'Corticoides' },
  gastrointestinal: { label: 'Gastrointestinal' },
  antiparasitario: { label: 'Antiparasitarios' },
  antiviral: { label: 'Antivirales' },
  antifungico: { label: 'Antifúngicos' },
  anticonvulsivante: { label: 'Anticonvulsivantes' },
  cardiovascular: { label: 'Cardiovascular' },
  vitamina: { label: 'Vitaminas y minerales' },
  otro: { label: 'Otros' },
};

export const CATEGORY_ORDER = Object.keys(CATEGORIES) as Category[];
