import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'Can I read your e-books on my Kindle or e-reader?',
    a: 'Yes. Our e-books come in universal EPUB and PDF formats compatible with Kindle, Kobo, and mobile reading apps.',
  },
  {
    q: 'How do I know I am buying the correct textbook edition?',
    a: 'Every textbook page lists its exact ISBN, publication year, and professor-verified edition details to guarantee a perfect match.',
  },
  {
    q: 'What is your return policy on physical books and gift boxes?',
    a: 'We offer hassle-free, 30-day returns on all unread physical books. Custom gift boxes are final sale but fully insured against shipping damage.',
  },
  {
    q: 'How long does carbon-neutral shipping take?',
    a: 'Standard delivery takes 3-5 business days. We offset 100% of carbon emissions from every shipment at no extra cost to you.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-haven-200">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={onToggle}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-haven-500' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white section-padding" ref={ref}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className={`inline-block text-sm font-semibold text-haven-600 uppercase tracking-wider mb-4 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            FAQ
          </span>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Your Questions, Answered
          </h2>
        </div>

        <div className={`max-w-2xl mx-auto space-y-3 mb-12 ${isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className={`max-w-2xl mx-auto ${isInView ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <div className="rounded-2xl bg-gradient-to-r from-haven-50 to-emerald-50 border border-haven-100 p-6 sm:p-8 text-center">
            <MessageCircle className="w-8 h-8 text-haven-500 mx-auto mb-3" />
            <p className="font-display text-lg font-bold text-gray-900 mb-2">Our Care Promise</p>
            <p className="text-gray-600 leading-relaxed">
              Still looking for your next chapter? Chat with a real, human librarian 24/7 for book recommendations or order support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
