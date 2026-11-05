# Simulación de médico: app frente a cálculo manual

Generado por `npm run sim:report` (tools/clinical-sim). El cálculo manual se escribió aparte del motor
de la app: multiplica el peso por la dosis, divide entre las tomas, aplica los topes y divide entre la
concentración **leída del texto impreso de la presentación** (p. ej. "250 mg/5 mL").

## Resumen
- Casos simulados: **4662** (10 fármacos × reglas × presentaciones × 18 pacientes típicos de 1 mes a 17 años).
- Casos calculables: **2059**. Fuera del rango de edad de la regla: 2603 (la app se negó a calcular en todos, que es lo correcto).
- **Coincidencias: 2059/2059 (100.0 %)**. Discrepancias: 0.
- Dosis en mg idéntica al cálculo manual: 2059/2059.
- Diferencia de volumen por redondeo a la medida (0.1 mL, 1 gota, ½ o 1 tableta): media 0.51 %, máxima 4.92 %. Nunca supera el 5 %; cuando el redondeo superaría el 5 %, la app muestra el valor exacto y avisa.
- En ningún caso la cantidad mostrada supera la dosis máxima por toma.

## Casos calculables
| Fármaco | Regla | Presentación | Paciente | mg manual | mg app | Cantidad exacta | Cantidad app | Resultado |
|---|---|---|---|---|---|---|---|---|
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
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 4 años (16.3 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 5 años (18.3 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-15-24-kg | Tableta 6 mg | 6 años (20.5 kg) | 3 | 3 | 0.5 | 0.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-25-35-kg | Tableta 6 mg | 8 años (25.6 kg) | 6 | 6 | 1 | 1 tableta | ✅  |
| ivermectina | estrongiloidiasis-25-35-kg | Tableta 6 mg | 10 años (32 kg) | 6 | 6 | 1 | 1 tableta | ✅  |
| ivermectina | estrongiloidiasis-36-50-kg | Tableta 6 mg | 12 años (40 kg) | 9 | 9 | 1.5 | 1.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-36-50-kg | Tableta 6 mg | 14 años (50 kg) | 9 | 9 | 1.5 | 1.5 tableta | ✅  |
| ivermectina | estrongiloidiasis-51-65-kg | Tableta 6 mg | 16 años (58 kg) | 12 | 12 | 2 | 2 tableta | ✅  |
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
