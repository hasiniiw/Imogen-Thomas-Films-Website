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
  description,
  details,
  festivalBadges,
  youtubeId,
}: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="bg-[#2a2927] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      <div className="relative z-50">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-32">
        {/* Title Block */}
        <section className="px-6 lg:px-16 pt-0 pb-4 -mt-2 md:-mt-4">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4 text-[#9c6a46] text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
                <span>{category}</span>
                <div className="w-12 h-px bg-[#9c6a46]/40"></div>
              </div>
              <h1
                className="text-[#e9e6df] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]"
                style={{ fontFamily: 'var(--font-hero)' }}
              >
                {title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Video Embed Section */}
        <section className="px-6 lg:px-16 pb-12">
          <div className="max-w-[1000px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative w-full aspect-video bg-[#141311] group cursor-pointer border border-[#2a2927]/10 overflow-hidden shadow-2xl"
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
                  <img src={heroImage} alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[1px] border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-white/80 transition-all duration-500 bg-black/20 backdrop-blur-sm shadow-lg">
                      <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-2 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute top-[50%] mt-16 md:mt-24 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/90 font-medium drop-shadow-md group-hover:text-white transition-colors">
                      Play Film
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-6 lg:px-16">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              
              {/* Left: Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="lg:col-span-7"
              >
                <div className="flex items-center gap-4 mb-8 text-[#9c6a46] text-[10px] uppercase tracking-[0.2em]">
                  <span>01</span>
                  <div className="w-8 h-px bg-[#9c6a46]/40"></div>
                  <span>The Film</span>
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-sans font-light leading-[1.8] text-[#e9e6df]/90 space-y-8">
                  {description}
                </div>

                {festivalBadges && (
                  <div className="mt-16 pt-16 border-t border-white/10 flex flex-wrap gap-8">
                    {festivalBadges}
                  </div>
                )}
              </motion.div>

              {/* Right: Details Table */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="lg:col-span-5"
              >
                <div className="flex flex-col">
                  {details.map((detail, i) => (
                    <div key={i} className="flex flex-col sm:flex-row py-5 border-t border-white/10 gap-2 sm:gap-8 hover:bg-white/5 transition-colors -mx-4 px-4 rounded-md">
                      <div className="sm:w-1/3 text-[10px] uppercase tracking-[0.2em] text-[#e9e6df]/50 pt-1">
                        {detail.label}
                      </div>
                      <div className="sm:w-2/3 text-sm font-sans text-[#e9e6df] leading-relaxed">
                        {detail.value}
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-white/10"></div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
