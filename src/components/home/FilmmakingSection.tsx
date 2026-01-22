import React, { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'
import ScrollReveal from '../animations/ScrollReveal'

const projects = [
  {
    id: '01',
    title: 'Neon Nights',
    category: 'Music Video',
    description: 'A cyberpunk odyssey featured in Rolling Stone.',
    color: 'from-purple-500 to-cyan-500'
  },
  {
    id: '02',
    title: 'Velocity',
    category: 'Commercial',
    description: 'High-octane automotive commercial for Porsche.',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: '03',
    title: 'Echoes',
    category: 'Short Film',
    description: 'Sci-fi thriller about memory reconstruction.',
    color: 'from-blue-500 to-indigo-500'
  }
]

const FilmmakingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (!containerRef.current) return

    const cards = cardsRef.current.filter(Boolean)
    
    // Staggered reveal based on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1
          }
        }
      )
    })
  }, [])

  return (
    <div ref={containerRef} className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tighter mb-6">
              FILM <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">PRODUCTION</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Cinematic storytelling crafted with precision. From concept to final cut, we deliver visual masterpieces.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project Visual */}
              <div className="w-full md:w-3/5 aspect-video relative group cursor-none overflow-hidden rounded-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Placeholder for Video/Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                   <div className="text-center">
                     <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-xl group-hover:border-white/50 transition-colors">
                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                     </div>
                     <span className="text-sm font-mono tracking-widest uppercase text-white/60">Watch Preview</span>
                   </div>
                </div>

                <div className="absolute inset-0 border border-white/10 rounded-lg" />
              </div>

              {/* Project Info */}
              <div className="w-full md:w-2/5 space-y-6">
                <span className="text-cyan-400 font-mono text-sm tracking tracking-widest">
                  {project.id} // {project.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold font-display">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-3 text-white group/btn">
                  <span className="text-sm font-bold tracking-widest uppercase border-b border-transparent group-hover/btn:border-red-500 transition-colors pb-1">
                    View Case Study
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilmmakingSection
