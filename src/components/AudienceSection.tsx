import { BookHeart, ScrollText, Package } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const segments = [
  {
    icon: BookHeart,
    title: 'The Soul-Seeking Reader',
    profile: 'They seek an immersive escape, a quiet sanctuary from the noise of the world, and stories that touch the heart.',
    promise: '"We promise to guide you past the viral noise straight to the hidden literary treasures that speak directly to your soul."',
    gradient: 'from-haven-500 to-emerald-400',
    bg: 'bg-haven-50',
    borderColor: 'border-haven-200',
    promiseBg: 'bg-haven-100/60',
  },
  {
    icon: ScrollText,
    title: 'The Purpose-Driven Scholar',
    profile: 'They need specific, accurate, and verified curricula to succeed academically without facing overwhelming financial stress.',
    promise: '"We promise to fuel your academic journey with exact-match textbooks at prices that respect your hard work and budget."',
    gradient: 'from-midnight-500 to-blue-400',
    bg: 'bg-midnight-50',
    borderColor: 'border-midnight-200',
    promiseBg: 'bg-midnight-100/60',
  },
  {
    icon: Package,
    title: 'The Heartfelt Giver',
    profile: 'They desire effortless premium presentation and unique, meaningful packages that make their loved ones feel truly seen.',
    promise: '"We promise to turn your affection into art with beautifully curated gift boxes that deliver love in every single detail."',
    gradient: 'from-warm-500 to-amber-400',
    bg: 'bg-warm-50',
    borderColor: 'border-warm-200',
    promiseBg: 'bg-warm-100/60',
  },
];

export default function AudienceSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-white section-padding" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-sm font-semibold text-haven-600 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            For Whom This Is
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Shelves Tailored Preciously for You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <div
              key={s.title}
              className={`group relative rounded-2xl border ${s.borderColor} ${s.bg} p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isInView ? `animate-fade-in-up animation-delay-${(i + 2) * 100}` : 'opacity-0'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} mb-6 shadow-lg`}>
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {s.profile}
              </p>
              <div className={`rounded-xl ${s.promiseBg} p-4`}>
                <p className="text-gray-800 leading-relaxed text-sm font-medium italic">
                  {s.promise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
