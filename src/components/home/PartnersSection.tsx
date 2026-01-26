import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'
import { useTranslation } from 'react-i18next'

// Partners list
const partnersData = [
  { name: "taslim", href: "https://taslim.dz" },
  { name: "master focus", href: "https://masterfocus.dz" },
  { name: "kulyx", href: "https://kulyx.com" },
  { name: "packflow", href: "https://packflow.dz" },
  { name: "idhyha", href: "https://www.teckflow.net" }
]

// Duplicate partners multiple times for infinite scroll effect
const partners = [...partnersData, ...partnersData, ...partnersData, ...partnersData]

const PartnersSection = () => {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const trackWidth = track.scrollWidth / 2 // Loop when half of content scrolls (because we have duplicates)

    // Infinite marquee animation
    const tl = gsap.to(track, {
      x: -trackWidth,
      ease: 'none',
      duration: 30, // Slower for better readability
      repeat: -1,
    })

    // Pause on hover
    track.parentElement?.addEventListener('mouseenter', () => tl.timeScale(0.2))
    track.parentElement?.addEventListener('mouseleave', () => tl.timeScale(1))

    return () => tl.kill()
  }, [])

  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
          {t('partners.heading')}
        </span>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Gradient Masks for fading edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-16 md:gap-32 w-max px-10 will-change-transform"
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center gap-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Placeholder Logo */}
              <a href={partner.href} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-white group-hover:to-white transition-all">
                {partner.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
