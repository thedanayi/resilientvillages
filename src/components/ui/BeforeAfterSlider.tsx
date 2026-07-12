import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { Image } from "./Image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, className = "" }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setPosition(percent);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button pressed
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-ew-resize group ${className}`}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onClick={(e) => handleMove(e.clientX)}
    >
      {/* After image (background) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image src={afterImage} alt="After" className="w-full h-full object-cover" />
      </div>

      {/* Before image (foreground clip) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <Image src={beforeImage} alt="Before" className="w-full h-full object-cover" />
      </div>

      {/* Slider handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3" />
          </svg>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded shadow pointer-events-none z-10">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded shadow pointer-events-none z-10">
        After
      </div>
    </div>
  );
}
