import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { 
  CheckCircle, Users, FileText, TrendingUp, Clock, Shield, 
  Briefcase, BookOpen, Phone, Building, Settings, ChevronDown,
  ChevronLeft, ChevronRight, BarChart3, Target, Zap, Rocket
} from 'lucide-react';

const BankingBusinessGrowth = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Banking Business Growth');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  // Refs for scrolling sections
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const benefitsScrollRef = useRef<HTMLDivElement>(null);
  const faqScrollRef = useRef<HTMLDivElement>(null);
  
  const [showLeftArrow, setShowLeftArrow] = useState({
    services: false,
    benefits: false,
    faq: false
  });
  
  const [showRightArrow, setShowRightArrow] = useState({
    services: true,
    benefits: true,
    faq: true
  });

  const sectionRefs = {
    overview: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    benefits: useRef<HTMLDivElement>(null),
    faq: useRef<HTMLDivElement>(null)
  };

  const checkScrollPosition = (scrollRef: React.RefObject<HTMLDivElement>, section: string) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(prev => ({ ...prev, [section]: scrollLeft > 0 }));
      setShowRightArrow(prev => ({ ...prev, [section]: scrollLeft < scrollWidth - clientWidth - 10 }));
    }
  };

  const scroll = (direction: 'left' | 'right', scrollRef: React.RefObject<HTMLDivElement>, section: string) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        checkScrollPosition(scrollRef, section);
      }, 300);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    if (sectionRefs[sectionId]?.current) {
      sectionRefs[sectionId].current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const openAppointmentForm = () => {
    setShowAppointmentForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      
      Object.keys(sectionRefs).forEach(key => {
        if (sectionRefs[key].current) {
          const sectionTop = sectionRefs[key].current.offsetTop - 100;
          const sectionBottom = sectionTop + sectionRefs[key].current.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const growthServices = [
    {
      icon: Target,
      title: "Business Strategy and Expansion Planning",
      description: "We help you design growth strategies that match your goals, whether adding branches, diversifying products, or reaching new segments.",
      features: ["Strategic Planning", "Market Expansion", "Product Diversification", "Member Segmentation"]
    },
    {
      icon: Zap,
      title: "Operational Optimization", 
      description: "We review your existing processes and identify areas to reduce costs, improve efficiency, and streamline workflows.",
      features: ["Process Improvement", "Cost Reduction", "Workflow Optimization", "Performance Enhancement"]
    },
    {
      icon: Shield,
      title: "Compliance and Risk Management",
      description: "Growth without compliance can be risky. We ensure your policies, audits, and reporting scale with your operations.",
      features: ["Scalable Compliance", "Risk Assessment", "Policy Updates", "Regulatory Alignment"]
    },
    {
      icon: Settings,
      title: "Technology Upgrade and Integration",
      description: "We assist with core banking upgrades, digital payment systems, and customer-facing apps for larger operations.",
      features: ["Core Banking Upgrades", "Digital Payments", "Mobile Apps", "System Integration"]
    },
    {
      icon: TrendingUp,
      title: "Product Diversification",
      description: "We guide you in designing new financial products to increase revenue streams and serve more member needs.",
      features: ["New Product Development", "Market Research", "Revenue Optimization", "Service Enhancement"]
    },
    {
      icon: Users,
      title: "Staff Development and Leadership Training",
      description: "We conduct programs to prepare your managers and teams for handling larger operations and customer expectations.",
      features: ["Leadership Development", "Team Training", "Skill Enhancement", "Performance Management"]
    }
  ];

  const benefits = [
    "Clear roadmap for sustainable expansion",
    "Improved operational efficiency and profitability", 
    "Enhanced member satisfaction and trust",
    "Compliance-ready systems at scale",
    "Reduced operational costs and risks",
    "Future-ready technology infrastructure"
  ];

  const faqs = [
    {
      question: "When should a banking business start planning for growth?",
      answer: "Ideally from day one, but even established institutions can benefit from a growth strategy at any stage. Early planning ensures sustainable and compliant expansion."
    },
    {
      question: "Can you help with opening new branches or expanding to other states?",
      answer: "Yes. We provide branch expansion planning, regulatory guidance, and infrastructure support for both intra-state and inter-state expansion."
    },
    {
      question: "Do you handle technology upgrades?",
      answer: "Yes. We help with software selection, system integration, and digital channel development to support growth and improve customer experience."
    },
    {
      question: "How do you ensure compliance during growth?",
      answer: "We create scalable compliance and risk management frameworks and train your staff to implement them as you expand operations."
    },
    {
      question: "Can you support fundraising or capital planning?",
      answer: "Yes. We guide you on capital adequacy, funding options, and financial forecasting to ensure your institution can sustain expansion without liquidity stress."
    },
    {
      question: "What if our institution is small?",
      answer: "Our services are tailored to small, medium, and large institutions, ensuring relevance and affordability at every scale."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
           <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
              <span className="text-sm font-medium">Banking Business Growth Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Banking Business <span className="text-purple-300">Growth</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Launching a banking institution is only the first step. The real challenge is sustained growth — 
              building a strong customer base, expanding services, maintaining compliance, and improving profitability.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={openAppointmentForm}
                className="bg-white text-indigo-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Growing
              </button>
              <button
                onClick={() => scrollToSection('overview')}
                className="border-2 border-white/70 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:border-white"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1 min-w-max mx-auto">
              {[
                {id: 'overview', label: 'Overview'},
                {id: 'services', label: 'Services'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'faq', label: 'FAQs'}
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-5 py-3 rounded-lg font-medium text-sm transition-all ${activeTab === tab.id ? 
                    'bg-indigo-600 text-white shadow-md transform -translate-y-1' : 
                    'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Section */}
          <div id="overview" ref={sectionRefs.overview} className="mb-20 scroll-mt-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Focus on Growth?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                A well-planned growth strategy ensures long-term sustainability, attracts more customers, 
                and improves profitability while maintaining compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: TrendingUp, title: "Sustainable Growth", desc: "Long-term success strategy" },
                { icon: Users, title: "Customer Base", desc: "Attract and retain members" },
                { icon: Shield, title: "Compliance Ready", desc: "Risk-free expansion" },
                { icon: BarChart3, title: "Higher Profitability", desc: "Improved financial performance" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Section with Horizontal Scroll */}
           <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Banking Business Growth Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive growth services to help your institution move from start-up to scale-up successfully
              </p>
  </div>

  <div className="relative">
    {showLeftArrow.services && (
      <button 
        onClick={() => scroll('left', servicesScrollRef, 'services')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-all duration-300 -ml-6 group border border-gray-200"
      >
        <ChevronLeft className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800" />
      </button>
    )}

    {showRightArrow.services && (
      <button 
        onClick={() => scroll('right', servicesScrollRef, 'services')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 transition-all duration-300 -mr-6 group border border-gray-200"
      >
        <ChevronRight className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800" />
      </button>
    )}

    <div 
      ref={servicesScrollRef}
      className="flex overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar"
      onScroll={() => checkScrollPosition(servicesScrollRef, 'services')}
    >
      <div className="flex space-x-6 min-w-max">
        {growthServices.map((service, index) => (
          <div key={index} className="w-80 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
              
              {/* Number Circle */}
              <div className="w-12 h-12 bg-indigo-500 text-black-600 font-bold rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
         

          {/* Benefits Section with Horizontal Scroll */}
         <div id="benefits" ref={sectionRefs.benefits} className="mb-20 scroll-mt-20">
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Benefits of Our Growth Support
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      What you gain by choosing our professional banking business growth services
    </p>
  </div>

  <div className="max-w-6xl mx-auto">
    {/* Desktop: 3-column grid */}
    <div className="hidden md:grid md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center hover:shadow-xl transition-all"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold mr-4">
            ✓
          </div>
          <p className="text-gray-900 font-medium">{benefit}</p>
        </motion.div>
      ))}
    </div>

    {/* Mobile: Horizontal scroll (3 per page) */}
    <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory py-4">
      {Array.from({ length: Math.ceil(benefits.length / 3) }).map((_, pageIndex) => (
        <div
          key={pageIndex}
          className="flex flex-col gap-4 w-[90%] snap-start flex-shrink-0"
        >
          {benefits
            .slice(pageIndex * 3, pageIndex * 3 + 3)
            .map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                  ✓
                </div>
                <p className="text-gray-900 font-medium">{benefit}</p>
              </motion.div>
            ))}
        </div>
      ))}
    </div>
  </div>
</div>

          {/* FAQ Section with Horizontal Scroll */}
          <div id="faq" ref={sectionRefs.faq} className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Frequently Asked Questions
           </h2>
         </div>
         
         <div className="max-w-5xl mx-auto">
           {/* Desktop: 2 Columns */}
           <div className="hidden md:grid md:grid-cols-2 gap-6">
             {faqs.map((faq, index) => (
               <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 15 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.4, delay: index * 0.05 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
               >
                 <button
                   onClick={() => toggleFAQ(index)}
                   className="w-full px-6 py-4 flex justify-between items-center focus:outline-none"
                 >
                   <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                   <motion.span
                     animate={{ rotate: activeIndex === index ? 180 : 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <ChevronDown className="w-5 h-5 text-gray-500" />
                   </motion.span>
                 </button>
         
                 <AnimatePresence>
                   {activeIndex === index && (
                     <motion.div
                       key="content"
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: "auto" }}
                       exit={{ opacity: 0, height: 0 }}
                       transition={{ duration: 0.3 }}
                       className="px-6 pb-4 text-gray-600 text-sm"
                     >
                       {faq.answer}
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             ))}
           </div>
         
           {/* Mobile: Horizontal Scroll, 5 per page */}
           <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory py-4">
             {[0, 3].map((startIndex) => (
               <div key={startIndex} className="flex flex-col gap-4 min-w-[85%] snap-center">
                 {faqs.slice(startIndex, startIndex + 3).map((faq, index) => (
                   <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.4, delay: index * 0.05 }}
                     viewport={{ once: true }}
                     className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                   >
                     <button
                       onClick={() => toggleFAQ(startIndex + index)}
                       className="w-full px-5 py-4 flex justify-between items-center focus:outline-none"
                     >
                       <h3 className="text-base font-medium text-gray-800">{faq.question}</h3>
                       <motion.span
                         animate={{ rotate: activeIndex === startIndex + index ? 180 : 0 }}
                         transition={{ duration: 0.3 }}
                       >
                         <ChevronDown className="w-5 h-5 text-gray-500" />
                       </motion.span>
                     </button>
         
                     <AnimatePresence>
                       {activeIndex === startIndex + index && (
                         <motion.div
                           key="content"
                           initial={{ opacity: 0, height: 0 }}
                           animate={{ opacity: 1, height: "auto" }}
                           exit={{ opacity: 0, height: 0 }}
                           transition={{ duration: 0.3 }}
                           className="px-5 pb-4 text-gray-600 text-sm"
                         >
                           {faq.answer}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </motion.div>
                 ))}
               </div>
             ))}
           </div>
         </div>
         <br />

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 px-4 sm:py-16 sm:px-8 rounded-2xl">
  <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
    Ready to Grow Your Banking Business?
  </h2>
  <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
    Growth takes planning, expertise, and disciplined execution. Sahakar Samriddhi helps you identify 
    opportunities, remove roadblocks, and implement systems needed to expand successfully.
  </p>
  <button
    onClick={openAppointmentForm}
    className="bg-white text-indigo-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
  >
    Start Your Growth Journey
  </button>
</div>

        </div>
      </section>

      <Footer />
      
      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Banking Business Growth Consultation"
      />
    </div>
  );
};

export default BankingBusinessGrowth;