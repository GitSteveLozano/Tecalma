import { useState } from 'react';
import { toast } from 'sonner';

const WAITLIST_FORM_ENDPOINT = 'https://formspree.io/f/xykngkyg';
const ISLANDS = ["O'ahu", 'Maui', "Hawai'i Island", "Kaua'i", "Moloka'i", 'Other'];

export default function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [island, setIsland] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(WAITLIST_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, island }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("You're on the list! We'll let you know when ordering opens.");
      } else {
        toast.error("Something went wrong. Please try again or email us at hello@tecalmatortillas.com");
      }
    } catch {
      toast.error("Something went wrong. Please try again or email us at hello@tecalmatortillas.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <p className="font-body font-700 text-teal text-center py-4">
        ✓ You're on the list! We'll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 rounded-full border border-charcoal/20 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
      />
      <select
        required
        value={island}
        onChange={e => setIsland(e.target.value)}
        className="px-4 py-3 rounded-full border border-charcoal/20 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-teal/40"
      >
        <option value="" disabled>Island</option>
        {ISLANDS.map(i => (
          <option key={i} value={i}>{i}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-teal text-white font-body font-700 px-6 py-3 rounded-full hover:bg-teal-dark transition-colors shadow-md cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Notify Me →'}
      </button>
    </form>
  );
}
