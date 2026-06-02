import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    // Standard Title
    document.title = `${title} | Resilient Villages Zimbabwe`;

    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    setMetaTag('property', 'og:title', `${title} | Resilient Villages Zimbabwe`);
    setMetaTag('name', 'twitter:title', `${title} | Resilient Villages Zimbabwe`);

    if (image) {
      setMetaTag('property', 'og:image', image);
      setMetaTag('name', 'twitter:image', image);
    }

    if (url) {
      setMetaTag('property', 'og:url', url);
    }

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
  }, [title, description, image, url]);
}
