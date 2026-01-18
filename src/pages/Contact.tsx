import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { LiaLinkedin } from 'react-icons/lia'
import TiltCard from '../components/common/TiltCard'
import NavbarTeckflow from '../components/common/NavbarTeckflow' 
import Footer from '../components/home/Footer'
import Marquee from '../components/common/Marquee'
import { ContactFormData, SocialLink } from '../types'
import ScrollReveal from '../components/animations/ScrollReveal'
import TextScramble from '../components/animations/TextScramble'
import MagneticButton from '../components/animations/MagneticButton'
import ParallaxSection from '../components/animations/ParallaxSection'

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <LiaLinkedin />, label: 'LinkedIn' },
  { icon: <FaFacebook />, label: 'Facebook' },
  { icon: <FaTwitter />, label: 'Twitter' },
  { icon: <FaInstagram />, label: 'Instagram' },
]

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler un envoi
    setTimeout(() => {
      console.log('Form submitted:', form)
      setIsSubmitting(false)
      setIsSent(true)
      setForm({ name: '', email: '', message: '' })
      
      setTimeout(() => setIsSent(false), 3000)
    }, 1500)
  }

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
                Parlons de votre projet
              </span>
            </div>
          </ScrollReveal>

          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight">
            <ScrollReveal>
              CONTACTEZ <br />
            </ScrollReveal>
            <span className="text-stroke-only inline-block">
              <TextScramble text="NOUS" delay={0.5} />
            </span>
          </h1>

          <ScrollReveal direction="up" delay={0.4}>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Prêt à transformer vos idées en réalité ? Contactez-nous aujourd'hui
              pour discuter de votre vision.
            </p>
          </ScrollReveal>
        </div>

        {/* Floating element */}
        <ParallaxSection className="absolute top-1/4 right-10 md:right-1/4 pointer-events-none" speed={0.4}>
          <div className="w-24 h-24 border border-white/10 rounded-full animate-float flex items-center justify-center glass-panel">
            <Send className="w-8 h-8 text-white/40" strokeWidth={1} />
          </div>
        </ParallaxSection>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT: Contact Info */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <h2 className="text-4xl font-black mb-8">
                  INFORMATIONS DE <span className="text-cyan-400">CONTACT</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2} stagger={0.1}>
                <div className="space-y-8">
                  <TiltCard>
                    <div className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors">
                      <MapPin className="w-10 h-10 text-cyan-400 mb-4" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">
                        Adresse
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        RUE FRERES KADRI BATIMENT "A"
                        <br />
                        APPARTEMENT N°04
                        <br />
                        Hydra – Alger
                      </p>
                    </div>
                  </TiltCard>
    
                  <TiltCard>
                    <div className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors">
                      <Phone className="w-10 h-10 text-purple-400 mb-4" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">
                        Téléphone
                      </h3>
                      <p className="text-gray-400 text-lg">+213 560 19 56 12</p>
                    </div>
                  </TiltCard>
    
                  <TiltCard>
                    <div className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors">
                      <Mail className="w-10 h-10 text-pink-400 mb-4" />
                      <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">
                        Email
                      </h3>
                      <p className="text-gray-400 text-lg">marketing@teckflow.net</p>
                    </div>
                  </TiltCard>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: Form */}
            <div>
              <ScrollReveal direction="left">
                <h2 className="text-4xl font-black mb-8">
                  ENVOYEZ UN <span className="text-cyan-400">MESSAGE</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="scale">
                <div className="glass-panel p-10 rounded-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-lg bg-black/50 border-2 border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all placeholder-gray-500"
                        placeholder="Votre nom"
                      />
                    </div>
  
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-lg bg-black/50 border-2 border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all placeholder-gray-500"
                        placeholder="vous@exemple.com"
                      />
                    </div>
  
                    <div>
                      <label className="block text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full p-4 rounded-lg bg-black/50 border-2 border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-all resize-none placeholder-gray-500"
                        placeholder="Parlez-nous de votre projet..."
                      />
                    </div>
  
                    <MagneticButton strength={0.2} className="w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-8 py-4 bg-white text-black font-bold uppercase tracking-wide hover:bg-cyan-300 transition-all duration-300 rounded-sm flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                      >
                        {isSubmitting ? (
                          'Envoi en cours...'
                        ) : isSent ? (
                          'Message Envoyé !'
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-16 px-6">
        <Marquee />
        <div className="max-w-4xl mx-auto text-center mt-16">
          <ScrollReveal direction="up">
            <h3 className="text-2xl font-black text-cyan-400 mb-8 uppercase tracking-wider">
              Suivez-nous
            </h3>
          </ScrollReveal>
          
          <div className="flex justify-center gap-6">
            {SOCIAL_LINKS.map((social, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1} direction="scale">
                <MagneticButton strength={0.4}>
                  <button
                    className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-2xl text-white hover:text-cyan-400 hover:scale-125 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                </MagneticButton>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
