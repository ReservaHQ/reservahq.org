# Canonical agent guidance (cross-repo base) - static site variant

This repo is a static SolidJS/Vite/TypeScript site. It has no Go toolchain and no `justfile`: do not apply Go/modulith/`just` conventions or paths from other ReservaHQ repos.

## Context hygiene (selective, not a read ban)

- Bulk-noise paths: node_modules/, dist/, build/, coverage/.
- Do **not** bulk-read dependencies or build output. A targeted, purpose-driven read for a concrete diagnosis is allowed.
- Indexing/watcher ignore lists (`.cursorignore`, `watcher.ignore`) reduce noise only. They are **not** read or permission limits; real limits live in `.claude/settings.json` and `opencode.json`.

## Deployment and destructive commands

No agent has implicit deployment authority. Cloudflare Pages deploys and any production/destructive action require explicit human authorization in the current message. Never merge to `main` unless a human explicitly asks.
