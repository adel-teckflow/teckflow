import { useRef, useState } from 'react'
import { TiltCardProps } from '../../types'

/**
 * Composant TiltCard - Wrapper pour effet 3D tilt au survol
 */
const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 20
    const y = (e.clientY - top - height / 2) / 20

    setStyle({
      transform: `rotateY(${x}deg) rotateX(${-y}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out',
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
      transition: 'transform 0.5s ease-out',
    })
  }

  return (
    <div
      ref={ref}
      className={`perspective-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{ ...style, transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  )
}

export default TiltCard
