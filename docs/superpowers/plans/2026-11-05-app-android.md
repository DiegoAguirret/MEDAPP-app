# App Android (Expo) — Plan de implementación (Plan 2 de 2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** App Android instalable por APK que usa el núcleo del Plan 1. Funciona sin conexión, verifica el contenido firmado, muestra "NO VALIDADO" en fichas en borrador y queda lista para anuncios y Pro sin activarlos aún.

**Architecture:** `apps/mobile` (Expo SDK 58, React Native 0.88, nueva arquitectura, Hermes) dentro del monorepo. Capas:

- `src/domain`: re-exporta el motor, con lógica pura.
- `src/data`: carga y verifica el paquete y busca.
- `src/state`: Zustand.
- `src/ui` y `app/`: pantallas de Expo Router.

El paquete de contenido firmado (`dist/content`) se copia a `apps/mobile/assets/content` en cada build. La clave pública va en el código.

**Tech Stack:**

- Expo SDK 58, Expo Router y TypeScript estricto.
- react-native-mmkv (ajustes y favoritos) y @shopify/flash-list (listas).
- Jest + @testing-library/react-native para pruebas; Maestro para E2E en el emulador.
- APK con `expo prebuild` + Gradle local, gratis y sin EAS.

**Spec:** `docs/superpowers/specs/2026-11-04-dosis-pediatricas-design.md` (§0 prevalece; pantallas en §8; seguridad en §4.5 y §7.5).

## Global Constraints

- Ningún dato de paciente se persiste. El peso y la edad viven solo en el estado de la pantalla.
- Nunca hay anuncios en la pantalla de resultado ni en urgencias. En este plan los anuncios y Pro quedan **desactivados por bandera** (`FEATURES.ads = false`, `FEATURES.pro = false`).
- Una ficha con `review.status: 'borrador'` muestra siempre la banda roja "NO VALIDADO — no usar en pacientes".
- Si el paquete no pasa `verifyBundle`, la app no muestra dosis y lo indica.
- Aviso clínico permanente en el resultado: "Herramienta de apoyo. La decisión clínica es del médico tratante."
- Entrada de peso: acepta "12,5" y "12.5"; rechaza vacío, 0, negativos y más de 150. La edad se ingresa en años + meses (o días si es menor de 2 meses).
- Accesibilidad: tamaño mínimo de toque de 48 dp y contraste AA.
- Permisos de Android: ninguno, salvo INTERNET.

## Review Focus

1. Peso "12,5" con coma → se interpreta 12.5, nunca 125 → prueba en la Tarea 3.
2. Cambiar de presentación o de regla recalcula sin conservar un resultado viejo → prueba en la Tarea 4.
3. Una ficha retirada en el manifiesto no aparece en la búsqueda ni se abre por enlace → prueba en la Tarea 2.
4. Búsqueda sin tildes ("ondansetron", "acido") encuentra la ficha → prueba en la Tarea 2.
5. Un paquete corrupto o con otra firma → pantalla de error, sin dosis → prueba en la Tarea 2.

---

### Task 1: Proyecto Expo en el monorepo

- [ ] Crear `apps/mobile` con `create-expo-app` (plantilla TypeScript, Expo Router) y añadir `apps/*` a los workspaces.
- [ ] Configurar Metro para el monorepo (`watchFolders`, `nodeModulesPaths`). Los paquetes `@medapp/*` se resuelven desde el código fuente TS.
- [ ] Polyfill de `crypto.getRandomValues` no requerido (solo se verifica). `TextEncoder` disponible en Hermes.
- [ ] Script `npm run app:content`: ejecuta `content:build` y copia `dist/content/*` a `apps/mobile/assets/content/`.
- [ ] Verificar: `npx expo export --platform android` compila sin errores.
- [ ] Commit.

### Task 2: Capa de datos (`src/data`)

**Interfaces:**

- `loadVerifiedContent(raw: { bundleJson: string; bundleSig: string; manifestJson: string; manifestSig: string }, publicKeyHex: string): { ok: true; bundle: Bundle; recalled: Set<string> } | { ok: false; reason: 'bad_signature' | 'hash_mismatch' | 'parse_error' }`
- `normalize(text: string): string`: minúsculas y sin tildes.
- `searchDrugs(drugs: Drug[], query: string, recalled: Set<string>): Drug[]`: busca por nombre, sinónimos y diagnósticos, y excluye las fichas retiradas.

Pasos:

- [ ] **Pruebas:**
  - Paquete válido → `ok`.
  - Un carácter alterado → `bad_signature`.
  - Hash del manifiesto distinto → `hash_mismatch`.
  - Una ficha retirada no aparece.
  - "ondansetron" encuentra Ondansetrón; "fiebre" encuentra paracetamol, ibuprofeno y metamizol; "acido" encuentra amoxicilina + ácido clavulánico.
- [ ] Implementar.
- [ ] Ejecutar las pruebas en verde.
- [ ] Commit.

### Task 3: Entrada de paciente (`src/domain/patientInput.ts`)

- `parseWeight(text: string): { ok: true; kg: number } | { ok: false; error: 'empty'|'invalid'|'out_of_range' }`
- `ageToDays(years: number, months: number, days?: number): number`: años × 365 + meses × 30.4375 + días, redondeado hacia abajo.

Pasos:

- [ ] **Pruebas:**
  - "12,5" → 12.5; "12.5" → 12.5; " 7 " → 7.
  - "" → `empty`; "abc" y "1,2,3" → `invalid`; "0", "-3" y "151" → `out_of_range`.
  - `ageToDays(1, 0)` = 365; `ageToDays(0, 6)` = 182; `ageToDays(0, 0, 40)` = 40.
- [ ] Implementar.
- [ ] Ejecutar las pruebas en verde.
- [ ] Commit.

### Task 4: Pantallas (`app/`)

Pantallas según el spec §8:

1. Inicio y buscador.
2. Ficha del fármaco: banda de estado, selector de indicación y de presentación, peso y edad, y resultado con pasos, tope, advertencias, fuentes y aviso.
3. Calculadoras: líquidos, plan B/C y superficie corporal.
4. Ajustes: fuentes y metodología, versión de contenido y separador decimal.
5. Primera apertura: autodeclaración de profesional de salud y aviso.

Pasos:

- [ ] **Pruebas de componente** (Testing Library):
  - Con la ficha de paracetamol, 10 kg y 1 año 1 mes, el resultado muestra "150 mg" y "6.3 mL".
  - Cambiar a gotas 100 mg/mL recalcula a "1.5 mL".
  - Una ficha en borrador muestra "NO VALIDADO".
  - Con un peso inválido no se muestra ningún resultado.
  - Se muestran los textos de las advertencias `capped_adult_max` y `weight_implausible`.
- [ ] Implementar.
- [ ] Ejecutar las pruebas en verde.
- [ ] Commit.

### Task 5: APK y simulación E2E en el emulador

- [ ] `npx expo prebuild -p android`, luego `gradlew assembleRelease`. La firma del APK de prueba usa un keystore local fuera del repositorio.
- [ ] Crear un AVD (android-36, google_apis, x86_64) e instalar el APK.
- [ ] Flujos Maestro (`apps/mobile/e2e/*.yaml`): para cada fármaco piloto, 3 pacientes de la simulación clínica. Se ingresa peso y edad, se lee el resultado en pantalla y se compara con el cálculo manual (`tools/clinical-sim`).
- [ ] Informe `docs/validacion/simulacion-medico.md` con la tabla de casos (app vs. manual) y capturas.
- [ ] Commit, push y release de GitHub con el APK adjunto.
