'use client';

import { useState, useEffect } from 'react';
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/glai-baan-interior-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          className="mb-8 flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-white border-4 border-gold overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          animate={{
            y: [0, -15, 0],
            x: mousePosition.x,
            translateY: mousePosition.y,
          }}
          transition={{
            y: { repeat: Infinity, duration: 3 },
            x: { duration: 0.3, ease: 'easeOut' },
            translateY: { duration: 0.3, ease: 'easeOut' },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src="/images/glai-baan-logo.png"
            alt="Glai Baan Thai Street Food"
            width={480}
            height={480}
            className="w-56 sm:w-64 md:w-80 lg:w-96 h-auto object-contain"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <p className="font-display text-lg md:text-2xl text-gold-light italic mb-6 max-w-2xl">
          Far From Home. Right Around the Corner.
        </p>

        {/* Cuisine Clarifier */}
        <motion.p
          className="text-cream/80 text-sm md:text-base font-light mb-10 max-w-2xl"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          Northeast Thai street food known for bold, spicy flavors
        </motion.p>

        {/* Subtext */}
        <address className="not-italic text-cream/70 text-sm md:text-base mb-14 max-w-2xl">
          <div>Thai Street Food</div>
          <div>2333 E Osborn Rd, Phoenix AZ</div>
          <div>Walk-ins Welcome</div>
        </address>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
        >
          <a
            href="#dishes"
            className="group inline-flex items-center gap-3 bg-gold hover:bg-accent-rust text-bg-dark font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/30"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('dishes')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>View Menu</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="tel:+1-602-595-5881"
            className="group inline-flex items-center gap-3 border-2 border-gold hover:bg-gold/10 text-gold font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-gold/20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - visible below menu */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 text-gold/60 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
