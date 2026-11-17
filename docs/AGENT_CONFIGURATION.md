# Agent configuration

AGENTS.md is the canonical shared guide (with AGENTS.agents.md as the cross-repo base where present). CLAUDE.md imports it, Cursor's core rule references it, and OpenCode's instructions loads it. Codex discovers AGENTS.md natively; no fallback filename entry is needed. Read applicable nested instructions as well.

## Tool boundaries

| Surface | Purpose | Limit |
| --- | --- | --- |
| .codex/config.toml | Project sandbox/approval defaults, document budget, existing MCP and feature settings | Project configuration requires trust; environment, user and managed overrides affect the effective configuration. workspace-write is not a promise that every possible write is confined to this repository. |
| .codex/rules/default.rules | Prefix decisions for command execution | Recipe dispatchers (just or the package manager) and Git mutation dispatchers prompt. Rules are not task authorization; unmatched forms fall back to effective policy. |
| opencode.json | Shared instructions, watcher noise reduction, shell approval | Tested with OpenCode 1.19.6 (V1). permission.bash["*"] = "ask" replaces blanket just allowances. User/global/managed configuration can affect effective permissions. |
| .cursorindexingignore | Keep large generated/seed/build files out of indexing | Retains targeted access; .cursorignore is for access exclusions and is not equivalent. Existing environment-example exceptions are preserved. |
| CLAUDE.md | Supported import of AGENTS.md | No .claudeignore enforcement is assumed. Use scoped discovery from the canonical guide. |

Watcher exclusions only suppress filesystem events. They do not stop reads, searches or shell access. These files do not protect secrets; do not print or commit credentials.

## Version compatibility

The official OpenCode schema URL is https://opencode.ai/config.json. At review time (2026-11-17), its public documentation described V2 permissions rules, but the installed npm CLI 1.19.6 rejected them. This repository keeps V1 permission syntax, which the real CLI successfully loaded. Do not claim live V2 schema validation passed. Recheck the installed version and resolved config before migrating; do not mix permission dialects.

## Validate locally

Run installed tools without starting an authenticated model session:

```bash
codex --version
codex execpolicy check --pretty --rules .codex/rules/default.rules -- git status --short
codex execpolicy check --pretty --rules .codex/rules/default.rules -- git branch -D feature
opencode --version
opencode --pure debug config
```

Expected: Git status/diff/log/show -> allow; recipe dispatchers and Git mutations -> prompt. This is policy evaluation, not a sandbox test. Parse both JSON files, preserve MCP and unrelated settings, and check Markdown references and git diff --check. Run repository checks and report actual failures.

## Reuse across ReservaHQ

Reuse the guide/adapters pattern, scoped discovery and conservative command rules. Inspect each repository's existing instructions/config first, preserve MCP and local policies, substitute its real module/layout/recipes, and validate against that machine's CLI versions. MiTurno's ports, Go module, runner usage, secrets, production environments and operational assumptions are not organization-wide defaults.
