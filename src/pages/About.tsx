import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import aboutImg from '../imports/about-new.jpg'

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

  const activeSlide = SLIDES[slide]

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col bg-[#141311] overflow-hidden">
        <img
          src={aboutImg}
          alt="Imogen Thomas"
          className="absolute inset-0 w-full h-full object-cover contrast-125 opacity-40"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a1917] pointer-events-none" />
        <div className="relative z-10">
          <Nav />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pb-20">
          <h1
            className="text-[#e9e6df] text-5xl md:text-7xl font-bold uppercase tracking-wider text-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            About
          </h1>
          <h2 
            className="text-[#e9e6df]/80 text-xs md:text-sm uppercase tracking-[0.3em] text-center mt-6" 
          >
            The Director
          </h2>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-16 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Biography */}
        <div className="w-full lg:w-[55%]">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12 text-[#9c6a46] text-xs font-sans tracking-[0.2em] uppercase">
            <span>01</span>
            <div className="w-12 h-px bg-[#9c6a46]/40"></div>
            <span>Biography</span>
          </div>

          <div className="text-white/70 text-[15px] font-light leading-[1.9] space-y-8 pr-0 lg:pr-12">
            <p className="text-2xl text-[#e9e6df] font-medium leading-relaxed" style={{ fontFamily: 'var(--font-hero)' }}>
              Imogen Thomas is an Australian director and screenwriter known for her emotionally rich storytelling and collaborative filmmaking style.
            </p>
            <div className="w-full h-px bg-white/10 my-8"></div>
            <p>
              Her work spans feature films, short fiction, and documentaries—each marked by authenticity, compassion, and a deep commitment to inclusive storytelling.
            </p>
            <p>
              Thomas recently directed the short documentary <em className="text-white/90">APY Ranger Visit</em>, which shines a light on vital conservation efforts to protect critically endangered frog species in the Snowy Mountains region of New South Wales. The film continues her tradition of using cinema to spotlight underrepresented voices and urgent environmental issues.
            </p>
            <p>
              Her debut feature film, <em className="text-white/90">Emu Runner</em>, premiered at the prestigious Toronto International Film Festival in 2018 and went on to screen at more than twenty international festivals. It received widespread critical acclaim, winning the Best Independent Film Award at the Gold Coast Film Festival and earning a 2019 AACTA nomination for Best Independent Film.
            </p>
            <p>
              A graduate of New York University's renowned Tisch School of the Arts, Thomas honed her craft across all aspects of filmmaking. Her thesis film, <em className="text-white/90">Mixed Bag</em>, premiered at the Montreal World Film Festival and was screened at festivals worldwide. It received a Gold Award from the Australian Cinematographers Society and was a finalist for both the Wasserman and King Awards at NYU's First Run Film Festival in New York and Los Angeles.
            </p>
            <p>
              Thomas also holds a First-Class Honours BA in Drama from Flinders University in South Australia and has an extensive background in set and costume design for theatre—an experience that enriches the visual depth of her screen work.
            </p>
            <p>
              Throughout her career, Thomas has worked with both trained actors and first-time performers, drawing out deeply authentic and resonant performances. Her approach is grounded in collaboration and a commitment to creating safe, inclusive, and accessible work environments for all.
            </p>
          </div>
        </div>

        {/* Right Column: Carousel & Extra Info */}
        <div className="w-full lg:w-[45%] flex flex-col gap-12">
          
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
                  className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
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
              <ul className="text-white/60 text-sm space-y-4 font-light">
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> NYU Tisch School of the Arts</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> Flinders University, First-Class Honours BA</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> Gold Award, Australian Cinematographers Society</li>
                <li className="flex gap-4"><span className="text-[#9c6a46]">—</span> 2019 AACTA Nominee</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}
