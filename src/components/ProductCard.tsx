const PACKAGE_IMG = 'https://tastesbetterfromscratch.com/wp-content/uploads/2025/04/Flour-Tortillas25-1.jpg';

interface ProductCardProps {
  name: string;
  subtitle: string;
  description: string;
  badges: string[];
  image?: string;
  comingSoon?: boolean;
}

export default function ProductCard({
  name,
  subtitle,
  description,
  badges,
  image,
  comingSoon = false,
}: ProductCardProps) {
  return (
    <div
      className={`bg-warm-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${
        comingSoon ? 'opacity-60' : ''
      }`}
    >
      <div className="relative aspect-[4/3] bg-amber-light overflow-hidden">
        <img
          src={image || PACKAGE_IMG}
          alt={name}
          className="w-full h-full object-cover"
        />
        {comingSoon && (
          <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
            <span className="font-body font-700 uppercase tracking-widest text-white text-sm bg-teal px-4 py-2 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {badges.map(b => (
            <span
              key={b}
              className="text-xs font-body font-700 uppercase tracking-wider bg-teal/10 text-teal px-3 py-1 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold text-charcoal">{name}</h3>
        <p className="text-sm text-charcoal/60 font-body mb-2">{subtitle}</p>
        <p className="text-charcoal/70 font-body text-sm mb-4">{description}</p>
        {!comingSoon && (
          <a
            href="#waitlist"
            className="inline-block border-2 border-teal text-teal font-body font-700 px-6 py-2.5 rounded-full hover:bg-teal hover:text-white transition-colors"
          >
            Join Waitlist →
          </a>
        )}
      </div>
    </div>
  );
}
