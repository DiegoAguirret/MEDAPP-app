# Versión 1.0 — estado y pasos para publicar

## Qué incluye

- **52 fichas verificadas.** Fuente principal peruana (FNME de DIGEMID y normas del MINSA), contrastada con FDA, AEMPS, OMS, GINA 2025 y el libro de Peña Camarena. Las diferencias se muestran por país.
- **Cálculo por peso y edad** con topes por toma y por día, redondeo a lo medible y cálculo paso a paso.
- **Bandas de peso** por indicación, **dosis de urgencia** repetibles en minutos, **dosis únicas** de carga y **primeras reglas neonatales**.
- **Paciente actual** compartido entre fichas, guardado solo en memoria. La app elige sola la indicación que corresponde.
- **Pestañas:** Dosis, Urgencias (hoja por peso), Cálculos (líquidos, deshidratación, superficie corporal, calculadora manual), Favoritos y Ajustes.
- **Contenido firmado:** si el paquete se altera, la app no muestra dosis. La versión final usa su propia clave (`keys/release.key`).
- **Simulación del médico:** 2059 de 2059 casos coinciden con el cálculo manual. Pruebas automáticas: 181 del núcleo y 112 de la app.

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

En Windows la compilación local falla por el límite de 260 caracteres en las rutas. Opciones, todas sin costo:

- **GitHub Actions, ejecución manual.** Un workflow que se lanza a mano una sola vez. Usa unos 20 minutos de los incluidos en GitHub Pro, y el presupuesto de $0 impide cualquier cobro.
- **EAS Build (Expo), plan gratuito.** Necesita una cuenta de Expo.
- **Compilación local.** Requiere activar las rutas largas de Windows (cambio de sistema, con permisos de administrador).

## Para Play Store (más adelante)

- Cuenta de desarrollador de Google Play: US$25, pago único.
- Publicar `docs/privacidad.md` en una URL pública; Play Store la pide.
- Fichas en estado «validado», con revisión del médico: `review.status: validado` y `reviewers`.
- Paquete AAB firmado con la clave de subida de Play.
