import { useState, useEffect } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

function CountdownTimer() {
  const [time, setTime] = useState({ d: 2, h: 14, m: 44, s: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { d, h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 23; d -= 1; }
        if (d < 0) { d = 0; h = 0; m = 0; s = 0; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2 font-mono text-lg sm:text-2xl font-bold text-midnight-900">
      <span className="bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 shadow-sm">{pad(time.d)}d</span>
      <span className="text-midnight-400">:</span>
      <span className="bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 shadow-sm">{pad(time.h)}h</span>
      <span className="text-midnight-400">:</span>
      <span className="bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 shadow-sm">{pad(time.m)}m</span>
      <span className="text-midnight-400">:</span>
      <span className="bg-white/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 shadow-sm">{pad(time.s)}s</span>
    </div>
  );
}

export default function UrgencyFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-br from-cream-100 via-warm-50 to-cream-50 section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.08),transparent_60%)]" />
        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warm-100 border border-warm-200 rounded-full mb-6">
            <Zap className="w-4 h-4 text-warm-600" />
            <span className="text-sm font-semibold text-warm-700">Grand Opening Special</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Save 15% Site-Wide + Free Carbon-Neutral Shipping
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Curated collections starting at just <span className="line-through text-gray-400">$11.99</span>{' '}
            <span className="text-haven-600 font-bold text-xl">$9.99</span> — Discount applied at checkout
          </p>

          <p className="text-sm text-gray-500 mb-4">Offer Expires In:</p>
          <CountdownTimer />

          <div className="mt-10">
            <a href="#catalog" className="btn-primary text-lg !px-10 !py-4 animate-pulse-glow">
              Claim My Discount & Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-midnight-950 text-white section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-haven-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="font-display text-lg font-bold">The Book Haven</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your next great reading adventure, intentionally chosen just for you.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-haven-400 transition-colors">Fiction & Indie</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Academic Hub</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Gift Boxes</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-haven-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-haven-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-haven-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">2025 The Book Haven. All rights reserved.</p>
            <p className="text-sm text-gray-500">Crafted with care for curious minds.</p>
          </div>
        </div>
      </footer>

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-haven-600 to-emerald-600 text-white py-3 px-4 shadow-lg animate-fade-in-up">
          <div className="container-wide flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Grand Opening: 15% off + Free shipping on your first order!</span>
              <span className="sm:hidden">15% off + Free shipping!</span>
            </div>
            <a
              href="#catalog"
              className="inline-flex items-center gap-1 bg-white text-haven-700 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-cream-50 transition-colors"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
