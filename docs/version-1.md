# Versión 1.0 — estado y pasos para publicar

## Qué incluye

- **146 fichas verificadas.** Fuente principal peruana (FNME de DIGEMID, PNUME y normas del MINSA), contrastada con FDA, AEMPS, OMS, GINA 2025 y otras guías. Las diferencias se muestran por país. Cada ficha tiene interacciones, contraindicaciones, advertencias y, si sus fuentes lo dan, ajuste renal (en 10 fichas, por tramos de TFG).
- **Cálculo por peso y edad** con topes por toma y por día, redondeo a lo medible y cálculo paso a paso. Incluye bandas de peso, dosis de urgencia repetibles, dosis únicas, reglas neonatales, unidades mEq y UI, e infusiones en mL/h con goteo en gotas/min.
- **Presentación habitual** por fármaco, favoritos y recientes.
- **Urgencias:** hoja de rescate por peso.
- **Cálculos:**
  - líquidos (Holliday-Segar), deshidratación (GPC EDA MINSA), superficie corporal y dosis libre;
  - crecimiento OMS (NTS 238), desarrollo (NTS 238) y vacunas (NTS 246);
  - corticoides inhalados (GINA 2025) y presión arterial (AAP 2017);
  - función renal (Schwartz y KDIGO);
  - Glasgow pediátrico;
  - neonatos: Apgar, Silverman-Andersen, Capurro, Ballard y bilirrubina (AAP 2022).
- **Ilustraciones:** Capurro y Silverman-Andersen completos. En Ballard: postura, ventana cuadrada, rebote del brazo y ángulo poplíteo.
- **Contenido firmado:** si el paquete se altera, la app no muestra dosis. La versión final usa `keys/release.key`.
- **Simulación del médico:** 4902 de 4902 casos coinciden con el cálculo manual. Pruebas automáticas: 215 del núcleo y 297 de la app.

## Pendiente que no bloquea la primera versión

- Ilustraciones de la bufanda y del talón-oreja (Ballard): Flow bloqueó la generación; el criterio funciona con texto.
- Surfactante pulmonar (falta la vía intratraqueal).
- Lo que solo puede cerrar un médico (lista de abajo) y las marcas en el registro de DIGEMID.

## Antes de entregar el APK

1. **Generar el contenido final:** `npm run app:content:release`. Usa `keys/release.key`; `npm run app:content` usa la clave de desarrollo.
2. **Respaldar `keys/release.key`** fuera del repositorio. Si se pierde, una actualización futura del contenido no podrá firmarse con la misma clave.
3. **Revisión médica** de los puntos pendientes:
   - Dosis de metamizol frente al libro de Peña.
   - Método de la cetirizina.
   - Tope de 3 g de la cefalexina.
   - Tope de 80 mg/día de la prednisona.
   - Ampicilina neonatal: la OMS y el FNME no coinciden y la app no la calcula.
   - Albendazol desde el año de edad.
   - Intervalo usado en las pautas «cada 4 a 6 h».
4. **Confirmar presentaciones y marcas** en el registro de DIGEMID.
5. **Fabricar el APK** (ver abajo).

## Fabricar el APK

Se compila en esta PC, sin servicios en la nube ni costo, desde la copia de trabajo de ruta corta `C:\mdp`. La ruta corta evita el límite de 260 caracteres de Windows sin activar las rutas largas.

1. Poner `C:\mdp` al día: `git pull --ff-only origin main` y `npm ci`.
2. Generar el proyecto Android con una carpeta corta para el código C++: `MEDAPP_CXX_DIR=C:/x npx expo prebuild --platform android --clean` (en `apps/mobile`). El plugin `plugins/withShortCxxDir.js` mueve `android/app/.cxx` a `C:/x`; sin eso, el código de gesture-handler supera los 260 caracteres de ruta.
3. Compilar: `gradlew.bat assembleRelease -PreactNativeArchitectures=arm64-v8a,armeabi-v7a` (en `apps/mobile/android`). Tarda unos 15 minutos la primera vez.
4. El APK queda en `apps/mobile/android/app/build/outputs/apk/release/app-release.apk`.

El APK de prueba se firma con la clave de depuración estándar de Expo; sirve para instalarlo a mano. Para Play Store hace falta la clave de subida (ver abajo).

## Para Play Store (más adelante)

- Cuenta de desarrollador de Google Play: US$25, pago único.
- Publicar `docs/privacidad.md` en una URL pública; Play Store la pide.
- Fichas en estado «validado», con revisión del médico: `review.status: validado` y `reviewers`.
- Paquete AAB firmado con la clave de subida de Play.
