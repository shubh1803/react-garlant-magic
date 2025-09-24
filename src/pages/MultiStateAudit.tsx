import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, AlertTriangle, BookOpen, Phone, Building, ChevronDown } from 'lucide-react';

const MultiStateAudit = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Multi State Credit Cooperative Society Audit and Compliance');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({
    overview: false,
    requirements: false,
    services: false,
    benefits: false,
    process: false,
    faq: false
  });
  
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
      question: "Who audits a Multi-State Credit Cooperative Society?",
      answer: "Audits must be conducted by an auditor empanelled with the Central Registrar of Cooperative Societies under the Multi-State Cooperative Societies Act."
    },
    {
      question: "What are the main compliance requirements?",
      answer: "Annual statutory audit, filing of returns with the Central Registrar, maintenance of statutory registers, AGM within prescribed timelines, and adherence to reserve fund rules."
    },
    {
      question: "Do Multi-State Credit Cooperative Societies have to pay tax?",
      answer: "Yes. Depending on income and activities, they may be liable for income tax, GST, TDS, and other state-level taxes."
    },
    {
      question: "What happens if a society fails to comply?",
      answer: "Non-compliance can lead to fines, disqualification of office bearers, or even cancellation of registration by the Central Registrar."
    },
    {
      question: "Can Sahakar Samruddhi help with both audit and tax filings?",
      answer: "Yes. We provide end-to-end support including audit, compliance filings, tax returns, and advisory for multi-state operations."
    },
    {
      question: "How can a society prepare for an audit?",
      answer: "Maintain clean branch-wise records, keep all statutory registers updated, and reconcile accounts regularly. This makes the audit faster and smoother."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section - Improved Design */}
      <section className="relative py-16 md:py-24 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-xl animate-pulse-slow animation-delay-4000"></div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-blue-300/30"
            >
              <Building className="w-5 h-5 mr-2 text-blue-300" />
              <span className="text-lg font-medium text-white">Multi-State Audit & Compliance Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Multi-State Credit Cooperative <span className="text-blue-300">Audit & Compliance</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Running a Multi-State Credit Cooperative Society means operating under the Multi-State Cooperative Societies Act, 2002, which brings additional responsibilities. Timely audits and strict compliance are essential to maintain credibility across states.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <button
                onClick={openAppointmentForm}
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Schedule Multi-State Audit
              </button>
              <button
                onClick={() => scrollToSection('overview')}
                className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:border-white flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview Section */}
          <div 
            id="overview" 
            ref={sectionRefs.overview} 
            className="mb-20 scroll-mt-20"
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-primary-gradient  bg-clip-text text-transparent">
                Why Audit and Compliance Are Critical
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                A Multi-State Credit Cooperative Society operates under the Multi-State Cooperative Societies Act, 2002, which brings additional compliance responsibilities. Timely audits and strict adherence to regulations are essential to maintain credibility across states.
              </p>
            </div>

            {/* Horizontal Stepper */}
            <div className="relative max-w-6xl mx-auto">
              {/* Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400"></div>

              <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-6">
                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex-1 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <Building className="w-8 h-8" />
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-blue-700">Multi-State Transparency</h3>
                      <p className="text-gray-600 mt-2">
                        Ensures transparency and trust across branches and states
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex-1 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-indigo-700">Central Registrar Accountability</h3>
                      <p className="text-gray-600 mt-2">
                        Demonstrates accountability to the Central Registrar of Cooperative Societies
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative flex-1 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-blue-700">Government Support</h3>
                      <p className="text-gray-600 mt-2">
                        Helps qualify for loans, grants, and government support
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Additional Benefits Grid */}
           <div className="mt-16">
  {/* Mobile Horizontal Scroll */}
  <div className="flex md:hidden gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col transition-transform duration-500 hover:-translate-y-3 hover:shadow-xl snap-center"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg">
        <AlertTriangle className="w-8 h-8 text-blue-600 hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-800 transition-colors duration-300">
        Prevent Penalties
      </h3>
      <p className="text-gray-600 flex-grow">
        Prevents penalties and preserves your society's registration across all operating states.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col transition-transform duration-500 hover:-translate-y-3 hover:shadow-xl snap-center"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg">
        <Users className="w-8 h-8 text-blue-600 hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-800 transition-colors duration-300">
        Member Confidence
      </h3>
      <p className="text-gray-600 flex-grow">
        Strengthens member confidence and investor credibility across multiple states.
      </p>
    </motion.div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 gap-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-3 hover:shadow-xl"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg">
        <AlertTriangle className="w-8 h-8 text-blue-600 hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-800 transition-colors duration-300">
        Prevent Penalties
      </h3>
      <p className="text-gray-600 flex-grow">
        Prevents penalties and preserves your society's registration across all operating states.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-200 rounded-2xl p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-3 hover:shadow-xl"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-5 transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:shadow-lg">
        <Users className="w-8 h-8 text-blue-600 hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-800 transition-colors duration-300">
        Member Confidence
      </h3>
      <p className="text-gray-600 flex-grow">
        Strengthens member confidence and investor credibility across multiple states.
      </p>
    </motion.div>
  </div>
