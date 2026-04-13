'use client';

import Image from 'next/image';
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
          <div className="relative w-full h-96 rounded-sm overflow-hidden">
            <Image
              src="/images/interior.jpg"
              alt="Restaurant Interior"
              fill
              className="object-cover"
              priority
            />
          </div>
        </FadeInSection>

        {/* Text - Right */}
        <FadeInSection direction="right">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase font-body mb-4">
              Welcome to Glai Baan!
            </p>
            <h2 className="font-display text-4xl text-cream mb-6">
              Very Thai Kitchen
            </h2>
            <p className="text-cream/80 leading-relaxed mb-4">
              We are a "Very Thai" kitchen, focusing on street food and snacks that you would commonly find while visiting Thailand. Most of our dishes are best shared and many dishes are from the Isan region (northeastern), where they like their food spicy.
            </p>
            <p className="text-cream/80 leading-relaxed">
              We source our produce and meat locally when possible, and{' '}
              <span className="text-gold font-semibold">we do not use MSG.</span>
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
