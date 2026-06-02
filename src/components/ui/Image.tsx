import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

/**
 * Reusable Image component that handles lazy-loading, blur-up effects (if integrated later),
 * and provides a direct path to migrate to next/image in the future.
 */
export function Image({ className, alt, src, fallbackSrc, loading = 'lazy', ...props }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <img
      src={error && fallbackSrc ? fallbackSrc : src}
      alt={alt || ''}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
      onError={() => setError(true)}
      className={cn(
        'transition-opacity duration-500',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      {...props}
    />
  );
}
