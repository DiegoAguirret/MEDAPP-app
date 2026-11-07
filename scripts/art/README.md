# Ilustraciones de las escalas neonatales

Las imágenes de `apps/mobile/assets/art/` se generaron con Google Flow (Nano Banana 2.1) en el estilo de
ilustración médica pintada, y cada una se revisó contra el texto de su opción antes de incluirla.

- `process.py`: recorta a 3:2 (centro y acercamiento opcionales en `crop.json`), reduce a 720 × 480 y guarda WebP.
- `gen_photos.py`: escribe `apps/mobile/src/ui/art/photos.ts` a partir de los WebP.
  Nombre: `escala-criterio-índice.webp`; `-all` es una sola imagen para todas las opciones, con marcas
  vectoriales en `OVERLAYS` (`neonatalArt.tsx`).

Las rutas de los scripts apuntan a la carpeta de trabajo local donde se descargaron los originales.
