import { Monitor, PenTool, Box } from 'lucide-react'
import TiltCard from '../common/TiltCard'
import ScrollReveal from '../animations/ScrollReveal'
import ScanningGrid from '../animations/ScanningGrid'

/**
 * Composant ServicesSection - Grille Bento des services
 * Affiche les services dans un layout asymétrique avec effet glass morphism
 */
const ServicesSection = () => {
  return (
    <section className="py-32 px-6 container mx-auto relative overflow-hidden">
      {/* Grid Pattern Background */}
      <ScanningGrid />

      <div className="mb-20 relative z-10">
        <ScrollReveal direction="left">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Nos <span className="text-stroke-only">Services</span>
          </h2>
        </ScrollReveal>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px] relative z-10">
        {/* Big Item */}
        <div className="md:col-span-8 md:row-span-2 relative group h-full">
          <ScrollReveal direction="up" delay={0.2} className="h-full">
            <TiltCard className="h-full">
              <div className="h-full glass-panel p-10 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>
                <div>
                  <Monitor className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-4xl font-display font-bold">
                    Creative Development
                  </h3>
                </div>
                <p className="text-gray-400 max-w-md">
                  WebGL, Three.js, React. Nous repoussons les limites du navigateur
                  pour créer des expériences fluides et mémorables.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Side Items */}
        <div className="md:col-span-4 md:row-span-1 h-full">
          <ScrollReveal direction="right" delay={0.4} className="h-full">
            <TiltCard className="h-full">
              <div className="h-full glass-panel p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
                <PenTool className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-sm text-gray-500">
                  Interfaces centrées utilisateur avec une esthétique radicale.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        <div className="md:col-span-4 md:row-span-1 h-full">
          <ScrollReveal direction="right" delay={0.6} className="h-full">
            <TiltCard className="h-full">
              <div className="h-full glass-panel p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors flex flex-col justify-center">
                <Box className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">3D & Motion</h3>
                <p className="text-sm text-gray-500">
                  Animation fluide et assets 3D pour un impact visuel maximal.
                </p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
