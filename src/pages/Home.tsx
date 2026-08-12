import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import heroImg from '../imports/hero-camera-hq.png'
import locationImg from '../imports/Emu_Runner-2533__1_.jpg'

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/55 pointer-events-none" />

        {/* Nav */}
        <div className="relative z-10">
          <Nav />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-40 gap-8">
          
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-white text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-wider text-center drop-shadow-lg"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Imogen Thomas
            </h1>
            
            <h2 
              className="text-white/95 text-sm md:text-lg lg:text-xl font-bold uppercase tracking-[0.2em] text-center" 
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Director <span className="mx-3 text-white/60 font-light">|</span> Screenwriter <span className="mx-3 text-white/60 font-light">|</span> Filmmaker
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {[
              { id: 'fb', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              { id: 'tw', icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> },
              { id: 'yt', icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
              { id: 'ig', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> }
            ].map(social => (
              <a key={social.id} href="#" className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
          <span className="text-white/60 text-[10px] tracking-[0.45em] uppercase font-sans">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── Full-width horizontal image ── */}
      <div className="w-full bg-[#2a2927] overflow-hidden" style={{ height: 'clamp(260px, 32vw, 440px)' }}>
        <img
          src={locationImg}
          alt="Imogen Thomas standing on a street in a country town on location"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Bio section ── */}
      <section className="bg-[#525050] text-center px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <h2
          className="text-white text-3xl md:text-4xl font-display font-extrabold uppercase tracking-widest mb-6"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Imogen Thomas
        </h2>
        <p className="text-white/75 text-sm font-sans font-light leading-relaxed max-w-md mx-auto mb-8">
          Imogen Thomas is an Australian director and screenwriter known for her emotionally rich
          storytelling and collaborative filmmaking style. Her work spans feature films, short
          fiction, and documentaries—each marked by authenticity, compassion, and a deep commitment
          to inclusive storytelling.
        </p>
        <Link
          to="/about"
          className="inline-block border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase font-sans px-6 py-2 hover:bg-white hover:text-[#3d3c3a] transition-all duration-200"
        >
          Learn More
        </Link>
      </section>

      <Footer />
    </div>
  )
}
