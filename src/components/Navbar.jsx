import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const activeClass = ({ isActive }) =>
    isActive
      ? "font-bold text-yellow-400  decoration-2"
      : "text-[#6B6B6B] hover:text-[#7BA3C0]"

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white"
      style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-black"
        >
         {/* <span className="text-yellow-400 text-5xl">T</span>ECKFLOW */} 
         <img src="/teckflow-black.png" alt="teckflow logo" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })}`
            }
          >
            SERVICES
          </NavLink>
          <a
            href="/#about"
            className="font-semibold text-[#6B6B6B] hover:text-[#7BA3C0] transition-all"
          >
            ABOUT
          </a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold transition-all ${activeClass({
                isActive,
              })}`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-transparent border-0 text-[#7BA3C0] hover:text-[#A899C9] transition-all"
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
        className={`md:hidden bg-gradient-to-b from-[#FAFAF8] to-[#C8E1F5] border-t border-[#E8E8E8] overflow-hidden transition-all duration-300 ${
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
            className="font-semibold text-[#6B6B6B] hover:text-[#7BA3C0] transition-all"
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
