# AI Agents Guide

Welcome to the autonomous development workspace for **reservahq.org** (static SolidJS + Vite showcase for ReservaHQ products). This repository is configured for multi-agent collaboration across **Antigravity**, **Codex CLI**, **OpenCode**, and **Cursor**.

## Prefer simple solutions

Keep changes small and focused. Avoid unnecessary abstractions, layers and speculative features.

## Context & token hygiene

There is no generated code, seed data or Go module here. Avoid reading `dist/`, `node_modules/` and lockfiles unless needed to diagnose a failure. Scope searches to `src/`.

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
