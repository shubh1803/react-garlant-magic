import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, AlertTriangle, BookOpen, Phone, Building2, Briefcase, ChevronDown } from 'lucide-react';

const MicrofinanceAudit = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Microfinance Company (Section 8) Audit and Compliance');
  const [isScrolled, setIsScrolled] = useState(false);
  
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
      question: "Who audits a Section 8 Microfinance Company?",
      answer: "A qualified Chartered Accountant appointed by the company conducts the annual statutory audit as per the Companies Act, 2013."
    },
    {
      question: "What are the annual compliance requirements?",
      answer: "Filing annual returns and audited financial statements with ROC, conducting AGMs, maintaining registers, and complying with tax and RBI guidelines where applicable."
    },
    {
      question: "Do Section 8 Microfinance Companies pay tax?",
      answer: "Yes. While they are non-profit, they may still be liable for income tax, TDS, and GST on certain activities unless exemptions apply."
    },
    {
      question: "What happens if a company fails to comply?",
      answer: "Non-compliance can result in penalties, cancellation of Section 8 license, or disqualification of directors by the Ministry of Corporate Affairs."
    },
    {
      question: "Can Sahakar Samruddhi help with tax and RBI Compliances too?",
      answer: "Yes. We provide end-to-end support, including tax filings, ROC filings, and advisory on compliance."
    },
    {
      question: "How can a Section 8 Microfinance Company prepare for an audit?",
      answer: "Maintain updated loan records, reconcile accounts regularly, keep all registers and minutes updated, and ensure proper documentation of every transaction."
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
              <Building2 className="w-4 h-4 mr-2 text-purple-300" />
              <span className="text-sm font-medium">Section 8 Microfinance Audit</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Microfinance Company (Section 8) <span className="text-purple-300">Audit & Compliance</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-10"
            >
              Running a Microfinance Company under Section 8 of the Companies Act, 2013 requires strict financial discipline and regular compliance. Audits and timely filings are essential to protect your company's credibility, maintain its license, and serve borrowers responsibly.
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
                Schedule Section 8 Audit
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
                Why Audit and Compliance Matter for Microfinance Companies
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
                "Microfinance companies handle public funds and must maintain transparency",
                "Regular audits ensure compliance with Section 8 company regulations",
                "Proper compliance builds trust with regulators, lenders, and borrowers",
                "Timely filings prevent penalties and license cancellations"
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

            {/* Additional Overview Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Build Trust",
                  description: "Builds trust with regulators, lenders, and borrowers"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8" />,
                  title: "Early Detection",
                  description: "Detects operational or financial irregularities early"
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "License Protection", 
                  description: "Prevents penalties and preserves your company's license"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-indigo-600 mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-indigo-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Requirements Section with Card Flip Animation */}
          <div id="requirements" ref={sectionRefs.requirements} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Compliance Requirements
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Annual Filings with ROC",
                  description: "Every Section 8 Company must file annual returns and audited financial statements with the Registrar of Companies (ROC) within the prescribed timelines."
                },
                {
                  title: "Meetings and Minutes",
                  description: "Hold regular Board Meetings and Annual General Meetings (AGMs) and maintain accurate minutes."
                },
                {
                  title: "Maintenance of Registers and Records",
                  description: "Keep statutory registers such as members' register, loans register, charges register, and meeting records."
                },
                {
                  title: "Income Tax and TDS Compliance",
                  description: "Even though Section 8 Companies are non-profit, they must comply with income tax, TDS, GST, and professional tax (if applicable)."
                },
                {
                  title: "RBI and State-Level Compliance",
                  description: "Depending on activities and loan amounts, certain microfinance companies may also be required to follow RBI or state-level microfinance regulations."
                },
                {
                  title: "Reserve Fund and Surplus Rules",
                  description: "Transfer the prescribed portion of profits to the reserve fund or any other mandatory accounts."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-600 border border-indigo-800 text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-indigo-100">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Section with Scale-Up Animation */}
          <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Services for Microfinance Company Audit and Compliance
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Conducting annual statutory audits",
                "Preparing and filing annual returns with ROC",
                "Maintaining statutory registers and minutes",
                "Advisory on tax, TDS, and GST compliance",
                "Assistance with RBI reporting and other regulatory filings",
                "Responding to notices from ROC, RBI, or tax authorities"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-4 rounded-lg bg-indigo-50 border border-indigo-100"
                >
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section with Capsule Design */}
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
                Benefits of Professional Audit and Compliance Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the key advantages of partnering with us for your microfinance company's audit and compliance needs.
              </p>
            </div>

            {/* Capsule benefits */}
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {[
                { title: "Timely filings and reduced penalties", icon: <Clock className="w-8 h-8 text-white mb-2" /> },
                { title: "Accurate financial reporting for lenders and investors", icon: <FileText className="w-8 h-8 text-white mb-2" /> },
                { title: "Expert knowledge of Section 8 and microfinance regulations", icon: <BookOpen className="w-8 h-8 text-white mb-2" /> },
                { title: "Peace of mind so you can focus on your core mission", icon: <Shield className="w-8 h-8 text-white mb-2" /> },
                { title: "Proactive compliance monitoring and advisory", icon: <TrendingUp className="w-8 h-8 text-white mb-2" /> },
                { title: "Enhanced credibility with stakeholders and authorities", icon: <Users className="w-8 h-8 text-white mb-2" /> }
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

          {/* Process Section with Slide-In Animation */}
          <div id="process" ref={sectionRefs.process} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How We Work
            </h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                "Experienced team with hands-on knowledge of Section 8 company regulations",
                "End-to-end audit and compliance services tailored for microfinance",
                "Transparent processes and practical, action-oriented advice",
                "Proven track record of helping microfinance companies stay compliant"
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

            {/* Process Steps */}
            <div className="mt-12 grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "We review your microfinance company's accounts and compliance status."
                },
                {
                  step: "2", 
                  title: "Audit",
                  description: "Our team conducts a thorough statutory audit and internal review."
                },
                {
                  step: "3",
                  title: "Compliance Filing",
                  description: "We prepare and submit annual returns, tax filings, and regulatory reports."
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  description: "We provide alerts and advice to keep you compliant all year."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-indigo-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section with Accordion-like Expand Animation */}
          <div id="faq" ref={sectionRefs.faq} className="mb-20 scroll-mt-20 px-4 relative">
            {/* Heading */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions (FAQs)
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about Section 8 Microfinance Company audits and compliance.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Stay Compliant?</h2>
            <p className="text-xl mb-8 opacity-90">
              Managing a Microfinance Company under Section 8 is a serious responsibility. Sahakar Samruddhi offers complete audit and compliance solutions so you can focus on empowering communities through microfinance.
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
        title="Schedule Section 8 Microfinance Audit"
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

export default MicrofinanceAudit;