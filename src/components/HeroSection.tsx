import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Sahakar Samruddhi
          </h1>
          <p className="text-xl md:text-2xl text-primary/80 mb-8 font-medium">
            Empowering Cooperatives with Banking & Finance Expertise
          </p>
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/20">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Welcome to Sahakar Samruddhi
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sahakar Samruddhi is your trusted consultancy partner for creating, managing, and expanding cooperative financial institutions in India. We specialize in Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies registered under Section 8.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our mission is to empower cooperatives with expert support in legal compliance, strategic growth, and modern banking systems. Whether you're starting a new institution or looking to streamline and scale an existing one, we provide the guidance and solutions you need.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground px-8">
              Request a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};