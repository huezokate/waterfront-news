---
id: T-001-05
story: S-001
title: yerba-buena-page-react
type: task
status: done
priority: high
phase: done
depends_on: [T-001-03]
---

## Context

Implement the Yerba Buena page in the React/Vite app, wired to src/data/yerbaBuena.json
and the JIMMY PIX imagery. Victorian tokens in CSS custom properties. Ken Burns / parallax
"living image" with prefers-reduced-motion fallback. Progressive disclosure via
expandable periods → event detail.

## Acceptance Criteria

- Runs on `npm run dev`; mobile shell 430px.
- Real data + images render; drill-down works; motion respects reduced-motion.
- No hardcoded colors outside token file.
