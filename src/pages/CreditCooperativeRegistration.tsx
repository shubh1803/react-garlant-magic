import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, FileText, TrendingUp, Clock, Shield, Briefcase, BookOpen, Phone, Building,Settings,ChevronDown } from 'lucide-react';

const CreditCooperativeRegistration = () => {
  const pathRef = useRef(null);
  const [points, setPoints] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Credit Cooperative Society (State Level)');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [openQuestion, setOpenQuestion] = useState(null);
  
  const sectionRefs = {
    overview: useRef(null),
    benefits: useRef(null),
    levels: useRef(null),
    categories: useRef(null),
    process: useRef(null),
    documents: useRef(null),
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

  const steps = [
  {
    title: "Initial Consultation & Planning",
    desc: "We understand your requirements and assess eligibility for multi-state operations, helping you plan the expansion strategy.",
     description: "Initial discussion to understand your requirements and plan the registration strategy",
  },
  {
    title: "Document Preparation",
    desc: "Drafting multi-state compliant bylaws and preparing all necessary registration documents as per the Act requirements.",
     description: "Drafting bylaws, preparing member lists, and compiling all necessary documents",
  },
  {
    title: "Application Filing",
    desc: "Preparing and filing the application with the Central Registrar of Cooperative Societies (Ministry of Cooperation, Government of India).",
     description: "Submitting the complete application package to the Registrar of Cooperative Societies",
  },
  {
    title: "Verification & Compliance",
    desc: "Addressing queries from authorities and ensuring all compliance requirements are met.",
     description: "Ensuring all compliance requirements are met and queries from authorities are addressed promptly",
  },
  {
    title: "Certificate Issuance",
    desc: "Receiving your registration certificate and starting society operations with our ongoing support.",
     description: "Receiving the registration certificate and starting society operations",
  },
];


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

  const faqs = [
    {
        question: "What is a Credit Cooperative Society?",
        answer: "A Credit Cooperative Society is a registered member-owned organization that provides credit and savings services to its members at reasonable rates."
      },
      {
        question: "Who can register a Credit Cooperative Society?",
        answer: "Any group of individuals with a common interest or objective can form a Credit Cooperative Society, provided they meet the minimum member and capital requirements prescribed by the Registrar of Cooperative Societies."
      },
      {
        question: "What are the minimum members required to start a Credit Cooperative Society?",
        answer: "Typically, at least 10 adult members from the same area or occupation are needed. The exact number may vary depending on state rules."
      },
      {
        question: "Which authority registers Credit Cooperative Societies?",
        answer: "Registration is done by the Registrar of Cooperative Societies at the Taluka, District, or State level, depending on the jurisdiction."
      },
      {
        question: "What documents are required for registration?",
        answer: "Key documents include: Application form, Bylaws or draft rules, List of promoter members with ID proofs, Proof of address for the society's office, Initial capital details"
      },
      {
        question: "How long does the registration process take?",
        answer: "If all documents are complete, registration usually takes 30 to 60 days, depending on the Registrar's office workload."
      },
      {
        question: "Can women or reserved category groups form their own societies?",
        answer: "Yes. Special categories like Women's Credit Cooperative Societies or SC/ST Credit Cooperative Societies can be registered with the same process but with category-specific benefits or schemes."
      },
      {
        question: "What are the benefits of registering a Credit Cooperative Society?",
        answer: "Registration gives legal status, access to government schemes, better credibility with members, and allows you to accept deposits and provide loans within the legal framework."
      },
      {
        question: "Do we need professional help for registration?",
        answer: "While you can file on your own, professional support ensures correct documentation, faster approvals, and compliance with state laws."
      },
      {
        question: "Can a Credit Cooperative Society operate in multiple states?",
        answer: "No. For multi-state operations you need to register as a Multi-State Credit Cooperative Society under the Multi-State Cooperative Societies Act."
      }
  ];

  const categories = [
    {
      title: "Women's Credit Cooperative Society",
      description: "A Women's Credit Cooperative Society is formed exclusively by and for women members. Its main purpose is to promote savings, provide easy loans, and support financial independence among women. Such societies are especially useful for self-help groups, small businesses run by women, and community-based development programs.",
      color: "pink",
      icon: (
        <svg className="w-7 h-7 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      ),
    },
    {
      title: "Reserved Category (SC/ST) Credit Cooperative Society",
      description: "A Reserved Category Credit Cooperative Society is formed to benefit members from Scheduled Castes or Scheduled Tribes. These societies aim to provide affordable credit, promote entrepreneurship, and improve economic conditions within these communities. They may also get access to special government schemes, grants, or subsidies designed for SC/ST groups.",
      color: "green",
      icon: (
        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
    },
    {
      title: "General Credit Cooperative Society",
      description: "A General Credit Cooperative Society is open to all eligible members, regardless of gender or caste. It's designed for broader communities or groups who want to collectively save and borrow. These societies usually have a larger membership base and can operate at taluka, district, or state level.",
      color: "blue",
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
    },
  ];

  const levels = [
    {
      title: "Taluka Level Registration",
      description: "A Taluka-level Credit Cooperative Society is registered to operate within a single taluka. It is ideal for smaller groups or communities who want to offer financial services locally. Compliance requirements are simpler compared to larger societies, and it's easier to manage membership at the local level.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "District Level Registration",
      description: "A District-level Credit Cooperative Society covers the entire district. It is suitable for organizations that want to expand beyond one taluka but still stay within district boundaries. This level allows a wider membership base and a larger pool of funds while maintaining manageable administration.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "State Level Registration",
      description: "A State-level Credit Cooperative Society operates across the whole state. This is the right choice for groups with a strong network in multiple districts who wish to offer credit facilities on a larger scale. State-level societies have more compliance requirements but also enjoy wider reach and stronger credibility.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

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
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
              <span className="text-sm font-medium">Credit Cooperative Registration Services</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Credit Cooperative Society <span className="text-blue-300">Registration</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Starting a Credit Cooperative Society is one of the most effective ways to bring people together 
              and provide affordable credit to members. At Sahakar Samruddhi, we guide you through the complete 
              process of registering a Credit Cooperative Society in India so you can focus on building your organization.
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
                Start Registration
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
      
      </section>

      {/* Sticky Navigation */}
      <section className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-1 min-w-max mx-auto">
              {[
                {id: 'overview', label: 'Overview'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'levels', label: 'Levels'},
                {id: 'categories', label: 'Categories'},
                {id: 'process', label: 'Process'},
                {id: 'documents', label: 'Documents'},
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
          
          {/* What is Section */}
          <div 
            id="overview" 
            ref={sectionRefs.overview} 
            className="mb-20 scroll-mt-20"
          >
            {/* Heading */}
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-primary-gradient bg-clip-text text-transparent">
                What is a Credit Cooperative Society?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
                A Credit Cooperative Society is a financial organization owned and controlled by its members. 
                It pools savings from members and offers loans at reasonable rates. The society works on cooperative 
                principles, which means profits are shared and decisions are made democratically.
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
                      1
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                      <h3 className="text-lg font-bold text-blue-700">Member-Owned</h3>
                      <p className="text-gray-600 mt-2">
                        Members collectively own the society, ensuring transparency, fairness, and equality.
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
                      2
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                      <h3 className="text-lg font-bold text-indigo-700">Affordable Credit</h3>
                      <p className="text-gray-600 mt-2">
                        Societies provide loans at lower interest rates, supporting small businesses and families.
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
                      3
                    </div>
                    <div className="mt-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                      <h3 className="text-lg font-bold text-blue-700">Democratic Decisions</h3>
                      <p className="text-gray-600 mt-2">
                        Every member has one vote, encouraging fairness and collective growth in the community.
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
              isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Registering a Credit Cooperative Society
            </h2>

            {/* Mobile Horizontal Scroll */}
            <div className="flex md:hidden overflow-x-auto hide-scrollbar gap-4 snap-x snap-mandatory">
              {[0, 3].map((startIndex) => (
                <div key={startIndex} className="flex flex-col gap-4 min-w-[80%] snap-center">
                  {[
                    "Legal recognition to operate and accept member deposits",
                    "Access to low-cost funding through cooperative channels",
                    "Ability to offer affordable loans to members",
                    "Transparent and democratic governance",
                    "Builds trust and credibility among stakeholders",
                    "Tax benefits and exemptions under cooperative laws"
                  ].slice(startIndex, startIndex + 3).map((benefit, index) => (
                    <div 
                      key={index} 
                      className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
                        ✓
                      </div>
                      <p className="text-gray-900 font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 mt-12">
              {[
                "Legal recognition to operate and accept member deposits",
                "Access to low-cost funding through cooperative channels",
                "Ability to offer affordable loans to members",
                "Transparent and democratic governance",
                "Builds trust and credibility among stakeholders",
                "Tax benefits and exemptions under cooperative laws"
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:scale-105 transition-transform duration-300 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-gradient flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <p className="text-gray-900 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Levels Section */}
          <div 
            id="levels" 
            ref={sectionRefs.levels} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-200 ${
              isVisible.levels ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Levels of Credit Cooperative Society <span className="text-blue-600">Registration</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Credit Cooperative Societies in India can be registered at different levels depending on the area of operation. 
              Understanding these levels helps you decide the right structure for your society.
            </p>
            
            {/* Horizontal scroll on mobile, grid on md+ */}
            <div className="flex space-x-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:space-x-0 pb-4 scrollbar-hide">
              {levels.map((level, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-gray-200 rounded-xl p-6 w-80 flex-shrink-0 flex flex-col
                             transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]
                             group cursor-pointer overflow-hidden md:w-auto"
                  onClick={openAppointmentForm}
                >
                  {/* Shimmer Effect Overlay */}
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  ></div>

                  <div
                    className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 
                                transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-700"
                  >
                    <div className="text-blue-600 transition-colors duration-300 group-hover:text-white">
                      {level.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {level.title}
                  </h3>
                  <p className="text-gray-600 flex-grow mb-4">{level.description}</p>
                  <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                    <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4 italic">
                (In some cases, societies may also register at the multi-state or national level under separate laws. We can guide you on that too.)
              </p>
              <button
                onClick={openAppointmentForm}
                className="relative bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg 
                           transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] overflow-hidden"
              >
                {/* Button Shimmer Overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             -translate-x-full hover:translate-x-full transition-transform duration-700"
                ></span>
                <span className="relative">Consult Our Experts for Guidance</span>
              </button>
            </div>
          </div>

          {/* Categories Section */}
          <div
            id="categories"
            ref={sectionRefs.categories}
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-300 ${
              isVisible.categories
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Categories of Credit Cooperative Society Registration
            </h2>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
              Credit Cooperative Societies can be formed for different groups based on
              their needs and social objectives. Understanding these categories will
              help you decide which type of society best matches your goals.
            </p>

            {/* Horizontal scroll on mobile, grid on md+ */}
            <div className="flex space-x-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:space-x-0 pb-4 scrollbar-hide">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 w-80 flex-shrink-0 flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-md group cursor-pointer md:w-auto"
                  onClick={openAppointmentForm}
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{category.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Category Matters block */}
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-white via-sky-50 to-white shadow-xl border-l-8 border-gradient-to-b border-teal-400 hover:scale-105 transition-transform duration-500 ease-in-out">
              <div className="flex items-center mb-6">
                <div className="bg-teal-400 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Why the Category Matters
                </h3>
              </div>
              <p className="text-gray-700 mb-5">
                Choosing the right category of Credit Cooperative Society helps you:
              </p>
              <ul className="space-y-3">
                {[
                  "Comply with specific legal and membership requirements",
                  "Access government benefits or schemes applicable to your category",
                  "Better serve the unique needs of your target members",
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-teal-400 mr-3 mt-1 group-hover:animate-bounce">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-700">
                At{" "}
                <span className="font-semibold text-teal-600">Sahakar Samruddhi</span>, we
                help you identify the right category for your society and guide you
                through the registration process, including preparing the right documents
                and ensuring compliance.
              </p>
            </div>
          </div>

          {/* Registration Process Section - IMPROVED ZIG-ZAG DESIGN */}
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
          {/* Number Circle */}
          <div className="flex-shrink-0 relative">
            <div className="w-14 h-14 bg-white group-hover:bg-primary-gradient  text-blue-500 group-hover:text-white rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg transition-all duration-500">
              {index + 1}
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
          className="flex items-start gap-3 relative group"
        >
          {/* Number Circle */}
          <div className="flex-shrink-0 relative z-10">
            <div className="w-8 h-8 bg-white group-hover:bg-primary-gradient  text-blue-500 group-hover:text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-all duration-500">
              {index + 1}
            </div>
          </div>

          {/* Step Content Card */}
          <div className="flex-grow p-3 rounded-lg border border-transparent shadow-sm bg-blue-100 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-md">
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
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
    Documents Needed
  </h2>
  <p className="text-lg text-gray-700 mb-16 text-center max-w-3xl mx-auto">
    Some of the common documents required for registration include:
  </p>

  <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
    {/* Connecting Line */}
    <div className="absolute hidden md:block top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full z-0"></div>

    {[
      { number: 1, title: "Proposed Bylaws of the Society", desc: "Draft copy of society bylaws for approval." },
      { number: 2, title: "List of Founding Members", desc: "Includes ID and address proof of all initial members." },
      { number: 3, title: "Resolution for Forming the Society", desc: "Society resolution passed by the members for registration." },
      { number: 4, title: "Application Form and Affidavits", desc: "Completed application forms and necessary affidavits." },
      { number: 5, title: "Registered Office Proof", desc: "Proof of registered office address for the society." },
    ].map((doc, index) => (
      <div key={index} className="relative z-10 flex-1 text-center px-4 mb-12 md:mb-0 group">
        {/* Number Circle */}
        <div className="w-14 h-14 mx-auto bg-gray-200 group-hover:bg-primary-gradient text-blue-500 group-hover:text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg transition-all duration-300">
          {doc.number}
        </div>

        {/* Document Content */}
        <h3 className="mt-4 text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition-colors">
          {doc.title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          {doc.desc}
        </p>
      </div>
    ))}
  </div>

  {/* Note Section */}
  <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 transition-all duration-300 hover:shadow-sm">
    <p className="text-blue-800 text-sm italic">
      Note: Requirements may vary depending on the state or type of society. Our experts will guide you through the specific documentation needed for your case.
    </p>
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
            <div id="faq" ref={sectionRefs.faq} className="hidden md:grid md:grid-cols-2 gap-6">
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
            <div id="faq" ref={sectionRefs.faq} className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory py-4">
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

          <br />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-10 text-center text-white shadow-xl transition-all duration-500 hover:shadow-2xl max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Why Choose Sahakar Samruddhi</h2>

            {/* Description */}
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in Credit Cooperative Society Registration and compliance. Our expertise helps you save time, reduce errors, and ensure your society is set up correctly from day one. From initial consultation to final approval, we provide end-to-end support.
            </p>

            {/* Buttons */}
           <div className="flex justify-center gap-4">
  <button 
    onClick={openAppointmentForm}
    className="border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
  >
    Get Started Today
  </button>
  <button 
    onClick={openAppointmentForm}
    className="border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
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
        title="Book an Appointment for Credit Cooperative Society Registration"
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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CreditCooperativeRegistration;