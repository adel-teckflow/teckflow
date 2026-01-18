import { useRef, ReactNode } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap, animationPresets } from '../../utils/gsapConfig'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  stagger?: number
  className?: string
}

/**
 * Composant ScrollReveal - Révèle les éléments au scroll
 * Utilise GSAP ScrollTrigger pour des animations fluides
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  stagger = 0,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const presetMap = {
      up: animationPresets.fadeInUp,
      down: animationPresets.fadeInDown,
      left: animationPresets.fadeInLeft,
      right: animationPresets.fadeInRight,
      scale: animationPresets.scaleIn,
      rotate: animationPresets.rotateIn,
    }

    const preset = presetMap[direction]

    gsap.from(containerRef.current, {
      ...preset,
      duration,
      delay,
      stagger,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    })
  }, [direction, delay, duration, stagger])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
