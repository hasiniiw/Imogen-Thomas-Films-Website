import { motion } from "framer-motion"
import { Link, useNavigationType } from "react-router-dom"
import { useLayoutEffect } from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import emuRunnerImg from "../imports/emu-runner-work-2.jpg"
import quietHourImg from "../imports/quiet-hour-new.jpg"
import noSleepAmericaImg from "../imports/no-sleep-america-new.jpg"
import mixedBagImg from "../imports/mixed-bag-new.jpg"
import apyRangerImg from "../imports/apy-ranger-new.jpg"
import workHeroImg from "../imports/work-hero.jpg"

const films = [
  {
    title: "APY Ranger Visit",
    to: "/work/apy-ranger-visit",
    thumb: apyRangerImg,
    alt: "Gloved hands holding a small yellow and black frog",
    genre: "DOCUMENTARY",
    year: "2025",
  },
  {
    title: "Emu Runner",
    to: "/work/emu-runner",
    thumb: emuRunnerImg,
    alt: "Emu in Australian outback",
    genre: "FEATURE",
    year: "2018",
  },
  {
    title: "Mixed Bag",
    to: "/work/mixed-bag",
    thumb: mixedBagImg,
    alt: "Young girl and older woman sitting on grass",
    genre: "SHORT",
    year: "2008",
  },
  {
    title: "Quiet Hour",
    to: "/work/quiet-hour",
    thumb: quietHourImg,
    alt: "Girl and boy standing on a rooftop",
    genre: "SHORT",
    year: "2001",
  },
  {
    title: "No Sleep America",
    to: "/work/no-sleep-america",
    thumb: noSleepAmericaImg,
    alt: "Baker preparing dough",
    genre: "DOCUMENTARY",
    year: "1999",
  },
]

export default function Work() {
  const navType = useNavigationType()

  useLayoutEffect(() => {
    if (navType !== "POP") {
      document.documentElement.classList.remove("home-scroll-snap")
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }
  }, [navType])

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col min-h-[70vh] lg:min-h-[80vh] bg-[#141311] overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={workHeroImg}
            alt="Imogen Thomas work background"
            className="w-full h-full object-cover object-[center_20%] opacity-90 saturate-[1.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/80 via-[#141311]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] from-10% via-[#1a1917]/80 via-30% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#141311]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20">
          <Nav />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex-1 flex flex-col justify-center relative z-10 pt-14 md:pt-16 pb-4">
          <div className="w-full flex flex-col items-start text-left mb-2 md:mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[#e9e6df] text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase tracking-tight leading-[0.95] drop-shadow-lg"
              style={{ fontFamily: "var(--font-hero)" }}
            >
              Film
              <br />
              Projects
            </motion.h1>


          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/10 mb-4 md:mb-6" />
        </div>
      </section>

      {/* Main Content Area */}
      <section id="films" className="bg-[#1a1917] flex-1 pt-6 md:pt-8 pb-40">
        {/* Film List */}
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {films.map((film, index) => (
            <motion.div
              key={film.to}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.8,
                delay: (index % 2) * 0.1,
                ease: "easeOut",
              }}
            >
              <FilmCard film={film} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer showAcknowledgment={false} />
    </div>
  )
}

function FilmCard({ film }: { film: typeof films[0] }) {
  return (
    <div className="flex flex-col group">
      <Link
        to={film.to}
        state={{ fromWork: true }}
        className="w-full overflow-hidden mb-6 block bg-[#141311]"
      >
        <img
          src={film.thumb}
          alt={film.alt}
          className="w-full object-cover aspect-[4/3] md:aspect-[3/2] transition-transform duration-1000 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 relative">
        <Link
          to={film.to}
          state={{ fromWork: true }}
          className="inline-block relative self-start"
        >
          <h2
            className="text-[#e9e6df] group-hover:text-[#c99138] transition-colors duration-300 font-normal tracking-tight leading-none mb-1 text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-hero)" }}
          >
            {film.title}
          </h2>
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-white/20 scale-x-100 origin-left transition-transform duration-500 group-hover:scale-x-0" />
          <span className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-px bg-[#c99138] scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
        </Link>

        <div className="flex items-center gap-4 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium mb-1">
          <span className="group-hover:text-[#c99138]/90 transition-colors duration-300">{film.genre} FILM</span>
          <div className="w-6 h-px bg-white/20"></div>
          <span>{film.year}</span>
        </div>
      </div>
    </div>
  )
}
