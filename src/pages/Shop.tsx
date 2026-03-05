import WavyDivider from '../components/WavyDivider';
import WaitlistForm from '../components/WaitlistForm';

export default function Shop() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal pt-32 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Online Ordering Coming Soon
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl mx-auto">
            We're working on getting Tecalma delivered island-wide. Join the waitlist and be first to know.
          </p>
        </div>
        <WavyDivider fill="var(--color-cream)" className="mt-12" />
      </section>

      <section className="bg-cream py-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-warm-white rounded-3xl p-10 shadow-lg">
            <div className="text-4xl mb-4">📦</div>
            <h2 className="font-display text-2xl font-bold text-charcoal mb-3">
              Be First in Line
            </h2>
            <p className="font-body text-charcoal/60 mb-8 leading-relaxed">
              Online ordering is almost here. Join the waitlist and we'll notify you the moment Tecalma is available for island-wide delivery.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
