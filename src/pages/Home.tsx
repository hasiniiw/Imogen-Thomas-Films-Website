import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import heroImg from '../imports/hero-camera-hq.png'
import locationImg from '../imports/emu-feeding.jpg'
import aboutImg from '../imports/Imogen_Thomas.jpeg'
import quietHourImg from '../imports/quiet-hour.jpg'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      if (heroRef.current.getBoundingClientRect().bottom > 0) {
        setParallaxY(window.scrollY * 0.1)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex flex-col bg-[#1a1917]">
        {/* Image set to cover so it fills the screen completely */}
        <div
          className="absolute inset-0 bg-[#1a1917]"
          style={{
            transform: `translateY(${parallaxY}px)`,
            willChange: 'transform',
          }}
        >
          <img
            src={heroImg}
            alt="Film crew on location"
            className="w-full h-full object-cover object-[center_35%] brightness-[0.75]"
            style={{ opacity: 0.95 }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />

        {/* Nav */}
        <div className="relative z-10">
          <Nav />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <h1
              className="text-[#e9e6df] text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-wider text-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Imogen Thomas
            </h1>
            
            <h2 
              className="text-[#e9e6df]/95 text-sm md:text-lg lg:text-xl font-bold uppercase tracking-[0.2em] text-center" 
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Director <span className="mx-3 text-[#e9e6df]/60 font-light">|</span> Screenwriter <span className="mx-3 text-[#e9e6df]/60 font-light">|</span> Filmmaker
            </h2>
          </motion.div>


        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
          <span className="inline-block text-[#e9e6df]/60 text-[10px] tracking-[0.45em] uppercase font-sans translate-y-14">
            Scroll
          </span>
          <div className="w-px h-8 bg-transparent" />
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="bg-[#1a1917] text-[#e9e6df] py-20 lg:py-0">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row min-h-screen">
          
          {/* Image Left */}
          <div className="w-full lg:w-[45%] p-6 lg:p-16 flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[500px] aspect-[4/5] relative overflow-hidden bg-[#111]"
            >
              <img
                src={aboutImg}
                alt="Imogen Thomas portrait"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              />
            </motion.div>
          </div>
          
          {/* Content Right */}
          <div className="w-full lg:w-[55%] p-8 lg:p-20 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="max-w-xl"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase">
                <span>01</span>
                <div className="w-12 h-px bg-[#9c6a46]/40"></div>
                <span>About</span>
              </div>
              
              {/* Main Heading */}
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.2] font-bold uppercase tracking-tight" 
                style={{ fontFamily: 'var(--font-hero)' }}
              >
                Emotionally<br />
                Rich Storytelling.
              </h2>
              
              {/* Paragraphs */}
              <div className="text-white/70 text-[15px] font-sans font-light leading-[1.8] space-y-6 mb-12">
                <p>
                  Imogen Thomas is an Australian director and screenwriter known for her emotionally rich storytelling and collaborative filmmaking style. Her work spans feature films, short fiction, and documentaries—each marked by authenticity, compassion, and a deep commitment to inclusive storytelling.
                </p>
              </div>
              
              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-12"></div>
              
              {/* Stats */}
              <div className="flex gap-12 md:gap-20 mb-16">
                <div>
                  <div className="text-4xl mb-3 font-bold" style={{ fontFamily: 'var(--font-hero)' }}>15</div>
                  <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-sans leading-relaxed font-bold">
                    Years<br />Directing
                  </div>
                </div>
                <div>
                  <div className="text-4xl mb-3 font-bold" style={{ fontFamily: 'var(--font-hero)' }}>9</div>
                  <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-sans leading-relaxed font-bold">
                    Festival<br />Selections
                  </div>
                </div>
              </div>
              
              {/* CTA Link */}
              <Link 
                to="/about" 
                className="group relative inline-block text-[#e9e6df] text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#c99138] transition-colors font-medium pb-1"
              >
                Read the full story
                <span className="absolute left-0 bottom-0 w-full h-px bg-[#e9e6df]/30" />
                <span className="absolute left-0 bottom-0 w-full h-px bg-[#c99138] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
              </Link>
            </motion.div>
          </div>
          
        </div>
      </section>

      {/* ── Selected Works Section ── */}
      <section className="bg-[#141311] text-[#e9e6df] py-20 lg:py-0 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase">
                <span>02</span>
                <div className="w-12 h-px bg-[#9c6a46]/40"></div>
                <span>Work</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight" style={{ fontFamily: 'var(--font-hero)' }}>
                Featured Projects
              </h2>
            </div>
            
            <Link 
              to="/work" 
              className="group relative hidden md:inline-block text-[#e9e6df] text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#c99138] transition-colors font-medium pb-1"
            >
              View All Projects
              <span className="absolute left-0 bottom-0 w-full h-px bg-[#e9e6df]/30" />
              <span className="absolute left-0 bottom-0 w-full h-px bg-[#c99138] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/work/emu-runner" className="group block relative aspect-[4/3] overflow-hidden bg-black h-full">
                <img 
                  src={locationImg} 
                  alt="Emu Runner" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white" style={{ fontFamily: 'var(--font-hero)' }}>Emu Runner</h3>
                    <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-sans">Feature Film</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <Link to="/work/quiet-hour" className="group block relative aspect-[4/3] overflow-hidden bg-black h-full">
                <img 
                  src={quietHourImg} 
                  alt="Quiet Hour Project" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white" style={{ fontFamily: 'var(--font-hero)' }}>Quiet Hour</h3>
                    <p className="text-white/80 text-xs tracking-[0.2em] uppercase font-sans">Film</p>
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>

          {/* Mobile CTA */}
          <div className="mt-12 text-center md:hidden">
            <Link 
              to="/work" 
              className="group relative inline-block text-[#e9e6df] text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#c99138] transition-colors font-medium pb-1"
            >
              View All Projects
              <span className="absolute left-0 bottom-0 w-full h-px bg-[#e9e6df]/30" />
              <span className="absolute left-0 bottom-0 w-full h-px bg-[#c99138] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
