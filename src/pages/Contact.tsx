import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import WavyDivider from '../components/WavyDivider';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll get back to you within 48 hours. 🌺");
    setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
            Questions, wholesale inquiries, or just want to say aloha? We'd love to hear from you.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <form onSubmit={handleSubmit} className="bg-warm-white rounded-3xl p-8 shadow-lg space-y-5">
                  <div>
                    <label className="block font-body text-sm font-700 text-charcoal mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-700 text-charcoal mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-700 text-charcoal mb-1">Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Wholesale</option>
                      <option>Press</option>
                      <option>Retail Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-700 text-charcoal mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/10 bg-cream font-body text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-y"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-teal text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-teal-dark transition-all shadow-lg shadow-teal/25 cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-warm-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <h3 className="font-body font-700 text-charcoal text-sm">Email</h3>
                      <p className="font-body text-charcoal/60">hello@tecalma.com</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="bg-warm-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <h3 className="font-body font-700 text-charcoal text-sm">Location</h3>
                      <p className="font-body text-charcoal/60">Honolulu, Hawai'i</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-warm-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📱</span>
                    <div>
                      <h3 className="font-body font-700 text-charcoal text-sm">Instagram</h3>
                      <p className="font-body text-charcoal/60">@tecalmatortillas</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Wholesale callout */}
              <ScrollReveal delay={300}>
                <div className="bg-amber/10 border border-amber/20 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-charcoal mb-2">Wholesale Inquiries</h3>
                  <p className="font-body text-sm text-charcoal/60">
                    Interested in carrying Tecalma in your store? Use the contact form and select "Retail Partnership" — we'd love to work with you.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
