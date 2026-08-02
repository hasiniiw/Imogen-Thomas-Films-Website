import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const HEADSHOT = 'https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&h=650&fit=crop&auto=format'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', subject: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="bg-[#3d3c3a] text-white min-h-screen flex flex-col">
      <Nav />

      <section className="flex-1 flex flex-col items-center px-6 py-10 bg-[#3d3c3a]">
        <h1
          className="text-white text-5xl md:text-7xl font-display font-extrabold uppercase tracking-wide mb-12 text-center"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
        >
          Contact
        </h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full max-w-3xl">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="overflow-hidden bg-[#2a2927] w-52 md:w-64 mx-auto md:mx-0">
              <img
                src={HEADSHOT}
                alt="Imogen Thomas — black and white portrait"
                className="w-full object-cover grayscale"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>

          {/* Form */}
          <form className="flex-1 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-white/30 text-white text-sm font-sans font-light px-3 py-2 placeholder-white/40 focus:outline-none focus:border-white/60"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-white/30 text-white text-sm font-sans font-light px-3 py-2 placeholder-white/40 focus:outline-none focus:border-white/60"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border border-white/30 text-white text-sm font-sans font-light px-3 py-2 placeholder-white/40 focus:outline-none focus:border-white/60"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="bg-transparent border border-white/30 text-white text-sm font-sans font-light px-3 py-2 placeholder-white/40 focus:outline-none focus:border-white/60"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="bg-transparent border border-white/30 text-white text-sm font-sans font-light px-3 py-2 placeholder-white/40 focus:outline-none focus:border-white/60 resize-none"
            />
            <button
              type="submit"
              className="self-start border border-white/60 text-white text-[11px] tracking-[0.25em] uppercase font-sans px-5 py-2 hover:bg-white hover:text-[#3d3c3a] transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
