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
    <nav className="flex justify-center gap-8 py-5 relative z-20">
      {links.map(({ label, to }) => {
        const active = pathname === to || (to !== '/' && pathname.startsWith(to))
        return (
          <Link
            key={to}
            to={to}
            className={`text-4xl tracking-[0.18em] font-display font-normal transition-opacity ${
              active ? 'text-white' : 'text-white/60 hover:text-white/90'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
