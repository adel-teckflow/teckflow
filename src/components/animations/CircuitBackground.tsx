import { useRef } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'

const CircuitBackground = ({ className = '' }: { className?: string }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!svgRef.current) return

    const paths = svgRef.current.querySelectorAll('.circuit-path')
    
    // Set initial stroke-dasharray/offset
    paths.forEach((path) => {
      const length = (path as SVGPathElement).getTotalLength()
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.8
      })
    })

    // Animate paths
    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 3,
      stagger: {
        amount: 2,
        from: 'random'
      },
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      repeatDelay: 1
    })

    // Add pulse effect to circles
    const circles = svgRef.current.querySelectorAll('.node')
    gsap.to(circles, {
      scale: 1.5,
      opacity: 0.8,
      duration: 2,
      stagger: {
        amount: 2,
        from: 'random'
      },
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    })

  }, [])

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      <svg 
        ref={svgRef}
        className="w-full h-full opacity-100" 
        viewBox="0 0 1440 900" 
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Complex Circuit Paths */}
        <path className="circuit-path stroke-cyan-500" strokeWidth="2" d="M0,450 Q360,350 720,450 T1440,450" />
        <path className="circuit-path stroke-purple-500" strokeWidth="2" d="M0,200 Q400,300 800,100 T1440,200" />
        <path className="circuit-path stroke-pink-500" strokeWidth="2" d="M0,700 Q400,600 800,800 T1440,700" />
        
        {/* Connecting Lines */}
        <path className="circuit-path stroke-white/40" strokeWidth="1" d="M720,0 V900" />
        <path className="circuit-path stroke-white/40" strokeWidth="1" d="M360,0 V900" />
        <path className="circuit-path stroke-white/40" strokeWidth="1" d="M1080,0 V900" />
        <path className="circuit-path stroke-white/40" strokeWidth="1" d="M0,450 H1440" />
        
        {/* Nodes */}
        <circle className="node fill-cyan-400" cx="720" cy="450" r="3" />
        <circle className="node fill-purple-400" cx="360" cy="200" r="3" />
        <circle className="node fill-pink-400" cx="1080" cy="700" r="3" />
        <circle className="node fill-white" cx="720" cy="200" r="2" />
        <circle className="node fill-white" cx="720" cy="700" r="2" />
        
        {/* Random decorative shapes */}
        <rect className="node fill-none stroke-cyan-500" x="100" y="100" width="50" height="50" strokeWidth="1" />
        <rect className="node fill-none stroke-purple-500" x="1200" y="700" width="80" height="80" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default CircuitBackground
