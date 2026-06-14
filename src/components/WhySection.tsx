import { Heart, DollarSign, Link2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pillars = [
  {
    icon: Heart,
    title: 'Human Touch vs. Cold Algorithms',
    description: 'Replacing chaotic feeds with intentional, quiet spaces where every recommendation is made with care.',
    gradient: 'from-haven-500 to-emerald-400',
    bgGlow: 'bg-haven-400/10',
  },
  {
    icon: DollarSign,
    title: 'Budget Clarity vs. Heavy Burdens',
    description: 'Lifting academic financial stress with transparent pricing so you never overpay for knowledge.',
    gradient: 'from-midnight-500 to-blue-400',
    bgGlow: 'bg-midnight-400/10',
  },
  {
    icon: Link2,
    title: 'Deep Connection vs. Mass Market',
    description: 'Turning standard transactions into custom, physical packages that make people feel truly seen.',
    gradient: 'from-warm-500 to-amber-400',
    bgGlow: 'bg-warm-400/10',
  },
];

export default function WhySection() {
  const { ref, isInView } = useInView();

  return (
    <section id="why" className="relative bg-gradient-to-b from-white to-cream-50 section-padding" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-sm font-semibold text-haven-600 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Why The Book Haven
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Bringing the Heart Back to Your Bookshelf
          </h2>
          <p className={`mt-6 text-lg text-gray-600 leading-relaxed ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
            In a world dominated by cold, sterile digital algorithms that push the same viral books over and over, reading can begin to feel like endless clutter. At The Book Haven, we believe every book you open should be an experience, not a data point.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isInView ? `animate-fade-in-up animation-delay-${(i + 3) * 100}` : 'opacity-0'
              }`}
            >
              <div className={`absolute inset-0 rounded-2xl ${pillar.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} mb-6 shadow-lg`}>
                  <pillar.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
