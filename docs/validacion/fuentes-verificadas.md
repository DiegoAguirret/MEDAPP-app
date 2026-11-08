# Verificación de las fichas contra fuentes oficiales

**Fecha:** 2026-11-04 · **Método:** cada valor se tomó de un documento descargado y leído en esta fecha (openFDA/DailyMed, CIMA-AEMPS, PubMed/PMC, OMS IRIS, MINSA/DGE, GINA, CPS). No se usaron datos de memoria. Las citas son textuales y breves (las etiquetas de la FDA son de dominio público).

> Las 10 fichas siguen en **borrador** hasta que un médico las valide. Basta **1 fuente oficial** por regla. El libro de Peña Camarena se usa como fuente adicional y para las presentaciones y marcas comercializadas en Perú.

| Fármaco        | Valor en la app                                                  | Fuente                                                        | Cita / dato verificado                                                                                                                          | Estado                                                                 |
| -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Paracetamol    | 10–15 mg/kg cada 6 h                                             | AEMPS FT 49302 (Apiretal)                                     | "15 mg/kg cada 6 horas ó 10 mg/kg cada 4 horas"                                                                                                 | ✅                                                                     |
| Paracetamol    | máx. 3 g/día (>38 kg)                                            | AEMPS FT 49302                                                | "los 3 g al día en adultos y en niños con más de 38 kg"                                                                                         | ✅                                                                     |
| Paracetamol    | ≤60 mg/kg/día de 29 días a 2 años                                | FDA paracetamol IV (0f67c1bd…)                                | "Infants (29 days to 2 years of age): 15 mg/kg every 6 hours to a maximum of 60 mg/kg per day"                                                  | ✅ (la pauta de la app da 60 mg/kg/día como máximo)                    |
| Ibuprofeno     | 5–10 mg/kg cada 8 h, 6 meses–11 años                             | FDA suspensión (141b7964…)                                    | "5 mg/kg if the baseline temperature is less than 102.5°F, or 10 mg/kg…"; "maximum daily dose is 40 mg/kg"                                      | ✅                                                                     |
| Ibuprofeno     | tope 400 mg/toma, 1200 mg/día                                    | FDA venta libre 200 mg (00653b7c…)                            | "2 tablets may be used… do not exceed 6 tablets in 24 hours" (12 años o más)                                                                    | ✅                                                                     |
| Metamizol      | 8–16 mg/kg/dosis, hasta 7–9 años                                 | AEMPS FT 83494 (gotas)                                        | "En niños de hasta 7-9 años de edad, se pueden administrar de 8 a 16 mg de metamizol por kg"                                                    | ✅                                                                     |
| Metamizol      | 1 gota = 25 mg                                                   | AEMPS FT 83494                                                | "1 ml de solución (20 gotas) contiene 500 mg… 1 gota contiene 25 mg"                                                                            | ✅                                                                     |
| Metamizol      | cada 6–8 h, hasta 4 dosis/día                                    | AEMPS FT 42304 (inyectable)                                   | "una dosis única hasta 4 veces al día, en intervalos de 6 a 8 horas"                                                                            | ✅ (de la ficha inyectable)                                            |
| Metamizol      | desde 3 meses / 5 kg                                             | AEMPS FT 42304                                                | La tabla empieza en "5-8 kg / 3-11 meses"; la ficha **no** prohíbe expresamente usos menores                                                    | ⚠️ alcance conservador                                                 |
| Amoxicilina    | ≤3 meses: 30 mg/kg/día cada 12 h                                 | FDA amoxicilina (00fbd46e…)                                   | "The upper dose for neonates and infants aged 3 months or younger is 30 mg/kg/day divided every 12 hours"                                       | ⚠️ 1 fuente                                                            |
| Amoxicilina    | OMA 80–90 mg/kg/día cada 12 h, máx. 2 g/dosis                    | AAP EQIPP (Lieberthal 2013)                                   | "High-Dose Amoxicillin 80–90 mg/kg/day po divided BID (max dose 2 g)"                                                                           | ✅                                                                     |
| Amoxicilina    | OMA de 6 meses a 12 años                                         | AAP 2013 (PubMed 23439909)                                    | "children from 6 months through 12 years of age with uncomplicated AOM"                                                                         | ✅ (hay una fe de erratas de 2014 que no se pudo leer)                 |
| Amoxicilina    | faringitis 50 mg/kg/día una vez, máx. 1 g, 10 días; desde 3 años | IDSA 2012 (PMC7108032)                                        | "50 mg/kg once daily (max = 1000 mg)… 10 d"; "not indicated for children <3 years old"                                                          | ⚠️ 1 fuente                                                            |
| Amox./clav.    | 25–45 mg/kg/día cada 12 h desde 12 semanas, hasta 875 mg/dosis   | FDA (00cf4429…)                                               | "25 to 45 mg/kg/day every 12 hours… up to the adult dose"                                                                                       | ⚠️ 1 fuente (en la UE se usan otras proporciones)                      |
| Azitromicina   | 10 mg/kg día 1 y 5 mg/kg días 2–5, desde 6 meses                 | FDA (003307c5…) y AEMPS FT 71180                              | "10 mg/kg as a single dose on Day 1 followed by 5 mg/kg once daily on Days 2 through 5"; "no debe exceder la dosis diaria en adultos de 500 mg" | ✅                                                                     |
| Cefalexina     | 25–50 mg/kg/día, mayores de 1 año, máx. 4 g/día                  | FDA (02b5cd6f…)                                               | "Pediatric Patients (over 1 year of age)… 25 to 50 mg/kg given in equally divided doses"; "up to 4 grams daily"                                 | ⚠️ 1 fuente; el intervalo cada 6 h no está fijado en la ficha          |
| Cetirizina     | 6–23 meses: 2.5 mg/día                                           | FDA solución Rx (05324e41…)                                   | "6 months to 23 months of age is 2.5 mg (½ teaspoonful) once daily"                                                                             | ⚠️ 1 fuente                                                            |
| Cetirizina     | 2–5 años: 2.5–5 mg/día                                           | FDA Rx y AEMPS FT 80453                                       | "maximum dose of 5 mg per day"; AEMPS: "2,5 mg dos veces al día"                                                                                | ✅                                                                     |
| Cetirizina     | 6 años o más: 5–10 mg/día                                        | FDA venta libre (0210f9e5…) y AEMPS FT 80453                  | "5 mL or 10 mL once daily… do not take more than 10 mL in 24 hours"                                                                             | ✅                                                                     |
| Ondansetrón    | 0.15 mg/kg dosis única, máx. 8 mg, desde 6 meses                 | CPS 2018                                                      | "0.15 mg/kg in liquid format (to a maximum dose of 8 mg)"; "six months and older"                                                               | ✅                                                                     |
| Ondansetrón    | edad según IDSA                                                  | IDSA 2017 (PMC5850553)                                        | "may be given… in children >4 years of age"                                                                                                     | ✅ (se muestra como nota)                                              |
| Prednisolona   | 1–2 mg/kg/día                                                    | FDA solución (14b7f41b…)                                      | "1-2 mg/kg/day in single or divided doses" (recomendación NHLBI)                                                                                | ✅                                                                     |
| Prednisolona   | máx. 20 mg (<2 años), 30 mg (2–5), 40 mg (6–11), 3–5 días        | GINA 2025                                                     | "maximum of 20 mg/day for children under 2 years of age and 30 mg/day for children aged 2–5 years"; "maximum of 40 mg/day"                      | ✅ (GINA tiene un corte distinto en otra página; se indica en la nota) |
| Plan B         | SRO 50–100 mL/kg en 3–4 h                                        | MINSA RM 755-2017 (vía DGE)                                   | "50 a 100 ml/kg de peso en 3 a 4 horas"                                                                                                         | ✅ (OMS: 75 mL/kg en 4 h)                                              |
| Plan C         | 30 + 70 mL/kg; <12 m en 1 h + 5 h; ≥12 m en 30 min + 2.5 h       | MINSA y OMS Pocket Book 2013                                  | "Lactantes < 12 meses: 30 ml/kg en 1 hora; luego 70 ml/kg en 5 horas"                                                                           | ✅                                                                     |
| Holliday-Segar | 100/50/20 mL/kg/día                                              | Holliday & Segar 1957 (PubMed 13431307), revisión PMC12543346 | "100 mL/kg… first 10 kg… 50 mL/kg… 10–20 kg… 20 mL/kg… above 20 kg"                                                                             | ✅ (la OMS usa 25 mL/kg por encima de 20 kg)                           |

## Norma peruana: Formulario Nacional de Medicamentos Esenciales (DIGEMID, 2.ª ed. 2008)

| Fármaco                               | FNME (niños)                                                                               | Decisión en la app                                                                                                       |
| ------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Paracetamol                           | 10–15 mg/kg cada 4–6 h; adulto máx. 4 g/día                                                | Máximo 4 g/día (FNME + FDA); la diferencia con la AEMPS (3 g) se muestra por país                                        |
| Ibuprofeno                            | 6 m–12 a: 5 o 10 mg/kg (fiebre alta) cada 4–6 h                                            | Coincide; la app usa cada 8 h (rango FDA 6–8 h)                                                                          |
| Metamizol                             | Solo inyectable: 10–12 mg/kg IM                                                            | Respalda el rango de la AEMPS (8–16) frente al del libro                                                                 |
| Amoxicilina                           | <3 m: 30 mg/kg/día cada 12 h; >3 m: 20 (leve) o 40 (grave/respiratoria) mg/kg/día cada 8 h | Nueva regla «infecciones comunes» 20–40 mg/kg/día cada 8 h; la dosis alta para otitis (AAP) se mantiene aparte, con nota |
| Amox./clav.                           | <3 m: 15 mg/kg cada 12 h; >3 m: 12.5–22.5 mg/kg cada 12 h; suspensión 7:1                  | Coincide con la FDA; se añade la regla para menores de 3 meses                                                           |
| Azitromicina                          | Otitis: 10 mg/kg el día 1 y 5 mg/kg días 2–5; faringitis (>2 a): 12 mg/kg × 5 días         | Coincide; se añade la faringitis                                                                                         |
| Cefalexina                            | 25–50 (leve-moderada) y 50–100 (grave) mg/kg/día cada 6 h; **máx. 3 g/día**                | **Prioridad Perú:** máximo 3 g/día (la FDA admite 4 g, se muestra por país)                                              |
| Ondansetrón, cetirizina, prednisolona | No figuran para estas indicaciones (o la extracción del PDF no fue fiable)                 | Se mantienen las fuentes FDA, AEMPS, CPS y GINA                                                                          |

## Comparación con el libro de Peña Camarena (Dosificación de medicamentos en pediatría)

