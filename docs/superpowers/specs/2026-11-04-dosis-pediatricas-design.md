# Diseño: App de dosificación pediátrica (Perú)

**Fecha:** 2026-11-04 · **Estado:** borrador para aprobación · **Nombre comercial:** por definir

Las decisiones del usuario aparecen tal cual. Las marcadas **[decisión de Claude]** son propuestas y se pueden cambiar. Las marcadas **[pendiente]** necesitan una respuesta antes de construir esa parte.

---

## 0. Camino ligero de lanzamiento (decisión del usuario, 2026-11-04)

El usuario quiere **el camino más simple para lanzar y monetizar**, con una calidad superior a la de El Peñita y DosisPedia. **Esta sección prevalece sobre el resto del documento.** Todo lo que aquí se aplaza queda como "fase futura".

- **Equipo:** el usuario desarrolla y redacta las fichas. Un **médico general** es tester y validador clínico. No hay pediatra, empresa ni presupuesto en v1.
- **Validación real (lo que el médico tester ya hace a mano):**
  - Cada dosis se toma de la ficha técnica y se contrasta con 2 referencias, que se citan.
  - El médico tester recalcula a mano los casos de prueba de cada fármaco.
  - Esos casos quedan como pruebas automáticas que bloquean cualquier publicación con error.
  - Sustituye a "pediatra + 2 revisores" (§4.6) en v1.
- **Alcance v1:** **30–40 fármacos de uso común**: analgésicos, antipiréticos, antibióticos frecuentes, antihistamínicos, antieméticos, broncodilatadores y corticoides. Más las calculadoras de líquidos y deshidratación, y la búsqueda por fármaco y por diagnóstico.
  - El módulo de **urgencias y reanimación pasa a v1.1**: es el de mayor riesgo y requiere una validación más cuidadosa.
- **Plataforma:** **solo Android** con una cuenta personal de Google Play (pago único de US$25).
  - Las cuentas personales nuevas deben pasar una **prueba cerrada de al menos 12 testers durante 14 días** antes de publicar en producción. El médico y sus colegas sirven para esto.
  - **iOS queda aplazado** hasta tener una empresa o un aliado institucional (Apple 1.4.2 y 5.1.1(ix), §6.3).
- **Mínimo legal v1:**
  - Términos de uso y política de privacidad.
  - Avisos de "herramienta de referencia; no es dispositivo médico; la decisión es del médico".
  - Declaración de salud en Play Console.
  - No recoger datos de pacientes.
  - **Se aplazan:** constituir la empresa, la consulta a DIGEMID, el registro de marca y la documentación regulatoria.
- **Monetización v1:**
  - **Anuncios (AdMob) desde el lanzamiento**, solo en listados y nunca en un resultado.
  - **Pro sin anuncios, con favoritos y temas**, mediante compra en Google Play.
  - Todas las dosis siguen gratis e ilimitadas.
- **Se mantiene sin recortes:** el motor de cálculo probado, el contenido como datos versionados y firmados, el retiro remoto de una ficha, la seguridad y las buenas prácticas de código (§7). Son baratos de hacer bien desde el principio y caros de añadir después.

---

## 1. Intención y por qué

Es una herramienta de bolsillo para que **médicos en Perú** calculen dosis pediátricas de forma rápida, segura y trazable, en consulta y en urgencias, también sin internet.

Las apps que existen (El Peñita, DosisPedia, Pediatrum) demuestran que hay demanda, pero tienen fallos repetidos:

- Fuentes viejas o no citadas en cada fármaco. El Peñita se basa en un libro cuya bibliografía es de 1997–2002 (Harriet Lane 16ª ed., Taketomo 7ª ed., Neofax 1997).
- Abandono técnico: DosisPedia tiene reseñas de "no abre" y su última versión es de 2023.
- Anuncios dentro de una herramienta clínica (Pediatrum).
- No convierten la dosis a **mL de la presentación concreta**, que es donde ocurren los errores de 10 veces la dosis.

Lo que nos diferencia: **cada número muestra de dónde sale**, quién lo revisó y cuándo. Además se usan las presentaciones y marcas registradas en Perú.

**A futuro debe generar ingresos** (decisión del usuario): anuncios más una versión Pro.

## 2. Usuarios

