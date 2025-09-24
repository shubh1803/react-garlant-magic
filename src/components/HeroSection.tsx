import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/20 via-background to-accent/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side Content */}
        <div className="flex-1 text-left space-y-8">
  {/* Hero Heading */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in-left">
    <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
      सहकार&nbsp;समृद्धी
    </span>
  </h1>

  {/* Subheading / Tagline */}
  <p className="text-xl md:text-2xl text-primary/80 font-medium max-w-md leading-snug relative animate-fade-in">
    <span className="bg-primary-gradient bg-clip-text text-transparent animate-shine">
      Empowering Cooperatives with Banking & Finance Expertise
    </span>

    <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-1000"></span>
  </p>

  {/* Specializations Card */}
  <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary transition-all duration-300 hover:shadow-2xl hover:border-primary/80 hover:bg-primary/10 group animate-slide-in-right">
    <h3 className="text-lg font-semibold text-foreground mb-4 text-xl md:text-2xl bg-primary-gradient bg-clip-text text-transparent animate-fade-in">
      Our Specializations
    </h3>
    <ul className="text-muted-foreground space-y-2">
      <li className="transition-all duration-300 hover:translate-x-2 hover:text-primary-gradient cursor-pointer">
        • Credit Cooperative Societies
      </li>
      <li className="transition-all duration-300 hover:translate-x-2 hover:text-primary-gradient cursor-pointer">
        • Multi-State Credit Cooperative Societies
      </li>
      <li className="transition-all duration-300 hover:translate-x-2 hover:text-primary-gradient cursor-pointer">
        • Microfinance Companies (Section 8)
      </li>
    </ul>
  </div>
</div>

          
          {/* Right Side Content - Enhanced Card */}
          <div className="flex-1 bg-card rounded-2xl p-8 shadow-lg border border-border/20 relative overflow-hidden group transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 relative">
              Welcome to Sahakar Samruddhi
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-24"></span>
            </h2>
            <div className="space-y-6 relative">
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                Sahakar Samruddhi is your trusted consultancy partner for creating, managing, and expanding cooperative financial institutions in India. We specialize in Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies registered under Section 8.
              </p>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                Our mission is to empower cooperatives with expert support in legal compliance, strategic growth, and modern banking systems. Whether you're starting a new institution or looking to streamline and scale an existing one, we provide the guidance and solutions you need.
              </p>
            </div>
            
            <Button size="lg" className="mt-8 bg-primary-gradient from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 text-md w-full transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg relative overflow-hidden group">
              <span className="relative z-10">Request a Free Consultation</span>
              <span className="w-full sm:w-auto bg-primary-gradient text-white border-none hover:scale-105 transition-transform"></span>
            </Button>
           
          </div>
        </div>
      </div>
      
    </section>
  );
};