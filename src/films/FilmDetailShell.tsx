import { ReactNode, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export interface Testimonial {
  quote: string
  author: string
  role: string
}

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
  vimeoId?: string
  vimeoHash?: string
  testimonials?: Testimonial[]
}

export default function FilmDetailShell({
  title,
  category,
  heroImage,
  description,
  details,
  festivalBadges,
  youtubeId,
  vimeoId,
  vimeoHash,
  testimonials,
}: Props) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.state?.fromWork) {
      // If we came directly from the Work page, pop the history stack
      // This tells the browser to natively restore the exact scroll position!
      navigate(-1)
    } else {
      // Fallback if accessed directly (e.g. fresh tab)
      navigate('/work')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#2a2927] text-[#e9e6df] min-h-screen flex flex-col font-sans">
      <div className="relative z-50">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-32">
        {/* Title Block */}
        <section className="px-6 lg:px-16 pt-0 pb-6 md:pb-8 -mt-10 md:-mt-16">
          <div className="max-w-[1000px] mx-auto relative">
            
            {/* Back Button (Floating left) */}
            <Link 
              to="/work" 
              onClick={handleBack}
              className="absolute top-0 md:top-1 -left-6 md:-left-12 xl:-left-16 z-[60] text-[#e9e6df]/30 hover:text-[#c99138] transition-colors"
              title="Back to Film Projects"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </Link>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-2 md:mb-4 text-[#9c6a46] text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
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
              onClick={() => (youtubeId || vimeoId) && setIsVideoPlaying(true)}
            >
              {isVideoPlaying && (youtubeId || vimeoId) ? (
                youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : (
                  <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}${vimeoHash ? `?h=${vimeoHash}&` : '?'}autoplay=1&title=0&byline=0&portrait=0`}
                    title={title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                )
              ) : (
                <>
                  <img src={heroImage} alt="Video Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-[1px] border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c99138] group-hover:border-[#c99138] transition-all duration-500 bg-black/20 backdrop-blur-sm shadow-lg">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white/90 group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Scroll Indicator (Gradient Line) */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 100 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              className="mx-auto w-[1px] mt-8 md:mt-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent"
            />
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

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="px-6 lg:px-16 mt-20">
            <div className="max-w-[1000px] mx-auto border-t border-white/10 pt-16">
              <div className="flex items-center gap-4 mb-10 text-[#9c6a46] text-[10px] uppercase tracking-[0.2em]">
                <span>02</span>
                <div className="w-8 h-px bg-[#9c6a46]/40"></div>
                <span>Testimonials</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className="flex flex-col bg-[#22211f] p-6 lg:p-8 rounded-sm relative group border border-white/5"
                  >
                    <svg className="absolute top-6 left-6 w-8 h-8 text-white/5 -z-0 group-hover:text-[#c99138]/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-sm font-sans font-light leading-[1.8] text-[#e9e6df]/80 italic mb-8 flex-1 relative z-10 pt-2">
                      "{t.quote}"
                    </p>
                    <div className="mt-auto pt-5 border-t border-white/10 relative z-10">
                      <div className="text-[10px] font-medium tracking-widest text-[#e9e6df] uppercase mb-1">{t.author}</div>
                      <div className="text-[9px] text-[#9c6a46] tracking-widest uppercase leading-snug">{t.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

      </div>

      <Footer />
    </div>
  )
}
