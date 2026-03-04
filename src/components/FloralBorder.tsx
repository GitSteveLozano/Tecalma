interface FloralBorderProps {
  className?: string;
}

export default function FloralBorder({ className = '' }: FloralBorderProps) {
  // Talavera-inspired inline SVG floral motif band
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 48" className="w-full h-[36px] md:h-[48px]" preserveAspectRatio="none">
        <defs>
          <pattern id="floral" x="0" y="0" width="120" height="48" patternUnits="userSpaceOnUse">
            {/* Center flower */}
            <circle cx="60" cy="24" r="8" fill="#1B9E8E" opacity="0.85" />
            <circle cx="60" cy="24" r="4" fill="#E8A020" />
            {/* Petals */}
            {[0, 60, 120, 180, 240, 300].map(angle => (
              <ellipse
                key={angle}
                cx={60 + 12 * Math.cos((angle * Math.PI) / 180)}
                cy={24 + 12 * Math.sin((angle * Math.PI) / 180)}
                rx="5"
                ry="3"
                fill={angle % 120 === 0 ? '#c0392b' : '#1B9E8E'}
                opacity="0.7"
                transform={`rotate(${angle}, ${60 + 12 * Math.cos((angle * Math.PI) / 180)}, ${24 + 12 * Math.sin((angle * Math.PI) / 180)})`}
              />
            ))}
            {/* Small leaves */}
            <ellipse cx="25" cy="24" rx="7" ry="3.5" fill="#27ae60" opacity="0.6" transform="rotate(-30, 25, 24)" />
            <ellipse cx="95" cy="24" rx="7" ry="3.5" fill="#27ae60" opacity="0.6" transform="rotate(30, 95, 24)" />
            {/* Small accent dots */}
            <circle cx="10" cy="12" r="2.5" fill="#E8A020" opacity="0.5" />
            <circle cx="110" cy="36" r="2.5" fill="#E8A020" opacity="0.5" />
            <circle cx="10" cy="36" r="2" fill="#1B9E8E" opacity="0.4" />
            <circle cx="110" cy="12" r="2" fill="#1B9E8E" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="1200" height="48" fill="url(#floral)" />
      </svg>
    </div>
  );
}