- **Principales:** médicos generales y de primer nivel, residentes, internos y pediatras en Perú.
- **Secundarios (más adelante):** estudiantes de medicina y médicos de otros países hispanohablantes, con paquetes de marcas por país.
- **No es para padres ni pacientes.** La app lo indica al entrar, con una autodeclaración de profesional de salud.

## 3. Objetivos, no-objetivos y anti-objetivos

**Objetivos v1**

- Calcular una dosis a partir del **peso** (o de la edad cuando la fuente lo indique) y obtener mg por toma, frecuencia, **mL de la presentación elegida**, dosis máxima aplicada y la fuente.
- Buscar por fármaco **y por diagnóstico**.
- Ofrecer un **módulo de urgencias y reanimación** según el peso, accesible en un toque.
- Funcionar 100 % sin conexión una vez descargado el contenido.
- Publicar en Google Play y en App Store (ver §6.3, que condiciona iOS).

**No-objetivos (v1)**

- Historias clínicas, guardar datos de pacientes, telemedicina o recetas electrónicas.
- Diagnóstico automático o recomendaciones de tratamiento generadas por IA.
- Contenido para adultos.

**Anti-objetivos.** La app fracasa aunque funcione técnicamente si:

- Muestra una dosis sin fuente o con un error de cálculo. **Un solo error de dosis es inaceptable.**
- Bloquea o retrasa una dosis de urgencia por un límite de uso, un anuncio o un muro de pago.
- Copia tablas o textos protegidos por derechos de autor.
- Recoge datos de pacientes sin necesidad.

## 4. Alcance médico

### 4.1 Contenido v1 [decisión de Claude, a validar con el responsable clínico]

1. **Formulario de 80–120 fármacos pediátricos** de mayor uso en el primer nivel y en emergencias de Perú. Se priorizan los del **PNUME** (Petitorio Nacional Único de Medicamentos Esenciales), es decir, lo que realmente hay en los establecimientos.
2. **Urgencias y reanimación pediátrica:** adrenalina, amiodarona, adenosina, atropina, bicarbonato, calcio, dextrosa, midazolam/diazepam, naloxona, desfibrilación y cardioversión (J/kg), tamaño de tubo endotraqueal y bolos de fluidos. Fuente: guías **AHA/PALS vigentes** (verificar la actualización 2025).
3. **Calculadoras:**
   - Líquidos de mantenimiento (Holliday-Segar).
   - Deshidratación, planes A/B/C (norma MINSA y OMS).
   - Superficie corporal (Mosteller).
4. **Búsqueda por diagnóstico:** índice de orientaciones terapéuticas redactado por nosotros, basado en guías MINSA (EDA, IRA, TB, malaria) y guías internacionales. Es la idea del índice del Peñita, pero **con texto propio**.

### 4.2 Fases siguientes (v2+)

- Neonatología: bilirrubina según AAP 2022, glucosa y líquidos del recién nacido.
- Crecimiento OMS. **Requiere permiso comercial de la OMS** (ver §6.2).
- Perfusiones continuas (mcg/kg/min → mL/h).
- Ajuste por función renal.
- Paquetes por país.

### 4.3 Ficha de cada fármaco (modelo de datos clínico)

Cada entrada contiene:

- Nombre DCI y sinónimos; marcas en Perú.
- **Presentaciones con concentración** (p. ej. "suspensión 250 mg/5 mL").
- Indicaciones, cada una con: rango etario o de peso, dosis (mg/kg/dosis o mg/kg/día), frecuencia, vía, **dosis máxima por toma y por día**, duración típica.
- Precauciones, contraindicaciones y alertas clave en texto propio y breve.
- **Fuentes** (mínimo 2 por indicación), con edición, año y sección.
- Quién la redactó, **quién la revisó (2 revisores)**, fecha de revisión y **fecha de próxima revisión** (anual).

### 4.4 Jerarquía de fuentes [decisión de Claude]

1. **Fichas técnicas o etiquetas oficiales:** registro DIGEMID del producto en Perú; FDA/DailyMed y EMA/CIMA como respaldo. Son oficiales y de acceso público.
2. **Guías normativas peruanas:** MINSA y DIGEMID (TB, malaria, EDA, IRA, PNUME). Son normas públicas.
3. **Referencias pediátricas de verificación cruzada:** BNF for Children, Harriet Lane (edición vigente), Pediamécum (AEP), Lexicomp Pediatric, Red Book (AAP), guías AHA/PALS. **Se usan para verificar el dato, no se copia su texto ni sus tablas** (ver §6.2).
4. Si las fuentes no coinciden, el revisor clínico decide, lo documenta y la ficha muestra una nota de "rango según fuente".

