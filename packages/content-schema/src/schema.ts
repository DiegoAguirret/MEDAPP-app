import { z } from 'zod';

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Fecha ISO YYYY-MM-DD');
const positive = z.number().finite().positive();
const nonNegative = z.number().finite().nonnegative();
const id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'id en kebab-case');

export const routeSchema = z.enum(['VO', 'IV', 'IM', 'IR', 'SL', 'INH']);

export const presentationSchema = z.object({
  id,
  label: z.string().min(1),
  form: z.enum(['suspension', 'jarabe', 'gotas', 'tableta', 'capsula', 'supositorio', 'ampolla']),
  /** mg contenidos en una unidad (`unit`). Suspensión 250 mg/5 mL → 50 (mg por mL). */
  mgPerUnit: positive,
  unit: z.enum(['mL', 'tableta', 'capsula', 'supositorio']),
  /** Menor cantidad medible de `unit` (0.1 mL, 0.5 tableta, 1 supositorio). */
  step: positive,
  brandsPE: z.array(z.string().min(1)),
});

export const doseRuleSchema = z
  .object({
    id,
    indication: z.string().min(1),
    route: routeSchema,
    ageMinDays: nonNegative,
    ageMaxDays: positive.optional(),
    /** Con `fixed_by_age`, las cantidades son mg por dosis. */
    basis: z.enum(['mg/kg/dose', 'mg/kg/day', 'fixed_by_age']),
    amountMin: positive,
    amountMax: positive,
    usual: positive.optional(),
    intervalHours: z.union([
      z.literal(4),
      z.literal(6),
      z.literal(8),
      z.literal(12),
      z.literal(24),
    ]),
    maxPerDoseMg: positive,
    maxPerDayMg: positive,
    durationText: z.string().min(1).optional(),
    notes: z.string().min(1).optional(),
    obesityNote: z.boolean().optional(),
    sourceIds: z.array(id).min(2, 'Cada regla necesita al menos 2 fuentes'),
    /** Presentaciones con las que se puede usar la regla. Obligatorio en vías parenterales. */
    presentationIds: z.array(id).min(1).optional(),
  })
  .superRefine((r, ctx) => {
    if (r.amountMin > r.amountMax) {
      ctx.addIssue({ code: 'custom', message: 'amountMin > amountMax', path: ['amountMin'] });
    }
    if (r.usual !== undefined && (r.usual < r.amountMin || r.usual > r.amountMax)) {
      ctx.addIssue({ code: 'custom', message: 'usual fuera del rango', path: ['usual'] });
    }
    if (r.ageMaxDays !== undefined && r.ageMaxDays <= r.ageMinDays) {
      ctx.addIssue({ code: 'custom', message: 'ageMaxDays <= ageMinDays', path: ['ageMaxDays'] });
    }
    if ((r.route === 'IV' || r.route === 'IM') && r.presentationIds === undefined) {
      ctx.addIssue({
        code: 'custom',
        message: 'Las reglas IV/IM deben listar presentationIds',
        path: ['presentationIds'],
      });
    }
    if (r.maxPerDoseMg > r.maxPerDayMg) {
      ctx.addIssue({
        code: 'custom',
        message: 'maxPerDoseMg > maxPerDayMg',
        path: ['maxPerDoseMg'],
      });
    }
  });

export const reviewSchema = z
  .object({
    status: z.enum(['borrador', 'validado']),
    author: z.string().min(1),
    reviewers: z.array(z.string().min(1)),
    reviewedAt: isoDate.optional(),
    nextReviewAt: isoDate.optional(),
  })
  .superRefine((r, ctx) => {
    if (r.status === 'validado') {
      if (r.reviewers.length < 1) {
        ctx.addIssue({ code: 'custom', message: 'validado requiere revisor', path: ['reviewers'] });
      }
      if (r.reviewedAt === undefined) {
        ctx.addIssue({
          code: 'custom',
          message: 'validado requiere reviewedAt',
          path: ['reviewedAt'],
        });
      }
    }
  });

export const clinicalTestCaseSchema = z.object({
  ruleId: id,
  presentationId: id,
  weightKg: positive,
  ageDays: nonNegative,
  chosenMgPerKg: positive.optional(),
  expect: z.object({
    mgPerDose: positive,
    amount: positive,
    unit: z.string().min(1),
    capped: z.boolean().optional(),
  }),
});

export const drugSchema = z
  .object({
    id,
    name: z.string().min(1),
    tallMan: z.string().min(1).optional(),
    synonyms: z.array(z.string().min(1)),
    atc: z.string().min(1).optional(),
    presentations: z.array(presentationSchema).min(1),
    rules: z.array(doseRuleSchema).min(1),
    warnings: z.array(z.string().min(1)),
    contraindications: z.array(z.string().min(1)),
    diagnoses: z.array(z.string().min(1)),
    review: reviewSchema,
    testCases: z.array(clinicalTestCaseSchema).min(1, 'Se requiere al menos un caso clínico'),
  })
  .superRefine((d, ctx) => {
    const ruleIds = new Set(d.rules.map((r) => r.id));
    const presIds = new Set(d.presentations.map((p) => p.id));
    if (ruleIds.size !== d.rules.length) {
      ctx.addIssue({ code: 'custom', message: 'ids de regla duplicados', path: ['rules'] });
    }
    if (presIds.size !== d.presentations.length) {
      ctx.addIssue({
        code: 'custom',
        message: 'ids de presentación duplicados',
        path: ['presentations'],
      });
    }
    d.rules.forEach((r, i) => {
      for (const pid of r.presentationIds ?? []) {
        if (!presIds.has(pid)) {
          ctx.addIssue({
            code: 'custom',
            message: `presentación desconocida ${pid}`,
            path: ['rules', i],
          });
        }
      }
    });
    d.testCases.forEach((tc, i) => {
      if (!ruleIds.has(tc.ruleId)) {
        ctx.addIssue({
          code: 'custom',
          message: `regla desconocida ${tc.ruleId}`,
          path: ['testCases', i],
        });
      }
      if (!presIds.has(tc.presentationId)) {
        ctx.addIssue({
          code: 'custom',
          message: `presentación desconocida ${tc.presentationId}`,
          path: ['testCases', i],
        });
      }
    });
  });

export const sourceSchema = z.object({
  id,
  title: z.string().min(1),
  edition: z.string().min(1).optional(),
  year: z.number().int().min(1900).max(2100),
  publisher: z.string().min(1).optional(),
  url: z.url().optional(),
});

export type Route = z.infer<typeof routeSchema>;
export type Presentation = z.infer<typeof presentationSchema>;
export type DoseRule = z.infer<typeof doseRuleSchema>;
export type Review = z.infer<typeof reviewSchema>;
export type ClinicalTestCase = z.infer<typeof clinicalTestCaseSchema>;
export type Drug = z.infer<typeof drugSchema>;
export type Source = z.infer<typeof sourceSchema>;

export function parseDrug(raw: unknown): Drug {
  return drugSchema.parse(raw);
}

export function parseSource(raw: unknown): Source {
  return sourceSchema.parse(raw);
}
