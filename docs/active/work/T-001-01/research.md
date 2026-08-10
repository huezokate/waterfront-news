# T-001-01 — Research: TimeLens UX + Victorian-Newspaper UI + WCAG

Consolidated from three parallel research streams. Descriptive, not prescriptive.
Full source URLs preserved in the three appendices below.

## A. UX & Engagement (location-based walking-tour apps)

**The spine of the category is audio-first, screen-second.** The best apps (VoiceMap,
Detour, Clio, Action Tour Guide) let users pocket the phone and experience the *place*.

- **Hands-free GPS auto-play** of narration on arrival, auto-pausing when the user stops,
  is the single highest-leverage engagement mechanic (VoiceMap, Action Tour Guide).
- **Narrative over facts** — Detour built "storytellers, not guides"; the experience moves
  with the walker like a game. Don't recite dates; tell a journey.
- **"Look up" / arrival moments** — content triggered precisely on arrival makes the user
  lift their eyes to the real thing. This is TimeLens's core magic: "this happened *here*."
- **Split media by motion state:** audio while walking; video, then/now sliders, long text
  only when stationary or behind an explicit tap. **Never auto-play video** (safety).
- **Progressive disclosure** maps cleanly to our hierarchy:
  - Location → map + nearby summary cards
  - 5 Periods → horizontal **timeline / chapter rail**
  - 5 Events/period → **expandable chapter list**
  - Side-stories/anecdotes → **single bottom sheet** (peek → expand, explicit close;
    never stack sheets, never lose the user's place — NN/g).
- **Anti-lost:** persistent breadcrumb (Location › Period › Event) + persistent mini
  audio player (audiobook/podcast chapter mental model).
- **Wayfinding (blend three modes):** ambient "you're near X" (free roam), proximity
  turn-by-turn (structured tours), browsable pin map (always-available fallback).
- **Then/now:** default to a JuxtaposeJS-style draggable slider (universal, cheap, safe);
  reserve raise-your-phone camera-AR (Pivot-style) for a few hero SF locations.
- **Onboarding:** value-first permission priming *before* the OS prompt; request
  "When In Use"; degrade gracefully to manual map on denial; defer camera/mic perms.
- **Offline + battery:** downloadable per-Location bundles (audio+images+tiles);
  screen-off audio default; geofence APIs over polling.
- **Light engagement loops:** visited-stops, period completion, a personal "collection"
  of unlocked stories (Smartify/Audiala). Editorial consistency is the retention moat.

## B. Victorian-Newspaper UI + "Living Image" motion

**Borrow the typographic vocabulary, not the literal broadsheet artifact.** Avoid cheesy
skeuomorph (torn paper, coffee stains, shrunk 8-column grid). Collapse to ONE editorial
column; reintroduce multi-column rhythm only as accents.

Print element → mobile translation:
- **Masthead/nameplate** → blackletter or fat-face display title + thin double-rule.
- **Hairline & double rules** → section dividers/card edges (reads "newspaper" more than
  any texture).
- **Drop cap** → `::first-letter` float, ~3.4em, display face.
- **Dateline** → small-caps, letter-spaced lead: `SAN FRANCISCO, APRIL 18, 1906 —`.
- **Dingbats/fleurons** (❦ ❧ ⁂ ☞) → section breaks, end marks, the manicule as a real
  "read more" pointer.
- **Halftone dots / engraving** → image treatment only (CSS radial-gradient + blend mode).
- **Aged paper** → faint SVG noise over cream, NOT a photo scan.

**"Living image" (mocking motion on stills this round) — stackable CSS recipes:**
- A. **Ken Burns** slow pan/zoom (subtle 1.0→1.12, `alternate`, transform-only/GPU).
- B. **Animated film grain** (300% PNG, `translate` + `steps(10)`, opacity .12, multiply).
- C. **Sepia → color reveal** on scroll-into-view (`filter: sepia(.85)` → `sepia(0)`) — the
  signature "the past regains color as you arrive" effect; near-zero cost.
- E. **Micro gaslight flicker** (opacity .93–1.0, tiny). F. **Parallax** depth on scroll.
- Combine A+B+C+E on one `<figure>` = a living daguerreotype. **All wrapped in
  `prefers-reduced-motion: reduce` → static colorized still.**

**Components:** Period masthead card · Event "article" block (dateline + drop cap +
asterism end) · Era scrubber styled as a **printer's rule** with tick marks + one vermilion
active tick · Living-image hero with newspaper cutline · "Column inch" side-story snippets
with manicule · Phonograph/radio audio player with hairline "stylus" that animates on play.

## C. WCAG 2.2 AA (high-risk aesthetic: texture + decorative type + motion)

- **Contrast:** 4.5:1 body, 3:1 large (≥24px reg / ≥18.66px bold) & UI/graphics.
- **Texture trap:** test the **darkest pixel** glyphs overlap; guarantee a **solid color
  floor** behind every text run; keep texture/halftone/blend-modes **off running text**
  (confine to images, margins, chrome). Scrim ≥85% if text must overlay.
- **Touch targets:** adopt **48×48px** for primary controls; ≥8px spacing; map pins cluster.
- **Type:** body ≥16px (17–18 preferred); decorative/blackletter = **display only**, never
  body; line-height ≥1.5; line length 40–75ch; all-caps only for short labels; rem units;
  reflow at 320px, scale to 200%.
- **Motion:** `prefers-reduced-motion` disables Ken Burns/parallax/flicker; no autoplay >5s
  without pause; no >3 flashes/sec; **never autoplay audio** — tap to start + transcript.
- **Media:** captions (1.2.2), transcripts, ≥48px controls at 3:1; never convey by color
  alone (pair "you are here" with icon/shape/label).

### Verified AA palette tokens (contrast computed, not estimated)

| Token | Hex | On cream #F4ECD8 | Verdict |
|---|---|---|---|
| ink (body) | #1A1A1A | 14.78:1 | ✅ body |
| ink-warm | #1A1611 | 15.29:1 | ✅ body |
| soft-ink | #4A4036 | 8.58:1 | ✅ body |
| ink-sepia | #4A3826 | 9.46:1 | ✅ body |
| vermilion (accent) | #B33A2B | 5.01:1 | ✅ body |
| oxblood | #7A2E22 | 7.96:1 | ✅ body |
| oxblood-deep | #6E1E1E | 9.55:1 | ✅ body |
| indigo (links) | #3B4A6B | 7.50:1 | ✅ body |
| teal (links alt) | #1F5C5C | 6.50:1 | ✅ body |
| steel (meta) | #5C5448 | 6.33:1 | ✅ body |
| gold | #C8A04B | 2.08:1 | ❌ paper — DARK GROUNDS ONLY |

Reversed: cream on ink 14.78:1 ✅ · cream on oxblood 7.96:1 ✅ · cream on vermilion 5.01:1 ✅
· cream on indigo 7.50:1 ✅ · gold on ink 7.12:1 ✅. Papers cream #F4ECD8 / news #F3ECDD give
the most accent headroom; aged #EDE4D3 / #EDE2C8 are slightly tighter (vermilion 4.59–4.68).

**Forbidden:** gold on any paper (~2:1); oxblood on ink (1.60:1). Keep accents on paper or
cream on dark — never accent-on-dark for text.

## Constraints carried into Design
1. One editorial column; texture off body text. 2. One blackletter element + one vermilion
accent per screen max. 3. 48px targets, 16px+ body, prefers-reduced-motion fallback. 4. Gold
is a dark-ground ornament only. 5. Audio never autoplays; video/long-text gated to dwell.

— Appendices: see task-notification transcripts (UX, Victorian-UI, WCAG) for full source URLs.
