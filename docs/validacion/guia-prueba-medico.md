# Guía de prueba de Dosikid para médicos

Gracias por probar Dosikid. Esta guía toma unos 30–40 minutos. No hace falta seguirla entera ni en orden: lo más valioso es que **compares cada resultado con lo que tú harías en la práctica** y nos digas dónde no coincide.

## Antes de empezar

1. **Instalar:** abre el archivo `Dosikid-v1.apk` en un Android. El teléfono pedirá permitir «instalar apps de origen desconocido» y Play Protect puede avisar que la app no es de Play Store. Es esperable en una versión de prueba.
2. **No usar con pacientes reales todavía.** Es una versión en validación: cada dosis debe contrastarse con tu fuente habitual.
3. **Cómo reportar algo:** toma una captura de pantalla y anota:
   - qué datos pusiste (peso, edad, fármaco, indicación, presentación);
   - qué mostró la app;
   - qué esperabas tú y de qué fuente sale (PNUME, FNME, Harriet Lane, guía MINSA, etc.);
   - qué tan grave es: **crítico** (dosis peligrosa), **importante** (dosis distinta pero no peligrosa) o **menor** (texto, diseño, comodidad).

## Parte 1 — Primera impresión (5 min)

Abre la app sin leer nada más y responde:

- [ ] ¿Entendiste qué hace la app en los primeros 10 segundos?
- [ ] ¿La barra inferior (Inicio, Urgencias, Calculadoras, Favoritos, Ajustes) se ve completa y no queda tapada por la barra del teléfono?
- [ ] ¿Las letras y los botones tienen buen tamaño para usarlos con una mano y con apuro?
- [ ] ¿Algo se ve cortado, encimado o mal alineado? Pruébalo también con el teléfono en modo oscuro.

## Parte 2 — Dosis por fármaco (15 min)

Busca cada fármaco desde Inicio, pon el peso y la edad, elige la indicación y la presentación, y compara con el resultado esperado. Estos valores salen de las fuentes citadas en cada ficha.

| #   | Fármaco                   | Datos              | Indicación                                 | Presentación                  | Debe mostrar                   |
| --- | ------------------------- | ------------------ | ------------------------------------------ | ----------------------------- | ------------------------------ |
| 1   | Paracetamol               | 10 kg, 1 año 1 mes | Fiebre o dolor leve a moderado             | Jarabe 120 mg/5 mL            | 150 mg = **6.3 mL** cada 6 h   |
| 2   | Amoxicilina               | 15 kg, 3 años      | Infecciones comunes (mayores de 3 meses)   | Suspensión 250 mg/5 mL        | 200 mg = **4 mL** cada 8 h     |
| 3   | Ibuprofeno                | 10 kg, 1 año       | Fiebre o dolor (6 meses a 11 años)         | Suspensión 100 mg/5 mL        | 100 mg = **5 mL** cada 8 h     |
| 4   | Amoxicilina + clavulánico | 10 kg, 2 años      | Pauta cada 8 h con presentación 4:1        | Suspensión 125/31.25 por 5 mL | 133.3 mg = **5.3 mL** cada 8 h |
| 5   | Ondansetrón               | 10 kg, 1 año       | Vómitos en gastroenteritis                 | Solución oral 4 mg/5 mL       | 1.5 mg = **1.9 mL**            |
| 6   | Ambroxol (nuevo)          | 14 kg, 3 años      | Secreciones espesas (2 a 5 años)           | Jarabe 15 mg/5 mL             | 7.5 mg = **2.5 mL** cada 8 h   |
| 7   | Salbutamol                | 14 kg, 3 años      | Crisis asmática con inhalador y aerocámara | Inhalador 100 µg por puff     | **4 puffs**                    |
| 8   | Amikacina                 | 10 kg, 3 años      | Infecciones graves cada 8 h                | Ampolla 250 mg/mL             | 50 mg = **0.2 mL** cada 8 h    |

Para cada caso, revisa además:

- [ ] ¿Se entiende de inmediato **cuánto dar, en qué unidad y cada cuánto**?
- [ ] ¿Aparecen las dosis máximas por toma y por día? ¿Coinciden con tu fuente?
- [ ] Abre «Fuentes» (está plegado al final). ¿Son las fuentes que tú consultarías?
- [ ] ¿Faltan advertencias, contraindicaciones o interacciones importantes?
- [ ] ¿La marca o presentación que se usa en tu hospital aparece en la lista?

### Casos límite (aquí es donde suelen esconderse los errores)

