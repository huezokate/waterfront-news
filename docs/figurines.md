# Figurines — the TimeLens cast in 3D

The trail's one act of play is choosing which of three people tells you a
chapter. That choice only feels like a choice if the three are *characters*, and
right now they are initials in a circle. This is the brief for replacing the
initials with 3D figurines.

## How a figurine gets into the app

1. Generate the model (Meshy), export a **GLB** and a **square PNG turnaround
   frame** — three-quarter view, head-and-shoulders-to-knees, transparent
   background.
2. Drop both in `public/figurines/`: `<hero-id>.png` and `<hero-id>.glb`.
3. Set `figurine: 'figurines/<hero-id>.png'` on that hero in
   `src/data/heroes.ts`.

That is the whole integration. `HeroAvatar` is the only component that renders a
face, so the figurine appears everywhere at once — the browse plate teaser, the
hero select, the chat header. Nothing else changes. The GLB is not wired up yet;
it is being banked now so the select screen can spin them later without a second
generation pass.

## Shot direction

Consistency across the cast matters more than fidelity on any one of them —
they appear side by side, three at a time, at 96px. So:

- **One camera for everyone.** Three-quarter turn, eye level, waist-up.
- **Toy scale, not waxwork.** These are figurines: slightly large heads, simple
  hands, readable silhouettes. Kids are in the audience.
- **Silhouette carries the character** at 96px, not the face. Give each one a
  prop or a shape you can recognise as a dark shape: a spyglass, a ledger, a
  tray, a crown.
- **Period-correct dress**, 1830s–1870s, but simplified — no fussy detail that
  turns to noise at avatar size.
- **Neutral expression.** They are narrators, not caricatures. This is the line
  that keeps a real person from becoming a joke, and it matters most for the
  people in the cast who were on the receiving end of the history.
- **Transparent background**, no base or plinth in the PNG (the circle is the
  plinth).

## Priority order

Cast across nine chapters, most-used first — the first six cover 20 of the 27
storyteller slots.

| # | Hero | `id` | Chapters | Silhouette handle |
|---|------|------|----------|-------------------|
| 1 | Juana Briones de Miranda | `briones` | 4 | rebozo, milk pail, herbs in the apron |
| 2 | William Heath Davis | `davis` | 3 | young clerk, notebook under the arm |
| 3 | Sam Brannan | `brannan` | 3 | shovel in one hand, bottle raised in the other |
| 4 | Gen. Mariano Guadalupe Vallejo | `vallejo` | 2 | Mexican officer's coat, gloves, sabre |
| 5 | Mayor John W. Geary | `geary` | 2 | mail trunk at the heel, stovepipe hat |
| 6 | Mary Ellen Pleasant | `pleasant` | 2 | bonnet and shawl, keys at the waist |
| 7 | William C. Ralston | `ralston` | 2 | frock coat, ledger, watch chain |
| 8 | William A. Leidesdorff | `leidesdorff` | 2 | merchant's coat, consular seal, ship's manifest |
| 9 | Emperor Norton I | `norton` | 1 | plumed hat, epaulettes, sabre, umbrella — the easy one |
| 10 | Norman Asing (Yuan Sheng) | `asing` | 1 | restaurateur's tunic, teapot and tray |
| 11 | Mifflin Wistar Gibbs | `gibbs` | 1 | boots in hand, folded newspaper |
| 12 | Capt. William Richardson | `richardson` | 1 | mariner's coat, spyglass, coil of rope |
| 13 | Capt. John B. Montgomery | `montgomery` | 1 | naval uniform, folded flag |
| 14 | Alcalde Washington Bartlett | `bartlett` | 1 | civil coat, rolled decree |
| 15 | Mayor C. K. Garrison | `garrison` | 1 | steamship man, timetable, top hat |
| 16 | The Ferry Captain | `ferry-captain` | 1 | oilskin, wheel, gulls | 

Sixteen is the full cast; six is a demo. Start at the top of the table.

## A note on likeness

Most of these are real people, and several of them — Briones, Pleasant, Gibbs,
Asing, Leidesdorff, Vallejo — have living descendants and communities that care
how they are shown. Treat the figurines as respectful portraits in a toy idiom,
not as caricature, and check any that read as a stereotype rather than a person
before shipping. Photographs exist for Pleasant, Gibbs, Vallejo, Geary, Brannan,
Ralston, Davis, Norton and Leidesdorff; use them. Briones, Asing and Richardson
have no confirmed portrait — those are interpretations, and the app should say
so wherever a figurine stands in for a face we do not have.
