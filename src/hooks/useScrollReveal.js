import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scroll-hidden')
          entry.target.classList.add('scroll-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      ref.current.classList.add('scroll-hidden')
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
