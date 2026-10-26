import { Link } from 'react-router-dom'

interface FooterProps {
  showAcknowledgment?: boolean
}

export default function Footer({ showAcknowledgment = true }: FooterProps) {
  if (!showAcknowledgment) {
    return (
      <footer className="bg-[#8f5a31] pt-16 md:pt-24 pb-8 md:pb-10 px-6 lg:px-16 text-white">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
          {/* Left: Copyright and Role Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-sans text-white/90">
            <span className="font-medium">© 2026 Imogen Thomas</span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="text-white/70">Director, Screenwriter & Filmmaker</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-5 sm:gap-6 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-sans text-white/80">
            <Link
              to="/work"
              className="hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white/40"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white/40"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white/40"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-[#8f5a31] py-16 px-8 md:px-16 text-center">
      <div className="max-w-[800px] mx-auto w-full flex flex-col items-center gap-8">
        {/* Copyright and Role Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] tracking-[0.25em] uppercase font-sans text-white/90">
          <span>© 2026 Imogen Thomas</span>
          <span className="hidden sm:inline text-white/50">|</span>
          <span>Director, Screenwriter & Filmmaker</span>
        </div>

        {/* Acknowledgment of Country */}
        <p className="text-white/80 text-[11px] leading-relaxed font-sans font-normal max-w-[600px] text-balance">
          I acknowledge the Ngunnawal and Ngambri peoples, the Traditional Custodians of the Kamberri/Canberra region,
          and recognise their continuous connection to culture, community and country.
        </p>
      </div>
    </footer>
  )
}
