# Browsing & Discovery research — multi-location TimeLens (condensed)

Full cited synthesis was produced this session; key takeaways below. Sources: Atlas
Obscura, VoiceMap, Smartify, Bloomberg Connects, AllTrails, Komoot, Google Arts & Culture,
Airbnb Experiences, Apple/Google Maps, NN/g (mobile maps, breadcrumbs, bottom sheets).

## Top 10 recommendations (multi-location)
1. **Curated editorial home, not a bare map.** Lead with a Featured Location + themed
   collections. A sparse map at cold-start reads as broken; curation makes a few
   locations feel intentional. → *Implemented: Explore featured card + theme chips.*
2. **Bottom-nav, ≤4 tabs: Explore · Map · Saved.** Proven for 3–5 destinations; lets
   users jump to any location without unwinding the 4-level hierarchy. → *Implemented (Map/Saved stubbed).*
3. **List-first for discovery, map-first for the walk.** Default explore to scannable
   cards while the catalog is small; switch default to map once pin density rewards it.
4. **Map + draggable bottom-sheet** for the spatial view so switching never "teleports."
5. **Persistent location-context header + breadcrumb** (Location ▸ Period ▸ Event) with a
   one-tap location switcher. → *Implemented: breadcrumb on Yerba Buena.*
6. **Organize by Neighborhood / Era / Theme chips** ("Waterfront", "Gold Rush",
   "Earthquake"). Cheap, expressive, scales. → *Implemented: theme chips.*
7. **Ship "near me" sort + saved + recently-viewed now; defer full filter/search panel**
   until ~15–20+ locations (heavy filtering on 3–5 places signals emptiness).
8. **Permission-prime location contextually, after value — never on launch.** Drop users
   into the featured experience; request location only on "tours near me."
9. **"Up next" continuation rail at tour-end** suggesting adjacent/linked locations. →
   *Implemented: Up-Next off-ramp on Yerba Buena.*
10. **Preserve tour state across switches** — resume exactly where the user left off.

## Build status (this session)
Explore screen, bottom nav, theme chips, featured card, location stubs, breadcrumb, and
up-next are a FIRST CUT. Next: map+sheet view, saved/recently-viewed, near-me sort,
real second location, contextual location permission, state preservation on switch.
