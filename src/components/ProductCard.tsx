import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

// TODO: Replace with actual product photo
const PACKAGE_IMG = 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600';

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  badges: string[];
  image?: string;
  comingSoon?: boolean;
}

export default function ProductCard({
  id,
  name,
  subtitle,
  price,
  description,
  badges,
  image,
  comingSoon = false,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({ productId: id, name, price });
    toast.success(`${name} added to cart! 🌺`);
  };

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
        <div className="flex items-center justify-between">
          <span className="text-2xl font-display font-bold text-teal">
            ${price.toFixed(2)}
          </span>
          {!comingSoon && (
            <button
              onClick={handleAdd}
              className="bg-teal text-white font-body font-700 px-6 py-2.5 rounded-full hover:bg-teal-dark transition-colors shadow-md hover:shadow-lg cursor-pointer"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
