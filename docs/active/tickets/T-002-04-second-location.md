---
id: T-002-04
story: S-002
title: second-location-portsmouth
type: task
status: open
priority: high
phase: ready
depends_on: []
---

## Context
Build a second real location (Portsmouth Square) using the Victorian design system, so the
Explore browse + location-switch flow has two genuine walks. Needs a data file like
`yerbaBuena.json`, historic imagery, and reuse of the existing page components. Add the
Map + Saved tabs as real (at least minimal) views; preserve tour state on switch.

## Acceptance Criteria
- `/portsmouth-square` (or routed) renders a real periods→events walk.
- Switching between locations from Explore works and feels fluid.
