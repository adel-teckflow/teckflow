import { Code, Smartphone, Brain, Zap, Rocket, Video } from 'lucide-react'
import TiltCard from '../components/common/TiltCard'
import NavbarTeckflow from '../components/common/NavbarTeckflow' 
import Footer from '../components/home/Footer'
import { Service, ProcessStep } from '../types'
import ScrollReveal from '../components/animations/ScrollReveal'
import TextScramble from '../components/animations/TextScramble'
import ParallaxSection from '../components/animations/ParallaxSection'

const SERVICES: Service[] = [
  {
    title: 'Web Development',
    desc: 'Sites web performants et engageants, optimisés pour l\'expérience utilisateur.',
    icon: <Code className="w-12 h-12 text-cyan-400" />,
    details: ['Responsive Design', 'SEO Optimisé', 'Haute Performance'],
  },
  {
    title: 'App Development',
    desc: 'Applications mobiles iOS, Android et cross-platform haute performance.',
    icon: <Smartphone className="w-12 h-12 text-purple-400" />,
    details: ['Native & Cross-Platform', 'App Store Ready', 'Cloud Integration'],
  },
  {
    title: 'AI Integration',
    desc: 'Solutions intelligentes propulsées par l\'IA et le machine learning.',
    icon: <Brain className="w-12 h-12 text-pink-400" />,
    details: ['Machine Learning', 'NLP Solutions', 'Predictive Analytics'],
  },
  {
    title: 'Digital Transformation',
    desc: 'Modernisez votre entreprise avec des solutions technologiques de pointe.',
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    details: ['Process Automation', 'Cloud Migration', 'Data Analytics'],
  },
  {
    title: 'MVP Development',
    desc: 'Prototypage rapide et création de produits minimum viables.',
    icon: <Rocket className="w-12 h-12 text-green-400" />,
    details: ['Fast Development', 'Scalable Architecture', 'Market Ready'],
  },
  {
    title: 'Video Production',
    desc: 'Contenu vidéo professionnel, montage et cinématographie aérienne.',
    icon: <Video className="w-12 h-12 text-red-400" />,
    details: ['4K Recording', 'Professional Editing', 'Drone Footage'],
  },
]

const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVERY',
    desc: 'Comprendre vos objectifs et votre vision',
  },
  {
    step: '02',
    title: 'PLANNING',
    desc: 'Créer une feuille de route détaillée',
  },
  {
    step: '03',
    title: 'EXECUTION',
    desc: 'Construire avec précision et soin',
  },
  {
    step: '04',
    title: 'LAUNCH',
    desc: 'Déployer et célébrer le succès',
  },
]

export default function Services() {
  return (
    <div className="antialiased bg-black text-gray-200 min-h-screen">
      <div className="noise-overlay"></div>
      <NavbarTeckflow />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="relative z-10 text-center">
          <ScrollReveal direction="down">
            <div className="mb-4 inline-block px-4 py-1.5 border border-white/20 rounded-full glass-panel">
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                Nos Expertises
              </span>
            </div>
          </ScrollReveal>

          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight">
            <ScrollReveal>
              NOS <br />
            </ScrollReveal>
            <span className="text-stroke-only inline-block">
              <TextScramble text="SERVICES" delay={0.5} />
            </span>
          </h1>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Du développement web à l'intégration IA, nous livrons des solutions
              digitales innovantes qui stimulent la croissance.
            </p>
          </ScrollReveal>
        </div>

        {/* Floating elements */}
        <ParallaxSection className="absolute top-1/4 left-10 md:left-1/4 pointer-events-none" speed={0.4}>
          <div className="w-24 h-24 border border-white/10 rounded-full animate-float flex items-center justify-center glass-panel">
            <Code className="w-8 h-8 text-white/40" strokeWidth={1} />
          </div>
        </ParallaxSection>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <TiltCard className="group h-full">
                  <div className="h-full glass-panel p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition-all duration-300">
                    <div className="mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="space-y-2">
                      {service.details.map((detail, j) => (
                        <div
                          key={j}
                          className="flex items-center text-sm text-cyan-300"
                        >
                          <span className="mr-2">⚡</span> {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
              NOTRE <span className="text-stroke-only">PROCESSUS</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map((item, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1} direction="up">
                <TiltCard className="h-full">
                  <div className="glass-panel p-8 rounded-xl text-center hover:bg-white/10 transition-colors h-full flex flex-col items-center justify-center">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-cyan-900/20 to-purple-900/20 blur-3xl pointer-events-none"></div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal direction="scale">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-stroke-only hover:text-white transition-all duration-500 cursor-pointer">
              PRÊT À CONSTRUIRE ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Choisissez votre service et créons quelque chose d'incroyable
              ensemble.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} direction="up">
            <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-cyan-300 transition-colors duration-300 rounded-sm">
              Contactez-nous
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
