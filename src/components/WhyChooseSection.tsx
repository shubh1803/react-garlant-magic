import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Shield, Globe, Users, DollarSign, Heart, Award } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "In-depth expertise in cooperative banking regulations",
      description: "",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Globe,
      title: "One-stop solution from registration to growth", 
      description: "",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Users,
      title: "Pan-India service coverage with a dedicated team",
      description: "",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: DollarSign,
      title: "Transparent pricing with result-driven approach",
      description: "",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Heart,
      title: "Customized support for rural and urban cooperatives",
      description: "",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
   
  ];

  const scrollContainerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    
    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        checkScrollPosition();
      }, 300);
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="w-3 h-3 bg-blue-400/20 rounded-full opacity-70"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
         
          
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
  Why Choose  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
    सहकार&nbsp;समृद्धी
  </span>
</h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
  We stand out from the competition with our specialized expertise, comprehensive solutions, 
  and unwavering commitment to the success of cooperative institutions across India.
</p>

          
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 -ml-7 group border border-gray-200 hover:border-blue-300"
            >
              <ChevronLeft className="w-7 h-7 text-blue-600 group-hover:text-blue-700" />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 -mr-7 group border border-gray-200 hover:border-blue-300"
            >
              <ChevronRight className="w-7 h-7 text-blue-600 group-hover:text-blue-700" />
            </button>
          )}
          
          {/* Features Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-8 min-w-max">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`w-96 flex-shrink-0 transition-all duration-700 ${
                    inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white ${
                    activeCard === index ? 'scale-105 -translate-y-2 shadow-xl' : 'scale-100'
                  } relative`}>
                    
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 z-20"></div>
                    
                    {/* Professional Image */}
                    <div className="h-52 relative overflow-hidden">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Icon Container */}
                      <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-gray-200 shadow-sm">
                        <feature.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-md">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA */}
      <div className={`text-center mt-16 transition-all duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '1s'}}>
  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
    Ready to Transform Your Cooperative Institution?
  </h3>
  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
    Join hundreds of successful cooperative institutions that have trusted Sahakar Samruddhi 
    for their banking and financial consultancy needs.
  </p>
  <button className="bg-primary-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105">
    Get Started Today
  </button>
</div>

      </div>

    </section>
  );
};

export default WhyChooseSection;