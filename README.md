# MEDAPP — Dosis pediátricas (Perú)

Calculadora de dosis pediátricas para médicos: funciona sin conexión, cada dosis muestra su fuente y el cálculo paso a paso.

> **Estado:** versión de prueba. Las 10 fichas están **en borrador** (banda «NO VALIDADO») hasta su validación médica.

## Estructura
| Ruta | Qué es |
|---|---|
| `packages/content-schema` | Esquema validado (zod) de las fichas clínicas |
| `packages/dose-engine` | Motor de cálculo puro: dosis, topes, redondeo, líquidos (100 % de cobertura) |
| `packages/content-bundle` | Paquete de contenido firmado con Ed25519, con protección contra reenvío |
| `tools/content-build` | Valida fichas, ejecuta los casos clínicos y firma el paquete |
| `tools/clinical-sim` | Simulación de médico: cálculo manual independiente frente a la app |
| `content/` | Fuentes (`sources.yaml`) y fichas YAML |
| `apps/mobile` | App Android (Expo SDK 58, React Native 0.88, Expo Router) |
| `docs/validacion` | Fuentes verificadas e informe de simulación |

## Comandos
```bash
npm install
npm test                    # pruebas del núcleo
npm run sim:report          # simulación app vs. cálculo manual
npm run content:build       # paquete de prueba (acepta borradores)
npm run app:content         # copia el paquete a la app
cd apps/mobile && npx jest  # pruebas de la app
```

## APK de prueba
```bash
cd apps/mobile && npx expo prebuild -p android
cd android && ./gradlew assembleRelease
# APK: apps/mobile/android/app/build/outputs/apk/release/app-release.apk
```

## Seguridad clínica
- La versión para Play Store (`npm run content:build:release`) solo compila si **todas** las fichas están validadas por un médico.
- La app no guarda datos de pacientes y no muestra dosis si el contenido no pasa la verificación de firma.
