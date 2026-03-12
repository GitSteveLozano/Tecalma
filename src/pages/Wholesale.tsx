import { useState } from 'react';
import { toast } from 'sonner';
import WavyDivider from '../components/WavyDivider';

const WHOLESALE_FORM_ENDPOINT = 'https://formspree.io/f/mnjgajal';

const ISLANDS = ["O'ahu", 'Maui', "Hawai'i Island", "Kaua'i", "Moloka'i", 'Other'];
const VOLUMES = ['Just exploring', '10–50 tortillas/week', '50–100 tortillas/week', '100–500 tortillas/week', '500–1,000 tortillas/week', '1,000+ tortillas/week'];


const valueProps = [
  'Extra soft, consistent texture — holds up in service',
  'Clean label, no artificial preservatives',
  "Made in Hawai'i — local story your guests will love",
  'Flexible order quantities as we scale',
  'Direct relationship with the maker',
];

export default function Wholesale() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    island: '',
    volume: '',

    notes: '',
  });

  const update = (field: string, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WHOLESALE_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Inquiry received! We'll be in touch soon.");
      } else {
        toast.error("Something went wrong. Please try again or email us at hello@tecalmatortillas.com");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us at hello@tecalmatortillas.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-charcoal/15 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40';

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
              {isSubmitted ? (
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
                      <input type="text" required value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Restaurant / Business Name *</label>
                      <input type="text" required value={form.business} onChange={e => update('business', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Email Address *</label>
                      <input type="email" required value={form.email} onChange={e => update('email', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Phone Number *</label>
                      <input type="tel" required value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Island / Location</label>
                      <select value={form.island} onChange={e => update('island', e.target.value)} className={inputClass}>
                        <option value="" disabled>Select island</option>
                        {ISLANDS.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Estimated Weekly Volume *</label>
                      <select required value={form.volume} onChange={e => update('volume', e.target.value)} className={inputClass}>
                        <option value="" disabled>Select volume</option>
                        {VOLUMES.map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block font-body text-sm font-600 text-charcoal/70 mb-1">Anything else you'd like us to know?</label>
                      <textarea rows={3} value={form.notes} onChange={e => update('notes', e.target.value)} className={`${inputClass} resize-none`} />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal text-white font-body font-700 py-3.5 rounded-full hover:bg-teal-dark transition-colors shadow-lg shadow-teal/25 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Inquiry →'}
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
            {' '}or call{' '}
            <a href="tel:+19723913616" className="font-700 text-teal hover:text-teal-dark transition-colors underline">
              (972) 391-3616
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
