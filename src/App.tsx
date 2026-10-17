import { For, createSignal } from 'solid-js'

type Locale = 'es' | 'en'

type Product = {
  name: string
  description: Record<Locale, string>
  url: string
  label: Record<Locale, string>
  accent: 'teal' | 'gold' | 'coral' | 'ink'
  number: string
}

const products: Product[] = [
  {
    name: 'MiTurno',
    description: {
      es: 'Reservas simples para servicios que quieren trabajar mejor.',
      en: 'Simple booking for services that want to work better.',
    },
    url: 'https://miturno.de',
    label: { es: 'Reservas', en: 'Bookings' },
    accent: 'teal',
    number: '01',
  },
  {
    name: 'MiReserva',
    description: {
      es: 'Una experiencia clara para que tus clientes elijan su próximo turno.',
      en: 'A clear experience for clients to choose their next appointment.',
    },
    url: 'https://mireserva.de',
    label: { es: 'Experiencias', en: 'Experiences' },
    accent: 'gold',
    number: '02',
  },
  {
    name: 'MisProductos',
    description: {
      es: 'Ordená lo que vendés y hacé que cada producto encuentre su lugar.',
      en: 'Organize what you sell and give every product its place.',
    },
    url: 'https://misproductos.de',
    label: { es: 'Productos', en: 'Products' },
    accent: 'coral',
    number: '03',
  },
  {
    name: 'CalenGo',
    description: {
      es: 'Calendarios que se mueven al ritmo de tu equipo y tus clientes.',
      en: 'Calendars that move at the pace of your team and your clients.',
    },
    url: 'https://calengo.cc',
    label: { es: 'Calendarios', en: 'Calendars' },
    accent: 'ink',
    number: '04',
  },
]

type LocaleCopy = {
  navLabel: string
  viewProducts: string
  kicker: string
  titleBefore: string
  titleEmphasis: string
  titleAfter: string
  intro: string
  ecosystemCta: string
  markCaption: [string, string]
  ecosystem: string
  sectionNote: string
  sectionEmphasis: string
  visit: string
  footer: string
  languageLabel: string
}

const copy: Record<Locale, LocaleCopy> = {
  es: {
    navLabel: 'Navegación principal',
    viewProducts: 'Ver productos',
    kicker: 'Un pequeño equipo, grandes herramientas',
    titleBefore: 'Hacemos que',
    titleEmphasis: 'hacer',
    titleAfter: 'sea más fácil.',
    intro:
      'ReservaHQ crea productos digitales para negocios que cuidan su tiempo, sus clientes y cada detalle de lo que hacen.',
    ecosystemCta: 'Conocé el ecosistema',
    markCaption: ['Built for', 'busy people.'],
    ecosystem: 'El ecosistema ReservaHQ',
    sectionNote: 'Herramientas con una cosa en común:',
    sectionEmphasis: 'menos fricción.',
    visit: 'Visitar',
    footer: 'Ideas que encuentran su lugar.',
    languageLabel: 'Idioma',
  },
  en: {
    navLabel: 'Main navigation',
    viewProducts: 'View products',
    kicker: 'A small team, powerful tools',
    titleBefore: 'We make',
    titleEmphasis: 'doing',
    titleAfter: 'easier.',
    intro:
      'ReservaHQ creates digital products for businesses that care about their time, their clients, and every detail of their work.',
    ecosystemCta: 'Explore the ecosystem',
    markCaption: ['Built for', 'busy people.'],
    ecosystem: 'The ReservaHQ ecosystem',
    sectionNote: 'Tools with one thing in common:',
    sectionEmphasis: 'less friction.',
    visit: 'Visit',
    footer: 'Ideas finding their place.',
    languageLabel: 'Language',
  },
}

function btn(variant: 'primary' | 'ghost', extra = '') {
  return ['btn', `btn-${variant}`, extra].filter(Boolean).join(' ')
}

function getInitialLocale(): Locale {
  if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('reservahq-locale')
    if (saved === 'es' || saved === 'en') return saved
    return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
  }
  return 'es'
}

function App() {
  const initialLocale = getInitialLocale()
  const [locale, setLocale] = createSignal<Locale>(initialLocale)
  const t = () => copy[locale()]

  if (typeof document !== 'undefined') {
    document.documentElement.lang = initialLocale
  }

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale)
    window.localStorage.setItem('reservahq-locale', nextLocale)
    document.documentElement.lang = nextLocale
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        nextLocale === 'es'
          ? 'ReservaHQ crea herramientas digitales para que los negocios puedan reservar, vender y crecer.'
          : 'ReservaHQ creates digital tools for businesses to book, sell, and grow.',
      )
    document.title =
      nextLocale === 'es'
        ? 'ReservaHQ — herramientas para negocios que hacen más'
        : 'ReservaHQ — tools for businesses that do more'
  }

  return (
    <main>
      <div class="grain" aria-hidden="true" />
      <nav class="nav shell" aria-label={t().navLabel}>
        <a class="brand" href="/" aria-label="ReservaHQ, inicio">
          <img src="/reservahq-lockup.png" alt="ReservaHQ" />
        </a>
        <div class="nav-actions">
          <a class={btn('ghost')} href="#productos">
            {t().viewProducts} <span aria-hidden="true">↘</span>
          </a>
          <div class="locale-picker" aria-label={t().languageLabel} role="group">
            <button class={btn(locale() === 'es' ? 'primary' : 'ghost', 'btn-sm')} type="button" onClick={() => changeLocale('es')}>
              ES
            </button>
            <span aria-hidden="true">/</span>
            <button class={btn(locale() === 'en' ? 'primary' : 'ghost', 'btn-sm')} type="button" onClick={() => changeLocale('en')}>
              EN
            </button>
          </div>
        </div>
      </nav>

      <section class="hero shell">
        <div class="hero-copy">
          <p class="kicker"><span class="pulse" /> {t().kicker}</p>
          <h1>
            {t().titleBefore}
            <em>{t().titleEmphasis}</em>
            {t().titleAfter}
          </h1>
          <p class="intro">{t().intro}</p>
          <a class={btn('primary')} href="#productos">
            {t().ecosystemCta} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <div class="orbit orbit-one" />
          <div class="orbit orbit-two" />
          <img src="/reservahq-icon.png" alt="" />
          <span class="mark-caption">
            {t().markCaption[0]}
            <br />
            {t().markCaption[1]}
          </span>
        </div>
      </section>

      <section class="products shell" id="productos">
        <div class="section-heading">
          <p class="kicker">{t().ecosystem}</p>
          <p class="section-note">
            {t().sectionNote} <strong>{t().sectionEmphasis}</strong>
          </p>
        </div>
        <div class="product-grid">
          <For each={products}>
            {(product) => (
              <a
                class={`product-card ${product.accent}`}
                href={product.url}
                aria-label={`${t().visit} ${product.name}`}
              >
                <div class="card-top">
                  <span class="card-number">{product.number}</span>
                  <span class="card-label">{product.label[locale()]}</span>
                </div>
                <div class="card-body">
                  <h2>{product.name}</h2>
                  <p>{product.description[locale()]}</p>
                </div>
                <span class={`${btn('primary')} card-cta`} aria-hidden="true">
                  {t().visit} <span>↗</span>
                </span>
              </a>
            )}
          </For>
        </div>
      </section>

      <footer class="footer shell">
        <span>ReservaHQ © 2026</span>
        <span>{t().footer}</span>
        <a href="mailto:hola@reservahq.org">hola@reservahq.org ↗</a>
      </footer>
    </main>
  )
}

export default App
