import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const HERO = 'https://images.unsplash.com/photo-1783867174851-8b686b7e45ea?w=1800&h=700&fit=crop&auto=format'

const films = [
  {
    title: 'EMU RUNNER',
    to: '/work/emu-runner',
    thumb: 'https://images.unsplash.com/photo-1717957389547-cec922a4182f?w=500&h=350&fit=crop&auto=format',
    alt: 'Emu in Australian outback',
  },
  {
    title: 'QUIET HOUR',
    to: '/work/quiet-hour',
    thumb: 'https://images.unsplash.com/photo-1544039161-b0c20826c6f6?w=500&h=350&fit=crop&auto=format',
    alt: 'Trees and pathway in light',
  },
  {
    title: 'MIXED BAG',
    to: '/work/mixed-bag',
    thumb: 'https://images.unsplash.com/photo-1645341174612-8b9bb7b1287e?w=500&h=350&fit=crop&auto=format',
    alt: 'Ostriches in a field',
  },
  {
    title: 'NO SLEEP AMERICA',
    to: '/work/no-sleep-america',
    thumb: 'https://images.unsplash.com/photo-1509473791583-5cfc522750f4?w=500&h=350&fit=crop&auto=format',
    alt: 'Bonfire with silhouette of trees',
  },
  {
    title: 'APY RANGER VISIT',
    to: '/work/apy-ranger-visit',
    thumb: 'https://images.unsplash.com/photo-1663256936394-ee943b28b695?w=500&h=350&fit=crop&auto=format',
    alt: 'Alpine mountain landscape',
  },
]

export default function Work() {
  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex flex-col bg-[#2a2927]">
        <img
          src={HERO}
          alt="Film crew with camera equipment outdoors"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10">
          <Nav />
        </div>
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <h1
            className="text-white text-5xl md:text-7xl font-display font-extrabold uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Work
          </h1>
        </div>
      </section>

      {/* Film grid */}
      <section className="bg-[#525050] flex-1 px-8 md:px-16 py-14">
        {/* Row 1 — 3 films */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10 max-w-4xl mx-auto">
          {films.slice(0, 3).map((film) => (
            <FilmCard key={film.to} film={film} />
          ))}
        </div>
        {/* Row 2 — 2 films, left-aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {films.slice(3).map((film) => (
            <FilmCard key={film.to} film={film} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FilmCard({ film }: { film: (typeof films)[0] }) {
  return (
    <Link to={film.to} className="group block">
      <div className="overflow-hidden bg-[#3a3937] mb-3">
        <img
          src={film.thumb}
          alt={film.alt}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <p
        className="text-white text-sm font-display font-extrabold uppercase tracking-widest text-center"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
      >
        {film.title}
      </p>
    </Link>
  )
}
