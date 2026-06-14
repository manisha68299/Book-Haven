import { useState, useEffect } from 'react';
import { BookOpen, Menu, X, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Fiction', 'Academic', 'Gift Boxes', 'FAQ'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-padding !py-0">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <BookOpen
              className={`w-7 h-7 transition-colors duration-300 ${
                scrolled ? 'text-haven-600' : 'text-haven-500'
              }`}
            />
            <span
              className={`font-display text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-gray-900'
              }`}
            >
              The Book Haven
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-colors duration-200 hover:text-haven-600 ${
                  scrolled ? 'text-gray-600' : 'text-gray-700'
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary !px-6 !py-2.5 !text-sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="block text-base font-medium text-gray-700 hover:text-haven-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="btn-primary w-full !text-sm mt-4">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
