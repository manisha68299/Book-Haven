import { BookOpen, GraduationCap, Gift, Clock, Mail, Truck, Zap, ShieldCheck, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const categories = [
  {
    icon: BookOpen,
    title: 'The Fiction & Indie Sanctuary',
    formats: ['Hardcover editions', 'Indie paperbacks', 'Instantly downloadable e-books', 'High-quality audiobooks'],
    delivery: 'Digital formats arrive in your email inbox within 60 seconds; physical books ship in 3-5 business days with live tracking.',
    deliveryIcon: Mail,
    gradient: 'from-haven-500 to-emerald-400',
    bgGlow: 'bg-haven-500/5',
  },
  {
    icon: GraduationCap,
    title: 'The Academic & Educator Hub',
    formats: ['Verified textbook editions', 'Rental options', 'Downloadable study guides', 'Digital resource bundles'],
    delivery: 'Digital guides and course packs unlock instantly on your checkout page; physical textbooks arrive via expedited 2-3 day shipping.',
    deliveryIcon: Zap,
    gradient: 'from-midnight-500 to-blue-400',
    bgGlow: 'bg-midnight-500/5',
  },
  {
    icon: Gift,
    title: 'The Curated Gift Box Registry',
    formats: ['Custom book-and-merch pairings', 'Seasonal subscription crates', 'Personalized greeting cards', 'Premium linen gift wraps'],
    delivery: 'Gift boxes are assembled by hand in 48 hours, packed in eco-friendly mailers, and shipped via tracked, carbon-neutral courier service.',
    deliveryIcon: Leaf,
    gradient: 'from-warm-500 to-amber-400',
    bgGlow: 'bg-warm-500/5',
  },
];

const stats = [
  { value: 'Thousands', label: 'Curated Titles', icon: BookOpen },
  { value: '100%', label: 'Verified Academic Editions', icon: ShieldCheck },
  { value: '24-Hour', label: 'Custom Gift Assembly', icon: Clock },
];

export default function CatalogSection() {
  const { ref, isInView } = useInView();
  const { ref: statRef, isInView: statsInView } = useInView();

  return (
    <section id="catalog" className="relative bg-gradient-to-b from-cream-50 to-white section-padding" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className={`inline-block text-sm font-semibold text-haven-600 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Our Catalog
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Masterfully Organized. Responsibly Delivered.
          </h2>
        </div>

        <div ref={statRef} className={`grid grid-cols-3 gap-4 sm:gap-8 mb-16 ${statsInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-xl p-4 sm:p-6 text-center">
              <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-haven-500 mx-auto mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group relative rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                isInView ? `animate-fade-in-up animation-delay-${(i + 3) * 100}` : 'opacity-0'
              }`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${cat.bgGlow} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />

              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} mb-6 shadow-lg`}>
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-5">
                  {cat.title}
                </h3>

                <ul className="space-y-2.5 mb-6">
                  {cat.formats.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.gradient} mt-2 flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-gray-50 p-4">
                  <div className="flex items-start gap-3">
                    <cat.deliveryIcon className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {cat.delivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
