import React, { useState } from 'react';

type FabricCarouselProps = {
  images: string[];
  className?: string;
};

export const FabricCarousel: React.FC<FabricCarouselProps> = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative w-full ${className} overflow-hidden`}>
      {/* Image Display */}
      <div 
        className="w-full flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0 relative bg-brand-surface-container-low min-h-[60vh] md:min-h-[80vh]">
            <img 
              src={src} 
              alt={`Fabric sample ${index + 1}`} 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Tonal Progress Bar Navigation */}
      <div 
        className="absolute bottom-12 left-0 right-0 z-10 mx-auto w-48 max-w-full h-1 bg-brand-outline-variant/30 cursor-pointer group"
        onClick={nextSlide}
      >
        <div 
          className="h-full bg-brand-primary transition-all duration-[600ms] ease-out group-hover:bg-brand-primary-container"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        />
      </div>

      {/* Invisible overlay to catch clicks for next slide on mobile too */}
      <div className="absolute inset-0 z-0 cursor-e-resize" onClick={nextSlide} />
      
      {/* Glassmorphism Quick View / Details Overlay Example */}
      <div className="absolute bottom-24 right-8 lg:right-24 p-6 glass-panel hidden md:block max-w-sm pointer-events-none">
         <p className="font-functional text-xs uppercase tracking-blueprint text-brand-on-surface/70 mb-2">Selected Fabric</p>
         <h3 className="font-editorial text-2xl">0{currentIndex + 1} / Collection</h3>
      </div>
    </div>
  );
};
