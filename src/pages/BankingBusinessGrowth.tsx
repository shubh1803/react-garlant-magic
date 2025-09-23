import { useState, useEffect, useRef } from 'react';
import { motion ,AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, TrendingUp, Target, Users, Settings, DollarSign, BarChart, Lightbulb, Shield, Phone, Clock, FileText, BookOpen, Briefcase,ChevronDown } from 'lucide-react';

const BankingBusinessGrowth = () => {
      const [activeIndex, setActiveIndex] = useState(null);

  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Banking Business Growth');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionRefs = {
    overview: useRef(null),
    services: useRef(null),
    benefits: useRef(null),
    whyus: useRef(null),
    faq: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    sectionRefs[sectionId].current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  const toggleFAQ = (index) => {
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

  const faqs = [
    {
      question: "When should a banking business start planning for growth?",
      answer: "Ideally from day one — but even established institutions can benefit from a growth strategy at any stage."
    },
    {
      question: "Can you help with opening new branches or expanding to other states?",
      answer: "Yes. We provide branch expansion planning, regulatory guidance, and infrastructure support."
    },
    {
      question: "Do you handle technology upgrades?",
      answer: "Yes. We help with software selection, system integration, and digital channel development to support growth."
    },
    {
      question: "How do you ensure compliance during growth?",
      answer: "We create scalable compliance and risk management frameworks and train your staff to implement them."
    },
    {
      question: "Can you support fundraising or capital planning?",
      answer: "Yes. We guide you on capital adequacy, funding options, and financial forecasting to sustain your growth."
    },
    {
      question: "What if our institution is small?",
      answer: "Our services are tailored to small, medium, and large institutions, ensuring relevance and affordability."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20 backdrop-blur-sm"
            >
              <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium">Banking Business Growth</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Banking Business <span className="text-blue-300">Growth</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Launching a banking or financial institution is only the first step. The real challenge is sustained growth — building a strong customer base, expanding services, maintaining compliance, and improving profitability.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button
                onClick={openAppointmentForm}
                className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Consultation
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
                {id: 'services', label: 'Our Services'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'whyus', label: 'Why Choose Us'},
                {id: 'faq', label: 'FAQs'}
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-5 py-3 rounded-lg font-medium text-sm transition-all ${activeTab === tab.id ? 
                    'bg-blue-600 text-white shadow-md transform -translate-y-1' : 
                    'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Section */}
          <div id="overview" ref={sectionRefs.overview} className="mb-20 scroll-mt-20">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Why Focus on Growth?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "A well-planned growth strategy ensures long-term sustainability",
                "Strong systems and products attract more customers",
                "Effective compliance prevents penalties and reputational risks",
                "Better trained staff deliver improved service and retention"
              ].map((point, index) => (
                <div key={index} className="flex items-start p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Banking Business Growth Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Business Strategy and Expansion Planning",
                  description: "We help you design growth strategies that match your goals, whether that means adding new branches, diversifying products, or reaching new member segments."
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Operational Optimization",
                  description: "We review your existing processes and identify areas to reduce costs, improve efficiency, and streamline workflows."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Compliance and Risk Management",
                  description: "Growth without compliance can be risky. We make sure your policies, audits, and reporting scale with your expanding operations."
                },
                {
                  icon: <Settings className="w-8 h-8" />,
                  title: "Technology Upgrade and Integration",
                  description: "We assist with core banking upgrades, digital payment systems, MIS, and customer-facing apps to support a larger customer base and more complex operations."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Product Diversification",
                  description: "We guide you in designing and launching new financial products such as microloans, savings products, insurance tie-ups, or digital services to increase revenue streams."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Staff Development and Leadership Training",
                  description: "We conduct leadership and capacity-building programs to prepare your managers and teams for handling larger operations and customer expectations."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Marketing and Brand Growth",
                  description: "We help you build targeted marketing campaigns, digital presence, and member outreach strategies to grow your customer base."
                },
                {
                  icon: <DollarSign className="w-8 h-8" />,
                  title: "Financial and Capital Planning",
                  description: "We advise on capital adequacy, fund-raising options, and financial planning to ensure your institution can sustain expansion without liquidity stress."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div id="benefits" ref={sectionRefs.benefits} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Our Growth Support
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Clear roadmap for expansion - Strategic planning for sustainable growth",
                "Improved efficiency and profitability - Optimized operations for better returns",
                "Enhanced member satisfaction and trust - Better service quality and customer experience",
                "Compliance-ready systems at scale - Scalable compliance frameworks"
              ].map((benefit, index) => (
                <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.split(' - ')[0]}</h3>
                  </div>
                  <p className="text-gray-600 ml-8">{benefit.split(' - ')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div id="whyus" ref={sectionRefs.whyus} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Sahakar Samruddhi for Growth
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Deep experience in cooperative and financial sector growth strategies - Proven track record in scaling financial institutions",
                "End-to-end support from planning to implementation - Complete guidance throughout your growth journey",
                "Tailored solutions for your size, location, and vision - Customized approaches for every organization",
                "Transparent processes with measurable outcomes - Clear metrics and results-driven approach"
              ].map((reason, index) => (
                <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{reason.split(' - ')[0]}</h3>
                  </div>
                  <p className="text-gray-600 ml-8">{reason.split(' - ')[1]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}

          <div id="faq" ref={sectionRefs.faq}className="mb-20 scroll-mt-20 px-4 relative">
             {/* Heading */}
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">
                 Frequently Asked Questions (FAQs)
               </h2>
               <p className="text-gray-600 max-w-2xl mx-auto">
                 Find answers to the most common questions about our banking and consultancy services.
               </p>
             </div>
       
             {/* FAQ List */}
             <div className="max-w-4xl mx-auto space-y-4">
               {faqs.map((faq, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: index * 0.1 }}
                   viewport={{ once: true }}
                   className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl shadow-lg overflow-hidden border border-indigo-100"
                 >
                   {/* Question */}
                   <button
                     onClick={() => toggleFAQ(index)}
                     className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                   >
                     <h3 className="text-lg font-semibold text-indigo-700">{faq.question}</h3>
                     <motion.span
                       animate={{ rotate: activeIndex === index ? 180 : 0 }}
                       transition={{ duration: 0.3 }}
                     >
                       <ChevronDown className="w-6 h-6 text-indigo-700" />
                     </motion.span>
                   </button>
       
                   {/* Answer */}
                   <AnimatePresence>
                     {activeIndex === index && (
                       <motion.div
                         key="content"
                         initial={{ opacity: 0, height: 0 }}
                         animate={{ opacity: 1, height: "auto" }}
                         exit={{ opacity: 0, height: 0 }}
                         transition={{ duration: 0.4 }}
                         className="px-6 pb-6 text-gray-700"
                       >
                         {faq.answer}
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </motion.div>
               ))}
             </div>
           </div>
       
          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Banking Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Growth takes planning, expertise, and disciplined execution. Sahakar Samruddhi helps you identify opportunities, remove roadblocks, and implement the systems needed to expand successfully.
            </p>
            <button
              onClick={openAppointmentForm}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Start Growing Today
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Banking Business Growth"
      />
    </div>
  );
};

export default BankingBusinessGrowth;