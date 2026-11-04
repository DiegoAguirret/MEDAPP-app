# Verificación de las fichas contra fuentes oficiales

**Fecha:** 2026-11-05 · **Método:** cada valor se tomó de un documento descargado y leído en esta fecha (openFDA/DailyMed, CIMA-AEMPS, PubMed/PMC, OMS IRIS, MINSA/DGE, GINA, CPS). No se usaron datos de memoria. Las citas son textuales y breves (las etiquetas de la FDA son de dominio público).

> Las 10 fichas siguen en **borrador** hasta que un médico las valide. Basta **1 fuente oficial** por regla. El libro de Peña Camarena se usa como fuente adicional y para las presentaciones y marcas comercializadas en Perú.

| Fármaco | Valor en la app | Fuente | Cita / dato verificado | Estado |
|---|---|---|---|---|
| Paracetamol | 10–15 mg/kg cada 6 h | AEMPS FT 49302 (Apiretal) | "15 mg/kg cada 6 horas ó 10 mg/kg cada 4 horas" | ✅ |
| Paracetamol | máx. 3 g/día (>38 kg) | AEMPS FT 49302 | "los 3 g al día en adultos y en niños con más de 38 kg" | ✅ |
| Paracetamol | ≤60 mg/kg/día de 29 días a 2 años | FDA paracetamol IV (0f67c1bd…) | "Infants (29 days to 2 years of age): 15 mg/kg every 6 hours to a maximum of 60 mg/kg per day" | ✅ (la pauta de la app da 60 mg/kg/día como máximo) |
| Ibuprofeno | 5–10 mg/kg cada 8 h, 6 meses–11 años | FDA suspensión (141b7964…) | "5 mg/kg if the baseline temperature is less than 102.5°F, or 10 mg/kg…"; "maximum daily dose is 40 mg/kg" | ✅ |
| Ibuprofeno | tope 400 mg/toma, 1200 mg/día | FDA venta libre 200 mg (00653b7c…) | "2 tablets may be used… do not exceed 6 tablets in 24 hours" (12 años o más) | ✅ |
| Metamizol | 8–16 mg/kg/dosis, hasta 7–9 años | AEMPS FT 83494 (gotas) | "En niños de hasta 7-9 años de edad, se pueden administrar de 8 a 16 mg de metamizol por kg" | ✅ |
| Metamizol | 1 gota = 25 mg | AEMPS FT 83494 | "1 ml de solución (20 gotas) contiene 500 mg… 1 gota contiene 25 mg" | ✅ |
| Metamizol | cada 6–8 h, hasta 4 dosis/día | AEMPS FT 42304 (inyectable) | "una dosis única hasta 4 veces al día, en intervalos de 6 a 8 horas" | ✅ (de la ficha inyectable) |
| Metamizol | desde 3 meses / 5 kg | AEMPS FT 42304 | La tabla empieza en "5-8 kg / 3-11 meses"; la ficha **no** prohíbe expresamente usos menores | ⚠️ alcance conservador |
| Amoxicilina | ≤3 meses: 30 mg/kg/día cada 12 h | FDA amoxicilina (00fbd46e…) | "The upper dose for neonates and infants aged 3 months or younger is 30 mg/kg/day divided every 12 hours" | ⚠️ 1 fuente |
| Amoxicilina | OMA 80–90 mg/kg/día cada 12 h, máx. 2 g/dosis | AAP EQIPP (Lieberthal 2013) | "High-Dose Amoxicillin 80–90 mg/kg/day po divided BID (max dose 2 g)" | ✅ |
| Amoxicilina | OMA de 6 meses a 12 años | AAP 2013 (PubMed 23439909) | "children from 6 months through 12 years of age with uncomplicated AOM" | ✅ (hay una fe de erratas de 2014 que no se pudo leer) |
| Amoxicilina | faringitis 50 mg/kg/día una vez, máx. 1 g, 10 días; desde 3 años | IDSA 2012 (PMC7108032) | "50 mg/kg once daily (max = 1000 mg)… 10 d"; "not indicated for children <3 years old" | ⚠️ 1 fuente |
| Amox./clav. | 25–45 mg/kg/día cada 12 h desde 12 semanas, hasta 875 mg/dosis | FDA (00cf4429…) | "25 to 45 mg/kg/day every 12 hours… up to the adult dose" | ⚠️ 1 fuente (en la UE se usan otras proporciones) |
| Azitromicina | 10 mg/kg día 1 y 5 mg/kg días 2–5, desde 6 meses | FDA (003307c5…) y AEMPS FT 71180 | "10 mg/kg as a single dose on Day 1 followed by 5 mg/kg once daily on Days 2 through 5"; "no debe exceder la dosis diaria en adultos de 500 mg" | ✅ |
| Cefalexina | 25–50 mg/kg/día, mayores de 1 año, máx. 4 g/día | FDA (02b5cd6f…) | "Pediatric Patients (over 1 year of age)… 25 to 50 mg/kg given in equally divided doses"; "up to 4 grams daily" | ⚠️ 1 fuente; el intervalo cada 6 h no está fijado en la ficha |
| Cetirizina | 6–23 meses: 2.5 mg/día | FDA solución Rx (05324e41…) | "6 months to 23 months of age is 2.5 mg (½ teaspoonful) once daily" | ⚠️ 1 fuente |
| Cetirizina | 2–5 años: 2.5–5 mg/día | FDA Rx y AEMPS FT 80453 | "maximum dose of 5 mg per day"; AEMPS: "2,5 mg dos veces al día" | ✅ |
| Cetirizina | 6 años o más: 5–10 mg/día | FDA venta libre (0210f9e5…) y AEMPS FT 80453 | "5 mL or 10 mL once daily… do not take more than 10 mL in 24 hours" | ✅ |
| Ondansetrón | 0.15 mg/kg dosis única, máx. 8 mg, desde 6 meses | CPS 2018 | "0.15 mg/kg in liquid format (to a maximum dose of 8 mg)"; "six months and older" | ✅ |
| Ondansetrón | edad según IDSA | IDSA 2017 (PMC5850553) | "may be given… in children >4 years of age" | ✅ (se muestra como nota) |
| Prednisolona | 1–2 mg/kg/día | FDA solución (14b7f41b…) | "1-2 mg/kg/day in single or divided doses" (recomendación NHLBI) | ✅ |
| Prednisolona | máx. 20 mg (<2 años), 30 mg (2–5), 40 mg (6–11), 3–5 días | GINA 2025 | "maximum of 20 mg/day for children under 2 years of age and 30 mg/day for children aged 2–5 years"; "maximum of 40 mg/day" | ✅ (GINA tiene un corte distinto en otra página; se indica en la nota) |
| Plan B | SRO 50–100 mL/kg en 3–4 h | MINSA RM 755-2017 (vía DGE) | "50 a 100 ml/kg de peso en 3 a 4 horas" | ✅ (OMS: 75 mL/kg en 4 h) |
| Plan C | 30 + 70 mL/kg; <12 m en 1 h + 5 h; ≥12 m en 30 min + 2.5 h | MINSA y OMS Pocket Book 2013 | "Lactantes < 12 meses: 30 ml/kg en 1 hora; luego 70 ml/kg en 5 horas" | ✅ |
| Holliday-Segar | 100/50/20 mL/kg/día | Holliday & Segar 1957 (PubMed 13431307), revisión PMC12543346 | "100 mL/kg… first 10 kg… 50 mL/kg… 10–20 kg… 20 mL/kg… above 20 kg" | ✅ (la OMS usa 25 mL/kg por encima de 20 kg) |

