import ProductCard from '../components/ProductCard';
import WavyDivider from '../components/WavyDivider';
import ScrollReveal from '../components/ScrollReveal';

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal>
              <ProductCard
                id="flour-10"
                name="Flour Tortillas"
                subtitle="10 Pack · 14 oz (396g)"
                price={5.99}
                description="Our signature extra-soft flour tortillas. Perfect for tacos, burritos, wraps, and quesadillas. Made fresh in Hawai'i."
                badges={['Non-GMO', 'Small Batch', 'Extra Soft']}
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ProductCard
                id="whole-wheat"
                name="Whole Wheat Tortillas"
                subtitle="Coming Soon"
                price={6.49}
                description="All the softness you love with whole wheat goodness. Same Tecalma quality, heartier flavor."
                badges={['Whole Grain', 'Non-GMO']}
                comingSoon
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ProductCard
                id="mini-6"
                name="Mini Tortillas"
                subtitle="Coming Soon"
                price={4.99}
                description="Street taco-sized perfection. A mini pack for the perfect bite every time."
                badges={['Mini Size', 'Non-GMO']}
                comingSoon
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.92 0.08 80)" />

      {/* Ingredients callout */}
      <section className="bg-amber-light py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-4">
              What's <span className="italic text-teal">Not</span> in Our Tortillas
            </h2>
            <p className="font-body text-charcoal/70 mb-10 max-w-xl mx-auto">
              We believe what you leave out matters just as much as what you put in.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'No Artificial Preservatives', icon: '🚫' },
              { label: 'No Hydrogenated Oils', icon: '💧' },
              { label: 'Non-GMO Ingredients', icon: '🌿' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="bg-warm-white rounded-3xl p-6 shadow-md">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-body font-700 text-charcoal">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
