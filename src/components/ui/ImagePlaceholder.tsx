interface ImagePlaceholderProps {
  aspectRatio?: string;
  label?: string;
  className?: string;
  overlayOnHover?: boolean;
}

export default function ImagePlaceholder({
  aspectRatio = '16/9',
  label = 'Photo',
  className = '',
  overlayOnHover = false,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm ${
        overlayOnHover ? 'group' : ''
      } ${className}`}
      style={{
        aspectRatio,
        background: 'linear-gradient(135deg, #2a1f1a 0%, #8b1a1a 100%)',
      }}
    >
      <div className="flex items-center justify-center h-full">
        <span className="font-display text-center text-sm" style={{ color: 'rgba(245, 239, 230, 0.4)' }}>
          {label}
        </span>
      </div>
      {overlayOnHover && (
        <div
          className="absolute inset-0 transition-all duration-300 group-hover:opacity-100"
          style={{
            opacity: 0,
            background: 'rgba(201, 132, 58, 0.3)',
          }}
        />
      )}
    </div>
  );
}
