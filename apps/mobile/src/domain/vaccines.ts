/**
 * Esquema Nacional de Inmunizaciones de la NTS N.° 246-MINSA/DGIESP-2026 (RM N.° 561-2026-MINSA):
 * tabla 6.2.2 «Esquema de vacunación de la niña y el niño (0 a 11 años, 11 meses y 29 días)» y
 * tabla 6.2.3 «Esquema de vacunación en el adolescente», leídas en la imagen de las págs. 45–47.
 * Nirsevimab: indicación y dosis de la ficha 6.1.1.24 (pág. 44).
 */

export interface VaccineDose {
  name: string;
  dose: string;
  note?: string;
}

export interface Visit {
  label: string;
  /** Edad de inicio y fin en meses (igual si es una edad puntual). */
  fromMonths: number;
  toMonths: number;
  vaccines: VaccineDose[];
}

const PENTA = 'Pentavalente (DPT-HvB-Hib) o Hexavalente (DPT-HvB-Hib-IPV) (*)';
const IPV = 'Antipolio inactivada inyectable (IPV) (**)';
const NIRSE_NOTE =
  'Recién nacidos de madres no vacunadas frente al VRS, nacidos de abril a septiembre: 50 mg IM si pesa menos de 5 kg; 100 mg IM si pesa 5 kg o más.';

