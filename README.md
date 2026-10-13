# ReservaHQ

Showcase público de productos ReservaHQ.

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Verificación

```bash
pnpm typecheck
pnpm build
pnpm preview
```

## Cloudflare Pages

Crear un proyecto Pages conectado a `ReservaHQ/reservahq.org` con:

- Root directory: `/`
- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: versión LTS
- Package manager: `pnpm`

Después del primer deploy, agregar `reservahq.org` como custom domain. DNS ya apunta a los nameservers de Cloudflare.

## Productos

- [MiTurno](https://miturno.de)
- [MiReserva](https://mireserva.de)
- [MisProductos](https://misproductos.de)
- [CalenGo](https://calengo.cc)
