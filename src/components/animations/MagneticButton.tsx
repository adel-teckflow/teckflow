import { useRef, ReactNode, MouseEvent } from 'react'
import { gsap } from '../../utils/gsapConfig'

interface MagneticButtonProps {
  children: ReactNode
  strength?: number
  className?: string
  onClick?: () => void
}

/**
 * Composant MagneticButton - Bouton qui suit magnétiquement la souris
 * Effet ultra-smooth avec GSAP
 */
const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength = 0.3,
  className = '',
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(buttonRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    })
  }

  const handleMouseEnter = () => {
    if (!buttonRef.current) return

    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeaveScale = () => {
    if (!buttonRef.current) return

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  return (
    <button
      ref={buttonRef}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        handleMouseLeave()
        handleMouseLeaveScale()
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MagneticButton
