import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface Detail {
  label: string
  value: string
}

interface Props {
  title: string
  category: string
  heroImage: string
  synopsis: string
  description: ReactNode
  details: Detail[]
  festivalBadges?: ReactNode
  youtubeId?: string
}

export default function FilmDetailShell({
  title,
  category,
  heroImage,
  synopsis,
  description,
  details,
  festivalBadges,
  youtubeId,
}: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      <div className="relative z-50">
        <Nav />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end pb-20 md:pb-32 px-6 lg:px-16 mt-[-100px]">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-60 saturate-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-[#1a1917]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1917]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-[1400px] w-full mx-auto"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-10 text-[#9c6a46] text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
            <span>{category}</span>
            <div className="w-12 h-px bg-[#9c6a46]/40"></div>
          </div>
          <h1
            className="text-[#e9e6df] text-6xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tight leading-[0.95] drop-shadow-lg mb-8"
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            {title}
          </h1>
          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-[600px] drop-shadow-sm">
            {synopsis}
          </p>
        </motion.div>
      </section>

      {/* Video Embed Section */}
      <section className="bg-[#1a1917] relative pb-20 pt-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div 
            className="relative w-full aspect-video bg-[#141311] group cursor-pointer border border-white/5 overflow-hidden"
            onClick={() => youtubeId && setIsVideoPlaying(true)}
          >
            {isVideoPlaying && youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <>
                <img src={heroImage} alt="Video Thumbnail" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 saturate-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[1px] border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-white/80 transition-all duration-500 bg-black/20 backdrop-blur-sm">
                    <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute top-[50%] mt-16 md:mt-24 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-white transition-colors">
                    Play Film
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cream Info Section */}
      <section className="bg-[#f4f2eb] text-[#2a2927] py-20 md:py-32 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Description */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-8 text-[#9c6a46] text-[10px] uppercase tracking-[0.2em]">
              <span>01</span>
              <div className="w-8 h-px bg-[#9c6a46]/40"></div>
              <span>The Film</span>
            </div>
            <div className="text-lg md:text-xl lg:text-2xl font-sans font-light leading-[1.8] text-[#2a2927]/90 space-y-8">
              {description}
            </div>

            {festivalBadges && (
              <div className="mt-16 pt-16 border-t border-[#d8d4cb] flex flex-wrap gap-8">
                {festivalBadges}
              </div>
            )}
          </div>

          {/* Right: Details Table */}
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              {details.map((detail, i) => (
                <div key={i} className="flex flex-col sm:flex-row py-5 border-t border-[#d8d4cb] gap-2 sm:gap-8">
                  <div className="sm:w-1/3 text-[10px] uppercase tracking-[0.2em] text-[#2a2927]/50 pt-1">
                    {detail.label}
                  </div>
                  <div className="sm:w-2/3 text-sm font-sans text-[#2a2927] leading-relaxed">
                    {detail.value}
                  </div>
                </div>
              ))}
              <div className="border-t border-[#d8d4cb]"></div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
