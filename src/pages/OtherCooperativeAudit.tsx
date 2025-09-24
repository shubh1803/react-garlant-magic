import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, AlertTriangle, BookOpen, Phone, Home, ChevronDown, Building } from 'lucide-react';

const OtherCooperativeAudit = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Other Cooperative Society Audit and Compliance');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionRefs = {
    overview: useRef(null),
    requirements: useRef(null),
    services: useRef(null),
    benefits: useRef(null),
    process: useRef(null),
    faq: useRef(null)
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      question: "Who can audit a Cooperative Society?",
      answer: "A qualified auditor or panel auditor approved by the Registrar of Cooperative Societies conducts the statutory audit."
    },
    {
      question: "How often should a Cooperative Society be audited?",
      answer: "Every cooperative society must undergo an annual statutory audit as per the applicable Cooperative Societies Act."
    },
    {
      question: "What are the main compliance requirements?",
      answer: "Holding AGMs, filing annual returns, maintaining statutory registers, complying with tax laws, and transferring profits to reserve funds."
    },
    {
      question: "Do Cooperative Societies pay tax?",
      answer: "Yes. Depending on income and activities, societies may be liable for income tax, GST, TDS, or other state-level taxes."
    },
    {
      question: "What happens if a society fails to comply?",
      answer: "Non-compliance can result in fines, disqualification of office bearers, or cancellation of registration by the Registrar."
    },
    {
      question: "Can Sahakar Samruddhi handle all filings?",
      answer: "Yes. We provide end-to-end support including audits, compliance filings, tax returns, and advisory for all types of cooperative societies."
    },
    {
      question: "How can a society prepare for an audit?",
      answer: "Maintain updated books of accounts, keep all registers current, reconcile bank accounts, and ensure proper documentation of every transaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Bubble Design Animation */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-10 left-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-2xl opacity-40"
            animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-2xl opacity-40"
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
              <Home className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium">Cooperative Society Audit Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Other Cooperative Society <span className="text-blue-300">Audit & Compliance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Every Cooperative Society — whether it focuses on housing, agriculture, transport, education, or welfare — must follow legal requirements to stay transparent and trustworthy. Regular audits and compliance filings are the backbone of a well-managed society.
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
                Schedule Society Audit
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
                    'text-gray-700 hover:bg-gray-200 hover:text-blue-600'}`}
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
          
          {/* Overview Section */}
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
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Audit and Compliance Are Essential
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Member Confidence",
                  description: "Builds confidence among members and stakeholders",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Early Detection",
                  description: "Detects mistakes or irregularities early",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Registrar Accountability", 
                  description: "Shows accountability to the Registrar of Cooperative Societies",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Access to Support",
                  description: "Helps access grants, loans, or subsidies from banks and government",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Prevent Legal Actions",
                  description: "Prevents penalties and legal actions",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  title: "Operational Excellence",
                  description: "Ensures smooth and efficient society operations",
                  color: "from-pink-500 to-pink-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Requirements Section */}
          <div id="requirements" ref={sectionRefs.requirements} className="mb-20 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Compliance Requirements
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cooperative societies must adhere to specific compliance requirements to maintain their legal standing and operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Annual General Meeting (AGM)",
                  description: "Hold your AGM within the stipulated time to approve audited accounts, elect office bearers, and discuss key issues."
                },
                {
                  title: "Filing of Annual Returns",
                  description: "Submit annual returns, audited financial statements, and compliance reports to the Registrar of Cooperative Societies within deadlines."
                },
                {
                  title: "Maintenance of Statutory Registers",
                  description: "Keep accurate registers of members, share capital, loans, and minutes of meetings."
                },
                {
                  title: "Tax and Regulatory Compliance",
                  description: "Depending on activities, a society may need to comply with income tax, TDS, GST, and professional tax. Timely filing helps avoid penalties."
                },
                {
                  title: "Reserve Funds and Surplus Allocation",
                  description: "Transfer the required portion of profits to reserve funds and other mandatory accounts as per cooperative laws."
                },
                {
                  title: "Meetings and Governance",
                  description: "Conduct board and committee meetings regularly, issue notices properly, and record minutes accurately."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Audit and Compliance Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive audit and compliance services tailored to the specific needs of cooperative societies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Annual statutory audits of cooperative societies",
                "Preparation and filing of annual returns and compliance certificates",
                "Maintenance of statutory registers and records",
                "Assistance with tax filings (Income Tax, TDS, GST)",
                "Advisory on internal controls and governance",
                "Support in responding to notices from authorities"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 rounded-lg bg-blue-50 border border-blue-100"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div id="benefits" ref={sectionRefs.benefits} className="mb-20 scroll-mt-20 px-4 relative">
            <motion.div
              className="absolute top-0 left-10 w-60 h-20 bg-blue-200 rounded-3xl opacity-20 blur-3xl"
              animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-10 right-0 w-72 h-24 bg-purple-200 rounded-3xl opacity-20 blur-3xl"
              animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            />

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of Professional Audit and Compliance Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Partnering with professionals ensures your cooperative society operates smoothly and maintains compliance.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {[
                { title: "Accurate financial reporting for informed decisions", icon: <FileText className="w-8 h-8 text-white mb-2" /> },
                { title: "Reduced penalties through timely filings", icon: <Clock className="w-8 h-8 text-white mb-2" /> },
                { title: "Expert knowledge of cooperative regulations", icon: <BookOpen className="w-8 h-8 text-white mb-2" /> },
                { title: "More time to focus on member services and community goals", icon: <Users className="w-8 h-8 text-white mb-2" /> },
                { title: "Enhanced credibility with stakeholders and authorities", icon: <Shield className="w-8 h-8 text-white mb-2" /> },
                { title: "Proactive compliance monitoring and advisory", icon: "🔍" }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="min-w-[220px] px-6 py-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex flex-col items-center justify-center text-center shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }}
                >
                  <div className="text-2xl mb-2">{benefit.icon}</div>
                  <p className="text-sm font-semibold">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div id="process" ref={sectionRefs.process} className="mb-20 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our systematic approach ensures comprehensive audit coverage and timely compliance for your cooperative society.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "We review your society's books and compliance status",
                  icon: "📋",
                  color: "bg-blue-500",
                },
                {
                  step: "02",
                  title: "Audit",
                  description: "Our team conducts a thorough statutory audit",
                  icon: "📊",
                  color: "bg-purple-500",
                },
                {
                  step: "03",
                  title: "Compliance Filing",
                  description: "We prepare and file returns with authorities",
                  icon: "📑",
                  color: "bg-green-500",
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "We provide reminders and advisory services",
                  icon: "🛡️",
                  color: "bg-yellow-500",
                },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center">
                  {/* Step Card */}
                  <div
                    className={`flex flex-col items-center justify-start w-40 min-h-[200px] p-4 rounded-xl shadow-lg text-white text-center hover:scale-105 transition-transform duration-500 ${step.color}`}
                  >
                    <div className="text-sm font-bold">{step.step}</div>
                    <div className="text-3xl my-2">{step.icon}</div>
                    <h3 className="font-semibold text-xs">{step.title}</h3>
                    <p className="text-[11px] mt-2 leading-snug">{step.description}</p>
                  </div>

                  {/* Arrow Connector */}
                  {i < arr.length - 1 && (
                    <div className="mx-3 text-gray-500 text-2xl font-bold">➝</div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Details */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Comprehensive Audit Process</h3>
                <p className="text-gray-600">
                  Our audit process includes thorough examination of financial records, verification of transactions, 
                  assessment of internal controls, and compliance checking with cooperative laws and regulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Timely Compliance Support</h3>
                <p className="text-gray-600">
                  We ensure all compliance requirements are met on time, including annual filings, tax returns, 
                  and regulatory submissions, with proactive reminders and expert guidance.
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
          <motion.div 
            className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{ scale: [1, 1.02, 1] }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-teal-400/20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Stay Compliant?</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-sky-100">
                Managing a cooperative society responsibly requires regular audits and strict compliance. 
                Sahakar Samruddhi offers complete audit and compliance solutions for all types of cooperative societies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={openAppointmentForm}
                  className="bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  Contact Us Today
                </button>
                <button
                  onClick={openAppointmentForm}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Schedule Cooperative Society Audit"
      />

      <style jsx>{`
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

export default OtherCooperativeAudit;