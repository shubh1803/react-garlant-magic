import { HeroSlider } from '@/components/HeroSlider';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { VisionSection } from '@/components/VisionSection';
import { QuickLinksSection } from '@/components/QuickLinksSection';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <VisionSection />
      <QuickLinksSection />
    </div>
  );
};

export default Index;
