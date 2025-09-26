import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { 
  CheckCircle, Users, FileText, TrendingUp, Clock, Shield, 
  Briefcase, BookOpen, Phone, Building, Settings, ChevronDown,
  ChevronLeft, ChevronRight, Lightbulb, Target, Cog
} from 'lucide-react';

const BankingBusinessSetup = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Banking Business Setup');
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

  const setupServices = [
    {
      icon: Lightbulb,
      title: "Business Feasibility and Planning",
      description: "We prepare detailed project reports, feasibility studies, and financial projections to assess the viability of your banking business.",
      features: ["Market Analysis", "Financial Projections", "Risk Assessment", "Competitive Study"]
    },
    {
      icon: Building,
      title: "Entity Selection and Registration", 
      description: "We guide you in choosing and registering the right entity for your goals.",
      features: ["Credit Cooperative Society", "Multi-State Cooperative Society", "Microfinance Company (Section 8)", "Other Financial Institutions"]
    },
    {
      icon: Shield,
      title: "Regulatory Approvals and Licensing",
      description: "We help you navigate the legal and compliance steps required by authorities.",
      features: ["Registrar Approvals", "MCA Compliance", "License Procurement", "Legal Documentation"]
    },
    {
      icon: FileText,
      title: "Bylaws and Policies",
      description: "We assist in drafting clear bylaws, credit policies, and operational manuals.",
      features: ["Bylaw Drafting", "Credit Policies", "Operational Manuals", "Compliance Framework"]
    },
    {
      icon: Cog,
      title: "Infrastructure and Technology Setup",
      description: "We support you in setting up complete banking infrastructure.",
      features: ["Branch Offices", "Core Banking Software", "Digital Payment Platforms", "Security Systems"]
    },
    {
      icon: Users,
      title: "Staff Training and Capacity Building",
      description: "We conduct comprehensive training programs for your entire team.",
      features: ["Management Training", "Compliance Training", "Customer Service", "Technology Training"]
    }
  ];

  const benefits = [
    "End-to-end guidance from planning to launch",
    "Reduced risk of regulatory delays and penalties", 
    "Expert input on technology, compliance, and operations",
    "Faster go-live with a sustainable model",
    "Customized solutions for your specific needs",
    "Ongoing support and consultation"
  ];

  const faqs = [
    {
      question: "Who can start a banking or financial institution?",
      answer: "Any group or company that meets the minimum capital, membership, and regulatory criteria can start, with proper approvals from relevant authorities."
    },
    {
      question: "What is the first step in setting up a banking business?",
      answer: "Begin with a feasibility study and business plan to understand your market, financial projections, and regulatory requirements."
    },
    {
      question: "Can Sahakar Samriddhi help with licensing and registration?",
      answer: "Yes. We guide you through entity registration, bylaw drafting, and obtaining approvals from authorities."
    },
    {
      question: "What infrastructure is needed?",
      answer: "A suitable office space, IT systems, accounting framework, and trained staff to run operations smoothly."
    },
    {
      question: "Do you offer post-setup support?",
      answer: "Absolutely. We offer ongoing compliance, audits, staff training, and advisory services after launch."
    },
    {
      question: "Can you customize your setup services for small societies or startups?",
      answer: "Yes. We tailor our services to match the scale, budget, and objectives of your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
              <span className="text-sm font-medium">Banking Business Setup Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Banking Business <span className="text-purple-300">Setup</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Starting a banking or financial institution requires more than just capital. It demands proper planning, 
              regulatory approvals, infrastructure, and systems to serve customers responsibly and profitably.
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
                Get Started
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
                Why Proper Setup Matters
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                Banking and financial services are highly regulated in India. Correct setup saves time, 
                avoids legal issues, and creates long-term sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: "Regulatory Compliance", desc: "Meets all legal requirements" },
                { icon: Clock, title: "Time Efficient", desc: "Faster approvals and setup" },
                { icon: Users, title: "Customer Trust", desc: "Professional credibility" },
                { icon: TrendingUp, title: "Long-term Success", desc: "Sustainable growth foundation" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Banking Business Setup Services</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Comprehensive setup services from concept to launch
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
        {setupServices.map((service, index) => (
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
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Setup Service</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Why choose our professional banking business setup services
    </p>
  </div>

  <div className="max-w-6xl mx-auto">
    {/* Desktop: Grid with 3 columns */}
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
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
            ✓
          </div>
          <p className="text-gray-900 font-medium">{benefit}</p>
        </motion.div>
      ))}
    </div>

    {/* Mobile: Horizontal Scroll, 3 per page */}
    <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory py-4">
      {Array.from({ length: Math.ceil(benefits.length / 3) }).map((_, pageIndex) => (
        <div
          key={pageIndex}
          className="flex flex-col gap-4 w-[90%] snap-start flex-shrink-0"
        >
          {benefits.slice(pageIndex * 3, pageIndex * 3 + 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold mr-4">
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
         <div id="faq" ref={sectionRefs.faq}  className="text-center mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">
    Frequently Asked Questions
  </h2>
</div>

<div className="max-w-5xl mx-auto">
  {/* Desktop: 2 Columns */}
  <div  className="hidden md:grid md:grid-cols-2 gap-6">
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
    <div
      key={startIndex}
      className="flex flex-col gap-4 w-[90%] snap-start flex-shrink-0"
    >
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
    Ready to Set Up Your Banking Business?
  </h2>
  <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
    With our services under one roof, Sahakar Samriddhi makes it easier to start and grow your financial institution.
  </p>
  <button
    onClick={openAppointmentForm}
    className="bg-white text-indigo-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
  >
    Start Your Setup Today
  </button>
</div>

        </div>
      </section>

      <Footer />
      
      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Banking Business Setup Consultation"
      />
    </div>
  );
};

export default BankingBusinessSetup;