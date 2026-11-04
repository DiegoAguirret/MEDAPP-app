# Simulación de médico: app frente a cálculo manual

Generado por `npm run sim:report` (tools/clinical-sim). El cálculo manual se escribió aparte del motor
de la app: multiplica el peso por la dosis, divide entre las tomas, aplica los topes y divide entre la
concentración **leída del texto impreso de la presentación** (p. ej. "250 mg/5 mL").

## Resumen
- Casos simulados: **1800** (10 fármacos × reglas × presentaciones × 18 pacientes típicos de 1 mes a 17 años).
- Casos calculables: **1031**. Fuera del rango de edad de la regla: 769 (la app se negó a calcular en todos, que es lo correcto).
- **Coincidencias: 1031/1031 (100.0 %)**. Discrepancias: 0.
- Dosis en mg idéntica al cálculo manual: 1031/1031.
- Diferencia de volumen por redondeo a la medida (0.1 mL, 1 gota, ½ o 1 tableta): media 0.43 %, máxima 4.92 %. Nunca supera el 5 %; cuando el redondeo superaría el 5 %, la app muestra el valor exacto y avisa.
- En ningún caso la cantidad mostrada supera la dosis máxima por toma.

## Casos calculables
| Fármaco | Regla | Presentación | Paciente | mg manual | mg app | Cantidad exacta | Cantidad app | Resultado |
|---|---|---|---|---|---|---|---|---|
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
