# Product

<!-- impeccable:product-schema 1 -->

## Platform

android

## Users

Physicians in Peru (Lima first): general practitioners and doctors who see children, in emergency rooms and in clinic consultations. They often have a child in front of them, are under time pressure, and use the app on their own phone in any light. A general practitioner gives requirements and tests the app.

## Product Purpose

Calculate pediatric drug doses from the patient's weight and age. The app gives mg, the volume to give (mL, drops, tablets or puffs), the frequency and the caps, and shows the verified source behind every number. Success means the right, measurable dose in a few taps, with no doubt about where the number comes from.

## Positioning

Peru-first sources: DIGEMID's FNME and MINSA norms, contrasted with FDA, AEMPS, WHO and GINA, with country differences shown on the card. The content is signed: a tampered bundle shows no doses. An independent hand-calculation simulation checks every rule.

## Operating Context

- Emergency: rescue doses for a weight, repeated within minutes, read quickly.
- Consultation: pick an indication and a presentation available in Peru, then share the prescription line.
- Patient data (weight, age) is entered once and reused across drugs during a session.
- Reference apps the users already know: Pediatrum, DosisPedia, El Peñita.

## Capabilities and Constraints

- 108 verified drug cards across 14 categories (emergencies, neonatal rules, anticonvulsants, hospital antibiotics, cardiovascular), plus neonatal scores (Apgar, Silverman-Andersen, Capurro).
- Continuous infusions: doses in mcg/kg/min or mg/kg/h give the pump rate in mL/h for the chosen or a custom mixture (norepinephrine, dobutamine, epinephrine, midazolam).
- Tools: manual calculator, fluids (Holliday-Segar), dehydration plans, body surface area.
- Favorites, light and dark themes, choice of decimal separator.
- Expo (React Native) app, Android first. Offline: no accounts, no servers.
- Patient data lives in memory only and is never stored.
- The user wants zero running costs.

## Brand Commitments

- Name: «Dosis Pediátricas». Mark: «Rp/» (the prescription sign).
- Spanish (Peru); clinical but not formal.
- The user named Pediatrum as the quality reference.
- The user rejects interfaces that look generic or AI-made, or plain and grey, or that waste space or read poorly.

## Evidence on Hand

- Verified sources table: docs/validacion/fuentes-verificadas.md.
- Simulation: docs/validacion/simulacion-medico.md, 2059 of 2059 cases match.
- No testimonials, user counts or endorsements exist; do not invent any.

## Product Principles

1. The dose is the hero: the volume to give is readable at arm's length.
2. Every number shows where it comes from, without slowing down the reading.
3. Few taps: the patient is entered once and the right indication is chosen automatically.
4. When sources disagree, or a dose is not verified, the app does not calculate and says why.

## Accessibility & Inclusion

Readable in bright light and at night, in a hurry. Touch targets of at least 48 dp. Text contrast meets WCAG AA in both themes.
