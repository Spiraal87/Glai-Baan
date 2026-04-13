'use client';

import FadeInSection from '@/components/ui/FadeInSection';

// Simple icon components
function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 7 10 13 10 13s10-6 10-13c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 13h-2v-2h2v2zm4-8H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H7V7h10v12z" />
    </svg>
  );
}

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#2a1f1a" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-4xl text-cream">Find Us</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <FadeInSection direction="left">
            <div className="space-y-8">
              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gold">
                    <ClockIcon />
                  </div>
                  <h3 className="font-display text-cream text-lg">Hours</h3>
                </div>
                <p className="text-cream/80">Monday – Sunday</p>
                <p className="text-cream/80">12:00pm – 9:00pm</p>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gold">
                    <MapPinIcon />
                  </div>
                  <h3 className="font-display text-cream text-lg">Address</h3>
                </div>
                <address className="not-italic text-cream/80 leading-relaxed">
                  <div>2333 E Osborn Rd</div>
                  <div>Phoenix, AZ 85016</div>
                </address>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gold">
                    <PhoneIcon />
                  </div>
                  <h3 className="font-display text-cream text-lg">Phone</h3>
                </div>
                <a
                  href="tel:+16025955881"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  (602) 595-5881
                </a>
              </div>

              {/* Walk-ins Note */}
              <div className="border-l-2 border-gold/30 pl-4">
                <p className="text-cream/70 text-sm">
                  <span className="font-semibold">Walk-ins only.</span> We don&apos;t
                  take reservations — come as you are.
                </p>
              </div>

              {/* Parking */}
              <div className="flex gap-3">
                <div className="text-gold shrink-0">
                  <ParkingIcon />
                </div>
                <p className="text-cream/70 text-sm">
                  Street parking available nearby.
                </p>
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
