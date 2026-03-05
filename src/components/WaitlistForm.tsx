import { useState } from 'react';
import { toast } from 'sonner';

const ISLANDS = ["O'ahu", 'Maui', "Hawai'i Island", "Kaua'i", "Moloka'i", 'Other'];

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [island, setIsland] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("You're on the list! We'll let you know when ordering opens.");
  };

  if (submitted) {
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
        className="bg-teal text-white font-body font-700 px-6 py-3 rounded-full hover:bg-teal-dark transition-colors shadow-md cursor-pointer whitespace-nowrap"
      >
        Notify Me →
      </button>
    </form>
  );
}
