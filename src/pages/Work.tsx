import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import emuRunnerImg from '../imports/emu-runner-work-2.jpg'
import quietHourImg from '../imports/quiet-hour-work.jpg'
import noSleepAmericaImg from '../imports/no-sleep-america-work.jpg'

const films = [
  {
    title: 'Emu Runner',
    to: '/work/emu-runner',
    thumb: emuRunnerImg,
    alt: 'Emu in Australian outback',
    genre: 'FEATURE',
    year: '2018',
  },
  {
    title: 'APY Ranger Visit',
    to: '/work/apy-ranger-visit',
    thumb: 'https://images.unsplash.com/photo-1663256936394-ee943b28b695?w=1800&h=800&fit=crop&auto=format',
    alt: 'Alpine mountain landscape',
    genre: 'DOCUMENTARY',
    year: '2025',
  },
  {
    title: 'Quiet Hour',
    to: '/work/quiet-hour',
    thumb: quietHourImg,
    alt: 'Girl and boy standing on a rooftop',
    genre: 'SHORT',
    year: '2001',
  },
  {
    title: 'Mixed Bag',
    to: '/work/mixed-bag',
    thumb: 'https://images.unsplash.com/photo-1645341174612-8b9bb7b1287e?w=1800&h=800&fit=crop&auto=format',
    alt: 'Ostriches in a field',
    genre: 'SHORT',
    year: '2008',
  },
  {
    title: 'No Sleep America',
    to: '/work/no-sleep-america',
    thumb: noSleepAmericaImg,
    alt: 'Baker preparing dough',
    genre: 'DOCUMENTARY',
    year: '1999',
  },
]

const CATEGORIES = ['ALL', 'FEATURE', 'DOCUMENTARY', 'SHORT']

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const filteredFilms = films.filter(
    (f) => activeCategory === 'ALL' || f.genre === activeCategory
  )

  const getCount = (cat: string) => {
    if (cat === 'ALL') return films.length
    return films.filter((f) => f.genre === cat).length
  }

  return (
    <div className="bg-[#0f0e0c] min-h-screen flex flex-col font-sans">
      {/* Hero Section (Dark) */}
      <section className="relative flex flex-col pt-12 pb-32">
        <div className="relative z-20 mb-32">
          <Nav />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex flex-col text-white">
          <div className="flex items-center gap-4 mb-10 text-white/50 text-xs font-sans tracking-[0.2em] uppercase">
            <div className="w-8 h-px bg-white/20"></div>
            <span>Index of Films</span>
          </div>

          <h1 
            className="text-6xl md:text-8xl lg:text-[9rem] font-normal tracking-tight leading-[0.9] mb-20"
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            Selected work.
          </h1>

          <div className="w-full h-px bg-white/10 mb-16"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-[600px] text-balance">
              Feature films, documentaries, and shorts marked by authenticity, compassion, and a preference for inclusive storytelling and natural landscapes.
            </p>
            <div className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium whitespace-nowrap">
              {films.length} FILMS <span className="mx-2">·</span> 1999—2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Light) */}
      <section className="bg-[#f5f4f0] text-[#1a1917] flex-1 pb-40">
        
        {/* Filter Nav */}
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 pt-20 mb-20 border-b border-black/10">
          <div className="flex flex-wrap gap-8 md:gap-12 pb-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group relative flex items-start gap-1 text-[10px] md:text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-black font-medium' : 'text-black/40 hover:text-black/70'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[8px] leading-none opacity-60">{getCount(cat)}</span>
                  
                  {/* Active/Hover Underline */}
                  <span 
                    className={`absolute -bottom-[25px] left-0 h-[2px] bg-[#9c6a46] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Film List */}
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredFilms.map((film, index) => (
            <div key={film.to} className={index === 0 ? 'md:col-span-2 md:max-w-4xl md:mx-auto w-full' : ''}>
              <FilmCard film={film} index={index} isFeatured={index === 0} />
            </div>
          ))}
        </div>

      </section>

      <div className="bg-[#f5f4f0]">
        {/* We keep the footer, but since the footer is black, it will contrast nicely at the bottom */}
        <Footer />
      </div>
    </div>
  )
}

function FilmCard({ film, index, isFeatured = false }: { film: (typeof films)[0], index: number, isFeatured?: boolean }) {
  return (
    <div className="flex flex-col group">
      <Link to={film.to} className="w-full overflow-hidden mb-6 block bg-[#e8e6e1]">
        <img
          src={film.thumb}
          alt={film.alt}
          className={`w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] ${
            isFeatured ? 'aspect-[21/9] md:aspect-[2.35/1]' : 'aspect-[4/3] md:aspect-[3/2]'
          }`}
        />
      </Link>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative">
        <Link to={film.to} className="inline-block relative self-start">
          <h2 
            className={`text-[#1a1917] font-normal tracking-tight leading-none mb-1 ${
              isFeatured ? 'text-4xl md:text-6xl lg:text-[5rem]' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            {film.title}
          </h2>
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-black/20 scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0" />
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-[#c99138] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
        </Link>
        
        <div className="flex items-center gap-4 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-black/40 font-medium mb-1">
          <span>{film.genre} FILM</span>
          <div className="w-6 h-px bg-black/20"></div>
          <span>{film.year}</span>
        </div>
      </div>
    </div>
  )
}
