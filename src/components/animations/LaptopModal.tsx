import { useRef } from 'react'
import { X, Cpu, Globe, Rocket } from 'lucide-react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'

interface LaptopModalProps {
  isOpen: boolean
  onClose: () => void
}

const LaptopModal = ({ isOpen, onClose }: LaptopModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!modalRef.current || !contentRef.current) return

    const tl = gsap.timeline()

    if (isOpen) {
      // Open animation
      tl.set(modalRef.current, { pointerEvents: 'auto' })
      
      tl.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      .fromTo(contentRef.current, 
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' },
        "-=0.1"
      )
      .fromTo('.modal-item', 
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.3 },
        "-=0.2"
      )

    } else {
      // Close animation
      tl.to(contentRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: 'power2.in'
      })
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          if (modalRef.current) {
            gsap.set(modalRef.current, { pointerEvents: 'none' })
          }
        }
      }, "-=0.2")
    }

  }, [isOpen])

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md opacity-0 pointer-events-none"
      onClick={onClose} // Backdop click to close
    >
      <div 
        ref={contentRef}
        className="relative w-full max-w-2xl mx-4 bg-gray-900/90 border border-cyan-500/30 rounded-lg shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
      >
        {/* Header/Decorations */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500" />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="modal-item mb-2 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
             <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">System Interface</span>
          </div>

          <h2 className="modal-item text-4xl md:text-5xl font-black text-white mb-6">
            DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CORE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="modal-item p-4 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors bg-black/20 group">
              <Cpu className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-1">Performance</h3>
              <p className="text-gray-400 text-sm">Optimisation temps réel et vitesse d'exécution maximale.</p>
            </div>
            
            <div className="modal-item p-4 border border-white/10 rounded-lg hover:border-purple-500/50 transition-colors bg-black/20 group">
              <Globe className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-1">Connexion</h3>
              <p className="text-gray-400 text-sm">Flux de données synchronisé et architecture distribuée.</p>
            </div>

            <div className="modal-item p-4 border border-white/10 rounded-lg hover:border-pink-500/50 transition-colors bg-black/20 group">
              <Rocket className="w-8 h-8 text-pink-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-1">Innovation</h3>
              <p className="text-gray-400 text-sm">Solutions d'avant-garde pour les défis de demain.</p>
            </div>
          </div>

          <div className="modal-item mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
            <div className="font-mono text-xs text-gray-500">
              STATUS: <span className="text-green-400">ONLINE</span>
            </div>
             <button className="px-6 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 rounded text-sm font-bold uppercase tracking-wide transition-colors border border-cyan-500/30">
              Initialiser
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaptopModal
