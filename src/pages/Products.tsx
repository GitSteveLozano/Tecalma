import ProductCard from '../components/ProductCard';
import WavyDivider from '../components/WavyDivider';
import WaitlistForm from '../components/WaitlistForm';
import FloralBorder from '../components/FloralBorder';

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Tortillas
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
            Small-batch, extra soft flour tortillas made with clean ingredients and genuine aloha.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      {/* Product Grid */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ProductCard
              name="Flour Tortillas"
              subtitle="10 Pack · 14 oz (396g)"
              description="Our signature extra-soft flour tortillas. Perfect for tacos, burritos, wraps, and quesadillas. Made fresh in Hawai'i."
              badges={['Clean Label', 'Small Batch', 'Extra Soft']}
            />
            <ProductCard
              name="Corn Tortillas"
              subtitle="Coming Soon"
              description="Traditional corn tortillas with the same Tecalma softness and quality. Perfect for street tacos and tostadas."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMYwQFlD-r0LKFQwPuCWZ3QxL9DGhqaQ6yg&s"
              badges={['Clean Label', 'Small Batch']}
              comingSoon
            />
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.92 0.08 80)" />

      {/* Ingredients callout */}
      <section className="bg-amber-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
            What's <span className="italic text-teal">Not</span> in Our Tortillas
          </h2>
          <p className="font-body text-charcoal/70 mb-10 max-w-xl mx-auto">
            We believe what you leave out matters just as much as what you put in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'No Artificial Preservatives', icon: '🚫' },
              { label: 'No Hydrogenated Oils', icon: '💧' },
              { label: 'Clean Label Ingredients', icon: '🌿' },
            ].map(item => (
              <div key={item.label} className="bg-warm-white rounded-3xl p-6 shadow-md">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-body font-700 text-charcoal">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloralBorder />

      {/* Waitlist */}
      <section id="waitlist" className="bg-[#E8F5F3] py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 bg-teal/10 text-teal font-body font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            Coming Soon to Your Door 🌺
          </span>
          <h2 className="font-display text-3xl font-bold text-charcoal mb-3">
            Be First in Line
          </h2>
          <p className="font-body text-charcoal/60 mb-8 leading-relaxed">
            Online ordering is almost here. Join the waitlist and we'll notify you the moment Tecalma is available for island-wide delivery.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
