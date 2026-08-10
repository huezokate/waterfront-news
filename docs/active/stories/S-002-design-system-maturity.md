---
id: S-002
title: design-system-maturity
status: open
priority: high
---

## Story

Mature the Victorian Broadsheet design system from a granular UI kit into a true working
library with full code↔Figma coordination, and grow the app to multiple real locations.

Builds on S-001 (research → design system → Yerba Buena page → Figma UI kit → token pipeline,
all done). See `~/Documents/projects/timelens/PROGRESS.md` and `CLAUDE.md` for current state.

## Goals
- Real component composition in Figma (molecules consume atom instances).
- Code Connect linking Figma components ↔ React files.
- Two-way token sync (code→Figma writer, completing the round-trip).
- A second fully-built SF location so the browse/location-switch flow has 2 walks.
