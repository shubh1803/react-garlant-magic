import { HeroSlider } from '@/components/HeroSlider';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import WhyChooseSection from "@/components/WhyChooseSection";
//import { VisionSection } from '@/components/VisionSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <HeroSection />
     <section id="services">
  <ServicesSection />
</section>

      <WhyChooseSection />
       {/* <VisionSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
