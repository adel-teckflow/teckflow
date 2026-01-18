import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap, ScrollTrigger } from '../../utils/gsapConfig'

/**
 * ScrollFlow - Draws a continuous line connecting sections as user scrolls
 * Uses absolute positioning to span the entire page height
 */
const ScrollFlow = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const body = document.body
      const html = document.documentElement
      const height = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      )
      
      setDimensions({
        width: window.innerWidth,
        height: height
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    // Also update after a small delay to ensure content is rendered
    const timeout = setTimeout(updateDimensions, 1000)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearTimeout(timeout)
    }
  }, [])

  useGSAP(() => {
    if (!pathRef.current || dimensions.height === 0) return

    // Create a path that winds down the center
    const w = dimensions.width
    const h = dimensions.height
    const center = w / 2
    
    // Generate a wavy path
    // M start_x start_y Q control_x control_y end_x end_y ...
    const d = `
      M ${center} 0 
      L ${center} 200
      Q ${center + 300} 500 ${center} 800
      T ${center} 1400
      Q ${center - 300} 1800 ${center} 2200
      T ${center} 3000
      L ${center} ${h}
    `
    
    pathRef.current.setAttribute('d', d)

    const length = pathRef.current.getTotalLength()
    
    // Initial state: hidden (strokeDashoffset = length)
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    // Animate drawing based on scroll
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
      }
    })

    // Add a glowing head that follows the path
    const head = svgRef.current?.querySelector('.flow-head')
    if (head) {
        gsap.to(head, {
            motionPath: {
                path: pathRef.current,
                align: pathRef.current,
                alignOrigin: [0.5, 0.5],
            },
            ease: "none",
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            }
        })
    }

  }, [dimensions])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ height: dimensions.height }}>
      <svg 
        ref={svgRef}
        width={dimensions.width} 
        height={dimensions.height} 
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
            <stop offset="20%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="80%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* The main path line */}
        <path
          ref={pathRef}
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* The glowing head/particle */}
        <circle className="flow-head" r="6" fill="#fff" filter="url(#glow)">
            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}

export default ScrollFlow
