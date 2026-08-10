# T-001-02 — Design Directions (Victorian Newspaper)

Three distinct, WCAG 2.2 AA-verified directions. All share the same skeleton (single cream
column, printer's-rule timeline, living-image hero, drop-cap article blocks, manicule
affordances, prefers-reduced-motion) and differ in **type personality, palette warmth, and
ornament level.** User selects one before the design system (T-001-03) is built.

---

## Direction A — "The Authentic Broadsheet"  ★ recommended

The grittiest, most period-true. Looks like a genuine 1850s San Francisco newspaper.

- **Type:** Masthead `UnifrakturCook` (blackletter, masthead only). Body `IM Fell English`
  (digitized 17th-c. Fell type — authentic grain, still legible) @17px/1.6. Datelines
  `IM Fell English SC`.
- **Palette:** newsprint cream `#F4ECD8` · ink `#1A1A1A` (14.78:1) · **vermilion `#B33A2B`**
  accent (5.01:1) · faded indigo `#3B4A6B` links (7.50:1) · gold `#C8A04B` ornament on dark.
- **Ornament:** high — fleurons, double rules, asterisms, heavy nameplate.
- **Risk:** blackletter can skew "medieval/Halloween" if overused → strictly one nameplate
  per screen; IM Fell's grit is characterful but test legibility at 16px.

## Direction B — "Refined Editorial / Didone"

Most legible and elegant; upscale gallery/NYT-immersive feel. Modern-leaning but unmistakably
1800s editorial via high-contrast Didone display.

- **Type:** Display `Playfair Display` (hero 30–40px mobile). Body `Lora` (sturdier than
  Playfair at small sizes) @16–17px/1.65. Datelines Playfair SemiBold small-caps.
- **Palette:** warm cream `#F4ECD8` · ink `#1A1A1A` · **oxblood `#7A2E22`** accent (7.96:1,
  deeper/more refined than vermilion) · gold `#C8A04B` on dark panels · indigo links.
- **Ornament:** restrained — whitespace-led, hairline rules, sparse fleurons.
- **Risk:** reads more "magazine" than "newspaper"; least overtly Victorian.

## Direction C — "Heritage Almanac"

Warmest and calmest; a treasured old almanac/field-guide. Best for relaxed long reading and
audio-walk transcripts. Early-1900s book feel.

- **Type:** Display + body `Old Standard TT` (Bold/Regular) with `PT Serif` for long body
  @17px/1.6. Datelines Old Standard TT letter-spaced caps.
- **Palette:** aged paper `#EDE4D3` · ink-sepia `#4A3826` (8.83:1) body · oxblood-deep
  `#6E1E1E` accent (8.91:1) · steel-engraving `#5C5448` meta · gold on dark.
- **Ornament:** medium — warm sepia tone throughout, classic book ornaments.
- **Risk:** sepia-heavy ground is slightly tighter on contrast (verify accents on #EDE4D3);
  can feel "antique store" rather than "living newspaper."

---

## Recommendation

**Direction A** best serves the stated vision — "an old Victorian newspaper where images
animate into living video." The blackletter nameplate + IM Fell body + vermilion accent reads
instantly as a 19th-c. SF paper, and the living-image sepia→color reveal lands hardest against
authentic newsprint. B is the safe, elegant fallback; C is best if long-form reading dominates.

Shared system regardless of pick: tokens (color/type/space/radius), printer's-rule timeline,
period masthead card, article block, living-image hero, column-inch side-story, phonograph
audio player, bottom nav — all AA-bound.
