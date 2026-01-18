import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'

const ScanningGrid = ({ className = '' }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scanlineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!scanlineRef.current) return

    // Vertical scan
    gsap.to(scanlineRef.current, {
      top: '100%',
      duration: 3,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    })
    
    // Opacity pulse
    gsap.to(scanlineRef.current, {
      opacity: 0.8,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })

  }, [])

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{
          backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px),
                            linear-gradient(to bottom, #334155 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      ></div>

      {/* Scanning Line */}
      <div 
        ref={scanlineRef}
        className="absolute left-0 w-full h-2 bg-cyan-400 blur-md shadow-[0_0_30px_rgba(34,211,238,0.8)]"
        style={{ top: '0%' }}
      ></div>
      
      {/* Moving dots on grid intersections (optional complex effect) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[200vw] h-[200vw] absolute animate-spin-slow opacity-10"
           style={{
             background: 'radial-gradient(circle at center, transparent 30%, #4c1d95 70%)',
             transformOrigin: 'center'
           }}
        ></div>
      </div>
    </div>
  )
}

export default ScanningGrid
