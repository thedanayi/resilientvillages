import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export function useSEO({ title, description, image, url }: SEOProps) {
  useEffect(() => {
    // Keep track of the elements we create so we can clean them up if needed
    // In an SPA, it is often better to just reuse existing tags
    
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
      return element;
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
    
    // We intentionally don't remove tags on unmount in this SPA approach,
    // to prevent flickering when transitioning between routes.
    // The next route's useSEO will automatically overwrite the existing tags.
    // However, if we migrate to Next.js, this entire hook will be replaced by
    // exporting the Metadata object from the page.
  }, [title, description, image, url]);
}

