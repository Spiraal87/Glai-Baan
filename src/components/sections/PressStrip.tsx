export default function PressStrip() {
  const accolades = [
    '⭐ Best Thai Restaurant in Phoenix — Phoenix New Times',
    '🏆 USA Today Restaurant of the Year 2024',
    '🌟 #145 of 2,160 Phoenix Restaurants — TripAdvisor',
    '⚡ 4.7 Stars · 3,400+ Reviews',
  ];

  const accoladeText = accolades.join(' ');
  // Duplicate for seamless looping
  const duplicatedText = accoladeText + ' ' + accoladeText;

  return (
    <section
      className="border-y overflow-hidden py-6 sticky top-0 z-40"
      style={{
        background: 'linear-gradient(90deg, #2a1f1a 0%, #3d2817 50%, #2a1f1a 100%)',
        borderColor: "rgba(218, 165, 32, 0.3)",
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="inline-flex gap-8 animate-ticker will-change-transform"
          style={{
            width: 'auto',
          }}
        >
          <span className="text-gold text-base font-semibold tracking-wide shrink-0">
            {duplicatedText}
          </span>
        </div>
      </div>
    </section>
  );
}
