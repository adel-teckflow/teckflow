import { useState, useEffect } from 'react'

/**
 * Hook personnalisé pour suivre la position du scroll
 * @returns {number} Position Y actuelle du scroll
 */
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}
