'use client';

import Image from 'next/image';
import { popularDishes } from '@/data/dishes';
import FadeInSection from '@/components/ui/FadeInSection';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

function DishCard({ dish, index }: { dish: typeof popularDishes[0]; index: number }) {
  return (
    <div
      className="group relative bg-bg-warm border border-gold/10 hover:border-gold/30 transition-all duration-300 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-gold/10"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <ImagePlaceholder
            aspectRatio="4/3"
            label="Dish Photo"
            overlayOnHover
            className="rounded-none"
          />
        )}
      </div>

      {/* Price Badge */}
      <div className="absolute top-4 right-4 bg-gold text-dark px-4 py-1.5 rounded-full font-semibold text-sm shadow-lg">
        {dish.price}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-cream mb-2 group-hover:text-gold transition-colors">
          {dish.name}
        </h3>
        <p className="text-cream/70 text-sm mb-4 leading-relaxed line-clamp-2">
          {dish.description}
        </p>

        {/* Badges and Spice Row */}
        <div className="flex items-center gap-3 pt-3 border-t border-gold/10">
          <div className="flex gap-2 flex-wrap flex-1">
            {dish.isGlutenFree && (
              <span className="bg-sage-green/30 text-sage-green text-xs px-2.5 py-1 rounded-full font-medium">
                GF
              </span>
            )}
            {dish.spiceLevel > 0 && (
              <span className="text-sm flex gap-0.5 items-center">
                <span className="text-red-400">{'🌶'.repeat(dish.spiceLevel)}</span>
                <span className="text-cream/50 text-xs ml-1">
                  {dish.spiceLevel === 1 ? 'Mild' : dish.spiceLevel === 2 ? 'Hot' : 'Very Hot'}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularDishes() {
  return (
    <section
      id="dishes"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-4xl text-cream mb-3">
            What People Keep Coming Back For
          </h2>
          <p className="text-cream/60 text-lg">Our most beloved dishes</p>
        </FadeInSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {popularDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>

        {/* See Full Menu CTA */}
        <FadeInSection className="text-center">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 border-2 border-gold hover:border-accent-rust text-gold hover:text-accent-rust font-semibold px-8 py-3.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>Browse Full Menu</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
        </FadeInSection>
      </div>
    </section>
  );
}
