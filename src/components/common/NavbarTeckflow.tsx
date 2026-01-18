import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

/**
 * Composant NavbarTeckflow - Navigation minimaliste style Teckflow
 * Utilisé pour la page d'accueil avec effet mix-blend-difference
 */
const NavbarTeckflow = () => {
  return (
    <nav className="fixed w-full top-0 z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white backdrop-blur-sm">
      <Link to="/" className="text-xl font-bold font-display tracking-widest">
        Teckflow.
      </Link>
      <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
        {[
          { name: 'Index', path: '/' },
          { name: 'Work', path: '/services' },
          { name: 'About', path: '/#about' },
          { name: 'Contact', path: '/contact' },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            [{item.name}]
          </NavLink>
        ))}
      </div>
      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  )
}

export default NavbarTeckflow
