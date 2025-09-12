import { HeroSlider } from '@/components/HeroSlider';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      
      {/* Add more sections below the slider as needed */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Landscaping Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional landscape design and maintenance services to transform your outdoor space into a beautiful, functional environment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
