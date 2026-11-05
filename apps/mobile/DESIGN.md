# Design — Dosis Pediátricas

## World: «Cinta de colores por peso»

The patient's weight falls in one of the color bands of pediatric resuscitation tapes (Broselow–Luten zones; the 2011 ranges are listed on WikEM). That band colors the patient header across the whole app. The doctor always sees whose doses are on screen. Outside 3–36 kg there is no band, and the header turns neutral.

| Band     | kg    | Fill              | Text on top |
| -------- | ----- | ----------------- | ----------- |
| Gris     | 3–5   | #A3A9B1           | ink         |
| Rosado   | 6–7   | #F2A7BC           | ink         |
| Rojo     | 8–9   | #D3302F           | white       |
| Morado   | 10–11 | #7B4FA0           | white       |
| Amarillo | 12–14 | #F6C343           | ink         |
| Blanco   | 15–18 | #F4F4F2 + outline | ink         |
| Azul     | 19–23 | #1E6FD1           | white       |
| Naranja  | 24–29 | #F2882B           | ink         |
| Verde    | 30–36 | #2E9E5B           | white       |

## Color strategy

Committed. The band color owns the patient header and the tape strip. Everything else is a clean neutral ground: white surfaces on #F4F5F7, ink #1B2430, muted #5B6472. Primary actions use the brand blue #1F5FAD. Categories use their own icon hues, as tinted chips only. Danger #C62828 and warning #B26A00 appear only where they mean something. The dark theme is first-class: ground #0E1116, surfaces #171B22, ink #F2F4F7. Band fills stay the same in dark.

## Type

Roboto, the Android system face, loaded for web parity.

| Role        | Size and weight |
| ----------- | --------------- |
| Dose figure | 40/900          |
| Headline    | 26/800          |
| Title       | 17/700          |
| Body        | 15/400          |
| Label       | 13/500          |
| Caption     | 12/400          |

Every figure uses tabular-nums. Weights carry the hierarchy; there is no second family.

## Shape, density, elevation

- Radius: 14 on cards, 10 on controls, 999 on chips.
- 16 dp margins and 8 dp gaps. Rows run 52–60 dp, with 48 dp minimum touch targets.
- Cards are white on the grey ground with a hairline border. No resting shadows, only tonal surfaces.

## Icons

MaterialCommunityIcons in outline style, 22 dp, each on a 36 dp category-tinted chip in category rows. Navigation icons are 24 dp.

## Motion

React Native Animated (ui/motion.tsx), with every move honoring the system Reduce motion setting.

- **Pressables:** scale to 0.97, spring back.
- **Header band:** its color crossfades in 220 ms when the band changes.
- **Dose figures:** re-enter (fade and 6 dp rise, 180 ms) when the value changes.
- **Sections:** expanding sections use a layout transition.

## Signature move

The band header. Patient band → weight and age → «Nuevo paciente». It sits on Dosis, on every drug card, and on Urgencias, where the rescue list is titled with the band (for example, «Franja amarilla · 14 kg»).

## Guides

Inline coach marks (ui/Tip.tsx) explain what isn't obvious: the band color, the auto-picked indication, presentations that scroll sideways, the result block, and the Urgencias sheet. Each screen shows one at a time, in the order the screen is used. Each guide has «Entendido» and «Omitir guía» (which turns all of them off), and Ajustes has «Volver a ver las guías». Every guide shows once, and only the ids of the ones seen are stored. The bubble is inverted (tip #1B2430 light, #2D3542 dark), with the tape-yellow bulb and a pointer toward what it explains. It fades and rises in over 220 ms unless Reduce motion is on. The copy describes the app and never gives clinical advice.
