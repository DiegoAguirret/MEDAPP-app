import type { NotCalculableReason, Warning } from '@medapp/dose-engine';

export const WARNING_TEXT: Record<Warning, string> = {
  capped_adult_max:
    'Se aplicó el tope máximo de la ficha: la dosis calculada por peso lo superaba.',
  weight_implausible: 'El peso no es habitual para la edad. Verifica que esté bien ingresado.',
  rounding_exceeds_5pct:
    'Esta presentación no permite medir la dosis con precisión: se muestra el valor exacto. Considera otra presentación.',
  obesity_check: 'En obesidad, verifica si corresponde dosificar por peso ideal o ajustado.',
};

export const REASON_TEXT: Record<NotCalculableReason, string> = {
  neonate_v2:
    'Esta indicación no es para menores de 1 mes. Si la ficha tiene una indicación neonatal, elígela; si no, consulta una referencia neonatal.',
  invalid_weight: 'Ingresa un peso entre 0.1 y 150 kg.',
  invalid_age: 'Ingresa una edad válida.',
  age_out_of_rule: 'La edad está fuera del rango de edad de esta indicación.',
  weight_out_of_rule: 'El peso está fuera del rango de peso de esta indicación.',
  choice_out_of_range: 'El valor elegido está fuera del rango de la ficha.',
  presentation_not_allowed: 'Esta presentación no corresponde a la indicación elegida.',
};

export const CLINICAL_DISCLAIMER =
  'Herramienta de apoyo. La decisión clínica es responsabilidad del médico tratante. Verifica con la ficha técnica.';