| Fármaco      | Libro                                                                 | App                                                    | Resultado                                                                                                          |
| ------------ | --------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Paracetamol  | 10–15 mg/kg/dosis cada 4–6 h; gotas 100 mg/mL; jarabe 120 mg/5 mL     | 10–15 mg/kg cada 6 h                                   | Coincide                                                                                                           |
| Ibuprofeno   | 5–10 mg/kg/dosis cada 6–8 h; jarabe 100 mg/5 mL; gotas 40 mg/mL       | 5–10 mg/kg cada 8 h                                    | Coincide; se añaden las gotas 40 mg/mL                                                                             |
| Metamizol    | 15–25 mg/kg/dosis; **gotas 400 mg/mL**; jarabe 250 mg/5 mL            | 8–16 mg/kg (AEMPS)                                     | **Difiere**: la app usa la ficha AEMPS y muestra el rango del libro como nota; se usan las presentaciones peruanas |
| Amoxicilina  | 30–50 mg/kg/día cada 8 h; otitis 80 mg/kg/día cada 8–12 h             | otitis 80–90 mg/kg/día cada 12 h                       | Coincide; se añade el jarabe 125 mg/5 mL                                                                           |
| Azitromicina | 10 mg/kg/día por 3 días                                               | se añade el esquema de 3 días (también en FDA y AEMPS) | Coincide                                                                                                           |
| Cefalexina   | 50–100 mg/kg/día cada 6 h, máx. 4 g/día                               | 25–50 habitual y 50–100 en graves, cada 6 h            | Coincide; el libro confirma el intervalo cada 6 h                                                                  |
| Cetirizina   | 0.25 mg/kg/día cada 12–24 h; no en menores de 6 meses; gotas 10 mg/mL | dosis fija por edad (FDA)                              | Método distinto, mismo límite de edad; se añaden las gotas 10 mg/mL                                                |
| Prednisona   | 1–2 mg/kg/día (máx. 60 mg)                                            | prednisolona 1–2 mg/kg/día con topes GINA              | Coincide en mg/kg                                                                                                  |
| Ondansetrón  | No figura                                                             | CPS / IDSA                                             | —                                                                                                                  |

Las marcas (Panadol, Atamel, Afebril, Doloral, Antalgina, Velamox, Amoxidal, Zitromax, Keflex, Alermizol) son las que lista el libro; pueden haber cambiado desde su edición.

## Correcciones aplicadas tras la verificación

- **Paracetamol:** máximo diario de 4 g → 3 g (AEMPS). Una nota indica 60 mg/kg/día en menores de 2 años (FDA).
- **Cefalexina:** desde 1 año (antes, desde 1 mes).
- **Metamizol:** solo gotas (1 gota = 25 mg) hasta 8 años y 30 kg, con tope de 500 mg/dosis y 2 g/día.
- **Ondansetrón:** tope de 4 mg → 8 mg (CPS).
- **Plan B:** 75 mL/kg en 4 h → 50–100 mL/kg en 3–4 h (MINSA).
- **Plan C:** líquido "solución polielectrolítica (MINSA) o Lactato de Ringer (OMS)".
- **Ibuprofeno:** limitado a 6 meses–11 años (alcance de la ficha FDA pediátrica).
- **Fuentes no descargadas** (Harriet Lane, BNFc, Pediamécum, Red Book): retiradas de las citas.

## Pendientes que solo puede cerrar un médico o un registro oficial

1. Confirmar con el registro DIGEMID que las presentaciones y marcas del libro siguen comercializándose.
2. Que el médico revise las dos diferencias con el libro: dosis de metamizol y método de la cetirizina.

## Fase B, lote 1 (10 fármacos) — verificado el 04/11/2026

Fuente principal: FNME 2008 (DIGEMID), sección «Niños» de cada monografía. Se contrastó con el libro de Peña Camarena (presentaciones y marcas peruanas), el Pocket Book de la OMS (2013) y GINA 2025. Los topes salen de la dosis de adulto del propio FNME, salvo que se indique otra cosa.

| Fármaco         | Dosis pediátrica (FNME)                                                                           | Tope usado                           | Contraste                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| Loratadina      | 2–12 años: 5 mg/día si pesa menos de 30 kg; 10 mg/día desde 30 kg                                 | 5 / 10 mg/día                        | Peña: igual (0.25 mg/kg/día, corte en 30 kg)                                    |
| Clorfenamina    | 2–5 años 1 mg c/4–6 h (máx. 6 mg/día); 6–12 años 2 mg c/4–6 h (máx. 12 mg/día)                    | 6 / 12 / 24 mg/día                   | Peña: 0.35 mg/kg/día c/6 h; gotas 1 mL = 1 mg                                   |
| Dicloxacilina   | Menos de 40 kg: 12.5–25 mg/kg/día c/6 h; severa 50–100 mg/kg/día c/6 h                            | 250 mg/toma (leve); 2 g/día (severa) | Peña: 25–100 mg/kg/día, máx. 2 g/día. FNME adulto: máx. 6 g/día (nota por país) |
| Eritromicina    | 7.5–12.5 mg/kg c/6 h; faringitis 10–15 mg/kg c/12 h × 10 d; tos ferina 10–12.5 mg/kg c/6 h × 14 d | 4 g/día; 500 mg c/12 h; 2 g/día      | OMS: tos ferina 12.5 mg/kg c/6 h × 10 d (nota por país)                         |
| Metronidazol    | Giardiasis 15 mg/kg/día c/8 h × 5–7 d; amebiasis 30–50 mg/kg/día c/8 h × 5–10 d                   | 250 / 750 mg por toma                | Peña: igual; jarabe 125 y 250 mg/5 mL. OMS: 10 mg/kg c/8 h (nota por país)      |
| Cotrimoxazol    | Más de 2 meses y hasta 40 kg: 8–12 mg/kg/día de TMP c/12 h                                        | 160 mg de TMP por toma               | OMS: evitar en prematuros o neonatos con ictericia                              |
| Mebendazol      | Más de 2 años: 100 mg c/12 h × 3 d; 500 mg dosis única; oxiuros 100 mg dosis única                | dosis fijas                          | OMS: mismas pautas                                                              |
| Albendazol      | Más de 2 años 400 mg; menores de 2 años 200 mg (dosis única)                                      | dosis fijas                          | Peña: igual (Zentel)                                                            |
| Zinc            | — (no figura en el FNME)                                                                          | 10 / 20 mg/día                       | OMS: menores de 6 meses 10 mg/día, desde 6 meses 20 mg/día × 10–14 d            |
| Salbutamol oral | 2–5 años 1–2 mg c/6–8 h (máx. 12 mg/día); 6–12 años 2–4 mg 3–4 veces/día (máx. 24 mg/día)         | 12 / 24 mg/día                       | GINA 2025: no recomienda la vía oral (nota por país)                            |

### Decisiones tomadas en este lote

- **Intervalo «cada 4 a 6 h» o «cada 6 a 8 h»:** se calcula con el intervalo más largo (6 h u 8 h), que nunca supera el tope diario.
- **Albendazol en menores de 2 años:** el FNME no fija una edad mínima. La app calcula desde el año de edad.
- **Clorfenamina de 1 a 2 años:** el FNME da 0.0875 mg/kg c/6 h sin tope, así que esa pauta no se calcula.
- **Peso por indicación:** se añadió al motor `weightMinKg` (incluido) y `weightMaxKg` (excluido). La loratadina, la dicloxacilina, la eritromicina y el cotrimoxazol los usan.
- **Marcas:** solo las que lista el libro de Peña. Se descartó una marca cuyo nombre salió dudoso en el escaneo.

## Fase B, lote 2 (10 fármacos) — verificado el 04/11/2026

Fuentes nuevas: **NTS 213-MINSA/DGIESP-2024** sobre anemia, aprobada por la RM 251-2024-MINSA y descargada de gob.pe. También seis fichas FDA de DailyMed obtenidas con openFDA: aciclovir, fluconazol, ivermectina, nitazoxanida (Alinia), nitrofurantoína suspensión y dimenhidrinato OTC. Cuando el texto escaneado del FNME salió dañado («6 mg el primer día», «máximo 80 mg diario»), manda la ficha FDA, que dice lo mismo con las unidades completas.

| Fármaco          | Dosis                                                                                                | Tope usado                                                                  | Fuentes                                                             |
| ---------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Aciclovir        | Varicela, 2 años o más: 20 mg/kg c/6 h × 5 d                                                         | 800 mg/toma (adulto desde 40 kg)                                            | FDA; FNME (igual)                                                   |
| Fluconazol       | Candidiasis orofaríngea/esofágica: 6 mg/kg el día 1, luego 3 mg/kg/día                               | 200 mg el día 1; 100 mg/día                                                 | FDA (dosis adulto 200 → 100 mg); FNME                               |
| Ivermectina      | Estrongiloidiasis, dosis única por peso: 15–24 kg 3 mg; 25–35 kg 6 mg; 36–50 kg 9 mg; 51–65 kg 12 mg | por banda                                                                   | FDA (tabla, unos 200 µg/kg; no en menores de 15 kg); FNME 200 µg/kg |
| Nitazoxanida     | 1–3 años 100 mg; 4–11 años 200 mg; 12 años o más 500 mg; c/12 h × 3 d                                | dosis fijas                                                                 | FDA (no figura en el FNME)                                          |
| Nitrofurantoína  | ITU 5–7 mg/kg/día c/6 h × 7 d; profilaxis 1 mg/kg/día                                                | 100 mg/toma                                                                 | FNME y FDA (coinciden)                                              |
| Hierro           | Anemia: 3 mg/kg/día de hierro elemental, una toma, 6 meses                                           | 40 mg (menores de 6 m) · 70 mg (6–35 m) · 90 mg (36–59 m) · 120 mg (5–11 a) | NTS 213-2024, tablas 3, 16 y 17                                     |
| Prednisona       | 1–2 mg/kg/día                                                                                        | 80 mg/día                                                                   | Libro Peña; FNME (presentaciones); GINA para el asma (nota)         |
| Ceftriaxona IV   | 50–75 mg/kg/día (inicio 75); meningitis 50 mg/kg c/12 h                                              | 2 g/dosis; 4 g/día                                                          | FNME; OMS (80 mg/kg/día; reconstitución 1 g/10 mL)                  |
| Ampicilina IV/IM | 25–50 mg/kg c/6 h (OMS 50)                                                                           | 2 g/dosis; 8 g/día                                                          | OMS (reconstitución 500 mg/2.5 mL); FNME                            |
| Dimenhidrinato   | 2–5 años 12.5–25 mg c/6–8 h (máx. 75 mg/día); 6–11 años 25–50 mg (máx. 150 mg/día)                   | por edad                                                                    | FDA OTC; FNME                                                       |

