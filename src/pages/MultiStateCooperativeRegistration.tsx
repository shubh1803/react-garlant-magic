import { useState, useEffect, useRef } from 'react';
import { motion ,AnimatePresence} from "framer-motion";
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, Briefcase, BookOpen, Phone, Building,Settings,ChevronDown } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';

const MultiStateCooperativeRegistration = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Multi-State Credit Cooperative Society');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  
  const sectionRefs = {
    overview: useRef(null),
    benefits: useRef(null),
    eligibility: useRef(null),
    process: useRef(null),
    documents: useRef(null),
    noc: useRef(null),
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

  // Intersection Observer for scroll animations
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
      
      // Check if scrolled past hero section
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

  // FAQ data
  const faqs = [
    {
      question: "What is a Multi-State Credit Cooperative Society?",
      answer: "A Multi-State Credit Cooperative Society is a member-owned financial institution registered under the Multi-State Cooperative Societies Act, 2002. It operates across multiple states, providing credit facilities to its members at reasonable rates."
    },
    {
      question: "Who can form a Multi-State Credit Cooperative Society?",
      answer: "Any group of promoters from different states who meet the minimum membership and capital requirements can form one. Existing state-level societies can also convert to multi-state societies."
    },
    {
      question: "What is the main difference between State and Multi-State Society?",
      answer: "A State Society operates in a single state, while a Multi-State Society can operate across multiple states with registration from the Central Registrar of Cooperative Societies."
    },
    {
      question: "Which authority registers Multi-State Societies?",
      answer: "The Central Registrar of Cooperative Societies, Ministry of Cooperation, Government of India, New Delhi."
    },
    {
      question: "What is the minimum number of members required?",
      answer: "A Multi-State Credit Cooperative Society must have at least 50 members from more than one state."
    },
    {
      question: "How long does the registration process take?",
      answer: "Typically, the registration process takes 3-6 months, depending on document preparation and government processing time."
    },
    {
      question: "What are the key documents required?",
      answer: "Key documents include draft bylaws, list of promoter members, NOC from state registrar, address proof, and financial plan of the society."
    },
    {
      question: "Is NOC mandatory from all states?",
      answer: "NOC is required from the state where the society has its registered office and from states where it plans to operate initially."
    },
    {
      question: "Can existing societies convert to multi-state?",
      answer: "Yes, existing state-level societies can convert to multi-state societies by following the prescribed procedure and obtaining necessary approvals."
    }
  ];
  const steps =  [
        {
          title: "Initial Consultation & Planning",
          description: "We understand your requirements and assess eligibility for multi-state operations, helping you plan the expansion strategy.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          ),
        },
        {
          title: "Document Preparation",
          description: "Drafting multi-state compliant bylaws and preparing all necessary registration documents as per the Act requirements.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          ),
        },
        {
          title: "NOC Acquisition",
          description: "Obtaining No Objection Certificate from the State Registrar of Cooperative Societies where your society is first proposed.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          ),
        },
        {
          title: "Application Filing",
          description: "Preparing and filing the application with the Central Registrar of Cooperative Societies (Ministry of Cooperation, Government of India).",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
          ),
        },
        {
          title: "Coordination & Follow-up",
          description: "Coordinating with authorities, responding to queries, and ensuring compliance with all legal and financial norms.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          ),
        },
        {
          title: "Certificate Collection",
          description: "Receiving your registration certificate and starting multi-state operations with our ongoing support.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          ),
        },
      ]

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
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></span>
              <span className="text-lg font-medium text-white">Multi-State Cooperative Registration Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
            >
              Multi-State Credit Cooperative <span className="text-blue-300">Society Registration</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Expanding your Credit Cooperative Society beyond one state opens new opportunities and a larger member base. At Sahakar Samruddhi, we guide you through the registration process.
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
                Start Registration Process
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
                {id: 'benefits', label: 'Benefits'},
                {id: 'eligibility', label: 'Eligibility'},
                {id: 'process', label: 'Process'},
                {id: 'documents', label: 'Documents'},
                {id: 'noc', label: 'NOC Requirements'},
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
          
          {/* What is Section */}
          <div 
            id="overview" 
            ref={sectionRefs.overview} 
            className="mb-20 scroll-mt-20"
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What is a Multi-State Credit Cooperative Society?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                A Multi-State Credit Cooperative Society is a cooperative society registered under the Multi-State Cooperative Societies Act, 2002. Unlike state-level societies, it can work in more than one state. It pools funds from members across states and provides credit facilities at affordable rates. The society is owned and managed by its members and follows democratic decision-making.
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
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-blue-700">Multi-State Operations</h3>
                      <p className="text-gray-600 mt-2">
                        Operates across multiple states, expanding reach and membership base beyond single-state limitations.
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
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-indigo-700">Central Registration</h3>
                      <p className="text-gray-600 mt-2">
                        Registered under the Multi-State Cooperative Societies Act, 2002 with the Central Registrar.
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
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div className="mt-6 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                      <h3 className="text-lg font-bold text-blue-700">Larger Network</h3>
                      <p className="text-gray-600 mt-2">
                        Access to a wider network of cooperative benefits and stronger financial resources across states.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
        <div
  id="benefits"
  ref={sectionRefs.benefits}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-100 ${
    isVisible.benefits ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Benefits of Registering a Credit Cooperative Society
  </h2>

  {/* Mobile Horizontal Scroll */}
  <div className="flex md:hidden overflow-x-auto hide-scrollbar gap-4 snap-x snap-mandatory px-4">
    {[0, 3].map((startIndex) => (
      <div key={startIndex} className="flex flex-col gap-4 min-w-[80%] snap-center">
        {[
          { text: "Legal recognition to operate in more than one state", icon: "📝" },
          { text: "Larger membership base and stronger financial resources", icon: "👥" },
          { text: "Ability to offer loans and credit facilities across regions", icon: "💳" },
          { text: "Access to a wider network of cooperative benefits", icon: "🌐" },
          { text: "Increased credibility with regulators and financial institutions", icon: "🏛️" },
          { text: "Tax benefits and exemptions under multi-state cooperative laws", icon: "💰" },
        ].slice(startIndex, startIndex + 3).map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-center space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
              ✓
            </div>
            <p className="text-gray-900 font-medium">{benefit.text}</p>
          </div>
        ))}
      </div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12 px-4">
    {[
      { text: "Legal recognition to operate in more than one state", icon: "📝" },
      { text: "Larger membership base and stronger financial resources", icon: "👥" },
      { text: "Ability to offer loans and credit facilities across regions", icon: "💳" },
      { text: "Access to a wider network of cooperative benefits", icon: "🌐" },
      { text: "Increased credibility with regulators and financial institutions", icon: "🏛️" },
      { text: "Tax benefits and exemptions under multi-state cooperative laws", icon: "💰" },
    ].map((benefit, index) => (
      <div
        key={index}
        className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-center space-x-4"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
          ✓
        </div>
        <p className="text-gray-900 font-medium">{benefit.text}</p>
      </div>
    ))}
  </div>
</div>



          {/* Eligibility Section */}
          <div 
            id="eligibility" 
            ref={sectionRefs.eligibility} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-200 ${isVisible.eligibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Who Can Register a Multi-State Credit Cooperative Society?
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Any group of individuals or an existing state-level cooperative society planning to expand its operations into multiple states can apply. The proposed society should have clear objectives and a genuine need for multi-state operations.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-md group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-600">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">Individual Groups</h3>
                <p className="text-gray-600 flex-grow">Any group of individuals with a genuine need for multi-state operations and clear objectives can form a multi-state credit cooperative society.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-md group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-600">
                  <svg className="w-7 h-7 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">Existing Societies</h3>
                <p className="text-gray-600 flex-grow">Existing state-level cooperative societies planning to expand their operations beyond one state can apply for multi-state registration.</p>
              </motion.div>
            </div>
          </div>

          {/* Registration Process */}
     <div
  id="process"
  ref={sectionRefs.process}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-400 ${
    isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {/* Section Header */}
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
    Registration Process
  </h2>
  <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
    Registering a Multi-State Credit Cooperative Society involves compliance with the Multi-State Cooperative Societies Act, 2002. Our team at Sahakar Samruddhi assists you with:
  </p>

  <div className="relative">
    {/* Timeline Line for Desktop */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 transform -translate-x-1/2"></div>

    {/* Desktop Layout */}
    <div className="hidden md:flex flex-col space-y-16 relative">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`flex items-start md:items-center group ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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
            className={`mt-4 md:mt-0 flex-grow max-w-xl p-6 rounded-2xl border border-transparent shadow-md bg-blue-300 transition-all duration-500 group-hover:scale-[1.05] group-hover:shadow-xl group-hover:border-blue-700/50 ${
              index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
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

    {/* Mobile Layout */}
    {/* Mobile Layout */}
<div className="md:hidden relative flex flex-col gap-4 px-4">
  {/* Vertical timeline line */}
  <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

  {steps.map((step, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="flex items-start gap-3 relative"
    >
      {/* Icon Circle */}
      <div className="flex-shrink-0 relative z-10">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-sm">
          {step.icon}
        </div>
      </div>

      {/* Step Content Card */}
      <div className="flex-grow p-3 rounded-lg border border-transparent shadow-sm bg-blue-100 transition-all duration-500">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
        <p className="text-xs text-gray-700 leading-snug">{step.description}</p>
      </div>
    </motion.div>
  ))}
</div>


  </div>
</div>




          {/* Documents Section */}
      <div
  id="documents"
  ref={sectionRefs.documents}
  className={`mb-20 relative scroll-mt-20 transition-all duration-700 delay-500 ${
    isVisible.documents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {/* Section Header */}
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6 text-center">
    Documents Needed
  </h2>
  <p className="text-sm md:text-base text-gray-700 mb-8 md:mb-10 text-center max-w-3xl mx-auto leading-relaxed">
    Common documents required for Multi-State Credit Cooperative Society registration include:
  </p>

  {/* Desktop Grid */}
  <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      { title: "Draft Bylaws", description: "Draft bylaws of the proposed society according to the multi-state requirements", icon: "📄", gradient: "from-purple-100 to-purple-200" },
      { title: "Member List", description: "List of promoter members with ID and address proof from different states", icon: "👥", gradient: "from-pink-100 to-pink-200" },
      { title: "Formation Resolution", description: "Resolution for forming the society passed by the promoter members", icon: "📝", gradient: "from-yellow-100 to-yellow-200" },
      { title: "Office Proof", description: "Proof of registered office address for the society", icon: "🏢", gradient: "from-green-100 to-green-200" },
      { title: "Character Certificate", description: "Character certificate from police department for promoter members", icon: "✅", gradient: "from-blue-100 to-blue-200" },
      { title: "NOC from State", description: "No Objection Certificate from State Registrar of Cooperative Societies", icon: "🛡️", gradient: "from-indigo-100 to-indigo-200" },
      { title: "Application Form", description: "Completed application form and affidavits as per the Act requirements", icon: "📋", gradient: "from-orange-100 to-orange-200" },
      { title: "Financial Plan", description: "Detailed financial plan and capital structure of the proposed society", icon: "💰", gradient: "from-teal-100 to-teal-200" },
      { title: "Existing Society Documents", description: "For existing societies: registration certificate, audited accounts, and membership details", icon: "📑", gradient: "from-rose-100 to-rose-200" }
    ].map((doc, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className={`relative group p-4 rounded-xl shadow-md border border-gray-100 cursor-pointer overflow-hidden bg-gradient-to-r ${doc.gradient} hover:shadow-lg transition-all duration-300`}
        style={{ minHeight: '160px' }}
      >
        {/* Decorative floating circles */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-white opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-3 text-xl">
          {doc.icon}
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors duration-300">{doc.title}</h3>
        <p className="text-gray-700 text-sm">{doc.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Mobile Vertical List */}
  <div className="lg:hidden flex flex-col gap-3 max-w-xs mx-auto">
    {[
      { title: "Draft Bylaws", description: "Draft bylaws of the proposed society according to the multi-state requirements", icon: "📄", gradient: "from-purple-100 to-purple-200" },
      { title: "Member List", description: "List of promoter members with ID and address proof from different states", icon: "👥", gradient: "from-pink-100 to-pink-200" },
      { title: "Formation Resolution", description: "Resolution for forming the society passed by the promoter members", icon: "📝", gradient: "from-yellow-100 to-yellow-200" },
      { title: "Office Proof", description: "Proof of registered office address for the society", icon: "🏢", gradient: "from-green-100 to-green-200" },
      { title: "Character Certificate", description: "Character certificate from police department for promoter members", icon: "✅", gradient: "from-blue-100 to-blue-200" },
      { title: "NOC from State", description: "No Objection Certificate from State Registrar of Cooperative Societies", icon: "🛡️", gradient: "from-indigo-100 to-indigo-200" },
      { title: "Application Form", description: "Completed application form and affidavits as per the Act requirements", icon: "📋", gradient: "from-orange-100 to-orange-200" },
      { title: "Financial Plan", description: "Detailed financial plan and capital structure of the proposed society", icon: "💰", gradient: "from-teal-100 to-teal-200" },
      { title: "Existing Society Documents", description: "For existing societies: registration certificate, audited accounts, and membership details", icon: "📑", gradient: "from-rose-100 to-rose-200" }
    ].map((doc, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className={`flex items-start gap-3 bg-white rounded-xl shadow-md p-3 transition-transform hover:scale-105`}
      >
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr ${doc.gradient} text-white text-lg shadow`}>
          {doc.icon}
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900">{doc.title}</h3>
          <p className="text-xs text-gray-700 leading-snug">{doc.description}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Note Section */}
  <div className="mt-8 md:mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow duration-300">
    <p className="text-blue-800 text-sm italic text-center">
      Note: Requirements may vary depending on your proposed operations. Our experts will guide you through the specific documentation needed for your case.
    </p>
  </div>
</div>


          {/* NOC Section */}
     <div
  id="noc"
  ref={sectionRefs.noc}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-600 ${
    isVisible.noc ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="relative z-10 px-4 lg:px-0">

    {/* Header */}
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-900 mb-4"
      >
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          NOC from State Registrar
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"
      ></motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
      >
        A crucial requirement for Multi-State registration is obtaining a No Objection Certificate (NOC) from the State Registrar of Cooperative Societies. This certificate validates your society's eligibility for multi-state operations.
      </motion.p>
    </div>

    {/* NOC Main Card */}
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border-l-4 border-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-xl transition-all duration-300 mb-6"
>
  <div className="flex items-start sm:items-center gap-4">
    {/* Icon */}
    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    {/* Text */}
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
        What is NOC?
      </h3>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        The No Objection Certificate (NOC) is a mandatory certificate issued by the State Registrar of Cooperative Societies. It confirms that your society has no objections or conflicts at the state level and is eligible to operate as a multi-state society. Without this certificate, your application to the Central Registrar for multi-state registration cannot proceed.
        <br /><br />
        Our experts help you prepare the necessary documents, coordinate with state authorities, and ensure all compliance requirements are met before submission.
      </p>
    </div>
  </div>
</motion.div>

    {/* Why & When NOC Cards */}
   {/* Why & When Cards: Horizontal Scroll on Mobile with Zoom */}
{/* Why & When Cards: Horizontal Scroll on Mobile */}
{/* Why & When NOC Cards - Mobile Optimized */}
<div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-2 mb-8 py-2 lg:py-0">
  {/* Why NOC */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="flex-shrink-0 min-w-[200px] sm:min-w-[220px] lg:min-w-full bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-l-4 border-gradient-to-r from-green-400 to-teal-500 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-teal-500 text-white shadow-lg">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h4 className="text-lg font-bold text-gray-800">Why NOC is Required</h4>
    </div>
    <div className="space-y-2 flex flex-col">
      {[
        "Confirms legal registration status at state level",
        "Ensures no conflict with existing societies",
        "Provides compliance record to Central Registrar",
        "Validates multi-state expansion eligibility",
      ].map((item, idx) => (
        <div key={idx} className="flex items-start space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex-shrink-0 mt-1"></div>
          <p className="text-gray-700 text-sm">{item}</p>
        </div>
      ))}
    </div>
  </motion.div>

  {/* When You Need NOC */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.7 }}
    className="flex-shrink-0 min-w-[200px] sm:min-w-[220px] lg:min-w-full bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-l-4 border-gradient-to-r from-blue-500 to-indigo-500 shadow-md hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h4 className="text-lg font-bold text-gray-800">When You Need NOC</h4>
    </div>
    <div className="space-y-2 flex flex-col">
      {[
  {
    title: "For New Societies",
    desc: <>Obtain NOC from State Registrar before applying <br /> to Central Registrar for multi-state registration.</>,
  },
  {
    title: "For Existing Societies",
    desc: <>Converting state-level society requires NOC from each state <br /> where you plan to operate.</>,
  },
].map((item, idx) => (
        <div
          key={idx}
          className="bg-blue-50/60 rounded-lg p-3 border border-blue-200/50 flex flex-col"
        >
          <h5 className="font-semibold text-blue-800 mb-1">{item.title}</h5>
          <p className="text-gray-700 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </motion.div>
</div>




    {/* NOC Process / Timeline */}
  <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mb-20 p-6"
>
  <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      NOC Acquisition Process
    </span>
  </h3>

  {/* Timeline Container */}
  <div className="flex flex-col md:flex-row items-stretch md:justify-between gap-6 max-w-6xl mx-auto">
    {[
      { step: "Apply to State Registrar", icon: "M12 8v4l3 3" },
      { step: "Draft Bylaws & Member List", icon: "M9 12h6m-6 4h6" },
      { step: "Formation Resolution", icon: "M5 13l4 4L19 7" },
      { step: "Pay Fees & Submit", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2" },
      { step: "Processing & Approval", icon: "M12 8V7m0 1v8" }
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex-1 bg-white rounded-2xl shadow-lg p-6 md:p-4 hover:shadow-2xl transition-all duration-300 relative"
      >
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={item.icon}
            />
          </svg>
        </div>

        {/* Step Title */}
        <h4 className="text-lg font-semibold mb-2 text-gray-800">{item.step}</h4>

        {/* Optional Description */}
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Step description goes here.
        </p>

        {/* Connector for desktop */}
        {idx !== 4 && (
          <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-gradient-to-r from-purple-300 to-blue-300 transform translate-x-full"></div>
        )}
      </div>
    ))}
  </div>
</motion.div>




    {/* Support Section */}
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 1 }}
  className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-4 sm:p-6 md:p-6 text-white shadow-xl overflow-hidden relative max-w-full sm:max-w-md md:max-w-3xl mx-auto"
>
  <div className="relative z-10 text-center">
    <h4 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-3">
      Expert Guidance & Support
    </h4>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-4 max-w-full sm:max-w-lg md:max-w-3xl mx-auto">
      At Sahakar Samruddhi, we streamline the NOC acquisition process. Our experienced team prepares all necessary documents, coordinates with state authorities, and ensures your application meets every requirement before submission to the Central Registrar.
    </p>
    <button
      onClick={openAppointmentForm}
      className="bg-white text-indigo-600 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto"
    >
      Get NOC Support
    </button>
  </div>
</motion.div>


  </div>
</div>



          {/* FAQ Section */}
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
             {[0, 4].map((startIndex) => (
               <div key={startIndex} className="flex flex-col gap-4 min-w-[85%] snap-center">
                 {faqs.slice(startIndex, startIndex + 4).map((faq, index) => (
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 sm:p-6 md:p-10 text-center text-white shadow-xl transition-all duration-500 hover:shadow-2xl max-w-full sm:max-w-lg md:max-w-4xl mx-auto">
  <h2 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
    Why Choose Sahakar Samruddhi
  </h2>
  <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto">
    We specialize in Multi-State Credit Cooperative Society Registration. From drafting bylaws to filing your application with the Central Registrar, we handle the entire process to save you time and reduce errors. Our expertise ensures your society is legally compliant and ready to operate across states.
  </p>
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
    <button 
      onClick={openAppointmentForm}
      className="bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Get Started Today
    </button>
    <button 
      onClick={openAppointmentForm}
      className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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
        title="Book an Appointment for Multi-State Credit Cooperative Society Registration"
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

export default MultiStateCooperativeRegistration;