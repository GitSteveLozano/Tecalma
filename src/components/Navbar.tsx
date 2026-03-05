import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'Our Story' },
    { to: '/where-to-buy', label: 'Where to Buy' },
    { to: '/wholesale', label: 'Wholesale' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-warm-white transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight" style={{ color: '#1B9E8E' }}>
              TECALMA
            </span>
            <span className="font-body text-[10px] font-700 uppercase tracking-[0.25em]" style={{ color: 'rgba(44, 36, 22, 0.5)' }}>
              Tortillas
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-600 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? 'text-teal bg-teal/10'
                    : 'text-charcoal hover:text-teal hover:bg-teal/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Shop CTA (desktop) */}
            <Link
              to="/shop"
              className="hidden md:inline-flex bg-teal text-white font-body font-700 text-sm px-5 py-2 rounded-full hover:bg-teal-dark transition-colors shadow-md"
            >
              Shop Now
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-charcoal cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-warm-white/95 backdrop-blur-md border-t border-charcoal/10 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block font-body font-600 px-4 py-3 rounded-xl transition-colors ${
                location.pathname === link.to
                  ? 'text-teal bg-teal/10'
                  : 'text-charcoal hover:bg-teal/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/shop"
            className="block text-center bg-teal text-white font-body font-700 px-5 py-3 rounded-full mt-3"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
