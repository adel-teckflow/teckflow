import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Composant ScrollToTop - Remonte en haut de page à chaque changement de route
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
