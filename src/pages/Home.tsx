import Hero from '../components/home/Hero'
import HorizontalScrollSection from '../components/home/HorizontalScrollSection' 
import ServicesSection from '../components/home/ServicesSection'
import Footer from '../components/home/Footer'
import Marquee from '../components/common/Marquee'
import NavbarTeckflow from '../components/common/NavbarTeckflow' 
import ScrollFlow from '../components/animations/ScrollFlow'
import { useEffect } from 'react'


// Déclaration pour lucide
declare global {
  interface Window {
    lucide?: {
      createIcons: () => void
    }
  }
}

/**
 * Page Home - Page d'accueil avec design Teckflow
 * Contient toutes les sections principales de la landing page
 */
export default function Home() {
  useEffect(() => {
    // Initialiser les icônes Lucide si nécessaire
    if (window.lucide) window.lucide.createIcons()
  }, [])

  return (
    <div className="antialiased bg-black text-gray-200 min-h-screen relative">
      <div className="noise-overlay"></div>
      <ScrollFlow />
      <NavbarTeckflow />
      <Hero />
      <Marquee />
      <HorizontalScrollSection />
      <ServicesSection />
      <Footer />
    </div>
  )
}
