import { Link, useLocation } from 'react-router-dom'

const links = [
  { path: '/', label: 'Accueil' },
  { path: '/carte', label: 'Notre Carte' },
  { path: '/contact', label: 'Contact & Accès' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-display text-xl font-bold text-primary tracking-tight">
            どさん子
          </span>
          <span className="hidden sm:block text-xs font-ui tracking-[0.15em] uppercase text-secondary">
            Dosanko Larmen
          </span>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-ui font-medium tracking-wide transition-colors duration-200
                ${pathname === link.path
                  ? 'text-primary border-b border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-on-surface'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Adresse rapide desktop */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-ui text-on-surface-variant/60">
          <span>40 rue Sainte-Anne · Paris 2e</span>
        </div>

      </div>
    </nav>
  )
}