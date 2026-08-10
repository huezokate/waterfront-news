---
id: T-002-01
story: S-002
title: rewire-molecules-to-atoms
type: task
status: open
priority: high
phase: ready
depends_on: []
---

## Context
In Figma, rewire the molecule components (Period Card, Side-story, Audio Bar, Featured/Location
cards) to nest INSTANCES of the atom components (Chip, Button, Nav Tab, Badge, etc.) instead of
duplicated frames — true atomic composition. Also promote remaining atoms to variant components
(Badge: Featured/Soon/Tag, Timeline Tick: Active/Default, Progress Dot: Read/Unread).

## Acceptance Criteria
- Molecules contain atom instances (instance-swap where relevant), not look-alike frames.
- New atom variant components created and used.
