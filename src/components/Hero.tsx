import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-haven-50/30" />

      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-haven-200/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-midnight-200/15 rounded-full blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-warm-200/10 rounded-full blur-3xl animate-float animation-delay-600" />

      <div className="relative container-wide section-padding pt-28 sm:pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-haven-50 border border-haven-200 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-haven-600" />
            <span className="text-sm font-medium text-haven-700">Handpicked for curious minds</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-100">
            Instantly Access a{' '}
            <span className="text-gradient">Curated World</span>{' '}
            of Knowledge, Entertainment, and Inspiration.
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Delivered right to your door or device. Skip the sterile algorithms and rediscover the magic of handpicked storytelling, verified academic essentials, and bespoke literary gifts.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-500">
            <a href="#catalog" className="btn-primary text-lg !px-10 !py-4">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#why" className="btn-secondary text-lg !px-10 !py-4">
              Learn More
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
            Welcome to The Book Haven, where your next great reading adventure is intentionally chosen just for you. Whether you are searching for an immersive escape from the digital noise, hunting down the exact textbook for your next semester, or crafting a deeply meaningful gift for someone special, we bridge the gap between convenient modern delivery and the warm feel of your favorite neighborhood bookstore.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12 animate-fade-in-up animation-delay-700">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Curated Titles</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Verified Editions</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">24h</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Gift Assembly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
