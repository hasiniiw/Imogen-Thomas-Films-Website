import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import aboutImg from '../imports/about-hero-2.jpg'
import bts1 from '../imports/bts-1.jpg'
import bts2 from '../imports/bts-2.jpg'
import bts3 from '../imports/bts-3.jpg'
import bts4 from '../imports/bts-4.jpg'

const SLIDES = [
  {
    src: bts1,
    alt: 'Crew filming emus',
  },
  {
    src: bts2,
    alt: 'Crew filming with children on location',
  },
  {
    src: bts3,
    alt: 'Director and crew member outdoors',
  },
  {
    src: bts4,
    alt: 'Crew filming on a hill',
  },
]

export default function About() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % SLIDES.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const activeSlide = SLIDES[slide]

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      {/* Hero */}
      <section className="relative flex flex-col min-h-screen overflow-hidden bg-[#141311]">
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
        
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 flex-1 flex flex-col justify-center relative z-10 pt-20">
          
          <div className="w-full flex flex-col items-start text-left mb-16">
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
          <div className="w-full h-px bg-white/10 mb-10" />
          
          {/* Lower Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="w-full flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12"
          >
            <div className="text-[#9c6a46] text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-sans font-medium">
              Director <span className="text-white/30 mx-1 md:mx-2">·</span> Screenwriter <span className="text-white/30 mx-1 md:mx-2">·</span> Filmmaker
            </div>
          </motion.div>
          
        </div>
        

      </section>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 pt-24 pb-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Biography */}
        <div className="w-full lg:w-[55%]">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center gap-4 mb-16 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase"
          >
            <span>01</span>
            <div className="w-12 h-px bg-[#9c6a46]/40"></div>
            <span>Biography</span>
          </motion.div>

          <div className="text-[#e9e6df]/90 text-base md:text-[17px] font-normal leading-[1.8] space-y-8 pr-0 lg:pr-12">
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Imogen's work spans feature films, short fiction, and documentaries—each marked by authenticity, compassion, and a deep commitment to inclusive storytelling.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 25 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: 'easeOut' }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="w-full lg:w-[45%] flex flex-col gap-12"
        >
          
          <div className="lg:sticky lg:top-12">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase">
              <span>02</span>
              <div className="w-12 h-px bg-[#9c6a46]/40"></div>
              <span>Behind the Scenes</span>
            </div>

            {/* Carousel */}
            <div className="bg-[#111] border border-white/5 p-4 md:p-6 mb-8">
              <div className="overflow-hidden bg-black aspect-[4/3] relative group">
                <img 
                  src={activeSlide.src} 
                  alt={activeSlide.alt} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700" 
                />
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-3 mt-6">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === slide ? 'bg-[#9c6a46] w-4' : 'bg-white/20 hover:bg-white/50'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-[#141311] border border-white/5 p-8 flex flex-col gap-4">
              <h3 className="text-[#e9e6df] uppercase tracking-widest text-xs font-bold mb-4">Education & Honours</h3>
              <ul className="text-[#e9e6df]/90 text-[15px] space-y-4 font-normal">
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> NYU Tisch School of the Arts</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> Flinders University, First-Class Honours BA</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> Gold Award, Australian Cinematographers Society</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> 2019 AACTA Nominee</li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>

      <Footer />
    </div>
  )
}