### Decisiones tomadas en este lote

- **Hierro:** se sigue la NTS 213-2024, que es la norma peruana vigente, y no el FNME 2008, que daba 6 mg/kg/día de 6 meses a 2 años. La diferencia se muestra como nota de Perú. La suplementación preventiva (2 mg/kg/día) no se calcula todavía porque su tope no se pudo leer en el PDF.
- **Ivermectina:** por bandas de peso de la FDA y no por mg/kg, porque así los topes son exactos. Media tableta de 6 mg equivale a 3 mg.
- **Ceftriaxona y ampicilina:** solo con la reconstitución de la OMS. Si el servicio diluye distinto, se usa «Personalizar concentración».
- **No incluidos:** gentamicina (sin tope pediátrico en las fuentes; requiere niveles), anticonvulsivantes de mantenimiento (se titulan) y omeprazol (la única presentación del FNME es de 20 mg).

### Pendiente

- La NTS 213 fue modificada por la RM 429-2024-MINSA. Falta confirmar que la modificación no cambia las dosis de tratamiento.

## Fase B, lote 3 (10 fármacos) — verificado el 04/11/2026

Fuentes nuevas: nueve fichas FDA de DailyMed obtenidas con openFDA. Las presentaciones y marcas peruanas salen del libro de Peña Camarena (Klaricid, Claxio, Grisovin, Atarax, Primperan, Combantrin, Duracef, Cefadrox).

| Fármaco        | Dosis                                                                                            | Tope usado                                | Fuentes                                                            |
| -------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------------ |
| Pirantel       | 11 mg/kg dosis única (oxiuros: repetir a las 2–4 sem); uncinarias × 3 d; desde 2 años            | 1 g                                       | FNME; Peña (10 mg/kg, máx. 1 g)                                    |
| Griseofulvina  | 13–22 kg: 125–250 mg/día; 22 kg o más: 250–500 mg/día                                            | por banda                                 | FNME; FDA (las mismas bandas en libras, 10 mg/kg/día); Peña        |
| Furosemida     | IV/IM 0.5–1.5 mg/kg (máx. 20 mg/día); VO 1–3 mg/kg/día                                           | 20 mg/día IV; 80 mg/día VO                | FNME; FDA IV (1 mg/kg, hasta 6 mg/kg, como nota de EE. UU.); Peña  |
| Metoclopramida | 0.1–0.2 mg/kg c/8 h, desde 10 kg                                                                 | 10 mg/dosis                               | OMS; FNME (IV); Peña; recuadro negro de la FDA (discinesia tardía) |
| Hidroxicina    | 0.5–2 mg/kg/dosis c/8 h                                                                          | 50 mg/día bajo 6 años; 100 mg/día desde 6 | Peña (mg/kg); FDA (topes diarios)                                  |
| Claritromicina | 7.5 mg/kg c/12 h × 10 d, desde 6 meses                                                           | 500 mg/dosis                              | FDA; Peña (15 mg/kg/día)                                           |
| Oseltamivir    | Menos de 1 año 3 mg/kg c/12 h; 1–12 años por peso: 30 / 45 / 60 / 75 mg c/12 h × 5 d             | por banda; dosis adulto 75 mg             | FDA (tabla 1)                                                      |
| Clindamicina   | Serias 8–16 mg/kg/día; más severas 17–25 mg/kg/día, c/8 h                                        | 300 / 450 mg por toma (dosis de adulto)   | FDA solución pediátrica y cápsulas                                 |
| Cefadroxilo    | 30 mg/kg/día c/12 h                                                                              | 1 g/día (tabla pediátrica FDA)            | FDA; Peña (40–50 mg/kg/día, como nota de Perú)                     |
| Doxiciclina    | Más de 8 años y 45 kg o menos: 2.2 mg/kg c/12 h el día 1 o en casos severos; luego 2.2 mg/kg/día | 100 mg por toma                           | FNME                                                               |

### Decisiones tomadas en este lote

- **Adrenalina para anafilaxia:** pasa a la Fase C. Se repite cada 5 a 15 min y el motor solo maneja intervalos desde 4 h, así que la ficha mostraría «cada 4 h», lo que sería engañoso. Hay que agregar dosis repetibles en minutos.
- **Cefuroxima:** no está en el FNME y la suspensión no figura en openFDA; queda fuera.
- **Metoclopramida:** se usa la pauta de la OMS con su límite de 10 kg y el recuadro negro de la FDA como advertencia. El libro de Peña da una dosis mayor (0.2–0.3 mg/kg).
- **Furosemida IV:** se respeta el tope del FNME (20 mg/día), que es más bajo que el de la FDA (hasta 6 mg/kg); la diferencia se muestra como nota de EE. UU.
- **Oseltamivir en menores de 1 año:** la FDA no da tope, así que se usa la dosis de adulto (75 mg) como techo.
- **Clindamicina, oseltamivir y claritromicina:** no figuran en el FNME 2008. Las presentaciones son las de la ficha FDA o del libro; conviene confirmarlas en el registro de DIGEMID.

## Fase C, urgencias — verificado el 04/11/2026

**Cambio en el motor.** Cada regla tiene ahora exactamente una de tres pautas:

- `intervalHours`: cada N horas.
- `repeatMinutes`: repetir cada X–Y minutos si es necesario, con `maxDoses` opcional.
- `once`: dosis única de carga.

En las reglas repetibles o de dosis única, `maxPerDayMg` es el **máximo acumulado del episodio** y se reparte entre `maxDoses`. La ficha muestra «repetir cada…», «máximo de dosis» y «tope por dosis», en lugar de «tomas al día».

**Hoja de urgencias (nueva pestaña).** Con el peso y la edad, muestra todas las dosis de rescate que aplican, ordenadas por prioridad. Cada una lleva mL, mg, vía, pauta y presentación.

| Fármaco                     | Dosis                                                              | Tope                                                    | Fuentes                                                         |
| --------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------------- |
| Adrenalina IM (anafilaxia)  | 0.01 mg/kg de 1:1000; repetir c/5–15 min                           | 0.3 mg                                                  | FNME; OMS (dosis fijas 0.15/0.3 mL, como nota internacional)    |
| Adrenalina IV (paro)        | 0.005–0.01 mg/kg de 1:10 000; repetir c/3–5 min                    | 0.5 mg/dosis                                            | FNME; OMS (dilución 1 + 9 mL)                                   |
| Salbutamol nebulizado       | 2.5 mg (0.5 mL de 5 mg/mL) c/20 min, máximo 3 dosis en la 1.ª hora | 2.5 mg                                                  | GINA 2025; OMS; Peña (0.15 mg/kg, máx. 5 mg, como nota de Perú) |
| Diazepam rectal             | 0.5 mg/kg; 2.ª dosis a los 10 min; no más de 2                     | 10 mg/dosis                                             | OMS; tope del FNME                                              |
| Diazepam IV                 | 0.2–0.3 mg/kg; máximo 2 dosis                                      | acumulado 5 mg (menos de 5 años) / 10 mg (5 años o más) | OMS; FNME                                                       |
| Fenobarbital IV/IM (carga)  | 15–20 mg/kg, dosis única                                           | sin tope en las fuentes (calcula hasta 50 kg)           | OMS; FNME                                                       |
| Fenitoína IV (carga)        | 15–20 mg/kg, ≤1 mg/kg/min                                          | sin tope en las fuentes (calcula hasta 50 kg)           | FNME; OMS                                                       |
| Glucosa al 10 %             | 5 mL/kg (0.5 g/kg); repetir a los 30 min si sigue baja             | sin tope (calcula hasta 50 kg)                          | OMS                                                             |
| Naloxona                    | 0.01 mg/kg IV; repetir si no responde                              | 2 mg/dosis (adulto)                                     | OMS; FNME                                                       |
| Atropina (organofosforados) | 0.05 mg/kg IV c/5 min hasta atropinización                         | sin tope (calcula hasta 50 kg)                          | FNME                                                            |

### Decisiones tomadas

- **Diazepam IV:** se aplica el máximo acumulado del FNME (5 mg en menores de 5 años), que es más conservador que la OMS. En 12 kg da 2.5 mg por dosis en lugar de 3 mg. La diferencia se muestra como nota.
- **Cargas sin tope en mg** (fenobarbital, fenitoína, glucosa, atropina): no se inventa un tope. La regla se limita a 50 kg, así que el tope técnico (dosis × 50 kg) nunca corta la dosis de la fuente.
- **No incluidos:**
  - Ipratropio nebulizado: el FNME solo trae aerosol de 20 µg y la app aún no calcula puffs.
  - Carbón activado: va en gramos por edad y no en mL.
  - Hidrocortisona IV: la OMS dice que no aporta beneficio frente a la prednisolona oral en el asma.
  - Midazolam para convulsiones: el FNME solo lo da para sedación.

## Neonatos (primeras reglas) — verificado el 04/11/2026

**Cambio en el motor:** en menores de 29 días solo se calculan reglas marcadas `neonatal: true`. El esquema exige esa marca en toda regla que empiece antes de los 29 días. Las demás reglas siguen devolviendo «no es para menores de 1 mes».

| Fármaco         | Dosis neonatal                                                                                          | Fuente              | Comprobación                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------- |
| Gentamicina     | 1.ª semana: 3 mg/kg/día con bajo peso al nacer, 5 mg/kg/día con peso normal; semanas 2–4: 7.5 mg/kg/día | OMS, tabla neonatal | Los volúmenes de la tabla (10 mg/mL) coinciden con el texto en todas las bandas de peso |
| Fenobarbital    | Menos de 2 semanas: 20 mg/kg IV/IM (10 mg/kg a los 30 min si sigue)                                     | OMS                 | Cuadro 9: 2 kg → 0.2 mL de 200 mg/mL = 40 mg                                            |
| Glucosa al 10 % | 2 mL/kg IV y luego infusión de 5 mL/kg/h                                                                | OMS                 | —                                                                                       |
| Diazepam rectal | Desde 2 semanas: 0.5 mg/kg                                                                              | OMS                 | Cuadro 9: de 2 semanas a 2 meses (menos de 4 kg), 0.3 mL                                |

### No incluido, para que lo revise el médico

- **Ampicilina neonatal:** el texto de la OMS dice 50 mg/kg, pero su tabla de volúmenes (250 mg/1.5 mL) equivale a unos 100 mg/kg. El FNME da dosis **por día** (50–100 mg/kg/día según peso y edad) y su texto escaneado está dañado. Con tres cifras que no coinciden, no se calcula.
- **Cefotaxima y cloxacilina neonatales:** dependen de si el bebé es prematuro, y la app todavía no pregunta la edad gestacional.

