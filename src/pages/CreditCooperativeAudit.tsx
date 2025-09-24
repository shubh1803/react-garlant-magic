import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, AlertTriangle, BookOpen, Phone, ChevronDown, Building, Settings, Briefcase } from 'lucide-react';

const CreditCooperativeAudit = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Credit Cooperative Society Audit and Compliance');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const sectionRefs = {
    overview: useRef(null),
    requirements: useRef(null),
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

  const faqs = [
    {
      question: "How often should a Credit Cooperative Society be audited?",
      answer: "Every Credit Cooperative Society must undergo a statutory audit once every financial year as per the Cooperative Societies Act. Some societies may also choose to conduct internal audits quarterly or half-yearly for better control."
    },
    {
      question: "Who can conduct the audit of a Credit Cooperative Society?",
      answer: "Audits must be conducted by a qualified auditor approved by the Registrar of Cooperative Societies or by a certified professional familiar with cooperative accounting standards."
    },
    {
      question: "What documents are required for the audit?",
      answer: "Typically you need: Cash books and ledgers, bank statements and reconciliations, loan and deposit registers, share capital and membership registers, minutes of meetings and bylaws, previous year's audit report and financial statements."
    },
    {
      question: "What are the penalties for non-compliance?",
      answer: "Failure to conduct an audit, file annual returns, or maintain statutory registers can lead to fines, disqualification of office bearers, or cancellation of registration by the Registrar."
    },
    {
      question: "Does a Credit Cooperative Society have to pay tax?",
      answer: "Yes. Depending on income and activities, a Credit Cooperative Society may be liable for income tax, TDS, GST, or professional tax. Timely filing of returns avoids penalties and interest."
    },
    {
      question: "What are statutory registers, and why are they important?",
      answer: "Statutory registers record members' details, shareholdings, loans, meetings, and board resolutions. They are mandatory under cooperative laws and help maintain transparency."
    },
    {
      question: "Can Sahakar Samruddhi help with tax filings too?",
      answer: "Yes. In addition to audits and compliance, Sahakar Samruddhi can assist with income tax filings, TDS returns, GST compliance, and other financial advisory services."
    },
    {
      question: "How can we stay compliant year-round?",
      answer: "Keep accurate records, schedule regular board meetings, maintain statutory registers, and work with professionals like Sahakar Samruddhi for audits, returns, and timely advice."
    }
  ];
  const benefits = [
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Professional Expertise",
                  description: "Professional expertise in cooperative sector regulations"
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Timely Filing",
                  description: "Timely filing and reduced penalties"
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Clear Reports",
                  description: "Clear financial reports for better decision making"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Peace of Mind",
                  description: "Peace of mind so you can focus on member services"
                }
              ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-bounce delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-ping"></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 border border-white/20 backdrop-blur-sm"
            >
              <Shield className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium">Audit & Compliance Services</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Credit Cooperative Society <span className="text-blue-300">Audit & Compliance</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Running a Credit Cooperative Society involves more than just lending and managing funds. Regular audits and compliance with statutory requirements are essential to maintain transparency, protect members' interests, and avoid penalties.
            </motion.p>

            {/* Buttons */}
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
                Schedule Audit
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

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-16 h-16 border border-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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
                {id: 'requirements', label: 'Requirements'},
                {id: 'services', label: 'Our Services'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'process', label: 'Process'},
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
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Section */}
          <div 
            id="overview" 
            ref={sectionRefs.overview} 
            className="mb-20 scroll-mt-20"
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Why Audit and Compliance Matter
              </h2>
            </div>

            {/* Horizontal Stepper */}
            <div className="relative max-w-6xl mx-auto">
              {/* Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400"></div>

              <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-6">
                {[
                  {
                    step: "1",
                    title: "Transparency & Trust",
                    description: "Ensures transparency and trust among members",
                    icon: <Users className="w-6 h-6" />
                  },
                  {
                    step: "2",
                    title: "Early Detection", 
                    description: "Detects errors or irregularities early",
                    icon: <AlertTriangle className="w-6 h-6" />
                  },
                  {
                    step: "3",
                    title: "Financial Discipline",
                    description: "Demonstrates financial discipline to regulators and banks",
                    icon: <TrendingUp className="w-6 h-6" />
                  },
                  {
                    step: "4",
                    title: "Government Support",
                    description: "Helps in securing loans, grants, or government support",
                    icon: <Shield className="w-6 h-6" />
                  },
                  {
                    step: "5",
                    title: "Avoid Penalties",
                    description: "Prevents penalties and legal action for non-compliance",
                    icon: <CheckCircle className="w-6 h-6" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex-1 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg relative z-10 font-bold">
                        {item.step}
                      </div>
                      <div className="mt-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                        <div className="text-blue-600 mb-3 flex justify-center">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold text-blue-700 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div 
            id="requirements" 
            ref={sectionRefs.requirements} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-100 ${
              isVisible.requirements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Compliance Requirements for Credit Cooperative Societies
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Annual General Meeting (AGM)",
                  description: "Societies must conduct their AGM within the prescribed time to approve accounts, elect the board, and discuss important matters."
                },
                {
                  title: "Filing of Annual Returns",
                  description: "Annual returns, audited financial statements, and compliance certificates must be filed with the Registrar of Cooperative Societies."
                },
                {
                  title: "Maintenance of Statutory Registers",
                  description: "Societies must maintain registers of members, shares, loans, and board meetings."
                },
                {
                  title: "Tax Compliance",
                  description: "Depending on your operations, your society may be liable for income tax, TDS, GST, or professional tax. Filing returns on time avoids penalties."
                },
                {
                  title: "Reserve Funds and Provisions",
                  description: "As per cooperative laws, a portion of profits must be transferred to the reserve fund each year. Compliance with such provisions is mandatory."
                },
                {
                  title: "Board and Committee Meetings",
                  description: "Regular meetings of the board and subcommittees must be held with proper notice, quorum, and recorded minutes."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div 
            id="services" 
            ref={sectionRefs.services} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-200 ${
              isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Audit and Compliance Services
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              At Sahakar Samruddhi, we provide end-to-end support to ensure your Credit Cooperative Society meets all legal obligations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Conducting statutory audits",
                "Preparing and filing annual returns",
                "Maintaining statutory books and registers",
                "Drafting compliance reports for AGM",
                "Advising on tax and financial planning",
                "Helping you respond to notices from the Registrar or tax authorities"
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-gray-900 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
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
     Benefits of Outsourcing Audit and Compliance
    </h2>
   
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

          {/* Process Section */}
          <div
            id="process"
            ref={sectionRefs.process}
            className={`mb-20 p-10 scroll-mt-20 transition-all duration-700 delay-400 ${
              isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our step-by-step audit and compliance process ensures your Credit Cooperative Society stays compliant and transparent.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-12">
              {[
                { title: "Review", icon: "📝", color: "from-blue-400 to-indigo-500" },
                { title: "Audit", icon: "📊", color: "from-purple-400 to-pink-500" },
                { title: "Compliance Filing", icon: "📑", color: "from-green-400 to-teal-500" },
                { title: "Ongoing Support", icon: "🛡️", color: "from-yellow-400 to-orange-500" },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative w-40 h-40 flex flex-col items-center justify-center text-center animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {/* Floating Gradient Bubble */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${step.color} opacity-60 blur-2xl`} />

                  {/* Step Circle */}
                  <div className="relative w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <p className="text-sm font-semibold px-3">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Details */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Initial Review Phase</h3>
                <p className="text-gray-600">
                  We begin by thoroughly reviewing your society's financial records, compliance status, and operational procedures to understand your specific needs and requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Comprehensive Audit</h3>
                <p className="text-gray-600">
                  Our certified auditors conduct detailed statutory audits following cooperative accounting standards and regulatory requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Timely Filing</h3>
                <p className="text-gray-600">
                  We ensure all necessary returns and compliance documents are prepared accurately and filed with the Registrar of Cooperative Societies on time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Continuous Support</h3>
                <p className="text-gray-600">
                  We provide ongoing advisory services, compliance monitoring, and timely reminders to keep your society compliant throughout the year.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
         <div className="text-center mb-12">
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
             {[0, 5].map((startIndex) => (
               <div key={startIndex} className="flex flex-col gap-4 min-w-[85%] snap-center">
                 {faqs.slice(startIndex, startIndex + 5).map((faq, index) => (
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
         <br/>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-center text-white shadow-xl transition-all duration-500 hover:shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Stay Compliant?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Keeping your Credit Cooperative Society audit-ready doesn't have to be complicated. Sahakar Samruddhi offers complete audit and compliance support so you can focus on serving your members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openAppointmentForm}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Contact Us Today
              </button>
              <button
                onClick={openAppointmentForm}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Schedule Audit & Compliance Consultation"
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-10px) translateX(-50%);
          }
          60% {
            transform: translateY(-5px) translateX(-50%);
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CreditCooperativeAudit;