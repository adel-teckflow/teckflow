import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}) => {
  const siteTitle = 'Teckflow | Design Immersif'
  const fullTitle = `${title} | ${siteTitle}`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.content = content
    }

    // Standard meta tags
    updateMetaTag('description', description)

    // Open Graph tags
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:url', url, true)
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:image', image, true)

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, image, url, type, fullTitle])

  return null
}

export default SEO
