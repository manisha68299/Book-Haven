import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import BenefitsSection from './components/BenefitsSection';
import AudienceSection from './components/AudienceSection';
import CatalogSection from './components/CatalogSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import UrgencyFooter from './components/UrgencyFooter';

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <Hero />
      <WhySection />
      <BenefitsSection />
      <AudienceSection />
      <CatalogSection />
      <TestimonialsSection />
      <FAQSection />
      <UrgencyFooter />
    </div>
  );
}

export default App;