## Lote 4: alergia y asma — verificado el 04/11/2026

**Unidades nuevas:** `puff` (inhalador) y `sobre` (granulado). El resultado se lee como «4 puffs».

| Fármaco                       | Dosis                                                                                                    | Fuentes                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Salbutamol inhalador (crisis) | 5 años o menos: 4–6 puffs de 100 µg; 6 años o más: 4–10 puffs; cada 20 min, hasta 3 dosis en la 1.ª hora | GINA 2025; FNME (aerosol de 100 µg)               |
| Ipratropio inhalador (crisis) | 5 años o menos, crisis moderada o severa: 4 puffs de 20 µg con el salbutamol, cada 20 min × 3            | GINA 2025; FNME (aerosol de 20 µg)                |
| Montelukast                   | 6–23 meses: 4 mg en granulado; 2–5 años: 4 mg; 6–14 años: 5 mg; 15 años o más: 10 mg; una vez al día     | FDA (incluye el recuadro negro neuropsiquiátrico) |
| Desloratadina                 | 6–11 meses: 1 mg; 1–5 años: 1.25 mg; 6–11 años: 2.5 mg; 12 años o más: 5 mg                              | FDA (solución oral 0.5 mg/mL)                     |
| Levocetirizina                | 6 meses a 5 años: 1.25 mg; 6–11 años: 2.5 mg; 12 años o más: 5 mg                                        | FDA (Xyzal)                                       |

### No incluido

- **Dexametasona en crup o asma:** las fuentes no dan un tope en mg. Además, la única presentación oral del FNME es la tableta de 0.5 mg, que no sirve para estas dosis.

## Lote 5: anticonvulsivantes, gastro y antibióticos hospitalarios — verificado el 05/11/2026

Cada cifra se confirmó en el documento descargado (texto de openFDA, el FNME 2008 en PDF, el WHO Model Formulary 2010 y el PNUME 2023 de DIGEMID).

| Fármaco           | Regla                                 | Fuente principal | Cifras                                                                       |
| ----------------- | ------------------------------------- | ---------------- | ---------------------------------------------------------------------------- |
| Levetiracetam     | Crisis focales, por edad              | FDA Keppra       | 1–<6 m: 7→21 mg/kg c/12 h. 6 m–<4 a: 10→25. 4–<16 a: 10→30, máx. 3000 mg/d   |
| Ácido valproico   | Epilepsia 1–12 años                   | FNME             | 15–45 mg/kg/d en 2 tomas; OMS 5–7.5 → 12.5–15 mg/kg c/12 h                   |
| Carbamazepina     | <6 años                               | FNME             | 10–20 mg/kg/d, mantenimiento ≤35 mg/kg/d (400 mg/d), c/6–8 h                 |
| Carbamazepina     | 6–12 años, inicio                     | FNME             | 100 mg c/12 h                                                                |
| Omeprazol         | >2 años, esofagitis por reflujo       | FNME             | 0.7–1.4 mg/kg/d, máx. 40 mg/d (OMS 1 mg/kg)                                  |
| Cefuroxima axetil | Faringitis / OMA, sinusitis, impétigo | FDA suspensión   | 20 mg/kg/d (máx. 500) / 30 mg/kg/d (máx. 1000), c/12 h                       |
| Amikacina         | Niños c/8 o c/12 h; neonatos          | FNME = FDA       | 15 mg/kg/d, máx. 1.5 g/d; neonatos 10 mg/kg y luego 7.5 mg/kg c/12 h         |
| Vancomicina       | ≥1 mes; neonatos                      | FNME = FDA       | 10 mg/kg c/6 h; neonatos 15 mg/kg y luego 10 mg/kg c/12 h (semana 1) o c/8 h |

**Presentaciones:** solo las que figuran en el PNUME 2023.

**Decisiones:**

- **Midazolam:** no se incluye. En el Perú solo hay inyectable, y no se encontró dosis para convulsión aguda en las fuentes descargadas.
- **Nistatina:** no se incluye. Se dosifica en UI, y el motor solo maneja mg.
- **Cefixima y cefuroxima IV:** no se incluyen porque no figuran en el PNUME 2023.
- **Vancomicina, dosis de la OMS (15 mg/kg c/8 h):** no se usa. No se pudo confirmar en el texto descargado.
- **Topes técnicos:** donde la fuente no da tope en mg, el tope de la regla es técnico (dosis máxima por kg × 50 kg, o 1 a 5 kg en neonatos), y la nota lo dice.
- **Interacciones y ajuste renal:** se agregan a las 7 fichas nuevas como secciones propias.

## Neonatología: puntajes — verificado el 05/11/2026

| Puntaje            | Tabla (signos y puntos)                                       | Interpretación                                                                                                     | Notas                                                                   |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| Apgar              | NTS 214-MINSA/DGIESP-2024 (RM 545-2024), pág. 24–25           | ACOG 644 / AAP 2015: 7–10 tranquilizador, 4–6 moderadamente anormal, 0–3 bajo (5 min, término y pretérmino tardío) | MINSA no da franjas. La NTS 214 reemplaza a la NTS 106 (2013).          |
| Silverman-Andersen | MINSA, GPC Atención del Recién Nacido 2007, pág. 132          | MINSA Nicaragua, Normativa 108 (2013): leve 0–3, moderada 4–6, severa >6                                           | Las franjas de la GPC 2007 se solapan («superior a 3» y «entre 3 y 5»). |
| Capurro somático   | NTS 214, Anexo 4, pág. 61–62: 5 criterios; (puntos + 204) / 7 | Semanas y días; ± 9 días (NTS 106)                                                                                 | Pliegues, 3.ª opción: «1/3 anterior» (NTS 106); la NTS 214 dice «1/2».  |

**No incluido:**

- **Capurro somato-neurológico:** no está en ninguna fuente MINSA Perú; solo en la NOM-007 de México, con puntos somáticos distintos.
- **Franjas de pretérmino y término:** no están en las fuentes peruanas.

## Lote 6: cardiovasculares, antibióticos IV y corticoides — verificado el 05/11/2026

| Fármaco           | Reglas                                      | Fuente principal                 | Cifras                                                                                     |
| ----------------- | ------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------ |
| Hidroclorotiazida | <6 m, 6 m–2 a, 2–12 a                       | FDA (y FNME «hasta 2 mg/kg/día») | 1–2 mg/kg/día en 2 tomas (hasta 3 en <6 m); máx. 37.5 mg/d hasta 2 a, 100 mg/d de 2 a 12 a |
| Espironolactona   | 1 mes–12 años                               | FNME                             | 1–3 mg/kg/d en 1 o 2–4 tomas (tope técnico)                                                |
| Adenosina         | Primera dosis y siguientes, <50 kg          | FDA                              | 0.05–0.1 mg/kg; subir 0.05–0.1 hasta 0.3 mg/kg; nunca más de 12 mg                         |
| Amiodarona        | Carga IV                                    | FNME                             | 5 mg/kg en 20–120 min por vía central; máx. 1.2 g/24 h                                     |
| Cefotaxima        | Niños <50 kg; neonatos                      | FDA = FNME                       | 50–180 mg/kg/d en 4–6 dosis (máx. 12 g/d); neonatos 50 mg/kg c/12 h (1.ª semana) y c/8 h   |
| Ceftazidima       | 1 m–12 a; neonatos                          | FDA = FNME                       | 30–50 mg/kg c/8 h (máx. 6 g/d); neonatos 30 mg/kg c/12 h                                   |
| Meropenem         | Piel, intraabdominal, meningitis (≥3 meses) | FDA (FNME concuerda)             | 10 (máx. 500 mg), 20 (máx. 1 g), 40 mg/kg (máx. 2 g) c/8 h                                 |
| Cefazolina        | ≥1 mes                                      | FDA                              | 25–50 mg/kg/d en 3–4 dosis, hasta 100 mg/kg/d                                              |
| Ciprofloxacino    | ITU complicada VO e IV (1–17 años)          | FDA                              | VO 10–20 mg/kg c/12 h (máx. 750 mg); IV 6–10 mg/kg c/8 h (máx. 400 mg)                     |
| Dexametasona      | Crup; asma (5 años o menos)                 | OMS Pocket Book; GINA 2025       | 0.6 mg/kg dosis única; 0.3–0.6 mg/kg (máx. 12 mg)                                          |

**Presentaciones:** todas confirmadas fila por fila en el PNUME 2023.

**No incluidos y por qué:**

- **Captopril:** sin dosis pediátrica en ninguna fuente.
- **Enalapril y propranolol:** en el Perú solo hay tabletas que no permiten medir la dosis pediátrica.
- **Digoxina:** fármaco de alto riesgo y discrepancia FNME/FDA en las cargas por edad; queda para revisión médica.
- **Ketorolaco y tramadol:** la FDA no los indica en niños; el tramadol está contraindicado en menores de 12 años.
- **Naproxeno:** la dosis del FNME es el doble que la de la FDA.
- **Lactulosa:** solo hay volúmenes fijos por edad.
- **Penicilina benzatínica:** sus fuentes no coinciden en las dosis para faringitis.
- **Penicilina G sódica:** no se pudo confirmar la reconstitución del frasco de 1 000 000 UI en el texto descargado.
- **Metilprednisolona:** sin concentración reconstituida verificada.
- **Morfina e hidrocortisona:** pendientes del lote siguiente.

## Lote 7: tuberculosis, morfina, hidrocortisona y otros — verificado el 06/11/2026

| Fármaco             | Reglas                                                       | Fuente principal       | Cifras                                                          |
| ------------------- | ------------------------------------------------------------ | ---------------------- | --------------------------------------------------------------- |
| Isoniazida          | TB sensible <15 a; preventiva 6H                             | NTS 221-MINSA 2024     | 10–15 mg/kg/d (máx. 300); 6H: <10 a 10 mg/kg/d, ≥10 a 5 mg/kg/d |
| Rifampicina         | TB sensible <15 a                                            | NTS 221                | 10–20 mg/kg/d (habitual 15), máx. 600                           |
| Pirazinamida        | TB sensible, fase 1                                          | NTS 221                | 30–40 mg/kg/d (habitual 35), máx. 1500                          |
| Etambutol           | TB sensible, fase 1                                          | NTS 221                | 15–25 mg/kg/d (habitual 20), máx. 1200                          |
| Morfina oral        | Dolor, 2 años o más                                          | FDA (solución 2 mg/mL) | 0.15–0.3 mg/kg c/4 h, máx. 20 mg de inicio                      |
| Hidrocortisona      | Insuficiencia suprarrenal; asma grave sin VO; alergia severa | FNME; OMS Pocket Book  | 0.2 mg/kg c/8 h; 4 mg/kg c/4 h; 0.5–4 mg/kg IM c/12–24 h        |
| Cloranfenicol       | VO e IV, 1 mes o más                                         | FNME (OMS, FDA)        | 50–100 mg/kg/d c/6 h; máx. 1 g por dosis y 4 g/d                |
| Vitamina A          | Sarampión; suplementación preventiva                         | FNME; MINSA UFANS 2025 | 100 000 UI (6–11 m) y 200 000 UI (1 año o más)                  |
| Sulfato de magnesio | Asma grave, 2 años o más                                     | GINA 2025              | 40–50 mg/kg IV, máx. 2 g, en 20–60 min                          |
| Praziquantel        | Teniasis; neurocisticercosis                                 | FNME = OMS             | 5–10 mg/kg dosis única; 16.7–33 mg/kg c/8 h                     |
| Fluconazol IV       | Candidiasis sistémica (nueva regla)                          | FDA                    | 6–12 mg/kg/d; no más de 600 mg/día                              |

