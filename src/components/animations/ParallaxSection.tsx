import { useRef, ReactNode } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number // Vitesse du parallax (ex: 0.5 pour plus lent, 1.5 pour plus rapide)
  className?: string
  direction?: 'vertical' | 'horizontal'
  rotate?: boolean // Ajouter un effet de rotation
}

/**
 * Composant ParallaxSection - Ajoute un effet de parallax fluide aux éléments
 * Utilise ScrollTrigger scrub pour synchroniser avec le scroll
 */
const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'vertical',
  rotate = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useGSAP(() => {
    if (!containerRef.current) return

    const yMove = direction === 'vertical' ? (speed - 1) * 100 : 0
    const xMove = direction === 'horizontal' ? (speed - 1) * 100 : 0
    
    const animation: gsap.TweenVars = {
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom', // Commence quand le haut de l'élément touche le bas du viewport
        end: 'bottom top',   // Finit quand le bas de l'élément touche le haut du viewport
        scrub: true,         // Synchronisé avec le scroll
      }
    }

    if (direction === 'vertical') {
      animation.yPercent = yMove
    } else {
      animation.xPercent = xMove
    }

    if (rotate) {
      animation.rotation = speed * 10
    }

    gsap.to(containerRef.current, animation)

  }, [speed, direction, rotate])

  return (
    <div ref={containerRef} className={`parallax-item will-change-transform ${className}`}>
      {children}
    </div>
  )
}

export default ParallaxSection
