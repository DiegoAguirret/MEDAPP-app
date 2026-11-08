# Design — Dosis Pediátricas

## World: «Cinta de colores por peso» on clinical cyan

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

Clinical cyan, chosen with the ui-ux-pro-max design system for healthcare tools (calm cyan plus health green). The band color still owns the patient header and the tape strip. The ground is a cool tinted #F1F6F8 with white bento cards (border #DCE7EC), ink #0F2A36 and muted #4A6070. Actions use cyan #0E7490 (white text passes 4.5:1); verified and route chips use green #047857. The brand surface #0B5A70 carries the home's main card and the dose summary on the drug card. Categories keep their own hues. Danger #C62828 and warning #9A5B00 appear only where they mean something. The dark theme is first-class: ground #0B1418, surfaces #12212A, ink #EAF4F7, accent #5ED0E8. Band fills stay the same in dark.

## Type

Figtree (Google Fonts, @expo-google-fonts/figtree), a modern geometric sans with clear figures. Each weight is its own family on Android: 400, 500, 700 and 800.

| Role        | Size and weight |
| ----------- | --------------- |
| Dose figure | 42/800          |
| Headline    | 26/800          |
| Title       | 17/700          |
| Body        | 15/400          |
| Label       | 13/500          |
| Caption     | 12/400          |

Every figure uses tabular-nums. Weights carry the hierarchy; there is no second family.

## Shape, density, elevation

- Bento: cards at radius 20, controls at 14, chips and buttons as pills.
- 16 dp margins and 10 dp gaps in grids. Rows run 56 dp, with 48 dp minimum touch targets.
- Cards are white on the tinted ground with a 1 dp border. No resting shadows, only tonal surfaces.

## Icons

MaterialCommunityIcons in outline style, 22 dp, each on a 36 dp category-tinted chip in category rows. Navigation icons are 24 dp.

## Motion

React Native Animated (ui/motion.tsx), with every move honoring the system Reduce motion setting.

- **Pressables:** scale to 0.97, spring back.
- **Header band:** its color crossfades in 220 ms when the band changes.
- **Dose figures:** re-enter (fade and 6 dp rise, 180 ms) when the value changes.
- **Sections:** expanding sections use a layout transition.
- **Home entrance:** category tiles enter once, staggered by 32 ms (fade from 35 % and a 10 dp rise, 280 ms).
- **Tape:** the patient's zone widens and lights up in 260 ms as the weight changes.

## Home

Patient first, then search, then «¿Qué necesitas?»: every function of the app explained in one place.

- **Patient:** «¿Para quién es la dosis?» shows the tape, which marks the zone while the weight is typed. With a complete patient, it turns into the band header.
- **Search:** a pill field. Results come with a count; a search with no results offers «Abrir cálculo manual».
- **¿Qué necesitas?:** a bento hub. The main card (brand surface) is «Dosis por fármaco» with the drug count, what the app gives (mg and volume for the weight, frequency, cap, source) and «Ver todos de la A a la Z». Below, two-column tool cards, each with a solid hue icon chip, a title and one line on what it does: Urgencias, Infusiones (count), Neonatología (count), Crecimiento, Líquidos y superficie, Cálculo manual, Favoritos.
- **Crecimiento:** sex chips, age in years/months/days, measures (with «¿Cómo se midió?» under 5 years). One card per indicator: big z-score, percentile, NTS badge in the tone of its class, and a −4 to +4 SD bar with the patient's marker. No growth charts: the app is for quick lookup, not trend analysis.
- **Neonatal scores:** one criterion at a time; each option is a card with a painted medical illustration (3:2, warm peach skin, soft shading, like an atlas) and the points badge over the image. Capurro and Silverman-Andersen have one image per option; where only a size, movement or sound changes, one image carries vector marks on top (gland circles with mm, chest/abdomen arrows, grunt waves) in the app cyan on white pills. Images come from Google Flow and are checked against the option text before shipping (`scripts/art/`). Apgar has no images.
- **Collections:** Infusiones and Neonatología open lists built from the rules (continuous or neonatal), never by hand. Neonatología adds Apgar, Silverman-Andersen and Capurro as pill shortcuts above the list.
- **Recientes:** chips of the last 8 drug cards opened (ids only).
- **Por categoría:** one card listing every category with its icon, name and count.
- The navigation bar keeps Dosis, Urgencias, Cálculos, Favoritos and Ajustes; its active tab gets an accent-soft pill that widens in over 220 ms.

## Drug card (guided)

- **Dose summary:** as soon as there is a result, a brand-surface strip under the patient shows «Rp/», the volume and the mg with the schedule, so the dose is visible without scrolling; the full result stays below.
- **Indication:** the card shows the mg/kg range as an accent pill plus the schedule. «1 de N · Cambiar» opens a bottom sheet (ui/Sheet.tsx: scrim, handle, title, count, X) listing every option with its range. The chosen option has a 2 px accent border and a check, and options that don't fit read «No aplica a este paciente».
- **Note:** the indication note sits under it, clamped to 2 lines, with «Ver más».
- **Missing data:** fields still needed get a warning border, and the patient card header says what is missing («Faltan peso y edad»).
- **«i» button:** in the header, it opens «Cómo usar esta ficha» (the four steps, this card's sources, «Repetir la guía»).
- **Drug rows:** each row carries its routes as small green chips (Oral, IV, IM, Inhalado, Rectal).
- **Guides:** they say «Siguiente →» while more remain and «Entendido» on the last.

## Signature move

The band header. Patient band → weight and age → «Nuevo paciente». It sits on Dosis, on every drug card, and on Urgencias, where the rescue list is titled with the band (for example, «Franja amarilla · 14 kg»).

## Guides

Inline coach marks (ui/Tip.tsx) explain what isn't obvious: the band color, the auto-picked indication, presentations that scroll sideways, the result block, and the Urgencias sheet. Each screen shows one at a time, in the order the screen is used. Each guide has «Entendido» and «Omitir guía» (which turns all of them off), and Ajustes has «Volver a ver las guías». Every guide shows once, and only the ids of the ones seen are stored. The bubble is inverted (tip #1B2430 light, #2D3542 dark), with the tape-yellow bulb and a pointer toward what it explains. It fades and rises in over 220 ms unless Reduce motion is on. The copy describes the app and never gives clinical advice.
