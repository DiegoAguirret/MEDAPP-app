# Simulación de médico: app frente a cálculo manual

Generado por `npm run sim:report` (tools/clinical-sim). El cálculo manual se escribió aparte del motor
de la app: multiplica el peso por la dosis, divide entre las tomas, aplica los topes y divide entre la
concentración **leída del texto impreso de la presentación** (p. ej. "250 mg/5 mL").

## Resumen
- Casos simulados: **8400** (10 fármacos × reglas × presentaciones × 18 pacientes típicos de 1 mes a 17 años).
- Casos calculables: **3674**. Fuera del rango de edad de la regla: 4726 (la app se negó a calcular en todos, que es lo correcto).
- **Coincidencias: 3674/3674 (100.0 %)**. Discrepancias: 0.
- Dosis en mg idéntica al cálculo manual: 3674/3674.
- Diferencia de volumen por redondeo a la medida (0.1 mL, 1 gota, ½ o 1 tableta): media 0.55 %, máxima 4.92 %. Nunca supera el 5 %; cuando el redondeo superaría el 5 %, la app muestra el valor exacto y avisa.
- En ningún caso la cantidad mostrada supera la dosis máxima por toma.

## Casos calculables
| Fármaco | Regla | Presentación | Paciente | mg manual | mg app | Cantidad exacta | Cantidad app | Resultado |
|---|---|---|---|---|---|---|---|---|
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 2 meses (5.1 kg) | 765 | 765 | 3.825 | 3.8 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 4 meses (6.4 kg) | 960 | 960 | 4.8 | 4.8 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 6 meses (7.6 kg) | 1140 | 1140 | 5.7 | 5.7 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 9 meses (8.6 kg) | 1290 | 1290 | 6.45 | 6.5 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 1 año (9.6 kg) | 1440 | 1440 | 7.2 | 7.2 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 18 meses (10.9 kg) | 1635 | 1635 | 8.175 | 8.2 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 2 años (12.2 kg) | 1830 | 1830 | 9.15 | 9.2 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 3 años (14.3 kg) | 2145 | 2145 | 10.725 | 10.7 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 4 años (16.3 kg) | 2445 | 2445 | 12.225 | 12.2 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 5 años (18.3 kg) | 2745 | 2745 | 13.725 | 13.7 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 6 años (20.5 kg) | 3075 | 3075 | 15.375 | 15.4 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 8 años (25.6 kg) | 3840 | 3840 | 19.2 | 19.2 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 10 años (32 kg) | 4800 | 4800 | 24 | 24 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 12 años (40 kg) | 6000 | 6000 | 30 | 30 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 14 años (50 kg) | 7500 | 7500 | 37.5 | 37.5 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 16 años (58 kg) | 8700 | 8700 | 43.5 | 43.5 mL | ✅  |
| acetilcisteina | fase-1 | Acetilcisteína 200 mg/mL (ampolla) | 17 años, obeso (95 kg) | 14250 | 14250 | 71.25 | 71.3 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 2 meses (5.1 kg) | 255 | 255 | 1.275 | 1.3 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 4 meses (6.4 kg) | 320 | 320 | 1.6 | 1.6 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 6 meses (7.6 kg) | 380 | 380 | 1.9 | 1.9 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 9 meses (8.6 kg) | 430 | 430 | 2.15 | 2.2 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 1 año (9.6 kg) | 480 | 480 | 2.4 | 2.4 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 18 meses (10.9 kg) | 545 | 545 | 2.725 | 2.7 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 2 años (12.2 kg) | 610 | 610 | 3.05 | 3.1 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 3 años (14.3 kg) | 715 | 715 | 3.575 | 3.6 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 4 años (16.3 kg) | 815 | 815 | 4.075 | 4.1 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 5 años (18.3 kg) | 915 | 915 | 4.575 | 4.6 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 6 años (20.5 kg) | 1025 | 1025 | 5.125 | 5.1 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 8 años (25.6 kg) | 1280 | 1280 | 6.4 | 6.4 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 10 años (32 kg) | 1600 | 1600 | 8 | 8 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 12 años (40 kg) | 2000 | 2000 | 10 | 10 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 14 años (50 kg) | 2500 | 2500 | 12.5 | 12.5 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 16 años (58 kg) | 2900 | 2900 | 14.5 | 14.5 mL | ✅  |
| acetilcisteina | fase-2 | Acetilcisteína 200 mg/mL (ampolla) | 17 años, obeso (95 kg) | 4750 | 4750 | 23.75 | 23.8 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 2 meses (5.1 kg) | 510 | 510 | 2.55 | 2.6 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 4 meses (6.4 kg) | 640 | 640 | 3.2 | 3.2 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 6 meses (7.6 kg) | 760 | 760 | 3.8 | 3.8 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 9 meses (8.6 kg) | 860 | 860 | 4.3 | 4.3 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 1 año (9.6 kg) | 960 | 960 | 4.8 | 4.8 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 18 meses (10.9 kg) | 1090 | 1090 | 5.45 | 5.5 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 2 años (12.2 kg) | 1220 | 1220 | 6.1 | 6.1 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 3 años (14.3 kg) | 1430 | 1430 | 7.15 | 7.2 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 4 años (16.3 kg) | 1630 | 1630 | 8.15 | 8.2 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 5 años (18.3 kg) | 1830 | 1830 | 9.15 | 9.2 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 6 años (20.5 kg) | 2050 | 2050 | 10.25 | 10.3 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 8 años (25.6 kg) | 2560 | 2560 | 12.8 | 12.8 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 10 años (32 kg) | 3200 | 3200 | 16 | 16 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 12 años (40 kg) | 4000 | 4000 | 20 | 20 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 14 años (50 kg) | 5000 | 5000 | 25 | 25 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 16 años (58 kg) | 5800 | 5800 | 29 | 29 mL | ✅  |
| acetilcisteina | fase-3 | Acetilcisteína 200 mg/mL (ampolla) | 17 años, obeso (95 kg) | 9500 | 9500 | 47.5 | 47.5 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 2 años (12.2 kg) | 244 | 244 | 6.1 | 6.1 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 3 años (14.3 kg) | 286 | 286 | 7.15 | 7.2 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 4 años (16.3 kg) | 326 | 326 | 8.15 | 8.2 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 5 años (18.3 kg) | 366 | 366 | 9.15 | 9.2 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 6 años (20.5 kg) | 410 | 410 | 10.25 | 10.3 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 8 años (25.6 kg) | 512 | 512 | 12.8 | 12.8 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 10 años (32 kg) | 640 | 640 | 16 | 16 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 12 años (40 kg) | 800 | 800 | 20 | 20 mL | ✅  |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 14 años (50 kg) | 800 | 800 | 20 | 20 mL | ✅ tope aplicado |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 16 años (58 kg) | 800 | 800 | 20 | 20 mL | ✅ tope aplicado |
| aciclovir | varicela | Suspensión 200 mg/5 mL | 17 años, obeso (95 kg) | 800 | 800 | 20 | 20 mL | ✅ tope aplicado |
| aciclovir | varicela | Tableta 200 mg | 2 años (12.2 kg) | 244 | 244 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 3 años (14.3 kg) | 286 | 286 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 4 años (16.3 kg) | 326 | 326 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 5 años (18.3 kg) | 366 | 366 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 6 años (20.5 kg) | 410 | 410 | 2.05 | 2 tableta | ✅  |
| aciclovir | varicela | Tableta 200 mg | 8 años (25.6 kg) | 512 | 512 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 10 años (32 kg) | 640 | 640 | 3.2 | 3.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 200 mg | 12 años (40 kg) | 800 | 800 | 4 | 4 tableta | ✅  |
| aciclovir | varicela | Tableta 200 mg | 14 años (50 kg) | 800 | 800 | 4 | 4 tableta | ✅ tope aplicado |
| aciclovir | varicela | Tableta 200 mg | 16 años (58 kg) | 800 | 800 | 4 | 4 tableta | ✅ tope aplicado |
| aciclovir | varicela | Tableta 200 mg | 17 años, obeso (95 kg) | 800 | 800 | 4 | 4 tableta | ✅ tope aplicado |
| aciclovir | varicela | Tableta 400 mg | 2 años (12.2 kg) | 244 | 244 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 3 años (14.3 kg) | 286 | 286 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 4 años (16.3 kg) | 326 | 326 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 5 años (18.3 kg) | 366 | 366 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 6 años (20.5 kg) | 410 | 410 | 1.025 | 1 tableta | ✅  |
| aciclovir | varicela | Tableta 400 mg | 8 años (25.6 kg) | 512 | 512 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 10 años (32 kg) | 640 | 640 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| aciclovir | varicela | Tableta 400 mg | 12 años (40 kg) | 800 | 800 | 2 | 2 tableta | ✅  |
| aciclovir | varicela | Tableta 400 mg | 14 años (50 kg) | 800 | 800 | 2 | 2 tableta | ✅ tope aplicado |
| aciclovir | varicela | Tableta 400 mg | 16 años (58 kg) | 800 | 800 | 2 | 2 tableta | ✅ tope aplicado |
| aciclovir | varicela | Tableta 400 mg | 17 años, obeso (95 kg) | 800 | 800 | 2 | 2 tableta | ✅ tope aplicado |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 1 año (9.6 kg) | 72 | 72 | 1.44 | 1.4 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 18 meses (10.9 kg) | 81.75 | 81.75 | 1.635 | 1.6 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 2 años (12.2 kg) | 91.5 | 91.5 | 1.83 | 1.8 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 3 años (14.3 kg) | 107.25 | 107.25 | 2.145 | 2.1 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 4 años (16.3 kg) | 122.25 | 122.25 | 2.445 | 2.4 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 5 años (18.3 kg) | 137.25 | 137.25 | 2.745 | 2.7 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 6 años (20.5 kg) | 153.75 | 153.75 | 3.075 | 3.1 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 8 años (25.6 kg) | 192 | 192 | 3.84 | 3.8 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 10 años (32 kg) | 240 | 240 | 4.8 | 4.8 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 250 mg/5 mL | 12 años (40 kg) | 300 | 300 | 6 | 6 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 1 año (9.6 kg) | 72 | 72 | 0.36 | 0.36 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 18 meses (10.9 kg) | 81.75 | 81.75 | 0.409 | 0.4 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 2 años (12.2 kg) | 91.5 | 91.5 | 0.458 | 0.46 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 3 años (14.3 kg) | 107.25 | 107.25 | 0.536 | 0.54 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 4 años (16.3 kg) | 122.25 | 122.25 | 0.611 | 0.6 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 5 años (18.3 kg) | 137.25 | 137.25 | 0.686 | 0.7 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 6 años (20.5 kg) | 153.75 | 153.75 | 0.769 | 0.8 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 8 años (25.6 kg) | 192 | 192 | 0.96 | 1 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 10 años (32 kg) | 240 | 240 | 1.2 | 1.2 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Solución oral 200 mg/mL | 12 años (40 kg) | 300 | 300 | 1.5 | 1.5 mL | ✅  |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 1 año (9.6 kg) | 72 | 72 | 0.144 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 18 meses (10.9 kg) | 81.75 | 81.75 | 0.164 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 2 años (12.2 kg) | 91.5 | 91.5 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 3 años (14.3 kg) | 107.25 | 107.25 | 0.214 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 4 años (16.3 kg) | 122.25 | 122.25 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 5 años (18.3 kg) | 137.25 | 137.25 | 0.275 | 0.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 6 años (20.5 kg) | 153.75 | 153.75 | 0.307 | 0.31 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 8 años (25.6 kg) | 192 | 192 | 0.384 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 10 años (32 kg) | 240 | 240 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| acido-valproico | epilepsia-1-12-anos | Tableta de liberación modificada 500 mg | 12 años (40 kg) | 300 | 300 | 0.6 | 0.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 1 mes (4.2 kg) | 0.42 | 0.42 | 0.14 | 0.14 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 2 meses (5.1 kg) | 0.51 | 0.51 | 0.17 | 0.17 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 4 meses (6.4 kg) | 0.64 | 0.64 | 0.213 | 0.21 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 6 meses (7.6 kg) | 0.76 | 0.76 | 0.253 | 0.25 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 9 meses (8.6 kg) | 0.86 | 0.86 | 0.287 | 0.3 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 1 año (9.6 kg) | 0.96 | 0.96 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 18 meses (10.9 kg) | 1.09 | 1.09 | 0.363 | 0.35 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 2 años (12.2 kg) | 1.22 | 1.22 | 0.407 | 0.4 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 3 años (14.3 kg) | 1.43 | 1.43 | 0.477 | 0.5 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 4 años (16.3 kg) | 1.63 | 1.63 | 0.543 | 0.55 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 5 años (18.3 kg) | 1.83 | 1.83 | 0.61 | 0.6 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 6 años (20.5 kg) | 2.05 | 2.05 | 0.683 | 0.7 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 8 años (25.6 kg) | 2.56 | 2.56 | 0.853 | 0.85 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 10 años (32 kg) | 3.2 | 3.2 | 1.067 | 1.05 mL | ✅  |
| adenosina | primera-dosis | Adenosina 3 mg/mL (ampolla) | 12 años (40 kg) | 4 | 4 | 1.333 | 1.35 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 1 mes (4.2 kg) | 0.42 | 0.42 | 0.14 | 0.14 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 2 meses (5.1 kg) | 0.51 | 0.51 | 0.17 | 0.17 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 4 meses (6.4 kg) | 0.64 | 0.64 | 0.213 | 0.21 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 6 meses (7.6 kg) | 0.76 | 0.76 | 0.253 | 0.25 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 9 meses (8.6 kg) | 0.86 | 0.86 | 0.287 | 0.3 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 1 año (9.6 kg) | 0.96 | 0.96 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 18 meses (10.9 kg) | 1.09 | 1.09 | 0.363 | 0.35 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 2 años (12.2 kg) | 1.22 | 1.22 | 0.407 | 0.4 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 3 años (14.3 kg) | 1.43 | 1.43 | 0.477 | 0.5 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 4 años (16.3 kg) | 1.63 | 1.63 | 0.543 | 0.55 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 5 años (18.3 kg) | 1.83 | 1.83 | 0.61 | 0.6 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 6 años (20.5 kg) | 2.05 | 2.05 | 0.683 | 0.7 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 8 años (25.6 kg) | 2.56 | 2.56 | 0.853 | 0.85 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 10 años (32 kg) | 3.2 | 3.2 | 1.067 | 1.05 mL | ✅  |
| adenosina | dosis-siguientes | Adenosina 3 mg/mL (ampolla) | 12 años (40 kg) | 4 | 4 | 1.333 | 1.35 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 1 mes (4.2 kg) | 0.04 | 0.04 | 0.042 | 0.04 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 2 meses (5.1 kg) | 0.05 | 0.05 | 0.051 | 0.05 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 4 meses (6.4 kg) | 0.06 | 0.06 | 0.064 | 0.06 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 6 meses (7.6 kg) | 0.08 | 0.08 | 0.076 | 0.08 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 9 meses (8.6 kg) | 0.09 | 0.09 | 0.086 | 0.09 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 1 año (9.6 kg) | 0.1 | 0.1 | 0.096 | 0.1 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 18 meses (10.9 kg) | 0.11 | 0.11 | 0.109 | 0.11 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 2 años (12.2 kg) | 0.12 | 0.12 | 0.122 | 0.12 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 3 años (14.3 kg) | 0.14 | 0.14 | 0.143 | 0.14 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 4 años (16.3 kg) | 0.16 | 0.16 | 0.163 | 0.16 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 5 años (18.3 kg) | 0.18 | 0.18 | 0.183 | 0.18 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 6 años (20.5 kg) | 0.21 | 0.21 | 0.205 | 0.21 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 8 años (25.6 kg) | 0.26 | 0.26 | 0.256 | 0.26 mL | ✅  |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 10 años (32 kg) | 0.3 | 0.3 | 0.3 | 0.3 mL | ✅ tope aplicado |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 12 años (40 kg) | 0.3 | 0.3 | 0.3 | 0.3 mL | ✅ tope aplicado |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 14 años (50 kg) | 0.3 | 0.3 | 0.3 | 0.3 mL | ✅ tope aplicado |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 16 años (58 kg) | 0.3 | 0.3 | 0.3 | 0.3 mL | ✅ tope aplicado |
| adrenalina | anafilaxia-im | Ampolla 1 mg/mL (1:1000) | 17 años, obeso (95 kg) | 0.3 | 0.3 | 0.3 | 0.3 mL | ✅ tope aplicado |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 1 mes (4.2 kg) | 0.04 | 0.04 | 0.42 | 0.4 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 2 meses (5.1 kg) | 0.05 | 0.05 | 0.51 | 0.5 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 4 meses (6.4 kg) | 0.06 | 0.06 | 0.64 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 6 meses (7.6 kg) | 0.08 | 0.08 | 0.76 | 0.76 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 9 meses (8.6 kg) | 0.09 | 0.09 | 0.86 | 0.9 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 1 año (9.6 kg) | 0.1 | 0.1 | 0.96 | 1 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 18 meses (10.9 kg) | 0.11 | 0.11 | 1.09 | 1.1 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 2 años (12.2 kg) | 0.12 | 0.12 | 1.22 | 1.2 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 3 años (14.3 kg) | 0.14 | 0.14 | 1.43 | 1.4 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 4 años (16.3 kg) | 0.16 | 0.16 | 1.63 | 1.6 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 5 años (18.3 kg) | 0.18 | 0.18 | 1.83 | 1.8 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 6 años (20.5 kg) | 0.21 | 0.21 | 2.05 | 2.1 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 8 años (25.6 kg) | 0.26 | 0.26 | 2.56 | 2.6 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 10 años (32 kg) | 0.32 | 0.32 | 3.2 | 3.2 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 12 años (40 kg) | 0.4 | 0.4 | 4 | 4 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 14 años (50 kg) | 0.5 | 0.5 | 5 | 5 mL | ✅  |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 16 años (58 kg) | 0.5 | 0.5 | 5 | 5 mL | ✅ tope aplicado |
| adrenalina | paro-iv | Adrenalina 1:10 000 = 0.1 mg/mL (1 mL de la ampolla 1:1000 + 9 mL de SF) | 17 años, obeso (95 kg) | 0.5 | 0.5 | 5 | 5 mL | ✅ tope aplicado |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 2 años (12.2 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 3 años (14.3 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 4 años (16.3 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 5 años (18.3 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 6 años (20.5 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 8 años (25.6 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 10 años (32 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 12 años (40 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 14 años (50 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 16 años (58 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 17 años, obeso (95 kg) | 400 | 400 | 20 | 20 mL | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 2 años (12.2 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 3 años (14.3 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 4 años (16.3 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 5 años (18.3 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 6 años (20.5 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 8 años (25.6 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 10 años (32 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 12 años (40 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 14 años (50 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 16 años (58 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-2-anos-o-mas | Tableta 200 mg | 17 años, obeso (95 kg) | 400 | 400 | 2 | 2 tableta | ✅  |
| albendazol | nematodos-1-2-anos | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 1 año (9.6 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| albendazol | nematodos-1-2-anos | Suspensión 100 mg/5 mL (frasco de 10 mL = 400 mg) | 18 meses (10.9 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| albendazol | nematodos-1-2-anos | Tableta 200 mg | 1 año (9.6 kg) | 200 | 200 | 1 | 1 tableta | ✅  |
| albendazol | nematodos-1-2-anos | Tableta 200 mg | 18 meses (10.9 kg) | 200 | 200 | 1 | 1 tableta | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 1 mes (4.2 kg) | 21 | 21 | 0.084 | 0.08 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 2 meses (5.1 kg) | 25.5 | 25.5 | 0.102 | 0.1 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 4 meses (6.4 kg) | 32 | 32 | 0.128 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 6 meses (7.6 kg) | 38 | 38 | 0.152 | 0.15 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 9 meses (8.6 kg) | 43 | 43 | 0.172 | 0.17 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 1 año (9.6 kg) | 48 | 48 | 0.192 | 0.2 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.218 | 0.22 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 2 años (12.2 kg) | 61 | 61 | 0.244 | 0.25 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 3 años (14.3 kg) | 71.5 | 71.5 | 0.286 | 0.3 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 4 años (16.3 kg) | 81.5 | 81.5 | 0.326 | 0.33 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 5 años (18.3 kg) | 91.5 | 91.5 | 0.366 | 0.35 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 6 años (20.5 kg) | 102.5 | 102.5 | 0.41 | 0.4 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 8 años (25.6 kg) | 128 | 128 | 0.512 | 0.5 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 10 años (32 kg) | 160 | 160 | 0.64 | 0.65 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 12 años (40 kg) | 200 | 200 | 0.8 | 0.8 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 14 años (50 kg) | 250 | 250 | 1 | 1 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 16 años (58 kg) | 290 | 290 | 1.16 | 1.15 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 17 años, obeso (95 kg) | 475 | 475 | 1.9 | 1.9 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 1 mes (4.2 kg) | 21 | 21 | 0.42 | 0.4 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 2 meses (5.1 kg) | 25.5 | 25.5 | 0.51 | 0.5 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 4 meses (6.4 kg) | 32 | 32 | 0.64 | 0.65 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 6 meses (7.6 kg) | 38 | 38 | 0.76 | 0.75 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 9 meses (8.6 kg) | 43 | 43 | 0.86 | 0.85 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 1 año (9.6 kg) | 48 | 48 | 0.96 | 0.95 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 18 meses (10.9 kg) | 54.5 | 54.5 | 1.09 | 1.1 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 2 años (12.2 kg) | 61 | 61 | 1.22 | 1.2 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 3 años (14.3 kg) | 71.5 | 71.5 | 1.43 | 1.45 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 4 años (16.3 kg) | 81.5 | 81.5 | 1.63 | 1.65 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 5 años (18.3 kg) | 91.5 | 91.5 | 1.83 | 1.85 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 6 años (20.5 kg) | 102.5 | 102.5 | 2.05 | 2.05 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 8 años (25.6 kg) | 128 | 128 | 2.56 | 2.55 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 10 años (32 kg) | 160 | 160 | 3.2 | 3.2 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 12 años (40 kg) | 200 | 200 | 4 | 4 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 14 años (50 kg) | 250 | 250 | 5 | 5 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 16 años (58 kg) | 290 | 290 | 5.8 | 5.8 mL | ✅  |
| amikacina | ninos-cada-8-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 17 años, obeso (95 kg) | 475 | 475 | 9.5 | 9.5 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 1 mes (4.2 kg) | 31.5 | 31.5 | 0.126 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 2 meses (5.1 kg) | 38.25 | 38.25 | 0.153 | 0.15 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 4 meses (6.4 kg) | 48 | 48 | 0.192 | 0.2 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 6 meses (7.6 kg) | 57 | 57 | 0.228 | 0.23 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 9 meses (8.6 kg) | 64.5 | 64.5 | 0.258 | 0.25 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 1 año (9.6 kg) | 72 | 72 | 0.288 | 0.3 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 18 meses (10.9 kg) | 81.75 | 81.75 | 0.327 | 0.33 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 2 años (12.2 kg) | 91.5 | 91.5 | 0.366 | 0.35 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 3 años (14.3 kg) | 107.25 | 107.25 | 0.429 | 0.45 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 4 años (16.3 kg) | 122.25 | 122.25 | 0.489 | 0.5 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 5 años (18.3 kg) | 137.25 | 137.25 | 0.549 | 0.55 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 6 años (20.5 kg) | 153.75 | 153.75 | 0.615 | 0.6 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 8 años (25.6 kg) | 192 | 192 | 0.768 | 0.75 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 10 años (32 kg) | 240 | 240 | 0.96 | 0.95 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 12 años (40 kg) | 300 | 300 | 1.2 | 1.2 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 14 años (50 kg) | 375 | 375 | 1.5 | 1.5 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 16 años (58 kg) | 435 | 435 | 1.74 | 1.75 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 250 mg/mL (ampolla 500 mg/2 mL) | 17 años, obeso (95 kg) | 712.5 | 712.5 | 2.85 | 2.85 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 1 mes (4.2 kg) | 31.5 | 31.5 | 0.63 | 0.65 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 2 meses (5.1 kg) | 38.25 | 38.25 | 0.765 | 0.75 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 4 meses (6.4 kg) | 48 | 48 | 0.96 | 0.95 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 6 meses (7.6 kg) | 57 | 57 | 1.14 | 1.15 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 9 meses (8.6 kg) | 64.5 | 64.5 | 1.29 | 1.3 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 1 año (9.6 kg) | 72 | 72 | 1.44 | 1.45 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 18 meses (10.9 kg) | 81.75 | 81.75 | 1.635 | 1.65 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 2 años (12.2 kg) | 91.5 | 91.5 | 1.83 | 1.85 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 3 años (14.3 kg) | 107.25 | 107.25 | 2.145 | 2.15 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 4 años (16.3 kg) | 122.25 | 122.25 | 2.445 | 2.45 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 5 años (18.3 kg) | 137.25 | 137.25 | 2.745 | 2.75 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 6 años (20.5 kg) | 153.75 | 153.75 | 3.075 | 3.1 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 8 años (25.6 kg) | 192 | 192 | 3.84 | 3.85 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 10 años (32 kg) | 240 | 240 | 4.8 | 4.8 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 12 años (40 kg) | 300 | 300 | 6 | 6 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 14 años (50 kg) | 375 | 375 | 7.5 | 7.5 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 16 años (58 kg) | 435 | 435 | 8.7 | 8.7 mL | ✅  |
| amikacina | ninos-cada-12-h | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 17 años, obeso (95 kg) | 712.5 | 712.5 | 14.25 | 14.25 mL | ✅  |
| amikacina | neonato-carga | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 3 días, bajo peso (2 kg) (2 kg) | 20 | 20 | 0.4 | 0.4 mL | ✅  |
| amikacina | neonato-carga | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 5 días (3.2 kg) (3.2 kg) | 32 | 32 | 0.64 | 0.65 mL | ✅  |
| amikacina | neonato-carga | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 15 días (3.6 kg) (3.6 kg) | 36 | 36 | 0.72 | 0.7 mL | ✅  |
| amikacina | neonato-mantenimiento | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 3 días, bajo peso (2 kg) (2 kg) | 15 | 15 | 0.3 | 0.3 mL | ✅  |
| amikacina | neonato-mantenimiento | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 5 días (3.2 kg) (3.2 kg) | 24 | 24 | 0.48 | 0.5 mL | ✅  |
| amikacina | neonato-mantenimiento | Amikacina 50 mg/mL (ampolla 100 mg/2 mL) | 15 días (3.6 kg) (3.6 kg) | 27 | 27 | 0.54 | 0.55 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 1 mes (4.2 kg) | 21 | 21 | 0.42 | 0.4 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 2 meses (5.1 kg) | 25.5 | 25.5 | 0.51 | 0.5 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 4 meses (6.4 kg) | 32 | 32 | 0.64 | 0.65 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 6 meses (7.6 kg) | 38 | 38 | 0.76 | 0.75 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 9 meses (8.6 kg) | 43 | 43 | 0.86 | 0.85 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 1 año (9.6 kg) | 48 | 48 | 0.96 | 0.95 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 18 meses (10.9 kg) | 54.5 | 54.5 | 1.09 | 1.1 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 2 años (12.2 kg) | 61 | 61 | 1.22 | 1.2 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 3 años (14.3 kg) | 71.5 | 71.5 | 1.43 | 1.45 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 4 años (16.3 kg) | 81.5 | 81.5 | 1.63 | 1.65 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 5 años (18.3 kg) | 91.5 | 91.5 | 1.83 | 1.85 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 6 años (20.5 kg) | 102.5 | 102.5 | 2.05 | 2.05 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 8 años (25.6 kg) | 128 | 128 | 2.56 | 2.55 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 10 años (32 kg) | 160 | 160 | 3.2 | 3.2 mL | ✅  |
| amiodarona | carga-iv | Amiodarona 50 mg/mL (ampolla 150 mg/3 mL) | 12 años (40 kg) | 200 | 200 | 4 | 4 mL | ✅  |
| amoxicilina-clavulanico | menores-3-meses | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 1 mes (4.2 kg) | 63 | 63 | 0.787 | 0.8 mL | ✅  |
| amoxicilina-clavulanico | menores-3-meses | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.956 | 1 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 4 meses (6.4 kg) | 144 | 144 | 1.8 | 1.8 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 6 meses (7.6 kg) | 171 | 171 | 2.138 | 2.1 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 9 meses (8.6 kg) | 193.5 | 193.5 | 2.419 | 2.4 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 1 año (9.6 kg) | 216 | 216 | 2.7 | 2.7 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 18 meses (10.9 kg) | 245.25 | 245.25 | 3.066 | 3.1 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 2 años (12.2 kg) | 274.5 | 274.5 | 3.431 | 3.4 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 3 años (14.3 kg) | 321.75 | 321.75 | 4.022 | 4 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 4 años (16.3 kg) | 366.75 | 366.75 | 4.584 | 4.6 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 5 años (18.3 kg) | 411.75 | 411.75 | 5.147 | 5.1 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 6 años (20.5 kg) | 461.25 | 461.25 | 5.766 | 5.8 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 8 años (25.6 kg) | 576 | 576 | 7.2 | 7.2 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 10 años (32 kg) | 720 | 720 | 9 | 9 mL | ✅  |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 12 años (40 kg) | 875 | 875 | 10.938 | 10.9 mL | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 14 años (50 kg) | 875 | 875 | 10.938 | 10.9 mL | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 16 años (58 kg) | 875 | 875 | 10.938 | 10.9 mL | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Suspensión 400 mg/57 mg por 5 mL (dosis como amoxicilina) | 17 años, obeso (95 kg) | 875 | 875 | 10.938 | 10.9 mL | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 4 meses (6.4 kg) | 144 | 144 | 0.165 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 6 meses (7.6 kg) | 171 | 171 | 0.195 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 9 meses (8.6 kg) | 193.5 | 193.5 | 0.221 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 1 año (9.6 kg) | 216 | 216 | 0.247 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 18 meses (10.9 kg) | 245.25 | 245.25 | 0.28 | 0.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 2 años (12.2 kg) | 274.5 | 274.5 | 0.314 | 0.31 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 3 años (14.3 kg) | 321.75 | 321.75 | 0.368 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 4 años (16.3 kg) | 366.75 | 366.75 | 0.419 | 0.42 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 5 años (18.3 kg) | 411.75 | 411.75 | 0.471 | 0.47 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 6 años (20.5 kg) | 461.25 | 461.25 | 0.527 | 0.53 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 8 años (25.6 kg) | 576 | 576 | 0.658 | 0.66 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 10 años (32 kg) | 720 | 720 | 0.823 | 0.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 12 años (40 kg) | 875 | 875 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 14 años (50 kg) | 875 | 875 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 16 años (58 kg) | 875 | 875 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina-clavulanico | estandar-cada-12h | Tableta 875 mg/125 mg (dosis como amoxicilina) | 17 años, obeso (95 kg) | 875 | 875 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina | menores-3-meses | Suspensión 125 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 2.52 | 2.5 mL | ✅  |
| amoxicilina | menores-3-meses | Suspensión 125 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 3.06 | 3.1 mL | ✅  |
| amoxicilina | menores-3-meses | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 1.26 | 1.3 mL | ✅  |
| amoxicilina | menores-3-meses | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 1.53 | 1.5 mL | ✅  |
| amoxicilina | menores-3-meses | Suspensión 500 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 0.63 | 0.6 mL | ✅  |
| amoxicilina | menores-3-meses | Suspensión 500 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.765 | 0.8 mL | ✅  |
| amoxicilina | menores-3-meses | Tableta 500 mg | 1 mes (4.2 kg) | 63 | 63 | 0.126 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | menores-3-meses | Tableta 500 mg | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.153 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 4 meses (6.4 kg) | 85.33 | 85.33 | 3.413 | 3.4 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 6 meses (7.6 kg) | 101.33 | 101.33 | 4.053 | 4.1 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 9 meses (8.6 kg) | 114.67 | 114.67 | 4.587 | 4.6 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 1 año (9.6 kg) | 128 | 128 | 5.12 | 5.1 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 18 meses (10.9 kg) | 145.33 | 145.33 | 5.813 | 5.8 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 2 años (12.2 kg) | 162.67 | 162.67 | 6.507 | 6.5 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 190.67 | 190.67 | 7.627 | 7.6 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 217.33 | 217.33 | 8.693 | 8.7 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 244 | 244 | 9.76 | 9.8 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 273.33 | 273.33 | 10.933 | 10.9 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 341.33 | 341.33 | 13.653 | 13.7 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 10 años (32 kg) | 426.67 | 426.67 | 17.067 | 17.1 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 12 años (40 kg) | 500 | 500 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 14 años (50 kg) | 500 | 500 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 16 años (58 kg) | 500 | 500 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 125 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 85.33 | 85.33 | 1.707 | 1.7 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 101.33 | 101.33 | 2.027 | 2 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 114.67 | 114.67 | 2.293 | 2.3 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 128 | 128 | 2.56 | 2.6 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 145.33 | 145.33 | 2.907 | 2.9 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 162.67 | 162.67 | 3.253 | 3.3 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 190.67 | 190.67 | 3.813 | 3.8 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 217.33 | 217.33 | 4.347 | 4.3 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 244 | 244 | 4.88 | 4.9 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 273.33 | 273.33 | 5.467 | 5.5 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 341.33 | 341.33 | 6.827 | 6.8 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 10 años (32 kg) | 426.67 | 426.67 | 8.533 | 8.5 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 14 años (50 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 16 años (58 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 4 meses (6.4 kg) | 85.33 | 85.33 | 0.853 | 0.85 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 6 meses (7.6 kg) | 101.33 | 101.33 | 1.013 | 1 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 9 meses (8.6 kg) | 114.67 | 114.67 | 1.147 | 1.1 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 1 año (9.6 kg) | 128 | 128 | 1.28 | 1.3 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 18 meses (10.9 kg) | 145.33 | 145.33 | 1.453 | 1.5 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 2 años (12.2 kg) | 162.67 | 162.67 | 1.627 | 1.6 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 3 años (14.3 kg) | 190.67 | 190.67 | 1.907 | 1.9 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 4 años (16.3 kg) | 217.33 | 217.33 | 2.173 | 2.2 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 5 años (18.3 kg) | 244 | 244 | 2.44 | 2.4 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 6 años (20.5 kg) | 273.33 | 273.33 | 2.733 | 2.7 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 8 años (25.6 kg) | 341.33 | 341.33 | 3.413 | 3.4 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 10 años (32 kg) | 426.67 | 426.67 | 4.267 | 4.3 mL | ✅  |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 12 años (40 kg) | 500 | 500 | 5 | 5 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 14 años (50 kg) | 500 | 500 | 5 | 5 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 16 años (58 kg) | 500 | 500 | 5 | 5 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Suspensión 500 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 5 | 5 mL | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 4 meses (6.4 kg) | 85.33 | 85.33 | 0.171 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 6 meses (7.6 kg) | 101.33 | 101.33 | 0.203 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 9 meses (8.6 kg) | 114.67 | 114.67 | 0.229 | 0.23 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 1 año (9.6 kg) | 128 | 128 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 18 meses (10.9 kg) | 145.33 | 145.33 | 0.291 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 2 años (12.2 kg) | 162.67 | 162.67 | 0.325 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 3 años (14.3 kg) | 190.67 | 190.67 | 0.381 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 4 años (16.3 kg) | 217.33 | 217.33 | 0.435 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 5 años (18.3 kg) | 244 | 244 | 0.488 | 0.49 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 6 años (20.5 kg) | 273.33 | 273.33 | 0.547 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 8 años (25.6 kg) | 341.33 | 341.33 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 10 años (32 kg) | 426.67 | 426.67 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 12 años (40 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina | infecciones-comunes | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 6 meses (7.6 kg) | 342 | 342 | 13.68 | 13.7 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 9 meses (8.6 kg) | 387 | 387 | 15.48 | 15.5 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 1 año (9.6 kg) | 432 | 432 | 17.28 | 17.3 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 18 meses (10.9 kg) | 490.5 | 490.5 | 19.62 | 19.6 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 2 años (12.2 kg) | 549 | 549 | 21.96 | 22 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 643.5 | 643.5 | 25.74 | 25.7 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 733.5 | 733.5 | 29.34 | 29.3 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 823.5 | 823.5 | 32.94 | 32.9 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 922.5 | 922.5 | 36.9 | 36.9 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 1152 | 1152 | 46.08 | 46.1 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 10 años (32 kg) | 1440 | 1440 | 57.6 | 57.6 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 125 mg/5 mL | 12 años (40 kg) | 1800 | 1800 | 72 | 72 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 342 | 342 | 6.84 | 6.8 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 387 | 387 | 7.74 | 7.7 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 432 | 432 | 8.64 | 8.6 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 490.5 | 490.5 | 9.81 | 9.8 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 549 | 549 | 10.98 | 11 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 643.5 | 643.5 | 12.87 | 12.9 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 733.5 | 733.5 | 14.67 | 14.7 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 823.5 | 823.5 | 16.47 | 16.5 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 922.5 | 922.5 | 18.45 | 18.5 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 1152 | 1152 | 23.04 | 23 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 10 años (32 kg) | 1440 | 1440 | 28.8 | 28.8 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 250 mg/5 mL | 12 años (40 kg) | 1800 | 1800 | 36 | 36 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 6 meses (7.6 kg) | 342 | 342 | 3.42 | 3.4 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 9 meses (8.6 kg) | 387 | 387 | 3.87 | 3.9 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 1 año (9.6 kg) | 432 | 432 | 4.32 | 4.3 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 18 meses (10.9 kg) | 490.5 | 490.5 | 4.905 | 4.9 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 2 años (12.2 kg) | 549 | 549 | 5.49 | 5.5 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 3 años (14.3 kg) | 643.5 | 643.5 | 6.435 | 6.4 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 4 años (16.3 kg) | 733.5 | 733.5 | 7.335 | 7.3 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 5 años (18.3 kg) | 823.5 | 823.5 | 8.235 | 8.2 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 6 años (20.5 kg) | 922.5 | 922.5 | 9.225 | 9.2 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 8 años (25.6 kg) | 1152 | 1152 | 11.52 | 11.5 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 10 años (32 kg) | 1440 | 1440 | 14.4 | 14.4 mL | ✅  |
| amoxicilina | oma-dosis-alta | Suspensión 500 mg/5 mL | 12 años (40 kg) | 1800 | 1800 | 18 | 18 mL | ✅  |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 6 meses (7.6 kg) | 342 | 342 | 0.684 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 9 meses (8.6 kg) | 387 | 387 | 0.774 | 0.77 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 1 año (9.6 kg) | 432 | 432 | 0.864 | 0.86 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 18 meses (10.9 kg) | 490.5 | 490.5 | 0.981 | 1 tableta | ✅  |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 2 años (12.2 kg) | 549 | 549 | 1.098 | 1.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 3 años (14.3 kg) | 643.5 | 643.5 | 1.287 | 1.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 4 años (16.3 kg) | 733.5 | 733.5 | 1.467 | 1.47 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 5 años (18.3 kg) | 823.5 | 823.5 | 1.647 | 1.65 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 6 años (20.5 kg) | 922.5 | 922.5 | 1.845 | 1.84 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 8 años (25.6 kg) | 1152 | 1152 | 2.304 | 2.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 10 años (32 kg) | 1440 | 1440 | 2.88 | 3 tableta | ✅  |
| amoxicilina | oma-dosis-alta | Tableta 500 mg | 12 años (40 kg) | 1800 | 1800 | 3.6 | 3.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 715 | 715 | 28.6 | 28.6 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 815 | 815 | 32.6 | 32.6 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 915 | 915 | 36.6 | 36.6 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 10 años (32 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 12 años (40 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 14 años (50 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 16 años (58 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 125 mg/5 mL | 17 años, obeso (95 kg) | 1000 | 1000 | 40 | 40 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 715 | 715 | 14.3 | 14.3 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 815 | 815 | 16.3 | 16.3 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 915 | 915 | 18.3 | 18.3 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 10 años (32 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 12 años (40 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 14 años (50 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 16 años (58 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 3 años (14.3 kg) | 715 | 715 | 7.15 | 7.2 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 4 años (16.3 kg) | 815 | 815 | 8.15 | 8.2 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 5 años (18.3 kg) | 915 | 915 | 9.15 | 9.2 mL | ✅  |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 6 años (20.5 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 8 años (25.6 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 10 años (32 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 12 años (40 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 14 años (50 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 16 años (58 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Suspensión 500 mg/5 mL | 17 años, obeso (95 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 3 años (14.3 kg) | 715 | 715 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 4 años (16.3 kg) | 815 | 815 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 5 años (18.3 kg) | 915 | 915 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 6 años (20.5 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 8 años (25.6 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 10 años (32 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 12 años (40 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 14 años (50 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 16 años (58 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| amoxicilina | faringitis-estreptococica | Tableta 500 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 1 mes (4.2 kg) | 210 | 210 | 1.05 | 1.1 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 2 meses (5.1 kg) | 255 | 255 | 1.275 | 1.3 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 4 meses (6.4 kg) | 320 | 320 | 1.6 | 1.6 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 6 meses (7.6 kg) | 380 | 380 | 1.9 | 1.9 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 9 meses (8.6 kg) | 430 | 430 | 2.15 | 2.2 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 1 año (9.6 kg) | 480 | 480 | 2.4 | 2.4 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 18 meses (10.9 kg) | 545 | 545 | 2.725 | 2.7 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 2 años (12.2 kg) | 610 | 610 | 3.05 | 3.1 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 3 años (14.3 kg) | 715 | 715 | 3.575 | 3.6 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 4 años (16.3 kg) | 815 | 815 | 4.075 | 4.1 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 5 años (18.3 kg) | 915 | 915 | 4.575 | 4.6 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 6 años (20.5 kg) | 1025 | 1025 | 5.125 | 5.1 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 8 años (25.6 kg) | 1280 | 1280 | 6.4 | 6.4 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 10 años (32 kg) | 1600 | 1600 | 8 | 8 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 12 años (40 kg) | 2000 | 2000 | 10 | 10 mL | ✅  |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 14 años (50 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 16 años (58 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| ampicilina | moderada-severa-iv | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 17 años, obeso (95 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 1 mes (4.2 kg) | 210 | 210 | 1.05 | 1.1 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 2 meses (5.1 kg) | 255 | 255 | 1.275 | 1.3 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 4 meses (6.4 kg) | 320 | 320 | 1.6 | 1.6 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 6 meses (7.6 kg) | 380 | 380 | 1.9 | 1.9 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 9 meses (8.6 kg) | 430 | 430 | 2.15 | 2.2 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 1 año (9.6 kg) | 480 | 480 | 2.4 | 2.4 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 18 meses (10.9 kg) | 545 | 545 | 2.725 | 2.7 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 2 años (12.2 kg) | 610 | 610 | 3.05 | 3.1 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 3 años (14.3 kg) | 715 | 715 | 3.575 | 3.6 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 4 años (16.3 kg) | 815 | 815 | 4.075 | 4.1 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 5 años (18.3 kg) | 915 | 915 | 4.575 | 4.6 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 6 años (20.5 kg) | 1025 | 1025 | 5.125 | 5.1 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 8 años (25.6 kg) | 1280 | 1280 | 6.4 | 6.4 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 10 años (32 kg) | 1600 | 1600 | 8 | 8 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 12 años (40 kg) | 2000 | 2000 | 10 | 10 mL | ✅  |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 14 años (50 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 16 años (58 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| ampicilina | moderada-severa-im | Vial 500 mg reconstituido con 2.1 mL de agua estéril = 500 mg/2.5 mL (200 mg/mL) | 17 años, obeso (95 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 1 mes (4.2 kg) | 1.05 | 1.05 | 0.21 | 0.2 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 2 meses (5.1 kg) | 1.27 | 1.27 | 0.255 | 0.26 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 4 meses (6.4 kg) | 1.6 | 1.6 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 6 meses (7.6 kg) | 1.9 | 1.9 | 0.38 | 0.38 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 9 meses (8.6 kg) | 2.15 | 2.15 | 0.43 | 0.43 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 1 año (9.6 kg) | 2.4 | 2.4 | 0.48 | 0.5 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 18 meses (10.9 kg) | 2.73 | 2.73 | 0.545 | 0.55 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 2 años (12.2 kg) | 3.05 | 3.05 | 0.61 | 0.6 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 3 años (14.3 kg) | 3.58 | 3.58 | 0.715 | 0.7 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 4 años (16.3 kg) | 4.08 | 4.08 | 0.815 | 0.8 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 5 años (18.3 kg) | 4.58 | 4.58 | 0.915 | 0.9 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 6 años (20.5 kg) | 5.13 | 5.13 | 1.025 | 1 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 8 años (25.6 kg) | 6.4 | 6.4 | 1.28 | 1.3 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 10 años (32 kg) | 8 | 8 | 1.6 | 1.6 mL | ✅  |
| anfotericina-b | dosis-diaria | Frasco 50 mg reconstituido con 10 mL (5 mg/mL); diluir a 0.1 mg/mL en dextrosa 5 % | 12 años (40 kg) | 10 | 10 | 2 | 2 mL | ✅  |
| artesunato-mefloquina | menores-6-meses | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 1 mes (4.2 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | menores-6-meses | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 2 meses (5.1 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | menores-6-meses | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 4 meses (6.4 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-5-9-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 6 meses (7.6 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-5-9-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 9 meses (8.6 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-5-9-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 1 año (9.6 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-10-18-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 18 meses (10.9 kg) | 50 | 50 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-10-18-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 2 años (12.2 kg) | 50 | 50 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-10-18-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 3 años (14.3 kg) | 50 | 50 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-10-18-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 4 años (16.3 kg) | 50 | 50 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-10-18-kg | Tableta 25 mg + 50 mg (artesunato + mefloquina) | 5 años (18.3 kg) | 50 | 50 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-19-29-kg | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 6 años (20.5 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-19-29-kg | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 8 años (25.6 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| artesunato-mefloquina | banda-30-kg-o-mas | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 10 años (32 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-30-kg-o-mas | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 12 años (40 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-30-kg-o-mas | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 14 años (50 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-30-kg-o-mas | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 16 años (58 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| artesunato-mefloquina | banda-30-kg-o-mas | Tableta 100 mg + 200 mg (artesunato + mefloquina) | 17 años, obeso (95 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 1 mes (4.2 kg) | 0.21 | 0.21 | 0.21 | 0.2 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 2 meses (5.1 kg) | 0.26 | 0.26 | 0.255 | 0.25 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 4 meses (6.4 kg) | 0.32 | 0.32 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| atropina | organofosforados | Ampolla 1 mg/mL | 6 meses (7.6 kg) | 0.38 | 0.38 | 0.38 | 0.38 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| atropina | organofosforados | Ampolla 1 mg/mL | 9 meses (8.6 kg) | 0.43 | 0.43 | 0.43 | 0.45 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 1 año (9.6 kg) | 0.48 | 0.48 | 0.48 | 0.5 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 18 meses (10.9 kg) | 0.55 | 0.55 | 0.545 | 0.55 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 2 años (12.2 kg) | 0.61 | 0.61 | 0.61 | 0.6 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 3 años (14.3 kg) | 0.72 | 0.72 | 0.715 | 0.7 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 4 años (16.3 kg) | 0.82 | 0.82 | 0.815 | 0.8 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 5 años (18.3 kg) | 0.92 | 0.92 | 0.915 | 0.9 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 6 años (20.5 kg) | 1.03 | 1.03 | 1.025 | 1.05 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 8 años (25.6 kg) | 1.28 | 1.28 | 1.28 | 1.3 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 10 años (32 kg) | 1.6 | 1.6 | 1.6 | 1.6 mL | ✅  |
| atropina | organofosforados | Ampolla 1 mg/mL | 12 años (40 kg) | 2 | 2 | 2 | 2 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 1 mes (4.2 kg) | 0.21 | 0.21 | 0.42 | 0.4 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 2 meses (5.1 kg) | 0.26 | 0.26 | 0.51 | 0.5 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 4 meses (6.4 kg) | 0.32 | 0.32 | 0.64 | 0.65 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 6 meses (7.6 kg) | 0.38 | 0.38 | 0.76 | 0.75 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 9 meses (8.6 kg) | 0.43 | 0.43 | 0.86 | 0.85 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 1 año (9.6 kg) | 0.48 | 0.48 | 0.96 | 0.95 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 18 meses (10.9 kg) | 0.55 | 0.55 | 1.09 | 1.1 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 2 años (12.2 kg) | 0.61 | 0.61 | 1.22 | 1.2 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 3 años (14.3 kg) | 0.72 | 0.72 | 1.43 | 1.45 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 4 años (16.3 kg) | 0.82 | 0.82 | 1.63 | 1.65 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 5 años (18.3 kg) | 0.92 | 0.92 | 1.83 | 1.85 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 6 años (20.5 kg) | 1.03 | 1.03 | 2.05 | 2.05 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 8 años (25.6 kg) | 1.28 | 1.28 | 2.56 | 2.55 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 10 años (32 kg) | 1.6 | 1.6 | 3.2 | 3.2 mL | ✅  |
| atropina | organofosforados | Ampolla 0.5 mg/mL | 12 años (40 kg) | 2 | 2 | 4 | 4 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.9 | 1.9 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 2.15 | 2.2 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 2.4 | 2.4 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.725 | 2.7 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 3.05 | 3.1 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 3.575 | 3.6 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 4.075 | 4.1 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 4.575 | 4.6 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 5.125 | 5.1 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 6.4 | 6.4 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 10 años (32 kg) | 320 | 320 | 8 | 8 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 12 años (40 kg) | 400 | 400 | 10 | 10 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 14 años (50 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅  |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 16 años (58 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | esquema-3-dias | Suspensión 200 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | esquema-3-dias | Tableta 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-3-dias | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| azitromicina | esquema-3-dias | Tableta 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | esquema-3-dias | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 2 años (12.2 kg) | 146.4 | 146.4 | 3.66 | 3.7 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 3 años (14.3 kg) | 171.6 | 171.6 | 4.29 | 4.3 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 4 años (16.3 kg) | 195.6 | 195.6 | 4.89 | 4.9 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 5 años (18.3 kg) | 219.6 | 219.6 | 5.49 | 5.5 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 6 años (20.5 kg) | 246 | 246 | 6.15 | 6.2 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 8 años (25.6 kg) | 307.2 | 307.2 | 7.68 | 7.7 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 10 años (32 kg) | 384 | 384 | 9.6 | 9.6 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 12 años (40 kg) | 480 | 480 | 12 | 12 mL | ✅  |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 14 años (50 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 16 años (58 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Suspensión 200 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 2 años (12.2 kg) | 146.4 | 146.4 | 0.293 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 3 años (14.3 kg) | 171.6 | 171.6 | 0.343 | 0.34 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 4 años (16.3 kg) | 195.6 | 195.6 | 0.391 | 0.39 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 5 años (18.3 kg) | 219.6 | 219.6 | 0.439 | 0.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 6 años (20.5 kg) | 246 | 246 | 0.492 | 0.49 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 8 años (25.6 kg) | 307.2 | 307.2 | 0.614 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 10 años (32 kg) | 384 | 384 | 0.768 | 0.77 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 12 años (40 kg) | 480 | 480 | 0.96 | 1 tableta | ✅  |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | faringitis-5-dias | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.9 | 1.9 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 2.15 | 2.2 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 2.4 | 2.4 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.725 | 2.7 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 3.05 | 3.1 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 3.575 | 3.6 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 4.075 | 4.1 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 4.575 | 4.6 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 5.125 | 5.1 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 6.4 | 6.4 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 10 años (32 kg) | 320 | 320 | 8 | 8 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 12 años (40 kg) | 400 | 400 | 10 | 10 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 14 años (50 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 16 años (58 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dia-1 | Suspensión 200 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 12.5 | 12.5 mL | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dia-1 | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 6 meses (7.6 kg) | 38 | 38 | 0.95 | 0.95 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 9 meses (8.6 kg) | 43 | 43 | 1.075 | 1.1 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 1 año (9.6 kg) | 48 | 48 | 1.2 | 1.2 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 18 meses (10.9 kg) | 54.5 | 54.5 | 1.363 | 1.4 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 2 años (12.2 kg) | 61 | 61 | 1.525 | 1.5 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 3 años (14.3 kg) | 71.5 | 71.5 | 1.788 | 1.8 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 4 años (16.3 kg) | 81.5 | 81.5 | 2.038 | 2 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 5 años (18.3 kg) | 91.5 | 91.5 | 2.288 | 2.3 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 6 años (20.5 kg) | 102.5 | 102.5 | 2.563 | 2.6 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 8 años (25.6 kg) | 128 | 128 | 3.2 | 3.2 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 10 años (32 kg) | 160 | 160 | 4 | 4 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 12 años (40 kg) | 200 | 200 | 5 | 5 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 14 años (50 kg) | 250 | 250 | 6.25 | 6.2 mL | ✅  |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 16 años (58 kg) | 250 | 250 | 6.25 | 6.2 mL | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dias-2-5 | Suspensión 200 mg/5 mL | 17 años, obeso (95 kg) | 250 | 250 | 6.25 | 6.2 mL | ✅ tope aplicado |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 6 meses (7.6 kg) | 38 | 38 | 0.076 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 9 meses (8.6 kg) | 43 | 43 | 0.086 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 1 año (9.6 kg) | 48 | 48 | 0.096 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.109 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 2 años (12.2 kg) | 61 | 61 | 0.122 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 3 años (14.3 kg) | 71.5 | 71.5 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 4 años (16.3 kg) | 81.5 | 81.5 | 0.163 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 5 años (18.3 kg) | 91.5 | 91.5 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 6 años (20.5 kg) | 102.5 | 102.5 | 0.205 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 8 años (25.6 kg) | 128 | 128 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 10 años (32 kg) | 160 | 160 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 12 años (40 kg) | 200 | 200 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 14 años (50 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 16 años (58 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| azitromicina | esquema-5-dias-dias-2-5 | Tableta 500 mg | 17 años, obeso (95 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cafeina-citrato | carga-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 3 días, bajo peso (2 kg) (2 kg) | 40 | 40 | 2 | 2 mL | ✅  |
| cafeina-citrato | carga-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 5 días (3.2 kg) (3.2 kg) | 64 | 64 | 3.2 | 3.2 mL | ✅  |
| cafeina-citrato | carga-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 15 días (3.6 kg) (3.6 kg) | 72 | 72 | 3.6 | 3.6 mL | ✅  |
| cafeina-citrato | carga-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 3 días, bajo peso (2 kg) (2 kg) | 40 | 40 | 2 | 2 mL | ✅  |
| cafeina-citrato | carga-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 5 días (3.2 kg) (3.2 kg) | 64 | 64 | 3.2 | 3.2 mL | ✅  |
| cafeina-citrato | carga-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 15 días (3.6 kg) (3.6 kg) | 72 | 72 | 3.6 | 3.6 mL | ✅  |
| cafeina-citrato | mantenimiento-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 3 días, bajo peso (2 kg) (2 kg) | 10 | 10 | 0.5 | 0.5 mL | ✅  |
| cafeina-citrato | mantenimiento-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 5 días (3.2 kg) (3.2 kg) | 16 | 16 | 0.8 | 0.8 mL | ✅  |
| cafeina-citrato | mantenimiento-iv | Solución inyectable 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 15 días (3.6 kg) (3.6 kg) | 18 | 18 | 0.9 | 0.9 mL | ✅  |
| cafeina-citrato | mantenimiento-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 3 días, bajo peso (2 kg) (2 kg) | 10 | 10 | 0.5 | 0.5 mL | ✅  |
| cafeina-citrato | mantenimiento-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 5 días (3.2 kg) (3.2 kg) | 16 | 16 | 0.8 | 0.8 mL | ✅  |
| cafeina-citrato | mantenimiento-vo | Solución oral 20 mg/mL de citrato de cafeína (10 mg de cafeína base/mL) | 15 días (3.6 kg) (3.6 kg) | 18 | 18 | 0.9 | 0.9 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 1 mes (4.2 kg) | 14 | 14 | 0.7 | 0.7 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 2 meses (5.1 kg) | 17 | 17 | 0.85 | 0.85 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 4 meses (6.4 kg) | 21.33 | 21.33 | 1.067 | 1.1 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 6 meses (7.6 kg) | 25.33 | 25.33 | 1.267 | 1.3 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 9 meses (8.6 kg) | 28.67 | 28.67 | 1.433 | 1.4 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 1 año (9.6 kg) | 32 | 32 | 1.6 | 1.6 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 18 meses (10.9 kg) | 36.33 | 36.33 | 1.817 | 1.8 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 40.67 | 40.67 | 2.033 | 2 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 47.67 | 47.67 | 2.383 | 2.4 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 54.33 | 54.33 | 2.717 | 2.7 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 61 | 61 | 3.05 | 3.1 mL | ✅  |
| carbamazepina | menores-6-anos | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 68.33 | 68.33 | 3.417 | 3.4 mL | ✅  |
| carbamazepina | menores-6-anos | Tableta 100 mg | 1 mes (4.2 kg) | 14 | 14 | 0.14 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 2 meses (5.1 kg) | 17 | 17 | 0.17 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 4 meses (6.4 kg) | 21.33 | 21.33 | 0.213 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 6 meses (7.6 kg) | 25.33 | 25.33 | 0.253 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 9 meses (8.6 kg) | 28.67 | 28.67 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 1 año (9.6 kg) | 32 | 32 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 18 meses (10.9 kg) | 36.33 | 36.33 | 0.363 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 2 años (12.2 kg) | 40.67 | 40.67 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 3 años (14.3 kg) | 47.67 | 47.67 | 0.477 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 4 años (16.3 kg) | 54.33 | 54.33 | 0.543 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 5 años (18.3 kg) | 61 | 61 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 100 mg | 6 años (20.5 kg) | 68.33 | 68.33 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 1 mes (4.2 kg) | 14 | 14 | 0.07 | 0.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 2 meses (5.1 kg) | 17 | 17 | 0.085 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 4 meses (6.4 kg) | 21.33 | 21.33 | 0.107 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 6 meses (7.6 kg) | 25.33 | 25.33 | 0.127 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 9 meses (8.6 kg) | 28.67 | 28.67 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 1 año (9.6 kg) | 32 | 32 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 18 meses (10.9 kg) | 36.33 | 36.33 | 0.182 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 2 años (12.2 kg) | 40.67 | 40.67 | 0.203 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 3 años (14.3 kg) | 47.67 | 47.67 | 0.238 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 4 años (16.3 kg) | 54.33 | 54.33 | 0.272 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 5 años (18.3 kg) | 61 | 61 | 0.305 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | menores-6-anos | Tableta 200 mg | 6 años (20.5 kg) | 68.33 | 68.33 | 0.342 | 0.34 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | inicio-6-12-anos | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| carbamazepina | inicio-6-12-anos | Suspensión 100 mg/5 mL | 10 años (32 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| carbamazepina | inicio-6-12-anos | Suspensión 100 mg/5 mL | 12 años (40 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| carbamazepina | inicio-6-12-anos | Tableta 100 mg | 8 años (25.6 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| carbamazepina | inicio-6-12-anos | Tableta 100 mg | 10 años (32 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| carbamazepina | inicio-6-12-anos | Tableta 100 mg | 12 años (40 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| carbamazepina | inicio-6-12-anos | Tableta 200 mg | 8 años (25.6 kg) | 100 | 100 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | inicio-6-12-anos | Tableta 200 mg | 10 años (32 kg) | 100 | 100 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| carbamazepina | inicio-6-12-anos | Tableta 200 mg | 12 años (40 kg) | 100 | 100 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 1.26 | 1.3 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 1.53 | 1.5 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 114 | 114 | 2.28 | 2.3 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 129 | 129 | 2.58 | 2.6 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 144 | 144 | 2.88 | 2.9 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 3.27 | 3.3 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 214.5 | 214.5 | 4.29 | 4.3 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 244.5 | 244.5 | 4.89 | 4.9 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 274.5 | 274.5 | 5.49 | 5.5 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 307.5 | 307.5 | 6.15 | 6.2 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 384 | 384 | 7.68 | 7.7 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 10 años (32 kg) | 480 | 480 | 9.6 | 9.6 mL | ✅  |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 14 años (50 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 16 años (58 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| cefadroxilo | usual | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| cefadroxilo | usual | Cápsula 500 mg | 1 mes (4.2 kg) | 63 | 63 | 0.126 | 0.13 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.153 | 0.15 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 4 meses (6.4 kg) | 96 | 96 | 0.192 | 0.19 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 6 meses (7.6 kg) | 114 | 114 | 0.228 | 0.23 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 9 meses (8.6 kg) | 129 | 129 | 0.258 | 0.26 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 1 año (9.6 kg) | 144 | 144 | 0.288 | 0.29 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 18 meses (10.9 kg) | 163.5 | 163.5 | 0.327 | 0.33 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 2 años (12.2 kg) | 183 | 183 | 0.366 | 0.37 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 3 años (14.3 kg) | 214.5 | 214.5 | 0.429 | 0.43 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 4 años (16.3 kg) | 244.5 | 244.5 | 0.489 | 0.49 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 5 años (18.3 kg) | 274.5 | 274.5 | 0.549 | 0.55 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 6 años (20.5 kg) | 307.5 | 307.5 | 0.615 | 0.61 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 8 años (25.6 kg) | 384 | 384 | 0.768 | 0.77 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefadroxilo | usual | Cápsula 500 mg | 10 años (32 kg) | 480 | 480 | 0.96 | 1 capsula | ✅  |
| cefadroxilo | usual | Cápsula 500 mg | 12 años (40 kg) | 500 | 500 | 1 | 1 capsula | ✅ tope aplicado |
| cefadroxilo | usual | Cápsula 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 capsula | ✅ tope aplicado |
| cefadroxilo | usual | Cápsula 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 capsula | ✅ tope aplicado |
| cefadroxilo | usual | Cápsula 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 capsula | ✅ tope aplicado |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 120 | 120 | 2.4 | 2.4 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 136.25 | 136.25 | 2.725 | 2.7 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 152.5 | 152.5 | 3.05 | 3.1 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 178.75 | 178.75 | 3.575 | 3.6 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 203.75 | 203.75 | 4.075 | 4.1 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 228.75 | 228.75 | 4.575 | 4.6 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 256.25 | 256.25 | 5.125 | 5.1 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 10 años (32 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 14 años (50 kg) | 625 | 625 | 12.5 | 12.5 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 16 años (58 kg) | 725 | 725 | 14.5 | 14.5 mL | ✅  |
| cefalexina | infecciones-habituales | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 1 año (9.6 kg) | 120 | 120 | 0.24 | 0.24 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 18 meses (10.9 kg) | 136.25 | 136.25 | 0.273 | 0.27 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 2 años (12.2 kg) | 152.5 | 152.5 | 0.305 | 0.3 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 3 años (14.3 kg) | 178.75 | 178.75 | 0.357 | 0.36 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 4 años (16.3 kg) | 203.75 | 203.75 | 0.407 | 0.41 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 5 años (18.3 kg) | 228.75 | 228.75 | 0.458 | 0.46 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 6 años (20.5 kg) | 256.25 | 256.25 | 0.512 | 0.51 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 8 años (25.6 kg) | 320 | 320 | 0.64 | 0.64 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 10 años (32 kg) | 400 | 400 | 0.8 | 0.8 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 12 años (40 kg) | 500 | 500 | 1 | 1 capsula | ✅  |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 14 años (50 kg) | 625 | 625 | 1.25 | 1.25 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 16 años (58 kg) | 725 | 725 | 1.45 | 1.45 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-habituales | Cápsula 500 mg | 17 años, obeso (95 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 240 | 240 | 4.8 | 4.8 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 272.5 | 272.5 | 5.45 | 5.5 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 305 | 305 | 6.1 | 6.1 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 357.5 | 357.5 | 7.15 | 7.2 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 407.5 | 407.5 | 8.15 | 8.2 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 457.5 | 457.5 | 9.15 | 9.2 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 512.5 | 512.5 | 10.25 | 10.3 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 640 | 640 | 12.8 | 12.8 mL | ✅  |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 10 años (32 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 12 años (40 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 14 años (50 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 16 años (58 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-graves | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| cefalexina | infecciones-graves | Cápsula 500 mg | 1 año (9.6 kg) | 240 | 240 | 0.48 | 0.48 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 18 meses (10.9 kg) | 272.5 | 272.5 | 0.545 | 0.55 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 2 años (12.2 kg) | 305 | 305 | 0.61 | 0.61 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 3 años (14.3 kg) | 357.5 | 357.5 | 0.715 | 0.71 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 4 años (16.3 kg) | 407.5 | 407.5 | 0.815 | 0.81 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 5 años (18.3 kg) | 457.5 | 457.5 | 0.915 | 0.92 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 6 años (20.5 kg) | 512.5 | 512.5 | 1.025 | 1 capsula | ✅  |
| cefalexina | infecciones-graves | Cápsula 500 mg | 8 años (25.6 kg) | 640 | 640 | 1.28 | 1.28 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 10 años (32 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 12 años (40 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 14 años (50 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 16 años (58 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefalexina | infecciones-graves | Cápsula 500 mg | 17 años, obeso (95 kg) | 750 | 750 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 1 mes (4.2 kg) | 35 | 35 | 0.106 | 0.11 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 2 meses (5.1 kg) | 42.5 | 42.5 | 0.129 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 4 meses (6.4 kg) | 53.33 | 53.33 | 0.162 | 0.16 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 6 meses (7.6 kg) | 63.33 | 63.33 | 0.192 | 0.2 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 9 meses (8.6 kg) | 71.67 | 71.67 | 0.217 | 0.22 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 1 año (9.6 kg) | 80 | 80 | 0.242 | 0.25 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 18 meses (10.9 kg) | 90.83 | 90.83 | 0.275 | 0.28 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 2 años (12.2 kg) | 101.67 | 101.67 | 0.308 | 0.3 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 3 años (14.3 kg) | 119.17 | 119.17 | 0.361 | 0.35 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 4 años (16.3 kg) | 135.83 | 135.83 | 0.412 | 0.4 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 5 años (18.3 kg) | 152.5 | 152.5 | 0.462 | 0.45 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 6 años (20.5 kg) | 170.83 | 170.83 | 0.518 | 0.5 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 8 años (25.6 kg) | 213.33 | 213.33 | 0.646 | 0.65 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 10 años (32 kg) | 266.67 | 266.67 | 0.808 | 0.8 mL | ✅  |
| cefazolina | ninos | Frasco 1 g reconstituido con 2.5 mL (330 mg/mL) | 12 años (40 kg) | 333.33 | 333.33 | 1.01 | 1 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 1 mes (4.2 kg) | 52.5 | 52.5 | 1.05 | 1.1 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 2 meses (5.1 kg) | 63.75 | 63.75 | 1.275 | 1.3 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 meses (6.4 kg) | 80 | 80 | 1.6 | 1.6 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 meses (7.6 kg) | 95 | 95 | 1.9 | 1.9 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 9 meses (8.6 kg) | 107.5 | 107.5 | 2.15 | 2.2 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 1 año (9.6 kg) | 120 | 120 | 2.4 | 2.4 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 18 meses (10.9 kg) | 136.25 | 136.25 | 2.725 | 2.7 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 2 años (12.2 kg) | 152.5 | 152.5 | 3.05 | 3.1 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 3 años (14.3 kg) | 178.75 | 178.75 | 3.575 | 3.6 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 años (16.3 kg) | 203.75 | 203.75 | 4.075 | 4.1 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 5 años (18.3 kg) | 228.75 | 228.75 | 4.575 | 4.6 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 años (20.5 kg) | 256.25 | 256.25 | 5.125 | 5.1 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 8 años (25.6 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 10 años (32 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| cefotaxima | ninos | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| cefotaxima | neonato-semana-1 | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 3 días, bajo peso (2 kg) (2 kg) | 100 | 100 | 2 | 2 mL | ✅  |
| cefotaxima | neonato-semana-1 | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 5 días (3.2 kg) (3.2 kg) | 160 | 160 | 3.2 | 3.2 mL | ✅  |
| cefotaxima | neonato-semanas-1-4 | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 15 días (3.6 kg) (3.6 kg) | 180 | 180 | 3.6 | 3.6 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 1 mes (4.2 kg) | 126 | 126 | 1.26 | 1.3 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 2 meses (5.1 kg) | 153 | 153 | 1.53 | 1.5 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 4 meses (6.4 kg) | 192 | 192 | 1.92 | 1.9 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 6 meses (7.6 kg) | 228 | 228 | 2.28 | 2.3 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 9 meses (8.6 kg) | 258 | 258 | 2.58 | 2.6 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 1 año (9.6 kg) | 288 | 288 | 2.88 | 2.9 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 18 meses (10.9 kg) | 327 | 327 | 3.27 | 3.3 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 2 años (12.2 kg) | 366 | 366 | 3.66 | 3.7 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 3 años (14.3 kg) | 429 | 429 | 4.29 | 4.3 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 4 años (16.3 kg) | 489 | 489 | 4.89 | 4.9 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 5 años (18.3 kg) | 549 | 549 | 5.49 | 5.5 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 6 años (20.5 kg) | 615 | 615 | 6.15 | 6.2 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 8 años (25.6 kg) | 768 | 768 | 7.68 | 7.7 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 10 años (32 kg) | 960 | 960 | 9.6 | 9.6 mL | ✅  |
| ceftazidima | ninos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 12 años (40 kg) | 1200 | 1200 | 12 | 12 mL | ✅  |
| ceftazidima | neonatos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 3 días, bajo peso (2 kg) (2 kg) | 60 | 60 | 0.6 | 0.6 mL | ✅  |
| ceftazidima | neonatos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 5 días (3.2 kg) (3.2 kg) | 96 | 96 | 0.96 | 1 mL | ✅  |
| ceftazidima | neonatos | Frasco 1 g reconstituido con 10 mL (100 mg/mL), IV | 15 días (3.6 kg) (3.6 kg) | 108 | 108 | 1.08 | 1.1 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 1 mes (4.2 kg) | 315 | 315 | 3.15 | 3.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 2 meses (5.1 kg) | 382.5 | 382.5 | 3.825 | 3.8 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 4 meses (6.4 kg) | 480 | 480 | 4.8 | 4.8 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 6 meses (7.6 kg) | 570 | 570 | 5.7 | 5.7 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 9 meses (8.6 kg) | 645 | 645 | 6.45 | 6.5 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 1 año (9.6 kg) | 720 | 720 | 7.2 | 7.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 18 meses (10.9 kg) | 817.5 | 817.5 | 8.175 | 8.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 2 años (12.2 kg) | 915 | 915 | 9.15 | 9.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 3 años (14.3 kg) | 1072.5 | 1072.5 | 10.725 | 10.7 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 4 años (16.3 kg) | 1222.5 | 1222.5 | 12.225 | 12.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 5 años (18.3 kg) | 1372.5 | 1372.5 | 13.725 | 13.7 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 6 años (20.5 kg) | 1537.5 | 1537.5 | 15.375 | 15.4 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 8 años (25.6 kg) | 1920 | 1920 | 19.2 | 19.2 mL | ✅  |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 10 años (32 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 12 años (40 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 14 años (50 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 16 años (58 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | usual-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 17 años, obeso (95 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 1 mes (4.2 kg) | 210 | 210 | 2.1 | 2.1 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 2 meses (5.1 kg) | 255 | 255 | 2.55 | 2.6 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 4 meses (6.4 kg) | 320 | 320 | 3.2 | 3.2 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 6 meses (7.6 kg) | 380 | 380 | 3.8 | 3.8 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 9 meses (8.6 kg) | 430 | 430 | 4.3 | 4.3 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 1 año (9.6 kg) | 480 | 480 | 4.8 | 4.8 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 18 meses (10.9 kg) | 545 | 545 | 5.45 | 5.5 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 2 años (12.2 kg) | 610 | 610 | 6.1 | 6.1 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 3 años (14.3 kg) | 715 | 715 | 7.15 | 7.2 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 4 años (16.3 kg) | 815 | 815 | 8.15 | 8.2 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 5 años (18.3 kg) | 915 | 915 | 9.15 | 9.2 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 6 años (20.5 kg) | 1025 | 1025 | 10.25 | 10.3 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 8 años (25.6 kg) | 1280 | 1280 | 12.8 | 12.8 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 10 años (32 kg) | 1600 | 1600 | 16 | 16 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 12 años (40 kg) | 2000 | 2000 | 20 | 20 mL | ✅  |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 14 años (50 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 16 años (58 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| ceftriaxona | meningitis-iv | Vial 1 g reconstituido con 9.6 mL de agua estéril = 1 g/10 mL (100 mg/mL) | 17 años, obeso (95 kg) | 2000 | 2000 | 20 | 20 mL | ✅ tope aplicado |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 250 | 250 | 5 | 5 mL | ✅ tope aplicado |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 10 años (32 kg) | 250 | 250 | 5 | 5 mL | ✅ tope aplicado |
| cefuroxima | faringoamigdalitis | Suspensión 250 mg/5 mL | 12 años (40 kg) | 250 | 250 | 5 | 5 mL | ✅ tope aplicado |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 114 | 114 | 2.28 | 2.3 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 129 | 129 | 2.58 | 2.6 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 144 | 144 | 2.88 | 2.9 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 3.27 | 3.3 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 214.5 | 214.5 | 4.29 | 4.3 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 244.5 | 244.5 | 4.89 | 4.9 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 274.5 | 274.5 | 5.49 | 5.5 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 307.5 | 307.5 | 6.15 | 6.2 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 384 | 384 | 7.68 | 7.7 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 10 años (32 kg) | 480 | 480 | 9.6 | 9.6 mL | ✅  |
| cefuroxima | oma-sinusitis-impetigo | Suspensión 250 mg/5 mL | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| cetirizina | alergia-6-23-meses | Solución oral 1 mg/mL (5 mg/5 mL) | 6 meses (7.6 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-6-23-meses | Solución oral 1 mg/mL (5 mg/5 mL) | 9 meses (8.6 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-6-23-meses | Solución oral 1 mg/mL (5 mg/5 mL) | 1 año (9.6 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-6-23-meses | Solución oral 1 mg/mL (5 mg/5 mL) | 18 meses (10.9 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-6-23-meses | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 6 meses (7.6 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-6-23-meses | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 9 meses (8.6 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-6-23-meses | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 1 año (9.6 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-6-23-meses | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 18 meses (10.9 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-2-5-anos | Solución oral 1 mg/mL (5 mg/5 mL) | 2 años (12.2 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-2-5-anos | Solución oral 1 mg/mL (5 mg/5 mL) | 3 años (14.3 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-2-5-anos | Solución oral 1 mg/mL (5 mg/5 mL) | 4 años (16.3 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-2-5-anos | Solución oral 1 mg/mL (5 mg/5 mL) | 5 años (18.3 kg) | 2.5 | 2.5 | 2.5 | 2.5 mL | ✅  |
| cetirizina | alergia-2-5-anos | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 2 años (12.2 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-2-5-anos | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 3 años (14.3 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-2-5-anos | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 4 años (16.3 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-2-5-anos | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 5 años (18.3 kg) | 2.5 | 2.5 | 0.25 | 0.25 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 6 años (20.5 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 8 años (25.6 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 10 años (32 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 12 años (40 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 14 años (50 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 16 años (58 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Solución oral 1 mg/mL (5 mg/5 mL) | 17 años, obeso (95 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 6 años (20.5 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 8 años (25.6 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 10 años (32 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 12 años (40 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 14 años (50 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 16 años (58 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Gotas 10 mg/mL (medir con jeringa de 1 mL) | 17 años, obeso (95 kg) | 10 | 10 | 1 | 1 mL | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 6 años (20.5 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 8 años (25.6 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 10 años (32 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 12 años (40 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 14 años (50 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 16 años (58 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| cetirizina | alergia-6-anos-o-mas | Tableta 10 mg | 17 años, obeso (95 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 14 años (50 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 16 años (58 kg) | 580 | 580 | 11.6 | 11.6 mL | ✅  |
| ciprofloxacino | itu-complicada-vo | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 16 años (58 kg) | 580 | 580 | 1.16 | 1.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-vo | Tableta 500 mg | 17 años, obeso (95 kg) | 750 | 750 | 1.5 | 1.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 1 año (9.6 kg) | 57.6 | 57.6 | 28.8 | 29 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 18 meses (10.9 kg) | 65.4 | 65.4 | 32.7 | 33 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 2 años (12.2 kg) | 73.2 | 73.2 | 36.6 | 37 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 3 años (14.3 kg) | 85.8 | 85.8 | 42.9 | 43 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 4 años (16.3 kg) | 97.8 | 97.8 | 48.9 | 49 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 5 años (18.3 kg) | 109.8 | 109.8 | 54.9 | 55 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 6 años (20.5 kg) | 123 | 123 | 61.5 | 62 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 8 años (25.6 kg) | 153.6 | 153.6 | 76.8 | 77 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 10 años (32 kg) | 192 | 192 | 96 | 96 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 12 años (40 kg) | 240 | 240 | 120 | 120 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 14 años (50 kg) | 300 | 300 | 150 | 150 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 16 años (58 kg) | 348 | 348 | 174 | 174 mL | ✅  |
| ciprofloxacino | itu-complicada-iv | Solución para infusión 2 mg/mL (no se diluye) | 17 años, obeso (95 kg) | 400 | 400 | 200 | 200 mL | ✅ tope aplicado |
| claritromicina | usual | Suspensión 125 mg/5 mL | 6 meses (7.6 kg) | 57 | 57 | 2.28 | 2.3 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 9 meses (8.6 kg) | 64.5 | 64.5 | 2.58 | 2.6 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 1 año (9.6 kg) | 72 | 72 | 2.88 | 2.9 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 18 meses (10.9 kg) | 81.75 | 81.75 | 3.27 | 3.3 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 2 años (12.2 kg) | 91.5 | 91.5 | 3.66 | 3.7 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 107.25 | 107.25 | 4.29 | 4.3 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 122.25 | 122.25 | 4.89 | 4.9 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 137.25 | 137.25 | 5.49 | 5.5 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 153.75 | 153.75 | 6.15 | 6.2 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 192 | 192 | 7.68 | 7.7 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 10 años (32 kg) | 240 | 240 | 9.6 | 9.6 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 12 años (40 kg) | 300 | 300 | 12 | 12 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 14 años (50 kg) | 375 | 375 | 15 | 15 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 16 años (58 kg) | 435 | 435 | 17.4 | 17.4 mL | ✅  |
| claritromicina | usual | Suspensión 125 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 20 | 20 mL | ✅ tope aplicado |
| claritromicina | usual | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 57 | 57 | 1.14 | 1.1 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 64.5 | 64.5 | 1.29 | 1.3 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 72 | 72 | 1.44 | 1.4 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 81.75 | 81.75 | 1.635 | 1.6 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 91.5 | 91.5 | 1.83 | 1.8 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 107.25 | 107.25 | 2.145 | 2.1 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 122.25 | 122.25 | 2.445 | 2.4 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 137.25 | 137.25 | 2.745 | 2.7 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 153.75 | 153.75 | 3.075 | 3.1 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 192 | 192 | 3.84 | 3.8 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 10 años (32 kg) | 240 | 240 | 4.8 | 4.8 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 12 años (40 kg) | 300 | 300 | 6 | 6 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 14 años (50 kg) | 375 | 375 | 7.5 | 7.5 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 16 años (58 kg) | 435 | 435 | 8.7 | 8.7 mL | ✅  |
| claritromicina | usual | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| claritromicina | usual | Tableta 500 mg | 6 meses (7.6 kg) | 57 | 57 | 0.114 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 9 meses (8.6 kg) | 64.5 | 64.5 | 0.129 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 1 año (9.6 kg) | 72 | 72 | 0.144 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 18 meses (10.9 kg) | 81.75 | 81.75 | 0.164 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 2 años (12.2 kg) | 91.5 | 91.5 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 3 años (14.3 kg) | 107.25 | 107.25 | 0.214 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 4 años (16.3 kg) | 122.25 | 122.25 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 5 años (18.3 kg) | 137.25 | 137.25 | 0.275 | 0.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 6 años (20.5 kg) | 153.75 | 153.75 | 0.307 | 0.31 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 8 años (25.6 kg) | 192 | 192 | 0.384 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 10 años (32 kg) | 240 | 240 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 12 años (40 kg) | 300 | 300 | 0.6 | 0.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 14 años (50 kg) | 375 | 375 | 0.75 | 0.75 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 16 años (58 kg) | 435 | 435 | 0.87 | 0.87 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| claritromicina | usual | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅ tope aplicado |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 1 mes (4.2 kg) | 11.2 | 11.2 | 0.747 | 0.75 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 2 meses (5.1 kg) | 13.6 | 13.6 | 0.907 | 0.9 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 4 meses (6.4 kg) | 17.07 | 17.07 | 1.138 | 1.1 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 6 meses (7.6 kg) | 20.27 | 20.27 | 1.351 | 1.4 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 9 meses (8.6 kg) | 22.93 | 22.93 | 1.529 | 1.5 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 1 año (9.6 kg) | 25.6 | 25.6 | 1.707 | 1.7 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 18 meses (10.9 kg) | 29.07 | 29.07 | 1.938 | 1.9 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 2 años (12.2 kg) | 32.53 | 32.53 | 2.169 | 2.2 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 3 años (14.3 kg) | 38.13 | 38.13 | 2.542 | 2.5 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 4 años (16.3 kg) | 43.47 | 43.47 | 2.898 | 2.9 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 5 años (18.3 kg) | 48.8 | 48.8 | 3.253 | 3.3 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 6 años (20.5 kg) | 54.67 | 54.67 | 3.644 | 3.6 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 8 años (25.6 kg) | 68.27 | 68.27 | 4.551 | 4.6 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 10 años (32 kg) | 85.33 | 85.33 | 5.689 | 5.7 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 12 años (40 kg) | 106.67 | 106.67 | 7.111 | 7.1 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 14 años (50 kg) | 133.33 | 133.33 | 8.889 | 8.9 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 16 años (58 kg) | 154.67 | 154.67 | 10.311 | 10.3 mL | ✅  |
| clindamicina | serias | Solución oral 75 mg/5 mL (palmitato) | 17 años, obeso (95 kg) | 253.33 | 253.33 | 16.889 | 16.9 mL | ✅  |
| clindamicina | serias | Cápsula 300 mg | 1 mes (4.2 kg) | 11.2 | 11.2 | 0.037 | 0.04 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 2 meses (5.1 kg) | 13.6 | 13.6 | 0.045 | 0.05 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 4 meses (6.4 kg) | 17.07 | 17.07 | 0.057 | 0.06 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 6 meses (7.6 kg) | 20.27 | 20.27 | 0.068 | 0.07 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 9 meses (8.6 kg) | 22.93 | 22.93 | 0.076 | 0.08 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 1 año (9.6 kg) | 25.6 | 25.6 | 0.085 | 0.09 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 18 meses (10.9 kg) | 29.07 | 29.07 | 0.097 | 0.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 2 años (12.2 kg) | 32.53 | 32.53 | 0.108 | 0.11 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 3 años (14.3 kg) | 38.13 | 38.13 | 0.127 | 0.13 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 4 años (16.3 kg) | 43.47 | 43.47 | 0.145 | 0.14 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 5 años (18.3 kg) | 48.8 | 48.8 | 0.163 | 0.16 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 6 años (20.5 kg) | 54.67 | 54.67 | 0.182 | 0.18 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 8 años (25.6 kg) | 68.27 | 68.27 | 0.228 | 0.23 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 10 años (32 kg) | 85.33 | 85.33 | 0.284 | 0.28 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 12 años (40 kg) | 106.67 | 106.67 | 0.356 | 0.36 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 14 años (50 kg) | 133.33 | 133.33 | 0.444 | 0.44 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 16 años (58 kg) | 154.67 | 154.67 | 0.516 | 0.52 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | serias | Cápsula 300 mg | 17 años, obeso (95 kg) | 253.33 | 253.33 | 0.844 | 0.84 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 1 mes (4.2 kg) | 23.8 | 23.8 | 1.587 | 1.6 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 2 meses (5.1 kg) | 28.9 | 28.9 | 1.927 | 1.9 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 4 meses (6.4 kg) | 36.27 | 36.27 | 2.418 | 2.4 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 6 meses (7.6 kg) | 43.07 | 43.07 | 2.871 | 2.9 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 9 meses (8.6 kg) | 48.73 | 48.73 | 3.249 | 3.2 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 1 año (9.6 kg) | 54.4 | 54.4 | 3.627 | 3.6 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 18 meses (10.9 kg) | 61.77 | 61.77 | 4.118 | 4.1 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 2 años (12.2 kg) | 69.13 | 69.13 | 4.609 | 4.6 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 3 años (14.3 kg) | 81.03 | 81.03 | 5.402 | 5.4 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 4 años (16.3 kg) | 92.37 | 92.37 | 6.158 | 6.2 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 5 años (18.3 kg) | 103.7 | 103.7 | 6.913 | 6.9 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 6 años (20.5 kg) | 116.17 | 116.17 | 7.744 | 7.7 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 8 años (25.6 kg) | 145.07 | 145.07 | 9.671 | 9.7 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 10 años (32 kg) | 181.33 | 181.33 | 12.089 | 12.1 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 12 años (40 kg) | 226.67 | 226.67 | 15.111 | 15.1 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 14 años (50 kg) | 283.33 | 283.33 | 18.889 | 18.9 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 16 años (58 kg) | 328.67 | 328.67 | 21.911 | 21.9 mL | ✅  |
| clindamicina | mas-severas | Solución oral 75 mg/5 mL (palmitato) | 17 años, obeso (95 kg) | 450 | 450 | 30 | 30 mL | ✅ tope aplicado |
| clindamicina | mas-severas | Cápsula 300 mg | 1 mes (4.2 kg) | 23.8 | 23.8 | 0.079 | 0.08 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 2 meses (5.1 kg) | 28.9 | 28.9 | 0.096 | 0.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 4 meses (6.4 kg) | 36.27 | 36.27 | 0.121 | 0.12 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 6 meses (7.6 kg) | 43.07 | 43.07 | 0.144 | 0.14 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 9 meses (8.6 kg) | 48.73 | 48.73 | 0.162 | 0.16 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 1 año (9.6 kg) | 54.4 | 54.4 | 0.181 | 0.18 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 18 meses (10.9 kg) | 61.77 | 61.77 | 0.206 | 0.21 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 2 años (12.2 kg) | 69.13 | 69.13 | 0.23 | 0.23 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 3 años (14.3 kg) | 81.03 | 81.03 | 0.27 | 0.27 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 4 años (16.3 kg) | 92.37 | 92.37 | 0.308 | 0.31 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 5 años (18.3 kg) | 103.7 | 103.7 | 0.346 | 0.35 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 6 años (20.5 kg) | 116.17 | 116.17 | 0.387 | 0.39 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 8 años (25.6 kg) | 145.07 | 145.07 | 0.484 | 0.48 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 10 años (32 kg) | 181.33 | 181.33 | 0.604 | 0.6 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 12 años (40 kg) | 226.67 | 226.67 | 0.756 | 0.76 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 14 años (50 kg) | 283.33 | 283.33 | 0.944 | 0.94 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 16 años (58 kg) | 328.67 | 328.67 | 1.096 | 1.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| clindamicina | mas-severas | Cápsula 300 mg | 17 años, obeso (95 kg) | 450 | 450 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 1 mes (4.2 kg) | 52.5 | 52.5 | 1.05 | 1.1 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 2 meses (5.1 kg) | 63.75 | 63.75 | 1.275 | 1.3 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 4 meses (6.4 kg) | 80 | 80 | 1.6 | 1.6 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 6 meses (7.6 kg) | 95 | 95 | 1.9 | 1.9 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 9 meses (8.6 kg) | 107.5 | 107.5 | 2.15 | 2.2 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 1 año (9.6 kg) | 120 | 120 | 2.4 | 2.4 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 18 meses (10.9 kg) | 136.25 | 136.25 | 2.725 | 2.7 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 2 años (12.2 kg) | 152.5 | 152.5 | 3.05 | 3.1 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 3 años (14.3 kg) | 178.75 | 178.75 | 3.575 | 3.6 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 4 años (16.3 kg) | 203.75 | 203.75 | 4.075 | 4.1 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 5 años (18.3 kg) | 228.75 | 228.75 | 4.575 | 4.6 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 6 años (20.5 kg) | 256.25 | 256.25 | 5.125 | 5.1 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 8 años (25.6 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 10 años (32 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 12 años (40 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 14 años (50 kg) | 625 | 625 | 12.5 | 12.5 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 16 años (58 kg) | 725 | 725 | 14.5 | 14.5 mL | ✅  |
| cloranfenicol | oral | Suspensión 250 mg/5 mL (palmitato) | 17 años, obeso (95 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| cloranfenicol | oral | Tableta 250 mg | 1 mes (4.2 kg) | 52.5 | 52.5 | 0.21 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 2 meses (5.1 kg) | 63.75 | 63.75 | 0.255 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 4 meses (6.4 kg) | 80 | 80 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 6 meses (7.6 kg) | 95 | 95 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 9 meses (8.6 kg) | 107.5 | 107.5 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 1 año (9.6 kg) | 120 | 120 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 18 meses (10.9 kg) | 136.25 | 136.25 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 2 años (12.2 kg) | 152.5 | 152.5 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 3 años (14.3 kg) | 178.75 | 178.75 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 4 años (16.3 kg) | 203.75 | 203.75 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 5 años (18.3 kg) | 228.75 | 228.75 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 6 años (20.5 kg) | 256.25 | 256.25 | 1.025 | 1 tableta | ✅  |
| cloranfenicol | oral | Tableta 250 mg | 8 años (25.6 kg) | 320 | 320 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 10 años (32 kg) | 400 | 400 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 12 años (40 kg) | 500 | 500 | 2 | 2 tableta | ✅  |
| cloranfenicol | oral | Tableta 250 mg | 14 años (50 kg) | 625 | 625 | 2.5 | 2.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 250 mg | 16 años (58 kg) | 725 | 725 | 2.9 | 3 tableta | ✅  |
| cloranfenicol | oral | Tableta 250 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 4 | 4 tableta | ✅ tope aplicado |
| cloranfenicol | oral | Tableta 500 mg | 1 mes (4.2 kg) | 52.5 | 52.5 | 0.105 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 2 meses (5.1 kg) | 63.75 | 63.75 | 0.127 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 4 meses (6.4 kg) | 80 | 80 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 6 meses (7.6 kg) | 95 | 95 | 0.19 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 9 meses (8.6 kg) | 107.5 | 107.5 | 0.215 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 1 año (9.6 kg) | 120 | 120 | 0.24 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 18 meses (10.9 kg) | 136.25 | 136.25 | 0.273 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 2 años (12.2 kg) | 152.5 | 152.5 | 0.305 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 3 años (14.3 kg) | 178.75 | 178.75 | 0.357 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 4 años (16.3 kg) | 203.75 | 203.75 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 5 años (18.3 kg) | 228.75 | 228.75 | 0.458 | 0.46 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 6 años (20.5 kg) | 256.25 | 256.25 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 8 años (25.6 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 10 años (32 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 12 años (40 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| cloranfenicol | oral | Tableta 500 mg | 14 años (50 kg) | 625 | 625 | 1.25 | 1.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 16 años (58 kg) | 725 | 725 | 1.45 | 1.45 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | oral | Tableta 500 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 1 mes (4.2 kg) | 52.5 | 52.5 | 0.525 | 0.5 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 2 meses (5.1 kg) | 63.75 | 63.75 | 0.637 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 4 meses (6.4 kg) | 80 | 80 | 0.8 | 0.8 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 6 meses (7.6 kg) | 95 | 95 | 0.95 | 0.95 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 9 meses (8.6 kg) | 107.5 | 107.5 | 1.075 | 1.1 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 1 año (9.6 kg) | 120 | 120 | 1.2 | 1.2 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 18 meses (10.9 kg) | 136.25 | 136.25 | 1.363 | 1.4 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 2 años (12.2 kg) | 152.5 | 152.5 | 1.525 | 1.5 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 3 años (14.3 kg) | 178.75 | 178.75 | 1.788 | 1.8 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 4 años (16.3 kg) | 203.75 | 203.75 | 2.038 | 2 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 5 años (18.3 kg) | 228.75 | 228.75 | 2.288 | 2.3 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 6 años (20.5 kg) | 256.25 | 256.25 | 2.563 | 2.6 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 8 años (25.6 kg) | 320 | 320 | 3.2 | 3.2 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 10 años (32 kg) | 400 | 400 | 4 | 4 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 12 años (40 kg) | 500 | 500 | 5 | 5 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 14 años (50 kg) | 625 | 625 | 6.25 | 6.3 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 16 años (58 kg) | 725 | 725 | 7.25 | 7.3 mL | ✅  |
| cloranfenicol | iv | Frasco 1 g reconstituido con 9.2 mL (100 mg/mL), IV | 17 años, obeso (95 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| clorfenamina | alergia-2-5-anos | Gotas 1 mg/mL | 2 años (12.2 kg) | 1 | 1 | 1 | 1 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Gotas 1 mg/mL | 3 años (14.3 kg) | 1 | 1 | 1 | 1 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Gotas 1 mg/mL | 4 años (16.3 kg) | 1 | 1 | 1 | 1 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Gotas 1 mg/mL | 5 años (18.3 kg) | 1 | 1 | 1 | 1 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Jarabe 2 mg/5 mL | 2 años (12.2 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Jarabe 2 mg/5 mL | 3 años (14.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Jarabe 2 mg/5 mL | 4 años (16.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| clorfenamina | alergia-2-5-anos | Jarabe 2 mg/5 mL | 5 años (18.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Gotas 1 mg/mL | 6 años (20.5 kg) | 2 | 2 | 2 | 2 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Gotas 1 mg/mL | 8 años (25.6 kg) | 2 | 2 | 2 | 2 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Gotas 1 mg/mL | 10 años (32 kg) | 2 | 2 | 2 | 2 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Gotas 1 mg/mL | 12 años (40 kg) | 2 | 2 | 2 | 2 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Jarabe 2 mg/5 mL | 6 años (20.5 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Jarabe 2 mg/5 mL | 8 años (25.6 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Jarabe 2 mg/5 mL | 10 años (32 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Jarabe 2 mg/5 mL | 12 años (40 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| clorfenamina | alergia-6-12-anos | Tableta 4 mg | 6 años (20.5 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| clorfenamina | alergia-6-12-anos | Tableta 4 mg | 8 años (25.6 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| clorfenamina | alergia-6-12-anos | Tableta 4 mg | 10 años (32 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| clorfenamina | alergia-6-12-anos | Tableta 4 mg | 12 años (40 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Gotas 1 mg/mL | 14 años (50 kg) | 4 | 4 | 4 | 4 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Gotas 1 mg/mL | 16 años (58 kg) | 4 | 4 | 4 | 4 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Gotas 1 mg/mL | 17 años, obeso (95 kg) | 4 | 4 | 4 | 4 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Jarabe 2 mg/5 mL | 14 años (50 kg) | 4 | 4 | 10 | 10 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Jarabe 2 mg/5 mL | 16 años (58 kg) | 4 | 4 | 10 | 10 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Jarabe 2 mg/5 mL | 17 años, obeso (95 kg) | 4 | 4 | 10 | 10 mL | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Tableta 4 mg | 14 años (50 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Tableta 4 mg | 16 años (58 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| clorfenamina | alergia-13-anos-o-mas | Tableta 4 mg | 17 años, obeso (95 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 6 meses (7.6 kg) | 76 | 76 | 0.507 | 0.5 tableta | ✅  |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 9 meses (8.6 kg) | 86 | 86 | 0.573 | 0.57 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 1 año (9.6 kg) | 96 | 96 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 18 meses (10.9 kg) | 109 | 109 | 0.727 | 0.73 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 2 años (12.2 kg) | 122 | 122 | 0.813 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 3 años (14.3 kg) | 143 | 143 | 0.953 | 1 tableta | ✅  |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 4 años (16.3 kg) | 163 | 163 | 1.087 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 5 años (18.3 kg) | 183 | 183 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 6 años (20.5 kg) | 205 | 205 | 1.367 | 1.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 8 años (25.6 kg) | 256 | 256 | 1.707 | 1.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 10 años (32 kg) | 320 | 320 | 2.133 | 2.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dias-1-2 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 12 años (40 kg) | 400 | 400 | 2.667 | 2.67 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 6 meses (7.6 kg) | 38 | 38 | 0.253 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 9 meses (8.6 kg) | 43 | 43 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 1 año (9.6 kg) | 48 | 48 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.363 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 2 años (12.2 kg) | 61 | 61 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 3 años (14.3 kg) | 71.5 | 71.5 | 0.477 | 0.5 tableta | ✅  |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 4 años (16.3 kg) | 81.5 | 81.5 | 0.543 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 5 años (18.3 kg) | 91.5 | 91.5 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 6 años (20.5 kg) | 102.5 | 102.5 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 8 años (25.6 kg) | 128 | 128 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 10 años (32 kg) | 160 | 160 | 1.067 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cloroquina | dia-3 | Tableta 150 mg base (fosfato de cloroquina 250 mg) | 12 años (40 kg) | 200 | 200 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 2 meses (5.1 kg) | 20.4 | 20.4 | 2.55 | 2.6 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 4 meses (6.4 kg) | 25.6 | 25.6 | 3.2 | 3.2 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 6 meses (7.6 kg) | 30.4 | 30.4 | 3.8 | 3.8 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 9 meses (8.6 kg) | 34.4 | 34.4 | 4.3 | 4.3 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 1 año (9.6 kg) | 38.4 | 38.4 | 4.8 | 4.8 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 18 meses (10.9 kg) | 43.6 | 43.6 | 5.45 | 5.5 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 2 años (12.2 kg) | 48.8 | 48.8 | 6.1 | 6.1 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 3 años (14.3 kg) | 57.2 | 57.2 | 7.15 | 7.2 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 4 años (16.3 kg) | 65.2 | 65.2 | 8.15 | 8.2 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 5 años (18.3 kg) | 73.2 | 73.2 | 9.15 | 9.2 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 6 años (20.5 kg) | 82 | 82 | 10.25 | 10.3 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 8 años (25.6 kg) | 102.4 | 102.4 | 12.8 | 12.8 mL | ✅  |
| cotrimoxazol | usual | Suspensión 200/40 mg por 5 mL (dosis en trimetoprima) | 10 años (32 kg) | 128 | 128 | 16 | 16 mL | ✅  |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 2 meses (5.1 kg) | 20.4 | 20.4 | 0.255 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 4 meses (6.4 kg) | 25.6 | 25.6 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 6 meses (7.6 kg) | 30.4 | 30.4 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 9 meses (8.6 kg) | 34.4 | 34.4 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 1 año (9.6 kg) | 38.4 | 38.4 | 0.48 | 0.5 tableta | ✅  |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 18 meses (10.9 kg) | 43.6 | 43.6 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 2 años (12.2 kg) | 48.8 | 48.8 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 3 años (14.3 kg) | 57.2 | 57.2 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 4 años (16.3 kg) | 65.2 | 65.2 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 5 años (18.3 kg) | 73.2 | 73.2 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 6 años (20.5 kg) | 82 | 82 | 1.025 | 1 tableta | ✅  |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 8 años (25.6 kg) | 102.4 | 102.4 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 400/80 mg (dosis en trimetoprima) | 10 años (32 kg) | 128 | 128 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 2 meses (5.1 kg) | 20.4 | 20.4 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 4 meses (6.4 kg) | 25.6 | 25.6 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 6 meses (7.6 kg) | 30.4 | 30.4 | 0.19 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 9 meses (8.6 kg) | 34.4 | 34.4 | 0.215 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 1 año (9.6 kg) | 38.4 | 38.4 | 0.24 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 18 meses (10.9 kg) | 43.6 | 43.6 | 0.273 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 2 años (12.2 kg) | 48.8 | 48.8 | 0.305 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 3 años (14.3 kg) | 57.2 | 57.2 | 0.358 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 4 años (16.3 kg) | 65.2 | 65.2 | 0.408 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 5 años (18.3 kg) | 73.2 | 73.2 | 0.458 | 0.46 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 6 años (20.5 kg) | 82 | 82 | 0.512 | 0.5 tableta | ✅  |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 8 años (25.6 kg) | 102.4 | 102.4 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| cotrimoxazol | usual | Tableta 800/160 mg (dosis en trimetoprima) | 10 años (32 kg) | 128 | 128 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| desloratadina | 6-11-meses | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 6 meses (7.6 kg) | 1 | 1 | 2 | 2 mL | ✅  |
| desloratadina | 6-11-meses | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 9 meses (8.6 kg) | 1 | 1 | 2 | 2 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 1 año (9.6 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 18 meses (10.9 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 2 años (12.2 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 3 años (14.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 4 años (16.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 1-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 5 años (18.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| desloratadina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 6 años (20.5 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| desloratadina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 8 años (25.6 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| desloratadina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 10 años (32 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| desloratadina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 12 años (40 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| desloratadina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 14 años (50 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| desloratadina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 16 años (58 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| desloratadina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 17 años, obeso (95 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| desloratadina | 12-anos-o-mas | Tableta 5 mg | 12 años (40 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| desloratadina | 12-anos-o-mas | Tableta 5 mg | 14 años (50 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| desloratadina | 12-anos-o-mas | Tableta 5 mg | 16 años (58 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| desloratadina | 12-anos-o-mas | Tableta 5 mg | 17 años, obeso (95 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 1 mes (4.2 kg) | 2.52 | 2.52 | 6.3 | 6.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 2 meses (5.1 kg) | 3.06 | 3.06 | 7.65 | 7.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 4 meses (6.4 kg) | 3.84 | 3.84 | 9.6 | 9.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 6 meses (7.6 kg) | 4.56 | 4.56 | 11.4 | 11.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 9 meses (8.6 kg) | 5.16 | 5.16 | 12.9 | 13 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 1 año (9.6 kg) | 5.76 | 5.76 | 14.4 | 14.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 18 meses (10.9 kg) | 6.54 | 6.54 | 16.35 | 16.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 2 años (12.2 kg) | 7.32 | 7.32 | 18.3 | 18.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 3 años (14.3 kg) | 8.58 | 8.58 | 21.45 | 21.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 4 años (16.3 kg) | 9.78 | 9.78 | 24.45 | 24.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 5 años (18.3 kg) | 10.98 | 10.98 | 27.45 | 27.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 6 años (20.5 kg) | 12.3 | 12.3 | 30.75 | 31 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 8 años (25.6 kg) | 15.36 | 15.36 | 38.4 | 38.5 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 10 años (32 kg) | 19.2 | 19.2 | 48 | 48 mL | ✅  |
| dexametasona | crup | Solución oral 2 mg/5 mL | 12 años (40 kg) | 24 | 24 | 60 | 60 mL | ✅  |
| dexametasona | crup | Tableta 4 mg | 1 mes (4.2 kg) | 2.52 | 2.52 | 0.63 | 0.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 2 meses (5.1 kg) | 3.06 | 3.06 | 0.765 | 0.77 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 4 meses (6.4 kg) | 3.84 | 3.84 | 0.96 | 1 tableta | ✅  |
| dexametasona | crup | Tableta 4 mg | 6 meses (7.6 kg) | 4.56 | 4.56 | 1.14 | 1.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 9 meses (8.6 kg) | 5.16 | 5.16 | 1.29 | 1.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 1 año (9.6 kg) | 5.76 | 5.76 | 1.44 | 1.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 18 meses (10.9 kg) | 6.54 | 6.54 | 1.635 | 1.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 2 años (12.2 kg) | 7.32 | 7.32 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 3 años (14.3 kg) | 8.58 | 8.58 | 2.145 | 2.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 4 años (16.3 kg) | 9.78 | 9.78 | 2.445 | 2.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 5 años (18.3 kg) | 10.98 | 10.98 | 2.745 | 2.75 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | crup | Tableta 4 mg | 6 años (20.5 kg) | 12.3 | 12.3 | 3.075 | 3 tableta | ✅  |
| dexametasona | crup | Tableta 4 mg | 8 años (25.6 kg) | 15.36 | 15.36 | 3.84 | 4 tableta | ✅  |
| dexametasona | crup | Tableta 4 mg | 10 años (32 kg) | 19.2 | 19.2 | 4.8 | 5 tableta | ✅  |
| dexametasona | crup | Tableta 4 mg | 12 años (40 kg) | 24 | 24 | 6 | 6 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 1 mes (4.2 kg) | 2.52 | 2.52 | 5.04 | 5 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 2 meses (5.1 kg) | 3.06 | 3.06 | 6.12 | 6 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 4 meses (6.4 kg) | 3.84 | 3.84 | 7.68 | 8 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 6 meses (7.6 kg) | 4.56 | 4.56 | 9.12 | 9 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 9 meses (8.6 kg) | 5.16 | 5.16 | 10.32 | 10 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 1 año (9.6 kg) | 5.76 | 5.76 | 11.52 | 12 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 18 meses (10.9 kg) | 6.54 | 6.54 | 13.08 | 13 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 2 años (12.2 kg) | 7.32 | 7.32 | 14.64 | 15 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 3 años (14.3 kg) | 8.58 | 8.58 | 17.16 | 17 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 4 años (16.3 kg) | 9.78 | 9.78 | 19.56 | 20 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 5 años (18.3 kg) | 10.98 | 10.98 | 21.96 | 22 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 6 años (20.5 kg) | 12.3 | 12.3 | 24.6 | 25 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 8 años (25.6 kg) | 15.36 | 15.36 | 30.72 | 31 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 10 años (32 kg) | 19.2 | 19.2 | 38.4 | 38 tableta | ✅  |
| dexametasona | crup | Tableta 0.5 mg | 12 años (40 kg) | 24 | 24 | 48 | 48 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 1 mes (4.2 kg) | 1.26 | 1.26 | 3.15 | 3 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 2 meses (5.1 kg) | 1.53 | 1.53 | 3.825 | 4 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 4 meses (6.4 kg) | 1.92 | 1.92 | 4.8 | 5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 6 meses (7.6 kg) | 2.28 | 2.28 | 5.7 | 5.5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 9 meses (8.6 kg) | 2.58 | 2.58 | 6.45 | 6.5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 1 año (9.6 kg) | 2.88 | 2.88 | 7.2 | 7 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 18 meses (10.9 kg) | 3.27 | 3.27 | 8.175 | 8 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 2 años (12.2 kg) | 3.66 | 3.66 | 9.15 | 9 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 3 años (14.3 kg) | 4.29 | 4.29 | 10.725 | 10.5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 4 años (16.3 kg) | 4.89 | 4.89 | 12.225 | 12 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 5 años (18.3 kg) | 5.49 | 5.49 | 13.725 | 13.5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Solución oral 2 mg/5 mL | 6 años (20.5 kg) | 6.15 | 6.15 | 15.375 | 15.5 mL | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 1 mes (4.2 kg) | 1.26 | 1.26 | 0.315 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 2 meses (5.1 kg) | 1.53 | 1.53 | 0.382 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 4 meses (6.4 kg) | 1.92 | 1.92 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 6 meses (7.6 kg) | 2.28 | 2.28 | 0.57 | 0.57 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 9 meses (8.6 kg) | 2.58 | 2.58 | 0.645 | 0.65 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 1 año (9.6 kg) | 2.88 | 2.88 | 0.72 | 0.72 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 18 meses (10.9 kg) | 3.27 | 3.27 | 0.818 | 0.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 2 años (12.2 kg) | 3.66 | 3.66 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 3 años (14.3 kg) | 4.29 | 4.29 | 1.073 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 4 años (16.3 kg) | 4.89 | 4.89 | 1.222 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 5 años (18.3 kg) | 5.49 | 5.49 | 1.373 | 1.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 4 mg | 6 años (20.5 kg) | 6.15 | 6.15 | 1.537 | 1.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 1 mes (4.2 kg) | 1.26 | 1.26 | 2.52 | 2.52 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 2 meses (5.1 kg) | 1.53 | 1.53 | 3.06 | 3 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 4 meses (6.4 kg) | 1.92 | 1.92 | 3.84 | 4 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 6 meses (7.6 kg) | 2.28 | 2.28 | 4.56 | 4.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 9 meses (8.6 kg) | 2.58 | 2.58 | 5.16 | 5 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 1 año (9.6 kg) | 2.88 | 2.88 | 5.76 | 6 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 18 meses (10.9 kg) | 3.27 | 3.27 | 6.54 | 6.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 2 años (12.2 kg) | 3.66 | 3.66 | 7.32 | 7 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 3 años (14.3 kg) | 4.29 | 4.29 | 8.58 | 9 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 4 años (16.3 kg) | 4.89 | 4.89 | 9.78 | 10 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 5 años (18.3 kg) | 5.49 | 5.49 | 10.98 | 11 tableta | ✅  |
| dexametasona | asma-5-anos-o-menos | Tableta 0.5 mg | 6 años (20.5 kg) | 6.15 | 6.15 | 12.3 | 12 tableta | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 15 días (3.6 kg) (3.6 kg) | 1.8 | 1.8 | 0.36 | 0.35 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.42 | 0.4 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.51 | 0.5 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.64 | 0.65 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.76 | 0.75 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.86 | 0.85 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 1 año (9.6 kg) | 4.8 | 4.8 | 0.96 | 0.95 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 18 meses (10.9 kg) | 5.45 | 5.45 | 1.09 | 1.1 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 2 años (12.2 kg) | 6.1 | 6.1 | 1.22 | 1.2 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 3 años (14.3 kg) | 7.15 | 7.15 | 1.43 | 1.45 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 4 años (16.3 kg) | 8.15 | 8.15 | 1.63 | 1.65 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 5 años (18.3 kg) | 9.15 | 9.15 | 1.83 | 1.85 mL | ✅  |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 6 años (20.5 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 8 años (25.6 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 10 años (32 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 12 años (40 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 14 años (50 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 16 años (58 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-rectal | Ampolla 10 mg/2 mL (5 mg/mL) | 17 años, obeso (95 kg) | 10 | 10 | 2 | 2 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 1 mes (4.2 kg) | 1.05 | 1.05 | 0.21 | 0.2 mL | ✅  |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 2 meses (5.1 kg) | 1.27 | 1.27 | 0.255 | 0.25 mL | ✅  |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 4 meses (6.4 kg) | 1.6 | 1.6 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 6 meses (7.6 kg) | 1.9 | 1.9 | 0.38 | 0.38 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 9 meses (8.6 kg) | 2.15 | 2.15 | 0.43 | 0.45 mL | ✅  |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 1 año (9.6 kg) | 2.4 | 2.4 | 0.48 | 0.5 mL | ✅  |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 18 meses (10.9 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 2 años (12.2 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 3 años (14.3 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-menor-5 | Ampolla 10 mg/2 mL (5 mg/mL) | 4 años (16.3 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 5 años (18.3 kg) | 4.58 | 4.58 | 0.915 | 0.9 mL | ✅  |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 6 años (20.5 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 8 años (25.6 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 10 años (32 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 12 años (40 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 14 años (50 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 16 años (58 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| diazepam | convulsion-iv-5-o-mas | Ampolla 10 mg/2 mL (5 mg/mL) | 17 años, obeso (95 kg) | 5 | 5 | 1 | 1 mL | ✅ tope aplicado |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 13.13 | 13.13 | 0.263 | 0.26 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 15.94 | 15.94 | 0.319 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 20 | 20 | 0.4 | 0.4 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 23.75 | 23.75 | 0.475 | 0.47 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 26.88 | 26.88 | 0.537 | 0.54 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 30 | 30 | 0.6 | 0.6 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 34.06 | 34.06 | 0.681 | 0.7 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 38.13 | 38.13 | 0.762 | 0.8 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 44.69 | 44.69 | 0.894 | 0.9 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 50.94 | 50.94 | 1.019 | 1 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 57.19 | 57.19 | 1.144 | 1.1 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 64.06 | 64.06 | 1.281 | 1.3 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 80 | 80 | 1.6 | 1.6 mL | ✅  |
| dicloxacilina | leve-moderada | Suspensión 250 mg/5 mL | 10 años (32 kg) | 100 | 100 | 2 | 2 mL | ✅  |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 1 mes (4.2 kg) | 13.13 | 13.13 | 0.052 | 0.05 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 2 meses (5.1 kg) | 15.94 | 15.94 | 0.064 | 0.06 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 4 meses (6.4 kg) | 20 | 20 | 0.08 | 0.08 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 6 meses (7.6 kg) | 23.75 | 23.75 | 0.095 | 0.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 9 meses (8.6 kg) | 26.88 | 26.88 | 0.107 | 0.11 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 1 año (9.6 kg) | 30 | 30 | 0.12 | 0.12 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 18 meses (10.9 kg) | 34.06 | 34.06 | 0.136 | 0.14 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 2 años (12.2 kg) | 38.13 | 38.13 | 0.152 | 0.15 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 3 años (14.3 kg) | 44.69 | 44.69 | 0.179 | 0.18 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 4 años (16.3 kg) | 50.94 | 50.94 | 0.204 | 0.2 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 5 años (18.3 kg) | 57.19 | 57.19 | 0.229 | 0.23 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 6 años (20.5 kg) | 64.06 | 64.06 | 0.256 | 0.26 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 8 años (25.6 kg) | 80 | 80 | 0.32 | 0.32 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 250 mg | 10 años (32 kg) | 100 | 100 | 0.4 | 0.4 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 1 mes (4.2 kg) | 13.13 | 13.13 | 0.026 | 0.03 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 2 meses (5.1 kg) | 15.94 | 15.94 | 0.032 | 0.03 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 4 meses (6.4 kg) | 20 | 20 | 0.04 | 0.04 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 6 meses (7.6 kg) | 23.75 | 23.75 | 0.048 | 0.05 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 9 meses (8.6 kg) | 26.88 | 26.88 | 0.054 | 0.05 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 1 año (9.6 kg) | 30 | 30 | 0.06 | 0.06 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 18 meses (10.9 kg) | 34.06 | 34.06 | 0.068 | 0.07 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 2 años (12.2 kg) | 38.13 | 38.13 | 0.076 | 0.08 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 3 años (14.3 kg) | 44.69 | 44.69 | 0.089 | 0.09 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 4 años (16.3 kg) | 50.94 | 50.94 | 0.102 | 0.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 5 años (18.3 kg) | 57.19 | 57.19 | 0.114 | 0.11 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 6 años (20.5 kg) | 64.06 | 64.06 | 0.128 | 0.13 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 8 años (25.6 kg) | 80 | 80 | 0.16 | 0.16 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | leve-moderada | Cápsula 500 mg | 10 años (32 kg) | 100 | 100 | 0.2 | 0.2 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 52.5 | 52.5 | 1.05 | 1.1 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 63.75 | 63.75 | 1.275 | 1.3 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 80 | 80 | 1.6 | 1.6 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 95 | 95 | 1.9 | 1.9 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 107.5 | 107.5 | 2.15 | 2.2 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 120 | 120 | 2.4 | 2.4 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 136.25 | 136.25 | 2.725 | 2.7 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 152.5 | 152.5 | 3.05 | 3.1 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 178.75 | 178.75 | 3.575 | 3.6 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 203.75 | 203.75 | 4.075 | 4.1 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 228.75 | 228.75 | 4.575 | 4.6 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 256.25 | 256.25 | 5.125 | 5.1 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| dicloxacilina | severa | Suspensión 250 mg/5 mL | 10 años (32 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| dicloxacilina | severa | Cápsula 250 mg | 1 mes (4.2 kg) | 52.5 | 52.5 | 0.21 | 0.21 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 2 meses (5.1 kg) | 63.75 | 63.75 | 0.255 | 0.26 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 4 meses (6.4 kg) | 80 | 80 | 0.32 | 0.32 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 6 meses (7.6 kg) | 95 | 95 | 0.38 | 0.38 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 9 meses (8.6 kg) | 107.5 | 107.5 | 0.43 | 0.43 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 1 año (9.6 kg) | 120 | 120 | 0.48 | 0.48 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 18 meses (10.9 kg) | 136.25 | 136.25 | 0.545 | 0.55 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 2 años (12.2 kg) | 152.5 | 152.5 | 0.61 | 0.61 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 3 años (14.3 kg) | 178.75 | 178.75 | 0.715 | 0.71 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 4 años (16.3 kg) | 203.75 | 203.75 | 0.815 | 0.81 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 5 años (18.3 kg) | 228.75 | 228.75 | 0.915 | 0.92 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 6 años (20.5 kg) | 256.25 | 256.25 | 1.025 | 1 capsula | ✅  |
| dicloxacilina | severa | Cápsula 250 mg | 8 años (25.6 kg) | 320 | 320 | 1.28 | 1.28 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 250 mg | 10 años (32 kg) | 400 | 400 | 1.6 | 1.6 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 1 mes (4.2 kg) | 52.5 | 52.5 | 0.105 | 0.1 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 2 meses (5.1 kg) | 63.75 | 63.75 | 0.127 | 0.13 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 4 meses (6.4 kg) | 80 | 80 | 0.16 | 0.16 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 6 meses (7.6 kg) | 95 | 95 | 0.19 | 0.19 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 9 meses (8.6 kg) | 107.5 | 107.5 | 0.215 | 0.21 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 1 año (9.6 kg) | 120 | 120 | 0.24 | 0.24 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 18 meses (10.9 kg) | 136.25 | 136.25 | 0.273 | 0.27 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 2 años (12.2 kg) | 152.5 | 152.5 | 0.305 | 0.3 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 3 años (14.3 kg) | 178.75 | 178.75 | 0.357 | 0.36 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 4 años (16.3 kg) | 203.75 | 203.75 | 0.407 | 0.41 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 5 años (18.3 kg) | 228.75 | 228.75 | 0.458 | 0.46 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 6 años (20.5 kg) | 256.25 | 256.25 | 0.512 | 0.51 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 8 años (25.6 kg) | 320 | 320 | 0.64 | 0.64 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| dicloxacilina | severa | Cápsula 500 mg | 10 años (32 kg) | 400 | 400 | 0.8 | 0.8 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 1 mes (4.2 kg) | 23.52 | 23.52 | 0.47 | 0.47 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 2 meses (5.1 kg) | 28.56 | 28.56 | 0.571 | 0.57 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 4 meses (6.4 kg) | 35.84 | 35.84 | 0.717 | 0.7 mL | ✅  |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 6 meses (7.6 kg) | 42.56 | 42.56 | 0.851 | 0.85 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 9 meses (8.6 kg) | 48.16 | 48.16 | 0.963 | 1 mL | ✅  |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 1 año (9.6 kg) | 53.76 | 53.76 | 1.075 | 1.1 mL | ✅  |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 18 meses (10.9 kg) | 61.04 | 61.04 | 1.221 | 1.2 mL | ✅  |
| digoxina | mantenimiento-1-24-meses | Solución oral 50 mcg/mL | 2 años (12.2 kg) | 68.32 | 68.32 | 1.366 | 1.4 mL | ✅  |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 1 mes (4.2 kg) | 23.52 | 23.52 | 0.094 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 2 meses (5.1 kg) | 28.56 | 28.56 | 0.114 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 4 meses (6.4 kg) | 35.84 | 35.84 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 6 meses (7.6 kg) | 42.56 | 42.56 | 0.17 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 9 meses (8.6 kg) | 48.16 | 48.16 | 0.193 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 1 año (9.6 kg) | 53.76 | 53.76 | 0.215 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 18 meses (10.9 kg) | 61.04 | 61.04 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-1-24-meses | Tableta 250 mcg (0.25 mg) | 2 años (12.2 kg) | 68.32 | 68.32 | 0.273 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-2-5-anos | Solución oral 50 mcg/mL | 3 años (14.3 kg) | 67.21 | 67.21 | 1.344 | 1.3 mL | ✅  |
| digoxina | mantenimiento-2-5-anos | Solución oral 50 mcg/mL | 4 años (16.3 kg) | 76.61 | 76.61 | 1.532 | 1.5 mL | ✅  |
| digoxina | mantenimiento-2-5-anos | Solución oral 50 mcg/mL | 5 años (18.3 kg) | 86.01 | 86.01 | 1.72 | 1.7 mL | ✅  |
| digoxina | mantenimiento-2-5-anos | Tableta 250 mcg (0.25 mg) | 3 años (14.3 kg) | 67.21 | 67.21 | 0.269 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-2-5-anos | Tableta 250 mcg (0.25 mg) | 4 años (16.3 kg) | 76.61 | 76.61 | 0.306 | 0.31 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-2-5-anos | Tableta 250 mcg (0.25 mg) | 5 años (18.3 kg) | 86.01 | 86.01 | 0.344 | 0.34 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-5-10-anos | Solución oral 50 mcg/mL | 6 años (20.5 kg) | 57.4 | 57.4 | 1.148 | 1.1 mL | ✅  |
| digoxina | mantenimiento-5-10-anos | Solución oral 50 mcg/mL | 8 años (25.6 kg) | 71.68 | 71.68 | 1.434 | 1.4 mL | ✅  |
| digoxina | mantenimiento-5-10-anos | Solución oral 50 mcg/mL | 10 años (32 kg) | 89.6 | 89.6 | 1.792 | 1.8 mL | ✅  |
| digoxina | mantenimiento-5-10-anos | Tableta 250 mcg (0.25 mg) | 6 años (20.5 kg) | 57.4 | 57.4 | 0.23 | 0.23 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-5-10-anos | Tableta 250 mcg (0.25 mg) | 8 años (25.6 kg) | 71.68 | 71.68 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-5-10-anos | Tableta 250 mcg (0.25 mg) | 10 años (32 kg) | 89.6 | 89.6 | 0.358 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-mayores-10-anos | Solución oral 50 mcg/mL | 12 años (40 kg) | 120 | 120 | 2.4 | 2.4 mL | ✅  |
| digoxina | mantenimiento-mayores-10-anos | Solución oral 50 mcg/mL | 14 años (50 kg) | 150 | 150 | 3 | 3 mL | ✅  |
| digoxina | mantenimiento-mayores-10-anos | Solución oral 50 mcg/mL | 16 años (58 kg) | 174 | 174 | 3.48 | 3.5 mL | ✅  |
| digoxina | mantenimiento-mayores-10-anos | Solución oral 50 mcg/mL | 17 años, obeso (95 kg) | 285 | 285 | 5.7 | 5.7 mL | ✅  |
| digoxina | mantenimiento-mayores-10-anos | Tableta 250 mcg (0.25 mg) | 12 años (40 kg) | 120 | 120 | 0.48 | 0.5 tableta | ✅  |
| digoxina | mantenimiento-mayores-10-anos | Tableta 250 mcg (0.25 mg) | 14 años (50 kg) | 150 | 150 | 0.6 | 0.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-mayores-10-anos | Tableta 250 mcg (0.25 mg) | 16 años (58 kg) | 174 | 174 | 0.696 | 0.7 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| digoxina | mantenimiento-mayores-10-anos | Tableta 250 mcg (0.25 mg) | 17 años, obeso (95 kg) | 285 | 285 | 1.14 | 1.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| dimenhidrinato | mareo-2-5-anos | Tableta 50 mg | 2 años (12.2 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-2-5-anos | Tableta 50 mg | 3 años (14.3 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-2-5-anos | Tableta 50 mg | 4 años (16.3 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-2-5-anos | Tableta 50 mg | 5 años (18.3 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-6-11-anos | Tableta 50 mg | 6 años (20.5 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-6-11-anos | Tableta 50 mg | 8 años (25.6 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| dimenhidrinato | mareo-6-11-anos | Tableta 50 mg | 10 años (32 kg) | 25 | 25 | 0.5 | 0.5 tableta | ✅  |
| doxiciclina | dia-1-o-severa | Tableta 100 mg | 8 años (25.6 kg) | 56.32 | 56.32 | 0.563 | 0.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| doxiciclina | dia-1-o-severa | Tableta 100 mg | 10 años (32 kg) | 70.4 | 70.4 | 0.704 | 0.7 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| doxiciclina | dia-1-o-severa | Tableta 100 mg | 12 años (40 kg) | 88 | 88 | 0.88 | 0.88 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| doxiciclina | mantenimiento | Tableta 100 mg | 8 años (25.6 kg) | 56.32 | 56.32 | 0.563 | 0.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| doxiciclina | mantenimiento | Tableta 100 mg | 10 años (32 kg) | 70.4 | 70.4 | 0.704 | 0.7 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| doxiciclina | mantenimiento | Tableta 100 mg | 12 años (40 kg) | 88 | 88 | 0.88 | 0.88 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 3 días, bajo peso (2 kg) (2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 5 días (3.2 kg) (3.2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 15 días (3.6 kg) (3.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 1 mes (4.2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 2 meses (5.1 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 4 meses (6.4 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 6 meses (7.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-prematuros | Solución oral 10 000 UI/mL | 9 meses (8.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 3 días, bajo peso (2 kg) (2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 5 días (3.2 kg) (3.2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 15 días (3.6 kg) (3.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 1 mes (4.2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 2 meses (5.1 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 4 meses (6.4 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 6 meses (7.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 9 meses (8.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 1 año (9.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 18 meses (10.9 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 2 años (12.2 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 3 años (14.3 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 4 años (16.3 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 5 años (18.3 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 6 años (20.5 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 8 años (25.6 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 10 años (32 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 12 años (40 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 14 años (50 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 16 años (58 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | suplemento-sanos | Solución oral 10 000 UI/mL | 17 años, obeso (95 kg) | 400 | 400 | 0.04 | 0.04 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 1 mes (4.2 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 2 meses (5.1 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 4 meses (6.4 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 6 meses (7.6 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 9 meses (8.6 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 1 año (9.6 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 18 meses (10.9 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 2 años (12.2 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 3 años (14.3 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 4 años (16.3 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 5 años (18.3 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 6 años (20.5 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 8 años (25.6 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 10 años (32 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 12 años (40 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 14 años (50 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 16 años (58 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-nutricional | Solución oral 10 000 UI/mL | 17 años, obeso (95 kg) | 1000 | 1000 | 0.1 | 0.1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 1 mes (4.2 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 2 meses (5.1 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 4 meses (6.4 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 6 meses (7.6 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 9 meses (8.6 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 1 año (9.6 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 18 meses (10.9 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 2 años (12.2 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 3 años (14.3 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 4 años (16.3 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 5 años (18.3 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 6 años (20.5 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 8 años (25.6 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 10 años (32 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 12 años (40 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 14 años (50 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 16 años (58 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| ergocalciferol | raquitismo-malabsorcion | Solución oral 10 000 UI/mL | 17 años, obeso (95 kg) | 10000 | 10000 | 1 | 1 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 31.5 | 31.5 | 0.63 | 0.6 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 38.25 | 38.25 | 0.765 | 0.8 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 48 | 48 | 0.96 | 1 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 57 | 57 | 1.14 | 1.1 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 64.5 | 64.5 | 1.29 | 1.3 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 72 | 72 | 1.44 | 1.4 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 81.75 | 81.75 | 1.635 | 1.6 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 91.5 | 91.5 | 1.83 | 1.8 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 107.25 | 107.25 | 2.145 | 2.1 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 122.25 | 122.25 | 2.445 | 2.4 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 137.25 | 137.25 | 2.745 | 2.7 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 153.75 | 153.75 | 3.075 | 3.1 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 192 | 192 | 3.84 | 3.8 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 10 años (32 kg) | 240 | 240 | 4.8 | 4.8 mL | ✅  |
| eritromicina | usual | Suspensión 250 mg/5 mL | 12 años (40 kg) | 300 | 300 | 6 | 6 mL | ✅  |
| eritromicina | usual | Tableta ranurada 500 mg | 1 mes (4.2 kg) | 31.5 | 31.5 | 0.063 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 2 meses (5.1 kg) | 38.25 | 38.25 | 0.076 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 4 meses (6.4 kg) | 48 | 48 | 0.096 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 6 meses (7.6 kg) | 57 | 57 | 0.114 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 9 meses (8.6 kg) | 64.5 | 64.5 | 0.129 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 1 año (9.6 kg) | 72 | 72 | 0.144 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 18 meses (10.9 kg) | 81.75 | 81.75 | 0.164 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 2 años (12.2 kg) | 91.5 | 91.5 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 3 años (14.3 kg) | 107.25 | 107.25 | 0.214 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 4 años (16.3 kg) | 122.25 | 122.25 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 5 años (18.3 kg) | 137.25 | 137.25 | 0.275 | 0.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 6 años (20.5 kg) | 153.75 | 153.75 | 0.307 | 0.31 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 8 años (25.6 kg) | 192 | 192 | 0.384 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | usual | Tableta ranurada 500 mg | 10 años (32 kg) | 240 | 240 | 0.48 | 0.5 tableta | ✅  |
| eritromicina | usual | Tableta ranurada 500 mg | 12 años (40 kg) | 300 | 300 | 0.6 | 0.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 0.84 | 0.8 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 1.02 | 1 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| eritromicina | faringitis-estreptococica | Suspensión 250 mg/5 mL | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 1 mes (4.2 kg) | 42 | 42 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 2 meses (5.1 kg) | 51 | 51 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 4 meses (6.4 kg) | 64 | 64 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.5 tableta | ✅  |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | faringitis-estreptococica | Tableta ranurada 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 0.84 | 0.8 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 1.02 | 1 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| eritromicina | tos-ferina | Suspensión 250 mg/5 mL | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 1 mes (4.2 kg) | 42 | 42 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 2 meses (5.1 kg) | 51 | 51 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 4 meses (6.4 kg) | 64 | 64 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.5 tableta | ✅  |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| eritromicina | tos-ferina | Tableta ranurada 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 10 años (32 kg) | 16 | 16 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 25 mg | 12 años (40 kg) | 20 | 20 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.021 | 0.02 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.025 | 0.03 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.032 | 0.03 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.038 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.043 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.048 | 0.05 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.054 | 0.05 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.061 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.072 | 0.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.082 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.091 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 10 años (32 kg) | 16 | 16 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| espironolactona | ninos | Tableta 100 mg | 12 años (40 kg) | 20 | 20 | 0.2 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 1 mes (4.2 kg) | 84 | 84 | 3.36 | 3.4 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 2 meses (5.1 kg) | 102 | 102 | 4.08 | 4.1 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 4 meses (6.4 kg) | 128 | 128 | 5.12 | 5.1 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 6 meses (7.6 kg) | 152 | 152 | 6.08 | 6.1 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 9 meses (8.6 kg) | 172 | 172 | 6.88 | 6.9 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 1 año (9.6 kg) | 192 | 192 | 7.68 | 7.7 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 18 meses (10.9 kg) | 218 | 218 | 8.72 | 8.7 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 2 años (12.2 kg) | 244 | 244 | 9.76 | 9.8 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 3 años (14.3 kg) | 286 | 286 | 11.44 | 11.4 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 4 años (16.3 kg) | 326 | 326 | 13.04 | 13 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 5 años (18.3 kg) | 366 | 366 | 14.64 | 14.6 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 6 años (20.5 kg) | 410 | 410 | 16.4 | 16.4 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 8 años (25.6 kg) | 512 | 512 | 20.48 | 20.5 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 10 años (32 kg) | 640 | 640 | 25.6 | 25.6 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 12 años (40 kg) | 800 | 800 | 32 | 32 mL | ✅  |
| etambutol | tb-sensible | Suspensión 25 mg/mL | 14 años (50 kg) | 1000 | 1000 | 40 | 40 mL | ✅  |
| etambutol | tb-sensible | Tableta 400 mg | 1 mes (4.2 kg) | 84 | 84 | 0.21 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 2 meses (5.1 kg) | 102 | 102 | 0.255 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 4 meses (6.4 kg) | 128 | 128 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 6 meses (7.6 kg) | 152 | 152 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 9 meses (8.6 kg) | 172 | 172 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 1 año (9.6 kg) | 192 | 192 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 18 meses (10.9 kg) | 218 | 218 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 2 años (12.2 kg) | 244 | 244 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 3 años (14.3 kg) | 286 | 286 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 4 años (16.3 kg) | 326 | 326 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 5 años (18.3 kg) | 366 | 366 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 6 años (20.5 kg) | 410 | 410 | 1.025 | 1 tableta | ✅  |
| etambutol | tb-sensible | Tableta 400 mg | 8 años (25.6 kg) | 512 | 512 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 10 años (32 kg) | 640 | 640 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| etambutol | tb-sensible | Tableta 400 mg | 12 años (40 kg) | 800 | 800 | 2 | 2 tableta | ✅  |
| etambutol | tb-sensible | Tableta 400 mg | 14 años (50 kg) | 1000 | 1000 | 2.5 | 2.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 1 mes (4.2 kg) | 63 | 63 | 1.26 | 1.3 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 1.53 | 1.5 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 4 meses (6.4 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 6 meses (7.6 kg) | 114 | 114 | 2.28 | 2.3 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 9 meses (8.6 kg) | 129 | 129 | 2.58 | 2.6 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 1 año (9.6 kg) | 144 | 144 | 2.88 | 2.9 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 3.27 | 3.3 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 2 años (12.2 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 3 años (14.3 kg) | 214.5 | 214.5 | 4.29 | 4.3 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 4 años (16.3 kg) | 244.5 | 244.5 | 4.89 | 4.9 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 5 años (18.3 kg) | 274.5 | 274.5 | 5.49 | 5.5 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 6 años (20.5 kg) | 307.5 | 307.5 | 6.15 | 6.2 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 8 años (25.6 kg) | 384 | 384 | 7.68 | 7.7 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 10 años (32 kg) | 480 | 480 | 9.6 | 9.6 mL | ✅  |
| fenitoina | estado-epileptico-carga | Ampolla 50 mg/mL | 12 años (40 kg) | 600 | 600 | 12 | 12 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 1 mes (4.2 kg) | 63 | 63 | 0.63 | 0.65 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.765 | 0.75 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 4 meses (6.4 kg) | 96 | 96 | 0.96 | 0.95 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 6 meses (7.6 kg) | 114 | 114 | 1.14 | 1.15 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 9 meses (8.6 kg) | 129 | 129 | 1.29 | 1.3 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 1 año (9.6 kg) | 144 | 144 | 1.44 | 1.45 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 18 meses (10.9 kg) | 163.5 | 163.5 | 1.635 | 1.65 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 2 años (12.2 kg) | 183 | 183 | 1.83 | 1.85 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 3 años (14.3 kg) | 214.5 | 214.5 | 2.145 | 2.15 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 4 años (16.3 kg) | 244.5 | 244.5 | 2.445 | 2.45 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 5 años (18.3 kg) | 274.5 | 274.5 | 2.745 | 2.75 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 6 años (20.5 kg) | 307.5 | 307.5 | 3.075 | 3.1 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 8 años (25.6 kg) | 384 | 384 | 3.84 | 3.85 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 10 años (32 kg) | 480 | 480 | 4.8 | 4.8 mL | ✅  |
| fenobarbital | estado-epileptico-carga | Ampolla 200 mg/2 mL (100 mg/mL) | 12 años (40 kg) | 600 | 600 | 6 | 6 mL | ✅  |
| fenobarbital | neonato-convulsion | Ampolla 200 mg/2 mL (100 mg/mL) | 3 días, bajo peso (2 kg) (2 kg) | 40 | 40 | 0.4 | 0.4 mL | ✅  |
| fenobarbital | neonato-convulsion | Ampolla 200 mg/2 mL (100 mg/mL) | 5 días (3.2 kg) (3.2 kg) | 64 | 64 | 0.64 | 0.65 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 1 mes (4.2 kg) | 52.5 | 52.5 | 1.4 | 1.4 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 2 meses (5.1 kg) | 63.75 | 63.75 | 1.7 | 1.7 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 4 meses (6.4 kg) | 80 | 80 | 2.133 | 2.1 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 6 meses (7.6 kg) | 95 | 95 | 2.533 | 2.5 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 9 meses (8.6 kg) | 107.5 | 107.5 | 2.867 | 2.9 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 1 año (9.6 kg) | 120 | 120 | 3.2 | 3.2 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 18 meses (10.9 kg) | 136.25 | 136.25 | 3.633 | 3.6 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 2 años (12.2 kg) | 152.5 | 152.5 | 4.067 | 4.1 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 3 años (14.3 kg) | 178.75 | 178.75 | 4.767 | 4.8 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 4 años (16.3 kg) | 203.75 | 203.75 | 5.433 | 5.4 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 5 años (18.3 kg) | 228.75 | 228.75 | 6.1 | 6.1 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 6 años (20.5 kg) | 256.25 | 256.25 | 6.833 | 6.8 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 8 años (25.6 kg) | 320 | 320 | 8.533 | 8.5 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 10 años (32 kg) | 400 | 400 | 10.667 | 10.7 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 12 años (40 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅  |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 14 años (50 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 16 años (58 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fenoximetilpenicilina | infecciones | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 17 años, obeso (95 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 1 mes (4.2 kg) | 52.5 | 52.5 | 1.4 | 1.4 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 2 meses (5.1 kg) | 63.75 | 63.75 | 1.7 | 1.7 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 4 meses (6.4 kg) | 80 | 80 | 2.133 | 2.1 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 6 meses (7.6 kg) | 95 | 95 | 2.533 | 2.5 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 9 meses (8.6 kg) | 107.5 | 107.5 | 2.867 | 2.9 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 1 año (9.6 kg) | 120 | 120 | 3.2 | 3.2 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 18 meses (10.9 kg) | 136.25 | 136.25 | 3.633 | 3.6 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 2 años (12.2 kg) | 152.5 | 152.5 | 4.067 | 4.1 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 3 años (14.3 kg) | 178.75 | 178.75 | 4.767 | 4.8 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 4 años (16.3 kg) | 203.75 | 203.75 | 5.433 | 5.4 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 5 años (18.3 kg) | 228.75 | 228.75 | 6.1 | 6.1 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 6 años (20.5 kg) | 256.25 | 256.25 | 6.833 | 6.8 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 8 años (25.6 kg) | 320 | 320 | 8.533 | 8.5 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 10 años (32 kg) | 400 | 400 | 10.667 | 10.7 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 12 años (40 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅  |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 14 años (50 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 16 años (58 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fenoximetilpenicilina | profilaxis-fiebre-reumatica | Suspensión 187.5 mg/5 mL (300 000 UI/5 mL; 1 mg = 1600 UI) | 17 años, obeso (95 kg) | 500 | 500 | 13.333 | 13.3 mL | ✅ tope aplicado |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 2 años (12.2 kg) | 0.02 | 0.02 | 0.488 | 0.5 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 3 años (14.3 kg) | 0.03 | 0.03 | 0.572 | 0.55 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 4 años (16.3 kg) | 0.03 | 0.03 | 0.652 | 0.65 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 5 años (18.3 kg) | 0.04 | 0.04 | 0.732 | 0.75 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 6 años (20.5 kg) | 0.04 | 0.04 | 0.82 | 0.8 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 8 años (25.6 kg) | 0.05 | 0.05 | 1.024 | 1 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 10 años (32 kg) | 0.06 | 0.06 | 1.28 | 1.3 mL | ✅  |
| fentanilo | anestesia-2-12a | Fentanilo 50 mcg/mL (0.05 mg/mL) | 12 años (40 kg) | 0.08 | 0.08 | 1.6 | 1.6 mL | ✅  |
| fitomenadiona | sangrado-neonatal | Fitomenadiona 10 mg/mL (ampolla) | 3 días, bajo peso (2 kg) (2 kg) | 1 | 1 | 0.1 | 0.1 mL | ✅  |
| fitomenadiona | sangrado-neonatal | Fitomenadiona 10 mg/mL (ampolla) | 5 días (3.2 kg) (3.2 kg) | 1 | 1 | 0.1 | 0.1 mL | ✅  |
| fitomenadiona | sangrado-neonatal | Fitomenadiona 10 mg/mL (ampolla) | 15 días (3.6 kg) (3.6 kg) | 1 | 1 | 0.1 | 0.1 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 1 mes (4.2 kg) | 25.2 | 25.2 | 2.52 | 2.5 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 2 meses (5.1 kg) | 30.6 | 30.6 | 3.06 | 3.1 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 4 meses (6.4 kg) | 38.4 | 38.4 | 3.84 | 3.8 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 6 meses (7.6 kg) | 45.6 | 45.6 | 4.56 | 4.6 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 9 meses (8.6 kg) | 51.6 | 51.6 | 5.16 | 5.2 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 1 año (9.6 kg) | 57.6 | 57.6 | 5.76 | 5.8 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 18 meses (10.9 kg) | 65.4 | 65.4 | 6.54 | 6.5 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 2 años (12.2 kg) | 73.2 | 73.2 | 7.32 | 7.3 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 3 años (14.3 kg) | 85.8 | 85.8 | 8.58 | 8.6 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 4 años (16.3 kg) | 97.8 | 97.8 | 9.78 | 9.8 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 5 años (18.3 kg) | 109.8 | 109.8 | 10.98 | 11 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 6 años (20.5 kg) | 123 | 123 | 12.3 | 12.3 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 8 años (25.6 kg) | 153.6 | 153.6 | 15.36 | 15.4 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 10 años (32 kg) | 192 | 192 | 19.2 | 19.2 mL | ✅  |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 12 años (40 kg) | 200 | 200 | 20 | 20 mL | ✅ tope aplicado |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 14 años (50 kg) | 200 | 200 | 20 | 20 mL | ✅ tope aplicado |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 16 años (58 kg) | 200 | 200 | 20 | 20 mL | ✅ tope aplicado |
| fluconazol | orofaringea-dia-1 | Suspensión 50 mg/5 mL | 17 años, obeso (95 kg) | 200 | 200 | 20 | 20 mL | ✅ tope aplicado |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 1 mes (4.2 kg) | 12.6 | 12.6 | 1.26 | 1.3 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 2 meses (5.1 kg) | 15.3 | 15.3 | 1.53 | 1.5 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 4 meses (6.4 kg) | 19.2 | 19.2 | 1.92 | 1.9 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 6 meses (7.6 kg) | 22.8 | 22.8 | 2.28 | 2.3 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 9 meses (8.6 kg) | 25.8 | 25.8 | 2.58 | 2.6 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 1 año (9.6 kg) | 28.8 | 28.8 | 2.88 | 2.9 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 18 meses (10.9 kg) | 32.7 | 32.7 | 3.27 | 3.3 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 2 años (12.2 kg) | 36.6 | 36.6 | 3.66 | 3.7 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 3 años (14.3 kg) | 42.9 | 42.9 | 4.29 | 4.3 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 4 años (16.3 kg) | 48.9 | 48.9 | 4.89 | 4.9 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 5 años (18.3 kg) | 54.9 | 54.9 | 5.49 | 5.5 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 6 años (20.5 kg) | 61.5 | 61.5 | 6.15 | 6.2 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 8 años (25.6 kg) | 76.8 | 76.8 | 7.68 | 7.7 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 10 años (32 kg) | 96 | 96 | 9.6 | 9.6 mL | ✅  |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 12 años (40 kg) | 100 | 100 | 10 | 10 mL | ✅ tope aplicado |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 14 años (50 kg) | 100 | 100 | 10 | 10 mL | ✅ tope aplicado |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 16 años (58 kg) | 100 | 100 | 10 | 10 mL | ✅ tope aplicado |
| fluconazol | orofaringea-desde-dia-2 | Suspensión 50 mg/5 mL | 17 años, obeso (95 kg) | 100 | 100 | 10 | 10 mL | ✅ tope aplicado |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 1 mes (4.2 kg) | 25.2 | 25.2 | 12.6 | 13 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 2 meses (5.1 kg) | 30.6 | 30.6 | 15.3 | 15 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 4 meses (6.4 kg) | 38.4 | 38.4 | 19.2 | 19 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 6 meses (7.6 kg) | 45.6 | 45.6 | 22.8 | 23 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 9 meses (8.6 kg) | 51.6 | 51.6 | 25.8 | 26 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 1 año (9.6 kg) | 57.6 | 57.6 | 28.8 | 29 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 18 meses (10.9 kg) | 65.4 | 65.4 | 32.7 | 33 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 2 años (12.2 kg) | 73.2 | 73.2 | 36.6 | 37 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 3 años (14.3 kg) | 85.8 | 85.8 | 42.9 | 43 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 4 años (16.3 kg) | 97.8 | 97.8 | 48.9 | 49 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 5 años (18.3 kg) | 109.8 | 109.8 | 54.9 | 55 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 6 años (20.5 kg) | 123 | 123 | 61.5 | 62 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 8 años (25.6 kg) | 153.6 | 153.6 | 76.8 | 77 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 10 años (32 kg) | 192 | 192 | 96 | 96 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 12 años (40 kg) | 240 | 240 | 120 | 120 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 14 años (50 kg) | 300 | 300 | 150 | 150 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 16 años (58 kg) | 348 | 348 | 174 | 174 mL | ✅  |
| fluconazol | candidiasis-sistemica-iv | Solución para infusión 2 mg/mL (lista para usar) | 17 años, obeso (95 kg) | 570 | 570 | 285 | 285 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 1 año (9.6 kg) | 0.1 | 0.1 | 0.96 | 1 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 18 meses (10.9 kg) | 0.11 | 0.11 | 1.09 | 1.1 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 2 años (12.2 kg) | 0.12 | 0.12 | 1.22 | 1.2 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 3 años (14.3 kg) | 0.14 | 0.14 | 1.43 | 1.4 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 4 años (16.3 kg) | 0.16 | 0.16 | 1.63 | 1.6 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 5 años (18.3 kg) | 0.18 | 0.18 | 1.83 | 1.8 mL | ✅  |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 6 años (20.5 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 8 años (25.6 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 10 años (32 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 12 años (40 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 14 años (50 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 16 años (58 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| flumazenil | reversion-sedacion | Flumazenil 0.1 mg/mL (100 mcg/mL) | 17 años, obeso (95 kg) | 0.2 | 0.2 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.42 | 0.4 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.51 | 0.5 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.64 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.76 | 0.76 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.86 | 0.9 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 1 año (9.6 kg) | 9.6 | 9.6 | 0.96 | 1 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 18 meses (10.9 kg) | 10.9 | 10.9 | 1.09 | 1.1 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 2 años (12.2 kg) | 12.2 | 12.2 | 1.22 | 1.2 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 3 años (14.3 kg) | 14.3 | 14.3 | 1.43 | 1.4 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 4 años (16.3 kg) | 16.3 | 16.3 | 1.63 | 1.6 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 5 años (18.3 kg) | 18.3 | 18.3 | 1.83 | 1.8 mL | ✅  |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 6 años (20.5 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 8 años (25.6 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 10 años (32 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 12 años (40 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 14 años (50 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 16 años (58 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-iv | Ampolla 10 mg/mL (2 mL) | 17 años, obeso (95 kg) | 20 | 20 | 2 | 2 mL | ✅ tope aplicado |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.42 | 0.4 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.51 | 0.5 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.64 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.76 | 0.76 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.86 | 0.9 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 1 año (9.6 kg) | 9.6 | 9.6 | 0.96 | 1 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 18 meses (10.9 kg) | 10.9 | 10.9 | 1.09 | 1.1 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 2 años (12.2 kg) | 12.2 | 12.2 | 1.22 | 1.2 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 3 años (14.3 kg) | 14.3 | 14.3 | 1.43 | 1.4 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 4 años (16.3 kg) | 16.3 | 16.3 | 1.63 | 1.6 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 5 años (18.3 kg) | 18.3 | 18.3 | 1.83 | 1.8 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 6 años (20.5 kg) | 20.5 | 20.5 | 2.05 | 2.1 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 8 años (25.6 kg) | 25.6 | 25.6 | 2.56 | 2.6 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 10 años (32 kg) | 32 | 32 | 3.2 | 3.2 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 12 años (40 kg) | 40 | 40 | 4 | 4 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 14 años (50 kg) | 50 | 50 | 5 | 5 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 16 años (58 kg) | 58 | 58 | 5.8 | 5.8 mL | ✅  |
| furosemida | edema-vo | Ampolla 10 mg/mL (2 mL) | 17 años, obeso (95 kg) | 80 | 80 | 8 | 8 mL | ✅ tope aplicado |
| furosemida | edema-vo | Tableta 40 mg | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.105 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.19 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.215 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 1 año (9.6 kg) | 9.6 | 9.6 | 0.24 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 18 meses (10.9 kg) | 10.9 | 10.9 | 0.273 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 2 años (12.2 kg) | 12.2 | 12.2 | 0.305 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 0.358 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 0.408 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 0.458 | 0.46 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 0.512 | 0.5 tableta | ✅  |
| furosemida | edema-vo | Tableta 40 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 10 años (32 kg) | 32 | 32 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 12 años (40 kg) | 40 | 40 | 1 | 1 tableta | ✅  |
| furosemida | edema-vo | Tableta 40 mg | 14 años (50 kg) | 50 | 50 | 1.25 | 1.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| furosemida | edema-vo | Tableta 40 mg | 16 años (58 kg) | 58 | 58 | 1.45 | 1.5 tableta | ✅  |
| furosemida | edema-vo | Tableta 40 mg | 17 años, obeso (95 kg) | 80 | 80 | 2 | 2 tableta | ✅ tope aplicado |
| gentamicina | semana-1-bajo-peso | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 3 días, bajo peso (2 kg) (2 kg) | 6 | 6 | 0.6 | 0.6 mL | ✅  |
| gentamicina | semana-1-peso-normal | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 5 días (3.2 kg) (3.2 kg) | 16 | 16 | 1.6 | 1.6 mL | ✅  |
| gentamicina | semanas-2-4 | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 15 días (3.6 kg) (3.6 kg) | 27 | 27 | 2.7 | 2.7 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 1 mes (4.2 kg) | 10.5 | 10.5 | 1.05 | 1.05 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 2 meses (5.1 kg) | 12.75 | 12.75 | 1.275 | 1.3 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 4 meses (6.4 kg) | 16 | 16 | 1.6 | 1.6 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 6 meses (7.6 kg) | 19 | 19 | 1.9 | 1.9 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 9 meses (8.6 kg) | 21.5 | 21.5 | 2.15 | 2.15 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 1 año (9.6 kg) | 24 | 24 | 2.4 | 2.4 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 18 meses (10.9 kg) | 27.25 | 27.25 | 2.725 | 2.75 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 2 años (12.2 kg) | 30.5 | 30.5 | 3.05 | 3.05 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 3 años (14.3 kg) | 35.75 | 35.75 | 3.575 | 3.6 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 4 años (16.3 kg) | 40.75 | 40.75 | 4.075 | 4.1 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 5 años (18.3 kg) | 45.75 | 45.75 | 4.575 | 4.6 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 1 mes (4.2 kg) | 10.5 | 10.5 | 0.263 | 0.25 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 2 meses (5.1 kg) | 12.75 | 12.75 | 0.319 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 4 meses (6.4 kg) | 16 | 16 | 0.4 | 0.4 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 6 meses (7.6 kg) | 19 | 19 | 0.475 | 0.47 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 9 meses (8.6 kg) | 21.5 | 21.5 | 0.537 | 0.55 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 1 año (9.6 kg) | 24 | 24 | 0.6 | 0.6 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 18 meses (10.9 kg) | 27.25 | 27.25 | 0.681 | 0.7 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 2 años (12.2 kg) | 30.5 | 30.5 | 0.762 | 0.75 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 3 años (14.3 kg) | 35.75 | 35.75 | 0.894 | 0.9 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 4 años (16.3 kg) | 40.75 | 40.75 | 1.019 | 1 mL | ✅  |
| gentamicina | ninos-menores-5-anos | Gentamicina 40 mg/mL (ampolla) | 5 años (18.3 kg) | 45.75 | 45.75 | 1.144 | 1.15 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 6 años (20.5 kg) | 41 | 41 | 4.1 | 4.1 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 8 años (25.6 kg) | 51.2 | 51.2 | 5.12 | 5.1 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 10 años (32 kg) | 64 | 64 | 6.4 | 6.4 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 10 mg/mL (vial 20 mg/2 mL, o vial 80 mg/2 mL diluido a 8 mL con agua estéril) | 12 años (40 kg) | 80 | 80 | 8 | 8 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 40 mg/mL (ampolla) | 6 años (20.5 kg) | 41 | 41 | 1.025 | 1.05 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 40 mg/mL (ampolla) | 8 años (25.6 kg) | 51.2 | 51.2 | 1.28 | 1.3 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 40 mg/mL (ampolla) | 10 años (32 kg) | 64 | 64 | 1.6 | 1.6 mL | ✅  |
| gentamicina | ninos-mayores-5-anos | Gentamicina 40 mg/mL (ampolla) | 12 años (40 kg) | 80 | 80 | 2 | 2 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 1 mes (4.2 kg) | 121.8 | 121.8 | 1.218 | 1.2 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 2 meses (5.1 kg) | 147.9 | 147.9 | 1.479 | 1.5 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 4 meses (6.4 kg) | 185.6 | 185.6 | 1.856 | 1.9 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 6 meses (7.6 kg) | 220.4 | 220.4 | 2.204 | 2.2 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 9 meses (8.6 kg) | 249.4 | 249.4 | 2.494 | 2.5 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 1 año (9.6 kg) | 278.4 | 278.4 | 2.784 | 2.8 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 18 meses (10.9 kg) | 316.1 | 316.1 | 3.161 | 3.2 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 2 años (12.2 kg) | 353.8 | 353.8 | 3.538 | 3.5 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 3 años (14.3 kg) | 414.7 | 414.7 | 4.147 | 4.1 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 4 años (16.3 kg) | 472.7 | 472.7 | 4.727 | 4.7 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 5 años (18.3 kg) | 530.7 | 530.7 | 5.307 | 5.3 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 6 años (20.5 kg) | 594.5 | 594.5 | 5.945 | 5.9 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 8 años (25.6 kg) | 742.4 | 742.4 | 7.424 | 7.4 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 10 años (32 kg) | 928 | 928 | 9.28 | 9.3 mL | ✅  |
| gluconato-calcio | ninos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 12 años (40 kg) | 1160 | 1160 | 11.6 | 11.6 mL | ✅  |
| gluconato-calcio | neonatos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 3 días, bajo peso (2 kg) (2 kg) | 200 | 200 | 2 | 2 mL | ✅  |
| gluconato-calcio | neonatos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 5 días (3.2 kg) (3.2 kg) | 320 | 320 | 3.2 | 3.2 mL | ✅  |
| gluconato-calcio | neonatos-bolo | Gluconato de calcio 10 % (100 mg/mL) | 15 días (3.6 kg) (3.6 kg) | 360 | 360 | 3.6 | 3.6 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 1 mes (4.2 kg) | 2100 | 2100 | 21 | 21 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 2 meses (5.1 kg) | 2550 | 2550 | 25.5 | 26 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 4 meses (6.4 kg) | 3200 | 3200 | 32 | 32 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 6 meses (7.6 kg) | 3800 | 3800 | 38 | 38 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 9 meses (8.6 kg) | 4300 | 4300 | 43 | 43 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 1 año (9.6 kg) | 4800 | 4800 | 48 | 48 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 18 meses (10.9 kg) | 5450 | 5450 | 54.5 | 55 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 2 años (12.2 kg) | 6100 | 6100 | 61 | 61 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 3 años (14.3 kg) | 7150 | 7150 | 71.5 | 72 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 4 años (16.3 kg) | 8150 | 8150 | 81.5 | 82 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 5 años (18.3 kg) | 9150 | 9150 | 91.5 | 92 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 6 años (20.5 kg) | 10250 | 10250 | 102.5 | 103 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 8 años (25.6 kg) | 12800 | 12800 | 128 | 128 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 10 años (32 kg) | 16000 | 16000 | 160 | 160 mL | ✅  |
| glucosa | hipoglucemia | Dextrosa al 10 % (100 mg/mL) | 12 años (40 kg) | 20000 | 20000 | 200 | 200 mL | ✅  |
| glucosa | hipoglucemia-neonatal | Dextrosa al 10 % (100 mg/mL) | 3 días, bajo peso (2 kg) (2 kg) | 400 | 400 | 4 | 4 mL | ✅  |
| glucosa | hipoglucemia-neonatal | Dextrosa al 10 % (100 mg/mL) | 5 días (3.2 kg) (3.2 kg) | 640 | 640 | 6.4 | 6.4 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| glucosa | hipoglucemia-neonatal | Dextrosa al 10 % (100 mg/mL) | 15 días (3.6 kg) (3.6 kg) | 720 | 720 | 7.2 | 7 mL | ✅  |
| griseofulvina | tinas-13-22-kg | Tableta 250 mg (microsize) | 3 años (14.3 kg) | 125 | 125 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-13-22-kg | Tableta 250 mg (microsize) | 4 años (16.3 kg) | 125 | 125 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-13-22-kg | Tableta 250 mg (microsize) | 5 años (18.3 kg) | 125 | 125 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-13-22-kg | Tableta 250 mg (microsize) | 6 años (20.5 kg) | 125 | 125 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-13-22-kg | Tableta 500 mg (microsize) | 3 años (14.3 kg) | 125 | 125 | 0.25 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| griseofulvina | tinas-13-22-kg | Tableta 500 mg (microsize) | 4 años (16.3 kg) | 125 | 125 | 0.25 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| griseofulvina | tinas-13-22-kg | Tableta 500 mg (microsize) | 5 años (18.3 kg) | 125 | 125 | 0.25 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| griseofulvina | tinas-13-22-kg | Tableta 500 mg (microsize) | 6 años (20.5 kg) | 125 | 125 | 0.25 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 8 años (25.6 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 10 años (32 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 12 años (40 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 14 años (50 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 16 años (58 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 250 mg (microsize) | 17 años, obeso (95 kg) | 250 | 250 | 1 | 1 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 8 años (25.6 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 10 años (32 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 12 años (40 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 14 años (50 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 16 años (58 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| griseofulvina | tinas-22-kg-o-mas | Tableta 500 mg (microsize) | 17 años, obeso (95 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅  |
| hidroclorotiazida | menores-6-meses | Tableta 12.5 mg | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.168 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | menores-6-meses | Tableta 12.5 mg | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.204 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | menores-6-meses | Tableta 12.5 mg | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | menores-6-meses | Tableta 25 mg | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | menores-6-meses | Tableta 25 mg | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | menores-6-meses | Tableta 25 mg | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 12.5 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.304 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 12.5 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.344 | 0.34 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 12.5 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.384 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 12.5 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.436 | 0.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 12.5 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.488 | 0.49 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 25 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 25 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 25 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 25 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 6-meses-2-anos | Tableta 25 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.572 | 0.57 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.652 | 0.65 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.732 | 0.73 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.82 | 0.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 1.024 | 1 tableta | ✅  |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 10 años (32 kg) | 16 | 16 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 12.5 mg | 12 años (40 kg) | 20 | 20 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 10 años (32 kg) | 16 | 16 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroclorotiazida | 2-12-anos | Tableta 25 mg | 12 años (40 kg) | 20 | 20 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 mes (4.2 kg) | 0.84 | 0.84 | 0.017 | 0.02 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 meses (5.1 kg) | 1.02 | 1.02 | 0.02 | 0.02 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 meses (6.4 kg) | 1.28 | 1.28 | 0.026 | 0.03 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 meses (7.6 kg) | 1.52 | 1.52 | 0.03 | 0.03 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 9 meses (8.6 kg) | 1.72 | 1.72 | 0.034 | 0.03 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 año (9.6 kg) | 1.92 | 1.92 | 0.038 | 0.04 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 18 meses (10.9 kg) | 2.18 | 2.18 | 0.044 | 0.04 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 años (12.2 kg) | 2.44 | 2.44 | 0.049 | 0.05 mL | ✅  |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 3 años (14.3 kg) | 2.86 | 2.86 | 0.057 | 0.06 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 años (16.3 kg) | 3.26 | 3.26 | 0.065 | 0.07 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 5 años (18.3 kg) | 3.66 | 3.66 | 0.073 | 0.07 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 años (20.5 kg) | 4.1 | 4.1 | 0.082 | 0.08 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 8 años (25.6 kg) | 5.12 | 5.12 | 0.102 | 0.1 mL | ✅  |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 10 años (32 kg) | 6.4 | 6.4 | 0.128 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | insuficiencia-suprarrenal | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 12 años (40 kg) | 8 | 8 | 0.16 | 0.16 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 mes (4.2 kg) | 16.8 | 16.8 | 0.336 | 0.35 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 meses (5.1 kg) | 20.4 | 20.4 | 0.408 | 0.4 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 meses (6.4 kg) | 25.6 | 25.6 | 0.512 | 0.5 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 meses (7.6 kg) | 30.4 | 30.4 | 0.608 | 0.6 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 9 meses (8.6 kg) | 34.4 | 34.4 | 0.688 | 0.7 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 año (9.6 kg) | 38.4 | 38.4 | 0.768 | 0.75 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 18 meses (10.9 kg) | 43.6 | 43.6 | 0.872 | 0.85 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 años (12.2 kg) | 48.8 | 48.8 | 0.976 | 1 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 3 años (14.3 kg) | 57.2 | 57.2 | 1.144 | 1.15 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 años (16.3 kg) | 65.2 | 65.2 | 1.304 | 1.3 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 5 años (18.3 kg) | 73.2 | 73.2 | 1.464 | 1.45 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 años (20.5 kg) | 82 | 82 | 1.64 | 1.65 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 8 años (25.6 kg) | 102.4 | 102.4 | 2.048 | 2.05 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 10 años (32 kg) | 128 | 128 | 2.56 | 2.55 mL | ✅  |
| hidrocortisona | asma-sin-via-oral | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 12 años (40 kg) | 160 | 160 | 3.2 | 3.2 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.042 | 0.04 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.051 | 0.05 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.064 | 0.06 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.076 | 0.08 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.086 | 0.09 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 1 año (9.6 kg) | 4.8 | 4.8 | 0.096 | 0.1 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.109 | 0.11 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 2 años (12.2 kg) | 6.1 | 6.1 | 0.122 | 0.12 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 3 años (14.3 kg) | 7.15 | 7.15 | 0.143 | 0.15 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 4 años (16.3 kg) | 8.15 | 8.15 | 0.163 | 0.16 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 5 años (18.3 kg) | 9.15 | 9.15 | 0.183 | 0.18 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 6 años (20.5 kg) | 10.25 | 10.25 | 0.205 | 0.2 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 8 años (25.6 kg) | 12.8 | 12.8 | 0.256 | 0.25 mL | ✅  |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 10 años (32 kg) | 16 | 16 | 0.32 | 0.32 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidrocortisona | alergia-severa | Frasco 100 mg reconstituido en 2 mL (50 mg/mL) | 12 años (40 kg) | 20 | 20 | 0.4 | 0.4 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 1 mes (4.2 kg) | 2.1 | 2.1 | 1.05 | 1.1 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 2 meses (5.1 kg) | 2.55 | 2.55 | 1.275 | 1.3 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 4 meses (6.4 kg) | 3.2 | 3.2 | 1.6 | 1.6 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 6 meses (7.6 kg) | 3.8 | 3.8 | 1.9 | 1.9 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 9 meses (8.6 kg) | 4.3 | 4.3 | 2.15 | 2.2 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 1 año (9.6 kg) | 4.8 | 4.8 | 2.4 | 2.4 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 18 meses (10.9 kg) | 5.45 | 5.45 | 2.725 | 2.7 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 2 años (12.2 kg) | 6.1 | 6.1 | 3.05 | 3.1 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 3 años (14.3 kg) | 7.15 | 7.15 | 3.575 | 3.6 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 4 años (16.3 kg) | 8.15 | 8.15 | 4.075 | 4.1 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Jarabe 10 mg/5 mL | 5 años (18.3 kg) | 9.15 | 9.15 | 4.575 | 4.6 mL | ✅  |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 1 mes (4.2 kg) | 2.1 | 2.1 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 2 meses (5.1 kg) | 2.55 | 2.55 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 4 meses (6.4 kg) | 3.2 | 3.2 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-menor-6-anos | Tableta 25 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 6 años (20.5 kg) | 10.25 | 10.25 | 5.125 | 5.1 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 8 años (25.6 kg) | 12.8 | 12.8 | 6.4 | 6.4 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 10 años (32 kg) | 16 | 16 | 8 | 8 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 12 años (40 kg) | 20 | 20 | 10 | 10 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 14 años (50 kg) | 25 | 25 | 12.5 | 12.5 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 16 años (58 kg) | 29 | 29 | 14.5 | 14.5 mL | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Jarabe 10 mg/5 mL | 17 años, obeso (95 kg) | 33.33 | 33.33 | 16.667 | 16.6 mL | ✅ tope aplicado |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 0.512 | 0.5 tableta | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 10 años (32 kg) | 16 | 16 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 12 años (40 kg) | 20 | 20 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 14 años (50 kg) | 25 | 25 | 1 | 1 tableta | ✅  |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 16 años (58 kg) | 29 | 29 | 1.16 | 1.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hidroxicina | prurito-6-anos-o-mas | Tableta 25 mg | 17 años, obeso (95 kg) | 33.33 | 33.33 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hierro | anemia-menor-6-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 1 mes (4.2 kg) | 12.6 | 12.6 | 10.08 | 10 gota | ✅  |
| hierro | anemia-menor-6-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 2 meses (5.1 kg) | 15.3 | 15.3 | 12.24 | 12 gota | ✅  |
| hierro | anemia-menor-6-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 4 meses (6.4 kg) | 19.2 | 19.2 | 15.36 | 15 gota | ✅  |
| hierro | anemia-menor-6-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 1 mes (4.2 kg) | 12.6 | 12.6 | 5.04 | 5 gota | ✅  |
| hierro | anemia-menor-6-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 2 meses (5.1 kg) | 15.3 | 15.3 | 6.12 | 6 gota | ✅  |
| hierro | anemia-menor-6-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 4 meses (6.4 kg) | 19.2 | 19.2 | 7.68 | 8 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 6 meses (7.6 kg) | 22.8 | 22.8 | 18.24 | 18 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 9 meses (8.6 kg) | 25.8 | 25.8 | 20.64 | 21 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 1 año (9.6 kg) | 28.8 | 28.8 | 23.04 | 23 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 18 meses (10.9 kg) | 32.7 | 32.7 | 26.16 | 26 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso gotas (1 gota = 1.25 mg de hierro elemental) | 2 años (12.2 kg) | 36.6 | 36.6 | 29.28 | 29 gota | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 6 meses (7.6 kg) | 22.8 | 22.8 | 9.12 | 9 gota | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 9 meses (8.6 kg) | 25.8 | 25.8 | 10.32 | 10 gota | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 1 año (9.6 kg) | 28.8 | 28.8 | 11.52 | 12 gota | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 18 meses (10.9 kg) | 32.7 | 32.7 | 13.08 | 13 gota | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico gotas (1 gota = 2.5 mg de hierro elemental) | 2 años (12.2 kg) | 36.6 | 36.6 | 14.64 | 15 gota | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 6 meses (7.6 kg) | 22.8 | 22.8 | 7.6 | 7.5 mL | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 9 meses (8.6 kg) | 25.8 | 25.8 | 8.6 | 8.5 mL | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 1 año (9.6 kg) | 28.8 | 28.8 | 9.6 | 9.5 mL | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 18 meses (10.9 kg) | 32.7 | 32.7 | 10.9 | 11 mL | ✅  |
| hierro | anemia-6-35-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 2 años (12.2 kg) | 36.6 | 36.6 | 12.2 | 12 mL | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 6 meses (7.6 kg) | 22.8 | 22.8 | 2.28 | 2.28 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 9 meses (8.6 kg) | 25.8 | 25.8 | 2.58 | 2.5 mL | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 1 año (9.6 kg) | 28.8 | 28.8 | 2.88 | 3 mL | ✅  |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 18 meses (10.9 kg) | 32.7 | 32.7 | 3.27 | 3.27 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| hierro | anemia-6-35-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 2 años (12.2 kg) | 36.6 | 36.6 | 3.66 | 3.5 mL | ✅  |
| hierro | anemia-36-59-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 3 años (14.3 kg) | 42.9 | 42.9 | 14.3 | 14.5 mL | ✅  |
| hierro | anemia-36-59-meses | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 4 años (16.3 kg) | 48.9 | 48.9 | 16.3 | 16.5 mL | ✅  |
| hierro | anemia-36-59-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 3 años (14.3 kg) | 42.9 | 42.9 | 4.29 | 4.5 mL | ✅  |
| hierro | anemia-36-59-meses | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 4 años (16.3 kg) | 48.9 | 48.9 | 4.89 | 5 mL | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 5 años (18.3 kg) | 54.9 | 54.9 | 18.3 | 18.5 mL | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 6 años (20.5 kg) | 61.5 | 61.5 | 20.5 | 20.5 mL | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 8 años (25.6 kg) | 76.8 | 76.8 | 25.6 | 25.5 mL | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso jarabe 15 mg/5 mL de hierro elemental | 10 años (32 kg) | 96 | 96 | 32 | 32 mL | ✅  |
| hierro | anemia-5-11-anos | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 5 años (18.3 kg) | 54.9 | 54.9 | 5.49 | 5.5 mL | ✅  |
| hierro | anemia-5-11-anos | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 6 años (20.5 kg) | 61.5 | 61.5 | 6.15 | 6 mL | ✅  |
| hierro | anemia-5-11-anos | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 8 años (25.6 kg) | 76.8 | 76.8 | 7.68 | 7.5 mL | ✅  |
| hierro | anemia-5-11-anos | Complejo polimaltosado férrico jarabe 50 mg/5 mL de hierro elemental | 10 años (32 kg) | 96 | 96 | 9.6 | 9.5 mL | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso tableta 60 mg de hierro elemental | 5 años (18.3 kg) | 54.9 | 54.9 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hierro | anemia-5-11-anos | Sulfato ferroso tableta 60 mg de hierro elemental | 6 años (20.5 kg) | 61.5 | 61.5 | 1.025 | 1 tableta | ✅  |
| hierro | anemia-5-11-anos | Sulfato ferroso tableta 60 mg de hierro elemental | 8 años (25.6 kg) | 76.8 | 76.8 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| hierro | anemia-5-11-anos | Sulfato ferroso tableta 60 mg de hierro elemental | 10 años (32 kg) | 96 | 96 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 3.8 | 3.8 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 4.3 | 4.3 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 4.8 | 4.8 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 5.45 | 5.5 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 6.1 | 6.1 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 7.15 | 7.2 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 8.15 | 8.2 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 9.15 | 9.2 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 10.25 | 10.3 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 12.8 | 12.8 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Suspensión 100 mg/5 mL | 10 años (32 kg) | 320 | 320 | 16 | 16 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 6 meses (7.6 kg) | 76 | 76 | 1.9 | 1.9 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 9 meses (8.6 kg) | 86 | 86 | 2.15 | 2.2 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 1 año (9.6 kg) | 96 | 96 | 2.4 | 2.4 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 18 meses (10.9 kg) | 109 | 109 | 2.725 | 2.7 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 2 años (12.2 kg) | 122 | 122 | 3.05 | 3.1 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 3 años (14.3 kg) | 143 | 143 | 3.575 | 3.6 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 4 años (16.3 kg) | 163 | 163 | 4.075 | 4.1 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 5 años (18.3 kg) | 183 | 183 | 4.575 | 4.6 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 6 años (20.5 kg) | 205 | 205 | 5.125 | 5.1 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 8 años (25.6 kg) | 256 | 256 | 6.4 | 6.4 mL | ✅  |
| ibuprofeno | fiebre-dolor-vo | Gotas 40 mg/mL | 10 años (32 kg) | 320 | 320 | 8 | 8 mL | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 1 mes (4.2 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 2 meses (5.1 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 4 meses (6.4 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 6 meses (7.6 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 9 meses (8.6 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 1 año (9.6 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 18 meses (10.9 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 2 años (12.2 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 3 años (14.3 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 4 años (16.3 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| ipratropio | crisis-hasta-5 | Inhalador 0.02 mg (20 µg) por puff, con aerocámara | 5 años (18.3 kg) | 0.08 | 0.08 | 4 | 4 puff | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 4.2 | 4.2 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 5.1 | 5.1 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 6.4 | 6.4 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 7.6 | 7.6 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 8.6 | 8.6 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 9.6 | 9.6 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 10.9 | 10.9 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 12.2 | 12.2 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 14.3 | 14.3 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 16.3 | 16.3 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 18.3 | 18.3 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 20.5 | 20.5 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 25.6 | 25.6 mL | ✅  |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 10 años (32 kg) | 300 | 300 | 30 | 30 mL | ✅ tope aplicado |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 12 años (40 kg) | 300 | 300 | 30 | 30 mL | ✅ tope aplicado |
| isoniazida | tb-sensible | Solución oral 50 mg/5 mL | 14 años (50 kg) | 300 | 300 | 30 | 30 mL | ✅ tope aplicado |
| isoniazida | tb-sensible | Tableta 100 mg | 1 mes (4.2 kg) | 42 | 42 | 0.42 | 0.42 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 2 meses (5.1 kg) | 51 | 51 | 0.51 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 4 meses (6.4 kg) | 64 | 64 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 6 meses (7.6 kg) | 76 | 76 | 0.76 | 0.76 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 9 meses (8.6 kg) | 86 | 86 | 0.86 | 0.86 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 1 año (9.6 kg) | 96 | 96 | 0.96 | 1 tableta | ✅  |
| isoniazida | tb-sensible | Tableta 100 mg | 18 meses (10.9 kg) | 109 | 109 | 1.09 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 2 años (12.2 kg) | 122 | 122 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 3 años (14.3 kg) | 143 | 143 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 4 años (16.3 kg) | 163 | 163 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 5 años (18.3 kg) | 183 | 183 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 6 años (20.5 kg) | 205 | 205 | 2.05 | 2 tableta | ✅  |
| isoniazida | tb-sensible | Tableta 100 mg | 8 años (25.6 kg) | 256 | 256 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | tb-sensible | Tableta 100 mg | 10 años (32 kg) | 300 | 300 | 3 | 3 tableta | ✅ tope aplicado |
| isoniazida | tb-sensible | Tableta 100 mg | 12 años (40 kg) | 300 | 300 | 3 | 3 tableta | ✅ tope aplicado |
| isoniazida | tb-sensible | Tableta 100 mg | 14 años (50 kg) | 300 | 300 | 3 | 3 tableta | ✅ tope aplicado |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 4.2 | 4.2 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 5.1 | 5.1 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 6.4 | 6.4 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 7.6 | 7.6 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 8.6 | 8.6 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 9.6 | 9.6 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 10.9 | 10.9 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 12.2 | 12.2 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 14.3 | 14.3 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 16.3 | 16.3 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 18.3 | 18.3 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 20.5 | 20.5 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 25.6 | 25.6 mL | ✅  |
| isoniazida | preventiva-menores-10 | Solución oral 50 mg/5 mL | 10 años (32 kg) | 300 | 300 | 30 | 30 mL | ✅ tope aplicado |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 1 mes (4.2 kg) | 42 | 42 | 0.42 | 0.42 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 2 meses (5.1 kg) | 51 | 51 | 0.51 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 4 meses (6.4 kg) | 64 | 64 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 6 meses (7.6 kg) | 76 | 76 | 0.76 | 0.76 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 9 meses (8.6 kg) | 86 | 86 | 0.86 | 0.86 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 1 año (9.6 kg) | 96 | 96 | 0.96 | 1 tableta | ✅  |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 18 meses (10.9 kg) | 109 | 109 | 1.09 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 2 años (12.2 kg) | 122 | 122 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 3 años (14.3 kg) | 143 | 143 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 4 años (16.3 kg) | 163 | 163 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 5 años (18.3 kg) | 183 | 183 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 6 años (20.5 kg) | 205 | 205 | 2.05 | 2 tableta | ✅  |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 8 años (25.6 kg) | 256 | 256 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-menores-10 | Tableta 100 mg | 10 años (32 kg) | 300 | 300 | 3 | 3 tableta | ✅ tope aplicado |
| isoniazida | preventiva-10-o-mas | Solución oral 50 mg/5 mL | 12 años (40 kg) | 200 | 200 | 20 | 20 mL | ✅  |
| isoniazida | preventiva-10-o-mas | Solución oral 50 mg/5 mL | 14 años (50 kg) | 250 | 250 | 25 | 25 mL | ✅  |
| isoniazida | preventiva-10-o-mas | Solución oral 50 mg/5 mL | 16 años (58 kg) | 290 | 290 | 29 | 29 mL | ✅  |
| isoniazida | preventiva-10-o-mas | Solución oral 50 mg/5 mL | 17 años, obeso (95 kg) | 300 | 300 | 30 | 30 mL | ✅ tope aplicado |
| isoniazida | preventiva-10-o-mas | Tableta 100 mg | 12 años (40 kg) | 200 | 200 | 2 | 2 tableta | ✅  |
| isoniazida | preventiva-10-o-mas | Tableta 100 mg | 14 años (50 kg) | 250 | 250 | 2.5 | 2.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| isoniazida | preventiva-10-o-mas | Tableta 100 mg | 16 años (58 kg) | 290 | 290 | 2.9 | 3 tableta | ✅  |
| isoniazida | preventiva-10-o-mas | Tableta 100 mg | 17 años, obeso (95 kg) | 300 | 300 | 3 | 3 tableta | ✅ tope aplicado |
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 4 años (16.3 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 5 años (18.3 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 6 años (20.5 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-25-35-kg | Tableta 6 mg | 8 años (25.6 kg) | 6 | 6 | 1 | 1 tableta | ✅  |
| ivermectina | estrongiloidiasis-25-35-kg | Tableta 6 mg | 10 años (32 kg) | 6 | 6 | 1 | 1 tableta | ✅  |
| ivermectina | estrongiloidiasis-36-50-kg | Tableta 6 mg | 12 años (40 kg) | 9 | 9 | 1.5 | 1.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-36-50-kg | Tableta 6 mg | 14 años (50 kg) | 9 | 9 | 1.5 | 1.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-51-65-kg | Tableta 6 mg | 16 años (58 kg) | 12 | 12 | 2 | 2 tableta | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.084 | 0.08 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.102 | 0.1 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.128 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.152 | 0.15 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.172 | 0.17 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 1 año (9.6 kg) | 9.6 | 9.6 | 0.192 | 0.2 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 18 meses (10.9 kg) | 10.9 | 10.9 | 0.218 | 0.22 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 2 años (12.2 kg) | 12.2 | 12.2 | 0.244 | 0.25 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 3 años (14.3 kg) | 14.3 | 14.3 | 0.286 | 0.3 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 4 años (16.3 kg) | 16.3 | 16.3 | 0.326 | 0.33 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 5 años (18.3 kg) | 18.3 | 18.3 | 0.366 | 0.35 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 6 años (20.5 kg) | 20.5 | 20.5 | 0.41 | 0.4 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 8 años (25.6 kg) | 25.6 | 25.6 | 0.512 | 0.5 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 10 años (32 kg) | 32 | 32 | 0.64 | 0.65 mL | ✅  |
| ketamina | induccion-iv | Ketamina 50 mg/mL | 12 años (40 kg) | 40 | 40 | 0.8 | 0.8 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 1 mes (4.2 kg) | 27.3 | 27.3 | 0.546 | 0.55 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 2 meses (5.1 kg) | 33.15 | 33.15 | 0.663 | 0.65 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 4 meses (6.4 kg) | 41.6 | 41.6 | 0.832 | 0.85 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 6 meses (7.6 kg) | 49.4 | 49.4 | 0.988 | 1 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 9 meses (8.6 kg) | 55.9 | 55.9 | 1.118 | 1.1 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 1 año (9.6 kg) | 62.4 | 62.4 | 1.248 | 1.25 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 18 meses (10.9 kg) | 70.85 | 70.85 | 1.417 | 1.4 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 2 años (12.2 kg) | 79.3 | 79.3 | 1.586 | 1.6 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 3 años (14.3 kg) | 92.95 | 92.95 | 1.859 | 1.85 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 4 años (16.3 kg) | 105.95 | 105.95 | 2.119 | 2.1 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 5 años (18.3 kg) | 118.95 | 118.95 | 2.379 | 2.4 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 6 años (20.5 kg) | 133.25 | 133.25 | 2.665 | 2.65 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 8 años (25.6 kg) | 166.4 | 166.4 | 3.328 | 3.35 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 10 años (32 kg) | 208 | 208 | 4.16 | 4.15 mL | ✅  |
| ketamina | induccion-im | Ketamina 50 mg/mL | 12 años (40 kg) | 260 | 260 | 5.2 | 5.2 mL | ✅  |
| levetiracetam | focal-1-6-meses | Solución oral 100 mg/mL | 1 mes (4.2 kg) | 29.4 | 29.4 | 0.294 | 0.3 mL | ✅  |
| levetiracetam | focal-1-6-meses | Solución oral 100 mg/mL | 2 meses (5.1 kg) | 35.7 | 35.7 | 0.357 | 0.36 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Solución oral 100 mg/mL | 4 meses (6.4 kg) | 44.8 | 44.8 | 0.448 | 0.45 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 500 mg | 1 mes (4.2 kg) | 29.4 | 29.4 | 0.059 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 500 mg | 2 meses (5.1 kg) | 35.7 | 35.7 | 0.071 | 0.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 500 mg | 4 meses (6.4 kg) | 44.8 | 44.8 | 0.09 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 1000 mg | 1 mes (4.2 kg) | 29.4 | 29.4 | 0.029 | 0.03 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 1000 mg | 2 meses (5.1 kg) | 35.7 | 35.7 | 0.036 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-1-6-meses | Tableta 1000 mg | 4 meses (6.4 kg) | 44.8 | 44.8 | 0.045 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 6 meses (7.6 kg) | 76 | 76 | 0.76 | 0.76 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 9 meses (8.6 kg) | 86 | 86 | 0.86 | 0.9 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 1 año (9.6 kg) | 96 | 96 | 0.96 | 1 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 18 meses (10.9 kg) | 109 | 109 | 1.09 | 1.1 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 2 años (12.2 kg) | 122 | 122 | 1.22 | 1.2 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 3 años (14.3 kg) | 143 | 143 | 1.43 | 1.4 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Solución oral 100 mg/mL | 4 años (16.3 kg) | 163 | 163 | 1.63 | 1.6 mL | ✅  |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 6 meses (7.6 kg) | 76 | 76 | 0.076 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 9 meses (8.6 kg) | 86 | 86 | 0.086 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 1 año (9.6 kg) | 96 | 96 | 0.096 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 18 meses (10.9 kg) | 109 | 109 | 0.109 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 2 años (12.2 kg) | 122 | 122 | 0.122 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 3 años (14.3 kg) | 143 | 143 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-6-meses-4-anos | Tableta 1000 mg | 4 años (16.3 kg) | 163 | 163 | 0.163 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 5 años (18.3 kg) | 183 | 183 | 1.83 | 1.8 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 6 años (20.5 kg) | 205 | 205 | 2.05 | 2.1 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 8 años (25.6 kg) | 256 | 256 | 2.56 | 2.6 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 10 años (32 kg) | 320 | 320 | 3.2 | 3.2 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 12 años (40 kg) | 400 | 400 | 4 | 4 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 14 años (50 kg) | 500 | 500 | 5 | 5 mL | ✅  |
| levetiracetam | focal-4-16-anos | Solución oral 100 mg/mL | 16 años (58 kg) | 580 | 580 | 5.8 | 5.8 mL | ✅  |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| levetiracetam | focal-4-16-anos | Tableta 500 mg | 16 años (58 kg) | 580 | 580 | 1.16 | 1.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 5 años (18.3 kg) | 183 | 183 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 6 años (20.5 kg) | 205 | 205 | 0.205 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 8 años (25.6 kg) | 256 | 256 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 10 años (32 kg) | 320 | 320 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 12 años (40 kg) | 400 | 400 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 14 años (50 kg) | 500 | 500 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levetiracetam | focal-4-16-anos | Tableta 1000 mg | 16 años (58 kg) | 580 | 580 | 0.58 | 0.58 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 6 meses (7.6 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 9 meses (8.6 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 1 año (9.6 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 18 meses (10.9 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 2 años (12.2 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 3 años (14.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 4 años (16.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-meses-5-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 5 años (18.3 kg) | 1.25 | 1.25 | 2.5 | 2.5 mL | ✅  |
| levocetirizina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 6 años (20.5 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| levocetirizina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 8 años (25.6 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| levocetirizina | 6-11-anos | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 10 años (32 kg) | 2.5 | 2.5 | 5 | 5 mL | ✅  |
| levocetirizina | 6-11-anos | Tableta ranurada 5 mg | 6 años (20.5 kg) | 2.5 | 2.5 | 0.5 | 0.5 tableta | ✅  |
| levocetirizina | 6-11-anos | Tableta ranurada 5 mg | 8 años (25.6 kg) | 2.5 | 2.5 | 0.5 | 0.5 tableta | ✅  |
| levocetirizina | 6-11-anos | Tableta ranurada 5 mg | 10 años (32 kg) | 2.5 | 2.5 | 0.5 | 0.5 tableta | ✅  |
| levocetirizina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 12 años (40 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| levocetirizina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 14 años (50 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| levocetirizina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 16 años (58 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| levocetirizina | 12-anos-o-mas | Solución oral 2.5 mg/5 mL (0.5 mg/mL) | 17 años, obeso (95 kg) | 5 | 5 | 10 | 10 mL | ✅  |
| levocetirizina | 12-anos-o-mas | Tableta ranurada 5 mg | 12 años (40 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| levocetirizina | 12-anos-o-mas | Tableta ranurada 5 mg | 14 años (50 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| levocetirizina | 12-anos-o-mas | Tableta ranurada 5 mg | 16 años (58 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| levocetirizina | 12-anos-o-mas | Tableta ranurada 5 mg | 17 años, obeso (95 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 50 mcg | 3 días, bajo peso (2 kg) (2 kg) | 20 | 20 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 50 mcg | 5 días (3.2 kg) (3.2 kg) | 32 | 32 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 50 mcg | 15 días (3.6 kg) (3.6 kg) | 36 | 36 | 0.72 | 0.72 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 50 mcg | 1 mes (4.2 kg) | 42 | 42 | 0.84 | 0.84 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 50 mcg | 2 meses (5.1 kg) | 51 | 51 | 1.02 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 75 mcg | 3 días, bajo peso (2 kg) (2 kg) | 20 | 20 | 0.267 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 75 mcg | 5 días (3.2 kg) (3.2 kg) | 32 | 32 | 0.427 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 75 mcg | 15 días (3.6 kg) (3.6 kg) | 36 | 36 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 75 mcg | 1 mes (4.2 kg) | 42 | 42 | 0.56 | 0.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 75 mcg | 2 meses (5.1 kg) | 51 | 51 | 0.68 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 100 mcg | 3 días, bajo peso (2 kg) (2 kg) | 20 | 20 | 0.2 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 100 mcg | 5 días (3.2 kg) (3.2 kg) | 32 | 32 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 100 mcg | 15 días (3.6 kg) (3.6 kg) | 36 | 36 | 0.36 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 100 mcg | 1 mes (4.2 kg) | 42 | 42 | 0.42 | 0.42 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-0-3-meses | Tableta 100 mcg | 2 meses (5.1 kg) | 51 | 51 | 0.51 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-3-6-meses | Tableta 50 mcg | 4 meses (6.4 kg) | 51.2 | 51.2 | 1.024 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-3-6-meses | Tableta 75 mcg | 4 meses (6.4 kg) | 51.2 | 51.2 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-3-6-meses | Tableta 100 mcg | 4 meses (6.4 kg) | 51.2 | 51.2 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 50 mcg | 6 meses (7.6 kg) | 45.6 | 45.6 | 0.912 | 0.91 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 50 mcg | 9 meses (8.6 kg) | 51.6 | 51.6 | 1.032 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 75 mcg | 6 meses (7.6 kg) | 45.6 | 45.6 | 0.608 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 75 mcg | 9 meses (8.6 kg) | 51.6 | 51.6 | 0.688 | 0.69 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 100 mcg | 6 meses (7.6 kg) | 45.6 | 45.6 | 0.456 | 0.46 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-meses | Tableta 100 mcg | 9 meses (8.6 kg) | 51.6 | 51.6 | 0.516 | 0.52 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 1 año (9.6 kg) | 48 | 48 | 0.96 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 18 meses (10.9 kg) | 54.5 | 54.5 | 1.09 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 2 años (12.2 kg) | 61 | 61 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 3 años (14.3 kg) | 71.5 | 71.5 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 4 años (16.3 kg) | 81.5 | 81.5 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 50 mcg | 5 años (18.3 kg) | 91.5 | 91.5 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 1 año (9.6 kg) | 48 | 48 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.727 | 0.73 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 2 años (12.2 kg) | 61 | 61 | 0.813 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 3 años (14.3 kg) | 71.5 | 71.5 | 0.953 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 4 años (16.3 kg) | 81.5 | 81.5 | 1.087 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 75 mcg | 5 años (18.3 kg) | 91.5 | 91.5 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 1 año (9.6 kg) | 48 | 48 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 2 años (12.2 kg) | 61 | 61 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 3 años (14.3 kg) | 71.5 | 71.5 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 4 años (16.3 kg) | 81.5 | 81.5 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-1-5-anos | Tableta 100 mcg | 5 años (18.3 kg) | 91.5 | 91.5 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 50 mcg | 6 años (20.5 kg) | 82 | 82 | 1.64 | 1.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 50 mcg | 8 años (25.6 kg) | 102.4 | 102.4 | 2.048 | 2 tableta | ✅  |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 50 mcg | 10 años (32 kg) | 128 | 128 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 50 mcg | 12 años (40 kg) | 160 | 160 | 3.2 | 3.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 75 mcg | 6 años (20.5 kg) | 82 | 82 | 1.093 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 75 mcg | 8 años (25.6 kg) | 102.4 | 102.4 | 1.365 | 1.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 75 mcg | 10 años (32 kg) | 128 | 128 | 1.707 | 1.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 75 mcg | 12 años (40 kg) | 160 | 160 | 2.133 | 2.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 100 mcg | 6 años (20.5 kg) | 82 | 82 | 0.82 | 0.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 100 mcg | 8 años (25.6 kg) | 102.4 | 102.4 | 1.024 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 100 mcg | 10 años (32 kg) | 128 | 128 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-6-12-anos | Tableta 100 mcg | 12 años (40 kg) | 160 | 160 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 50 mcg | 14 años (50 kg) | 100 | 100 | 2 | 2 tableta | ✅  |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 50 mcg | 16 años (58 kg) | 116 | 116 | 2.32 | 2.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 50 mcg | 17 años, obeso (95 kg) | 150 | 150 | 3 | 3 tableta | ✅ tope aplicado |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 75 mcg | 14 años (50 kg) | 100 | 100 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 75 mcg | 16 años (58 kg) | 116 | 116 | 1.547 | 1.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 75 mcg | 17 años, obeso (95 kg) | 150 | 150 | 2 | 2 tableta | ✅ tope aplicado |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 100 mcg | 14 años (50 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 100 mcg | 16 años (58 kg) | 116 | 116 | 1.16 | 1.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| levotiroxina | hipotiroidismo-mayores-12-anos | Tableta 100 mcg | 17 años, obeso (95 kg) | 150 | 150 | 1.5 | 1.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 1 mes (4.2 kg) | 18.9 | 18.9 | 0.945 | 0.9 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 2 meses (5.1 kg) | 22.95 | 22.95 | 1.147 | 1.1 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 4 meses (6.4 kg) | 28.8 | 28.8 | 1.44 | 1.4 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 6 meses (7.6 kg) | 34.2 | 34.2 | 1.71 | 1.7 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 9 meses (8.6 kg) | 38.7 | 38.7 | 1.935 | 1.9 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 1 año (9.6 kg) | 43.2 | 43.2 | 2.16 | 2.2 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 18 meses (10.9 kg) | 49.05 | 49.05 | 2.453 | 2.5 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 2 años (12.2 kg) | 54.9 | 54.9 | 2.745 | 2.7 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 3 años (14.3 kg) | 64.35 | 64.35 | 3.218 | 3.2 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 4 años (16.3 kg) | 73.35 | 73.35 | 3.668 | 3.7 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 5 años (18.3 kg) | 82.35 | 82.35 | 4.118 | 4.1 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 6 años (20.5 kg) | 92.25 | 92.25 | 4.612 | 4.6 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 8 años (25.6 kg) | 115.2 | 115.2 | 5.76 | 5.8 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 10 años (32 kg) | 144 | 144 | 7.2 | 7.2 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 12 años (40 kg) | 180 | 180 | 9 | 9 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 14 años (50 kg) | 225 | 225 | 11.25 | 11.3 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 16 años (58 kg) | 261 | 261 | 13.05 | 13.1 mL | ✅  |
| lidocaina | infiltracion-maxima | Lidocaína 2 % sin epinefrina (20 mg/mL) | 17 años, obeso (95 kg) | 300 | 300 | 15 | 15 mL | ✅ tope aplicado |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 2 años (12.2 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 3 años (14.3 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 4 años (16.3 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 5 años (18.3 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 6 años (20.5 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-menos-30-kg | Jarabe 5 mg/5 mL | 8 años (25.6 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| loratadina | alergia-30-kg-o-mas | Jarabe 5 mg/5 mL | 10 años (32 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| loratadina | alergia-30-kg-o-mas | Jarabe 5 mg/5 mL | 12 años (40 kg) | 10 | 10 | 10 | 10 mL | ✅  |
| loratadina | alergia-30-kg-o-mas | Tableta 10 mg | 10 años (32 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| loratadina | alergia-30-kg-o-mas | Tableta 10 mg | 12 años (40 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 10 años (32 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 12 años (40 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 14 años (50 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 16 años (58 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Suspensión 100 mg/5 mL | 17 años, obeso (95 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 2 años (12.2 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 3 años (14.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 4 años (16.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 5 años (18.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 6 años (20.5 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 8 años (25.6 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 10 años (32 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 12 años (40 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 14 años (50 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 16 años (58 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | tres-dias | Tableta 100 mg | 17 años, obeso (95 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 10 años (32 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 12 años (40 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 14 años (50 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 16 años (58 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Suspensión 100 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 2 años (12.2 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 3 años (14.3 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 4 años (16.3 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 5 años (18.3 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 6 años (20.5 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 8 años (25.6 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 10 años (32 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 12 años (40 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 14 años (50 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 16 años (58 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | dosis-unica-500 | Tableta 100 mg | 17 años, obeso (95 kg) | 500 | 500 | 5 | 5 tableta | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 10 años (32 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 12 años (40 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 14 años (50 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 16 años (58 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Suspensión 100 mg/5 mL | 17 años, obeso (95 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 2 años (12.2 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 3 años (14.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 4 años (16.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 5 años (18.3 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 6 años (20.5 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 8 años (25.6 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 10 años (32 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 12 años (40 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 14 años (50 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 16 años (58 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| mebendazol | oxiuros | Tableta 100 mg | 17 años, obeso (95 kg) | 100 | 100 | 1 | 1 tableta | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 14 años (50 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 16 años (58 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| meropenem | piel | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 17 años, obeso (95 kg) | 500 | 500 | 10 | 10 mL | ✅ tope aplicado |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 meses (6.4 kg) | 128 | 128 | 2.56 | 2.6 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 meses (7.6 kg) | 152 | 152 | 3.04 | 3 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 9 meses (8.6 kg) | 172 | 172 | 3.44 | 3.4 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 1 año (9.6 kg) | 192 | 192 | 3.84 | 3.8 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 18 meses (10.9 kg) | 218 | 218 | 4.36 | 4.4 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 2 años (12.2 kg) | 244 | 244 | 4.88 | 4.9 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 3 años (14.3 kg) | 286 | 286 | 5.72 | 5.7 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 años (16.3 kg) | 326 | 326 | 6.52 | 6.5 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 5 años (18.3 kg) | 366 | 366 | 7.32 | 7.3 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 años (20.5 kg) | 410 | 410 | 8.2 | 8.2 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 8 años (25.6 kg) | 512 | 512 | 10.24 | 10.2 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 10 años (32 kg) | 640 | 640 | 12.8 | 12.8 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 12 años (40 kg) | 800 | 800 | 16 | 16 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 14 años (50 kg) | 1000 | 1000 | 20 | 20 mL | ✅  |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 16 años (58 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| meropenem | intraabdominal | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 17 años, obeso (95 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 meses (6.4 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 meses (7.6 kg) | 304 | 304 | 6.08 | 6.1 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 9 meses (8.6 kg) | 344 | 344 | 6.88 | 6.9 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 1 año (9.6 kg) | 384 | 384 | 7.68 | 7.7 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 18 meses (10.9 kg) | 436 | 436 | 8.72 | 8.7 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 2 años (12.2 kg) | 488 | 488 | 9.76 | 9.8 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 3 años (14.3 kg) | 572 | 572 | 11.44 | 11.4 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 4 años (16.3 kg) | 652 | 652 | 13.04 | 13 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 5 años (18.3 kg) | 732 | 732 | 14.64 | 14.6 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 6 años (20.5 kg) | 820 | 820 | 16.4 | 16.4 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 8 años (25.6 kg) | 1024 | 1024 | 20.48 | 20.5 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 10 años (32 kg) | 1280 | 1280 | 25.6 | 25.6 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 12 años (40 kg) | 1600 | 1600 | 32 | 32 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 14 años (50 kg) | 2000 | 2000 | 40 | 40 mL | ✅  |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 16 años (58 kg) | 2000 | 2000 | 40 | 40 mL | ✅ tope aplicado |
| meropenem | meningitis | Frasco 500 mg reconstituido con 10 mL (50 mg/mL), IV | 17 años, obeso (95 kg) | 2000 | 2000 | 40 | 40 mL | ✅ tope aplicado |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| metamizol | fiebre-dolor-vo | Jarabe 250 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 4 meses (6.4 kg) | 64 | 64 | 0.16 | 0.16 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 6 meses (7.6 kg) | 76 | 76 | 0.19 | 0.19 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 9 meses (8.6 kg) | 86 | 86 | 0.215 | 0.21 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 1 año (9.6 kg) | 96 | 96 | 0.24 | 0.25 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 18 meses (10.9 kg) | 109 | 109 | 0.273 | 0.27 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 2 años (12.2 kg) | 122 | 122 | 0.305 | 0.3 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 3 años (14.3 kg) | 143 | 143 | 0.357 | 0.35 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 4 años (16.3 kg) | 163 | 163 | 0.407 | 0.4 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 5 años (18.3 kg) | 183 | 183 | 0.458 | 0.45 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 6 años (20.5 kg) | 205 | 205 | 0.512 | 0.5 mL | ✅  |
| metamizol | fiebre-dolor-vo | Gotas 400 mg/mL (medir con jeringa de 1 mL) | 8 años (25.6 kg) | 256 | 256 | 0.64 | 0.65 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 18 meses (10.9 kg) | 1.09 | 1.09 | 1.09 | 1.1 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 2 años (12.2 kg) | 1.22 | 1.22 | 1.22 | 1.2 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 3 años (14.3 kg) | 1.43 | 1.43 | 1.43 | 1.4 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 4 años (16.3 kg) | 1.63 | 1.63 | 1.63 | 1.6 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 5 años (18.3 kg) | 1.83 | 1.83 | 1.83 | 1.8 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 6 años (20.5 kg) | 2.05 | 2.05 | 2.05 | 2.1 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 8 años (25.6 kg) | 2.56 | 2.56 | 2.56 | 2.6 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 10 años (32 kg) | 3.2 | 3.2 | 3.2 | 3.2 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 12 años (40 kg) | 4 | 4 | 4 | 4 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 14 años (50 kg) | 5 | 5 | 5 | 5 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 16 años (58 kg) | 5.8 | 5.8 | 5.8 | 5.8 mL | ✅  |
| metoclopramida | nauseas-vo | Jarabe 5 mg/5 mL | 17 años, obeso (95 kg) | 9.5 | 9.5 | 9.5 | 9.5 mL | ✅  |
| metoclopramida | nauseas-vo | Tableta 10 mg | 18 meses (10.9 kg) | 1.09 | 1.09 | 0.109 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 2 años (12.2 kg) | 1.22 | 1.22 | 0.122 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 3 años (14.3 kg) | 1.43 | 1.43 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 4 años (16.3 kg) | 1.63 | 1.63 | 0.163 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 5 años (18.3 kg) | 1.83 | 1.83 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 6 años (20.5 kg) | 2.05 | 2.05 | 0.205 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 8 años (25.6 kg) | 2.56 | 2.56 | 0.256 | 0.25 tableta | ✅  |
| metoclopramida | nauseas-vo | Tableta 10 mg | 10 años (32 kg) | 3.2 | 3.2 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 12 años (40 kg) | 4 | 4 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 14 años (50 kg) | 5 | 5 | 0.5 | 0.5 tableta | ✅  |
| metoclopramida | nauseas-vo | Tableta 10 mg | 16 años (58 kg) | 5.8 | 5.8 | 0.58 | 0.58 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-vo | Tableta 10 mg | 17 años, obeso (95 kg) | 9.5 | 9.5 | 0.95 | 0.95 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 18 meses (10.9 kg) | 1.09 | 1.09 | 0.218 | 0.22 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 2 años (12.2 kg) | 1.22 | 1.22 | 0.244 | 0.24 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 3 años (14.3 kg) | 1.43 | 1.43 | 0.286 | 0.3 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 4 años (16.3 kg) | 1.63 | 1.63 | 0.326 | 0.33 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 5 años (18.3 kg) | 1.83 | 1.83 | 0.366 | 0.37 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 6 años (20.5 kg) | 2.05 | 2.05 | 0.41 | 0.4 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 8 años (25.6 kg) | 2.56 | 2.56 | 0.512 | 0.5 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 10 años (32 kg) | 3.2 | 3.2 | 0.64 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 12 años (40 kg) | 4 | 4 | 0.8 | 0.8 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 14 años (50 kg) | 5 | 5 | 1 | 1 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 16 años (58 kg) | 5.8 | 5.8 | 1.16 | 1.2 mL | ✅  |
| metoclopramida | nauseas-iv-im | Ampolla 10 mg/2 mL | 17 años, obeso (95 kg) | 9.5 | 9.5 | 1.9 | 1.9 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 21 | 21 | 0.42 | 0.4 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 25.5 | 25.5 | 0.51 | 0.5 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 32 | 32 | 0.64 | 0.64 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 38 | 38 | 0.76 | 0.76 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 43 | 43 | 0.86 | 0.9 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 48 | 48 | 0.96 | 1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 54.5 | 54.5 | 1.09 | 1.1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 61 | 61 | 1.22 | 1.2 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 71.5 | 71.5 | 1.43 | 1.4 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 81.5 | 81.5 | 1.63 | 1.6 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 91.5 | 91.5 | 1.83 | 1.8 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 102.5 | 102.5 | 2.05 | 2.1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 128 | 128 | 2.56 | 2.6 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 10 años (32 kg) | 160 | 160 | 3.2 | 3.2 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 12 años (40 kg) | 200 | 200 | 4 | 4 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 14 años (50 kg) | 250 | 250 | 5 | 5 mL | ✅  |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 16 años (58 kg) | 250 | 250 | 5 | 5 mL | ✅ tope aplicado |
| metronidazol | giardiasis | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 250 | 250 | 5 | 5 mL | ✅ tope aplicado |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 1 mes (4.2 kg) | 21 | 21 | 0.84 | 0.8 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 2 meses (5.1 kg) | 25.5 | 25.5 | 1.02 | 1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 4 meses (6.4 kg) | 32 | 32 | 1.28 | 1.3 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 6 meses (7.6 kg) | 38 | 38 | 1.52 | 1.5 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 9 meses (8.6 kg) | 43 | 43 | 1.72 | 1.7 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 1 año (9.6 kg) | 48 | 48 | 1.92 | 1.9 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 18 meses (10.9 kg) | 54.5 | 54.5 | 2.18 | 2.2 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 2 años (12.2 kg) | 61 | 61 | 2.44 | 2.4 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 71.5 | 71.5 | 2.86 | 2.9 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 81.5 | 81.5 | 3.26 | 3.3 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 91.5 | 91.5 | 3.66 | 3.7 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 102.5 | 102.5 | 4.1 | 4.1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 128 | 128 | 5.12 | 5.1 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 10 años (32 kg) | 160 | 160 | 6.4 | 6.4 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 12 años (40 kg) | 200 | 200 | 8 | 8 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 14 años (50 kg) | 250 | 250 | 10 | 10 mL | ✅  |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 16 años (58 kg) | 250 | 250 | 10 | 10 mL | ✅ tope aplicado |
| metronidazol | giardiasis | Suspensión 125 mg/5 mL | 17 años, obeso (95 kg) | 250 | 250 | 10 | 10 mL | ✅ tope aplicado |
| metronidazol | giardiasis | Tableta 500 mg | 1 mes (4.2 kg) | 21 | 21 | 0.042 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 2 meses (5.1 kg) | 25.5 | 25.5 | 0.051 | 0.05 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 4 meses (6.4 kg) | 32 | 32 | 0.064 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 6 meses (7.6 kg) | 38 | 38 | 0.076 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 9 meses (8.6 kg) | 43 | 43 | 0.086 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 1 año (9.6 kg) | 48 | 48 | 0.096 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 18 meses (10.9 kg) | 54.5 | 54.5 | 0.109 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 2 años (12.2 kg) | 61 | 61 | 0.122 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 3 años (14.3 kg) | 71.5 | 71.5 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 4 años (16.3 kg) | 81.5 | 81.5 | 0.163 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 5 años (18.3 kg) | 91.5 | 91.5 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 6 años (20.5 kg) | 102.5 | 102.5 | 0.205 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 8 años (25.6 kg) | 128 | 128 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 10 años (32 kg) | 160 | 160 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 12 años (40 kg) | 200 | 200 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 14 años (50 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 16 años (58 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | giardiasis | Tableta 500 mg | 17 años, obeso (95 kg) | 250 | 250 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 0.84 | 0.8 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 1.02 | 1 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.4 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.9 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.3 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.7 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 14 años (50 kg) | 500 | 500 | 10 | 10 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 16 años (58 kg) | 580 | 580 | 11.6 | 11.6 mL | ✅  |
| metronidazol | amebiasis | Suspensión 250 mg/5 mL | 17 años, obeso (95 kg) | 750 | 750 | 15 | 15 mL | ✅ tope aplicado |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 1 mes (4.2 kg) | 42 | 42 | 1.68 | 1.7 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 2 meses (5.1 kg) | 51 | 51 | 2.04 | 2 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 4 meses (6.4 kg) | 64 | 64 | 2.56 | 2.6 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 6 meses (7.6 kg) | 76 | 76 | 3.04 | 3 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 9 meses (8.6 kg) | 86 | 86 | 3.44 | 3.4 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 1 año (9.6 kg) | 96 | 96 | 3.84 | 3.8 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 18 meses (10.9 kg) | 109 | 109 | 4.36 | 4.4 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 2 años (12.2 kg) | 122 | 122 | 4.88 | 4.9 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 3 años (14.3 kg) | 143 | 143 | 5.72 | 5.7 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 4 años (16.3 kg) | 163 | 163 | 6.52 | 6.5 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 5 años (18.3 kg) | 183 | 183 | 7.32 | 7.3 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 6 años (20.5 kg) | 205 | 205 | 8.2 | 8.2 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 8 años (25.6 kg) | 256 | 256 | 10.24 | 10.2 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 10 años (32 kg) | 320 | 320 | 12.8 | 12.8 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 12 años (40 kg) | 400 | 400 | 16 | 16 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 14 años (50 kg) | 500 | 500 | 20 | 20 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 16 años (58 kg) | 580 | 580 | 23.2 | 23.2 mL | ✅  |
| metronidazol | amebiasis | Suspensión 125 mg/5 mL | 17 años, obeso (95 kg) | 750 | 750 | 30 | 30 mL | ✅ tope aplicado |
| metronidazol | amebiasis | Tableta 500 mg | 1 mes (4.2 kg) | 42 | 42 | 0.084 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 2 meses (5.1 kg) | 51 | 51 | 0.102 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 4 meses (6.4 kg) | 64 | 64 | 0.128 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 6 meses (7.6 kg) | 76 | 76 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 9 meses (8.6 kg) | 86 | 86 | 0.172 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 1 año (9.6 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 18 meses (10.9 kg) | 109 | 109 | 0.218 | 0.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 2 años (12.2 kg) | 122 | 122 | 0.244 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 3 años (14.3 kg) | 143 | 143 | 0.286 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 4 años (16.3 kg) | 163 | 163 | 0.326 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 5 años (18.3 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 6 años (20.5 kg) | 205 | 205 | 0.41 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 8 años (25.6 kg) | 256 | 256 | 0.512 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 10 años (32 kg) | 320 | 320 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 12 años (40 kg) | 400 | 400 | 0.8 | 0.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| metronidazol | amebiasis | Tableta 500 mg | 16 años (58 kg) | 580 | 580 | 1.16 | 1.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| metronidazol | amebiasis | Tableta 500 mg | 17 años, obeso (95 kg) | 750 | 750 | 1.5 | 1.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 6 meses (7.6 kg) | 0.38 | 0.38 | 0.38 | 0.38 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 9 meses (8.6 kg) | 0.43 | 0.43 | 0.43 | 0.45 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 1 año (9.6 kg) | 0.48 | 0.48 | 0.48 | 0.5 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 18 meses (10.9 kg) | 0.55 | 0.55 | 0.545 | 0.55 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 2 años (12.2 kg) | 0.61 | 0.61 | 0.61 | 0.6 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 3 años (14.3 kg) | 0.72 | 0.72 | 0.715 | 0.7 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 4 años (16.3 kg) | 0.82 | 0.82 | 0.815 | 0.8 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 5 años (18.3 kg) | 0.92 | 0.92 | 0.915 | 0.9 mL | ✅  |
| midazolam | sedacion-iv-6m-5a | Midazolam 1 mg/mL | 6 años (20.5 kg) | 1.03 | 1.03 | 1.025 | 1.05 mL | ✅  |
| midazolam | sedacion-iv-6-12a | Midazolam 1 mg/mL | 8 años (25.6 kg) | 0.64 | 0.64 | 0.64 | 0.65 mL | ✅  |
| midazolam | sedacion-iv-6-12a | Midazolam 1 mg/mL | 10 años (32 kg) | 0.8 | 0.8 | 0.8 | 0.8 mL | ✅  |
| midazolam | sedacion-iv-6-12a | Midazolam 1 mg/mL | 12 años (40 kg) | 1 | 1 | 1 | 1 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 6 meses (7.6 kg) | 0.76 | 0.76 | 0.152 | 0.15 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 9 meses (8.6 kg) | 0.86 | 0.86 | 0.172 | 0.17 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 1 año (9.6 kg) | 0.96 | 0.96 | 0.192 | 0.2 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 18 meses (10.9 kg) | 1.09 | 1.09 | 0.218 | 0.22 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 2 años (12.2 kg) | 1.22 | 1.22 | 0.244 | 0.25 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 3 años (14.3 kg) | 1.43 | 1.43 | 0.286 | 0.3 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 4 años (16.3 kg) | 1.63 | 1.63 | 0.326 | 0.33 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 5 años (18.3 kg) | 1.83 | 1.83 | 0.366 | 0.35 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 6 años (20.5 kg) | 2.05 | 2.05 | 0.41 | 0.4 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 8 años (25.6 kg) | 2.56 | 2.56 | 0.512 | 0.5 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 10 años (32 kg) | 3.2 | 3.2 | 0.64 | 0.65 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 12 años (40 kg) | 4 | 4 | 0.8 | 0.8 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 14 años (50 kg) | 5 | 5 | 1 | 1 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 16 años (58 kg) | 5.8 | 5.8 | 1.16 | 1.15 mL | ✅  |
| midazolam | sedacion-im | Midazolam 5 mg/mL | 17 años, obeso (95 kg) | 9.5 | 9.5 | 1.9 | 1.9 mL | ✅  |
| montelukast | lactantes-6-23-meses | Sobre de granulado 4 mg | 6 meses (7.6 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | lactantes-6-23-meses | Sobre de granulado 4 mg | 9 meses (8.6 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | lactantes-6-23-meses | Sobre de granulado 4 mg | 1 año (9.6 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | lactantes-6-23-meses | Sobre de granulado 4 mg | 18 meses (10.9 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | 2-5-anos | Sobre de granulado 4 mg | 2 años (12.2 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | 2-5-anos | Sobre de granulado 4 mg | 3 años (14.3 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | 2-5-anos | Sobre de granulado 4 mg | 4 años (16.3 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | 2-5-anos | Sobre de granulado 4 mg | 5 años (18.3 kg) | 4 | 4 | 1 | 1 sobre | ✅  |
| montelukast | 2-5-anos | Tableta masticable 4 mg | 2 años (12.2 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| montelukast | 2-5-anos | Tableta masticable 4 mg | 3 años (14.3 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| montelukast | 2-5-anos | Tableta masticable 4 mg | 4 años (16.3 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| montelukast | 2-5-anos | Tableta masticable 4 mg | 5 años (18.3 kg) | 4 | 4 | 1 | 1 tableta | ✅  |
| montelukast | 6-14-anos | Tableta masticable 5 mg | 6 años (20.5 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| montelukast | 6-14-anos | Tableta masticable 5 mg | 8 años (25.6 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| montelukast | 6-14-anos | Tableta masticable 5 mg | 10 años (32 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| montelukast | 6-14-anos | Tableta masticable 5 mg | 12 años (40 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| montelukast | 6-14-anos | Tableta masticable 5 mg | 14 años (50 kg) | 5 | 5 | 1 | 1 tableta | ✅  |
| montelukast | 15-anos-o-mas | Tableta 10 mg | 16 años (58 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| montelukast | 15-anos-o-mas | Tableta 10 mg | 17 años, obeso (95 kg) | 10 | 10 | 1 | 1 tableta | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 2 años (12.2 kg) | 1.83 | 1.83 | 0.915 | 0.9 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 3 años (14.3 kg) | 2.15 | 2.15 | 1.073 | 1.1 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 4 años (16.3 kg) | 2.44 | 2.44 | 1.222 | 1.2 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 5 años (18.3 kg) | 2.75 | 2.75 | 1.373 | 1.4 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 6 años (20.5 kg) | 3.07 | 3.07 | 1.537 | 1.5 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 8 años (25.6 kg) | 3.84 | 3.84 | 1.92 | 1.9 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 10 años (32 kg) | 4.8 | 4.8 | 2.4 | 2.4 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 12 años (40 kg) | 6 | 6 | 3 | 3 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 14 años (50 kg) | 7.5 | 7.5 | 3.75 | 3.8 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 16 años (58 kg) | 8.7 | 8.7 | 4.35 | 4.4 mL | ✅  |
| morfina | dolor-2-anos-o-mas | Solución oral 10 mg/5 mL (2 mg/mL) | 17 años, obeso (95 kg) | 14.25 | 14.25 | 7.125 | 7.1 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 1 mes (4.2 kg) | 0.04 | 0.04 | 0.105 | 0.1 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 2 meses (5.1 kg) | 0.05 | 0.05 | 0.127 | 0.13 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 4 meses (6.4 kg) | 0.06 | 0.06 | 0.16 | 0.16 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 6 meses (7.6 kg) | 0.08 | 0.08 | 0.19 | 0.19 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 9 meses (8.6 kg) | 0.09 | 0.09 | 0.215 | 0.21 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 1 año (9.6 kg) | 0.1 | 0.1 | 0.24 | 0.25 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 18 meses (10.9 kg) | 0.11 | 0.11 | 0.272 | 0.27 mL | ✅ no medible con esta presentación: se muestra el valor exacto |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 2 años (12.2 kg) | 0.12 | 0.12 | 0.305 | 0.3 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 3 años (14.3 kg) | 0.14 | 0.14 | 0.358 | 0.35 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 4 años (16.3 kg) | 0.16 | 0.16 | 0.407 | 0.4 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 5 años (18.3 kg) | 0.18 | 0.18 | 0.458 | 0.45 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 6 años (20.5 kg) | 0.21 | 0.21 | 0.512 | 0.5 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 8 años (25.6 kg) | 0.26 | 0.26 | 0.64 | 0.65 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 10 años (32 kg) | 0.32 | 0.32 | 0.8 | 0.8 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 12 años (40 kg) | 0.4 | 0.4 | 1 | 1 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 14 años (50 kg) | 0.5 | 0.5 | 1.25 | 1.25 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 16 años (58 kg) | 0.58 | 0.58 | 1.45 | 1.45 mL | ✅  |
| naloxona | intoxicacion-opiaceos | Ampolla 0.4 mg/mL | 17 años, obeso (95 kg) | 0.95 | 0.95 | 2.375 | 2.4 mL | ✅  |
| nistatina | neonatos | Suspensión oral 100 000 UI/mL | 3 días, bajo peso (2 kg) (2 kg) | 100000 | 100000 | 1 | 1 mL | ✅  |
| nistatina | neonatos | Suspensión oral 100 000 UI/mL | 5 días (3.2 kg) (3.2 kg) | 100000 | 100000 | 1 | 1 mL | ✅  |
| nistatina | neonatos | Suspensión oral 100 000 UI/mL | 15 días (3.6 kg) (3.6 kg) | 100000 | 100000 | 1 | 1 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 1 mes (4.2 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 2 meses (5.1 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 4 meses (6.4 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 6 meses (7.6 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 9 meses (8.6 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 1 año (9.6 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 18 meses (10.9 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 2 años (12.2 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 3 años (14.3 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 4 años (16.3 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | menores-5-anos | Suspensión oral 100 000 UI/mL | 5 años (18.3 kg) | 200000 | 200000 | 2 | 2 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 6 años (20.5 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 8 años (25.6 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 10 años (32 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 12 años (40 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 14 años (50 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 16 años (58 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nistatina | mayores-5-anos | Suspensión oral 100 000 UI/mL | 17 años, obeso (95 kg) | 400000 | 400000 | 4 | 4 mL | ✅  |
| nitazoxanida | diarrea-1-3-anos | Suspensión 100 mg/5 mL | 1 año (9.6 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| nitazoxanida | diarrea-1-3-anos | Suspensión 100 mg/5 mL | 18 meses (10.9 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| nitazoxanida | diarrea-1-3-anos | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| nitazoxanida | diarrea-1-3-anos | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 100 | 100 | 5 | 5 mL | ✅  |
| nitazoxanida | diarrea-4-11-anos | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| nitazoxanida | diarrea-4-11-anos | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| nitazoxanida | diarrea-4-11-anos | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| nitazoxanida | diarrea-4-11-anos | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| nitazoxanida | diarrea-4-11-anos | Suspensión 100 mg/5 mL | 10 años (32 kg) | 200 | 200 | 10 | 10 mL | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Suspensión 100 mg/5 mL | 12 años (40 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Suspensión 100 mg/5 mL | 14 años (50 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Suspensión 100 mg/5 mL | 16 años (58 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Suspensión 100 mg/5 mL | 17 años, obeso (95 kg) | 500 | 500 | 25 | 25 mL | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Tableta 500 mg | 12 años (40 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Tableta 500 mg | 14 años (50 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Tableta 500 mg | 16 años (58 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| nitazoxanida | diarrea-12-anos-o-mas | Tableta 500 mg | 17 años, obeso (95 kg) | 500 | 500 | 1 | 1 tableta | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 1 mes (4.2 kg) | 5.25 | 5.25 | 1.05 | 1.1 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 2 meses (5.1 kg) | 6.38 | 6.38 | 1.275 | 1.3 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 4 meses (6.4 kg) | 8 | 8 | 1.6 | 1.6 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 6 meses (7.6 kg) | 9.5 | 9.5 | 1.9 | 1.9 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 9 meses (8.6 kg) | 10.75 | 10.75 | 2.15 | 2.2 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 1 año (9.6 kg) | 12 | 12 | 2.4 | 2.4 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 18 meses (10.9 kg) | 13.63 | 13.63 | 2.725 | 2.7 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 2 años (12.2 kg) | 15.25 | 15.25 | 3.05 | 3.1 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 3 años (14.3 kg) | 17.88 | 17.88 | 3.575 | 3.6 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 4 años (16.3 kg) | 20.38 | 20.38 | 4.075 | 4.1 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 5 años (18.3 kg) | 22.88 | 22.88 | 4.575 | 4.6 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 6 años (20.5 kg) | 25.63 | 25.63 | 5.125 | 5.1 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 8 años (25.6 kg) | 32 | 32 | 6.4 | 6.4 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 10 años (32 kg) | 40 | 40 | 8 | 8 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 12 años (40 kg) | 50 | 50 | 10 | 10 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 14 años (50 kg) | 62.5 | 62.5 | 12.5 | 12.5 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 16 años (58 kg) | 72.5 | 72.5 | 14.5 | 14.5 mL | ✅  |
| nitrofurantoina | itu-no-complicada | Suspensión 25 mg/5 mL | 17 años, obeso (95 kg) | 100 | 100 | 20 | 20 mL | ✅ tope aplicado |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 1 mes (4.2 kg) | 5.25 | 5.25 | 0.052 | 0.05 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 2 meses (5.1 kg) | 6.38 | 6.38 | 0.064 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 4 meses (6.4 kg) | 8 | 8 | 0.08 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 6 meses (7.6 kg) | 9.5 | 9.5 | 0.095 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 9 meses (8.6 kg) | 10.75 | 10.75 | 0.107 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 1 año (9.6 kg) | 12 | 12 | 0.12 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 18 meses (10.9 kg) | 13.63 | 13.63 | 0.136 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 2 años (12.2 kg) | 15.25 | 15.25 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 3 años (14.3 kg) | 17.88 | 17.88 | 0.179 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 4 años (16.3 kg) | 20.38 | 20.38 | 0.204 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 5 años (18.3 kg) | 22.88 | 22.88 | 0.229 | 0.23 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 6 años (20.5 kg) | 25.63 | 25.63 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 8 años (25.6 kg) | 32 | 32 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 10 años (32 kg) | 40 | 40 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 12 años (40 kg) | 50 | 50 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 14 años (50 kg) | 62.5 | 62.5 | 0.625 | 0.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 16 años (58 kg) | 72.5 | 72.5 | 0.725 | 0.72 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | itu-no-complicada | Tableta 100 mg | 17 años, obeso (95 kg) | 100 | 100 | 1 | 1 tableta | ✅ tope aplicado |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.84 | 0.8 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 2 meses (5.1 kg) | 5.1 | 5.1 | 1.02 | 1 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 4 meses (6.4 kg) | 6.4 | 6.4 | 1.28 | 1.3 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 6 meses (7.6 kg) | 7.6 | 7.6 | 1.52 | 1.5 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 9 meses (8.6 kg) | 8.6 | 8.6 | 1.72 | 1.7 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 1 año (9.6 kg) | 9.6 | 9.6 | 1.92 | 1.9 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 18 meses (10.9 kg) | 10.9 | 10.9 | 2.18 | 2.2 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 2 años (12.2 kg) | 12.2 | 12.2 | 2.44 | 2.4 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 3 años (14.3 kg) | 14.3 | 14.3 | 2.86 | 2.9 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 4 años (16.3 kg) | 16.3 | 16.3 | 3.26 | 3.3 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 5 años (18.3 kg) | 18.3 | 18.3 | 3.66 | 3.7 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 6 años (20.5 kg) | 20.5 | 20.5 | 4.1 | 4.1 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 8 años (25.6 kg) | 25.6 | 25.6 | 5.12 | 5.1 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 10 años (32 kg) | 32 | 32 | 6.4 | 6.4 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 12 años (40 kg) | 40 | 40 | 8 | 8 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 14 años (50 kg) | 50 | 50 | 10 | 10 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 16 años (58 kg) | 58 | 58 | 11.6 | 11.6 mL | ✅  |
| nitrofurantoina | profilaxis | Suspensión 25 mg/5 mL | 17 años, obeso (95 kg) | 95 | 95 | 19 | 19 mL | ✅  |
| nitrofurantoina | profilaxis | Tableta 100 mg | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.042 | 0.04 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.051 | 0.05 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.064 | 0.06 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.076 | 0.08 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.086 | 0.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 1 año (9.6 kg) | 9.6 | 9.6 | 0.096 | 0.1 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 18 meses (10.9 kg) | 10.9 | 10.9 | 0.109 | 0.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 2 años (12.2 kg) | 12.2 | 12.2 | 0.122 | 0.12 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 0.163 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 0.183 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 0.205 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 0.256 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 10 años (32 kg) | 32 | 32 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 12 años (40 kg) | 40 | 40 | 0.4 | 0.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 14 años (50 kg) | 50 | 50 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 16 años (58 kg) | 58 | 58 | 0.58 | 0.58 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| nitrofurantoina | profilaxis | Tableta 100 mg | 17 años, obeso (95 kg) | 95 | 95 | 0.95 | 0.95 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 1.025 | 1 tableta | ✅  |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 10 años (32 kg) | 32 | 32 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 12 años (40 kg) | 40 | 40 | 2 | 2 tableta | ✅  |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 14 años (50 kg) | 40 | 40 | 2 | 2 tableta | ✅ tope aplicado |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 16 años (58 kg) | 40 | 40 | 2 | 2 tableta | ✅ tope aplicado |
| omeprazol | esofagitis-mayores-2-anos | Tableta de liberación modificada 20 mg | 17 años, obeso (95 kg) | 40 | 40 | 2 | 2 tableta | ✅ tope aplicado |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 6 meses (7.6 kg) | 1.14 | 1.14 | 1.425 | 1.4 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 9 meses (8.6 kg) | 1.29 | 1.29 | 1.612 | 1.6 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 1 año (9.6 kg) | 1.44 | 1.44 | 1.8 | 1.8 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 18 meses (10.9 kg) | 1.64 | 1.64 | 2.044 | 2 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 2 años (12.2 kg) | 1.83 | 1.83 | 2.287 | 2.3 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 3 años (14.3 kg) | 2.15 | 2.15 | 2.681 | 2.7 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 4 años (16.3 kg) | 2.44 | 2.44 | 3.056 | 3.1 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 5 años (18.3 kg) | 2.75 | 2.75 | 3.431 | 3.4 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 6 años (20.5 kg) | 3.07 | 3.07 | 3.844 | 3.8 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 8 años (25.6 kg) | 3.84 | 3.84 | 4.8 | 4.8 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 10 años (32 kg) | 4.8 | 4.8 | 6 | 6 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 12 años (40 kg) | 6 | 6 | 7.5 | 7.5 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 14 años (50 kg) | 7.5 | 7.5 | 9.375 | 9.4 mL | ✅  |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 16 años (58 kg) | 8 | 8 | 10 | 10 mL | ✅ tope aplicado |
| ondansetron | vomitos-gastroenteritis | Solución oral 4 mg/5 mL | 17 años, obeso (95 kg) | 8 | 8 | 10 | 10 mL | ✅ tope aplicado |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 6 meses (7.6 kg) | 1.14 | 1.14 | 0.285 | 0.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 9 meses (8.6 kg) | 1.29 | 1.29 | 0.322 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 1 año (9.6 kg) | 1.44 | 1.44 | 0.36 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 18 meses (10.9 kg) | 1.64 | 1.64 | 0.409 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 2 años (12.2 kg) | 1.83 | 1.83 | 0.457 | 0.46 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 3 años (14.3 kg) | 2.15 | 2.15 | 0.536 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 4 años (16.3 kg) | 2.44 | 2.44 | 0.611 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 5 años (18.3 kg) | 2.75 | 2.75 | 0.686 | 0.69 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 6 años (20.5 kg) | 3.07 | 3.07 | 0.769 | 0.77 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 8 años (25.6 kg) | 3.84 | 3.84 | 0.96 | 1 tableta | ✅  |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 10 años (32 kg) | 4.8 | 4.8 | 1.2 | 1.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 12 años (40 kg) | 6 | 6 | 1.5 | 1.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 14 años (50 kg) | 7.5 | 7.5 | 1.875 | 1.88 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 16 años (58 kg) | 8 | 8 | 2 | 2 tableta | ✅ tope aplicado |
| ondansetron | vomitos-gastroenteritis | Tableta bucodispersable 4 mg | 17 años, obeso (95 kg) | 8 | 8 | 2 | 2 tableta | ✅ tope aplicado |
| oseltamivir | influenza-menor-1-ano | Suspensión 6 mg/mL | 1 mes (4.2 kg) | 12.6 | 12.6 | 2.1 | 2.1 mL | ✅  |
| oseltamivir | influenza-menor-1-ano | Suspensión 6 mg/mL | 2 meses (5.1 kg) | 15.3 | 15.3 | 2.55 | 2.6 mL | ✅  |
| oseltamivir | influenza-menor-1-ano | Suspensión 6 mg/mL | 4 meses (6.4 kg) | 19.2 | 19.2 | 3.2 | 3.2 mL | ✅  |
| oseltamivir | influenza-menor-1-ano | Suspensión 6 mg/mL | 6 meses (7.6 kg) | 22.8 | 22.8 | 3.8 | 3.8 mL | ✅  |
| oseltamivir | influenza-menor-1-ano | Suspensión 6 mg/mL | 9 meses (8.6 kg) | 25.8 | 25.8 | 4.3 | 4.3 mL | ✅  |
| oseltamivir | influenza-hasta-15-kg | Suspensión 6 mg/mL | 1 año (9.6 kg) | 30 | 30 | 5 | 5 mL | ✅  |
| oseltamivir | influenza-hasta-15-kg | Suspensión 6 mg/mL | 18 meses (10.9 kg) | 30 | 30 | 5 | 5 mL | ✅  |
| oseltamivir | influenza-hasta-15-kg | Suspensión 6 mg/mL | 2 años (12.2 kg) | 30 | 30 | 5 | 5 mL | ✅  |
| oseltamivir | influenza-hasta-15-kg | Suspensión 6 mg/mL | 3 años (14.3 kg) | 30 | 30 | 5 | 5 mL | ✅  |
| oseltamivir | influenza-hasta-15-kg | Cápsula 30 mg | 1 año (9.6 kg) | 30 | 30 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-hasta-15-kg | Cápsula 30 mg | 18 meses (10.9 kg) | 30 | 30 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-hasta-15-kg | Cápsula 30 mg | 2 años (12.2 kg) | 30 | 30 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-hasta-15-kg | Cápsula 30 mg | 3 años (14.3 kg) | 30 | 30 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-hasta-15-kg | Cápsula 45 mg | 1 año (9.6 kg) | 30 | 30 | 0.667 | 0.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 45 mg | 18 meses (10.9 kg) | 30 | 30 | 0.667 | 0.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 45 mg | 2 años (12.2 kg) | 30 | 30 | 0.667 | 0.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 45 mg | 3 años (14.3 kg) | 30 | 30 | 0.667 | 0.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 75 mg | 1 año (9.6 kg) | 30 | 30 | 0.4 | 0.4 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 75 mg | 18 meses (10.9 kg) | 30 | 30 | 0.4 | 0.4 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 75 mg | 2 años (12.2 kg) | 30 | 30 | 0.4 | 0.4 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-hasta-15-kg | Cápsula 75 mg | 3 años (14.3 kg) | 30 | 30 | 0.4 | 0.4 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Suspensión 6 mg/mL | 4 años (16.3 kg) | 45 | 45 | 7.5 | 7.5 mL | ✅  |
| oseltamivir | influenza-15-23-kg | Suspensión 6 mg/mL | 5 años (18.3 kg) | 45 | 45 | 7.5 | 7.5 mL | ✅  |
| oseltamivir | influenza-15-23-kg | Suspensión 6 mg/mL | 6 años (20.5 kg) | 45 | 45 | 7.5 | 7.5 mL | ✅  |
| oseltamivir | influenza-15-23-kg | Cápsula 30 mg | 4 años (16.3 kg) | 45 | 45 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Cápsula 30 mg | 5 años (18.3 kg) | 45 | 45 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Cápsula 30 mg | 6 años (20.5 kg) | 45 | 45 | 1.5 | 1.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Cápsula 45 mg | 4 años (16.3 kg) | 45 | 45 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-15-23-kg | Cápsula 45 mg | 5 años (18.3 kg) | 45 | 45 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-15-23-kg | Cápsula 45 mg | 6 años (20.5 kg) | 45 | 45 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-15-23-kg | Cápsula 75 mg | 4 años (16.3 kg) | 45 | 45 | 0.6 | 0.6 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Cápsula 75 mg | 5 años (18.3 kg) | 45 | 45 | 0.6 | 0.6 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-15-23-kg | Cápsula 75 mg | 6 años (20.5 kg) | 45 | 45 | 0.6 | 0.6 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Suspensión 6 mg/mL | 8 años (25.6 kg) | 60 | 60 | 10 | 10 mL | ✅  |
| oseltamivir | influenza-23-40-kg | Suspensión 6 mg/mL | 10 años (32 kg) | 60 | 60 | 10 | 10 mL | ✅  |
| oseltamivir | influenza-23-40-kg | Suspensión 6 mg/mL | 12 años (40 kg) | 60 | 60 | 10 | 10 mL | ✅  |
| oseltamivir | influenza-23-40-kg | Cápsula 30 mg | 8 años (25.6 kg) | 60 | 60 | 2 | 2 capsula | ✅  |
| oseltamivir | influenza-23-40-kg | Cápsula 30 mg | 10 años (32 kg) | 60 | 60 | 2 | 2 capsula | ✅  |
| oseltamivir | influenza-23-40-kg | Cápsula 30 mg | 12 años (40 kg) | 60 | 60 | 2 | 2 capsula | ✅  |
| oseltamivir | influenza-23-40-kg | Cápsula 45 mg | 8 años (25.6 kg) | 60 | 60 | 1.333 | 1.33 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Cápsula 45 mg | 10 años (32 kg) | 60 | 60 | 1.333 | 1.33 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Cápsula 45 mg | 12 años (40 kg) | 60 | 60 | 1.333 | 1.33 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Cápsula 75 mg | 8 años (25.6 kg) | 60 | 60 | 0.8 | 0.8 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Cápsula 75 mg | 10 años (32 kg) | 60 | 60 | 0.8 | 0.8 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-23-40-kg | Cápsula 75 mg | 12 años (40 kg) | 60 | 60 | 0.8 | 0.8 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Suspensión 6 mg/mL | 14 años (50 kg) | 75 | 75 | 12.5 | 12.5 mL | ✅  |
| oseltamivir | influenza-13-anos-o-mas | Suspensión 6 mg/mL | 16 años (58 kg) | 75 | 75 | 12.5 | 12.5 mL | ✅  |
| oseltamivir | influenza-13-anos-o-mas | Suspensión 6 mg/mL | 17 años, obeso (95 kg) | 75 | 75 | 12.5 | 12.5 mL | ✅  |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 30 mg | 14 años (50 kg) | 75 | 75 | 2.5 | 2.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 30 mg | 16 años (58 kg) | 75 | 75 | 2.5 | 2.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 30 mg | 17 años, obeso (95 kg) | 75 | 75 | 2.5 | 2.5 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 45 mg | 14 años (50 kg) | 75 | 75 | 1.667 | 1.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 45 mg | 16 años (58 kg) | 75 | 75 | 1.667 | 1.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 45 mg | 17 años, obeso (95 kg) | 75 | 75 | 1.667 | 1.67 capsula | ✅ no medible con esta presentación: se muestra el valor exacto |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 75 mg | 14 años (50 kg) | 75 | 75 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 75 mg | 16 años (58 kg) | 75 | 75 | 1 | 1 capsula | ✅  |
| oseltamivir | influenza-13-anos-o-mas | Cápsula 75 mg | 17 años, obeso (95 kg) | 75 | 75 | 1 | 1 capsula | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 1 mes (4.2 kg) | 63 | 63 | 0.63 | 0.6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.765 | 0.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 4 meses (6.4 kg) | 96 | 96 | 0.96 | 1 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 6 meses (7.6 kg) | 114 | 114 | 1.14 | 1.1 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 9 meses (8.6 kg) | 129 | 129 | 1.29 | 1.3 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 1 año (9.6 kg) | 144 | 144 | 1.44 | 1.4 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 1.635 | 1.6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 2 años (12.2 kg) | 183 | 183 | 1.83 | 1.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 3 años (14.3 kg) | 214.5 | 214.5 | 2.145 | 2.1 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 4 años (16.3 kg) | 244.5 | 244.5 | 2.445 | 2.4 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 5 años (18.3 kg) | 274.5 | 274.5 | 2.745 | 2.7 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 6 años (20.5 kg) | 307.5 | 307.5 | 3.075 | 3.1 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 8 años (25.6 kg) | 384 | 384 | 3.84 | 3.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 10 años (32 kg) | 480 | 480 | 4.8 | 4.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 12 años (40 kg) | 600 | 600 | 6 | 6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 14 años (50 kg) | 750 | 750 | 7.5 | 7.5 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 16 años (58 kg) | 870 | 870 | 8.7 | 8.7 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Solución oral 100 mg/mL | 17 años, obeso (95 kg) | 1000 | 1000 | 10 | 10 mL | ✅ tope aplicado |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 2.625 | 2.6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 3.188 | 3.2 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 4 meses (6.4 kg) | 96 | 96 | 4 | 4 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 6 meses (7.6 kg) | 114 | 114 | 4.75 | 4.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 9 meses (8.6 kg) | 129 | 129 | 5.375 | 5.4 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 1 año (9.6 kg) | 144 | 144 | 6 | 6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 6.813 | 6.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 2 años (12.2 kg) | 183 | 183 | 7.625 | 7.6 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 3 años (14.3 kg) | 214.5 | 214.5 | 8.938 | 8.9 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 4 años (16.3 kg) | 244.5 | 244.5 | 10.188 | 10.2 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 5 años (18.3 kg) | 274.5 | 274.5 | 11.438 | 11.4 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 6 años (20.5 kg) | 307.5 | 307.5 | 12.813 | 12.8 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 8 años (25.6 kg) | 384 | 384 | 16 | 16 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 10 años (32 kg) | 480 | 480 | 20 | 20 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 12 años (40 kg) | 600 | 600 | 25 | 25 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 14 años (50 kg) | 750 | 750 | 31.25 | 31.3 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 16 años (58 kg) | 870 | 870 | 36.25 | 36.3 mL | ✅  |
| paracetamol | fiebre-dolor-vo | Jarabe 120 mg/5 mL | 17 años, obeso (95 kg) | 1000 | 1000 | 41.667 | 41.6 mL | ✅ tope aplicado |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 1 mes (4.2 kg) | 63 | 63 | 0.126 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.153 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 4 meses (6.4 kg) | 96 | 96 | 0.192 | 0.19 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 6 meses (7.6 kg) | 114 | 114 | 0.228 | 0.23 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 9 meses (8.6 kg) | 129 | 129 | 0.258 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 1 año (9.6 kg) | 144 | 144 | 0.288 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 18 meses (10.9 kg) | 163.5 | 163.5 | 0.327 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 2 años (12.2 kg) | 183 | 183 | 0.366 | 0.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 3 años (14.3 kg) | 214.5 | 214.5 | 0.429 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 4 años (16.3 kg) | 244.5 | 244.5 | 0.489 | 0.5 tableta | ✅  |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 5 años (18.3 kg) | 274.5 | 274.5 | 0.549 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 6 años (20.5 kg) | 307.5 | 307.5 | 0.615 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 8 años (25.6 kg) | 384 | 384 | 0.768 | 0.77 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 10 años (32 kg) | 480 | 480 | 0.96 | 1 tableta | ✅  |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 12 años (40 kg) | 600 | 600 | 1.2 | 1.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 14 años (50 kg) | 750 | 750 | 1.5 | 1.5 tableta | ✅  |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 16 años (58 kg) | 870 | 870 | 1.74 | 1.74 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| paracetamol | fiebre-dolor-vo | Tableta 500 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 2 | 2 tableta | ✅ tope aplicado |
| penicilina-g-sodica | sifilis-congenita-primera-semana | 500 000 UI/mL (frasco de 1 000 000 UI reconstituido con 1.6 mL de agua estéril, OMS) | 3 días, bajo peso (2 kg) (2 kg) | 100000 | 100000 | 0.2 | 0.2 mL | ✅  |
| penicilina-g-sodica | sifilis-congenita-primera-semana | 500 000 UI/mL (frasco de 1 000 000 UI reconstituido con 1.6 mL de agua estéril, OMS) | 5 días (3.2 kg) (3.2 kg) | 160000 | 160000 | 0.32 | 0.32 mL | ✅  |
| penicilina-g-sodica | sifilis-congenita-despues-7-dias | 500 000 UI/mL (frasco de 1 000 000 UI reconstituido con 1.6 mL de agua estéril, OMS) | 15 días (3.6 kg) (3.6 kg) | 180000 | 180000 | 0.36 | 0.36 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-2-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 4 meses (6.4 kg) | 576 | 576 | 2.844 | 2.8 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-2-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 6 meses (7.6 kg) | 684 | 684 | 3.378 | 3.4 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 9 meses (8.6 kg) | 967.5 | 967.5 | 4.778 | 4.8 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 1 año (9.6 kg) | 1080 | 1080 | 5.333 | 5.3 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 18 meses (10.9 kg) | 1226.25 | 1226.25 | 6.056 | 6.1 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 2 años (12.2 kg) | 1372.5 | 1372.5 | 6.778 | 6.8 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 3 años (14.3 kg) | 1608.75 | 1608.75 | 7.944 | 7.9 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 4 años (16.3 kg) | 1833.75 | 1833.75 | 9.056 | 9.1 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 5 años (18.3 kg) | 2058.75 | 2058.75 | 10.167 | 10.2 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 6 años (20.5 kg) | 2306.25 | 2306.25 | 11.389 | 11.4 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 8 años (25.6 kg) | 2880 | 2880 | 14.222 | 14.2 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 10 años (32 kg) | 3600 | 3600 | 17.778 | 17.8 mL | ✅  |
| piperacilina-tazobactam | intraabdominal-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 12 años (40 kg) | 4500 | 4500 | 22.222 | 22.2 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-2-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 4 meses (6.4 kg) | 576 | 576 | 2.844 | 2.8 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-2-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 6 meses (7.6 kg) | 684 | 684 | 3.378 | 3.4 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 9 meses (8.6 kg) | 967.5 | 967.5 | 4.778 | 4.8 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 1 año (9.6 kg) | 1080 | 1080 | 5.333 | 5.3 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 18 meses (10.9 kg) | 1226.25 | 1226.25 | 6.056 | 6.1 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 2 años (12.2 kg) | 1372.5 | 1372.5 | 6.778 | 6.8 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 3 años (14.3 kg) | 1608.75 | 1608.75 | 7.944 | 7.9 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 4 años (16.3 kg) | 1833.75 | 1833.75 | 9.056 | 9.1 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 5 años (18.3 kg) | 2058.75 | 2058.75 | 10.167 | 10.2 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 6 años (20.5 kg) | 2306.25 | 2306.25 | 11.389 | 11.4 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 8 años (25.6 kg) | 2880 | 2880 | 14.222 | 14.2 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 10 años (32 kg) | 3600 | 3600 | 17.778 | 17.8 mL | ✅  |
| piperacilina-tazobactam | neumonia-nosocomial-mayores-9-meses | Frasco 4 g + 500 mg reconstituido con 20 mL (202.5 mg/mL del producto combinado) | 12 años (40 kg) | 4500 | 4500 | 22.222 | 22.2 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 2 años (12.2 kg) | 134.2 | 134.2 | 2.684 | 2.7 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 3 años (14.3 kg) | 157.3 | 157.3 | 3.146 | 3.1 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 4 años (16.3 kg) | 179.3 | 179.3 | 3.586 | 3.6 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 5 años (18.3 kg) | 201.3 | 201.3 | 4.026 | 4 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 6 años (20.5 kg) | 225.5 | 225.5 | 4.51 | 4.5 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 8 años (25.6 kg) | 281.6 | 281.6 | 5.632 | 5.6 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 10 años (32 kg) | 352 | 352 | 7.04 | 7 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 12 años (40 kg) | 440 | 440 | 8.8 | 8.8 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 14 años (50 kg) | 550 | 550 | 11 | 11 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 16 años (58 kg) | 638 | 638 | 12.76 | 12.8 mL | ✅  |
| pirantel | ascaris-oxiuros | Suspensión 250 mg/5 mL (como pirantel base) | 17 años, obeso (95 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 2 años (12.2 kg) | 134.2 | 134.2 | 1.074 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 3 años (14.3 kg) | 157.3 | 157.3 | 1.258 | 1.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 4 años (16.3 kg) | 179.3 | 179.3 | 1.434 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 5 años (18.3 kg) | 201.3 | 201.3 | 1.61 | 1.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 6 años (20.5 kg) | 225.5 | 225.5 | 1.804 | 1.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 8 años (25.6 kg) | 281.6 | 281.6 | 2.253 | 2.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 10 años (32 kg) | 352 | 352 | 2.816 | 2.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 12 años (40 kg) | 440 | 440 | 3.52 | 3.52 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 14 años (50 kg) | 550 | 550 | 4.4 | 4.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 16 años (58 kg) | 638 | 638 | 5.104 | 5 tableta | ✅  |
| pirantel | ascaris-oxiuros | Tableta 125 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 8 | 8 tableta | ✅ tope aplicado |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 2 años (12.2 kg) | 134.2 | 134.2 | 2.684 | 2.7 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 3 años (14.3 kg) | 157.3 | 157.3 | 3.146 | 3.1 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 4 años (16.3 kg) | 179.3 | 179.3 | 3.586 | 3.6 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 5 años (18.3 kg) | 201.3 | 201.3 | 4.026 | 4 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 6 años (20.5 kg) | 225.5 | 225.5 | 4.51 | 4.5 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 8 años (25.6 kg) | 281.6 | 281.6 | 5.632 | 5.6 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 10 años (32 kg) | 352 | 352 | 7.04 | 7 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 12 años (40 kg) | 440 | 440 | 8.8 | 8.8 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 14 años (50 kg) | 550 | 550 | 11 | 11 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 16 años (58 kg) | 638 | 638 | 12.76 | 12.8 mL | ✅  |
| pirantel | uncinariasis | Suspensión 250 mg/5 mL (como pirantel base) | 17 años, obeso (95 kg) | 1000 | 1000 | 20 | 20 mL | ✅ tope aplicado |
| pirantel | uncinariasis | Tableta 125 mg | 2 años (12.2 kg) | 134.2 | 134.2 | 1.074 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 3 años (14.3 kg) | 157.3 | 157.3 | 1.258 | 1.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 4 años (16.3 kg) | 179.3 | 179.3 | 1.434 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 5 años (18.3 kg) | 201.3 | 201.3 | 1.61 | 1.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 6 años (20.5 kg) | 225.5 | 225.5 | 1.804 | 1.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 8 años (25.6 kg) | 281.6 | 281.6 | 2.253 | 2.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 10 años (32 kg) | 352 | 352 | 2.816 | 2.82 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 12 años (40 kg) | 440 | 440 | 3.52 | 3.52 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 14 años (50 kg) | 550 | 550 | 4.4 | 4.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirantel | uncinariasis | Tableta 125 mg | 16 años (58 kg) | 638 | 638 | 5.104 | 5 tableta | ✅  |
| pirantel | uncinariasis | Tableta 125 mg | 17 años, obeso (95 kg) | 1000 | 1000 | 8 | 8 tableta | ✅ tope aplicado |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 1 mes (4.2 kg) | 147 | 147 | 4.9 | 4.9 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 2 meses (5.1 kg) | 178.5 | 178.5 | 5.95 | 6 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 4 meses (6.4 kg) | 224 | 224 | 7.467 | 7.5 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 6 meses (7.6 kg) | 266 | 266 | 8.867 | 8.9 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 9 meses (8.6 kg) | 301 | 301 | 10.033 | 10 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 1 año (9.6 kg) | 336 | 336 | 11.2 | 11.2 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 18 meses (10.9 kg) | 381.5 | 381.5 | 12.717 | 12.7 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 2 años (12.2 kg) | 427 | 427 | 14.233 | 14.2 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 3 años (14.3 kg) | 500.5 | 500.5 | 16.683 | 16.7 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 4 años (16.3 kg) | 570.5 | 570.5 | 19.017 | 19 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 5 años (18.3 kg) | 640.5 | 640.5 | 21.35 | 21.4 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 6 años (20.5 kg) | 717.5 | 717.5 | 23.917 | 23.9 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 8 años (25.6 kg) | 896 | 896 | 29.867 | 29.9 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 10 años (32 kg) | 1120 | 1120 | 37.333 | 37.3 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 12 años (40 kg) | 1400 | 1400 | 46.667 | 46.7 mL | ✅  |
| pirazinamida | tb-sensible | Suspensión 30 mg/mL | 14 años (50 kg) | 1500 | 1500 | 50 | 50 mL | ✅ tope aplicado |
| pirazinamida | tb-sensible | Tableta 500 mg | 1 mes (4.2 kg) | 147 | 147 | 0.294 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 2 meses (5.1 kg) | 178.5 | 178.5 | 0.357 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 4 meses (6.4 kg) | 224 | 224 | 0.448 | 0.45 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 6 meses (7.6 kg) | 266 | 266 | 0.532 | 0.53 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 9 meses (8.6 kg) | 301 | 301 | 0.602 | 0.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 1 año (9.6 kg) | 336 | 336 | 0.672 | 0.67 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 18 meses (10.9 kg) | 381.5 | 381.5 | 0.763 | 0.76 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 2 años (12.2 kg) | 427 | 427 | 0.854 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 3 años (14.3 kg) | 500.5 | 500.5 | 1.001 | 1 tableta | ✅  |
| pirazinamida | tb-sensible | Tableta 500 mg | 4 años (16.3 kg) | 570.5 | 570.5 | 1.141 | 1.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 5 años (18.3 kg) | 640.5 | 640.5 | 1.281 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 6 años (20.5 kg) | 717.5 | 717.5 | 1.435 | 1.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 8 años (25.6 kg) | 896 | 896 | 1.792 | 1.79 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 10 años (32 kg) | 1120 | 1120 | 2.24 | 2.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 12 años (40 kg) | 1400 | 1400 | 2.8 | 2.8 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| pirazinamida | tb-sensible | Tableta 500 mg | 14 años (50 kg) | 1500 | 1500 | 3 | 3 tableta | ✅ tope aplicado |
| praziquantel | teniasis | Tableta 150 mg | 5 años (18.3 kg) | 91.5 | 91.5 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 150 mg | 6 años (20.5 kg) | 102.5 | 102.5 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 150 mg | 8 años (25.6 kg) | 128 | 128 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 150 mg | 10 años (32 kg) | 160 | 160 | 1.067 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 150 mg | 12 años (40 kg) | 200 | 200 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 600 mg | 5 años (18.3 kg) | 91.5 | 91.5 | 0.152 | 0.15 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 600 mg | 6 años (20.5 kg) | 102.5 | 102.5 | 0.171 | 0.17 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 600 mg | 8 años (25.6 kg) | 128 | 128 | 0.213 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 600 mg | 10 años (32 kg) | 160 | 160 | 0.267 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | teniasis | Tableta 600 mg | 12 años (40 kg) | 200 | 200 | 0.333 | 0.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 150 mg | 5 años (18.3 kg) | 305.61 | 305.61 | 2.037 | 2 tableta | ✅  |
| praziquantel | neurocisticercosis | Tableta 150 mg | 6 años (20.5 kg) | 342.35 | 342.35 | 2.282 | 2.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 150 mg | 8 años (25.6 kg) | 427.52 | 427.52 | 2.85 | 2.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 150 mg | 10 años (32 kg) | 534.4 | 534.4 | 3.563 | 3.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 150 mg | 12 años (40 kg) | 668 | 668 | 4.453 | 4.45 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 600 mg | 5 años (18.3 kg) | 305.61 | 305.61 | 0.509 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 600 mg | 6 años (20.5 kg) | 342.35 | 342.35 | 0.571 | 0.57 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 600 mg | 8 años (25.6 kg) | 427.52 | 427.52 | 0.713 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 600 mg | 10 años (32 kg) | 534.4 | 534.4 | 0.891 | 0.89 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| praziquantel | neurocisticercosis | Tableta 600 mg | 12 años (40 kg) | 668 | 668 | 1.113 | 1.11 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-1-2-anos | Solución oral 15 mg/5 mL | 1 año (9.6 kg) | 9.6 | 9.6 | 3.2 | 3.2 mL | ✅  |
| prednisolona | crisis-asmatica-1-2-anos | Solución oral 15 mg/5 mL | 18 meses (10.9 kg) | 10.9 | 10.9 | 3.633 | 3.6 mL | ✅  |
| prednisolona | crisis-asmatica-1-2-anos | Tableta 5 mg | 1 año (9.6 kg) | 9.6 | 9.6 | 1.92 | 2 tableta | ✅  |
| prednisolona | crisis-asmatica-1-2-anos | Tableta 5 mg | 18 meses (10.9 kg) | 10.9 | 10.9 | 2.18 | 2.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-2-5-anos | Solución oral 15 mg/5 mL | 2 años (12.2 kg) | 12.2 | 12.2 | 4.067 | 4.1 mL | ✅  |
| prednisolona | crisis-asmatica-2-5-anos | Solución oral 15 mg/5 mL | 3 años (14.3 kg) | 14.3 | 14.3 | 4.767 | 4.8 mL | ✅  |
| prednisolona | crisis-asmatica-2-5-anos | Solución oral 15 mg/5 mL | 4 años (16.3 kg) | 16.3 | 16.3 | 5.433 | 5.4 mL | ✅  |
| prednisolona | crisis-asmatica-2-5-anos | Solución oral 15 mg/5 mL | 5 años (18.3 kg) | 18.3 | 18.3 | 6.1 | 6.1 mL | ✅  |
| prednisolona | crisis-asmatica-2-5-anos | Tableta 5 mg | 2 años (12.2 kg) | 12.2 | 12.2 | 2.44 | 2.44 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-2-5-anos | Tableta 5 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 2.86 | 3 tableta | ✅  |
| prednisolona | crisis-asmatica-2-5-anos | Tableta 5 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 3.26 | 3.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-2-5-anos | Tableta 5 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 3.66 | 3.66 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 6 años (20.5 kg) | 20.5 | 20.5 | 6.833 | 6.8 mL | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 8 años (25.6 kg) | 25.6 | 25.6 | 8.533 | 8.5 mL | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 10 años (32 kg) | 32 | 32 | 10.667 | 10.7 mL | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 12 años (40 kg) | 40 | 40 | 13.333 | 13.3 mL | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 14 años (50 kg) | 40 | 40 | 13.333 | 13.3 mL | ✅ tope aplicado |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 16 años (58 kg) | 40 | 40 | 13.333 | 13.3 mL | ✅ tope aplicado |
| prednisolona | crisis-asmatica-6-anos-o-mas | Solución oral 15 mg/5 mL | 17 años, obeso (95 kg) | 40 | 40 | 13.333 | 13.3 mL | ✅ tope aplicado |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 4.1 | 4 tableta | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 5.12 | 5 tableta | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 10 años (32 kg) | 32 | 32 | 6.4 | 6.4 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 12 años (40 kg) | 40 | 40 | 8 | 8 tableta | ✅  |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 14 años (50 kg) | 40 | 40 | 8 | 8 tableta | ✅ tope aplicado |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 16 años (58 kg) | 40 | 40 | 8 | 8 tableta | ✅ tope aplicado |
| prednisolona | crisis-asmatica-6-anos-o-mas | Tableta 5 mg | 17 años, obeso (95 kg) | 40 | 40 | 8 | 8 tableta | ✅ tope aplicado |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 1 mes (4.2 kg) | 4.2 | 4.2 | 4.2 | 4 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 2 meses (5.1 kg) | 5.1 | 5.1 | 5.1 | 5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 4 meses (6.4 kg) | 6.4 | 6.4 | 6.4 | 6.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 6 meses (7.6 kg) | 7.6 | 7.6 | 7.6 | 7.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 9 meses (8.6 kg) | 8.6 | 8.6 | 8.6 | 8.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 1 año (9.6 kg) | 9.6 | 9.6 | 9.6 | 9.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 18 meses (10.9 kg) | 10.9 | 10.9 | 10.9 | 11 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 2 años (12.2 kg) | 12.2 | 12.2 | 12.2 | 12 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 3 años (14.3 kg) | 14.3 | 14.3 | 14.3 | 14.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 4 años (16.3 kg) | 16.3 | 16.3 | 16.3 | 16.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 5 años (18.3 kg) | 18.3 | 18.3 | 18.3 | 18.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 6 años (20.5 kg) | 20.5 | 20.5 | 20.5 | 20.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 8 años (25.6 kg) | 25.6 | 25.6 | 25.6 | 25.5 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 10 años (32 kg) | 32 | 32 | 32 | 32 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 12 años (40 kg) | 40 | 40 | 40 | 40 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 14 años (50 kg) | 50 | 50 | 50 | 50 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 16 años (58 kg) | 58 | 58 | 58 | 58 mL | ✅  |
| prednisona | antiinflamatorio | Jarabe 5 mg/5 mL | 17 años, obeso (95 kg) | 80 | 80 | 80 | 80 mL | ✅ tope aplicado |
| prednisona | antiinflamatorio | Tableta 5 mg | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.84 | 0.84 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 5 mg | 2 meses (5.1 kg) | 5.1 | 5.1 | 1.02 | 1 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 4 meses (6.4 kg) | 6.4 | 6.4 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 5 mg | 6 meses (7.6 kg) | 7.6 | 7.6 | 1.52 | 1.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 9 meses (8.6 kg) | 8.6 | 8.6 | 1.72 | 1.72 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 5 mg | 1 año (9.6 kg) | 9.6 | 9.6 | 1.92 | 2 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 18 meses (10.9 kg) | 10.9 | 10.9 | 2.18 | 2.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 5 mg | 2 años (12.2 kg) | 12.2 | 12.2 | 2.44 | 2.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 2.86 | 3 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 3.26 | 3.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 5 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 3.66 | 3.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 4.1 | 4 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 5.12 | 5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 10 años (32 kg) | 32 | 32 | 6.4 | 6.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 12 años (40 kg) | 40 | 40 | 8 | 8 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 14 años (50 kg) | 50 | 50 | 10 | 10 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 16 años (58 kg) | 58 | 58 | 11.6 | 11.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 5 mg | 17 años, obeso (95 kg) | 80 | 80 | 16 | 16 tableta | ✅ tope aplicado |
| prednisona | antiinflamatorio | Tableta 20 mg | 1 mes (4.2 kg) | 4.2 | 4.2 | 0.21 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 2 meses (5.1 kg) | 5.1 | 5.1 | 0.255 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 4 meses (6.4 kg) | 6.4 | 6.4 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 6 meses (7.6 kg) | 7.6 | 7.6 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 9 meses (8.6 kg) | 8.6 | 8.6 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 1 año (9.6 kg) | 9.6 | 9.6 | 0.48 | 0.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 20 mg | 18 meses (10.9 kg) | 10.9 | 10.9 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 2 años (12.2 kg) | 12.2 | 12.2 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 3 años (14.3 kg) | 14.3 | 14.3 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 4 años (16.3 kg) | 16.3 | 16.3 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 5 años (18.3 kg) | 18.3 | 18.3 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 6 años (20.5 kg) | 20.5 | 20.5 | 1.025 | 1 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 20 mg | 8 años (25.6 kg) | 25.6 | 25.6 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 10 años (32 kg) | 32 | 32 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| prednisona | antiinflamatorio | Tableta 20 mg | 12 años (40 kg) | 40 | 40 | 2 | 2 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 20 mg | 14 años (50 kg) | 50 | 50 | 2.5 | 2.5 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 20 mg | 16 años (58 kg) | 58 | 58 | 2.9 | 3 tableta | ✅  |
| prednisona | antiinflamatorio | Tableta 20 mg | 17 años, obeso (95 kg) | 80 | 80 | 4 | 4 tableta | ✅ tope aplicado |
| primaquina | vivax-7-dias | Tableta 5 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.76 | 0.76 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.86 | 0.86 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.96 | 1 tableta | ✅  |
| primaquina | vivax-7-dias | Tableta 5 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 1.09 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 2.05 | 2 tableta | ✅  |
| primaquina | vivax-7-dias | Tableta 5 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 10 años (32 kg) | 16 | 16 | 3.2 | 3.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 5 mg | 12 años (40 kg) | 20 | 20 | 4 | 4 tableta | ✅  |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.507 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.573 | 0.57 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.727 | 0.73 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.813 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.953 | 1 tableta | ✅  |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 1.087 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 1.367 | 1.37 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 1.707 | 1.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 10 años (32 kg) | 16 | 16 | 2.133 | 2.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 7.5 mg | 12 años (40 kg) | 20 | 20 | 2.667 | 2.67 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 6 meses (7.6 kg) | 3.8 | 3.8 | 0.253 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 9 meses (8.6 kg) | 4.3 | 4.3 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 1 año (9.6 kg) | 4.8 | 4.8 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 18 meses (10.9 kg) | 5.45 | 5.45 | 0.363 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 2 años (12.2 kg) | 6.1 | 6.1 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 3 años (14.3 kg) | 7.15 | 7.15 | 0.477 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 4 años (16.3 kg) | 8.15 | 8.15 | 0.543 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 5 años (18.3 kg) | 9.15 | 9.15 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 6 años (20.5 kg) | 10.25 | 10.25 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 8 años (25.6 kg) | 12.8 | 12.8 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 10 años (32 kg) | 16 | 16 | 1.067 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | vivax-7-dias | Tableta 15 mg | 12 años (40 kg) | 20 | 20 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 6 meses (7.6 kg) | 1.9 | 1.9 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 9 meses (8.6 kg) | 2.15 | 2.15 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 1 año (9.6 kg) | 2.4 | 2.4 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 18 meses (10.9 kg) | 2.73 | 2.73 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 2 años (12.2 kg) | 3.05 | 3.05 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 3 años (14.3 kg) | 3.58 | 3.58 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 4 años (16.3 kg) | 4.08 | 4.08 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 5 años (18.3 kg) | 4.58 | 4.58 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 6 años (20.5 kg) | 5.13 | 5.13 | 1.025 | 1 tableta | ✅  |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 8 años (25.6 kg) | 6.4 | 6.4 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 10 años (32 kg) | 8 | 8 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 5 mg | 12 años (40 kg) | 10 | 10 | 2 | 2 tableta | ✅  |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 6 meses (7.6 kg) | 1.9 | 1.9 | 0.253 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 9 meses (8.6 kg) | 2.15 | 2.15 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 1 año (9.6 kg) | 2.4 | 2.4 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 18 meses (10.9 kg) | 2.73 | 2.73 | 0.363 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 2 años (12.2 kg) | 3.05 | 3.05 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 3 años (14.3 kg) | 3.58 | 3.58 | 0.477 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 4 años (16.3 kg) | 4.08 | 4.08 | 0.543 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 5 años (18.3 kg) | 4.58 | 4.58 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 6 años (20.5 kg) | 5.13 | 5.13 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 8 años (25.6 kg) | 6.4 | 6.4 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 10 años (32 kg) | 8 | 8 | 1.067 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 7.5 mg | 12 años (40 kg) | 10 | 10 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 6 meses (7.6 kg) | 1.9 | 1.9 | 0.127 | 0.13 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 9 meses (8.6 kg) | 2.15 | 2.15 | 0.143 | 0.14 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 1 año (9.6 kg) | 2.4 | 2.4 | 0.16 | 0.16 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 18 meses (10.9 kg) | 2.73 | 2.73 | 0.182 | 0.18 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 2 años (12.2 kg) | 3.05 | 3.05 | 0.203 | 0.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 3 años (14.3 kg) | 3.58 | 3.58 | 0.238 | 0.24 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 4 años (16.3 kg) | 4.08 | 4.08 | 0.272 | 0.27 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 5 años (18.3 kg) | 4.58 | 4.58 | 0.305 | 0.3 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 6 años (20.5 kg) | 5.13 | 5.13 | 0.342 | 0.34 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 8 años (25.6 kg) | 6.4 | 6.4 | 0.427 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 10 años (32 kg) | 8 | 8 | 0.533 | 0.53 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| primaquina | dosis-unica-malariae-falciparum | Tableta 15 mg | 12 años (40 kg) | 10 | 10 | 0.667 | 0.67 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 6 meses (7.6 kg) | 76 | 76 | 0.253 | 0.25 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 9 meses (8.6 kg) | 86 | 86 | 0.287 | 0.29 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 1 año (9.6 kg) | 96 | 96 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 18 meses (10.9 kg) | 109 | 109 | 0.363 | 0.36 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 2 años (12.2 kg) | 122 | 122 | 0.407 | 0.41 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 3 años (14.3 kg) | 143 | 143 | 0.477 | 0.5 tableta | ✅  |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 4 años (16.3 kg) | 163 | 163 | 0.543 | 0.54 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 5 años (18.3 kg) | 183 | 183 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 6 años (20.5 kg) | 205 | 205 | 0.683 | 0.68 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 8 años (25.6 kg) | 256 | 256 | 0.853 | 0.85 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 10 años (32 kg) | 320 | 320 | 1.067 | 1.07 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 12 años (40 kg) | 400 | 400 | 1.333 | 1.33 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 14 años (50 kg) | 500 | 500 | 1.667 | 1.67 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 16 años (58 kg) | 580 | 580 | 1.933 | 2 tableta | ✅  |
| quinina | falciparum-segunda-opcion | Tableta 300 mg (sulfato de quinina) | 17 años, obeso (95 kg) | 666.67 | 666.67 | 2.222 | 2.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 1 mes (4.2 kg) | 63 | 63 | 3.15 | 3.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 2 meses (5.1 kg) | 76.5 | 76.5 | 3.825 | 3.8 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 4 meses (6.4 kg) | 96 | 96 | 4.8 | 4.8 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 6 meses (7.6 kg) | 114 | 114 | 5.7 | 5.7 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 9 meses (8.6 kg) | 129 | 129 | 6.45 | 6.5 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 1 año (9.6 kg) | 144 | 144 | 7.2 | 7.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 18 meses (10.9 kg) | 163.5 | 163.5 | 8.175 | 8.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 2 años (12.2 kg) | 183 | 183 | 9.15 | 9.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 3 años (14.3 kg) | 214.5 | 214.5 | 10.725 | 10.7 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 4 años (16.3 kg) | 244.5 | 244.5 | 12.225 | 12.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 5 años (18.3 kg) | 274.5 | 274.5 | 13.725 | 13.7 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 6 años (20.5 kg) | 307.5 | 307.5 | 15.375 | 15.4 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 8 años (25.6 kg) | 384 | 384 | 19.2 | 19.2 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 10 años (32 kg) | 480 | 480 | 24 | 24 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 12 años (40 kg) | 600 | 600 | 30 | 30 mL | ✅  |
| rifampicina | tb-sensible | Suspensión 100 mg/5 mL | 14 años (50 kg) | 600 | 600 | 30 | 30 mL | ✅ tope aplicado |
| rifampicina | tb-sensible | Tableta 150 mg | 1 mes (4.2 kg) | 63 | 63 | 0.42 | 0.42 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.51 | 0.51 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 4 meses (6.4 kg) | 96 | 96 | 0.64 | 0.64 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 6 meses (7.6 kg) | 114 | 114 | 0.76 | 0.76 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 9 meses (8.6 kg) | 129 | 129 | 0.86 | 0.86 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 1 año (9.6 kg) | 144 | 144 | 0.96 | 1 tableta | ✅  |
| rifampicina | tb-sensible | Tableta 150 mg | 18 meses (10.9 kg) | 163.5 | 163.5 | 1.09 | 1.09 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 2 años (12.2 kg) | 183 | 183 | 1.22 | 1.22 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 3 años (14.3 kg) | 214.5 | 214.5 | 1.43 | 1.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 4 años (16.3 kg) | 244.5 | 244.5 | 1.63 | 1.63 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 5 años (18.3 kg) | 274.5 | 274.5 | 1.83 | 1.83 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 6 años (20.5 kg) | 307.5 | 307.5 | 2.05 | 2 tableta | ✅  |
| rifampicina | tb-sensible | Tableta 150 mg | 8 años (25.6 kg) | 384 | 384 | 2.56 | 2.56 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 10 años (32 kg) | 480 | 480 | 3.2 | 3.2 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 150 mg | 12 años (40 kg) | 600 | 600 | 4 | 4 tableta | ✅  |
| rifampicina | tb-sensible | Tableta 150 mg | 14 años (50 kg) | 600 | 600 | 4 | 4 tableta | ✅ tope aplicado |
| rifampicina | tb-sensible | Tableta 300 mg | 1 mes (4.2 kg) | 63 | 63 | 0.21 | 0.21 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 2 meses (5.1 kg) | 76.5 | 76.5 | 0.255 | 0.26 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 4 meses (6.4 kg) | 96 | 96 | 0.32 | 0.32 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 6 meses (7.6 kg) | 114 | 114 | 0.38 | 0.38 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 9 meses (8.6 kg) | 129 | 129 | 0.43 | 0.43 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 1 año (9.6 kg) | 144 | 144 | 0.48 | 0.48 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 18 meses (10.9 kg) | 163.5 | 163.5 | 0.545 | 0.55 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 2 años (12.2 kg) | 183 | 183 | 0.61 | 0.61 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 3 años (14.3 kg) | 214.5 | 214.5 | 0.715 | 0.71 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 4 años (16.3 kg) | 244.5 | 244.5 | 0.815 | 0.81 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 5 años (18.3 kg) | 274.5 | 274.5 | 0.915 | 0.92 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 6 años (20.5 kg) | 307.5 | 307.5 | 1.025 | 1 tableta | ✅  |
| rifampicina | tb-sensible | Tableta 300 mg | 8 años (25.6 kg) | 384 | 384 | 1.28 | 1.28 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 10 años (32 kg) | 480 | 480 | 1.6 | 1.6 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| rifampicina | tb-sensible | Tableta 300 mg | 12 años (40 kg) | 600 | 600 | 2 | 2 tableta | ✅  |
| rifampicina | tb-sensible | Tableta 300 mg | 14 años (50 kg) | 600 | 600 | 2 | 2 tableta | ✅ tope aplicado |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 1 mes (4.2 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 2 meses (5.1 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 4 meses (6.4 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 6 meses (7.6 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 9 meses (8.6 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 1 año (9.6 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 18 meses (10.9 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 2 años (12.2 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 3 años (14.3 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 4 años (16.3 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-hasta-5 | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 5 años (18.3 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 6 años (20.5 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 8 años (25.6 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 10 años (32 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 12 años (40 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 14 años (50 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 16 años (58 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-inhalador-6-o-mas | Inhalador 0.1 mg (100 µg) por puff, con aerocámara | 17 años, obeso (95 kg) | 0.4 | 0.4 | 4 | 4 puff | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 1 mes (4.2 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 2 meses (5.1 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 4 meses (6.4 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 6 meses (7.6 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 9 meses (8.6 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 1 año (9.6 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 18 meses (10.9 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 2 años (12.2 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 3 años (14.3 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 4 años (16.3 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 5 años (18.3 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 6 años (20.5 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 8 años (25.6 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 10 años (32 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 12 años (40 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 14 años (50 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 16 años (58 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | crisis-nebulizado | Solución para nebulizar 5 mg/mL | 17 años, obeso (95 kg) | 2.5 | 2.5 | 0.5 | 0.5 mL | ✅  |
| salbutamol | vo-2-5-anos | Jarabe 2 mg/5 mL | 2 años (12.2 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| salbutamol | vo-2-5-anos | Jarabe 2 mg/5 mL | 3 años (14.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| salbutamol | vo-2-5-anos | Jarabe 2 mg/5 mL | 4 años (16.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| salbutamol | vo-2-5-anos | Jarabe 2 mg/5 mL | 5 años (18.3 kg) | 1 | 1 | 2.5 | 2.5 mL | ✅  |
| salbutamol | vo-6-12-anos | Jarabe 2 mg/5 mL | 6 años (20.5 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| salbutamol | vo-6-12-anos | Jarabe 2 mg/5 mL | 8 años (25.6 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| salbutamol | vo-6-12-anos | Jarabe 2 mg/5 mL | 10 años (32 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| salbutamol | vo-6-12-anos | Jarabe 2 mg/5 mL | 12 años (40 kg) | 2 | 2 | 5 | 5 mL | ✅  |
| salbutamol | vo-6-12-anos | Tableta 4 mg | 6 años (20.5 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| salbutamol | vo-6-12-anos | Tableta 4 mg | 8 años (25.6 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| salbutamol | vo-6-12-anos | Tableta 4 mg | 10 años (32 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| salbutamol | vo-6-12-anos | Tableta 4 mg | 12 años (40 kg) | 2 | 2 | 0.5 | 0.5 tableta | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 2 años (12.2 kg) | 488 | 488 | 2.44 | 2.4 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 3 años (14.3 kg) | 572 | 572 | 2.86 | 2.9 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 4 años (16.3 kg) | 652 | 652 | 3.26 | 3.3 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 5 años (18.3 kg) | 732 | 732 | 3.66 | 3.7 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 6 años (20.5 kg) | 820 | 820 | 4.1 | 4.1 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 8 años (25.6 kg) | 1024 | 1024 | 5.12 | 5.1 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 10 años (32 kg) | 1280 | 1280 | 6.4 | 6.4 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 12 años (40 kg) | 1600 | 1600 | 8 | 8 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 14 años (50 kg) | 2000 | 2000 | 10 | 10 mL | ✅  |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 16 años (58 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| sulfato-magnesio | asma-grave | Sulfato de magnesio 20 % (200 mg/mL) | 17 años, obeso (95 kg) | 2000 | 2000 | 10 | 10 mL | ✅ tope aplicado |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 1 mes (4.2 kg) | 42 | 42 | 0.84 | 0.85 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 2 meses (5.1 kg) | 51 | 51 | 1.02 | 1 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 4 meses (6.4 kg) | 64 | 64 | 1.28 | 1.3 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 6 meses (7.6 kg) | 76 | 76 | 1.52 | 1.5 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 9 meses (8.6 kg) | 86 | 86 | 1.72 | 1.7 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 1 año (9.6 kg) | 96 | 96 | 1.92 | 1.9 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 18 meses (10.9 kg) | 109 | 109 | 2.18 | 2.2 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 2 años (12.2 kg) | 122 | 122 | 2.44 | 2.45 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 3 años (14.3 kg) | 143 | 143 | 2.86 | 2.85 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 4 años (16.3 kg) | 163 | 163 | 3.26 | 3.25 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 5 años (18.3 kg) | 183 | 183 | 3.66 | 3.65 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 6 años (20.5 kg) | 205 | 205 | 4.1 | 4.1 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 8 años (25.6 kg) | 256 | 256 | 5.12 | 5.1 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 10 años (32 kg) | 320 | 320 | 6.4 | 6.4 mL | ✅  |
| vancomicina | ninos-1-mes | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 12 años (40 kg) | 400 | 400 | 8 | 8 mL | ✅  |
| vancomicina | neonato-carga | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 3 días, bajo peso (2 kg) (2 kg) | 30 | 30 | 0.6 | 0.6 mL | ✅  |
| vancomicina | neonato-carga | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 5 días (3.2 kg) (3.2 kg) | 48 | 48 | 0.96 | 0.95 mL | ✅  |
| vancomicina | neonato-carga | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 15 días (3.6 kg) (3.6 kg) | 54 | 54 | 1.08 | 1.1 mL | ✅  |
| vancomicina | neonato-semana-1 | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 3 días, bajo peso (2 kg) (2 kg) | 20 | 20 | 0.4 | 0.4 mL | ✅  |
| vancomicina | neonato-semana-1 | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 5 días (3.2 kg) (3.2 kg) | 32 | 32 | 0.64 | 0.65 mL | ✅  |
| vancomicina | neonato-semanas-2-4 | Frasco 500 mg reconstituido a 50 mg/mL (con 10 mL de agua estéril) | 15 días (3.6 kg) (3.6 kg) | 36 | 36 | 0.72 | 0.7 mL | ✅  |
| vitamina-a | sarampion-6-11-meses | Tableta 100 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-6-11-meses | Tableta 100 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-6-11-meses | Tableta 200 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| vitamina-a | sarampion-6-11-meses | Tableta 200 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| vitamina-a | sarampion-6-11-meses | Tableta 50 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-6-11-meses | Tableta 50 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 6 años (20.5 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 8 años (25.6 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 10 años (32 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 12 años (40 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 14 años (50 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 16 años (58 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 100 000 UI | 17 años, obeso (95 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 6 años (20.5 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 8 años (25.6 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 10 años (32 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 12 años (40 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 14 años (50 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 16 años (58 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 200 000 UI | 17 años, obeso (95 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 6 años (20.5 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 8 años (25.6 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 10 años (32 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 12 años (40 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 14 años (50 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 16 años (58 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | sarampion-1-ano-o-mas | Tableta 50 000 UI | 17 años, obeso (95 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-6-11-meses | Tableta 100 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-6-11-meses | Tableta 100 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-6-11-meses | Tableta 200 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| vitamina-a | prevencion-6-11-meses | Tableta 200 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 0.5 | 0.5 tableta | ✅ no medible con esta presentación: se muestra el valor exacto |
| vitamina-a | prevencion-6-11-meses | Tableta 50 000 UI | 6 meses (7.6 kg) | 100000 | 100000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-6-11-meses | Tableta 50 000 UI | 9 meses (8.6 kg) | 100000 | 100000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 100 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 2 | 2 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 200 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 1 | 1 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 1 año (9.6 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 18 meses (10.9 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 2 años (12.2 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 3 años (14.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 4 años (16.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| vitamina-a | prevencion-12-59-meses | Tableta 50 000 UI | 5 años (18.3 kg) | 200000 | 200000 | 4 | 4 tableta | ✅  |
| zinc | diarrea-menor-6-meses | Tableta dispersable 20 mg (disolver en agua o leche materna) | 1 mes (4.2 kg) | 10 | 10 | 0.5 | 0.5 tableta | ✅  |
| zinc | diarrea-menor-6-meses | Tableta dispersable 20 mg (disolver en agua o leche materna) | 2 meses (5.1 kg) | 10 | 10 | 0.5 | 0.5 tableta | ✅  |
| zinc | diarrea-menor-6-meses | Tableta dispersable 20 mg (disolver en agua o leche materna) | 4 meses (6.4 kg) | 10 | 10 | 0.5 | 0.5 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 6 meses (7.6 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 9 meses (8.6 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 1 año (9.6 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 18 meses (10.9 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 2 años (12.2 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 3 años (14.3 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 4 años (16.3 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 5 años (18.3 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 6 años (20.5 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 8 años (25.6 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 10 años (32 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 12 años (40 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 14 años (50 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 16 años (58 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
| zinc | diarrea-6-meses-o-mas | Tableta dispersable 20 mg (disolver en agua o leche materna) | 17 años, obeso (95 kg) | 20 | 20 | 1 | 1 tableta | ✅  |
