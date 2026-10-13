import { For } from 'solid-js'

type Product = {
  name: string
  description: string
  url: string
  label: string
  accent: 'teal' | 'gold' | 'coral' | 'ink'
  number: string
}

const products: Product[] = [
  {
    name: 'MiTurno',
    description: 'Reservas simples para servicios que quieren trabajar mejor.',
    url: 'https://miturno.de',
    label: 'Reservas',
    accent: 'teal',
    number: '01',
  },
  {
    name: 'MiReserva',
    description: 'Una experiencia clara para que tus clientes elijan su próximo turno.',
    url: 'https://mireserva.de',
    label: 'Experiencias',
    accent: 'gold',
    number: '02',
  },
  {
    name: 'MisProductos',
    description: 'Ordená lo que vendés y hacé que cada producto encuentre su lugar.',
    url: 'https://misproductos.de',
    label: 'Productos',
    accent: 'coral',
    number: '03',
  },
  {
    name: 'CalenGo',
    description: 'Calendarios que se mueven al ritmo de tu equipo y tus clientes.',
    url: 'https://calengo.cc',
    label: 'Calendarios',
    accent: 'ink',
    number: '04',
  },
]

function App() {
  return (
    <main>
      <div class="grain" aria-hidden="true" />
      <nav class="nav shell" aria-label="Navegación principal">
        <a class="brand" href="/" aria-label="ReservaHQ, inicio">
          <img src="/reservahq-lockup.png" alt="ReservaHQ" />
        </a>
        <a class="nav-link" href="#productos">
          Ver productos <span aria-hidden="true">↘</span>
        </a>
      </nav>

      <section class="hero shell">
        <div class="hero-copy">
          <p class="kicker"><span class="pulse" /> Un pequeño equipo, grandes herramientas</p>
          <h1>
            Hacemos que
            <em>hacer</em>
            sea más fácil.
          </h1>
          <p class="intro">
            ReservaHQ crea productos digitales para negocios que cuidan su tiempo, sus clientes y
            cada detalle de lo que hacen.
          </p>
          <a class="hero-link" href="#productos">
            Conocé el ecosistema <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <div class="orbit orbit-one" />
          <div class="orbit orbit-two" />
          <img src="/reservahq-icon.png" alt="" />
          <span class="mark-caption">Built for<br />busy people.</span>
        </div>
      </section>

      <section class="products shell" id="productos">
        <div class="section-heading">
          <p class="kicker">El ecosistema ReservaHQ</p>
          <p class="section-note">Herramientas con una cosa en común: <strong>menos fricción.</strong></p>
        </div>
        <div class="product-grid">
          <For each={products}>
            {(product) => (
              <a class={`product-card ${product.accent}`} href={product.url} aria-label={`Visitar ${product.name}`}>
                <div class="card-top">
                  <span class="card-number">{product.number}</span>
                  <span class="card-label">{product.label}</span>
                </div>
                <div class="card-body">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </a>
            )}
          </For>
        </div>
      </section>

      <footer class="footer shell">
        <span>ReservaHQ © 2026</span>
        <span>Ideas que encuentran su lugar.</span>
        <a href="mailto:hola@reservahq.org">hola@reservahq.org ↗</a>
      </footer>
    </main>
  )
}

export default App