**Discrepancias:**

- **Etambutol:** el FNME 2008 lo contraindica en menores de 7 años; la NTS 221, la NTS 200 y la OMS lo dosifican desde lactantes. Se sigue la NTS 221 y se avisa en la ficha.
- **Piridoxina:** la NTS 221 indica 50 mg/día a todo el que recibe isoniazida, y su Anexo 10 da 0.5–1 mg/kg/día.
- **Isoniazida + rifampicina (3HR):** no se usa la Tabla 3 de la NTS 221, que contradice su Tabla 5, la NTS 200 y la OMS.

**No incluidos:**

- **Tinidazol:** no está en el PNUME.
- **Ácido fólico:** solo hay tableta de 0.5 mg.
- **Budesonida:** dosis por niveles de GINA, no por peso.
- **Combinaciones dispersables de TB:** no están en el PNUME 2023.
- **Morfina IV:** ninguna fuente da la dilución del vial.

## Lote 8B: vitamina K, nistatina, anfotericina B y lidocaína — verificado el 06/11/2026

| Fármaco        | Reglas                                         | Fuente principal               | Cifras                                                                                     |
| -------------- | ---------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------ |
| Fitomenadiona  | Profilaxis neonatal >1500 g; sangrado neonatal | NTS 214-MINSA 2024; FNME = FDA | 1 mg (0.1 mL) IM en las primeras 6 h; tratamiento 1 mg IM o SC                             |
| Nistatina (UI) | Neonatos; <5 años; >5 años                     | FNME (FDA concuerda)           | 100 000; 200 000; 400 000–600 000 UI c/6 h                                                 |
| Anfotericina B | Dosis diaria, 1 mes o más                      | FDA                            | 0.25 → 1 mg/kg/día; nunca más de 1.5 mg/kg; 5 mg/mL reconstituida, 0.1 mg/mL para infundir |
| Lidocaína 2 %  | Infiltración sin epinefrina, dosis máxima      | FNME = FDA                     | 4.5 mg/kg, total máximo 300 mg                                                             |

**No incluido y discrepancias:**

- **Vitamina K en prematuros de 1500 g o menos:** la NTS 214 escribe «0.3 mg mg/kg (0.03 mL)»; los volúmenes indican dosis fijas. No se calcula hasta confirmarlo.
- **Anfotericina B:** el FNME dice «c/6 h»; la FDA y la OMS, una vez al día. Se sigue la FDA y se muestra la diferencia.
- **Lidocaína:** no se usan el máximo de la OMS (3 mg/kg) ni la lidocaína con epinefrina, porque no se confirmaron en el texto descargado.

## Lote 8A: sedación y antídotos — verificado el 06/11/2026

| Fármaco                  | Reglas                            | Fuente principal     | Cifras                                                                              |
| ------------------------ | --------------------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| Flumazenil               | Reversión de sedación (1–17 años) | FDA (FNME concuerda) | 0.01 mg/kg (máx. 0.2 mg) cada minuto, hasta 5 dosis; total ≤0.05 mg/kg o 1 mg       |
| Midazolam                | IV 6 m–5 a; IV 6–12 a; IM         | FDA                  | 0.05–0.1 mg/kg (total ≤6 mg); 0.025–0.05 mg/kg (≤10 mg); IM 0.1–0.15 mg/kg (≤10 mg) |
| Ketamina                 | Inducción IV e IM                 | FNME = FDA           | IV 1–4.5 mg/kg; IM 6.5–13 mg/kg                                                     |
| Fentanilo                | IV, 2–12 años                     | FNME = FDA           | 2–3 mcg/kg                                                                          |
| N-acetilcisteína IV      | 3 bolsas                          | FDA                  | 150 mg/kg en 1 h, 50 mg/kg en 4 h, 100 mg/kg en 16 h; diluyente por peso            |
| Gluconato de calcio 10 % | Niños; neonatos                   | FDA                  | 29–60 mg/kg c/6 h; neonatos 100–200 mg/kg; ≤100 mg/min                              |

**Erratas de las fuentes que no se usan:**

- **OMS Pocket Book, ketamina «5–8 mg IM»:** contradice su propia tabla (5–8 mg/kg).
- **OMS MFC, gluconato de calcio «máximo 200 mg (20 mL)»:** 20 mL son 2 g.

**No incluido:** ketamina IV para sedación con 0.2 mg/kg, porque con el vial de 50 mg/mL el volumen no se puede medir.

## Lote 9B: gentamicina pediátrica y descartes — verificado el 07/11/2026

- **Gentamicina, niños:**
  - Menores de 5 años: 2.5 mg/kg/dosis c/8 h (FNME).
  - Mayores de 5 años: 1.5–2.5 mg/kg/dosis c/8 h (FNME); 2–2.5 mg/kg c/8 h (FDA).
  - Presentaciones del PNUME: 10 y 40 mg/mL. No se incluye la pauta diaria única de la OMS porque no se confirmó en el texto descargado.

**Descartados:**

- **Difenhidramina, ambroxol y domperidona:** no están en el PNUME ni en el FNME, y no se pudo confirmar qué presentaciones hay en el Perú. La domperidona no se debe usar en menores de 12 años ni de 35 kg (AEMPS).
- **Clonazepam:** la solución de 2.5 mg/mL se da en gotas y falta el número de gotas por mL del producto peruano; sin ese dato la dosis no se puede medir. **Errata del FNME:** pone como tope 0.5 mg/kg/d, diez veces lo que dicen la FDA y la AEMPS (0.05 mg/kg/d al inicio).

## Lote 9A: malaria — verificado el 07/11/2026

**Fuente principal:** NTS 233-MINSA/DGIESP-2025 (RM 609-2025), que deroga la NTS 054-2007. Las cifras se confirmaron en la capa de texto del PDF.

| Fármaco                 | Reglas                                                       | Cifras                                                                                                        |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Cloroquina              | Días 1–2 y día 3 (P. vivax, P. ovale, P. malariae)           | 10, 10 y 5 mg base/kg; 6 meses o más, de 5 a menos de 44 kg (desde 44 kg, tabla de adultos)                   |
| Primaquina              | 7 días (P. vivax); dosis única (P. malariae y P. falciparum) | 0.5 mg/kg/día; 0.25 mg/kg; no en menores de 6 meses ni con menos de 5 kg                                      |
| Artesunato + mefloquina | Bandas de la Tabla 08                                        | >5–9 kg 25 + 50 mg; 10–18 kg 50 + 100 mg; 19–29 kg 100 + 200 mg; ≥30 kg 200 + 400 mg, 1 vez al día por 3 días |
| Quinina oral            | Segunda opción (P. falciparum)                               | 10 mg de sal/kg c/8 h por 7 días, máximo 2 g/día                                                              |

**No incluido:**

- **Artesunato IV:** la norma dice 3 mg/kg por dosis en menores de 20 kg y 2.4 mg/kg desde 20 kg, pero solo «diluir en 5 a 10 cc», sin una concentración exacta. Se puede calcular con «Personalizar concentración».
- **Mefloquina sola:** la tabla de la NTS 233 se contradice (12.5 mg/kg/día frente a «8 mg de sal/kg»).
- **Artemetero + lumefantrina:** no está en el PNUME 2023, y las bandas de la norma se solapan en 15 kg y dejan sin banda los 35 kg.
- **Leishmaniasis (antimoniato de meglumina):** no hay una norma MINSA de tratamiento vigente, y la concentración peruana viene como rango (80–85 mg Sb5+/mL).

## Lote 10A: antibióticos hospitalarios — verificado el 07/11/2026

- **Piperacilina + tazobactam** (PNUME 4 g + 500 mg; FDA Zosyn): 90 mg/kg del producto combinado de 2 a 9 meses y 112.5 mg/kg desde los 9 meses, c/8 h (apendicitis o peritonitis) o c/6 h (neumonía nosocomial), con 40 kg o menos. El frasco de 4.5 g con 20 mL da 202.5 mg/mL (FDA Civica).

**No incluidos:**

- **Imipenem:** el FNME da 25 mg/kg c/6 h (3 meses–3 años) y 15 mg/kg c/6 h (más de 3 años), máximo 2 g/d. La ficha FDA no fija una concentración exacta («transferir a 100 mL» y lavar el vial con 10 mL más), y la dosis neonatal difiere entre FDA (25 mg/kg) y OMS (20 mg/kg).
- **Cefepima y linezolid:** no están en el PNUME ni en el FNME.

## Lote 10B: neonatología (sífilis congénita y apnea del prematuro) — verificado el 07/11/2026

- **Penicilina G sódica** (PNUME bencilpenicilina sódica 1 000 000 UI; NTS 159-MINSA 2019, pág. 36): 50 000 UI/kg/dosis EV c/12 h en los primeros 7 días de vida y c/8 h después, por un total de 10 días (14 si hay neurosífilis). El FNME da la misma pauta. La concentración de 500 000 UI/mL es la reconstitución de la OMS (frasco de 1 000 000 U + 1.6 mL de agua estéril); ninguna fuente peruana da el volumen de diluyente. Los topes son técnicos (5 kg).
- **Cafeína citrato** (PNUME 20 mg/mL inyectable y solución oral): carga de 20 mg/kg (IV en 30 min según FDA; oral o IV según OMS) y mantenimiento de 5 mg/kg c/24 h desde 24 h después de la carga, con aumento posible hasta 20 mg/kg/día (solo OMS). Dosis en mg de citrato (el doble de la cafeína base). Ni el FNME ni las normas MINSA leídas dan dosis de cafeína.

**No incluidos:**

