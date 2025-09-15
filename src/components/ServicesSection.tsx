import { useRef, useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, FileText, Shield, Building, Users, TrendingUp, Sparkles } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Cooperative Registration",
    items: [
      "Credit Cooperative Society (State Level)",
      "Multi-State Credit Cooperative Society", 
      "Microfinance Company under Section 8"
    ],
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: Shield,
    title: "Audit and Compliance",
    items: [
      "Annual audit as per applicable laws",
      "Statutory, legal, and RBI/NABARD compliance",
      "Preparation and filing of mandatory returns and documents"
    ],
    gradient: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Building,
    title: "Banking Business Setup",
    items: [
      "Designing cooperative banking business models",
      "SOPs, loan and deposit product creation",
      "Core banking solutions and digital integration support"
    ],
    gradient: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: Users,
    title: "Training and Capacity Building",
    items: [
      "Tailored training for board members and staff",
      "Regulatory awareness and governance best practices",
      "Operational training in day-to-day banking activities"
    ],
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600"
  },
  {
    icon: TrendingUp,
    title: "Business Growth and Expansion",
    items: [
      "Strategy development for scaling cooperative operations",
      "Multi-branch planning and execution",
      "Marketing, digital presence, and branding support"
    ],
    gradient: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

export const ServicesSection = () => {
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Specialized Services
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Cooperative</span> Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end services to establish, manage, and grow your cooperative financial institution with expert guidance and innovative solutions.
          </p>
          
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 -ml-7 group border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
            </button>
          )}
          
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 -mr-7 group border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
            </button>
          )}
          
          {/* Services Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-8 min-w-max">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`w-80 flex-shrink-0 transition-all duration-700 ${
                    inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-white ${
                    activeCard === index ? 'scale-105 -translate-y-2' : 'scale-100'
                  }`}>
                    
                    {/* Header with Dynamic Gradient */}
                    <div className={`h-44 relative overflow-hidden bg-gradient-to-br ${service.gradient}`}>
                      
                      {/* Animated particles in header */}
                      <div className="absolute inset-0">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${30 + i * 15}%`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: '2s'
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Icon Container */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <CardHeader className="pt-24 pb-6 relative z-10">
                        <CardTitle className="text-2xl font-bold text-white">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                    </div>
                    
                    <CardContent className="p-6">
                      <ul className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start group/item">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 ${service.bgColor} group-hover/item:scale-110 transition-transform duration-300`}>
                              <div className={`w-2 h-2 rounded-full ${service.iconColor.replace('text-', 'bg-')}`}></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <button className={`${service.iconColor} font-semibold text-sm flex items-center hover:underline transition-all duration-300 group/button`}>
                          Learn more
                          <ChevronRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 ${inView ? 'animate-fade-in' : 'opacity-0 translate-y-8'}`} style={{animationDelay: '1s'}}>
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Explore All Services
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};