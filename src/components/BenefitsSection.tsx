import { Compass, GraduationCap, Gift, Leaf } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const benefits = [
  {
    icon: Compass,
    title: 'Thoughtful Handpicked Curation',
    anchor: 'A softly glowing open book nested inside a compass, guiding you straight to your next great adventure.',
    transformation: 'Discover your next obsession instantly instead of wasting hours scrolling through cold, lifeless algorithms.',
    gradient: 'from-haven-400 to-emerald-500',
    iconBg: 'bg-haven-50',
    iconColor: 'text-haven-600',
  },
  {
    icon: GraduationCap,
    title: 'Budget-Friendly Academic Bundles',
    anchor: 'A sleek graduation cap merged with a protective shield, symbolizing affordable success and peace of mind.',
    transformation: 'Ace your classes with verified, exact-match textbooks without the heavy financial stress or fear of buying the wrong edition.',
    gradient: 'from-midnight-400 to-blue-500',
    iconBg: 'bg-midnight-50',
    iconColor: 'text-midnight-600',
  },
  {
    icon: Gift,
    title: 'Bespoke Literary Gift Boxes',
    anchor: 'A beautifully tied gift box with a delicate fountain pen resting on top, capturing the art of personalized gifting.',
    transformation: 'Give a deeply meaningful, custom-tailored package that makes your loved creative or reader feel truly seen and cherished.',
    gradient: 'from-warm-400 to-amber-500',
    iconBg: 'bg-warm-50',
    iconColor: 'text-warm-700',
  },
  {
    icon: Leaf,
    title: 'Carbon-Neutral Book Delivery',
    anchor: 'A delivery truck silhouette seamlessly transforming into a flourishing green leaf, blending modern speed with nature.',
    transformation: 'Build your dream physical library with a completely clear conscience, knowing your books arrived via eco-friendly routes.',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
];

export default function BenefitsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-950 via-midnight-900 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(92,124,250,0.08),transparent_60%)]" />

      <div className="relative container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-sm font-semibold text-haven-400 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Key Benefits
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Why Readers Choose Our Sanctuary
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card-dark rounded-2xl p-8 hover:-translate-y-1 transition-all duration-500 group ${
                isInView ? `animate-fade-in-up animation-delay-${(i + 2) * 100}` : 'opacity-0'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${b.iconBg} mb-5`}>
                <b.icon className={`w-6 h-6 ${b.iconColor}`} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {b.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4 italic">
                {b.anchor}
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
              <p className="text-gray-200 leading-relaxed">
                {b.transformation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
