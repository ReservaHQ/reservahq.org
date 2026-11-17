# AI Agents Guide

Welcome to the autonomous development workspace for **reservahq.org** (static SolidJS + Vite showcase for ReservaHQ products). This repository is configured for multi-agent collaboration across **Antigravity**, **Codex CLI**, **OpenCode**, and **Cursor**.

## Prefer simple solutions

Keep changes small and focused. Avoid unnecessary abstractions, layers and speculative features.

## Context & token hygiene

There is no generated code, seed data or Go module here. Avoid reading `dist/`, `node_modules/` and lockfiles unless needed to diagnose a failure. Scope searches to `src/`.

## Agent tooling compatibility

- `opencode.json` uses the OpenCode **V1** config format, validated by real load of OpenCode 1.19.6 (`debug config --pure`, exit 0). Commands are the repo`s own pnpm scripts; no `just` or Go toolchain.
- Codex loads `.codex/` only after the project is trusted; project-local rules need that trust.

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

## GitHub agent identity

In GitHub comments and reviews, identify bots as `Agente {nombre}` (for example, `Agente Kowolski`), without an at-sign prefix. Do not mention the GitHub handles matching Skipper, Kowolski, Cabo or Rico: those handles belong to unrelated real users, not these bots. Apply this convention to repository replicas as well.

