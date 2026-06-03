import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const SANCTUARY_IMAGES = [
  {
    title: 'The Platinum Suite Foyer',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Signature Resurfacing Suite 1',
    image: '/src/assets/images/elite_treatment_room_1780468916103.png'
  },
  {
    title: 'The Restorative Lounge',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + SANCTUARY_IMAGES.length) % SANCTUARY_IMAGES.length));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % SANCTUARY_IMAGES.length));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 animate-fadeIn"
    >
      {/* GALLERY SUMMARY */}
      <section className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono font-bold text-brand-accent tracking-widest uppercase">The Visual Heritage</span>
        <h1 className="font-serif text-4xl font-bold text-gray-950">Patient Portfolios & Clinic Spaces</h1>
        <p className="text-xs text-gray-600 font-sans leading-relaxed">
          Unedited snapshots demonstrating skin texture flattening, jawline vector lifting, and our sterile physical wellness sanctuaries.
        </p>
      </section>

      {/* CLINIC ENVIRONMENTS MASONRY STYLE GRID (NOW ON TOP) */}
      <section className="space-y-6">
        <div className="text-left border-b border-brand-border/60 pb-2">
          <h3 className="font-serif text-xl font-bold text-gray-900">The Sanctuary Architecture</h3>
          <p className="text-xs text-gray-400 font-sans mt-0.5">
            Click on any image to view in luxurious full-size view and browse our suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SANCTUARY_IMAGES.map((env, k) => (
            <div
              key={k}
              onClick={() => setLightboxIndex(k)}
              className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-soft text-left group hover:shadow-md transition-all cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={env.image}
                  alt={env.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                
                {/* Hover overlay indicator */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity border border-brand-border shadow-sm">
                  <Maximize2 className="w-4 h-4 text-brand-primary" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-12">
                  <h4 className="font-serif text-sm font-bold text-white tracking-wide">{env.title}</h4>
                  <span className="text-[10px] text-brand-bg/85 font-sans font-medium uppercase tracking-wider block mt-0.5">Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE AFTER CAROUSEL ROW (NOW DOWN) */}
      <section className="space-y-6">
        <div className="text-left border-b border-brand-border/60 pb-2">
          <h3 className="font-serif text-xl font-bold text-gray-900">Interactive Dermal Transformations</h3>
          <p className="text-xs text-gray-400 font-sans mt-0.5">Left image: Baseline admission | Right image: Complete study result</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BEFORE_AFTER_ITEMS.map((item) => (
            <BeforeAfterSlider key={item.id} item={item} showDescription={false} />
          ))}
        </div>
      </section>

      {/* FULL SIZE IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden select-none"
          >
            {/* Centered cozy black card container - halts click propagation */}
            <div 
              className="relative bg-zinc-950 border border-white/10 rounded-2xl p-6 md:py-10 md:px-14 w-full max-w-2xl flex flex-col items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close trigger top-right inside the card */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-3 right-3 text-white/50 hover:text-white p-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5 cursor-pointer z-30"
                title="Close image view"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left navigation arrow - inside the black card bounds */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-2.5 bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/5 cursor-pointer z-30 shadow-md"
                title="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right navigation arrow - inside the black card bounds */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 md:p-2.5 bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/5 cursor-pointer z-30 shadow-md"
                title="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image viewport area */}
              <div className="relative w-full flex flex-col items-center justify-center h-full max-h-[60vh]">
                {/* Active Image Render */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  src={SANCTUARY_IMAGES[lightboxIndex].image}
                  alt={SANCTUARY_IMAGES[lightboxIndex].title}
                  className="max-h-[50vh] md:max-h-[55vh] max-w-full object-contain rounded-lg border border-white/10 shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Sub title info bar - placed elegant and compact at bottom of the card content scale */}
              <div className="mt-4 text-center">
                <h3 className="font-serif text-sm font-bold tracking-wide text-white">
                  {SANCTUARY_IMAGES[lightboxIndex].title}
                </h3>
                <p className="text-[10px] text-white/40 tracking-wider font-mono uppercase mt-0.5">
                  {lightboxIndex + 1} of {SANCTUARY_IMAGES.length} • SKIN & HAIR HUB
                </p>
              </div>
            </div>

            {/* Keyboard tips hint */}
            <div className="absolute bottom-4 text-[9px] text-white/30 font-mono tracking-widest hidden md:block uppercase">
              Click surrounding area outside the card to dismiss
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
