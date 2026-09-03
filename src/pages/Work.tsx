import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import emuRunnerImg from '../imports/emu-runner-work-2.jpg'
import quietHourImg from '../imports/quiet-hour-work.jpg'
import noSleepAmericaImg from '../imports/no-sleep-america-work.jpg'
import mixedBagImg from '../imports/mixed-bag-work.jpg'
import apyRangerImg from '../imports/apy-ranger-work.jpg'
import aboutImg from '../imports/about-hero-2.jpg'
import workHeroImg from '../imports/work-hero.jpg'

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
    title: 'No Sleep America',
    to: '/work/no-sleep-america',
    thumb: noSleepAmericaImg,
    alt: 'Baker preparing dough',
    genre: 'DOCUMENTARY',
    year: '1999',
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
    thumb: mixedBagImg,
    alt: 'Young girl and older woman sitting on grass',
    genre: 'SHORT',
    year: '2008',
  },
  {
    title: 'APY Ranger Visit',
    to: '/work/apy-ranger-visit',
    thumb: apyRangerImg,
    alt: 'Gloved hands holding a small yellow and black frog',
    genre: 'DOCUMENTARY',
    year: '2025',
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
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col min-h-screen bg-[#141311] overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={workHeroImg}
            alt="Imogen Thomas work background"
            className="w-full h-full object-cover object-center opacity-90 saturate-[1.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/80 via-[#141311]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] from-10% via-[#1a1917]/80 via-30% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#141311]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20">
          <Nav />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex-1 flex flex-col justify-center relative z-10 pt-20">
          
          <div className="w-full flex flex-col items-start text-left mb-16">
            <div className="flex items-center gap-4 mb-10 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase">
              <div className="w-12 h-px bg-[#9c6a46]/40"></div>
              <span>Index of Films</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[#e9e6df] text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase tracking-tight leading-[0.95] drop-shadow-lg"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Selected<br/>Work
            </motion.h1>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/10 mb-10"></div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12"
          >
            <div className="text-[#9c6a46] text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-sans font-medium whitespace-nowrap">
              {films.length} FILMS <span className="text-white/30 mx-2">·</span> 1999—2025
            </div>
            <div className="w-full max-w-[500px]">
              <p className="text-white/60 text-sm md:text-[15px] font-light leading-[1.9] drop-shadow-sm">
                Feature films, documentaries, and shorts marked by authenticity, compassion, and a preference for inclusive storytelling and natural landscapes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="bg-[#1a1917] flex-1 pb-40">
        
        {/* Filter Nav */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 pt-20 mb-20 border-b border-white/10"
        >
          <div className="flex flex-wrap gap-8 md:gap-12 pb-6">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group relative flex items-start gap-1 text-[10px] md:text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                    isActive ? 'text-white font-medium' : 'text-white/40 hover:text-white/70'
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
        </motion.div>

        {/* Film List */}
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {filteredFilms.map((film, index) => (
            <motion.div 
              key={film.to} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index === 0 ? 0 : 0.1, ease: 'easeOut' }}
              className={index === 0 ? 'md:col-span-2 md:max-w-4xl md:mx-auto w-full' : ''}
            >
              <FilmCard film={film} index={index} isFeatured={index === 0} />
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  )
}

function FilmCard({ film, index, isFeatured = false }: { film: (typeof films)[0], index: number, isFeatured?: boolean }) {
  return (
    <div className="flex flex-col group">
      <Link to={film.to} className="w-full overflow-hidden mb-6 block bg-[#141311]">
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
            className={`text-[#e9e6df] font-normal tracking-tight leading-none mb-1 ${
              isFeatured ? 'text-4xl md:text-6xl lg:text-[5rem]' : 'text-3xl md:text-4xl lg:text-5xl'
            }`}
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            {film.title}
          </h2>
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-white/20 scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0" />
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-[#9c6a46] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
        </Link>
        
        <div className="flex items-center gap-4 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-1">
          <span>{film.genre} FILM</span>
          <div className="w-6 h-px bg-white/20"></div>
          <span>{film.year}</span>
        </div>
      </div>
    </div>
  )
}
