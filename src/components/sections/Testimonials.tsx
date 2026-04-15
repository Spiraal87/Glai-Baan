'use client';

import { useState, useEffect } from 'react';
import FadeInSection from '@/components/ui/FadeInSection';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Jasmine S.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Authentic flavors that took me back to Bangkok with incredibly friendly service and the perfect atmosphere.',
    emoji: '👩',
  },
  {
    id: 2,
    name: 'Nata K.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Amazing food with great service and the restaurant flows perfectly even when packed.',
    emoji: '👨',
  },
  {
    id: 3,
    name: 'Shannon L.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Found out it is a food castle with perfect service, music, and incredibly friendly staff.',
    emoji: '👩',
  },
  {
    id: 4,
    name: 'Caroline N.',
    location: 'Houston, TX',
    rating: 5,
    text: 'This restaurant is one of my favorite things about Arizona and felt like home away from home.',
    emoji: '👩‍🦰',
  },
  {
    id: 5,
    name: 'John A.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'This Thai street food concept has authentic flavors and genuinely knowledgeable staff who were raised in Thailand.',
    emoji: '👨',
  },
  {
    id: 6,
    name: 'Yvonne O.',
    location: 'Glendale, AZ',
    rating: 5,
    text: 'The sense of welcome with colorful lights and joyous music made us feel right at home.',
    emoji: '👩',
  },
  {
    id: 7,
    name: 'James L.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'The Pad Thai is incredible. Fresh, vibrant, exactly what Thai street food should be.',
    emoji: '👨',
  },
  {
    id: 8,
    name: 'Elena R.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Intimate setting, incredible food. The experience was unforgettable.',
    emoji: '👩',
  },
  {
    id: 9,
    name: 'Kailey C.',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Everything was delicious from the cocktails to the mains with well-balanced and perfectly seasoned dishes.',
    emoji: '👩',
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  const quoteStyles = `
    .testimonial-quote::before {
      content: '"';
    }
    .testimonial-quote::after {
      content: '"';
    }
  `;

  const ITEMS_PER_SLIDE = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    setIsHydrated(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [autoPlay, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 8000); // Resume auto-play after 8 seconds
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
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_SLIDE
  );

  return (
    <section
      id="testimonials"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: '#1a1a1a' }}
    >
      <style>{quoteStyles}</style>
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-body mb-4">
            What Guests Say
          </p>
          <h2 className="font-display text-4xl text-cream mb-4">
            Love at First Bite
          </h2>
          <p className="text-cream/60">
            Hear from our guests who have discovered authentic Thai street food
          </p>
        </FadeInSection>

        {/* Carousel - Only render after hydration to prevent mismatch */}
        {isHydrated && (
          <>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {visibleTestimonials.map((testimonial) => (
                      <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="group bg-bg-warm border border-gold/10 hover:border-gold/30 p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
                      >
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-gold text-lg">
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-cream/80 italic mb-6 leading-relaxed text-base group-hover:text-cream transition-colors testimonial-quote">
                          {testimonial.text}
                        </p>

                        {/* Divider */}
                        <div className="border-t border-gold/10 pt-5 flex items-center gap-3">
                          <span className="text-2xl">{testimonial.emoji}</span>
                          <div>
                            <p className="text-cream font-semibold group-hover:text-gold transition-colors">
                              {testimonial.name}
                            </p>
                            <p className="text-cream/60 text-sm">{testimonial.location}</p>
                          </div>
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
                whileHover={{ x: -2 }}
                whileTap={{ opacity: 0.7 }}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={nextSlide}
                onHoverStart={() => setAutoPlay(false)}
                onHoverEnd={() => setAutoPlay(true)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 text-gold hover:text-gold-light transition-colors p-2 rounded-lg hover:bg-gold/10"
                whileHover={{ x: 2 }}
                whileTap={{ opacity: 0.7 }}
                aria-label="Next reviews"
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
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-center text-cream/60 text-sm mt-6">
              {currentSlide + 1} of {totalSlides}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
