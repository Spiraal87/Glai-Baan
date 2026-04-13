'use client';

import FadeInSection from '@/components/ui/FadeInSection';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

const galleryItems = [
  { id: 1, aspectRatio: '4/3', label: 'Interior Ambiance' },
  { id: 2, aspectRatio: '3/4', label: 'Patio Seating' },
  { id: 3, aspectRatio: '1/1', label: 'Dish Close-up' },
  { id: 4, aspectRatio: '3/4', label: 'Bar Area' },
  { id: 5, aspectRatio: '4/3', label: 'String Lights' },
  { id: 6, aspectRatio: '1/1', label: 'Food Detail' },
];

export default function Gallery() {
  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-4xl text-cream">
            Come as you are.
          </h2>
          <p className="font-display text-3xl text-gold-light italic mt-2">
            Stay as long as you like.
          </p>
        </FadeInSection>

        {/* Masonry Grid using CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-4 overflow-hidden rounded-sm group"
            >
              <ImagePlaceholder
                aspectRatio={item.aspectRatio}
                label={item.label}
                overlayOnHover
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
