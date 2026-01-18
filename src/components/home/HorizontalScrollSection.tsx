import { useRef } from 'react'
import TiltCard from '../common/TiltCard'
import { Work } from '../../types'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap, ScrollTrigger } from '../../utils/gsapConfig'
import ScrollReveal from '../animations/ScrollReveal'

/**
 * Composant HorizontalScrollSection - Galerie de projets avec scroll horizontal
 * Utilise GSAP ScrollTrigger pour un effet fluide et performant
 */
const HorizontalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return

    const track = trackRef.current
    
    // Fonction pour calculer le décalage (doit être négatif pour aller vers la gauche)
    const getScrollAmount = () => {
      // scrollWidth inclut le padding et les gaps si flex
      const trackWidth = track.scrollWidth
      return -(trackWidth - window.innerWidth)
    }

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
    
    // Force refresh pour s'assurer que les dims sont correctes une fois chargé
    ScrollTrigger.refresh()
    
    return () => {
      tween.kill()
    }
  }, [])

  const works: Work[] = [
    {
      id: '01',
      title: 'Cyber Punk',
      img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '02',
      title: 'Neon Soul',
      img: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '03',
      title: 'Void Space',
      img: 'https://images.unsplash.com/photo-1534239697887-b08e5a7593c6?q=80&w=2540&auto=format&fit=crop',
    },
    {
      id: '04',
      title: 'Data Flow',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    },
    {
      id: '05',
      title: 'Neural Net',
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
    },
  ]

  return (
    <div ref={containerRef} className="relative h-screen bg-black overflow-hidden flex items-center">
      <div className="absolute top-8 left-12 md:left-20 z-10 mix-blend-difference">
        <ScrollReveal delay={0.2}>
          <span className="text-cyan-400 font-mono text-sm tracking-widest bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
            SELECTED WORKS (SCROLL)
          </span>
        </ScrollReveal>
      </div>

      <div
        ref={trackRef}
        className="flex gap-12 px-12 md:px-20 will-change-transform items-center"
      >
        {works.map((work) => (
          <TiltCard
            key={work.id}
            className="w-[80vw] md:w-[60vw] h-[60vh] flex-shrink-0 cursor-none group"
          >
            <div className="relative w-full h-full overflow-hidden border border-white/10 rounded-sm bg-gray-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-6xl md:text-8xl font-display font-bold text-white mix-blend-overlay opacity-80">
                  {work.id}
                </h3>
                <p className="text-2xl text-white font-mono mt-2">
                  {work.title}
                </p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScrollSection
