'use client';

import Image from 'next/image';
import { popularDishes } from '@/data/dishes';
import FadeInSection from '@/components/ui/FadeInSection';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

function DishCard({ dish, index }: { dish: typeof popularDishes[0]; index: number }) {
  return (
    <div
      className="group relative bg-bg-warm border border-gold/10 hover:border-gold/40 transition-colors rounded-sm overflow-hidden"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Image */}
      {dish.image ? (
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <ImagePlaceholder
          aspectRatio="4/3"
          label="Dish Photo"
          overlayOnHover
          className="rounded-none"
        />
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl text-cream mb-2">{dish.name}</h3>
        <p className="text-cream/70 text-sm mb-4 leading-relaxed">
          {dish.description}
        </p>

        {/* Badges and Price Row */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {dish.isGlutenFree && (
              <span className="bg-red-deep/80 text-cream text-xs px-2 py-0.5 rounded-sm">
                GF
              </span>
            )}
            {dish.spiceLevel > 0 && (
              <span className="text-sm">
                {'🌶'.repeat(dish.spiceLevel)}
              </span>
            )}
          </div>
          <span className="text-gold font-semibold">{dish.price}</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
