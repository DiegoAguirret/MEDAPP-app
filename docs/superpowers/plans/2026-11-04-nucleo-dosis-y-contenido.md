# Núcleo de cálculo y contenido clínico — Plan de implementación (Plan 1 de 2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir y probar, sin interfaz gráfica, el motor de cálculo de dosis, las calculadoras, el formato del contenido clínico, 10 fichas piloto y la herramienta que valida, prueba y firma el paquete de contenido que usará la app.

**Architecture:** Monorepo con npm workspaces. Tiene tres paquetes TypeScript puros (`content-schema`, `dose-engine`, `content-bundle`) y una herramienta de línea de comandos (`tools/content-build`). Las fichas viven en `content/drugs/*.yaml`. El motor no depende de nada externo. La herramienta genera `dist/content/bundle.json`, `manifest.json` y la firma Ed25519. El **Plan 2** (app Expo para Android, APK para testers, anuncios y Pro) consume estos paquetes.

**Tech Stack:** Node.js 22 LTS, TypeScript 5 (`strict`), npm workspaces, Vitest, fast-check, zod, yaml, @noble/curves (Ed25519), ESLint y Prettier, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-11-04-dosis-pediatricas-design.md` (la §0 prevalece).

## Global Constraints

- TypeScript `strict: true` y `noUncheckedIndexedAccess: true`. Prohibido `any` (`@typescript-eslint/no-explicit-any: error`).
- `dose-engine` y `content-schema` no importan nada de red, sistema de archivos ni React. Solo `zod` en `content-schema`.
- Unidades internas: mg, kg, días, mL y horas. Toda conversión ocurre en el motor.
- Edad mínima calculable: **29 días**. Por debajo: `status: 'not_calculable'`, `reason: 'neonate_v2'` (spec §9b.3).
- Tope máximo siempre aplicado. **El redondeo nunca deja la dosis por encima del tope** (spec §9b.6).
- Error de redondeo máximo ±5 %. Si se supera, se devuelve el valor exacto y la advertencia `rounding_exceeds_5pct`.
- Rangos: se devuelve el rango completo. `chosenMgPerKg` debe estar dentro del rango o se rechaza (spec §9b.1).
- Peso inverosímil para la edad: advertencia `weight_implausible`, **nunca bloqueo** (spec §9b.2).
- Formato de números: sin ceros finales ("5 mL", no "5.0 mL"), con cero a la izquierda ("0.5"). El separador decimal es un parámetro; por defecto `.` **[a confirmar con el médico tester]**.
- Cada indicación tiene ≥ 2 `sourceIds` que existan en `content/sources.yaml`.
- Fichas con `review.status: 'borrador'`: la compilación en modo `--release` falla. El modo `--tester` las incluye marcadas para que la app muestre "NO VALIDADO".
- Ningún dato de paciente se persiste, ni en estos paquetes ni en los registros.
- La clave privada de firma nunca entra al repositorio (`keys/` en `.gitignore`).
- Texto clínico redactado por nosotros. No se copian tablas ni texto de libros (spec §6.2).

## Review Focus

1. **Peso con coma decimal o con ceros** ("12,5", "0", "-3", "500"): el motor recibe números ya parseados, así que la validación de entrada pertenece al Plan 2. Aquí, `calculateDose` debe rechazar un peso ≤ 0 o > 150 kg con `reason: 'invalid_weight'` → prueba en la Tarea 4.
2. **Dosis por día que supera el tope aunque la dosis por toma no** (p. ej. un intervalo de 4 h): se aplica también `maxPerDayMg`, recalculando la dosis por toma → prueba en la Tarea 4.
3. **Regla por edad sin peso** (cetirizina): debe calcular solo con la edad e ignorar el peso para la dosis, aunque lo use para la plausibilidad → prueba en la Tarea 4.
4. **Concentración que hace imposible un volumen medible** (p. ej. 0,02 mL): se devuelve el valor exacto más `rounding_exceeds_5pct`, nunca 0 mL → prueba en la Tarea 3.
5. **Paquete manipulado o firma de otra clave**: `verifyBundle` devuelve `false`, nunca lanza excepción ni acepta → prueba en la Tarea 7.

---

### Task 0: Entorno de desarrollo y repositorio

**Files:**

- Create: `package.json`, `tsconfig.base.json`, `eslint.config.mjs`, `.prettierrc`, `.gitignore`, `.editorconfig`, `vitest.workspace.ts`, `README.md`, `.github/workflows/ci.yml`

- [ ] **Step 1:** Instalar Node.js 22 LTS con `winget install OpenJS.NodeJS.LTS`. Verificar con `node -v`: debe mostrar `v22.x`.
- [ ] **Step 2:** `git init -b main`. En `.gitignore` incluir: `node_modules/`, `dist/`, `keys/`, `.env*`, `coverage/`, `*.log`.
- [ ] **Step 3:** Crear el `package.json` raíz con `"private": true`, `"workspaces": ["packages/*", "tools/*"]` y los scripts `lint`, `typecheck` (`tsc -b`), `test` (`vitest run`), `content:build` y `content:build:release`.
- [ ] **Step 4:** Instalar las dependencias de desarrollo fijando versiones exactas (`save-exact=true` en `.npmrc`): typescript, vitest, @vitest/coverage-v8, fast-check, eslint, typescript-eslint, prettier.
- [ ] **Step 5:** CI en `.github/workflows/ci.yml`: en cada PR o push ejecuta `npm ci`, `lint`, `typecheck`, `test` y `content:build`, además de `npm audit --audit-level=high`.
- [ ] **Step 6:** Verificar que `npm run lint && npm run typecheck && npm test` termine sin errores (0 tests es válido).
- [ ] **Step 7:** Commit `chore: monorepo, TypeScript estricto, lint, tests y CI`.

### Task 1: Esquema del contenido clínico (`packages/content-schema`)

**Files:**

- Create: `packages/content-schema/src/schema.ts`, `src/index.ts`, `package.json`, `tsconfig.json`
- Test: `packages/content-schema/test/schema.test.ts`

**Interfaces:**

- Produces (tipos derivados de zod con `z.infer`):
  - `Route = 'VO' | 'IV' | 'IM' | 'IR' | 'SL' | 'INH'`
  - `Presentation { id: string; label: string; form: 'suspension'|'jarabe'|'gotas'|'tableta'|'capsula'|'supositorio'|'ampolla'; mgPerUnit: number; unit: 'mL'|'tableta'|'capsula'|'supositorio'; step: number; brandsPE: string[] }` (suspensión 250 mg/5 mL → `mgPerUnit: 50`, `unit: 'mL'`, `step: 0.1`; tableta ranurada 500 mg → `step: 0.5`)
  - `DoseRule { id: string; indication: string; route: Route; ageMinDays: number; ageMaxDays?: number; basis: 'mg/kg/dose'|'mg/kg/day'|'fixed_by_age'; amountMin: number; amountMax: number; usual?: number; intervalHours: number; maxPerDoseMg: number; maxPerDayMg: number; durationText?: string; notes?: string; obesityNote?: boolean; sourceIds: string[] }` (con `fixed_by_age`, las cantidades están en mg por dosis)
  - `Drug { id: string; name: string; tallMan?: string; synonyms: string[]; atc?: string; presentations: Presentation[]; rules: DoseRule[]; warnings: string[]; contraindications: string[]; diagnoses: string[]; review: Review; testCases: ClinicalTestCase[] }`
  - `Review { status: 'borrador'|'validado'; author: string; reviewers: string[]; reviewedAt?: string; nextReviewAt?: string }` (fechas ISO `YYYY-MM-DD`)
  - `ClinicalTestCase { ruleId: string; presentationId: string; weightKg: number; ageDays: number; chosenMgPerKg?: number; expect: { mgPerDose: number; amount: number; unit: string; capped?: boolean } }`
  - `Source { id: string; title: string; edition?: string; year: number; publisher?: string; url?: string }`
  - `drugSchema`, `sourceSchema`, `parseDrug(raw: unknown): Drug` (lanza `ZodError`)

- [ ] **Step 1: Pruebas que fallan.** `parseDrug` acepta una ficha mínima válida. Rechaza: `amountMin > amountMax`; `usual` fuera del rango; `mgPerUnit <= 0`; `step <= 0`; `intervalHours` que no esté en {4, 6, 8, 12, 24}; `review.status: 'validado'` sin `reviewedAt` o con menos de 1 revisor; una regla con menos de 2 `sourceIds`; `testCases` vacío; `ruleId` o `presentationId` de un caso que no exista en la ficha.
- [ ] **Step 2:** Ejecutar `npx vitest run packages/content-schema` → FAIL.
- [ ] **Step 3:** Implementar los esquemas zod con `.superRefine` para las reglas cruzadas.
- [ ] **Step 4:** Ejecutar las pruebas → PASS.
- [ ] **Step 5:** Commit `feat(content-schema): esquema validado de fichas clínicas`.

### Task 2: Formato de números (`packages/dose-engine/src/format.ts`)

**Files:**

- Create: `packages/dose-engine/src/format.ts`, `package.json`, `tsconfig.json`
- Test: `packages/dose-engine/test/format.test.ts`

**Interfaces:**

- Produces: `formatNumber(value: number, opts?: { maxDecimals?: number; decimalSeparator?: '.' | ',' }): string` (por defecto `maxDecimals: 2`, `decimalSeparator: '.'`)

- [ ] **Step 1: Pruebas.**
  - `formatNumber(5) === '5'`
  - `formatNumber(5.0) === '5'`
  - `formatNumber(0.5) === '0.5'`
  - `formatNumber(6.25) === '6.25'`
  - `formatNumber(6.3, {decimalSeparator: ','}) === '6,3'`
  - `formatNumber(1000) === '1000'` (sin separador de miles, para evitar confundirlo con el decimal)
  - `formatNumber(0.125, {maxDecimals: 2}) === '0.13'`
- [ ] **Step 2–4:** FAIL → implementar → PASS.
- [ ] **Step 5:** Commit `feat(dose-engine): formato numérico seguro`.

### Task 3: Redondeo a volumen medible (`packages/dose-engine/src/rounding.ts`)

**Files:**

- Create: `packages/dose-engine/src/rounding.ts`
- Test: `packages/dose-engine/test/rounding.test.ts`

**Interfaces:**

- Produces: `roundToStep(exactAmount: number, step: number, maxAmount: number): { value: number; exact: number; errorPct: number; exceeds5pct: boolean }`

- [ ] **Step 1: Pruebas.**
  - `roundToStep(6.25, 0.1, 100).value === 6.3`
  - `roundToStep(6.24, 0.1, 100).value === 6.2`
  - Cerca del tope: `roundToStep(7.96, 0.1, 7.98).value === 7.9`. Nunca supera `maxAmount`.
  - Tableta: `roundToStep(0.8, 0.5, 2)` → `value === 0.8` (exacto; la app indicará "no medible con esta presentación"), `errorPct === 25` (error del paso más cercano) y `exceeds5pct === true`.
  - Review Focus 4: `roundToStep(0.02, 0.1, 1)` → `value === 0.02` (exacto), `exceeds5pct === true`. Nunca devuelve 0.
  - Sin errores de coma flotante: `roundToStep(0.3, 0.1, 1).value === 0.3`.
- [ ] **Step 2:** FAIL.
- [ ] **Step 3:** Implementar trabajando en enteros de pasos (`Math.round(x / step + 1e-9)`) y reconvirtiendo con `Number((n * step).toFixed(6))`. Si el resultado supera `maxAmount`, usar `Math.floor`. Si `|value - exact| / exact > 0.05`, devolver `value = exact` (redondeado a 2 decimales) y `exceeds5pct: true`.
- [ ] **Step 4:** PASS.
- [ ] **Step 5:** Commit `feat(dose-engine): redondeo seguro con tope`.

### Task 4: Cálculo de dosis (`packages/dose-engine/src/calculate.ts`, `plausibility.ts`)

**Files:**

- Create: `packages/dose-engine/src/calculate.ts`, `src/plausibility.ts`, `src/types.ts`, `src/index.ts`
- Test: `packages/dose-engine/test/calculate.test.ts`, `test/calculate.property.test.ts`

**Interfaces:**

- Consumes: `DoseRule`, `Presentation` (Tarea 1); `roundToStep` (Tarea 3)
- Produces:
  - `calculateDose(input: { rule: DoseRule; presentation: Presentation; patient: { weightKg: number; ageDays: number }; chosenMgPerKg?: number }): DoseResult`
  - `DoseResult = { status: 'not_calculable'; reason: 'neonate_v2'|'invalid_weight'|'age_out_of_rule'|'choice_out_of_range' } | { status: 'ok'; mgPerDose: { min: number; max: number; chosen: number }; mgPerDay: number; dosesPerDay: number; cappedBy: 'per_dose'|'per_day'|null; amount: { value: number; exact: number; unit: string; errorPct: number }; steps: CalcStep[]; warnings: Warning[] }`
  - `CalcStep = { label: string; expression: string; result: string }` (p. ej. `{label: 'Dosis', expression: '10 kg × 15 mg/kg', result: '150 mg'}`)
  - `Warning = 'weight_implausible'|'rounding_exceeds_5pct'|'obesity_check'|'capped_adult_max'`
  - `isWeightPlausible(weightKg: number, ageDays: number): boolean`

**Lógica:**

- `dosesPerDay = 24 / intervalHours`.
- `mg/kg/dose`: `chosen = weight × (chosenMgPerKg ?? usual ?? amountMin)`.
- `mg/kg/day`: el valor por kg se divide entre `dosesPerDay`.
- `fixed_by_age`: `chosen = usual ?? amountMin` en mg, sin usar el peso.
- Se aplica `maxPerDoseMg`. Luego, si `chosen × dosesPerDay > maxPerDayMg`, `chosen = maxPerDayMg / dosesPerDay` y `cappedBy = 'per_day'`.
- `min` y `max` también se limitan por los topes.
- `amount = roundToStep(chosen / mgPerUnit, step, maxPerDoseMgEfectivo / mgPerUnit)`.
- Bandas de plausibilidad (kg, **amplias, a validar por el médico**): 29 días–2 meses 2–8; 3–5 m 3–11; 6–11 m 4.5–14; 1–2 a 6–19; 2–4 a 8–27; 5–8 a 12–50; 9–12 a 18–85; 13–17 a 25–130. A partir de 18 años: 30–150.

- [ ] **Step 1: Pruebas de ejemplo (valores fijos).**
  - Paracetamol: regla 10–15 mg/kg/dosis, usual 15, c/6 h, máx. 1000 mg/dosis y 4000 mg/día. Suspensión 120 mg/5 mL (`mgPerUnit` 24, `step` 0.1). Paciente 10 kg, 400 días → `mgPerDose.chosen 150`, `amount.value 6.3`, `unit 'mL'`, `cappedBy null`, `mgPerDose {min 100, max 150}`.
  - Ibuprofeno: 5–10 mg/kg/dosis, usual 10, c/8 h, máx. 400 mg/dosis y 1200 mg/día. Paciente 45 kg, 12 años → `chosen 400`, `cappedBy 'per_dose'`, `warnings` incluye `capped_adult_max`.
  - Review Focus 2: regla 15 mg/kg/dosis c/4 h, máx. 1000/dosis y 3000/día. Paciente 40 kg → 600 × 6 = 3600 > 3000 → `chosen 500`, `cappedBy 'per_day'`.
  - Amoxicilina: 80–90 mg/kg/día, usual 90, c/12 h, máx. 2000/dosis y 4000/día. Suspensión 250 mg/5 mL (50/mL). Paciente 12 kg → `mgPerDay 1080`, `chosen 540`, `amount 10.8 mL`.
  - Review Focus 3, cetirizina por edad: `fixed_by_age`, 2.5 mg, 6 meses–2 años, c/24 h. Pesos de 8 y 12 kg dan el mismo `chosen 2.5`.
  - `ageDays 20` → `not_calculable`, `neonate_v2`.
  - Review Focus 1: `weightKg 0`, `-3` y `151` → `invalid_weight`.
  - `chosenMgPerKg 20` con rango 10–15 → `choice_out_of_range`.
  - Paciente de 45 kg con 6 meses → `ok` con la advertencia `weight_implausible`.
  - `ageDays` fuera de `ageMinDays`/`ageMaxDays` → `age_out_of_rule`.
  - Cada `ok` trae ≥ 3 `steps`, y el último `result` contiene la unidad.
- [ ] **Step 2: Pruebas de propiedades (fast-check)** con reglas, presentaciones y pacientes válidos aleatorios:
  - `amount.value > 0`
  - `mgPerDose.chosen <= maxPerDoseMg`
  - `mgPerDose.chosen × dosesPerDay <= maxPerDayMg + 1e-6`
  - `amount.value × mgPerUnit <= maxPerDoseMg + 1e-6`
  - `min <= chosen <= max`
- [ ] **Step 3:** FAIL.
- [ ] **Step 4:** Implementar.
- [ ] **Step 5:** PASS, con cobertura del 100 % en líneas y ramas de `dose-engine` (`vitest --coverage`, `thresholds` en 100 en la configuración del paquete).
- [ ] **Step 6:** Commit `feat(dose-engine): cálculo de dosis con topes, rangos y validaciones`.

### Task 5: Calculadoras de líquidos (`packages/dose-engine/src/fluids.ts`)

**Files:**

- Create: `packages/dose-engine/src/fluids.ts`
- Test: `packages/dose-engine/test/fluids.test.ts`

**Interfaces:**

- Produces:
  - `hollidaySegar(weightKg: number): { mlPerDay: number; mlPerHour: number; steps: CalcStep[] }`: 100 mL/kg por los primeros 10 kg, 50 mL/kg por los siguientes 10 kg y 20 mL/kg por cada kg adicional. Máximo 2400 mL/día.
  - `bsaMosteller(weightKg: number, heightCm: number): number`: √(cm × kg / 3600), con 2 decimales.
  - `dehydrationPlan(plan: 'B'|'C', weightKg: number, ageDays: number): { phases: { ml: number; minutes: number; fluid: string }[]; steps: CalcStep[] }`:
    - Plan B: SRO 75 mL/kg en 240 min.
    - Plan C (Ringer lactato o NaCl 0.9 %), según la OMS: menores de 12 meses, 30 mL/kg en 60 min y luego 70 mL/kg en 300 min; de 12 meses o más, 30 mL/kg en 30 min y luego 70 mL/kg en 150 min.
    - Fuentes: OMS y la norma MINSA de EDA **[a contrastar con la norma vigente del MINSA durante la redacción]**.

- [ ] **Step 1: Pruebas.**
  - `hollidaySegar(8).mlPerDay === 800`
  - `hollidaySegar(15).mlPerDay === 1250`
  - `hollidaySegar(25).mlPerDay === 1600`
  - `hollidaySegar(70).mlPerDay === 2400` (tope)
  - `mlPerHour` de 15 kg `≈ 52.1`
  - `bsaMosteller(20, 110) === 0.78`
  - Plan C, 8 kg, 200 días → fases `[240 mL/60 min, 560 mL/300 min]`
  - Plan C, 15 kg, 3 años → `[450/30, 1050/150]`
  - Plan B, 10 kg → `750 mL/240 min`
  - Un peso ≤ 0 lanza `RangeError`
- [ ] **Step 2–4:** FAIL → implementar → PASS (cobertura del 100 %).
- [ ] **Step 5:** Commit `feat(dose-engine): calculadoras de líquidos y superficie corporal`.

### Task 6: Fuentes y 10 fichas piloto (`content/`)

**Files:**

- Create: `content/sources.yaml`, `content/drugs/{paracetamol,ibuprofeno,metamizol,amoxicilina,amoxicilina-clavulanico,azitromicina,cefalexina,cetirizina,ondansetron,prednisolona}.yaml`, `content/README.md` (guía para redactar una ficha)

**Interfaces:**

- Consumes: `drugSchema` (Tarea 1)

- [ ] **Step 1:** Crear `sources.yaml` con los identificadores estables que citarán las fichas:
  - `bnfc-2025`, `harriet-lane-23`, `pediamecum-aep`, `fda-label`, `digemid-ficha`, `minsa-eda`, `who-pocket-2013`, `aap-redbook-2024`, `aap-aom-2013`
  - Cada fuente con título, edición, año y URL cuando sea pública.
- [ ] **Step 2:** Redactar las 10 fichas **con texto propio**, cada una con `review.status: 'borrador'`, `author: 'Diego'`, ≥ 2 fuentes por regla y ≥ 3 `testCases`: peso bajo, peso medio y un caso con tope.
  - Presentaciones con concentraciones comunes en Perú y marcas como ejemplo. Las marcas se verificarán contra el registro de DIGEMID.
  - Las cifras deben coincidir con las pruebas de la Tarea 4 donde se repitan (paracetamol, ibuprofeno, amoxicilina, cetirizina).
- [ ] **Step 3:** El `content/README.md` explica:
  - Cómo pasar una ficha a `validado`: el médico recalcula a mano los `testCases`, firma con su nombre y fecha, y luego se añade `reviewers` y `reviewedAt`.
  - Prohibido copiar texto o tablas de libros.
- [ ] **Step 4:** Commit `content: fuentes y 10 fichas piloto (borrador, pendientes de validación médica)`.

### Task 7: Paquete firmado (`packages/content-bundle`)

**Files:**

- Create: `packages/content-bundle/src/{bundle.ts,sign.ts,verify.ts,index.ts}`
- Test: `packages/content-bundle/test/bundle.test.ts`

**Interfaces:**

- Consumes: `Drug`, `Source` (Tarea 1)
- Produces:
  - `Bundle = { schemaVersion: 1; contentVersion: string; generatedAt: string; mode: 'tester'|'release'; drugs: Drug[]; sources: Source[] }`
  - `Manifest = { contentVersion: string; sha256: string; recalledDrugIds: string[]; minAppVersion: string }`
  - `canonicalJson(value: unknown): string`: claves ordenadas, sin espacios.
  - `signBundle(bundle: Bundle, privateKeyHex: string): { bundleJson: string; signatureHex: string }`
  - `verifyBundle(bundleJson: string, signatureHex: string, publicKeyHex: string): boolean`: nunca lanza excepción.
  - `signManifest` y `verifyManifest`, con las mismas firmas pero para `Manifest`.
- Uso de `@noble/curves/ed25519` y `@noble/hashes/sha256`. Ambos funcionan en React Native sin código nativo.

- [ ] **Step 1: Pruebas.**
  - Firma y verificación con un par de claves generado en la prueba → `true`.
  - Cambiar un carácter del JSON → `false`.
  - Una firma hecha con otra clave → `false`.
  - Firma con formato hexadecimal inválido → `false` sin lanzar excepción.
  - `canonicalJson({b:1,a:2}) === '{"a":2,"b":1}'`.
- [ ] **Step 2–4:** FAIL → implementar → PASS.
- [ ] **Step 5:** Commit `feat(content-bundle): paquete de contenido firmado con Ed25519`.

### Task 8: Herramienta de compilación del contenido (`tools/content-build`)

**Files:**

- Create: `tools/content-build/src/{cli.ts,load.ts,check.ts,keygen.ts}`, `package.json`
- Test: `tools/content-build/test/check.test.ts`

**Interfaces:**

- Consumes: `parseDrug`, `sourceSchema` (Tarea 1); `calculateDose` (Tarea 4); `signBundle`, `signManifest` (Tarea 7)
- Produces:
  - Comando `npm run content:build`: modo tester; usa una clave de desarrollo en `keys/dev.key`, que se genera si no existe.
  - Comando `npm run content:build:release`: exige la variable de entorno `CONTENT_SIGNING_KEY` y que **todas** las fichas estén `validado`.
  - Salida: `dist/content/{bundle.json,bundle.sig,manifest.json,manifest.sig,public-key.txt}`.
  - `checkContent(drugs: Drug[], sources: Source[], mode: 'tester'|'release'): CheckError[]`, con `CheckError = { drugId: string; code: 'unknown_source'|'test_case_failed'|'not_validated'|'duplicate_id'|'review_overdue'; detail: string }`.
  - En modo tester, `review_overdue` solo produce una advertencia.

- [ ] **Step 1: Pruebas de `checkContent`.**
  - Una fuente inexistente → `unknown_source`.
  - Un caso clínico cuyo resultado esperado no coincide con `calculateDose` (tolerancia de 0.01 en mg y en cantidad) → `test_case_failed`, con el detalle de lo esperado y lo obtenido.
  - Una ficha `borrador` en modo `release` → `not_validated`; en modo `tester` no genera error.
  - Identificadores de fármaco repetidos → `duplicate_id`.
- [ ] **Step 2–4:** FAIL → implementar → PASS.
- [ ] **Step 5:** Ejecutar `npm run content:build`. Debe compilar las 10 fichas piloto sin errores y generar los 5 archivos. Si un caso piloto falla, se corrige la ficha, no el motor (salvo que la prueba del motor también esté mal).
- [ ] **Step 6:** Ejecutar `npm run content:build:release`. Debe **fallar** con `not_validated` en las 10 fichas. Ese fallo es el comportamiento esperado.
- [ ] **Step 7:** Commit `feat(content-build): validación, casos clínicos y firma del paquete`.

---

## Plan 2 (se escribe al terminar este)

App Android con Expo y React Native:

- Pantallas de §8 del spec.
- Paquete base incluido y actualización verificada.
- Retiro remoto de fichas y banda "NO VALIDADO" en las builds de tester.
- AdMob y Pro.
- APK de prueba generado sin costo (build local o con el plan gratuito de EAS).
