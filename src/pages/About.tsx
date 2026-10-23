import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import aboutImg from '../imports/about-hero-2.jpg'
import bts1 from '../imports/bts-1.jpg'
import bts2 from '../imports/bts-2.jpg'
import bts3 from '../imports/bts-3.jpg'
import bts4 from '../imports/bts-4.jpg'

const BTS_IMAGES = [
  { src: bts1, alt: 'Crew filming emus' },
  { src: bts2, alt: 'Crew filming with children on location' },
  { src: bts3, alt: 'Director and crew member outdoors' },
  { src: bts4, alt: 'Crew filming on a hill' },
]

const AWARDS = [
  {
    film: 'Mixed Bag',
    award: 'Best Female Actress',
    festival: 'Show Me A Film, New Zealand',
    status: 'Winner',
  },
  {
    film: 'Emu Runner',
    award: 'Peer Award for Best Independent Film',
    festival: 'Gold Coast Film Festival',
    status: 'Winner',
  },
  {
    film: 'Mixed Bag',
    award: 'Gold Award',
    festival: 'Australian Cinematographers Society (ACSA)',
    status: 'Winner',
  },
  {
    film: 'APY Ranger Visit',
    award: 'Best Documentary Award',
    festival: 'Heart of Gold Film Festival',
    status: 'Finalist',
  },
  {
    film: 'Mixed Bag',
    award: 'Wasserman & King Award',
    festival: 'First Run Film Festival, NYU',
    status: 'Finalist',
  },
  {
    film: 'Emu Runner',
    award: 'Best Indie Film',
    festival: 'AACTA Awards',
    status: 'Nominated',
  },
  {
    film: 'Emu Runner',
    award: "Grolsch People's Choice Award",
    festival: 'Toronto International Film Festival',
    status: 'Nominated',
  },
]

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0)

  const advanceImage = () => {
    setCurrentIdx((prev) => (prev + 1) % BTS_IMAGES.length)
  }

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      {/* Hero */}
      <section className="relative flex flex-col min-h-[70vh] lg:min-h-[80vh] overflow-hidden bg-[#141311]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="Imogen Thomas background"
            className="w-full h-full object-cover object-center opacity-90 saturate-[1.25]"
          />
          {/* Sky enhancement overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-sky-500/30 via-transparent to-transparent mix-blend-overlay pointer-events-none" />
          {/* Gradients to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141311]/80 via-[#141311]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] from-10% via-[#1a1917]/80 via-30% to-transparent pointer-events-none" />
          {/* Darken top right for nav readability */}
          <div className="absolute inset-0 bg-gradient-to-bl from-[#141311]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20">
          <Nav />
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex-1 flex flex-col justify-center relative z-10 pt-14 md:pt-16 pb-4">
          
          <div className="w-full flex flex-col items-start text-left mb-8 md:mb-10">
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
               className="text-[#e9e6df] text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase tracking-tight leading-[0.95] drop-shadow-lg" 
               style={{ fontFamily: 'var(--font-hero)' }}
             >
               About<br/>Imogen
             </motion.h1>
          </div>
          
          {/* Divider Line */}
          <div className="w-full h-px bg-white/10 mb-4 md:mb-6" />
        </div>

      </section>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 pt-4 md:pt-6 pb-20 lg:pb-24 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Biography */}
        <div className="w-full lg:w-[55%]">

          <div className="text-[#e9e6df]/90 text-[13.5px] md:text-[15px] font-normal leading-[1.75] space-y-6 pr-0 lg:pr-12">
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Imogen's work spans feature films, short fiction, and documentaries—each marked by authenticity, compassion, and a deep commitment to inclusive storytelling.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            >
              Thomas recently directed the short documentary <em className="text-white font-semibold not-italic tracking-wide">APY Ranger Visit</em>, which shines a light on vital conservation efforts to protect critically endangered frog species in the Snowy Mountains region of New South Wales. The film continues her tradition of using cinema to spotlight underrepresented voices and urgent environmental issues.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Her debut feature film, <em className="text-white font-semibold not-italic tracking-wide">Emu Runner</em>, premiered at the prestigious Toronto International Film Festival in 2018 and went on to screen at more than twenty international festivals. It received widespread critical acclaim, winning the Best Independent Film Award at the Gold Coast Film Festival and earning a 2019 AACTA nomination for Best Independent Film.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              A graduate of New York University's renowned Tisch School of the Arts, Thomas honed her craft across all aspects of filmmaking. Her thesis film, <em className="text-white font-semibold not-italic tracking-wide">Mixed Bag</em>, premiered at the Montreal World Film Festival and was screened at festivals worldwide. It received a Gold Award from the Australian Cinematographers Society and was a finalist for both the Wasserman and King Awards at NYU's First Run Film Festival in New York and Los Angeles.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Thomas also holds a First-Class Honours BA in Drama from Flinders University in South Australia and has an extensive background in set and costume design for theatre—an experience that enriches the visual depth of her screen work.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Throughout her career, Thomas has worked with both trained actors and first-time performers, drawing out deeply authentic and resonant performances. Her approach is grounded in collaboration and a commitment to creating safe, inclusive, and accessible work environments for all.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Carousel & Extra Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full lg:w-[45%] flex flex-col gap-12"
        >
          
          <div className="lg:sticky lg:top-12">

            {/* Image Box: Changes on Hover and Stays */}
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 mb-8">
              <div
                className="overflow-hidden bg-black aspect-[4/3] md:aspect-[3/2] relative group cursor-pointer"
                onMouseEnter={advanceImage}
                onClick={advanceImage}
              >
                {BTS_IMAGES.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className={`w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out group-hover:scale-105 ${
                      i === currentIdx
                        ? 'opacity-90 z-10'
                        : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  />
                ))}
              </div>

              {/* Dots to manually change image */}
              <div className="flex justify-center items-center gap-1 mt-4">
                {BTS_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className="p-1 cursor-pointer group/dot flex items-center justify-center"
                    aria-label={`Show photo ${i + 1}`}
                  >
                    <span
                      className={`h-1 rounded-full transition-all duration-300 block ${
                        i === currentIdx
                          ? 'bg-[#9c6a46] w-3.5'
                          : 'bg-white/20 group-hover/dot:bg-white/50 w-1'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-[#141311] border border-white/5 p-6 md:p-8 flex flex-col gap-4">
              <h3 className="text-[#e9e6df] uppercase tracking-widest text-[11px] font-bold mb-1">Education</h3>
              <ul className="text-[#e9e6df]/90 text-[14px] space-y-4 font-normal">
                <li className="flex gap-4">
                  <span className="text-[#9c6a46] shrink-0 mt-0.5">—</span>
                  <div className="space-y-0.5">
                    <p className="font-medium text-white text-[14px]">Masters of Fine Arts</p>
                    <p className="text-white/60 text-[13px]">New York University, Tisch School of Arts</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#9c6a46] shrink-0 mt-0.5">—</span>
                  <div className="space-y-0.5">
                    <p className="font-medium text-white text-[14px]">Bachelor of Arts Honours Degree (First Class) Drama</p>
                    <p className="text-white/60 text-[13px]">Flinders University, SA</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>

      {/* ── Awards Section ── */}
      <section className="bg-[#141311] border-t border-white/5 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16">
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9c6a46]" />
            <h2
              className="text-[#e9e6df] text-xs font-bold uppercase tracking-[0.25em]"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Awards
            </h2>
          </div>

          {/* Clean 2-Column Minimal List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {AWARDS.map((item, i) => (
              <div
                key={i}
                className="py-3 border-b border-white/5 flex items-start justify-between gap-4"
              >
                <div className="space-y-0.5 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 text-[13.5px]">
                    <span className="font-semibold text-white">{item.film}</span>
                    <span className="text-[#9c6a46] text-xs">—</span>
                    <span className="text-[#e9e6df]/90">{item.award}</span>
                  </div>
                  <p className="text-white/45 text-xs font-normal">
                    {item.festival}
                  </p>
                </div>

                <span
                  className={`text-[9px] tracking-[0.18em] uppercase font-bold px-2 py-0.5 rounded-xs shrink-0 border ${
                    item.status === 'Winner'
                      ? 'text-[#e6b17e] bg-[#8f5a31]/20 border-[#8f5a31]/40'
                      : 'text-white/55 bg-white/5 border-white/10'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