- **Zidovudina (profilaxis VIH):** la NTS 159 da la dosis por edad gestacional (4 mg/kg c/12 h desde 35 semanas; 2 a 3 mg/kg en prematuros) y por escenario materno (4 o 6 semanas). La app no pide la edad gestacional, así que no puede elegir la pauta correcta. El FNME y la FDA usan otro esquema (2 mg/kg c/6 h).
- **Nevirapina (profilaxis VIH):** la NTS 159 dice «12 mg/kg» en tres dosis (al nacer, al 3.er y al 7.º día). La OMS da dosis fijas diarias (10 mg con menos de 2500 g; 15 mg con más), y un RN de 3 kg recibiría 36 mg por dosis según el texto literal de la norma. Hay que confirmarlo con la DPVIH/MINSA antes de publicarlo.
- **Penicilina G benzatínica y procaínica:** ninguna fuente peruana da el volumen de reconstitución de los frascos del PNUME, así que no se puede calcular el volumen exacto. La procaínica, además, no figura en la NTS 159.

**Erratas para avisar:** el Anexo 14 de la NTS 159 dice bencilpenicilina «sódica» 50 000 UI/kg IM en dosis única, donde el cuerpo de la norma (pág. 37) dice «benzatínica». El Anexo 4 pone LPV/r donde el cuerpo y el Anexo 8 dicen lamivudina. La RM 159-2026-MINSA no modifica esta norma: modifica la NTS 244.

## Lote 11: penicilina V, digoxina, levotiroxina y vitamina D — verificado el 07/11/2026

La app ahora admite dosis en microgramos (`doseUnit: mcg`) para no mostrar dosis de 0.0056 mg/kg.

- **Fenoximetilpenicilina** (PNUME 300 000 UI/5 mL): OMS (Model Formulary for Children) 10 a 12.5 mg/kg por dosis c/6 h, máximo 500 mg; profilaxis de fiebre reumática, la misma dosis c/12 h. Con la equivalencia del FNME (1 mg = 1600 UI), 300 000 UI/5 mL = 187.5 mg/5 mL.
- **Digoxina** (PNUME 50 mcg/mL y tableta 250 mcg): mantenimiento de la tabla 2 de la FDA por edad, desde 1 mes. El tope es la dosis de mantenimiento máxima del adulto en el FNME (500 mcg/día).
- **Levotiroxina** (PNUME tabletas de 50, 75 y 100 mcg): tabla pediátrica de la FDA (Synthroid), de 10–15 mcg/kg/día (0 a 3 meses) a 2–3 mcg/kg/día (más de 12 años).
- **Vitamina D (ergocalciferol)** (PNUME 10 000 UI/mL): pautas del FNME en UI para suplemento y raquitismo nutricional.

**No incluidos:**

- **Oxacilina:** la FDA solo da una concentración exacta para la vía IM (1 g + 5.4 mL = 250 mg/1.5 mL). Para la vía IV indica 10 mL de diluyente sin declarar la concentración final.
- **Clonazepam:** las dosis pediátricas (0.01–0.03 mg/kg/día) son demasiado pequeñas para medirlas en mL de la solución de 2.5 mg/mL, y ninguna fuente leída dice cuánto rinde cada gota. El FNME además tiene una errata (máximo «0.5 mg/kg/d», donde la FDA dice 0.05).
- **Metilprednisolona:** ninguna fuente da la concentración tras reconstituir los frascos de 125 y 500 mg del PNUME.
- **Ácido fólico:** la única presentación del PNUME es la tableta de 0.5 mg, y las dosis pediátricas del FNME van de 0.05 a 0.4 mg/día.

**Discrepancias para avisar:** el FNME da la penicilina V a 15–62.5 mg/kg c/6–8 h sin decir si es por dosis o por día. En el hipotiroidismo congénito da una dosis fija de 25 mcg/día, mientras la FDA da 10–15 mcg/kg/día.

## Lote 12: medicamentos hospitalarios, de anestesia y neonatales — verificado el 07/11/2026

- **Aminofilina** (PNUME 25 mg/mL): OMS (Pocket Book), asma grave que no mejora con broncodilatador inhalado y prednisolona. Carga de 5–6 mg/kg (máximo 300 mg) en al menos 20 min y mantenimiento de 5 mg/kg c/6 h. El FNME expresa la carga en equivalentes de teofilina (5 mg/kg) y el mantenimiento en infusión continua.
- **Rocuronio** (PNUME 10 mg/mL): FDA, intubación con 0.45–0.6 mg/kg desde el nacimiento y bolos de mantenimiento de 0.15 mg/kg. La FDA no lo recomienda para la secuencia rápida en niños.
- **Atracurio** (PNUME 10 mg/mL): FDA, 0.3–0.4 mg/kg de 1 mes a 2 años y 0.4–0.5 mg/kg desde los 2 años.
- **Propofol** (PNUME 1 % = 10 mg/mL): FDA (Diprivan), inducción con 2.5–3.5 mg/kg de 3 a 16 años. No se recomienda para la inducción en menores de 3 años.
- **Pralidoxima** (PNUME 1 g): FNME, 25–50 mg/kg IV en 15–30 min. La FDA (Protopam) da 20–50 mg/kg, sin pasar de 2000 mg por dosis, y la solución de 50 mg/mL (1 g en 20 mL de agua).
- **Indometacina IV** (PNUME 1 mg): FDA, cierre del ductus en prematuros de 500 a 1750 g. Es un ciclo de 3 dosis según la edad en la 1.ª dosis; con 1 mL de diluyente queda en 1 mg/mL (la FDA dice «aproximadamente»).
- **Ibuprofeno IV para el ductus** (PNUME 5 mg/mL): se agregó a la ficha de ibuprofeno. Ficha técnica de Pedea 5 mg/mL (AEMPS), la misma concentración que el PNUME: 10 mg/kg y luego 5 mg/kg a las 24 y 48 h. La FDA (ibuprofeno lisina 10 mg/mL) usa el mismo esquema, pero su ficha no aclara si los mg/kg son de ibuprofeno o de la sal; por eso la fuente principal es Pedea.

**No incluidos:**

- **Budesonida y beclometasona inhaladas:** quedan para un lote de inhaladores con la tabla de dosis de GINA.
- **Dopamina, dobutamina, norepinefrina, alprostadil e insulina:** se dan en infusión continua (mcg/kg/min o UI/kg/h), que la app todavía no calcula.
- **Tramadol:** la FDA lo contraindica en menores de 12 años.
- **Ácido tranexámico, tiopental y vecuronio:** el PNUME no da la concentración final de la ampolla o del frasco reconstituido.
- **Bicarbonato y cloruro de potasio:** se dosifican en mEq, unidad que la app aún no maneja.

## Infusiones continuas — verificado el 07/11/2026

La app ahora calcula infusiones: la dosis en mcg/kg/min o mg/kg/h da la velocidad de la bomba en mL/h, con la mezcla de la ficha o con una concentración personalizada. El tope por dosis de estas reglas es un tope por hora.

- **Norepinefrina** (PNUME 1 mg/mL): FNME, niños, hipotensión, 0.05–0.3 mcg/kg/min. Mezclas: 40 mcg/mL (la concentración que el FNME usa en adultos) y 4 mcg/mL (4 mg en 1000 mL de dextrosa al 5 %, FDA).
- **Dobutamina** (PNUME 12.5 mg/mL): FNME, neonatos, 5–20 mcg/kg/min. Mezclas de la FDA: 250 mg en 250 mL (1000 mcg/mL) o en 500 mL (500 mcg/mL). La FDA dice que no se ha estudiado en pediatría; el FNME no da dosis para niños mayores.
- **Adrenalina:** FNME, niños, infusión tras el paro de 0.1 mcg/kg/min, que se sube de 0.1 en 0.1 hasta 1.5 mcg/kg/min. Errata del FNME: escribe «0,1 µg/g/minuto». Mezcla de la FDA: 1 mg en 1000 mL de dextrosa al 5 % = 1 mcg/mL.
- **Midazolam:** FDA, paciente pediátrico intubado, 0.06–0.12 mg/kg/h, con la ampolla de 1 mg/mL.

**No incluidos:**

- **Dopamina:** el FNME solo da la dosis de adultos y la FDA no ha establecido su uso en pediatría.
- **Midazolam en neonatos:** la FDA da la dosis según la edad gestacional (menos o más de 32 semanas), que la app no pide.
- **Fentanilo, insulina y alprostadil en infusión:** quedan para otro lote. El fentanilo está cargado en mg y habría que pasarlo a mcg.

## Más infusiones: alprostadil e insulina — verificado el 07/11/2026

- **Alprostadil** (PNUME 500 mcg): FDA (Prostin VR Pediatric), para mantener abierto el ductus en neonatos con cardiopatía ductus dependiente. Inicio de 0.05–0.1 mcg/kg/min, luego bajar hasta 0.01 y subir como máximo a 0.4. Mezclas de la FDA: 500 mcg en 100 mL (unos 5 mcg/mL) o en 50 mL (unos 10 mcg/mL). Lleva el recuadro de apnea de la FDA.
- **Insulina regular IV** (PNUME 100 UI/mL): OMS (Model Formulary for Children). Cetoacidosis, 0.05–0.1 UI/kg/h (máximo 0.2); hiperglucemia, 0.025–0.1 UI/kg/h en niños y 0.01–0.1 UI/kg/h en neonatos. Se diluye a 1 UI/mL en SF 0.9 %. El FNME no da dosis pediátricas en infusión.

**No incluidos:**

- **Fentanilo y morfina en infusión:** ni el FNME ni la FDA dan dosis pediátricas en infusión continua. La FDA solo da bolos de fentanilo (2–3 mcg/kg de 2 a 12 años).
- **Heparina:** el FNME da en niños «dosis carga 50 UI/kg, luego 100 UI/kg c/4 h» bajo el título «Por infusión IV», sin aclarar si es infusión o bolos; además depende del TTPa.

## Lote 13: antiparasitarios (fasciola, Chagas, leishmaniasis, giardiasis, amebiasis) — verificado el 07/11/2026

