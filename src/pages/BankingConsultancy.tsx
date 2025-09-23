import { useState, useEffect, useRef } from 'react';
import { motion,AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, Briefcase, BookOpen, Phone, Building,Settings,ChevronDown } from 'lucide-react';

const BankingConsultancy = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Banking Business Consultancy');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionRefs = {
    overview: useRef(null),
    services: useRef(null),
    benefits: useRef(null),
    process: useRef(null),
    faq: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    sectionRefs[sectionId].current.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openAppointmentForm = () => {
    setShowAppointmentForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
    document.body.style.overflow = "auto";
  };
   const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      question: "Who needs Banking Business Consultancy?",
      answer: "Anyone planning to start or grow a Credit Cooperative Society, Multi-State Cooperative Society, Microfinance Company, or other banking-related entity benefits from consultancy."
    },
    {
      question: "Can Sahakar Samruddhi help with registration and compliance?",
      answer: "Yes. We provide complete support for registration, licensing, compliance, audits, and training."
    },
    {
      question: "What documents are needed to start a cooperative or microfinance company?",
      answer: "Typically identity/address proofs of members, proposed bylaws, business plan, financial projections, and NOC from concerned authorities (if applicable)."
    },
    {
      question: "Do you provide ongoing support after registration?",
      answer: "Yes. We offer annual compliance, audit assistance, training, and advisory services to help your business stay compliant and grow."
    },
    {
      question: "How is this different from legal or accounting services?",
      answer: "We combine legal, financial, and operational expertise specifically for the banking and cooperative sector, providing a one-stop solution."
    },
    {
      question: "Can you customize consultancy for small societies or startups?",
      answer: "Absolutely. We tailor our services to suit the size, scope, and objectives of your organization."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Bubble Design Animation */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-10 left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-2xl opacity-40"
            animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-2xl opacity-40"
            animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-40 w-64 h-64 bg-indigo-600 rounded-full mix-blend-screen filter blur-2xl opacity-30"
            animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          ></motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 border border-white/30 backdrop-blur-md"
            >
              <Briefcase className="w-4 h-4 mr-2 text-purple-300" />
              <span className="text-sm font-medium">Banking Business Consultancy</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Banking Business <span className="text-purple-300">Consultancy</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10"
            >
              Starting or growing a banking-related business requires deep knowledge of regulations, operations, and market practices. At Sahakar Samruddhi, we provide complete Banking Business Consultancy services to help you set up, manage, and grow your financial institution with confidence.
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

      {/* Sticky Navigation with Subtle Slide Animation */}
      <motion.section 
        className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-gray-50/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1 min-w-max mx-auto">
              {[
                {id: 'overview', label: 'Overview'},
                {id: 'services', label: 'Our Services'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'process', label: 'Why Choose Us'},
                {id: 'faq', label: 'FAQs'}
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-5 py-3 rounded-lg font-medium text-sm transition-all ${activeTab === tab.id ? 
                    'bg-indigo-600 text-white shadow-md transform -translate-y-1' : 
                    'text-gray-700 hover:bg-gray-200 hover:text-indigo-600'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Section with Tree-like Branching Animation */}
          <div id="overview" ref={sectionRefs.overview} className="mb-20 scroll-mt-20 relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute left-0 top-0 w-32 h-32 bg-green-200 rounded-full filter blur-3xl opacity-20"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute right-0 bottom-0 w-48 h-48 bg-green-300 rounded-full filter blur-3xl opacity-20"
                animate={{ scale: [1, 1.4, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              ></motion.div>
            </div>
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Why Banking Business Consultancy Matters
              </h2>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "Banking and finance is a highly regulated sector in India",
                "Correct planning and compliance reduce risk and speed up approvals",
                "Expert guidance saves time and prevents costly mistakes",
                "Professional support helps in creating sustainable, profitable operations"
              ].map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg bg-indigo-50 border border-indigo-100"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Services Section with Card Flip Animation */}
          <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Key Services in Banking Business Consultancy
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Business Planning & Feasibility",
                  description: "We assist in preparing detailed project reports, feasibility studies, and financial projections to evaluate and plan your banking business effectively."
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  title: "Registration & Licensing Support",
                  description: "We guide you through the legal and regulatory process for Credit Cooperative Society, Multi-State Cooperative Society, and Microfinance Company registration."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Compliance and Governance Advisory",
                  description: "We help you understand and implement governance structures, bylaws, board procedures, and risk management systems to meet legal standards."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Operational Setup",
                  description: "We support you in designing loan and deposit products, drafting policies for credit, recovery, and customer service."
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Training and Capacity Building",
                  description: "We conduct training sessions for directors, managers, and staff on compliance, finance, customer service, and risk management."
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Business Growth & Expansion",
                  description: "We help societies and financial institutions plan branch expansion, digital adoption, and partnerships to grow sustainably."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-600 border border-blue-800 text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-indigo-600 mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-indigo-700 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section with Scale-Up Animation */}
         <div id="benefits" ref={sectionRefs.benefits} className="mb-20 scroll-mt-20 px-4 relative">
  {/* Background decorative shapes */}
  <motion.div
    className="absolute top-0 left-10 w-60 h-20 bg-indigo-200 rounded-3xl opacity-20 blur-3xl"
    animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-10 right-0 w-72 h-24 bg-purple-200 rounded-3xl opacity-20 blur-3xl"
    animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
  />

  {/* Heading */}
  <div className="text-center mb-12 relative z-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Benefits of Our Consultancy
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Discover the key advantages of partnering with us for your banking and microfinance business.
    </p>
  </div>

  {/* Capsule benefits */}
  <div className="flex flex-wrap justify-center gap-6 relative z-10">
    {[
      { title: "Step-by-step guidance from registration to operation", icon: <CheckCircle className="w-8 h-8 text-white mb-2" /> },
      { title: "Reduced delays and lower compliance risks", icon: <Clock className="w-8 h-8 text-white mb-2" /> },
      { title: "Customized solutions for your financial model", icon: <Settings className="w-8 h-8 text-white mb-2" /> },
      { title: "Expert advice on best practices in cooperative and microfinance sectors", icon: <Briefcase className="w-8 h-8 text-white mb-2" /> },
    ].map((benefit, index) => (
      <motion.div
        key={index}
        className="min-w-[220px] px-6 py-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex flex-col items-center justify-center text-center shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }}
      >
        {benefit.icon}
        <p className="text-sm font-semibold">{benefit.title}</p>
      </motion.div>
    ))}
  </div>
</div>
          {/* Why Choose Us Section with Slide-In Animation */}
          <div id="process" ref={sectionRefs.process} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Sahakar Samruddhi
            </h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "Experienced team with hands-on knowledge of cooperative and microfinance laws",
                "End-to-end services — from registration to compliance and training",
                "Transparent processes and practical, action-oriented advice",
                "Proven track record of helping societies and financial institutions grow"
              ].map((reason, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-4 rounded-lg bg-indigo-50 border border-indigo-100"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* FAQ Section with Accordion-like Expand Animation */}
      <div id="faq" className="mb-20 scroll-mt-20 px-4 relative">
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

          {/* CTA Section with Pulse Animation */}
          <motion.div 
            className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ scale: [1, 1.02, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Banking Business Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              With the right guidance, starting or growing your banking business becomes much easier. Sahakar Samruddhi offers expert consultancy to help you plan, register, and manage your financial institution confidently.
            </p>
            <button
              onClick={openAppointmentForm}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Banking Business Consultancy"
      />
    </div>
  );
};

export default BankingConsultancy;