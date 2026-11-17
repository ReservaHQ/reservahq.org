# AI Agents Guide

Welcome to the autonomous development workspace for **reservahq.org** (static SolidJS + Vite showcase for ReservaHQ products). This repository is configured for multi-agent collaboration across **Antigravity**, **Codex CLI**, **OpenCode**, and **Cursor**.

## Prefer simple solutions

Keep changes small and focused. Avoid unnecessary abstractions, layers and speculative features.

## Context & token hygiene

There is no generated code, seed data or Go module here. Avoid reading `dist/`, `node_modules/` and lockfiles unless needed to diagnose a failure. Scope searches to `src/`.

## Agent tooling compatibility

- `opencode.json` uses the OpenCode V2 format (`permissions` with `action: shell`). It requires OpenCode 2.x and is not compatible with 1.x; this environment has not validated V2 loading. Target version is a pending team decision — do not claim operational compatibility until it is confirmed (1.x would require conversion to `permission`/`bash`).
- Codex loads `.codex/` only after the project is trusted; project-local rules need that trust.
- No `just` task is pre-authorized: `just` can chain recipes (for example `just test-unit deploy-prod`), so every invocation needs explicit approval. Production deploy requires authorization from Christian.

## Collaboration workflow

For non-trivial work, present a short implementation plan (goal, files to change, verification commands, risks) before editing. Execute it literally and persist handoff notes only when needed. Do not merge to `main` or trigger a production change without explicit authorization from Christian.

## Commands

| Task | Command |
| --- | --- |
| Install | `pnpm install` |
| Dev server | `pnpm dev` |
| Typecheck | `pnpm typecheck` |
| Build | `pnpm build` |
| Preview | `pnpm preview` |

## Verification

Run `pnpm typecheck` and `pnpm build` before opening a PR. No `just` recipes, Go toolchain or CI runner exist in this repo — do not invent them.

## Deployment

Published by Cloudflare Pages from `main` (`pnpm build`, output `dist`). No manual deploy command is documented in this repository.