- **Triclabendazol** (PNUME 250 mg): OMS, más de 4 años, 10 mg/kg en dosis única para la fascioliasis; en la paragonimiasis, 10 mg/kg dos veces en un día. El FNME sugiere 10 mg/kg en dosis única («la dosis exacta no se ha establecido»).
- **Benznidazol** (PNUME 100 mg): FNME, 10 mg/kg/día en 2 dosis por 30 días. La OMS da 7.5 mg/kg/día por 60 días (5 mg/kg/día con 40 kg o más); va como nota y advertencia.
- **Nifurtimox** (PNUME 120 mg): FNME, 20 mg/kg/día en menores de 1 año y 15 mg/kg/día de 1 a 15 años, en 3 dosis por 60 días. La OMS da 15–20 mg/kg/día con menos de 40 kg y 12.5–15 mg/kg/día desde 40 kg.
- **Furazolidona** (PNUME 50 mg/5 mL): FNME, diarrea bacteriana 1.25 mg/kg c/6 h y giardiasis 6 mg/kg/día en 4 dosis; contraindicada en menores de 1 mes.
- **Estibogluconato de sodio** (PNUME 100 mg de antimonio/mL): FNME, 20 mg de antimonio/kg/día IM o IV, máximo 850 mg.
- **Antimoniato de meglumina** (PNUME 80–85 mg de antimonio/mL): FNME, 20 mg de antimonio/kg/día, máximo 1250 mg/día. Se ofrecen las dos concentraciones citadas, 85 mg/mL (FNME) y 81 mg/mL (OMS), con la advertencia de verificar la etiqueta del frasco.
- **Diloxanida** (PNUME 500 mg): FNME, 20 mg/kg/día en 3 dosis por 10 días, máximo 1.5 g/día. La OMS la restringe a más de 25 kg.

**No incluidos:**

- **Miltefosina:** no está en el FNME ni en el Model Formulary for Children, y openFDA no devuelve la ficha de Impavido.
- **Pirimetamina:** la toxoplasmosis se trata con un esquema combinado (sulfadiazina y ácido folínico) que no se verificó en este lote.

## Lote 14: neurología y psiquiatría — verificado el 07/11/2026

- **Etosuximida** (PNUME 250 mg/5 mL y 250 mg): OMS, de 1 mes a 6 años, 5 mg/kg (máximo 125 mg) c/12 h al inicio y 10–20 mg/kg (máximo 500 mg) de mantenimiento; de 6 a 12 años, 250 mg c/12 h al inicio y 500–750 mg c/12 h. No está en el FNME.
- **Lorazepam** (PNUME 2 y 4 mg/mL): OMS, estado epiléptico, 0.05–0.1 mg/kg IV (máximo 4 mg), repetible una vez a los 10 min. La FDA advierte que en un ensayo pediátrico no superó al diazepam. La OMS incluye neonatos, pero la app no los calcula.
- **Haloperidol en gotas** (PNUME 2 mg/mL): FNME, de 3 a 12 años (15–40 kg), 0.05 mg/kg/día en 2 o 3 tomas, máximo 0.15 mg/kg/día.
- **Biperideno IM** (PNUME 5 mg/mL): FNME, reacción extrapiramidal por medicamentos, 0.04 mg/kg, repetible cada 30 min hasta 4 dosis al día.
- **Metilfenidato** (PNUME 10 mg): FDA (Ritalin), 6 años o más, dosis de inicio de 5 mg c/12 h; sube 5–10 mg por semana hasta un máximo de 60 mg/día.

**No incluidos:**

- **Lamotrigina:** su dosis pediátrica depende del uso de valproato y de tablas por peso, y el PNUME solo tiene la tableta de 50 mg. No está en el FNME ni en el Model Formulary for Children.
- **Clobazam:** no está en el FNME ni en el Model Formulary for Children, y openFDA no devolvió la ficha de Onfi.
- **Haloperidol IM:** la OMS da 1–3 mg cada 4–8 h con un tope en mg/kg/día, y esa combinación no se puede cargar sin elegir un intervalo.

## Lote 15: cardiovascular y endocrino — verificado el 07/11/2026

- **Amlodipino** (PNUME 5 y 10 mg): FDA (Norvasc), de 6 a 17 años, 2.5–5 mg una vez al día. No se han estudiado dosis mayores de 5 mg en pediatría.
- **Propranolol** (PNUME 10 y 40 mg): FNME, 0.125–1 mg/kg/día al inicio (2 a 4 tomas) y 2–4 mg/kg/día de mantenimiento (2 tomas). Para la profilaxis de migraña, OMS, más de 2 años, 0.2–0.5 mg/kg c/8 h.
- **Tiamazol** (PNUME 5 y 20 mg): FNME, 0.4 mg/kg/día al inicio y 0.2 mg/kg/día de mantenimiento, en 1 a 3 dosis.
- **Fludrocortisona** (PNUME 100 mcg): OMS, 100 mcg/día al inicio en neonatos, 50–100 mcg/día en lactantes y niños, y 50–300 mcg/día de mantenimiento. Dosis en mcg.
- **Nitroprusiato** (PNUME 50 mg, infusión): FDA, 0.3–10 mcg/kg/min (media de unos 3) en adultos y niños. El máximo no debe durar más de 10 min. Mezclas: 50 mg en 250, 500 o 1000 mL de dextrosa al 5 %.

**No incluidos:**

- **Enalapril y captopril:** el FNME dice que en niños no se ha establecido la eficacia del enalapril, y las tabletas del PNUME (10 y 25 mg) no permiten dar las dosis pediátricas por kg.
- **Acetazolamida:** dosis pediátricas del FNME para glaucoma (8–30 mg/kg/día) que no se pueden medir con la tableta de 250 mg en niños pequeños.
- **Labetalol y nifedipino:** sin dosis pediátrica en el FNME ni en el Model Formulary for Children.

## Lote 16: antídotos — verificado el 07/11/2026

- **Azul de metileno** (PNUME 1 %): FNME, metahemoglobinemia, 1–2 mg/kg IV lenta.
- **Nitrito de sodio** (PNUME 30 mg/mL): FNME y FDA (Nithiodote), cianuro, 6 mg/kg (0.2 mL/kg), máximo 10 mL. Se da antes del tiosulfato.
- **Tiosulfato de sodio** (PNUME 250 mg/mL): el FNME da 412.5 mg/kg y la FDA 250 mg/kg (1 mL/kg); los dos topan en 12.5 g (50 mL). La regla deja el rango entre ambas cifras y lo advierte.
- **Manitol 20 %**: OMS, de 1 mes a 12 años, 0.25–1.5 g/kg en 30–60 min; el FNME da 0.25 g/kg en el edema cerebral.
- **Deferoxamina** (PNUME 500 mg): OMS, IM, 50 mg/kg c/6 h, máximo 6 g/día. La FDA reconstituye a 213 mg/mL para la vía IM. La vía IV (15 mg/kg/h) no se calcula: la FDA no da una concentración final exacta («entre 3 y 3.5 mg/mL»).
- **Dimercaprol** (PNUME 50 mg/mL): FNME, arsénico, oro o mercurio grave, 3–5 mg/kg IM c/4 h por 2 días; después se espacia.
- **Edetato cálcico disódico** (PNUME 200 mg/mL): OMS, plomo sin encefalopatía, 20–30 mg/kg/día IM en 2 o 3 dosis hasta 5 días.

**No incluidos:**

- **Neostigmina:** el FNME la da cada 2 a 3 h en la miastenia, un intervalo que el esquema no admite. Para revertir el bloqueo neuromuscular no tiene dosis pediátrica.
- **Protamina:** se dosifica según las unidades de heparina, no por peso.
- **Suxametonio:** el frasco de 500 mg del PNUME no tiene una concentración final verificada.
- **Hidroxocobalamina 1 mg/mL:** es la presentación para déficit de B12, no el antídoto del cianuro.

## Lote 17: sertralina, fluoxetina, alopurinol, metformina y oxibutinina — verificado el 07/11/2026

- **Sertralina** (PNUME 50 mg): FDA (Zoloft), TOC, 25 mg/día al inicio de 6 a 12 años y 50 mg/día desde los 13; máximo 200 mg/día.
- **Fluoxetina** (PNUME 20 mg): FDA, en pediatría 10–20 mg/día al inicio para la depresión y 10 mg/día para el TOC; no aprobada en menores de 7 años.
- **Alopurinol** (PNUME 100 y 300 mg): FDA, hiperuricemia por tratamiento del cáncer, 10 mg/kg/día (100 mg/m² c/8–12 h), máximo 800 mg/día.
- **Metformina** (PNUME 500 y 850 mg): FNME y FDA, de 10 a 16 años, 500 mg c/12 h al inicio, hasta 2000 mg/día.
- **Oxibutinina** (PNUME 5 mg): FDA (liberación inmediata), mayores de 5 años, 5 mg c/12 h; máximo 5 mg c/8 h.

**No incluidos (pendientes que necesitan otra fuente o presentación):**

- **TB multirresistente** (levofloxacino, moxifloxacino, etionamida, cicloserina, estreptomicina, kanamicina, capreomicina): la NTS 221 solo da dosis de adulto. La OMS dosifica a los niños con tablas por banda de peso ligadas a formulaciones pediátricas que no están en el PNUME.
- **Antirretrovirales pediátricos** (lamivudina, lopinavir/ritonavir, abacavir, efavirenz, nevirapina, zidovudina): hace falta la norma vigente del MINSA para el VIH pediátrico; varias dosis son por superficie corporal y el Model Formulary de la OMS (2010) está desactualizado.
- **Risperidona:** la dosis inicial (0.25 mg con menos de 20 kg) no se puede medir con la tableta de 2 mg.
- **Itraconazol e inmunoglobulina humana:** openFDA no devolvió una dosis pediátrica legible.
- **Codeína:** la FDA la contraindica en menores de 12 años.
- **Bicarbonato de sodio, cloruro de potasio y cloruro de sodio al 20 %:** se dosifican en mEq, unidad que la app aún no maneja.

## Lote 18: hioscina butilbromuro — verificado el 07/11/2026

- **Hioscina butilbromuro** (PNUME 10 mg): FNME, de 6 a 12 años, 10 mg 3 veces al día. La dosis IM o IV del FNME (20 mg) no se separa claramente de la del adulto y no se calcula.

**Revisados y no incluidos:** piridoxina y tiamina (el FNME no da dosis pediátricas por peso, solo rangos generales); calcitriol y levofloxacino (sin monografía en el FNME).

## Unidad mEq: bicarbonato de sodio y cloruro de potasio — verificado el 07/11/2026

La app ahora admite dosis en miliequivalentes (`doseUnit: mEq`), también en infusión (mEq/kg/h) y en la concentración personalizada.

- **Bicarbonato de sodio 8.4 %** (PNUME): 1 mEq/mL (OMS: 1 mmol de Na y 1 de HCO3 por mL). FNME: en el paro, 1 mEq/kg al inicio y 0.5 mEq/kg cada 10 min; en la acidosis metabólica menos urgente, 2–5 mEq/kg en 4–8 h. La OMS da 1–5 mmol/kg sin gasometría en mayores de 2 años y advierte hipernatremia por inyección rápida en menores de 2 años.
- **Cloruro de potasio IV**: OMS, déficit agudo, 0.2–0.4 mmol/kg/h por 4–6 h solo por vía central en UCI con ECG (mezcla de 120 mmol/L o menos). Por vía periférica, máximo 0.2 mmol/kg/h con mezcla de 40 mmol/L o menos. La app calcula la velocidad (mL/h) de la mezcla, no la preparación con la ampolla al 20 % del PNUME: las fuentes leídas no dan sus mEq/mL.

