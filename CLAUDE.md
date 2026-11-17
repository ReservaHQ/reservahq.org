# Project instructions for Claude Code

Read `AGENTS.md` and `AGENTS.agents.md` as the sources of truth for this static SolidJS/Vite site. This is not a Go modulith and has no justfile.

## Quick rules
- No bulk reads of node_modules/ or dist/; targeted diagnosis reads are allowed.
- No implicit deployment authority (Cloudflare Pages is human-managed). Never merge to main unless explicitly asked.
- Enforced rules live in `.claude/settings.json`.