export const VISITS: Visit[] = [
  {
    label: 'Recién nacido',
    fromMonths: 0,
    toMonths: 0,
    vaccines: [
      { name: 'BCG (Bacilo de Calmette-Guérin)', dose: 'Dosis única' },
      { name: 'Hepatitis B (HvB)', dose: 'Dosis única' },
      {
        name: 'Anticuerpo monoclonal contra el VRS (nirsevimab)',
        dose: 'Dosis única',
        note: NIRSE_NOTE,
      },
    ],
  },
  {
    label: '2 meses',
    fromMonths: 2,
    toMonths: 2,
    vaccines: [
      { name: PENTA, dose: '1.ª dosis' },
      { name: IPV, dose: '1.ª dosis' },
      { name: 'Rotavirus', dose: '1.ª dosis' },
      { name: 'Neumococo', dose: '1.ª dosis' },
    ],
  },
  {
    label: '4 meses',
    fromMonths: 4,
    toMonths: 4,
    vaccines: [
      { name: PENTA, dose: '2.ª dosis' },
      { name: IPV, dose: '2.ª dosis' },
      { name: 'Rotavirus', dose: '2.ª dosis' },
      { name: 'Neumococo', dose: '2.ª dosis' },
    ],
  },
  {
    label: '6 meses',
    fromMonths: 6,
    toMonths: 6,
    vaccines: [
      { name: PENTA, dose: '3.ª dosis' },
      { name: IPV, dose: '3.ª dosis' },
      { name: 'Influenza pediátrica', dose: '1.ª dosis' },
    ],
  },
  {
    label: '1 a 6 meses',
    fromMonths: 1,
    toMonths: 6,
    vaccines: [
      {
        name: 'Anticuerpo monoclonal contra el VRS (nirsevimab) (***)',
        dose: 'Dosis única',
        note: 'Excepcionalmente, en menores de 6 meses que no lo recibieron como recién nacidos: 100 mg IM si pesa 5 kg o más (50 mg si pesa menos de 5 kg).',
      },
    ],
  },
  {
    label: '7 meses',
    fromMonths: 7,
    toMonths: 7,
    vaccines: [{ name: 'Influenza pediátrica', dose: '2.ª dosis' }],
  },
  {
    label: '12 meses',
    fromMonths: 12,
    toMonths: 12,
    vaccines: [
      { name: 'Sarampión, Paperas, Rubéola (SPR)', dose: '1.ª dosis' },
      { name: 'Neumococo', dose: '3.ª dosis' },
      { name: 'Varicela', dose: '1.ª dosis' },
      { name: 'Influenza pediátrica', dose: 'Dosis única' },
    ],
  },
  {
    label: '15 meses',
    fromMonths: 15,
    toMonths: 15,
    vaccines: [
      { name: 'Antiamarílica (AMA)', dose: 'Dosis única' },
      { name: 'Hepatitis A', dose: 'Dosis única' },
    ],
  },
  {
    label: '18 meses',
    fromMonths: 18,
    toMonths: 18,
    vaccines: [
      {
        name: 'Difteria-Pertussis-Tétanos (DPT) + Antipolio inactivada (IPV) (**) o Hexavalente (DPT-HvB-Hib-IPV) (*)',
        dose: '1.er refuerzo',
      },
      { name: 'Sarampión, Paperas, Rubéola (SPR)', dose: '2.ª dosis' },
    ],
  },
  {
    label: '2 años',
    fromMonths: 24,
    toMonths: 24,
    vaccines: [
      { name: 'Influenza pediátrica', dose: 'Dosis única' },
      { name: 'Varicela (****)', dose: '2.ª dosis' },
    ],
  },
  {
    label: '3 años',
    fromMonths: 36,
    toMonths: 36,
    vaccines: [{ name: 'Influenza adulto', dose: 'Dosis única' }],
  },
  {
    label: '4 años',
    fromMonths: 48,
    toMonths: 48,
    vaccines: [
      { name: 'Influenza adulto', dose: 'Dosis única' },
      { name: 'Difteria-Pertussis-Tétanos (DPT)', dose: '2.º refuerzo' },
      { name: 'Antipolio oral (APO)', dose: '2.º refuerzo' },
    ],
  },
  {
    label: '5 a 11 años',
    fromMonths: 60,
    toMonths: 143,
    vaccines: [
      {
        name: 'SR/SPR',
        dose: 'Dosis única',
        note: 'Según cumplimiento del esquema primario (sin dosis o esquema incompleto), en zonas de brote.',
      },
    ],
  },
  {
    label: '9 a 11 años',
    fromMonths: 108,
    toMonths: 143,
    vaccines: [{ name: 'Virus del Papiloma Humano (VPH)', dose: 'Dosis única' }],
  },
  {
    label: '12 a 17 años',
    fromMonths: 144,
    toMonths: 215,
    vaccines: [
      { name: 'Influenza adulto', dose: 'Dosis única cada año' },
      { name: 'dT adulto', dose: '3 dosis (según esquema primario)' },
      { name: 'Hepatitis B (HvB) según edad', dose: '3 dosis (según esquema primario)' },
      { name: 'Antiamarílica (AMA)', dose: 'Dosis única (según esquema primario)' },
      {
        name: 'SR/SPR',
        dose: 'Dosis única',
        note: 'Según cumplimiento del esquema primario (sin dosis o esquema incompleto). Zonas de brote.',
      },
      {
        name: 'Virus del Papiloma Humano (VPH)',
        dose: 'Dosis única (según esquema primario)',
      },
    ],
  },
  {
    label: '14 a 17 años',
    fromMonths: 168,
    toMonths: 215,
    vaccines: [
      {
        name: 'Tdap',
        dose: 'Dosis única',
        note: 'En zonas de brote de tos ferina y en gestantes.',
      },
    ],
  },
];

export const VACCINE_NOTES = [
  '(*) La aplicación de la vacuna hexavalente está supeditada al agotamiento de los stocks de vacuna pentavalente e IPV en el almacén nacional, regional y local (Red, Microrred, IPRESS).',
  '(**) Considerar su aplicación cuando recibe vacuna pentavalente.',
  '(***) En caso no haya recibido el anticuerpo monoclonal en la etapa neonatal (recién nacido) o se considere de alto riesgo.',
  '(****) La 2.ª dosis de Varicela se incorporará progresivamente.',
];

export const VACCINE_SOURCE =
  'NTS N.° 246-MINSA/DGIESP-2026, Norma Técnica de Salud que establece el Esquema Nacional de Inmunizaciones (RM N.° 561-2026-MINSA), numerales 6.2.2 y 6.2.3 y ficha 6.1.1.24.';

/** Visitas que corresponden a la edad (en meses enteros) y la siguiente visita puntual. */
export function visitsForAge(months: number): { current: Visit[]; next: Visit | null } {
  const current = VISITS.filter((v) => months >= v.fromMonths && months <= v.toMonths);
  const next =
    VISITS.filter((v) => v.fromMonths > months).sort((a, b) => a.fromMonths - b.fromMonths)[0] ??
    null;
  return { current, next };
}
