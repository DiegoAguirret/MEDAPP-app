# Contenido clínico

- `sources.yaml`: fuentes citables (cada una con un `id` estable).
- `drugs/*.yaml`: una ficha por fármaco. El esquema completo está en `packages/content-schema/src/schema.ts`.

## Reglas para redactar una ficha

1. **Texto propio.** Prohibido copiar texto o tablas de libros (Harriet Lane, BNFc, Lexicomp, Pediamécum, Peña Camarena). Los datos (dosis, intervalos, máximos) se verifican contra las fuentes y se citan.
2. Cada regla cita **al menos 2 fuentes** (`sourceIds`) que existan en `sources.yaml`.
3. **Primera fuente: la ficha técnica oficial** (DIGEMID, FDA o AEMPS). Las demás sirven para verificar cruzando datos.
4. `mgPerUnit` = mg por unidad (suspensión 250 mg/5 mL → 50 mg por mL).
5. `step` = menor cantidad medible (0.1 mL con jeringa, 0.5 en una tableta ranurada, 1 en una cápsula).
6. Al menos **3 casos de prueba**: peso bajo, peso medio y un caso que llegue al tope (`capped: true`).
7. Marcas (`brandsPE`): solo si se verificaron en el registro de DIGEMID.

## Criterio de fuentes

- Se usan **todas** las fuentes disponibles; el mínimo es una fuente oficial por regla.
- Cada fuente declara su `kind` y su `country`. Orden de prioridad:
  1. **Norma peruana** (MINSA, DIGEMID: FNME, guías de práctica clínica).
  2. **Agencia reguladora** (FDA, AEMPS): la ficha técnica más reciente.
  3. **Guía de sociedad científica** (AAP, IDSA, GINA, CPS, OMS).
  4. **Libro** (Peña Camarena).
  5. **Revisión**.
- Si las fuentes coinciden, se usa el valor común.
- Si difieren mucho, **manda la norma peruana**. Excepción: la norma peruana es antigua y una guía vigente cambió la recomendación por evidencia nueva (p. ej. la dosis alta de amoxicilina en otitis). En ese caso se muestran las dos pautas como reglas separadas y se explica la diferencia.
- Toda diferencia relevante va en `countryNotes` (se ve en la app como «Diferencias por país»).
- **Texto parafraseado**, nunca copiado; el dato numérico se toma tal cual y se cita.

## Cómo se valida una ficha (médico)

1. El médico recalcula a mano cada `testCase` y compara la dosis con al menos una de las fuentes citadas.
2. Si todo coincide, se cambia `review` a:
   ```yaml
   review:
     status: validado
     author: Diego
     reviewers: [Dr./Dra. Nombre Apellido — CMP 00000]
     reviewedAt: 2026-11-04
     nextReviewAt: 2027-11-04
   ```
3. `npm run content:build` comprueba que los casos coincidan con el motor. La versión para Play Store (`content:build:release`) **solo compila si todas las fichas están validadas**.

> Las 10 fichas piloto son **BORRADORES pendientes de validación médica**. No usar en pacientes hasta validarlas.
