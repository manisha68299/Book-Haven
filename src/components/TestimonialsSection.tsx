import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Elena R.',
    role: 'Avid Fiction Enthusiast',
    quote: 'I was so exhausted from social media feeds pushing the same five thriller novels. Finding this platform changed everything; my first order was a stunning indie edition book I had never heard of, and it\'s now my absolute favorite.',
    highlight: 'Felt like walking into a cozy local bookstore online.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    role: 'University Sophomore',
    quote: 'The anxiety of ordering the wrong textbook edition used to keep me up before syllabus week. Here, I just matched the ISBN, got exactly what my professor required, and saved a ton of money.',
    highlight: 'Saved me over $150 this semester and arrived in days.',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    role: 'Dedicated Aunt & Holiday Shopper',
    quote: 'I wanted something special for my niece but hate wrapping gifts. The premium gift box combo arrived looking incredibly upscale, and she called me crying because she felt so incredibly understood.',
    highlight: 'The most beautifully packaged gift I\'ve ever sent.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative bg-gradient-to-b from-white to-cream-50 section-padding" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-sm font-semibold text-haven-600 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Testimonials
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Real Stories from Our Sanctuary
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group relative rounded-2xl bg-white border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                isInView ? `animate-fade-in-up animation-delay-${(i + 2) * 100}` : 'opacity-0'
              }`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-haven-200 group-hover:text-haven-300 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm-400 text-warm-400" />
                ))}
              </div>

              <p className="font-display text-lg font-semibold text-gray-900 italic mb-4">
                {t.highlight}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-haven-400 to-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
