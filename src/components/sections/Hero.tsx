'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-bg-dark overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #2a1f1a 0%, #1a1a1a 70%)',
      }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.1 }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(218, 165, 32, 0.6))' }}
        >
          <Image
            src="/images/glai-baan-logo.png"
            alt="Glai Baan Thai Street Food"
            width={380}
            height={380}
            className="w-80 h-80 object-contain"
            priority
          />
        </motion.div>

        {/* Restaurant Name */}
        <h1 className="font-display text-5xl md:text-7xl text-cream mb-6 leading-tight">
          Glai Baan
        </h1>

        {/* Tagline */}
        <p className="font-display text-lg md:text-2xl text-gold-light italic mb-6 max-w-2xl">
          Far From Home. Right Around the Corner.
        </p>

        {/* Subtext */}
        <address className="not-italic text-cream/70 text-sm md:text-base mb-12 max-w-2xl">
          <div>Isan Thai Street Food</div>
          <div>2333 E Osborn Rd, Phoenix AZ</div>
          <div>Walk-ins Welcome</div>
        </address>

        {/* CTA Button */}
        <a
          href="#menu"
          className="bg-gold hover:bg-gold-light text-bg-dark font-semibold px-8 py-3 rounded-sm transition-colors duration-300"
        >
          View Menu
        </a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 text-gold/60"
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
