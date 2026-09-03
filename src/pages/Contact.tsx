import { useState } from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import contactPortrait from '../imports/contact-portrait.jpg'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-[#1a1917] text-[#e9e6df] h-screen overflow-hidden flex flex-col font-sans relative">
      
      {/* The Navigation bar must sit above everything */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="flex-1 flex flex-col md:flex-row h-full">
        
        {/* Left Column: Portrait Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden md:block w-1/2 lg:w-[45%] h-full relative"
        >
          <img 
            src={contactPortrait} 
            alt="Imogen Thomas portrait" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          {/* Gradient to smooth the edge into the form background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1917] pointer-events-none" />
        </motion.div>

        {/* Right Column: Contact Form */}
        <section className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 relative h-full pt-16 md:pt-0 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="w-full max-w-[600px] flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4 text-[#9c6a46] text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
              <div className="w-8 md:w-12 h-px bg-[#9c6a46]/40"></div>
              <span>Let's tell a story</span>
            </div>

            <h1
              className="text-[#e9e6df] text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase tracking-tight leading-[0.95] drop-shadow-lg mb-10"
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              Contact
            </h1>
            
            <div className="w-full">
              <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col xl:flex-row gap-4 xl:gap-5">
                  <div className="flex-1 relative group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-[#e9e6df] text-sm font-sans font-light px-0 py-2 placeholder-white/40 focus:outline-none transition-colors peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9c6a46] transition-all duration-300 peer-focus:w-full"></div>
                  </div>
                  <div className="flex-1 relative group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-white/20 text-[#e9e6df] text-sm font-sans font-light px-0 py-2 placeholder-white/40 focus:outline-none transition-colors peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9c6a46] transition-all duration-300 peer-focus:w-full"></div>
                  </div>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 text-[#e9e6df] text-sm font-sans font-light px-0 py-2 placeholder-white/40 focus:outline-none transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9c6a46] transition-all duration-300 peer-focus:w-full"></div>
                </div>
                
                <div className="relative group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 text-[#e9e6df] text-sm font-sans font-light px-0 py-2 placeholder-white/40 focus:outline-none transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9c6a46] transition-all duration-300 peer-focus:w-full"></div>
                </div>
                
                <div className="relative group mt-2">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 text-[#e9e6df] text-sm font-sans font-light px-0 py-2 placeholder-white/40 focus:outline-none resize-none transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#9c6a46] transition-all duration-300 peer-focus:w-full"></div>
                </div>
                
                <button
                  type="submit"
                  className="mt-6 w-full md:w-auto min-w-[200px] border border-white/20 text-[#e9e6df] text-[11px] tracking-[0.25em] uppercase font-sans font-medium px-8 py-4 hover:bg-[#9c6a46] hover:border-[#9c6a46] hover:text-white transition-all duration-300 self-start"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Small Footer specific to Contact Page */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full bg-[#8f5a31] py-2 md:py-3 px-6 md:px-12 flex justify-between items-center text-[8px] md:text-[10px] tracking-[0.2em] uppercase text-white/90 z-50"
      >
        <span>© 2026 Imogen Thomas</span>
        <span className="hidden sm:block">Director, Screenwriter & Filmmaker</span>
      </motion.div>
    </div>
  )
}
