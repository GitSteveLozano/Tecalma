import { useState } from 'react';
import { toast } from 'sonner';
import WavyDivider from '../components/WavyDivider';

const ISLANDS = ["O'ahu", 'Maui', "Hawai'i Island", "Kaua'i", "Moloka'i", 'Other'];
const VOLUMES = ['Just exploring', '1–10 packs/week', '10–50 packs/week', '50–100 packs/week', '100+ packs/week'];
const USES = ['Tacos & street food', 'Breakfast / brunch', 'Wraps & sandwiches', 'Quesadillas', 'Multiple uses', 'Other'];

const valueProps = [
  'Extra soft, consistent texture — holds up in service',
  'Non-GMO, no artificial preservatives',
  "Made in Hawai'i — local story your guests will love",
  'Flexible order quantities as we scale',
  'Direct relationship with the maker',
];

export default function Wholesale() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Inquiry received! We'll be in touch soon.");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 text-white font-body font-700 text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            For Restaurants & Food Service
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Bring Tecalma to Your Kitchen
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto">
            Local Hawaiian-made flour tortillas, small batch, non-GMO. Built for chefs who care about what goes on the plate.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      {/* Two-column section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — value props */}
            <div className="pt-4">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-8">
                Why Chefs Choose Tecalma
              </h2>
              <div className="space-y-5">
                {valueProps.map(prop => (
                  <div key={prop} className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#1B9E8E" strokeWidth="2" />
                      <path d="M8 12l3 3 5-5" stroke="#1B9E8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-body text-charcoal/80">{prop}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-warm-white rounded-2xl p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🌺</div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                    Mahalo! We'll be in touch.
                  </h3>
                  <p className="font-body text-charcoal/60">
                    We review every inquiry personally and will reach out within 2 business days.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-6">
                    Send Us an Inquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">First & Last Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Restaurant / Business Name *</label>
                      <input type="text" required className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Phone Number *</label>
                      <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Island / Location *</label>
                      <select required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40">
                        <option value="" disabled>Select island</option>
                        {ISLANDS.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Estimated Weekly Volume *</label>
                      <select required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40">
                        <option value="" disabled>Select volume</option>
                        {VOLUMES.map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">How would you use Tecalma? *</label>
                      <select required defaultValue="" className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40">
                        <option value="" disabled>Select use</option>
                        {USES.map(u => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Anything else you'd like us to know?</label>
                      <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40 resize-none" />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal text-white font-body font-700 py-3.5 rounded-full hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25 cursor-pointer"
                    >
                      Send Inquiry →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <WavyDivider fill="oklch(0.92 0.08 80)" />

      {/* Bottom CTA */}
      <section className="bg-amber-light py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-body text-charcoal/70">
            Have questions before submitting? Reach us at{' '}
            <a href="mailto:hello@tecalmatortillas.com" className="font-700 text-teal hover:text-teal-dark transition-colors underline">
              hello@tecalmatortillas.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
