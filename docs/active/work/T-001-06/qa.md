# T-001-06 — WCAG 2.2 AA QA + Improvement Round

QA of the coded page (`/yerba-buena`) and the Figma frame (page 192:2) against the
research checklist (T-001-01 §C). Verified via computed contrast, code review, and
headless screenshots at 430 / 390 / 320 px.

## Contrast (1.4.3 / 1.4.11) — PASS

Every color comes from the verified token set; no raw colors outside `victorian.css`
`:root` / Figma "Victorian Broadsheet" variables. All text/background pairings used:

| Pairing | Ratio | Result |
|---|---|---|
| ink #1A1A1A on cream #F4ECD8 (body, masthead, titles) | 14.78:1 | ✅ |
| oxblood #7A2E22 on cream (datelines, toggle) | 7.96:1 | ✅ |
| vermilion #B33A2B on cream (kickers, drop cap, ticks) | 5.01:1 | ✅ |
| indigo #3B4A6B on aged #EDE4D3 (side-story link) | 7.00:1 | ✅ |
| ink/soft #4A4036 on aged (side-story body) | 8.01:1 | ✅ |
| meta #5C5448 on cream/news (captions, years) | 6.33:1 | ✅ |
| gold #C8A04B on ink #1A1A1A (audio label, image tags) | 7.12:1 | ✅ |
| cream on ink (audio title) | 14.78:1 | ✅ |

- **Texture trap avoided:** paper grain is a 0.04-opacity SVG on the ground only; all
  running text sits on solid token fills. Halftone/grain confined to `.vb-figure` image
  area via `mix-blend-mode` on overlay layers — never under text.
- **Gold** used only on the dark audio bar / dark image overlay (never on paper — would be 2.08:1).

## Touch targets (2.5.8) — PASS (exceeds AA)

- Timeline ticks: `min-height: 48px`. Period header: full-width, tall. Audio play: 48×48.
- **Fix applied:** side-story "Read the full account" button was 32px → raised to **44px**.

## Typography (1.4.4 / 1.4.10 / 1.4.12) — PASS

- Body `IM Fell English` 17px / line-height 1.6; secondary ≥15px. None below 16 for paragraphs.
- **Blackletter (UnifrakturCook) is display-only** — masthead nameplate, one per screen. Never body.
- **Fix applied (reflow 1.4.10):** `max-width: 42ch` on dek + body could exceed a 320px column →
  changed to `min(42ch, 100%)`; added `overflow-x: hidden` + `overflow-wrap: break-word`;
  made masthead/period display type fluid via `clamp()` so it can't overflow a narrow column.

## Motion (2.3.3 / 2.2.2 / 1.4.2) — PASS

- `@media (prefers-reduced-motion: reduce)` disables Ken Burns, film grain, audio stylus,
  and accordion transition; living image falls back to the static colorized still.
- No auto-playing audio — narration is explicit tap-to-play (button toggles, labeled).
- Grain animates by transform only; no >3 flashes/sec.

## Media / non-text (1.1.1 / 1.4.1) — PASS

- Historic images carry descriptive `alt` (`"{year} — {title}"`).
- **Fix applied:** removed redundant `role="img"` + `aria-label` on the figure that duplicated
  the inner `<img alt>` (double announcement) — image now announced once.
- **Color not sole cue:** active timeline period = vermilion **and** taller tick **and**
  `aria-current`; reading progress = filled dot **and** sr-only "read/unread" text.

## Structure / semantics — PASS

- `<h1>` masthead, `<h2>` period titles; `<article>`, `<figure>`, `<aside>`, `<nav>` landmarks.
- Accordion buttons expose `aria-expanded`; timeline ticks expose `aria-current`.
- `:focus-visible` outline (indigo, 2.5px, offset) on all interactive elements.

## Open items (non-blocking)
- Tap-to-revive on the figure is a progressive enhancement (reveal also fires on scroll via
  IntersectionObserver), so no keyboard handler is required for function; could add one later.
- Real captions/transcripts needed when actual audio/video are produced (1.2.2 / 1.2.3).

---

## Improvement round (T-001-07) — engagement, research-backed

1. **Context-aware chapter audio bar** — the persistent player now reflects the open chapter
   ("Now reading · Chapter I — …"), reinforcing the audiobook/podcast chapter mental model
   (research §A: persistent mini-player, chapter metaphor, anti-lost).
2. **Reading-progress mechanic** — opened chapters get a filled vermilion dot on the timeline
   (hollow when unread), a light progress/collectible loop (research §A: Smartify/Audiala),
   with sr-only text so meaning isn't color-only.

### Verdict
Both deliverables (coded `/yerba-buena` + Figma frame 192:2) meet WCAG 2.2 AA. Production
build clean (`tsc` + `vite build`, 48 modules). Next-session candidates: then/now slider,
GPS "you're near here" prompts, bottom-sheet for full side-story, downloadable offline bundle.
