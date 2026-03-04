import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import WavyDivider from '../components/WavyDivider';
import FloralBorder from '../components/FloralBorder';

// TODO: Replace with actual product photo
const PACKAGE_IMG = 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=600';

const testimonials = [
  {
    quote: "Softest tortillas I've ever had. My whole family is obsessed.",
    name: 'Kailani M.',
    location: 'Honolulu',
    initials: 'KM',
  },
  {
    quote: "Finally a local Hawaiian tortilla brand I can feel good about. Aloha Fresh is real!",
    name: 'Marcus T.',
    location: 'Kailua',
    initials: 'MT',
  },
  {
    quote: "Tecalma is in a league of its own. Perfect for tacos, wraps, everything.",
    name: 'Leilani K.',
    location: 'Maui',
    initials: 'LK',
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <>
      {/* ===== FLORAL TOP ===== */}
      <FloralBorder />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-teal-light/30 to-cream">
        {/* Subtle floral overlay */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hero-floral" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="6" fill="#1B9E8E" />
                <circle cx="40" cy="40" r="2" fill="#E8A020" />
                <circle cx="10" cy="10" r="3" fill="#1B9E8E" />
                <circle cx="70" cy="70" r="3" fill="#E8A020" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-floral)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-teal/10 text-teal font-body font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                🌺 Hawaiian Made · Aloha Fresh
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-6">
                Tortillas Born from the Spirit of{' '}
                <span className="italic text-teal">Aloha</span>
              </h1>
              <p className="font-body text-lg text-charcoal/70 mb-8 max-w-lg leading-relaxed">
                Extra soft, small-batch flour tortillas made right here in Hawai'i. Non-GMO. Fresh natural. Local le'ale.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/shop"
                  className="bg-teal text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-teal-dark transition-all shadow-lg shadow-teal/25 hover:-translate-y-0.5"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-amber text-amber font-body font-700 px-8 py-3.5 rounded-full hover:bg-amber hover:text-white transition-all"
                >
                  Our Story
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm font-body font-600 text-charcoal/60">
                <span>✦ Non-GMO</span>
                <span>✦ Small Batch</span>
                <span>✦ Hawai'i Made</span>
              </div>
            </div>

            {/* Right — product image on blob */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <svg viewBox="0 0 400 400" className="w-[90%] h-[90%]">
                  <ellipse cx="200" cy="200" rx="180" ry="170" fill="oklch(0.92 0.08 80)" />
                </svg>
              </div>
              <img
                src={PACKAGE_IMG}
                alt="Tecalma Tortillas package"
                className="relative z-10 w-64 sm:w-80 rounded-2xl object-cover shadow-2xl -rotate-3"
              />
            </div>
          </div>
        </div>
        <WavyDivider fill="var(--color-warm-white)" />
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-10 h-10">
                    <path d="M8 36 C8 20 16 14 24 12 C32 14 40 20 40 36" fill="none" stroke="#1B9E8E" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 34 C18 26 30 26 36 34" fill="none" stroke="#E8A020" strokeWidth="2" />
                  </svg>
                ),
                title: 'Extra Soft & Flexible',
                desc: 'Folds without cracking. Rolls without tearing. The perfect wrap for any filling.',
                badge: 'Signature Soft',
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-10 h-10">
                    <path d="M24 6 C20 12 14 16 14 26 A10 10 0 0 0 34 26 C34 16 28 12 24 6Z" fill="none" stroke="#1B9E8E" strokeWidth="2.5" />
                    <path d="M24 18 L24 30 M20 24 L24 18 L28 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
                title: '100% Non-GMO',
                desc: 'Clean ingredients you can trust. No artificial preservatives, no shortcuts.',
                badge: 'Certified',
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" className="w-10 h-10">
                    <ellipse cx="24" cy="28" rx="14" ry="8" fill="none" stroke="#1B9E8E" strokeWidth="2.5" />
                    <path d="M20 20 C20 16 28 16 28 20" fill="none" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="28" r="2" fill="#1B9E8E" />
                  </svg>
                ),
                title: "Hawai'i Small Batch",
                desc: 'Made locally on the islands in small batches for maximum freshness every time.',
                badge: 'Island Made',
              },
            ].map((feat, i) => (
              <ScrollReveal key={feat.title} delay={i * 100}>
                <div className="bg-cream rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    {feat.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2">{feat.title}</h3>
                  <p className="font-body text-sm text-charcoal/60 mb-4">{feat.desc}</p>
                  <span className="inline-block text-xs font-body font-700 uppercase tracking-wider bg-teal/10 text-teal px-3 py-1 rounded-full">
                    {feat.badge}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WavyDivider fill="var(--color-cream)" />

      {/* ===== PRODUCT TEASER ===== */}
      <section className="bg-gradient-to-br from-amber-light/50 to-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-teal/5 rounded-3xl -rotate-2" aria-hidden="true" />
                <img
                  src={PACKAGE_IMG}
                  alt="Tecalma Flour Tortillas"
                  className="relative rounded-2xl object-cover w-full shadow-lg"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <span className="inline-block text-xs font-body font-700 uppercase tracking-wider bg-amber/10 text-amber px-3 py-1 rounded-full mb-4">
                  Our Flagship
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                  Meet Our Flour Tortillas
                </h2>
                <p className="font-body text-charcoal/70 mb-6 leading-relaxed">
                  Our signature flour tortillas are crafted from simple, wholesome ingredients.
                  Extra soft, perfectly pliable, and made to hold whatever you love most.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {['10 tortillas per pack', '14 oz (396g)', 'Extra soft & flexible', 'Non-GMO certified'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm font-body text-charcoal/70">
                      <span className="text-teal">✦</span> {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 font-body font-700 text-teal hover:text-teal-dark transition-colors"
                >
                  See All Products <span className="text-lg">→</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.42 0.12 185)" />

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative bg-teal-dark py-20 overflow-hidden">
        {/* Floral overlay */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="test-floral" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="5" fill="#FDF6EC" />
                <circle cx="10" cy="10" r="2" fill="#E8A020" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#test-floral)" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              The Island <span className="italic text-amber">Loves</span> It.
            </h2>
          </ScrollReveal>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-warm-white rounded-3xl p-8 sm:p-10 shadow-xl min-h-[220px] flex flex-col justify-center">
              <div className="text-6xl text-teal/20 font-display leading-none mb-2">"</div>
              <p className="font-body text-lg sm:text-xl text-charcoal/80 leading-relaxed mb-6">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-white font-body font-bold text-sm">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <p className="font-body font-700 text-charcoal text-sm">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="font-body text-xs text-charcoal/50">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`carousel-dot cursor-pointer ${
                    i === currentTestimonial ? 'active' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <WavyDivider fill="var(--color-cream)" />

      {/* ===== FLORAL DIVIDER ===== */}
      <FloralBorder />

      {/* ===== WHERE TO BUY TEASER ===== */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
                Find Us <span className="italic text-teal">Near You</span>
              </h2>
              <p className="font-body text-charcoal/60 max-w-lg mx-auto">
                Available at your favorite local Hawai'i grocery stores and for online order with island-wide delivery.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ScrollReveal>
              <Link
                to="/where-to-buy"
                className="block bg-warm-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">🏪</div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">Find a Store Near You</h3>
                <p className="font-body text-sm text-charcoal/60 mb-4">
                  Browse our retail locations across the Hawaiian islands.
                </p>
                <span className="font-body font-700 text-teal group-hover:text-teal-dark transition-colors">
                  View Locations →
                </span>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link
                to="/shop"
                className="block bg-warm-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">📦</div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2">Order Online</h3>
                <p className="font-body text-sm text-charcoal/60 mb-4">
                  Get Tecalma delivered fresh to your door across Hawai'i.
                </p>
                <span className="font-body font-700 text-teal group-hover:text-teal-dark transition-colors">
                  Shop Now →
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
