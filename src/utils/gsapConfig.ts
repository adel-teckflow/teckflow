import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
gsap.registerPlugin(ScrollTrigger)

// Default GSAP settings
gsap.defaults({
  ease: 'power2.out',
  duration: 0.8,
})

// ScrollTrigger defaults
ScrollTrigger.defaults({
  markers: false, // Set to true for debugging
  toggleActions: 'play none none reverse',
  start: 'top 80%',
  end: 'top 20%',
})

// Custom eases
export const customEases = {
  smooth: 'power2.inOut',
  elastic: 'elastic.out(1, 0.3)',
  bounce: 'bounce.out',
  expo: 'expo.out',
}

// Animation presets
export const animationPresets = {
  fadeIn: {
    opacity: 0,
    y: 30,
  },
  fadeInUp: {
    opacity: 0,
    y: 60,
  },
  fadeInDown: {
    opacity: 0,
    y: -60,
  },
  fadeInLeft: {
    opacity: 0,
    x: -60,
  },
  fadeInRight: {
    opacity: 0,
    x: 60,
  },
  scaleIn: {
    opacity: 0,
    scale: 0.8,
  },
  rotateIn: {
    opacity: 0,
    rotation: 10,
    scale: 0.9,
  },
}

// Refresh ScrollTrigger (call after DOM changes)
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}

// Kill all ScrollTriggers
export const killAllScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
}

export { gsap, ScrollTrigger }
