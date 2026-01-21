import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '../../hooks/useGSAP'
import { gsap } from '../../utils/gsapConfig'
import LaptopModal from './LaptopModal'

const LaptopAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Total number of frames
  const frameCount = 81
  
  // Store images in a ref to avoid re-renders
  const imagesRef = useRef<HTMLImageElement[]>([])
  
  // Current frame state for GSAP to animate
  const frameState = useRef({ frame: 0 })

  useEffect(() => {
    // Preload images
    let loadedCount = 0
    const images: HTMLImageElement[] = []

    for (let i = 0; i <= frameCount; i++) {
      const img = new Image()
      // Create padded frame number (000, 001, ..., 081)
      const paddedIndex = i.toString().padStart(3, '0')
      img.src = `/laptop/laptop_${paddedIndex}.png`
      
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount + 1) {
          setImagesLoaded(true)
          setIsLoading(false)
        }
      }

      img.onerror = () => {
        console.warn(`Failed to load image: ${img.src}`)
        loadedCount++
        if (loadedCount === frameCount + 1) {
          setImagesLoaded(true)
          setIsLoading(false)
        }
      }
      
      images.push(img)
    }
    
    imagesRef.current = images
  }, [])

  // Render current frame to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    const img = imagesRef.current[index]

    if (canvas && context) {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height)
      
      // Fallback logic for missing frames
      let validImg = img
      if (!validImg || validImg.naturalWidth === 0) {
          // Try to find the nearest previous valid frame
          for (let i = index - 1; i >= 0; i--) {
              if (imagesRef.current[i] && imagesRef.current[i].naturalWidth > 0) {
                  validImg = imagesRef.current[i]
                  break
              }
          }
      }
      
      if (validImg && validImg.naturalWidth > 0) {
          // Draw image fit to canvas/contain
          const scale = Math.min(canvas.width / validImg.width, canvas.height / validImg.height)
          const x = (canvas.width / 2) - (validImg.width / 2) * scale
          const y = (canvas.height / 2) - (validImg.height / 2) * scale
          
          context.drawImage(validImg, x, y, validImg.width * scale, validImg.height * scale)
      }
    }
  }

  useGSAP(() => {
    if (!imagesLoaded || !canvasRef.current) return

    // Clean initial render
    renderFrame(0)

    // Setup scroll animation with Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvasRef.current,
        start: 'top 300px', // Starts as soon as it enters viewport/is on screen
        end: 'bottom', 
        scrub: 1,
      }
    })

    // 1. Frame Animation
    tl.to(frameState.current, {
      frame: frameCount,
      snap: 'frame',
      ease: 'none',
      onUpdate: () => {
        renderFrame(frameState.current.frame)
      }
    }, 0)

    // 2. Vertical Parallax (Move down) & Scale
    tl.to(canvasRef.current, {
      y: 300, 
      scale: 1.2, // Zoom effect
      ease: 'none'
    }, 0) // Sync start time with frame animation
  }, [imagesLoaded])

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        const parent = canvas.parentElement
        if (parent) {
          canvas.width = parent.clientWidth
          canvas.height = parent.clientWidth * (9/16) // 16:9 aspect ratio approximation
          if (imagesLoaded) {
             renderFrame(frameState.current.frame)
          }
        }
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Initial sizing

    return () => window.removeEventListener('resize', handleResize)
  }, [imagesLoaded])

  return (
    <>
      <LaptopModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div 
        className="relative w-full aspect-video flex items-center justify-center cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-cyan-500 font-mono text-xs">
            LOADING SEQUENCE...
          </div>
        )}
        
        {/* Hover indication */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
           <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white text-xs font-mono tracking-widest uppercase">
              Click to Explore
           </div>
        </div>

        <canvas 
          ref={canvasRef}
          className="block max-w-full h-auto"
        />
      </div>
    </>
  )
}

export default LaptopAnimation
