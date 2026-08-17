import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'WORK', to: '/work' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <nav className="w-full px-8 md:px-12 pt-10 pb-4 relative z-20 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0">
      {/* Logo (Left) */}
      <Link 
        to="/" 
        className="flex font-bold text-white uppercase tracking-[0.15em] leading-none text-[8px] md:text-[9px] hover:opacity-80 transition-opacity text-center items-center justify-center z-10 bg-black aspect-square px-2.5" 
        style={{ fontFamily: 'var(--font-hero)' }}
      >
        <div className="flex flex-col gap-[3px] pt-[2px] translate-x-[1px]">
          <span>Imogen</span>
          <span>Thomas</span>
          <span>Films</span>
        </div>
      </Link>

      {/* Navigation Links (Right aligned) */}
      <div className="flex gap-6 md:gap-8 z-0">
        {links.map(({ label, to }) => {
          const active = pathname === to || (to !== '/' && pathname.startsWith(to))
          return (
            <Link
              key={to}
              to={to}
              className={`text-[10px] md:text-xs tracking-[0.2em] font-light transition-all border-b pb-1 ${
                active 
                  ? 'text-white border-white/30' 
                  : 'text-white/70 border-transparent hover:text-[#9c6a46] hover:border-[#9c6a46]'
              }`}
              style={{ fontFamily: 'var(--font-hero)' }}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
