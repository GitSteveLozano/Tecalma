interface WavyDividerProps {
  fill?: string;
  flip?: boolean;
  className?: string;
}

export default function WavyDivider({ fill = 'var(--color-cream)', flip = false, className = '' }: WavyDividerProps) {
  return (
    <div className={`w-full leading-[0] overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] block"
      >
        <path
          d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
