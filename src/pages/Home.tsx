import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import heroImg from '../imports/hero-camera-hq.png'
import locationImg from '../imports/Emu_Runner-2533__1_.jpg'
import aboutImg from '../imports/Imogen_Thomas.jpeg'

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
        <div className="relative z-10 flex-1 flex flex-col items-center justify-end pb-40 gap-8">
          
          <div className="flex flex-col items-center gap-3">
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
          </div>

          <div className="flex items-center gap-4 mt-4">
            {[
              { id: 'fb', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              { id: 'tw', icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> },
              { id: 'yt', icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
              { id: 'ig', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> }
            ].map(social => (
              <a key={social.id} href="#" className="w-10 h-10 rounded-full border border-[#e9e6df]/60 flex items-center justify-center hover:bg-[#e9e6df] hover:text-[#1a1917] transition-colors text-[#e9e6df]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex flex-col items-center pb-10 gap-2">
          <span className="text-[#e9e6df]/60 text-[10px] tracking-[0.45em] uppercase font-sans">
            Scroll
          </span>
          <div className="w-px h-8 bg-[#e9e6df]/30 animate-pulse" />
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="bg-[#1a1917] text-[#e9e6df] py-20 lg:py-0">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row min-h-screen">
          
          {/* Image Left */}
          <div className="w-full lg:w-[45%] p-6 lg:p-16 flex items-center justify-center">
            <div className="w-full max-w-[500px] aspect-[4/5] relative overflow-hidden bg-[#111]">
              <img
                src={aboutImg}
                alt="Imogen Thomas portrait"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90"
              />
            </div>
          </div>
          
          {/* Content Right */}
          <div className="w-full lg:w-[55%] p-8 lg:p-20 flex flex-col justify-center">
            <div className="max-w-xl">
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
              <div className="grid grid-cols-3 gap-6 mb-16">
                <div>
                  <div className="text-4xl mb-3 font-bold" style={{ fontFamily: 'var(--font-hero)' }}>15</div>
                  <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-sans leading-relaxed font-bold">
                    Years<br />Directing
                  </div>
                </div>
                <div>
                  <div className="text-4xl mb-3 font-bold" style={{ fontFamily: 'var(--font-hero)' }}>40+</div>
                  <div className="text-white/40 text-[9px] tracking-[0.25em] uppercase font-sans leading-relaxed font-bold">
                    Brand & Agency<br />Clients
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
                className="inline-block text-[#e9e6df] text-[10px] tracking-[0.3em] uppercase font-sans hover:text-[#9c6a46] transition-colors font-medium"
              >
                Read the full story
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}
