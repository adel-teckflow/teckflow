import { useRef, useEffect } from 'react'
import { gsap } from '../../utils/gsapConfig'

/**
 * Composant CursorFollower - Curseur avancé avec traînée de particules
 * Remplace le curseur par défaut par un système de particules interactif
 */
const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Masquer le curseur par défaut
    document.body.style.cursor = 'none'
    
    // Gérer les liens et boutons pour l'effet de hover
    const links = document.querySelectorAll('a, button, .cursor-pointer')
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(cursorRef.current, { scale: 0, duration: 0.2 })
        gsap.to(followerRef.current, { 
          scale: 3, 
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(0, 212, 255, 0.5)',
          mixBlendMode: 'difference',
          duration: 0.3 
        })
      })
      
      link.addEventListener('mouseleave', () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.2 })
        gsap.to(followerRef.current, { 
          scale: 1, 
          backgroundColor: 'transparent',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          mixBlendMode: 'normal',
          duration: 0.3 
        })
      })
    })

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Point central (réponse instantanée)
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0,
        overwrite: true
      })
      
      // Cercle suiveur (avec délai et élasticité)
      gsap.to(followerRef.current, {
        x: clientX - 16, // -16 pour centrer (w-8 = 32px / 2)
        y: clientY - 16,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto'
      })
    }
    
    window.addEventListener('mousemove', moveCursor)
    
    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block">
      {/* Point central */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Cercle suiveur */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full transition-colors duration-300"
      />
    </div>
  )
}

export default CursorFollower
