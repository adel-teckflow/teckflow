import { Link } from 'react-router-dom'
import { Home, AlertCircle } from 'lucide-react'
import CustomCursor from '../components/common/CustomCursor'

export default function NotFound() {
  return (
    <div className="bg-black text-gray-200 min-h-screen flex items-center justify-center relative overflow-hidden">
      <CustomCursor />
      <div className="noise-overlay"></div>

      <div className="relative z-10 text-center px-4">
        {/* 404 Title */}
        <h1 className="text-[20vw] md:text-[15vw] font-black leading-none text-stroke-only hover:text-white transition-all duration-500 cursor-default select-none mb-8">
          404
        </h1>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center animate-float">
            <AlertCircle className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Page Introuvable
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-md mx-auto">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* CTA Button */}
        <Link to="/">
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-cyan-300 transition-colors duration-300 rounded-sm inline-flex items-center gap-3">
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </button>
        </Link>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 md:left-1/4 w-32 h-32 border border-white/10 rounded-full animate-float glass-panel"></div>
      <div
        className="absolute bottom-1/4 right-10 md:right-1/4 w-24 h-24 border border-white/10 rounded-full animate-float glass-panel"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/10 rounded-full animate-float glass-panel"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-gradient-to-r from-cyan-900/10 to-purple-900/10 blur-3xl pointer-events-none"></div>
    </div>
  )
}
