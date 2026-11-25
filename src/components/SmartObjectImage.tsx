import React, { useState, useEffect } from 'react';
import { RealPhotoItem } from '../types';
import { RealisticItemSvg } from './RealisticItemSvg';

interface SmartObjectImageProps {
  src: string;
  alt: string;
  svgFallbackType: RealPhotoItem['svgFallbackType'];
  className?: string;
}

export const SmartObjectImage: React.FC<SmartObjectImageProps> = ({
  src,
  alt,
  svgFallbackType,
  className = 'w-full h-full object-cover',
}) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div className="relative w-full h-full bg-amber-50 flex items-center justify-center overflow-hidden">
      {/* Instant crisp SVG rendered immediately for zero-lag mobile experience & offline fallback */}
      <div className="absolute inset-0 w-full h-full p-2 flex items-center justify-center">
        <RealisticItemSvg type={svgFallbackType} className="w-full h-full" />
      </div>

      {/* Live public Unsplash photograph layered smoothly on top once loaded */}
      {!hasError && src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}
    </div>
  );
};