### 4.5 Reglas de seguridad clínica en el cálculo (obligatorias)

- Se valida el peso según la edad: si es incoherente (p. ej. 45 kg con 6 meses), la app advierte y pide confirmar.
- **El tope de dosis máxima se aplica siempre** y se muestra de forma explícita ("limitado a dosis máxima de adulto: 1 g").
- Se muestra el **cálculo paso a paso** (peso × mg/kg = mg → mg ÷ concentración = mL).
- Redondeo a volúmenes medibles según la presentación (p. ej. 0,1 mL en jeringa, ½ tableta si es ranurable), indicando el redondeo.
- Unidades claras: nunca "u", nunca ceros finales ("5 mL", no "5.0 mL"), siempre cero a la izquierda ("0,5 mg"). Se usan **mayúsculas diferenciales (tall-man)** para nombres parecidos.
- Separación decimal según el formato peruano, de forma consistente en toda la app.
- **Nunca hay anuncios** en la pantalla del resultado ni en el módulo de urgencias.
- Aviso permanente: "Herramienta de apoyo. La decisión clínica es responsabilidad del médico tratante. Verifique con la ficha técnica." Lo exigen Apple 1.4.1 y Google Play.

### 4.6 Gobernanza clínica

- **Responsable clínico (firma visible en la app):** idealmente un **pediatra colegiado**. **[pendiente: hoy solo se cuenta con un médico general como apoyo]**
- **Doble revisión** de cada ficha antes de publicarla: pediatra más un segundo revisor (otro médico o un químico farmacéutico).
- **Casos de prueba clínicos:** por cada fármaco, al menos 3 casos (peso bajo, medio y alto o con tope) calculados a mano por el revisor. Se guardan como pruebas automáticas que **deben pasar antes de publicar contenido**.
- Botón "Reportar un error en esta dosis" dentro de la app. Cada reporte se responde en menos de 72 h y puede activar un retiro (ver §7.4).
- Registro de cambios clínicos público dentro de la app ("Novedades del contenido").

## 5. Producto y monetización

### 5.1 Modelo [decisión del usuario: anuncios + Pro; ajustes de Claude por seguridad]

**Gratis, para siempre:**

- Todas las dosis.
- Todo el módulo de urgencias.
- Calculadoras básicas.
- Búsqueda.
- **Sin límite de consultas diarias.** Decisión de Claude: limitar dosis es un riesgo para el paciente y genera reseñas negativas. Se propone en lugar del límite diario que sugirió el usuario.

**Anuncios en la versión gratuita:**

- Solo banners en listados, búsqueda y ajustes.
- Nunca intersticiales a pantalla completa en el flujo clínico. Como mucho, un intersticial al cerrar una sesión larga.
- **Se excluyen las categorías** de medicamentos con receta, salud dudosa y apuestas.

**Pro (suscripción) [precios: decisión de Claude, a validar]:**

- Sin anuncios.
- Favoritos e historial de búsquedas (sin datos de pacientes).
- Temas (oscuro y otros).
- Calculadoras avanzadas: perfusiones y, más adelante, neonatología y crecimiento.
- Modo "ronda": varias dosis para un mismo peso en una sola pantalla.
- Exportar o compartir la hoja de dosis como imagen, sin datos personales.
- Precio de referencia: **S/ 9,90/mes o S/ 59,90/año**. Comparativa: WeMeds en Brasil cobra alrededor de US$81/año y Whitebook alrededor de US$107/año. Perú necesita precios más bajos.

### 5.2 Otras vías de ingreso (orden recomendado)

1. **Licencias institucionales (B2B):** universidades, programas de residencia, clínicas y EsSalud o redes privadas. Los usuarios de la institución reciben Pro. **También resuelve el requisito de Apple** (§6.3).
2. **Expansión regional:** paquetes de marcas y presentaciones por país (México, Colombia, Bolivia, Ecuador).
3. **Patrocinios:** solo institucionales y no de laboratorios con productos en la app, para evitar conflictos de interés. Siempre separados del contenido clínico y declarados.

