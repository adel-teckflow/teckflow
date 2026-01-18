import { Zap } from 'lucide-react'
import TextScramble from '../animations/TextScramble'
import MagneticButton from '../animations/MagneticButton'
import ParallaxSection from '../animations/ParallaxSection'
import ScrollReveal from '../animations/ScrollReveal'
import CircuitBackground from '../animations/CircuitBackground'

/**
 * Composant Hero - Section principale de la page d'accueil
 * Affiche le titre principal, la description et les boutons CTA
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Animated */}
      <CircuitBackground />
      
      <div className="relative z-10 text-center">
        <ScrollReveal direction="down" duration={1} delay={0.2}>
          <div className="mb-4 inline-block px-4 py-1.5 border border-white/20 rounded-full glass-panel">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              Experience Digitale v2.0
            </span>
          </div>
        </ScrollReveal>

        <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight mix-blend-overlay opacity-90">
          <ScrollReveal delay={0.4}>
            FUTUR <br />
          </ScrollReveal>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient inline-block">
            <TextScramble 
              text="ESTHÉTIQUE" 
              delay={0.6} 
              scrambleSpeed={40}
            />
          </span>
        </h1>

        <ScrollReveal delay={0.8} direction="up">
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
            Nous créons des espaces numériques où la forme rencontre la fonction
            dans un chaos organisé.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1} direction="up">
          <div className="flex justify-center gap-6">
            <MagneticButton>
              <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wide hover:bg-cyan-300 transition-colors duration-300 rounded-sm">
                Explorer
              </button>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <button className="px-8 py-3 border border-white/30 hover:border-white text-white font-bold uppercase tracking-wide transition-colors duration-300 rounded-sm glass-panel">
                Showreel
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>

      {/* Elements décoratifs flottants avec Parallax */}
      <ParallaxSection 
        speed={0.5} 
        className="absolute top-1/4 left-10 md:left-1/4 z-0 pointer-events-none"
      >
        <div className="w-24 h-24 border border-white/10 rounded-full animate-float flex items-center justify-center glass-panel">
          <Zap className="w-8 h-8 text-white/40" strokeWidth={1} />
        </div>
      </ParallaxSection>

      <ParallaxSection 
        speed={1.5} 
        className="absolute bottom-1/4 right-10 md:right-1/4 z-0 pointer-events-none"
      >
        <div className="w-32 h-32 border border-white/10 rounded-full animate-float flex items-center justify-center glass-panel">
          <div className="w-full text-center text-xs text-white/30 font-mono">
            SCROLL
            <br />
            DOWN
          </div>
        </div>
      </ParallaxSection>
    </section>
  )
}

export default Hero
