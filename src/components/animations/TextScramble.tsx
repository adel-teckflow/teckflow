import { useRef, useState } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'

interface TextScrambleProps {
  text: string
  className?: string
  duration?: number
  delay?: number
  scrambleSpeed?: number
  revealDelay?: number
  trigger?: boolean // Si true, l'animation se lance
  onComplete?: () => void
}

/**
 * Composant TextScramble - Effet de texte qui se déchiffre façon Matrix/Cyberpunk
 * Les caractères changent aléatoirement avant de se stabiliser sur le texte final
 */
const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  duration = 1.5,
  delay = 0,
  scrambleSpeed = 30,
  trigger = true,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState(text)
  const elementRef = useRef<HTMLDivElement>(null)
  
  // Caractères utilisés pour l'effet de brouillage
  const chars = '!<>-_\\/[]{}—=+*^?#________'

  useGSAP(() => {
    if (!trigger || !elementRef.current) return

    let iteration = 0
    let interval: ReturnType<typeof setInterval>

    // On commence avec l'opacité à 1 si ce n'est pas déjà le cas
    gsap.to(elementRef.current, { opacity: 1, duration: 0.1 })

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText((_prev) => 
          text
            .split('')
            .map((_letter, index) => {
              // Si on a dépassé l'itération pour cet index, on affiche la vraie lettre
              if (index < iteration) {
                return text[index]
              }
              // Sinon on affiche un caractère aléatoire
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')
        )

        // Vitesse de révélation
        iteration += 1 / 3

        // Fin de l'animation
        if (iteration >= text.length) {
          clearInterval(interval)
          setDisplayText(text) // S'assurer que le texte final est propre
          if (onComplete) onComplete()
        }
      }, scrambleSpeed)
    }

    // Délai initial avant de lancer le scramble
    const timer = setTimeout(startScramble, delay * 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [text, trigger, delay, duration, scrambleSpeed])

  return (
    <div 
      ref={elementRef} 
      className={`font-mono ${className}`}
      style={{ opacity: 0 }} // Commence invisible, GSAP le rend visible
    >
      {displayText}
    </div>
  )
}

export default TextScramble