### 5.3 Rentabilidad realista

- Perú tiene alrededor de 17,9 médicos por cada 10 000 habitantes (MINSA, octubre de 2025), es decir, unos 60 000 médicos, además de internos y estudiantes.
- Escenario conservador: 10 000 usuarios activos al mes, 3 % de conversión a Pro y S/ 60/año dan unos **S/ 18 000/año**, más los anuncios.
- Conclusión: con usuarios individuales en Perú alcanza para cubrir costos y algo de ganancia. **La rentabilidad real está en las licencias B2B y en la expansión regional.** El diseño técnico se prepara para ambas desde el inicio (multi-país e institucional).

## 6. Marco legal y regulatorio (Perú y tiendas)

> No es asesoría legal. Lo marcado ⚖️ debe confirmarlo un abogado peruano antes del lanzamiento.

### 6.1 Requisitos previos

- **Constituir una persona jurídica** (SAC o EIRL) con RUC. Hace falta para:
  - Apple 5.1.1(ix): las apps de salud las publica una entidad legal, no un desarrollador individual.
  - Cuenta de organización en Google Play.
  - Facturar (SUNAT).
  - Firmar contratos con los revisores clínicos.
  - Obtener el D-U-N-S que pide Apple.
- **Registrar la marca** en INDECOPI.
- **Términos y condiciones y política de privacidad** en español, enlazados desde la app y las tiendas. ⚖️
- **Contratos con los revisores clínicos:** alcance, responsabilidad, honorarios y cesión de derechos sobre los textos que redacten. ⚖️

### 6.2 Derechos de autor y licencias de contenido

- Los **datos** (una dosis) no están protegidos. La **obra** sí: texto, tablas, selección y organización.
- **Permitido:** verificar contra cualquier libro y citarlo; redactar texto propio; usar fichas técnicas y normas públicas (las normas legales peruanas no están protegidas por derechos de autor ⚖️).
- **Prohibido:** copiar tablas o texto del Harriet Lane, Lexicomp, BNFc, Pediamécum o Peña Camarena. Tampoco se puede reproducir el índice del Peñita tal cual.
- **OMS:** su licencia por defecto (CC BY-NC-SA 3.0 IGO) **prohíbe el uso comercial**. Para las curvas de crecimiento u otros materiales hay que pedir permiso con el formulario de permisos de la OMS. Por eso el crecimiento queda para v2.
- **Guías NICE, AAP y otras de terceros:** se citan; no se reproducen figuras ni tablas. ⚖️ Hay que verificar la licencia de cada una antes de implementar un módulo basado en ella.

### 6.3 Políticas de las tiendas (verificadas el 2026-11-04)

- **Apple 1.4.2:** las calculadoras de dosis deben provenir del fabricante del fármaco, un hospital, una universidad, una aseguradora, una farmacia u otra entidad aprobada, **o tener aprobación de la FDA o de una agencia equivalente**. **Esto bloquea publicar en iOS como una empresa de software cualquiera.**
  - **Opción A [recomendación de Claude]:** lanzar primero en **Android** y, en paralelo, cerrar una **alianza con una universidad o un hospital peruano** que figure como publicador o coeditor en iOS. Esa alianza también funciona como primer cliente B2B y como respaldo académico.
  - Opción B: intentar iOS como empresa con documentación sólida de fuentes y revisión clínica. Alto riesgo de rechazo.
  - Opción C: obtener la autorización de DIGEMID como dispositivo médico (ver §6.4) y presentarla a Apple como "agencia equivalente".
  - **[pendiente: elegir opción]**
- **Apple 1.4.1:** recordar que se debe consultar a un médico; documentar los datos y la metodología. Si la precisión no se puede validar, Apple rechaza la app.
- **Google Play:**
  - Completar la **declaración de apps de salud**, categoría "Apoyo a decisiones clínicas", que incluye explícitamente las calculadoras de dosis.
  - Si la app no es dispositivo médico regulado, poner en la descripción el **aviso de que no es un dispositivo médico** y de que no diagnostica ni trata.
  - Política de privacidad obligatoria.
  - Google no exige cuenta de organización para apps de salud, pero se usará igualmente (§6.1).

### 6.4 DIGEMID: ¿es un dispositivo médico?