## Norma peruana: Formulario Nacional de Medicamentos Esenciales (DIGEMID, 2.ª ed. 2008)
| Fármaco | FNME (niños) | Decisión en la app |
|---|---|---|
| Paracetamol | 10–15 mg/kg cada 4–6 h; adulto máx. 4 g/día | Máximo 4 g/día (FNME + FDA); la diferencia con la AEMPS (3 g) se muestra por país |
| Ibuprofeno | 6 m–12 a: 5 o 10 mg/kg (fiebre alta) cada 4–6 h | Coincide; la app usa cada 8 h (rango FDA 6–8 h) |
| Metamizol | Solo inyectable: 10–12 mg/kg IM | Respalda el rango de la AEMPS (8–16) frente al del libro |
| Amoxicilina | <3 m: 30 mg/kg/día cada 12 h; >3 m: 20 (leve) o 40 (grave/respiratoria) mg/kg/día cada 8 h | Nueva regla «infecciones comunes» 20–40 mg/kg/día cada 8 h; la dosis alta para otitis (AAP) se mantiene aparte, con nota |
| Amox./clav. | <3 m: 15 mg/kg cada 12 h; >3 m: 12.5–22.5 mg/kg cada 12 h; suspensión 7:1 | Coincide con la FDA; se añade la regla para menores de 3 meses |
| Azitromicina | Otitis: 10 mg/kg el día 1 y 5 mg/kg días 2–5; faringitis (>2 a): 12 mg/kg × 5 días | Coincide; se añade la faringitis |
| Cefalexina | 25–50 (leve-moderada) y 50–100 (grave) mg/kg/día cada 6 h; **máx. 3 g/día** | **Prioridad Perú:** máximo 3 g/día (la FDA admite 4 g, se muestra por país) |
| Ondansetrón, cetirizina, prednisolona | No figuran para estas indicaciones (o la extracción del PDF no fue fiable) | Se mantienen las fuentes FDA, AEMPS, CPS y GINA |