**No incluidos:**

- **Cloruro de sodio al 20 %:** las fuentes leídas no dan una pauta pediátrica para la hiponatremia.
- **Mantenimiento de potasio** (1–2 mmol/kg/día, OMS): va dentro de los líquidos de mantenimiento, no como velocidad aparte.

## Crecimiento: puntaje z, percentil y clasificación NTS 238 — verificado el 07/11/2026

- **Tablas LMS:** Patrones de Crecimiento Infantil OMS 2006 (menores de 5 años, tablas diarias) y Referencia de Crecimiento OMS 2007 (5 a 19 años, tablas mensuales). Se copiaron sin cambios de los paquetes oficiales de la OMS `anthro` y `anthroplus` (`data-raw/growthstandards`). Se generan con `scripts/gen-who-tables.mjs` en `apps/mobile/src/domain/growth/whoTables.ts`.
- **Cálculo:** son las reglas del código de esos paquetes:
  - Edad en días redondeada en menores de 5 años; edad en meses con interpolación lineal entre meses desde los 5 años.
  - Corrección de 0,7 cm entre longitud y talla según la edad (731 días) y la forma de medir.
  - Interpolación cada 0,1 cm en peso para la longitud (45–110 cm) y peso para la talla (65–120 cm).
  - Puntaje z corregido más allá de ±3 DE en peso, IMC y perímetro braquial; fórmula simple en longitud/talla y perímetro cefálico.
  - Límites de edad: P/E 2007 hasta antes de 121 meses; T/E e IMC 2007 hasta antes de 229 meses.
- **Comprobación:** un niño de 12 meses con 7,7 kg da −2,05 DE, en línea con las tablas impresas de la OMS (−2 DE = 7,7 kg; mediana 9,6 kg). La mediana del IMC de una niña de 10 años es 16,6.
- **Clasificación:** NTS N.° 238-MINSA/DGIESP-2025 (RM N.° 682-2025-MINSA), Tablas 2 y 3, leídas en la imagen de las páginas 15 y 16. Su fuente es la Guía Técnica de Valoración Nutricional Antropométrica (RM N.° 034-2024/MINSA).
  - **Menores de 5 años:**
    - P/E: sobrepeso > +2; normal de +2 a −2; bajo peso < −2 a −3; bajo peso severo < −3.
    - P/T: obesidad > +3; sobrepeso > +2; normal; bajo peso (emaciado) < −2 a −3; bajo peso severo < −3.
    - T/E: alto > +2; normal; talla baja < −2 a −3; talla baja severa < −3.
    - PC/E: riesgo de microcefalia < −2; riesgo de macrocefalia > +2.
  - **De 5 a 11 años, 11 meses y 29 días:**
    - IMC/E: obesidad > +2, con obesidad severa desde ≥ +3; sobrepeso > +1 a +2; normal de +1 a −2; delgadez < −2 a −3; delgadez severa < −3.
    - T/E: talla alta > +2; mismas categorías bajas que en menores de 5 años.
  - **Rangos de edad (Tabla 2):** la clasificación empieza a los 29 días; el PC/E se clasifica hasta antes de los 3 años.
  - **Fuera de esos rangos** la app muestra el puntaje z y el percentil sin clasificación y explica por qué. Esto aplica también al perímetro braquial (la NTS no le fija puntos de corte), a la P/E desde los 5 años y a los mayores de 12 años.
- **Errata de la norma:** en la Tabla 3, el «Normal» del PC/E dice «≥ −2 a ≤ −2». Se interpreta como de −2 a +2, porque los riesgos de micro- y macrocefalia están en < −2 y > +2.

## Desarrollo: vigilancia del neurodesarrollo de 0 a 36 meses — verificado el 07/11/2026

- **Fuente:** NTS N.° 238-MINSA/DGIESP-2025, Anexo 10 (págs. 32–36 de la segunda parte). Las tablas se leyeron en la imagen de la página porque el OCR no las reconoce.
  - Tabla N.° 1, edad corregida en prematuros menores de 2 años: se restan (40 − edad gestacional) × 7 días. La app reproduce el ejemplo de la norma: 130 días a las 32 semanas dan 74 días.
  - Tabla de pautas por edad: de 15 a 21 días y a los 2 meses → recién nacido; 3–5 → 3 meses; 6–8 → 6; 9–11 → 9; 12–17 → 12; 18–23 → 18; 24–29 → 24; 30–36 → 30.
  - Tabla N.° 2, «Hitos del desarrollo según área»: adaptada de Huanca D., *Guía de Vigilancia del Neurodesarrollo* (2023). Tiene 5 áreas (motor grueso, motor fino, social, cognitivo y habla). El texto de cada hito se copió tal cual.
  - Se comprueban los hitos de la pauta y todos los de las pautas anteriores.
  - Interpretación:
    - Si no logra 1 hito: consejería, sesiones semanales de atención temprana y seguimiento al mes; si persiste, tamizaje con la prueba EDI.
    - Si no logra 2 o más hitos: atención temprana y tamizaje con la prueba EDI.
- **Decisión de la app:**
  - Antes de los 3 meses se usa la pauta del recién nacido. La tabla solo menciona de 15 a 21 días y los 2 meses, y la norma dice que la prueba se aplica desde el recién nacido.
  - El número de hitos no logrados cuenta todos los hitos evaluados, los de la pauta y los de las pautas anteriores.
- **No incluido todavía:** la lista de habilidades y conductas de 4 a 11 años (págs. 38 y siguientes).

## Corticoides inhalados: dosis diaria baja, media y alta — verificado el 07/11/2026

- **Fuente:** GINA 2025 (fuente `gina-2025`), leída en el texto del PDF oficial.
  - Box 4-2 (pág. 71): 6 a 11 años y 12 años o más.
  - Box 11-3 (pág. 195): 5 años o menos; solo la dosis baja y la edad con datos de seguridad y eficacia.
  - Valores copiados tal cual, en mcg/día de dosis medida.
- **Por qué es una tabla y no una ficha por kg:** GINA da dosis diarias totales por fármaco y dispositivo, sin frecuencia. Una ficha por kg o por toma obligaría a suponer el intervalo.
- **Advertencias que muestra la app, tomadas de GINA:**
  - No es una tabla de equivalencia.
  - Son dosis medidas, no liberadas.
  - El pMDI se usa preferentemente con espaciador, y siempre en niños de 5 años o menos.
  - La dosis alta se reserva para muy pocos pacientes.

## Vacunas: Esquema Nacional de Inmunizaciones 2026 — verificado el 07/11/2026

- **Fuente:** NTS N.° 246-MINSA/DGIESP-2026 (RM N.° 561-2026-MINSA, junio de 2026), descargada de gob.pe (partes 1 y 2). Reemplaza el esquema de la NTS 196-2022.
  - Las tablas 6.2.2 (niña y niño de 0 a 11 años, 11 meses y 29 días) y 6.2.3 (adolescente) se leyeron en la imagen de las págs. 45–47, porque el PDF es escaneado.
  - Se copiaron tal cual cada visita, cada vacuna, cada dosis y las notas (*) a (****).
- **Nirsevimab:** la indicación y la dosis vienen de la ficha 6.1.1.24 (pág. 44): dosis única de 50 mg IM si pesa menos de 5 kg y de 100 mg IM si pesa 5 kg o más. Se indica en recién nacidos de madres no vacunadas frente al VRS, nacidos de abril a septiembre, y excepcionalmente en menores de 6 meses.
- **Lo que hace la app:** con la edad, resalta las visitas que corresponden (incluidos los rangos «1 a 6 meses», «5 a 11 años», etc.) y la próxima visita puntual. No calcula esquemas de rescate (Anexo 2) ni casos especiales (6.3).

## Glasgow pediátrico — verificado el 07/11/2026

- **Fuente:** Manual MSD, versión para profesionales en español, tabla «Escala del Coma de Glasgow modificada para lactantes y niños». La tabla la adapta de Davis 1987, James 1985, Morray (Crit Care Med 1984) y Carney (Neurosurgery 2017). No se encontró una guía MINSA con esta escala.
  - Se copiaron los textos y puntos de cada columna, lactantes y niños: ojos 4–1, verbal 5–1 y motora 6–1.
  - Interpretación de la nota (*): ≤ 12 sugiere traumatismo encefálico grave; ≤ 8, la posible necesidad de intubación y ventilación y de controlar la presión intracraneal.
  - Nota (†): en el paciente intubado, inconsciente o que no habla, la respuesta motora es la parte más importante.
- **Decisión de la app:** la tabla no fija una edad de corte entre lactante y niño, así que la pantalla deja elegir la columna y explica el criterio, en vez de imponer una edad. De 13 a 15 puntos solo dice que no se cumplen los criterios de gravedad de la tabla.

## Bilirrubina neonatal: umbrales por hora — verificado el 07/11/2026

- **Fuente:** Kemper AR et al., AAP 2022, Pediatrics 2022;150(3):e2022058859. Supplemental Tables 1–4, Tabla 2 (factores de riesgo de neurotoxicidad) y KAS 10 y 17–23.
  - La copia del PDF de la AAP alojada en neored.net incluye las tablas suplementarias. publications.aap.org bloquea las descargas automáticas.
- **Extracción (`scripts/bili/parse_aap2022.py`):** 18 tablas por edad gestacional y tipo de umbral, en mg/dL, de la hora 1 al día 14. Validaciones:
  - el día 0 tiene 23 valores y los demás días 24;
  - las horas son continuas;
  - la celda marcada con «a» abre una meseta constante;
  - ningún umbral baja con la edad.
  - Comprobación puntual: 40 semanas sin factores da 13.3 mg/dL a las 24 h y 17.0 a las 48 h.
- **Hallazgo:** en la Tabla 3 a 37 semanas, la nota dice «≥ 151 h», pero también «6 días y 10 h», que son 154 h, y la celda marcada está en la hora 154. Se usa la celda de la tabla.
- **Lógica:**
  - Fototerapia sin factores: tablas de 35 a 40 semanas (40 = 40 o más). Con factor de riesgo: de 35 a 38 (38 = 38 o más). Exanguinotransfusión: de 35 a 38.
  - Escalamiento: 2 mg/dL bajo el umbral de exanguinotransfusión (KAS 17).
  - Fuera de rango: menos de 35 semanas, hora 0 o más de 14 días.
- **No incluido:** el seguimiento posalta de la Figura 7, cuyo texto en el PDF es ambiguo. La app remite a la figura de la guía.
