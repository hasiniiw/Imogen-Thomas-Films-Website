import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import heroImg from '../imports/Emu_Runner-2533__1_.jpg'
import locationImg from '../imports/untitled-3031.jpg'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      if (heroRef.current.getBoundingClientRect().bottom > 0) {
        setParallaxY(window.scrollY * 0.2)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden flex flex-col">
        {/* Image scaled up so it stays full-bleed as it parallax-drifts while scrolling */}
        <div
          className="absolute inset-0 bg-[#1a1917]"
          style={{
            transform: `scale(1.2) translateY(${parallaxY}px)`,
            transformOrigin: 'center center',
            willChange: 'transform',
          }}
        >
          <img
            src={heroImg}
            alt="Two people sitting by a campfire at night in the Australian outback"
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.88 }}
          />
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/55 pointer-events-none" />

        {/* Nav */}
        <div className="relative z-10">
          <Nav />
        </div>

        {/* Title */}
        <div className="relative z-10 flex-1 flex items-center justify-center">
          <h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-wide text-center px-6 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
          >
            Imogen Thomas Films
          </h1>
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
      <div className="w-full bg-[#2a2927] overflow-hidden" style={{ height: 'clamp(280px, 38vw, 540px)' }}>
        <img
          src={locationImg}
          alt="Imogen Thomas standing on a street in a country town on location"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Bio section ── */}
      <section className="bg-[#525050] text-center px-6 py-16 md:py-24">
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
