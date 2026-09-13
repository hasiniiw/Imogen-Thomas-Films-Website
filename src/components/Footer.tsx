import { Link } from 'react-router-dom'

export default function Footer() {
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
