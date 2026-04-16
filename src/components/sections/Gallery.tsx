'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeInSection from '@/components/ui/FadeInSection';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { id: 1, label: 'Interior Ambiance', image: '/images/interior-ambience.jpg' },
  { id: 2, label: 'Patio Seating', image: '/images/patio-seating.jpg' },
  { id: 3, label: 'Dish Close-up', image: '/images/dish-closeup.jpg' },
  { id: 4, label: 'Bar Area', image: '/images/bar-area.jpg' },
  { id: 5, label: 'String Lights', image: '/images/string-lights.jpg' },
  { id: 6, label: 'Food Detail', image: '/images/food-detail.jpg' },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const ITEMS_PER_SLIDE = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(galleryItems.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => clearInterval(interval);
  }, [autoPlay, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      prevSlide();
    } else if (info.offset.x < -swipeThreshold) {
      nextSlide();
    }
  };

  const startIndex = currentSlide * ITEMS_PER_SLIDE;
  const visibleItems = galleryItems.slice(startIndex, startIndex + ITEMS_PER_SLIDE);

  return (
    <section
      id="gallery"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="font-display text-4xl text-cream">Come as you are.</h2>
          <p className="font-display text-3xl text-gold-light italic mt-2">
            Stay as long as you like.
          </p>
        </FadeInSection>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {visibleItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-80 overflow-hidden rounded-lg group"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Image label overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-cream font-semibold text-lg">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Previous Button */}
          <motion.button
            onClick={prevSlide}
            onHoverStart={() => setAutoPlay(false)}
            onHoverEnd={() => setAutoPlay(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 text-gold hover:text-gold-light transition-colors p-2 rounded-lg hover:bg-gold/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous gallery"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Next Button */}
          <motion.button
            onClick={nextSlide}
            onHoverStart={() => setAutoPlay(false)}
            onHoverEnd={() => setAutoPlay(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 text-gold hover:text-gold-light transition-colors p-2 rounded-lg hover:bg-gold/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next gallery"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {[...Array(totalSlides)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold w-3 h-3'
                  : 'bg-gold/30 w-2 h-2 hover:bg-gold/50'
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to gallery slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-cream/60 text-sm mt-6">
          {currentSlide + 1} of {totalSlides}
        </p>
      </div>
    </section>
  );
}
