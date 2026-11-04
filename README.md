# MEDAPP — Dosis pediátricas (Perú)

Monorepo del núcleo clínico de la app.

- `packages/content-schema`: esquema validado de las fichas clínicas.
- `packages/dose-engine`: motor de cálculo puro (dosis, redondeo, líquidos).
- `packages/content-bundle`: paquete de contenido firmado con Ed25519.
- `tools/content-build`: valida las fichas, ejecuta los casos clínicos y firma el paquete.
- `content/`: fuentes y fichas YAML.

Diseño: `docs/superpowers/specs/2026-11-04-dosis-pediatricas-design.md`.

```bash
npm install
npm test
npm run content:build
```
