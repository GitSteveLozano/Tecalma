import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <div className="text-6xl mb-4">🫓</div>
        <h1 className="font-display text-5xl font-bold text-charcoal mb-4">404</h1>
        <p className="font-body text-lg text-charcoal/60 mb-8">
          Looks like this page rolled off the table. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block bg-teal text-white font-body font-700 px-8 py-3.5 rounded-full hover:bg-teal-dark transition-all shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
