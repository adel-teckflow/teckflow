import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const activeClass = ({ isActive }) =>
    isActive
      ? "font-bold text-[#00d4ff] underline decoration-2"
      : "text-white/90 hover:text-[#00d4ff]"

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md"
      style={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-black text-[#ffcf33] hover:text-[#00d4ff] transition-colors drop-shadow-lg"
        >
          TECKFLOW
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })} hover:drop-shadow-lg`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })} hover:drop-shadow-lg`
            }
          >
            SERVICES
          </NavLink>
          <a
            href="/#about"
            className="font-semibold text-white/90 hover:text-[#00d4ff] transition-all hover:drop-shadow-lg"
          >
            ABOUT
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })} hover:drop-shadow-lg`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-0 text-[#00d4ff] hover:text-[#ffcf33] transition-all"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gradient-to-b from-[#072a4f] to-[#04203f] border-t border-[#00d4ff] overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({ isActive })}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({ isActive })}`
            }
          >
            SERVICES
          </NavLink>
          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="font-semibold text-white/90 hover:text-[#00d4ff] transition-all"
          >
            ABOUT
          </a>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({ isActive })}`
            }
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </header>
  )
}
