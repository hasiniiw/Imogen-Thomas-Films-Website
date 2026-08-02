import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const HERO = 'https://images.unsplash.com/photo-1717957389547-cec922a4182f?w=1800&h=700&fit=crop&auto=format'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1645760631046-bcd6bae5d640?w=700&h=500&fit=crop&auto=format',
    alt: 'Emus in Australian outback field',
  },
  {
    src: 'https://images.unsplash.com/photo-1663256936394-ee943b28b695?w=700&h=500&fit=crop&auto=format',
    alt: 'Alpine mountain landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1768885509990-1ebfd3e0257b?w=700&h=500&fit=crop&auto=format',
    alt: 'Filmmakers operating camera equipment',
  },
  {
    src: 'https://images.unsplash.com/photo-1783867174851-8b686b7e45ea?w=700&h=500&fit=crop&auto=format',
    alt: 'Film crew on set outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1519122767930-5aef208890ac?w=700&h=500&fit=crop&auto=format',
    alt: 'People around a campfire',
  },
]

export default function About() {
  const [slide, setSlide] = useState(1)

  const visibleSlides = [-1, 0, 1].map(
    (offset) => SLIDES[(slide + offset + SLIDES.length) % SLIDES.length]
  )

  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden flex flex-col bg-[#2a2927]">
        <img
          src={HERO}
          alt="Woman with emu in Australian outback"
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
            About
          </h1>
        </div>
      </section>

      {/* Carousel */}
      <div className="bg-[#525050] py-10 px-4">
        <div className="grid grid-cols-3 gap-1 max-w-4xl mx-auto overflow-hidden">
          {visibleSlides.map((s, i) => (
            <div key={i} className="overflow-hidden bg-[#3a3937] aspect-[4/3]">
              <img src={s.src} alt={s.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === slide ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Biography */}
      <section className="bg-[#525050] px-6 md:px-16 lg:px-32 pb-16 pt-4">
        <div className="max-w-2xl mx-auto text-white/80 text-sm font-sans font-light leading-[1.9] space-y-5">
          <p>
            Imogen Thomas is an Australian director and screenwriter known for her emotionally rich
            storytelling and collaborative filmmaking style. Her work spans feature films, short
            fiction, and documentaries—each marked by authenticity, compassion, and a deep
            commitment to inclusive storytelling.
          </p>
          <p>
            Thomas recently directed the short documentary <em>APY Ranger Visit</em>, which shines
            a light on vital conservation efforts to protect critically endangered frog species in the
            Snowy Mountains region of New South Wales. The film continues her tradition of using
            cinema to spotlight underrepresented voices and urgent environmental issues.
          </p>
          <p>
            Her debut feature film, <em>Emu Runner</em>, premiered at the prestigious Toronto
            International Film Festival in 2018 and went on to screen at more than twenty
            international festivals. It received widespread critical acclaim, winning the Best
            Independent Film Award at the Gold Coast Film Festival and earning a 2019 AACTA
            nomination for Best Independent Film.
          </p>
          <p>
            A graduate of New York University's renowned Tisch School of the Arts, Thomas honed her
            craft across all aspects of filmmaking. Her thesis film, <em>Mixed Bag</em>, premiered
            at the Montreal World Film Festival and was screened at festivals worldwide. It received
            a Gold Award from the Australian Cinematographers Society and was a finalist for both
            the Wasserman and King Awards at NYU's First Run Film Festival in New York and Los
            Angeles.
          </p>
          <p>
            Thomas also holds a First-Class Honours BA in Drama from Flinders University in South
            Australia and has an extensive background in set and costume design for theatre—an
            experience that enriches the visual depth of her screen work.
          </p>
          <p>
            Throughout her career, Thomas has worked with both trained actors and first-time
            performers, drawing out deeply authentic and resonant performances. Her approach is
            grounded in collaboration and a commitment to creating safe, inclusive, and accessible
            work environments for all.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
