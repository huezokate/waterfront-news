/* Design-direction configs for the /directions specimen pages.
   Content sourced from docs/active/work/T-001-02/design.md (T-001-02). */

export interface Swatch {
  name: string;
  hex: string;
  role: string;
  ratio?: string; // WCAG contrast vs. its ground, from the T-001-02 audit
}

export interface Direction {
  id: string;
  letter: string;
  name: string;
  recommended?: boolean;
  badge?: string; // extra kicker label, e.g. stakeholder-feedback round
  interactive?: boolean; // renders the living-image + scroll-motion specimen extras
  tagline: string;
  summary: string;
  type: { role: string; spec: string }[];
  palette: Swatch[];
  ornament: string;
  risk: string;
}

export const DIRECTIONS: Direction[] = [
  {
    id: 'a',
    letter: 'A',
    name: 'The Authentic Broadsheet',
    tagline: 'The grittiest, most period-true. Looks like a genuine 1850s San Francisco newspaper.',
    summary:
      'Blackletter nameplate + IM Fell body + vermilion accent reads instantly as a 19th-century ' +
      'SF paper, and the living-image sepia→color reveal lands hardest against authentic newsprint.',
    type: [
      { role: 'Masthead', spec: 'UnifrakturCook — blackletter, masthead only' },
      { role: 'Body', spec: 'IM Fell English @ 17px / 1.6 — digitized 17th-c. Fell type' },
      { role: 'Datelines', spec: 'IM Fell English SC' },
    ],
    palette: [
      { name: 'Newsprint cream', hex: '#F4ECD8', role: 'ground' },
      { name: 'Ink', hex: '#1A1A1A', role: 'text', ratio: '14.78:1' },
      { name: 'Vermilion', hex: '#B33A2B', role: 'accent', ratio: '5.01:1' },
      { name: 'Faded indigo', hex: '#3B4A6B', role: 'links', ratio: '7.50:1' },
      { name: 'Gold', hex: '#C8A04B', role: 'ornament on dark' },
    ],
    ornament: 'High — fleurons, double rules, asterisms, heavy nameplate.',
    risk:
      'Blackletter can skew "medieval/Halloween" if overused → strictly one nameplate per screen; ' +
      "IM Fell's grit is characterful but test legibility at 16px.",
  },
  {
    id: 'b',
    letter: 'B',
    name: 'Refined Editorial / Didone',
    tagline: 'Most legible and elegant; upscale gallery / NYT-immersive feel.',
    summary:
      'Modern-leaning but unmistakably 1800s editorial via high-contrast Didone display. ' +
      'The safe, elegant fallback.',
    type: [
      { role: 'Display', spec: 'Playfair Display — hero 30–40px mobile' },
      { role: 'Body', spec: 'Lora @ 16–17px / 1.65 — sturdier than Playfair at small sizes' },
      { role: 'Datelines', spec: 'Playfair SemiBold small-caps' },
    ],
    palette: [
      { name: 'Warm cream', hex: '#F4ECD8', role: 'ground' },
      { name: 'Ink', hex: '#1A1A1A', role: 'text' },
      { name: 'Oxblood', hex: '#7A2E22', role: 'accent', ratio: '7.96:1' },
      { name: 'Gold', hex: '#C8A04B', role: 'on dark panels' },
      { name: 'Indigo', hex: '#3B4A6B', role: 'links' },
    ],
    ornament: 'Restrained — whitespace-led, hairline rules, sparse fleurons.',
    risk: 'Reads more "magazine" than "newspaper"; least overtly Victorian.',
  },
  {
    id: 'c',
    letter: 'C',
    name: 'Heritage Almanac',
    tagline: 'Warmest and calmest; a treasured old almanac or field guide. Early-1900s book feel.',
    summary:
      'Best for relaxed long reading and audio-walk transcripts — warm sepia tone throughout ' +
      'with classic book ornaments.',
    type: [
      { role: 'Display', spec: 'Old Standard TT Bold' },
      { role: 'Body', spec: 'PT Serif for long body @ 17px / 1.6' },
      { role: 'Datelines', spec: 'Old Standard TT letter-spaced caps' },
    ],
    palette: [
      { name: 'Aged paper', hex: '#EDE4D3', role: 'ground' },
      { name: 'Ink-sepia', hex: '#4A3826', role: 'body text', ratio: '8.83:1' },
      { name: 'Oxblood-deep', hex: '#6E1E1E', role: 'accent', ratio: '8.91:1' },
      { name: 'Steel-engraving', hex: '#5C5448', role: 'meta' },
      { name: 'Gold', hex: '#C8A04B', role: 'on dark' },
    ],
    ornament: 'Medium — warm sepia tone throughout, classic book ornaments.',
    risk:
      'Sepia-heavy ground is slightly tighter on contrast (verify accents on #EDE4D3); ' +
      'can feel "antique store" rather than "living newspaper."',
  },
  {
    id: 'd',
    letter: 'D',
    name: 'The Night Dispatch',
    recommended: true,
    badge: '✦ stakeholder round 2',
    interactive: true,
    tagline:
      'Direction A’s masthead struck in deep rust on living slate — vibrant, edgy, ' +
      'fresh, and built to move.',
    summary:
      'The broadsheet after dark: A’s blackletter header survives, everything under it goes ' +
      'modern. Slate ground with breathing ember gradients, red-orange UI accents, ' +
      'scroll-driven reveals, a tap-to-ignite living image with a haptic tick, a bright ' +
      'grid-of-plates picker for location + year, and imagery that blurs in motion and snaps ' +
      'into focus when the camera stops. Audience: adults with kids — rich, daring, ' +
      'form follows function; high contrast but earthy; color-saturated imagery.',
    type: [
      { role: 'Masthead', spec: 'UnifrakturCook — Direction A’s header, recolored rust' },
      { role: 'Body & UI', spec: 'Space Grotesk @ 16.5px / 1.6 — modern grotesque, edgy vs. blackletter' },
      { role: 'Datelines', spec: 'Space Grotesk 500, uppercase, letter-spaced' },
    ],
    palette: [
      { name: 'Slate night', hex: '#232A33', role: 'ground' },
      { name: 'Newsprint ghost', hex: '#EAE5DB', role: 'text', ratio: '11.53:1' },
      { name: 'Signal rust', hex: '#DA4C29', role: 'accent · masthead & UI', ratio: '3.48:1 large/UI' },
      { name: 'Rust ember', hex: '#E96B45', role: 'accent text', ratio: '4.59:1' },
      { name: 'Ember amber', hex: '#FFB03A', role: 'links / alive states', ratio: '7.94:1' },
      { name: 'Slate mist', hex: '#97A1AB', role: 'meta', ratio: '5.52:1' },
    ],
    ornament:
      'Low print-ornament, high atmosphere — radial ember glows, fire-gradient scroll bar, ' +
      'motion as the ornament.',
    risk:
      'Furthest from period-true; dark ground must not drift back to the legacy steel-blue app. ' +
      'Haptics (navigator.vibrate) are Android-only — iOS falls back to the visual pulse.',
  },
];