- La Ley 29459 incluye el **software** en la definición de dispositivo médico cuando el fabricante lo destina a finalidades médicas. El reglamento (DS 016-2011-SA) trata el software autónomo como dispositivo médico activo.
- Una calculadora de dosis podría entrar en esa definición. DIGEMID está actualizando su regulación de dispositivos (Perú se unió al IMDRF).
- **Acción:** hacer una **consulta formal a DIGEMID** sobre la clasificación antes del lanzamiento público, con la asesoría de un abogado regulatorio ⚖️.
- El diseño ya cumple buenas prácticas compatibles con la norma IEC 62304 y la gestión de riesgos ISO 14971: trazabilidad, pruebas, control de versiones y registro de incidencias. Así, si se exige registro, el expediente técnico sale de lo que ya existe.
- Hasta tener respuesta: lanzamiento en **beta cerrada** (prueba cerrada de Google Play con médicos invitados).

### 6.5 Protección de datos personales (Ley 29733 y su reglamento DS 016-2024-JUS, vigente desde marzo de 2025)

- **Principio: no recoger datos de pacientes.** El peso y la edad que se introducen viven solo en memoria y no se guardan junto a ningún identificador.
- Se tratan como datos personales del usuario (médico): identificador publicitario, IP y datos de compra. Los datos de salud son categoría sensible; la app no los recoge.
- Obligaciones:
  - Política de privacidad.
  - Consentimiento para anuncios personalizados (por defecto, anuncios **no personalizados**; en iOS, el aviso ATT de Apple).
  - Contratos con los encargados del tratamiento (anuncios, analítica, pagos).
  - Evaluar si procede inscribir un banco de datos ante la ANPD ⚖️.
- Sin cuentas de usuario en v1. Pro se valida con la compra en la tienda (restaurar compras).

## 7. Arquitectura técnica [decisiones de Claude salvo lo indicado]

### 7.1 Principios (pedidos por el usuario: buenas prácticas, buena arquitectura y seguridad)

- Arquitectura limpia por capas: **dominio (motor de cálculo puro) → aplicación (casos de uso) → infraestructura (BD, red, anuncios, pagos) → interfaz**. El dominio no depende de nada externo.
- El **motor de cálculo** es un paquete aislado, determinista y con cobertura de pruebas del 100 %, incluidas pruebas basadas en propiedades: los mL nunca son negativos y la dosis nunca supera el máximo.
- **El contenido clínico es un dato, no código.** Se versiona, se valida, se firma y se distribuye aparte de la app.

### 7.2 Stack

- **App:** React Native + **Expo** (TypeScript estricto), con un solo código para Android e iOS.
- **BD local:** SQLite (expo-sqlite), con el contenido en un paquete de datos.
- **Pagos:** RevenueCat sobre Google Play Billing y StoreKit.
- **Anuncios:** Google AdMob con el SDK de consentimiento UMP.
- **Reporte de errores:** Sentry, sin datos personales y con el envío de datos desactivado en las pantallas de cálculo.
- **Backend mínimo:** sin servidor de aplicación en v1. Un almacenamiento estático o CDN (p. ej. Cloudflare R2) aloja los paquetes de contenido firmados y el manifiesto de versiones y retiros. Los reportes de error clínico se envían a un endpoint simple (función serverless) con limitación de frecuencia.
- **Monorepo:**
  - `apps/mobile`
  - `packages/dose-engine` (motor de cálculo)
  - `packages/content-schema` (esquemas con validación, p. ej. zod)
  - `content/` (fichas en YAML, una por fármaco, revisadas por pull request)
  - `tools/content-build` (valida, ejecuta los casos clínicos, compila a SQLite y firma)

### 7.3 Flujo del contenido clínico

1. El redactor crea o edita la ficha YAML (texto propio, con fuentes).
2. La validación automática comprueba el esquema, que haya 2 fuentes o más, los campos de revisión completos, unidades válidas y concentraciones coherentes.
3. **Se ejecutan los casos clínicos de prueba:** cualquier fallo bloquea la publicación.
4. La aprobación de **2 revisores clínicos** queda registrada en el pull request.
5. Se compila el paquete SQLite y se **firma con Ed25519**. La clave privada vive fuera del repositorio.
6. La app descarga el paquete, **verifica la firma** y aplica la actualización de forma atómica. Si falla, mantiene la versión anterior.
7. Se **incluye un paquete base dentro de la app**, para que funcione sin conexión desde la primera apertura.

