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
    <nav className="flex justify-center gap-8 pt-10 pb-4 relative z-20">
      {links.map(({ label, to }) => {
        const active = pathname === to || (to !== '/' && pathname.startsWith(to))
        return (
          <Link
            key={to}
            to={to}
            className={`text-xs md:text-sm tracking-[0.2em] font-light transition-all ${
              active ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
            style={{ fontFamily: 'var(--font-hero)' }}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
