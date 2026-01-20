import { useEffect, useRef, DependencyList } from 'react'
import { gsap } from '../utils/gsapConfig'

/**
 * Hook personnalisé pour GSAP avec cleanup automatique
 * @param callback - Fonction contenant les animations GSAP
 * @param deps - Dépendances du useEffect
 */
export const useGSAP = (
  callback: (context: gsap.Context) => void | (() => void),
  deps: DependencyList = []
) => {
  const contextRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    // Create GSAP context
    contextRef.current = gsap.context(() => {
      callback(contextRef.current!)
    })

    // Cleanup on unmount
    return () => {
      contextRef.current?.revert()
    }
  }, deps)

  return contextRef
}

/**
 * Hook pour animations au scroll avec ScrollTrigger
 */
export const useScrollAnimation = (
  selector: string,
  animation: gsap.TweenVars,
  scrollTriggerConfig?: ScrollTrigger.Vars
) => {
  useGSAP(() => {
    gsap.from(selector, {
      ...animation,
      scrollTrigger: {
        trigger: selector,
        ...scrollTriggerConfig,
      },
    })
  }, [selector])
}
