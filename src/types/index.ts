import { ReactNode } from "react"

// ============================================
// Component Props
// ============================================

export interface TiltCardProps {
  children: ReactNode
  className?: string
}

// ============================================
// Data Models
// ============================================

export interface Work {
  id: string
  title: string
  img: string
  category?: string
  performance?: string
  technologies?: string[]
  timeline?: string
  complexity?: string
}

export interface Service {
  title: string
  desc: string
  icon: ReactNode
  details: string[]
}

export interface ProcessStep {
  step: string
  title: string
  desc: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SocialLink {
  icon: ReactNode
  label: string
  url?: string
}
