'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeInSection from '@/components/ui/FadeInSection';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#2a1f1a" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image - Left */}
        <FadeInSection direction="left">
          <motion.div
            className="relative w-full h-96 rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/glai-baan-market.jpeg"
              alt="Glai Baan Market"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </motion.div>
        </FadeInSection>

        {/* Text - Right */}
        <FadeInSection direction="right">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-widest uppercase font-body mb-4">
              Welcome to Glai Baan!
            </p>
            <h2 className="font-display text-4xl text-cream mb-6 hover:text-gold transition-colors duration-300">
              Very Thai Kitchen
            </h2>
            <p className="text-cream/80 leading-relaxed mb-4 hover:text-cream transition-colors duration-300">
              We are a &quot;Very Thai&quot; kitchen, focusing on street food and snacks that you would commonly find while visiting Thailand. Most of our dishes are best shared and many dishes are from the Isan region (northeastern), where they like their food spicy.
            </p>
            <p className="text-cream/80 leading-relaxed hover:text-cream transition-colors duration-300">
              We source our produce and meat locally when possible, and{' '}
              <span className="text-gold font-semibold">we do not use MSG.</span>
            </p>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
