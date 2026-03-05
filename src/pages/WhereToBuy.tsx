import { Link } from 'react-router-dom';
import WavyDivider from '../components/WavyDivider';

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
            {/* Coming Soon */}
            <div className="lg:col-span-2 flex items-center">
              <div className="bg-warm-white rounded-3xl p-10 shadow-md text-center w-full">
                <div className="text-4xl mb-4">🏪</div>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-3">
                  Coming Soon to a Store Near You
                </h2>
                <p className="font-body text-charcoal/60 mb-8 max-w-lg mx-auto leading-relaxed">
                  We're working on bringing Tecalma to local grocery stores across Hawai'i. In the meantime, order directly from us — we deliver island-wide.
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-teal text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-teal-dark transition-all shadow-lg shadow-teal/25"
                >
                  Shop Online →
                </Link>
              </div>
            </div>

            {/* Online Ordering */}
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Order Online
              </h2>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
