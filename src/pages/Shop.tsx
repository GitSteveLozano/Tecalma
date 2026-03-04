import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import WavyDivider from '../components/WavyDivider';
import ScrollReveal from '../components/ScrollReveal';

// TODO: Replace with actual product photo
const PACKAGE_IMG = 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600';

interface ShopProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
}

const products: ShopProduct[] = [
  {
    id: 'flour-10',
    name: 'Flour Tortillas — 10 Pack',
    subtitle: '14 oz (396g)',
    price: 5.99,
    image: PACKAGE_IMG,
  },
];

export default function Shop() {
  const { addItem } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({ 'flour-10': 1 });

  const handleAdd = (product: ShopProduct) => {
    const qty = quantities[product.id] || 1;
    for (let i = 0; i < qty; i++) {
      addItem({ productId: product.id, name: product.name, price: product.price });
    }
    toast.success(`Added ${qty}x ${product.name} to cart! 🌺`);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Shop Tecalma
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
            Order fresh tortillas delivered to your door across Hawai'i.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="bg-teal/10 border border-teal/20 rounded-2xl px-6 py-4 mb-10 text-center">
            <p className="font-body text-sm text-teal font-600">
              Currently shipping within Hawai'i only 🏝️
            </p>
          </div>

          {products.map(product => (
            <ScrollReveal key={product.id}>
              <div className="bg-warm-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-square bg-amber-light">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {['Non-GMO', 'Small Batch', 'Extra Soft'].map(b => (
                        <span key={b} className="text-xs font-body font-700 uppercase tracking-wider bg-teal/10 text-teal px-3 py-1 rounded-full">
                          {b}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-charcoal mb-1">
                      {product.name}
                    </h2>
                    <p className="font-body text-charcoal/60 mb-4">{product.subtitle}</p>
                    <p className="font-display text-3xl font-bold text-teal mb-6">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <label className="font-body text-sm font-600 text-charcoal/70">Qty:</label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setQuantities(prev => ({
                              ...prev,
                              [product.id]: Math.max(1, (prev[product.id] || 1) - 1),
                            }))
                          }
                          className="w-10 h-10 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center hover:bg-teal/20 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-body font-bold">
                          {quantities[product.id] || 1}
                        </span>
                        <button
                          onClick={() =>
                            setQuantities(prev => ({
                              ...prev,
                              [product.id]: (prev[product.id] || 1) + 1,
                            }))
                          }
                          className="w-10 h-10 rounded-full bg-teal/10 text-teal font-bold flex items-center justify-center hover:bg-teal/20 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className="bg-teal text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-teal-dark transition-all shadow-lg shadow-teal/25 cursor-pointer"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
