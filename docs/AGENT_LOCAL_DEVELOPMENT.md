# Local development for agents

Read AGENTS.md and the shared AGENTS.agents.md base first. Inspect the current task runner file, .tool-versions, module manifests, .env.example, server config, compose files and frontend configs before starting services. Tool installation, Docker startup and filesystem paths depend on the machine; no preinstalled VM snapshot is assumed.

## Setup and services

- Use the documented prerequisite/doctor recipe. Prefer project recipes; inspect their effects first.
- The task runner loads .env. If absent, create a local copy from .env.example; never commit secrets.
- With a working Docker daemon, bring up the minimal local stack, then migrate the intended local database. Seed only when the task needs it. Never reset an existing database as an implicit setup step.
- Confirm ports and health endpoints from the repository's own config rather than assuming defaults.
- Database/cache ports depend on compose selection and local overrides; read the applicable compose file.

## Task references

- Use the repository's own task-runner reference and architecture guide.
- Generated intelligence and cached indexes are discovery aids. Verify freshness against the current tree before relying on them; do not copy historical health scores or snapshot-specific claims into the canonical guide.
- Never deploy, promote, destroy or reset data without explicit human authorization in the current message.
