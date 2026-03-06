import { Link } from 'react-router-dom';
import WavyDivider from '../components/WavyDivider';
import FloralBorder from '../components/FloralBorder';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <>
      {/* Hero split */}
      <section className="bg-charcoal pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[420px]">
            <div className="flex flex-col justify-center py-16 pr-0 md:pr-12">
              <span className="inline-block text-xs font-body font-700 uppercase tracking-wider text-amber mb-4">
                Our Story
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                Born in Mexico.{' '}
                <span className="italic text-teal">Made with Aloha.</span>
              </h1>
              <p className="font-body text-white/60 leading-relaxed">
                From our family kitchen to yours — the story behind every pack of Tecalma.
              </p>
            </div>
            <div className="relative rounded-t-3xl md:rounded-tr-3xl md:rounded-tl-none overflow-hidden min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900"
                alt="Family making tortillas"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <WavyDivider fill="var(--color-cream)" />
      </section>

      {/* Origin Story */}
      <section className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-6 text-center">
              A Simple Craving, A Big Dream
            </h2>
            <div className="font-body text-charcoal/70 leading-relaxed space-y-4 text-lg">
              <p>
                Tecalma was born from a simple craving — the kind of soft, fresh flour tortilla that
                feels like home. We couldn't find tortillas on the island that matched the quality and
                freshness of what we grew up with, so we started making our own.
              </p>
              <p>
                Small batch. Real ingredients. Hawaiian pride. What started in a family kitchen
                quickly became a mission: to bring the best handmade flour tortillas to every table
                in Hawai'i.
              </p>
              <p>
                Today, Tecalma Tortilla's are made fresh on the islands and coming to a store near
                you. Every pack carries the same care and quality as that very first batch —
                because some things you just can't compromise on.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FloralBorder />

      {/* Values */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🌿',
                title: 'Clean Ingredients',
                desc: 'No artificial preservatives, no artificial additives, no hydrogenated oils. Just simple, wholesome ingredients you can pronounce and feel good about.',
              },
              {
                emoji: '🏝️',
                title: 'Local First',
                desc: "Made right here in Hawai'i, supporting island community and local businesses. We're proud to be part of the Aloha State.",
              },
              {
                emoji: '❤️',
                title: 'Crafted with Aloha',
                desc: 'Small batch, handmade quality in every single tortilla. We never cut corners because your family deserves the best.',
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="bg-cream rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="text-4xl mb-4">{v.emoji}</div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">{v.title}</h3>
                  <p className="font-body text-charcoal/60">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.92 0.08 80)" />

      {/* Process */}
      <section className="bg-amber-light py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-charcoal mb-12 text-center">
              How We Make <span className="italic text-teal">Magic</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Source',
                desc: 'We select the finest non-GMO flour and fresh natural ingredients, sourced with care.',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12">
                    <path d="M24 8 C20 14 14 18 14 28 A10 10 0 0 0 34 28 C34 18 28 14 24 8Z" fill="none" stroke="#1B9E8E" strokeWidth="2.5" />
                    <path d="M24 20 L24 32" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'Mix & Knead',
                desc: 'Small-batch dough is mixed and kneaded to the perfect consistency for that extra-soft texture.',
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12">
                    <circle cx="24" cy="24" r="14" fill="none" stroke="#1B9E8E" strokeWidth="2.5" />
                    <path d="M16 24 C18 20 22 18 24 24 C26 30 30 28 32 24" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Bake & Pack',
                desc: "Each tortilla is baked to perfection and packed fresh, ready to bring aloha to your table.",
                icon: (
                  <svg viewBox="0 0 48 48" className="w-12 h-12">
                    <rect x="10" y="16" width="28" height="20" rx="4" fill="none" stroke="#1B9E8E" strokeWidth="2.5" />
                    <path d="M18 16 V12 M30 16 V12" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 28 L22 24 L28 28 L34 22" fill="none" stroke="#1B9E8E" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 120}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-warm-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {s.icon}
                  </div>
                  <span className="font-body font-700 text-teal text-sm">{s.step}</span>
                  <h3 className="font-display text-xl font-bold text-charcoal mt-1 mb-2">{s.title}</h3>
                  <p className="font-body text-charcoal/60 text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.42 0.12 185)" />

      {/* CTA */}
      <section className="bg-teal-dark py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Taste the Difference?
            </h2>
            <p className="font-body text-white/70 mb-8">
              Try Tecalma Tortillas and experience what real aloha tastes like.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-amber text-white font-body font-700 px-10 py-4 rounded-full hover:bg-amber/90 transition-all shadow-lg"
            >
              Shop Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
