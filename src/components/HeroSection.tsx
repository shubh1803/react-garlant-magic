import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Shield } from 'lucide-react';

const features = [
  { icon: Users, text: "Credit Cooperative Societies", color: "text-blue-600" },
  { icon: TrendingUp, text: "Multi-State Credit Societies", color: "text-green-600" },
  { icon: Shield, text: "Microfinance Companies (Section 8)", color: "text-purple-600" }
];

export const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            <Sparkles className="w-4 h-4 text-blue-400 opacity-40" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Enhanced Typography */}
          <div className="flex-1 text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-red-700 animate-fade-in">सहकार</span>
                <span className="block text-gray-800 ml-24 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  समृद्धी
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full animate-scale-in" style={{animationDelay: '0.6s'}}></div>
            </div>

            <p className="text-2xl md:text-3xl text-gray-700 font-medium leading-relaxed animate-fade-in" style={{animationDelay: '0.9s'}}>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Empowering Cooperatives with Banking & Finance Expertise
              </span>
            </p>
            
            {/* Animated feature showcase */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-lg animate-fade-in" style={{animationDelay: '1.2s'}}>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                Our Specializations
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center transition-all duration-500 ${
                      activeFeature === index ? 'transform translate-x-2 text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    <feature.icon className={`w-5 h-5 mr-3 ${activeFeature === index ? feature.color : 'text-gray-400'}`} />
                    <span className={`font-medium ${activeFeature === index ? 'font-semibold' : ''}`}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced Card with Parallax */}
          <div className="flex-1 relative">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden group transform hover:scale-[1.02] transition-all duration-500 animate-fade-in" style={{animationDelay: '1.5s'}}>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              
              {/* Moving gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-orange-50 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 relative">
                  Welcome to Sahakar Samruddhi
                  <div className="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full group-hover:w-32 transition-all duration-500"></div>
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Sahakar Samruddhi is your trusted consultancy partner for creating, managing, and expanding cooperative financial institutions in India. We specialize in Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies registered under Section 8.
                  </p>
                  <p className="text-lg group-hover:text-gray-700 transition-colors duration-300">
                    Our mission is to empower cooperatives with expert support in legal compliance, strategic growth, and modern banking systems. Whether you're starting a new institution or looking to streamline and scale an existing one, we provide the guidance and solutions you need.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Request a Free Consultation
                    <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};