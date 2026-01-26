

import React, { useRef } from "react"
import TiltCard from "../common/TiltCard"
import { Work } from "../../types"
import { useGSAP } from "../../hooks/useGSAP"
import { gsap, ScrollTrigger } from "../../utils/gsapConfig"
import ScrollReveal from "../animations/ScrollReveal"

// Utilitaire simple pour détecter le tactile/mobile
const isTouchDevice = () => 
  typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const HorizontalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !trackRef.current) return
    const track = trackRef.current

    // Calcul du décalage
    const getScrollAmount = () => {
      return -(track.scrollWidth - window.innerWidth)
    }

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1, // Valeur basse pour limiter le lag perçu
        invalidateOnRefresh: true,
        fastScrollEnd: true, // Optimisation pour éviter les calculs inutiles si on scroll vite
      },
    })

    ScrollTrigger.refresh()

    return () => {
      tween.kill()
    }
  }, [])

  const works: Work[] = [
    {
      id: "01",
      title: "iTiniTrip",
      img: "https://www.idhyha.com/assets/images/itini.png",
      category: "FinTech",
      performance: "+400% Transaction Volume",
      technologies: ["React", "Node.js", "Blockchain", "Web3"],
      timeline: "8 months",
      complexity: "High",
    },
    {
      id: "02",
      title: "Kulyx",
      img: "https://www.idhyha.com/assets/images/Kulyx.png",
      category: "Culinary",
      performance: "98.5% Diagnostic Accuracy",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      timeline: "12 months",
      complexity: "High",
    },
    {
      id: "03",
      title: "Influencer AI",
      img: "https://www.idhyha.com/assets/images/influencer.png",
      category: "Web",
      performance: "+220% Student Engagement",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "WebRTC"],
      timeline: "14 months",
      complexity: "High",
    },
    {
      id: "04",
      title: "NS Reveal",
      img: "https://www.idhyha.com/assets/images/NS.png",
      category: "Event Management",
      performance: "+250% Performance",
      technologies: ["Next.js", "Shopify Plus", "GraphQL", "Stripe"],
      timeline: "6 months",
      complexity: "Medium",
    },
    {
      id: "05",
      title: "Modus Chora",
      img: "https://www.idhyha.com/assets/images/modus.png",
      category: "Gaming/SaaS",
      performance: "+300% Performance",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      timeline: "10 months",
      complexity: "High",
    },
    {
      id: "06",
      title: "Venuelog",
      img: "https://www.idhyha.com/assets/images/venulog.png",
      category: "SaaS",
      performance: "+180% Performance",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      timeline: "8 months",
      complexity: "Medium",
    },
  ]

  const isMobile = isTouchDevice();

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-black overflow-hidden flex items-center"
    >
      {/* Optimisation : mix-blend-mode désactivé sur mobile car très gourmand */}
      <div className="absolute top-8 left-6 md:left-20 z-10 md:mix-blend-difference pointer-events-none">
        <ScrollReveal delay={0.2}>
          <span className="text-cyan-400 font-mono text-sm tracking-widest bg-black/80 md:bg-black/20 md:backdrop-blur-sm px-2 py-1 rounded border border-cyan-900/30">
            SELECTED WORKS {isMobile ? '(SWIPE)' : '(SCROLL)'}
          </span>
        </ScrollReveal>
      </div>

      <div
        ref={trackRef}
        // will-change-transform prépare le GPU
        className="flex gap-6 md:gap-12 px-6 md:px-20 items-center h-full will-change-transform"
      >
        {works.map((work) => (
          <div
            key={work.id}
            // Dimensions réduites sur mobile pour alléger le rendu
            className="w-[85vw] md:w-[60vw] h-[50vh] md:h-[60vh] flex-shrink-0 relative"
          >
            {/* Conditionnel : Pas de composant Tilt complexe sur mobile */}
            {isMobile ? (
              <div className="w-full h-full relative overflow-hidden border border-white/10 rounded-sm bg-gray-900 shadow-lg">
                <img
                  src={work.img}
                  alt={work.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <h3 className="text-4xl font-display font-bold text-white opacity-90">{work.id}</h3>
                  <p className="text-xl text-white font-mono mt-1">{work.title}</p>
                </div>
              </div>
            ) : (
              <TiltCard className="w-full h-full cursor-none group">
                <div className="relative w-full h-full overflow-hidden border border-white/10 rounded-sm bg-gray-900 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60 pointer-events-none"></div>
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105 will-change-transform"
                  />
                  <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                    <h3 className="text-6xl md:text-8xl font-display font-bold text-white mix-blend-overlay opacity-80">
                      {work.id}
                    </h3>
                    <p className="text-2xl text-white font-mono mt-2">
                      {work.title}
                    </p>
                  </div>
                </div>
              </TiltCard>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default HorizontalScrollSection