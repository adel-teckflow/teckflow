/**
 * Composant Marquee - Texte défilant horizontal infini
 * Affiche un bandeau avec animation de défilement continue
 */
const Marquee = () => {
  return (
    <div className="py-8 bg-cyan-400 text-black overflow-hidden rotate-1 scale-105 my-12 border-y-4 border-black">
      <div className="whitespace-nowrap flex animate-scroll-text font-black text-4xl uppercase font-display">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-8">
            Innovation • Design • Code • Future •{' '}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
