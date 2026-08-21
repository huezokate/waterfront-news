# TimeLens — Progress Log

## Session — 2026-08-21 (Story flow + Storybook + the cast)

### Done
- **Storybook 9** (`@storybook/react-vite`) — `npm run storybook`, `npm run build-storybook`.
  The preview decorator mirrors the real app rather than being a neutral canvas: every story
  renders inside `.dx.dx--d` (Direction D theme vars), inside a 430px `.app-shell` frame, inside
  the padded `.dx-page` column. Per-story escapes: `parameters.frame: false` (full window),
  `parameters.column: false` (full-bleed). Fonts load via `.storybook/preview-head.html`.
- **Chapter page reflowed** to: ambient landscape → select the hero → the dispatch in their
  voice → ask them → the date before / the date after → drill down into the history.
- **Pick-a-hero mechanic.** Every chapter is cast with THREE storytellers instead of one guide,
  one each from *office*, *trade* and *the street*, so the choice is a change of vantage rather
  than a change of byline. Choosing rebinds the landscape credit, the opening paragraph of the
  dispatch, the chat and the audio walk. The pick follows the reader down the trail
  (sessionStorage) when the same hero is cast in the next chapter.
- **New cast of 16** in `src/data/heroes.ts` (roster is separate from chapters because heroes
  recur, and because each one becomes exactly one 3D figurine). 27 chapter-specific `lens`
  paragraphs written.
- **Components extracted** to `src/components/night/`, each with stories: `HeroAvatar`,
  `HeroSelect`, `AmbientLandscape`, `PlateCard`, `MasonryGrid`, `TimelineStep`, `DrillDownCard`,
  `SectionHead`, `HeroChat`, and `ChapterView` (the whole page — `pages/NightEvent` is now just a
  route wrapper, so Storybook renders the real page rather than a copy).
- **Figurine seam**: `HeroAvatar` is the only component that draws a face. Drop a render at
  `public/figurines/<id>.png`, set `figurine` on the hero, and it upgrades everywhere at once.
  Brief + priority shot-list in `docs/figurines.md`.
- **Fixes found while building**: the article drop cap was landing on the dateline rather than the
  prose (`p:first-of-type` is the dateline); long hero names blew out the `1fr` select tracks
  (grid items default to `min-width: auto`); and a `100vw` full-bleed built an element far wider
  than the 430px `.app-shell` and got sliced — the landscape now bleeds to the *column*.

### Not built (deliberately)
- No audio walk, historian reaction or making-of film exists yet. Those cards render as
  `pending` — dashed, "not yet recorded", not clickable — rather than faking a working link.
- The historian slot names no historian. Attributing commentary to a real named historian who
  has not recorded any would be a fabrication.
- Figurines themselves: `docs/figurines.md` is the brief, the models are not generated.

### Next
1. Kate reviews on localhost; taste pass on the hero-select and the drill-down cards.
2. Generate the first six figurines (Briones, Davis, Brannan, Vallejo, Geary, Pleasant).
3. Shoot or assemble one real ambient landscape loop to replace the Ken Burns stand-in.
4. Code Connect the new `night/` components to Figma.


## Session — 2026-06-02 (Victorian Broadsheet build)

### Done
- **Research** (3 streams): tour-app UX/engagement, Victorian-newspaper UI + living-image motion,
  WCAG 2.2 AA (contrast-verified palette). Plus a browsing/IA research pass for multi-location.
  Artifacts in `~/docs/active/work/` (lisa story S-001).
- **Design system** "Victorian Broadsheet" (Direction A: blackletter masthead + IM Fell body +
  vermilion accent on newsprint cream), WCAG AA.
- **Yerba Buena page** (`/yerba-buena`): 5 periods → 25 events → side-stories; living-image heroes
  (Ken Burns + grain + sepia→colour), printer's-rule timeline w/ reading-progress, chapter-aware
  audio bar, breadcrumb + "up next".
- **Then/Now slider** (1848 ⇄ 2020 cove), accessible (click/drag/keyboard).
- **Bottom-sheet side-stories** (peek → expand; lorem + plate placeholders).
- **Explore browse home** (`/explore`): featured location, theme chips, location stubs, bottom nav.
- **Deploy**: GitHub Pages auto-deploy → https://huezokate.github.io/waterfront/#/explore
  (historic images downscaled 653MB→51MB).
- **Figma**: assembled mockup (192:2); component library — 7 components + Living Image variant set
  (203:238); **atomic UI Kit** + Chip/Button/Nav Tab variant components (210:239).
- **Token pipeline**: `src/design/tokens.json` source of truth → generated CSS; Figma→tokens sync
  script; `/library` style-guide page renders from tokens. Round-trip proven end-to-end.

### Pick up tomorrow (next steps, roughly prioritised)
1. **Rewire molecules to atoms** — make Period Card / Side-story / Audio Bar consume the new
   Chip/Button/Nav Tab/etc. component instances (true composition, not look-alike frames).
2. **Promote remaining atoms to variant components** — Badge (Featured/Soon/Tag), Timeline Tick
   (Active/Default), Progress Dot (Read/Unread), Audio Play, Close.
3. **Code Connect** — link each Figma component to its React file for round-trip.
4. **Close the token loop both ways** — add a code→Figma writer (use_figma) so `tokens.json`
   changes can push back into Figma variables (currently Figma→code is automated, code→Figma manual).
5. **Second real location** (e.g. Portsmouth Square) so the location-switch/browse flow has 2 walks.
6. **Map + Saved tabs** — currently visual stubs; build the map+bottom-sheet browse view.
7. **Then/Now real present-day photos** (currently 1848 map ⇄ 2020 map).
8. **Bottom sheet drag-to-expand gesture** (currently grip/button toggle).
9. **Real audio/video production** (narration + living-image clips).

### How to resume
- Code: `cd ~/Documents/projects/timelens && npm run dev` → http://localhost:5173/#/explore
- Figma UI Kit: file `PzEPUP1Bv0amoNA3ufvfut`, page "Victorian · UI Kit" (210:239)
- lisa: `lisa status` (home dir) — story S-002 holds tomorrow's tickets.
