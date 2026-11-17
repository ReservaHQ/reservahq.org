# Agent guide - reservahq.org

Showcase público de productos ReservaHQ. Sitio estático: **SolidJS + Vite + TypeScript**, publicado en Cloudflare Pages.

Este repositorio **no** es un modulith Go y **no tiene justfile**: no aplices aquí convenciones de Go, `just` ni rutas de otros repos.

## Comandos

    pnpm install
    pnpm dev
    pnpm typecheck
    pnpm build
    pnpm preview

## Preferencia de ingeniería

Código ligero y simple. No sobreingenierizar: sin abstracciones, capas ni configuraciones especulativas.

## Fuentes de verdad para agentes

Lee `AGENTS.md` (este archivo, específico del repo) y `AGENTS.agents.md` (base canónica compartida). Los adaptadores solo apuntan ahí.

## Seguridad

- Nunca commitear `.env` ni secretos.
- Sin autoridad implícita de despliegue: Cloudflare Pages lo gestiona una persona.
- Nunca hacer merge a `main` sin solicitud explícita.
