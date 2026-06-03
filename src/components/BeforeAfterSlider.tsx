import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';
import { BeforeAfterItem } from '../types';

interface Props {
  key?: string;
  item: BeforeAfterItem;
  showDescription?: boolean;
}

export default function BeforeAfterSlider({ item, showDescription = true }: Props) {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="bg-brand-card rounded-2xl border border-brand-border p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-xs font-mono text-brand-accent tracking-wider uppercase">{item.category}</span>
          <h4 className="font-serif text-lg text-gray-900 font-medium">{item.title}</h4>
        </div>
        <div className="flex items-center text-xs text-brand-primary font-medium bg-brand-surface px-2.5 py-1 rounded-full gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Slide to Compare</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative h-80 rounded-xl overflow-hidden select-none cursor-ew-resize border border-brand-border"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {/* After Image (Full width background) */}
        <img
          src={item.afterImage}
          alt="Skin After Treatment"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-brand-primary/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase backdrop-blur-sm z-20">
          After
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.beforeImage}
            alt="Skin Before Treatment"
            className="absolute top-0 left-0 h-full object-cover pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width || '400px', maxWidth: 'none' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-brand-accent/95 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase backdrop-blur-sm z-20">
            Before
          </div>
        </div>

        {/* Vertical divider handle line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white p-2 rounded-full border-2 border-white shadow-lg active:scale-110 transition-transform">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {showDescription && (
        <p className="mt-3 text-xs text-gray-600 font-sans leading-relaxed">
          {item.description}
        </p>
      )}
    </div>
  );
}