## Comparación con el libro de Peña Camarena (Dosificación de medicamentos en pediatría)
| Fármaco | Libro | App | Resultado |
|---|---|---|---|
| Paracetamol | 10–15 mg/kg/dosis cada 4–6 h; gotas 100 mg/mL; jarabe 120 mg/5 mL | 10–15 mg/kg cada 6 h | Coincide |
| Ibuprofeno | 5–10 mg/kg/dosis cada 6–8 h; jarabe 100 mg/5 mL; gotas 40 mg/mL | 5–10 mg/kg cada 8 h | Coincide; se añaden las gotas 40 mg/mL |
| Metamizol | 15–25 mg/kg/dosis; **gotas 400 mg/mL**; jarabe 250 mg/5 mL | 8–16 mg/kg (AEMPS) | **Difiere**: la app usa la ficha AEMPS y muestra el rango del libro como nota; se usan las presentaciones peruanas |
| Amoxicilina | 30–50 mg/kg/día cada 8 h; otitis 80 mg/kg/día cada 8–12 h | otitis 80–90 mg/kg/día cada 12 h | Coincide; se añade el jarabe 125 mg/5 mL |
| Azitromicina | 10 mg/kg/día por 3 días | se añade el esquema de 3 días (también en FDA y AEMPS) | Coincide |
| Cefalexina | 50–100 mg/kg/día cada 6 h, máx. 4 g/día | 25–50 habitual y 50–100 en graves, cada 6 h | Coincide; el libro confirma el intervalo cada 6 h |
| Cetirizina | 0.25 mg/kg/día cada 12–24 h; no en menores de 6 meses; gotas 10 mg/mL | dosis fija por edad (FDA) | Método distinto, mismo límite de edad; se añaden las gotas 10 mg/mL |
| Prednisona | 1–2 mg/kg/día (máx. 60 mg) | prednisolona 1–2 mg/kg/día con topes GINA | Coincide en mg/kg |
| Ondansetrón | No figura | CPS / IDSA | — |

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