### 7.4 Retiro de seguridad

El manifiesto firmado puede marcar una ficha como "retirada". La app la oculta y muestra un aviso en el siguiente arranque con conexión, sin esperar una nueva versión en la tienda.

### 7.5 Seguridad (objetivo: OWASP MASVS nivel 1, con controles L2 donde aplique)

- Ningún secreto en la app. Las claves de terceros llevan restricciones por paquete o bundle.
- Solo HTTPS (TLS 1.2+). El contenido se verifica por firma, no solo por el transporte.
- Integridad del paquete de contenido (firma más hash) y de la app (Play Integrity / App Attest para el endpoint de reportes).
- Mínimos permisos: sin cámara, ubicación ni contactos.
- Dependencias fijadas, escaneo automático de vulnerabilidades (Dependabot o Renovate más auditoría), análisis estático y lint estricto en CI.
- Sin registros con datos sensibles. Sentry con limpieza de datos.
- Builds reproducibles con EAS. Firma de la app con claves gestionadas y copia de seguridad documentada.

### 7.6 Calidad y CI

- TypeScript `strict`, ESLint y Prettier.
- Pruebas unitarias (Jest) en el motor y los casos de uso; pruebas de componentes; E2E (Maestro) en los flujos críticos: buscar → peso → resultado, y urgencias.
- CI (GitHub Actions) en cada PR: lint, tipos, pruebas, validación de contenido y casos clínicos.
- Accesibilidad: tamaños de texto dinámicos, contraste AA, botones grandes en urgencias y soporte para lector de pantalla.
- Rendimiento: resultado en menos de 1 s y arranque en frío en menos de 2 s en un Android de gama baja (equipos típicos en Perú).

## 8. Pantallas v1 (resumen)

1. **Inicio:** buscador, accesos a "Urgencias", "Calculadoras" y "Por diagnóstico".
2. **Ficha del fármaco:** indicaciones, entrada de peso (y edad), selector de presentación → resultado con pasos, tope, mL, fuente y avisos.
3. **Urgencias:** se introduce el peso una vez y aparece la lista de todas las dosis de reanimación y el equipo.
4. **Calculadoras:** líquidos, deshidratación y superficie corporal.
5. **Por diagnóstico:** diagnóstico → fármacos sugeridos → ficha.
6. **Ajustes:** Pro, tema, fuentes y metodología, responsable clínico, novedades del contenido, términos y privacidad, reportar error.
7. **Primera apertura:** autodeclaración de profesional de salud, aviso clínico y consentimiento de anuncios.

## 9. Hoja de ruta propuesta

- **Fase 0 (en paralelo al código):** constituir la empresa, buscar un pediatra responsable, consultar a DIGEMID, contactar a una universidad u hospital para la alianza de iOS.
- **Fase 1:** motor de cálculo, esquema de contenido y pipeline (sin interfaz), más **10 fármacos piloto** con revisión completa.
- **Fase 2:** app Android con formulario, urgencias, calculadoras, sin conexión y actualización de contenido → beta cerrada con médicos.
- **Fase 3:** completar 80–120 fármacos, anuncios, Pro, lanzamiento en Play Store.
- **Fase 4:** iOS (según §6.3), B2B y v2 médico.

## 9b. Reglas clínicas y técnicas adicionales [decisiones de Claude, a firmar por el responsable clínico]

1. **Rangos de dosis:** si la fuente da un rango (p. ej. 10–15 mg/kg/dosis), la app muestra **el rango completo en mg y en mL**. Si el revisor definió una "dosis habitual", aparece preseleccionada. El médico puede elegir otro valor dentro del rango, nunca fuera. El tope máximo se aplica al valor elegido y al extremo superior.
2. **Comprobación de peso según la edad:** se usan límites amplios de plausibilidad derivados de las tablas **CDC** (dominio público), no de la OMS. Si el peso queda fuera, la app **advierte y pide confirmar; nunca bloquea**.
   - En v1 se dosifica con el peso real.
   - Cada fármaco puede llevar la marca "en obesidad usar peso ideal o ajustado según la fuente", que se muestra como aviso. El cálculo con peso ajustado queda para v2.
