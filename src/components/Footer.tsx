import { Link } from 'react-router-dom'

interface FooterProps {
  showAcknowledgment?: boolean
}

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer({ showAcknowledgment = true }: FooterProps) {
  if (!showAcknowledgment) {
    return (
      <footer className="bg-[#8f5a31] pt-16 md:pt-24 pb-8 md:pb-10 px-6 lg:px-16 text-white">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
          {/* Left: Copyright */}
          <span className="font-medium text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-sans text-white/95">
            © 2026 Imogen Thomas
          </span>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-5 sm:gap-6 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-sans text-white/80">
            {FOOTER_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white/40"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-[#8f5a31] pt-10 md:pt-14 pb-8 md:pb-12 px-6 lg:px-16 text-white">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-10 md:gap-12">
        {/* Acknowledgment of Country */}
        <div className="max-w-[640px]">
          <p className="text-white/80 text-[12px] md:text-[13px] leading-relaxed font-sans font-light text-left">
            I acknowledge the Ngunnawal and Ngambri peoples, the Traditional Custodians of the Kamberri/Canberra region,
            and recognise their continuous connection to culture, community and country.
          </p>
        </div>

        {/* Bottom Bar: Copyright on Left, Links on Right */}
        <div className="pt-6 md:pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
          {/* Left: Copyright */}
          <span className="font-medium text-[10px] md:text-[11px] tracking-[0.22em] uppercase font-sans text-white/95">
            © 2026 Imogen Thomas
          </span>

          {/* Right: Quick Links */}
          <div className="flex items-center gap-5 sm:gap-6 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-sans text-white/80">
            {FOOTER_LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="hover:text-white transition-colors pb-0.5 border-b border-transparent hover:border-white/40"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
