---
id: S-001
title: timelens-victorian-yerba-buena
status: in-progress
priority: high
---

## Story

TimeLens is a mobile, location-based historical walking-tour app for San Francisco.
It guides users through the streets where events happened 100+ years ago, telling each
spot's story through audio + video + text + historic imagery, driven by geolocation —
"a little digital tour guide in your pocket."

This story delivers the first vertical slice: a **Victorian-newspaper** visual language
and a fully designed + coded **Yerba Buena Cove** experience showing 5 historical periods,
each with 5 dated events and adjacent side-stories, using progressive disclosure.

## Goals

- Research-backed UX (engagement, geolocation media, progressive disclosure) + UI
  (Victorian newspaper aesthetic, "living image" motion) recommendations.
- A reusable, WCAG 2.2 AA design system in Figma (`PzEPUP1Bv0amoNA3ufvfut`).
- The Yerba Buena page built in BOTH Figma and the React/Vite app, wired to real data
  (`src/data/yerbaBuena.json`) and the JIMMY PIX historic imagery.
- WCAG QA pass + one improvement round.

## Content model (source of truth)

`src/data/yerbaBuena.json` — Location 4 (Yerba Buena Cove, 1833–2027) →
5 Periods → 25 dated Events → image lists + side-stories.

## Constraints

- Mobile-first, app shell max-width 430px.
- "Living image" = CSS Ken Burns / parallax on stills this round (no real video gen).
- WCAG 2.2 AA: contrast, touch targets, prefers-reduced-motion, media controls.
- Aesthetic direction TBD after research (3 directions presented for selection).