3. **Edad mínima en v1: 1 mes (29 días).** Para menores de esa edad o prematuros, la app no calcula y muestra "Dosis neonatales: próximamente; consulte una referencia neonatal". El modelo de datos ya reserva campos para la edad gestacional y la edad posnatal (v2).
4. **Urgencias sin peso conocido:** se permite introducir la edad y estimar el peso con una fórmula por edad (APLS actualizada), marcada siempre como **"PESO ESTIMADO"**. El responsable clínico debe aprobar la fórmula antes de publicarla.
5. **Ficha con revisión vencida:** se sigue mostrando, con una banda de aviso "Revisión vencida el …". Solo se oculta por retiro explícito (§7.4). Si el contenido del dispositivo lleva más de 12 meses sin actualizarse, la app avisa al abrir.
6. **Redondeo:**
   - El paso medible (0,1 mL, ½ tableta, etc.) se define **por presentación en el contenido**.
   - El motor **nunca redondea por encima del tope**: cerca del máximo, redondea hacia abajo.
   - Error de redondeo máximo: **±5 %**. Si se supera, se muestra el valor exacto y una nota.
7. **Índice por diagnóstico:** pasa por el mismo flujo de revisión que los fármacos (2 revisores y fuentes). Muestra **opciones con su fuente**, nunca una única recomendación de tratamiento.
8. **B2B en v1:** no se construye. Se deja preparado para activarlo más adelante con **códigos de canje** (códigos de oferta de las tiendas o promocionales de RevenueCat), sin servidor ni inicio de sesión.
9. **Documentación regulatoria desde la Fase 1, en versión ligera:**
   - Registro de riesgos (estilo ISO 14971) en el repositorio.
   - Trazabilidad requisito → prueba.
   - Registro de cambios clínicos.
     Los documentos formales completos (IEC 62304) solo se redactan si DIGEMID exige registro.

## 10. Lo que queda a criterio del constructor

- Diseño visual detallado, nombre de componentes, librerías menores de interfaz y navegación.
- Proveedor exacto de CDN o serverless, siempre que cumpla §7.
- Formato exacto del YAML de contenido, siempre que cumpla §4.3 y §7.3.

## 11. Pendientes del usuario

1. ~~Estrategia de iOS~~ → resuelto en §0: Android primero; iOS aplazado.
2. ~~Responsable clínico~~ → resuelto en §0: el médico general como validador en v1.
3. Lista de los 30–40 fármacos de v1, junto con el médico tester. Puede hacerse durante la Fase 1; se empieza con 10.
4. Nombre comercial (antes de publicar).
5. ~~Equipo~~ → resuelto en §0. Plazos: a definir en el plan.

## Fuentes consultadas

- Apple App Store Review Guidelines 1.4.1, 1.4.2 y 5.1.1(ix): https://developer.apple.com/app-store/review/guidelines/
- Google Play, política de contenido y servicios de salud: https://support.google.com/googleplay/android-developer/answer/16679511 · Declaración de apps de salud: https://support.google.com/googleplay/android-developer/answer/14738291
- Derechos de autor y permisos de la OMS: https://www.who.int/about/policies/publishing/copyright
- DS 016-2024-JUS (reglamento de la Ley 29733): https://www.gob.pe/institucion/anpd/normas-legales/6554453-16-2024-jus
- Software como dispositivo médico en Perú (Ley 29459, DS 016-2011-SA): https://www.macrogestion.com.pe/digemid/registro-sanitario-dispositivos-medicos/ · Revista DIGEMID 2024: https://www.digemid.minsa.gob.pe/revista/index.php/rcprf/article/download/26/9/498
- Pediamécum (AEP): https://www.analesdepediatria.org/en-download-pdf-S1695403314001015
- Harriet Lane 23ª ed.: https://www.uk.elsevierhealth.com/the-harriet-lane-handbook-9780323878043.html
- DosisPedia: https://apps.apple.com/mx/app/dosispedia/id964910141 · Pediatrum: https://play.google.com/store/apps/details?id=com.blastoapps.pediatrum
- Precios de referencia WeMeds/Whitebook: https://apps.apple.com/us/app/id1446915058 · https://www.contxto.com/en/brazil/brazilian-pebmeds-apps-encyclopedia-doctors/
- Libro de referencia analizado: Peña Camarena H., _Dosificación de medicamentos en pediatría_ (bibliografía, págs. 175–178).
