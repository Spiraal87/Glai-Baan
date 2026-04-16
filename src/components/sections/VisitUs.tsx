'use client';

import FadeInSection from '@/components/ui/FadeInSection';

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#2a1f1a" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-4xl text-cream">Reservations & Visit Us</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <FadeInSection direction="left">
            <div className="space-y-8">
              {/* Reservations Header */}
              <div>
                <h3 className="font-display text-cream text-xl mb-6">Reservations</h3>
              </div>

              {/* Reservation Policy */}
              <div className="space-y-4">
                <p className="text-cream/80 text-sm">
                  <span className="text-gold font-semibold">Reservations accepted only for dinner service</span>
                </p>
                <p className="text-cream/80 text-sm">
                  <span className="text-gold font-semibold">Lunch is first come first serve</span>
                </p>
              </div>

              {/* How to Reserve */}
              <div className="border-l-2 border-gold/30 pl-4 py-4">
                <p className="text-cream/70 text-sm leading-relaxed">
                  To make a reservation - <span className="text-gold font-semibold">call into the restaurant Monday - Friday before 5 PM</span> and leave a message. We will call you back the next business day to go over availability.
                </p>
              </div>

              {/* Party Size */}
              <div>
                <p className="text-cream/70 text-sm">
                  <span className="text-gold font-semibold">Reservations are for parties of 1-7 people</span>
                </p>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gold/20">
                <h3 className="font-display text-cream text-lg mb-4">Glai Baan</h3>
                <address className="not-italic text-cream/80 leading-relaxed text-sm">
                  <div>Glai Baan, 2333 E Osborn Rd, Phoenix, Arizona 85016, United States</div>
                </address>
              </div>

              {/* Phone */}
              <div>
                <a
                  href="tel:+16025955881"
                  className="text-gold hover:text-gold-light transition-colors font-semibold text-lg"
                >
                  (602) 595-5881
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Right Column - Map */}
          <FadeInSection direction="right">
            <div className="relative w-full min-h-[300px] lg:h-full rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.163733399999!2d-112.07191!3d33.47083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7380cc34567%3A0x123456789!2s2333%20E%20Osborn%20Rd%2C%20Phoenix%2C%20AZ%2085016!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glai Baan location map"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