- [ ] **Ambroxol en un niño de 1 año:** no debe dar dosis: debe indicar que no hay pauta para esa edad o que está contraindicado en menores de 2 años.
- [ ] **Ibuprofeno en un bebé de 4 meses:** ¿qué hace la app? ¿Te parece correcto?
- [ ] **Paracetamol en un adolescente de 70 kg:** la dosis debe quedarse en el tope máximo y no subir con el peso. ¿Qué tope muestra?
- [ ] **Datos absurdos:** 150 kg con 2 años, o 2 kg con 10 años. ¿La app avisa que el peso no cuadra con la edad?
- [ ] **Redondeo:** con una tableta o un volumen que no se puede medir exacto, ¿la app avisa cuando redondea mucho?
- [ ] **Presentación favorita:** marca «☆ Usar siempre esta presentación», sal de la ficha y vuelve a entrar. ¿Queda elegida?

## Parte 3 — Urgencias e infusiones (5 min)

- [ ] **Adrenalina IM en anafilaxia:** 12 kg, 3 años, ampolla 1 mg/mL (1:1000) → debe mostrar **0.12 mL** (0.12 mg).
- [ ] **Midazolam IV para sedación:** 12 kg, 2 años, 1 mg/mL → dosis inicial **0.6 mL** (0.6 mg).
- [ ] En la pestaña Urgencias, pon un peso y revisa toda la tabla. ¿Están los fármacos que usarías en un paro o una convulsión? ¿Falta alguno?
- [ ] En Infusiones, calcula una infusión continua. ¿Se entienden los mL/h y las gotas por minuto (micro y macrogotero)?

## Parte 4 — Calculadoras (10 min)

| Calculadora                     | Datos de prueba              | Debe dar                                         |
| ------------------------------- | ---------------------------- | ------------------------------------------------ |
| Líquidos (Holliday-Segar)       | 10 kg                        | **1000 mL/día**                                  |
| Líquidos (Holliday-Segar)       | 25 kg                        | **1600 mL/día**                                  |
| Superficie corporal (Mosteller) | 15 kg, 100 cm                | **0.65 m²**                                      |
| Función renal (Schwartz)        | 100 cm, creatinina 0.5 mg/dL | TFG unos **83 mL/min/1.73 m²**, categoría **G2** |

- [ ] En la ficha de **amikacina**, con una TFG de 30: ¿muestra «cada 24 h»? ¿Coincide con tu práctica?
- [ ] Prueba **Apgar, Silverman y Capurro** con un recién nacido que conozcas. ¿El puntaje y la interpretación coinciden?
- [ ] En **Ballard**, ¿las imágenes ayudan a elegir la opción correcta? ¿Alguna imagen no coincide con su texto? (Bufanda y talón-oreja aún no tienen imagen.)
- [ ] En las opciones con imagen, ¿los puntos (pts) dejan ver bien el dibujo?
- [ ] **Bilirrubina neonatal:** con un caso real (edad en horas, semanas, factores de riesgo), ¿el umbral de fototerapia coincide con la AAP 2022?
- [ ] **Presión arterial:** niño de 8 años con su talla. ¿El percentil y la clasificación son correctos?
- [ ] **Glasgow pediátrico, crecimiento, desarrollo y vacunas:** ¿algo no coincide con la norma MINSA vigente?

## Parte 5 — Historial y búsqueda (3 min)

- [ ] Calcula 3 dosis distintas y abre **Historial** desde Inicio. ¿Aparecen con hora, paciente y dosis?
- [ ] Toca uno: ¿vuelve a abrir la ficha con los mismos datos del paciente?
- [ ] Busca en el historial por nombre de fármaco. Borra uno y luego todo.
- [ ] En una categoría (por ejemplo, Antibióticos), usa el buscador. ¿Encuentra lo que buscas aunque lo escribas sin tildes o con un error?

## Preguntas finales

1. ¿Usarías esta app en tu guardia? ¿Qué te lo impediría hoy?
2. ¿Qué fármacos o presentaciones de uso frecuente en Perú **faltan**?
3. ¿Hubo alguna dosis que te diera **desconfianza**? ¿Cuál y por qué?
4. ¿Alguna pantalla tiene **demasiada información** o te costó encontrar algo?
5. Comparada con Pediatrum, DosisPedia u otra app que uses, ¿qué hace mejor y qué hace peor?
6. ¿Qué fuente usas tú como referencia principal? ¿Debería tener prioridad en la app?
7. ¿Qué agregarías primero: más fármacos, más calculadoras o mejor presentación de lo que ya hay?
8. Del 1 al 10, ¿cuánto confías en los resultados? ¿Qué subiría ese número?

## Datos del revisor (para el registro de validación)

- Nombre y especialidad:
- CMP (opcional):
- Hospital o servicio:
- Fecha de la prueba:
- Modelo de teléfono y versión de Android:
