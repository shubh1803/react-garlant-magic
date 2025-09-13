import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, FileText, Shield, Building, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Cooperative Registration",
    items: [
      "Credit Cooperative Society (State Level)",
      "Multi-State Credit Cooperative Society", 
      "Microfinance Company under Section 8"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23009688;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23007a6e;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ECooperative%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ERegistration%3C/text%3E%3C/svg%3E"
  },
  {
    icon: Shield,
    title: "Audit and Compliance",
    items: [
      "Annual audit as per applicable laws",
      "Statutory, legal, and RBI/NABARD compliance",
      "Preparation and filing of mandatory returns and documents"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232186c2;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231a6ba3;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3EAudit and%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ECompliance%3C/text%3E%3C/svg%3E"
  },
  {
    icon: Building,
    title: "Banking Business Setup",
    items: [
      "Designing cooperative banking business models",
      "SOPs, loan and deposit product creation",
      "Core banking solutions and digital integration support"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23643ea0;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23502e82;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3EBanking Business%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ESetup%3C/text%3E%3C/svg%3E"
  },
  {
    icon: Users,
    title: "Training and Capacity Building",
    items: [
      "Tailored training for board members and staff",
      "Regulatory awareness and governance best practices",
      "Operational training in day-to-day banking activities"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e84c3d;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23d13728;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ETraining and%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3ECapacity Building%3C/text%3E%3C/svg%3E"
  },
  {
    icon: TrendingUp,
    title: "Business Growth and Expansion",
    items: [
      "Strategy development for scaling cooperative operations",
      "Multi-branch planning and execution",
      "Marketing, digital presence, and branding support"
    ],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f39c11;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23d68910;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='200' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3EBusiness Growth%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='white'%3Eand Expansion%3C/text%3E%3C/svg%3E"
  }
];

export const ServicesSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      // Update arrow visibility after a short delay to allow scroll to complete
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-indigo-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
       <div className="text-center mb-12">
         <span className="text-blue-800 text-lg md:text-xl font-semibold tracking-wider uppercase mb-2 block">
         Our Specialized Services
  </span>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
   Comprehensive Cooperative Solutions 
  </h2>
 

  <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
    We provide end-to-end services to establish, manage, and grow your cooperative financial institution.
  </p>
</div>

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 -ml-6"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          )}
          
          {/* Right Arrow */}
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 -mr-6"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          )}
          
          {/* Services Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 hide-scrollbar"
            onScroll={checkScrollPosition}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 min-w-max">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="w-80 flex-shrink-0"
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Card className={`h-full border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group ${
                    activeCard === index ? 'scale-105' : 'scale-100'
                  }`}>
                    {/* Header with Image */}
                    <div className="h-40 relative overflow-hidden">
                      {/* Image with service name */}
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Icon */}
                      <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <CardHeader className="pt-20 pb-4 relative z-10">
                        <CardTitle className="text-xl font-bold text-white text-left">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                    </div>
                    
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 bg-blue-100 text-blue-600">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-600 leading-relaxed text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <button className="text-blue-600 font-medium text-sm flex items-center hover:text-blue-800 transition-colors duration-300">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore All Services
          </button>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};