</div>

          </div>

          {/* Requirements Section */}
      

{/* Requirements Section */}
<motion.div
  id="requirements"
  ref={sectionRefs.requirements}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20 scroll-mt-20"
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Key Compliance Requirements
  </h2>

  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Multi-State Credit Cooperative Societies must adhere to specific compliance
    requirements under the Multi-State Cooperative Societies Act, 2002.
  </p>

  {/* Mobile Horizontal Scroll */}
  <div className="flex md:hidden overflow-x-auto hide-scrollbar gap-4 snap-x snap-mandatory mt-8">
    <div className="flex flex-col gap-4 min-w-[80%] snap-center">
      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Annual General Meeting (AGM)</h3>
          <p className="text-gray-600 text-sm">
            Multi-State societies must hold their AGM within the prescribed timeframe to approve audited accounts, elect board members, and pass key resolutions.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Filing of Annual Returns</h3>
          <p className="text-gray-600 text-sm">
            Annual returns, audited accounts, and compliance certificates must be filed with the Central Registrar of Cooperative Societies.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Maintenance of Statutory Registers</h3>
          <p className="text-gray-600 text-sm">
            Societies must maintain detailed registers of members, loans, share capital, and minutes of board meetings for each branch.
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4 min-w-[80%] snap-center">
      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Reserve Funds and Provisions</h3>
          <p className="text-gray-600 text-sm">
            A fixed percentage of profits must be transferred to reserve funds and other mandatory accounts as per the Act.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Tax and Regulatory Compliance</h3>
          <p className="text-gray-600 text-sm">
            Multi-State societies may need to comply with income tax, GST, TDS, and state-level labour/tax laws wherever they operate. Timely filing avoids penalties.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">Branch-wise Reporting</h3>
          <p className="text-gray-600 text-sm">
            Maintain accurate records for each branch or state of operation to ensure smooth consolidation during audit and filing.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Annual General Meeting (AGM)</h3>
        <p className="text-gray-600 text-sm">
          Multi-State societies must hold their AGM within the prescribed timeframe to approve audited accounts, elect board members, and pass key resolutions.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Filing of Annual Returns</h3>
        <p className="text-gray-600 text-sm">
          Annual returns, audited accounts, and compliance certificates must be filed with the Central Registrar of Cooperative Societies.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Maintenance of Statutory Registers</h3>
        <p className="text-gray-600 text-sm">
          Societies must maintain detailed registers of members, loans, share capital, and minutes of board meetings for each branch.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Reserve Funds and Provisions</h3>
        <p className="text-gray-600 text-sm">
          A fixed percentage of profits must be transferred to reserve funds and other mandatory accounts as per the Act.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Tax and Regulatory Compliance</h3>
        <p className="text-gray-600 text-sm">
          Multi-State societies may need to comply with income tax, GST, TDS, and state-level labour/tax laws wherever they operate. Timely filing avoids penalties.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md flex items-start space-x-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
        <Check className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-gray-900 font-semibold">Branch-wise Reporting</h3>
        <p className="text-gray-600 text-sm">
          Maintain accurate records for each branch or state of operation to ensure smooth consolidation during audit and filing.
        </p>
      </div>
    </div>
  </div>
</motion.div>

            

          {/* Services Section */}
         <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Our Services for Multi-State Credit Cooperative Societies
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Comprehensive audit and compliance solutions tailored for multi-state operations.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {[
      { text: "Conducting statutory and internal audits", description: "We perform thorough statutory and internal audits to ensure compliance across all branches." },
      { text: "Preparing consolidated and branch-wise financial statements", description: "We prepare accurate consolidated and branch-wise financial statements for reporting." },
      { text: "Filing annual returns and compliance certificates", description: "We assist in timely filing of annual returns and all required compliance certificates." },
      { text: "Maintaining statutory registers and minutes", description: "We maintain statutory registers, board meeting minutes, and other essential records." },
      { text: "Advising on tax and financial planning", description: "We provide expert advice on tax planning, financial strategy, and optimization." },
      { text: "Assisting in responding to notices from authorities", description: "We guide you in responding to notices and queries from regulatory authorities." }
    ].map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, rotateY: 90 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="p-6 rounded-2xl bg-gradient-to-br from-blue-100 via-blue-200 to-blue-600 border border-blue-8000 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">{service.text}</h3>
        <p className="text-sm text-gray-700">{service.description}</p>
      </motion.div>
    ))}
  </div>
