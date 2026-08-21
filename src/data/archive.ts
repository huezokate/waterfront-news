/* ============================================================================
   The plate archive.

   Everything else in the drill-down is material that has to be made — a walk to
   record, a historian to film. This is the one that already exists: 30-odd
   scans of the maps, charts, block prints, gravures and photographs the trail
   was built out of, sitting in public/historic.

   Titles and dates are read off the source scans; where a sheet carries no date
   the entry says so rather than guessing one. `kind` drives the caption label,
   not the layout.
   ============================================================================ */

export type PlateKind = 'map' | 'view' | 'print' | 'photo' | 'document';

export const PLATE_KIND_LABEL: Record<PlateKind, string> = {
  map: 'Map scan',
  view: 'Engraved view',
  print: 'Block print',
  photo: 'Photograph',
  document: 'Document',
};

export interface Plate {
  file: string;
  /** As printed on the sheet; empty when the sheet carries no date. */
  year: string;
  title: string;
  kind: PlateKind;
}

/* Keyed by chapter id. Assignment follows the date on the sheet, so a chapter
   with a thin archive shows a thin archive — the count on the card is real. */
export const CHAPTER_PLATES: Record<string, Plate[]> = {
  'trading-post': [
    { file: 'historic/4-1-1b-1828-bechy-map-of-sf-bay.jpg', year: '1828', title: 'Beechey’s survey of San Francisco bay', kind: 'map' },
    { file: 'historic/4-1-1a-1797-la-perous-sf-bay.jpg', year: '1797', title: 'La Pérouse’s chart of the bay', kind: 'map' },
    { file: 'historic/4-1-1d-sand-dunes.webp', year: '', title: 'The sand dunes behind the cove', kind: 'view' },
    { file: 'historic/4-1-2b-1939-dynorama-of-yerba-buena.jpg', year: '1939', title: 'Diorama of the Yerba Buena settlement', kind: 'photo' },
  ],
  'flag-rises': [
    { file: 'historic/4-1-2b-1939-dynorama-of-yerba-buena.jpg', year: '1939', title: 'Diorama of the Yerba Buena settlement', kind: 'photo' },
    { file: 'historic/4-1-1d-sand-dunes.webp', year: '', title: 'The sand dunes behind the cove', kind: 'view' },
  ],
  'new-name': [
    { file: 'historic/4-1-4b-1848-sf-view-from-russian-hill.jpeg', year: '1848', title: 'San Francisco from Russian Hill', kind: 'view' },
    { file: 'historic/4-1-4a-1848-view-of-sf-harbor-house-count.jpg', year: '1848', title: 'The harbour, with a count of the houses', kind: 'view' },
  ],
  gold: [
    { file: 'historic/4-1-4c-1848-upper-lower-mines.jpeg', year: '1848', title: 'The upper and lower mines', kind: 'print' },
    { file: 'historic/4-1-4a-1848-view-of-sf-harbor-house-count.jpg', year: '1848', title: 'The harbour, with a count of the houses', kind: 'view' },
    { file: 'historic/4-1-4b-1848-sf-view-from-russian-hill.jpeg', year: '1848', title: 'San Francisco from Russian Hill', kind: 'view' },
  ],
  invasion: [
    { file: 'historic/4-2-3c-1850-sf-bay-with-abandoned-ships.jpeg', year: '1850', title: 'The bay, full of abandoned ships', kind: 'view' },
    { file: 'historic/4-1-5a-1849-eddy-1st-edition-of-sf.jpg', year: '1849', title: 'Eddy’s first edition plan of San Francisco', kind: 'map' },
    { file: 'historic/4-1-5b-1849-san-francisco-view-from-yerba-buena-cover-rincon.jpeg', year: '1849', title: 'The city from Yerba Buena cove to Rincon', kind: 'view' },
  ],
  'fire-vigilance': [
    { file: 'historic/4-2-2b-1851-may-4th-fire-from-long-wharf-commercial-st.jpg', year: '1851', title: 'The May 4th fire, seen from Long Wharf', kind: 'print' },
    { file: 'historic/4-2-2c-1851-may-4th-fire-burning-west-of-longwharf-at-batter.jpg', year: '1851', title: 'The May 4th fire burning west of Long Wharf', kind: 'print' },
    { file: 'historic/4-2-2f-1851-vigilance-hanging-on-market-st-wharf.png', year: '1851', title: 'A Vigilance Committee hanging on Market Street wharf', kind: 'print' },
    { file: 'historic/4-2-2a-1851-quirot-sf-with-hand-legend.jpg', year: '1851', title: 'Quirot’s San Francisco, with a hand-lettered legend', kind: 'map' },
    { file: 'historic/4-2-2d-1851-view-north-from-powell-to-tel-hill-in-san-franci.jpg', year: '1851', title: 'North from Powell Street to Telegraph Hill', kind: 'view' },
    { file: 'historic/4-2-1a-1850-san-francisco-portsmouth-sq-east-west-views.jpg', year: '1850', title: 'Portsmouth Square, east and west views', kind: 'view' },
    { file: 'historic/4-2-1b-1850-sf-bay-and-delta.jpg', year: '1850', title: 'The bay and the delta', kind: 'map' },
  ],
  'streets-over-water': [
    { file: 'historic/4-2-3b-1853-butlersf-boardwalks.png', year: '1853', title: 'Butler’s San Francisco, with the boardwalks', kind: 'map' },
    { file: 'historic/4-2-4f-1854-water-lot-auction-catalog-title-page-n-manuscrip.jpeg', year: '1854', title: 'Water lot auction catalogue, title page', kind: 'document' },
    { file: 'historic/4-2-4e-waterlot-catalog.jpg', year: '', title: 'Pages from a water lot catalogue', kind: 'document' },
    { file: 'historic/4-2-4c-1852-waterlots.png', year: '1852', title: 'The water lots', kind: 'map' },
    { file: 'historic/4-2-3a-1853-1st-uscs-sf.jpg', year: '1853', title: 'The first U.S. Coast Survey of San Francisco', kind: 'map' },
    { file: 'historic/4-2-3d-1852-sf-bird-s-eye-view-west.jpg', year: '1852', title: 'Bird’s-eye view, looking west', kind: 'view' },
    { file: 'historic/4-2-3e-1963-buried-ships-map.jpg', year: '1963', title: 'Map of the ships buried under the city', kind: 'map' },
    { file: 'historic/4-5-5a-2020-buried-ships-of-sf.jpeg', year: '2020', title: 'The buried ships, mapped again', kind: 'map' },
  ],
  'silver-war': [
    { file: 'historic/4-2-4a-1857-sf-bay-french-total.jpg', year: '1857', title: 'French chart of San Francisco bay', kind: 'map' },
    { file: 'historic/4-2-2f-1852-san-francisco-eddy-redline.jpg', year: '1852', title: 'Eddy’s San Francisco, the red-line edition', kind: 'map' },
  ],
  railroad: [
    { file: 'historic/4-2-5b-1869-sf-view-east.jpeg', year: '1869', title: 'The city looking east across the water', kind: 'view' },
    { file: 'historic/4-2-5c-photo-1867-sf-waterfront-scan.jpg', year: '1867', title: 'The waterfront, photographed', kind: 'photo' },
    { file: 'historic/4-2-5d-1869-san-francisco-maritime-view.jpg', year: '1869', title: 'A maritime view of San Francisco', kind: 'view' },
    { file: 'historic/4-2-5a-1869-uscs-sf-dpw-version.jpg', year: '1869', title: 'Coast Survey of San Francisco, public works edition', kind: 'map' },
    { file: 'historic/4-2-4b-1869-sf-eastern-waterlots-financialdist-tel-hill-manu.jpg', year: '1869', title: 'The eastern water lots, from the financial district to Telegraph Hill', kind: 'map' },
  ],
};

export const platesFor = (chapterId: string): Plate[] => CHAPTER_PLATES[chapterId] ?? [];
