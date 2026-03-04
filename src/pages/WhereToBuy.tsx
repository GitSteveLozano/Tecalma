import { Link } from 'react-router-dom';
import WavyDivider from '../components/WavyDivider';
import ScrollReveal from '../components/ScrollReveal';

const stores = [
  { name: 'Foodland Kahala', location: 'Honolulu, Oahu', hours: 'Mon–Sun: 5am–12am' },
  { name: 'Times Supermarket', location: 'Kailua, Oahu', hours: 'Mon–Sun: 6am–11pm' },
  { name: 'Down to Earth', location: 'Honolulu, Oahu', hours: 'Mon–Sun: 7am–10pm' },
  { name: 'Whole Foods Market', location: 'Kahala, Oahu', hours: 'Mon–Sun: 7am–10pm' },
  { name: 'Mana Foods', location: 'Paia, Maui', hours: 'Mon–Sun: 8am–8:30pm' },
  { name: 'KTA Super Stores', location: 'Hilo, Big Island', hours: 'Mon–Sun: 6am–11pm' },
];

export default function WhereToBuy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Find Tecalma Near You
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
            Pick up a pack at your favorite local store or order online for delivery across Hawai'i.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Retail Locations */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Retail Locations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stores.map((store, i) => (
                  <ScrollReveal key={store.name} delay={i * 80}>
                    <div className="bg-warm-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🏪</span>
                        <div>
                          <h3 className="font-display font-bold text-charcoal">{store.name}</h3>
                          <span className="inline-block text-xs font-body font-700 uppercase tracking-wider bg-teal/10 text-teal px-2 py-0.5 rounded-full mt-1 mb-2">
                            {store.location}
                          </span>
                          <p className="font-body text-sm text-charcoal/50">{store.hours}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={500}>
                <div className="mt-8 bg-amber/10 border border-amber/20 rounded-2xl px-6 py-4">
                  <p className="font-body text-sm text-charcoal/70">
                    Don't see your area? Ask your local store to carry Tecalma! We're always expanding to new locations across the islands.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Online Ordering */}
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Order Online
              </h2>
              <ScrollReveal>
                <Link
                  to="/shop"
                  className="block bg-warm-white rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">📦</div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                    Shop Direct
                  </h3>
                  <p className="font-body text-sm text-charcoal/60 mb-4">
                    Order directly from us and get it delivered to your door anywhere in Hawai'i.
                  </p>
                  <p className="font-body text-xs text-charcoal/40 mb-6">
                    Usually ships within 2–3 business days
                  </p>
                  <span className="font-body font-700 text-teal group-hover:text-teal-dark transition-colors">
                    Order Now →
                  </span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
