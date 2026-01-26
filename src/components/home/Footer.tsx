import MagneticButton from '../animations/MagneticButton'
import ScrollReveal from '../animations/ScrollReveal'

import { useTranslation } from 'react-i18next'

/**
 * Composant Footer - Pied de page avec CTA et liens sociaux
 * Affiche un appel à l'action avec effet de texte stroke et les liens sociaux
 */
const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="scale" duration={1}>
          <div className="border-t border-white/10 mb-12"></div>
        </ScrollReveal>

        {/* CTA avec effet stroke */}
        <div className="group cursor-pointer">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-[12vw] leading-none font-black font-display text-center uppercase text-stroke-only transition-all duration-500 select-none hover:text-white/10">
              {t('footer.cta_line1')}
              <br />
              {t('footer.cta_line2')}
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex justify-center mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <MagneticButton strength={0.4}>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-300 transition-colors">
                  hello@Teckflow.studio
                </button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-24 text-gray-500 text-sm">
          <ScrollReveal delay={0.6}>
            <p>© {new Date().getFullYear().toString()} {t('footer.rights')}</p>
          </ScrollReveal>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            {['INSTAGRAM', 'TWITTER', 'LINKEDIN'].map((link, i) => (
              <ScrollReveal key={link} delay={0.7 + i * 0.1} direction="left">
                <a href="#" className="hover:text-white transition-colors relative group">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Lumière de fond Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-purple-900/30 to-transparent pointer-events-none z-0"></div>
    </footer>
  )
}

export default Footer