</div>


      


          {/* Benefits Section */}
        <div 
  id="benefits" 
  ref={sectionRefs.benefits} 
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-100 ${
    isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Benefits of Our Consultancy
  </h2>
  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    Discover the key advantages of partnering with us for your banking and microfinance business.
  </p>

  {/* Mobile Horizontal Scroll */}
  <div className="flex md:hidden overflow-x-auto hide-scrollbar gap-4 snap-x snap-mandatory mt-8">
    {[0, 2].map((startIndex) => (
      <div key={startIndex} className="flex flex-col gap-4 min-w-[80%] snap-center">
        {[
          {
            title: "Expert Multi-State Handling",
            description: "Expert handling of complex multi-state requirements and regulations"
          },
          {
            title: "Timely Filings",
            description: "Timely filings to avoid fines or deregistration across states"
          },
          {
            title: "Clear Financial Reports",
            description: "Clear financial reports for better decision making and transparency"
          },
          {
            title: "Regulatory Confidence",
            description: "Greater confidence among members and regulatory authorities"
          }
        ].slice(startIndex, startIndex + 2).map((benefit, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
    {[
      {
        title: "Expert Multi-State Handling",
        description: "Expert handling of complex multi-state requirements and regulations"
      },
      {
        title: "Timely Filings",
        description: "Timely filings to avoid fines or deregistration across states"
      },
      {
        title: "Clear Financial Reports",
        description: "Clear financial reports for better decision making and transparency"
      },
      {
        title: "Regulatory Confidence",
        description: "Greater confidence among members and regulatory authorities"
      }
    ].map((benefit, index) => (
      <div 
        key={index} 
        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-start space-x-4"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white">
          <Check className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold">{benefit.title}</h3>
          <p className="text-gray-600 text-sm">{benefit.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>
         
          {/* Process Section */}
          <div
            id="process"
            ref={sectionRefs.process}
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-400 ${
              isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Our streamlined process ensures comprehensive audit and compliance support for your Multi-State Credit Cooperative Society.
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 transform -translate-x-1/2"></div>

              <div className="space-y-16 relative">
                {[
                  {
                    title: "Assessment",
                    description: "We review your society's branches, books, and compliance status across all operating states.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Audit",
                    description: "Our team performs a thorough statutory and internal audit of all branch operations.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Compliance Filing",
                    description: "We prepare and submit annual returns and compliance documents to the Central Registrar.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    ),
                  },
                  {
                    title: "Ongoing Support",
                    description: "We provide alerts, advice, and guidance throughout the year for continuous compliance.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    ),
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-start md:items-center group ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white z-10 shadow-lg group-hover:scale-110 group-hover:shadow-indigo-400/70 transition-all duration-500">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Content Card */}
                    <div
                      className={`mt-4 md:mt-0 flex-grow max-w-xl p-6 rounded-2xl border border-transparent shadow-md 
                        bg-blue-300 transition-all duration-500 
                        group-hover:scale-[1.05] group-hover:shadow-xl group-hover:border-blue-700/50 ${
                          index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                        }`}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
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
         <br/>
          {/* CTA Section */}
         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 
  rounded-2xl p-6 md:p-10 text-center text-white 
  shadow-xl transition-all duration-500 hover:shadow-2xl"
>
  <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
    Why Choose Sahakar Samruddhi
  </h2>
  
  <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto">
    We specialize in Multi-State Credit Cooperative Society Audit and Compliance. 
    From comprehensive audits to timely filings with the Central Registrar, 
    we handle the entire process to save you time and ensure regulatory compliance. 
    Our expertise ensures your society maintains credibility across all operating states.
  </p>

  <div className="flex flex-wrap justify-center gap-3 md:gap-4">
    <button
      onClick={openAppointmentForm}
      className="bg-white text-blue-600 px-6 md:px-8 py-2 md:py-3 
        rounded-full font-semibold hover:bg-gray-100 
        transition-all duration-300 shadow-lg hover:shadow-xl 
        transform hover:-translate-y-1 text-sm md:text-base"
    >
      Get Started Today
    </button>

    <button
      onClick={openAppointmentForm}
      className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 
        rounded-full font-semibold hover:bg-white hover:text-blue-600 
        transition-all duration-300 text-sm md:text-base"
    >
      Schedule Consultation
    </button>
  </div>
</div>

        </div>
      </section>

      {/* Reusable Appointment Form */}
      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Book an Appointment for Multi-State Credit Cooperative Society Audit & Compliance"
      />

      <Footer />
      
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
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
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
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
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

export default MultiStateAudit;