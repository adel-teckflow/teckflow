import { useEffect, useRef } from 'react'

/**
 * Composant CustomCursor - Curseur personnalisé avec effet de suivi fluide
 * Affiche un point central et un contour qui suit avec un délai
 * Masqué automatiquement sur mobile via CSS
 */
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (outlineRef.current) {
        outlineRef.current.animate(
          {
            transform: `translate3d(${x - 20}px, ${y - 20}px, 0)`,
          },
          { duration: 400, fill: 'forwards' }
        )
      }
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference">
      <div
        ref={cursorRef}
        className="w-2 h-2 bg-white rounded-full fixed top-0 left-0 -ml-1 -mt-1"
      />
      <div
        ref={outlineRef}
        className="w-10 h-10 border border-white/50 rounded-full fixed top-0 left-0 opacity-70"
      />
    </div>
  )
}

export default CustomCursor
