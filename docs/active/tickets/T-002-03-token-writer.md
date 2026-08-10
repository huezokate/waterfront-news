---
id: T-002-03
story: S-002
title: token-writer-code-to-figma
type: task
status: open
priority: medium
phase: ready
depends_on: []
---

## Context
Close the token loop both ways. Today Figma→code is automated (`get_variable_defs` →
`tokens:sync` → `tokens.json` → CSS). Add the code→Figma direction: a step that pushes
`tokens.json` colour values into the Figma "Victorian Broadsheet" variables via `use_figma`,
so editing a token in code updates the Figma variable too.

## Acceptance Criteria
- Running the writer updates Figma variables to match tokens.json (idempotent, reports diffs).
