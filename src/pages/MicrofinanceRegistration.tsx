import { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, BookOpen, UserCheck, Home, GraduationCap } from "lucide-react";

import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';

const MicrofinanceRegistration = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Microfinance Company (Section 8) Registration');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    overview: useRef(null),
    benefits: useRef(null),
    eligibility: useRef(null),
    activities: useRef(null),
    process: useRef(null),
    documents: useRef(null),
    comparison: useRef(null),
    compliance: useRef(null),
    advantages: useRef(null),
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
                  question: "What is a Microfinance Company under Section 8?",
                  answer: "A Microfinance Company under Section 8 of the Companies Act, 2013 is a not-for-profit company that provides small loans, financial services, or community development programs to low-income groups. It operates as a company with social objectives instead of profit distribution."
                },
                {
                  question: "Who can start a Microfinance Company?",
                  answer: "Any individuals, NGOs, societies, or groups can promote a Section 8 company, provided they meet the eligibility requirements of the Ministry of Corporate Affairs (MCA)."
                },
                {
                  question: "What is the minimum capital requirement?",
                  answer: "There is no minimum paid-up capital mandated for Section 8 companies. However, having a reasonable capital base is recommended for credibility and smooth operations."
                },
                {
                  question: "Do we need RBI approval to start a Microfinance Company?",
                  answer: "If the company works strictly under the Section 8 model (not accepting public deposits and meeting MCA rules), RBI approval is generally not required. But if you plan to operate as an NBFC-MFI accepting public deposits, you'll need RBI registration."
                },
                {
                  question: "What documents are required for registration?",
                  answer: "Key documents include: PAN and ID proofs of directors, address proof of registered office, draft Memorandum and Articles of Association, objectives and activity plan, and financial plan or project report."
                },
                {
                  question: "How long does the registration process take?",
                  answer: "With all documents ready, MCA approval for a Section 8 company typically takes 30–45 days."
                },
                {
                  question: "Can a Section 8 Microfinance Company take deposits from the public?",
                  answer: "No. Section 8 companies cannot accept public deposits. They can only raise funds through donations, grants, equity, or member contributions."
                },
                {
                  question: "Is there a limit on the loan amount that can be given?",
                  answer: "While there is no fixed limit under the Companies Act, a Section 8 Microfinance Company should follow prudent lending practices and comply with state money lending laws or RBI norms where applicable."
                },
                {
                  question: "What are the benefits of registering under Section 8?",
                  answer: "Benefits include legal recognition and credibility, tax exemptions on certain incomes/donations, easier access to grants and CSR funds, and clear framework for social lending activities."
                },
                {
                  question: "Do we need professional support for registration?",
                  answer: "While you can apply online through the MCA portal, professional assistance ensures correct drafting of objectives, compliance with Section 8 rules, and faster approval."
                }
  ];
  const activities = [
    {
      title: "Group Lending",
      description: "Group lending and self-help group financing to promote collective responsibility and mutual support.",
      icon: <Users className="w-10 h-10 stroke-blue-600" strokeWidth={2} />,
    },
    {
      title: "Individual Microloans",
      description: "Individual microloans for small businesses or income-generating activities in rural and urban areas.",
      icon: <Briefcase className="w-10 h-10 stroke-indigo-600" strokeWidth={2} />,
    },
    {
      title: "Financial Literacy",
      description: "Financial literacy and savings programs to educate communities about financial management.",
      icon: <BookOpen className="w-10 h-10 stroke-purple-600" strokeWidth={2} />,
    },
    {
      title: "Women Empowerment",
      description: "Women empowerment and livelihood projects to support female entrepreneurs and their families.",
      icon: <UserCheck className="w-10 h-10 stroke-pink-600" strokeWidth={2} />,
    },
    {
      title: "Social Development",
      description: "Social development and community projects aimed at improving living standards and opportunities.",
      icon: <Home className="w-10 h-10 stroke-green-600" strokeWidth={2} />,
    },
    {
      title: "Skill Development",
      description: "Training and skill development programs to enhance employability and entrepreneurship capabilities.",
      icon: <GraduationCap className="w-10 h-10 stroke-yellow-600" strokeWidth={2} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative py-16 md:py-24 min-h-screen flex items-center bg-cover bg-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/abc.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent z-0"></div>
        <div className="absolute inset-0 md:hidden backdrop-blur-sm z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-800/70 rounded-full px-4 py-2 mb-6 border border-blue-300/50 animate-pulse backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-ping"></span>
              <span className="text-sm font-medium">Microfinance Registration Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Microfinance Company <span className="text-blue-300 drop-shadow-md">Section 8 Registration</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 drop-shadow-md">
              Microfinance plays an important role in supporting small businesses and low-income households 
              by providing them with access to affordable credit through Section 8 non-profit structure.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
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
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-16 h-16 border border-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>

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
                {id: 'benefits', label: 'Benefits'},
                {id: 'eligibility', label: 'Eligibility'},
                {id: 'activities', label: 'Activities'},
                {id: 'process', label: 'Process'},
                {id: 'documents', label: 'Documents'},
                {id: 'comparison', label: 'Comparison'},
                {id: 'compliance', label: 'Compliance'},
                {id: 'advantages', label: 'Advantages'},
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
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What is a Section 8 Microfinance Company?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                A Section 8 Microfinance Company is a non-profit organization registered under the Companies Act, 2013, 
                providing affordable credit to promote financial inclusion and community development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Non-Profit Structure",
                  description: "Operates as a non-profit entity under Section 8 of Companies Act, focusing on social objectives rather than profit distribution.",
                  icon: "🏢",
                  color: "blue"
                },
                {
                  title: "No RBI License Required",
                  description: "Unlike NBFC-MFIs, Section 8 companies don't require RBI approval to start microfinance operations.",
                  icon: "📋",
                  color: "indigo"
                },
                {
                  title: "Financial Inclusion Focus",
                  description: "Targets rural and semi-urban areas to provide small loans and promote entrepreneurship among underserved communities.",
                  icon: "🎯",
                  color: "purple"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300">
                    <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                    <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <p className="text-blue-800 text-lg leading-relaxed">
                At Sahakar Samruddhi, we help you set up a Microfinance Company under Section 8 so you can run your organization legally and efficiently.
                A Section 8 Microfinance Company is a non-profit organization registered under the Companies Act, 2013. Unlike NBFCs, it does not require 
                RBI approval to start operations. These companies provide small loans to individuals or groups, especially in rural or semi-urban areas, 
                with the aim of promoting financial inclusion and community development rather than profit.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
        <div id="benefits" className="mb-20 scroll-mt-20 px-4">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Benefits of Section 8 Microfinance Registration
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Discover the advantages of registering your microfinance company under Section 8 structure.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-10">
    {[
      { title: "No Minimum Capital", icon: "💰" },
      { title: "Legal Recognition", icon: "⚖️" },
      { title: "Easy Funding Access", icon: "🏦" }, // changed 🎁 → 🏦 (bank)
      { title: "Promotes Inclusion", icon: "🤝" },
      { title: "Limited Liability", icon: "🛡️" },
      { title: "Trust & Credibility", icon: "📜" }, // replaced 👁️ with 📜 (certificate/credibility)
    ].map((b, i) => (
      <div
        key={i}
        className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex flex-col items-center justify-center text-center animate-bounce"
        style={{ animationDelay: `${i * 0.2}s` }}
      >
        <div className="text-3xl">{b.icon}</div>
        <p className="text-xs mt-1 font-semibold">{b.title}</p>
      </div>
    ))}
  </div>
</div>


          {/* Eligibility Section */}
          <div 
            id="eligibility"
            ref={sectionRefs.eligibility}
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-200 ${
              isVisible.eligibility ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative bg-gradient-to-b from-indigo-50 via-white to-blue-50 rounded-3xl p-12 shadow-lg">
              <div className="text-center mb-14">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Eligibility Criteria
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Follow these key requirements for Section 8 Microfinance Company Registration.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    title: "Director Requirements",
                    points: [
                      "Minimum two directors are required",
                      "At least one director must be a resident of India",
                      "Directors should have a clean background with no disqualifications"
                    ],
                    icon: "👥",
                    gradient: "from-indigo-500 to-blue-500"
                  },
                  {
                    title: "Objective & Purpose",
                    points: [
                      "Company must have clear social or charitable objective",
                      "Profits must be reinvested into company objectives",
                      "No distribution of profits to members or shareholders"
                    ],
                    icon: "🎯",
                    gradient: "from-pink-500 to-purple-500"
                  }
                ].map((section, index) => (
                  <div 
                    key={index} 
                    className="relative backdrop-blur-lg bg-white/70 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-8"
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white shadow-lg bg-gradient-to-r ${section.gradient}`}>
                      <span className="text-2xl">{section.icon}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h3>

                    <ul className="space-y-3">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activities Section */}
        <div 
      id="activities" 
      ref={sectionRefs.activities} 
      className={`mb-20 scroll-mt-20 transition-all duration-700 delay-300 ${
        isVisible.activities ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Permitted Microfinance Activities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Section 8 Microfinance Companies can engage in various activities to promote financial inclusion and community development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={openAppointmentForm}
          >
            <div className="bg-white rounded-2xl border border-gray-200 p-6 h-full shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 mb-6 group-hover:scale-110 transition-transform">
                {activity.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

          {/* Registration Process */}
          <div
            id="process"
            ref={sectionRefs.process}
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-400 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Registration Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive process ensures smooth registration of your Section 8 Microfinance Company with full compliance and legal support.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Name Approval",
                    description: "Applying for company name approval through the Ministry of Corporate Affairs (MCA) portal.",
                    details: "We help you choose an appropriate name that reflects your microfinance objectives and check availability.",
                    icon: "📝"
                  },
                  {
                    step: "02", 
                    title: "Document Drafting",
                    description: "Drafting the Memorandum of Association (MOA) and Articles of Association (AOA) for microfinance activities.",
                    details: "Our legal experts prepare comprehensive documents aligned with Section 8 requirements and microfinance regulations.",
                    icon: "📋"
                  },
                  {
                    step: "03",
                    title: "Section 8 License Application",
                    description: "Filing the Section 8 incorporation form with MCA and obtaining the special license.",
                    details: "Complete application filing with all required documents and follow-up until approval is received.",
                    icon: "🏛️"
                  },
                  {
                    step: "04",
                    title: "Certificate of Incorporation",
                    description: "Obtaining Certificate of Incorporation and other statutory compliances.",
                    details: "Receiving official incorporation certificate and setting up necessary statutory registers and records.",
                    icon: "🏆"
                  },
                  {
                    step: "05",
                    title: "Post-Incorporation Setup",
                    description: "Securing PAN, TAN, opening bank account, and preparing for operations.",
                    details: "Complete setup including tax registrations, bank account opening, and operational framework establishment.",
                    icon: "🚀"
                  }
                ].map((processStep, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-center max-w-2xl ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} group`}>
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300">
                        {processStep.step}
                      </div>
                      
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'ml-6' : 'mr-6'} flex-1`}>
                        <div className="flex items-start mb-3">
                          <span className="text-2xl mr-3">{processStep.icon}</span>
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {processStep.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-2 font-medium">
                          {processStep.description}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {processStep.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <p className="text-blue-800">
                Our team at Sahakar Samruddhi assists you with drafting documents, filing applications, and ensuring compliance at every stage.
              </p>
            </div>
          </div>

          {/* Documents Section */}
          <div 
            id="documents" 
            ref={sectionRefs.documents} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-500 ${isVisible.documents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Required Documents
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Common documents needed to register a Section 8 Microfinance Company with our complete assistance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    category: "Director Documents",
                    items: [
                      "PAN and Aadhaar of all directors",
                      "Address proof of directors",
                      "Passport-size photographs",
                      "DIN (Director Identification Number)"
                    ],
                    icon: "👤",
                    color: "blue"
                  },
                  {
                    category: "Company Documents",
                    items: [
                      "Draft MOA and AOA for microfinance",
                      "Registered office address proof",
                      "Rent agreement or ownership documents",
                      "Utility bills for address verification"
                    ],
                    icon: "🏢",
                    color: "indigo"
                  },
                  {
                    category: "Compliance Documents",
                    items: [
                      "Board resolution for incorporation",
                      "Subscriber sheet and declaration",
                      "Professional certificates (if applicable)",
                      "Bank account opening documents"
                    ],
                    icon: "📊",
                    color: "purple"
                  }
                ].map((docCategory, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform">
                          {docCategory.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {docCategory.category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {docCategory.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-blue-100 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">💡</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Important Note</h4>
                    <p className="text-blue-700 text-sm">
                      Document requirements may vary based on specific state regulations and company objectives. 
                      Our experts will provide you with a complete, customized checklist based on your unique requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div 
            id="comparison" 
            ref={sectionRefs.comparison} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-600 ${isVisible.comparison ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                NBFC-MFI vs Section 8 Microfinance Company
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Understanding the key differences helps you choose the right structure for your microfinance goals and objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                      NBFC
                    </div>
                    <h3 className="text-2xl font-bold text-red-800">NBFC-MFI</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Requires RBI registration and approval",
                      "Minimum ₹5 crore net owned funds required",
                      "Strict compliance with RBI prudential norms",
                      "Can accept public deposits with restrictions",
                      "Higher regulatory compliance costs",
                      "Profit distribution allowed to shareholders"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                      S8
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">Section 8 Company</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "No RBI approval required to start",
                      "No minimum capital requirement",
                      "Simpler compliance and lower costs",
                      "Cannot accept public deposits",
                      "Tax benefits and CSR funding eligible",
                      "Profits must be reinvested, no distribution"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
                <p className="text-blue-800 font-medium mb-2">Which is Right for You?</p>
                <p className="text-blue-700 text-sm leading-relaxed">
                  Choose NBFC-MFI if you have substantial capital and want to operate on a large scale with deposit-taking capabilities. 
                  Choose Section 8 if you want to start with lower investment, focus on social impact, and access grant funding.
                </p>
              </div>
            </div>
          </div>

          {/* Funding & Capital Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 border border-white/20 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Capital and Funding Options</h2>
                  <p className="text-blue-100 max-w-3xl mx-auto">
                    Although Section 8 Microfinance Companies don't have a fixed minimum capital requirement, 
                    you will still need working capital to start operations.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Member Contributions",
                      description: "Initial capital from founding members and subscribers",
                      icon: "👥"
                    },
                    {
                      title: "Donations & Grants",
                      description: "Funding from charitable organizations and foundations", 
                      icon: "🎁"
                    },
                    {
                      title: "CSR Funds",
                      description: "Corporate Social Responsibility funding from companies",
                      icon: "🏢"
                    },
                    {
                      title: "Soft Loans",
                      description: "Low-interest loans from banks and financial institutions",
                      icon: "🏦"
                    }
                  ].map((funding, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl mb-3">{funding.icon}</div>
                      <h3 className="text-lg font-semibold mb-2">{funding.title}</h3>
                      <p className="text-blue-100 text-sm">{funding.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div 
            id="compliance" 
            ref={sectionRefs.compliance} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-700 ${isVisible.compliance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  RBI Compliance and Restrictions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Section 8 Microfinance Companies are exempt from direct RBI licensing but must follow certain lending limits and fair practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Key Restrictions",
                    points: [
                      "Cannot accept public deposits like NBFCs",
                      "Must follow fair lending practices and transparent interest rates",
                      "Should maintain proper records of all financial transactions",
                      "Must comply with state-specific microfinance regulations"
                    ],
                    icon: "🚫"
                  },
                  {
                    title: "Compliance Requirements",
                    points: [
                      "Maintain proper books of accounts",
                      "File annual returns and financial statements with the MCA",
                      "Follow lending policies and fair practices code",
                      "Conduct board meetings and maintain statutory registers"
                    ],
                    icon: "📋"
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border border-blue-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-4">{section.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-100 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">ℹ️</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Ongoing Compliance Support</h4>
                    <p className="text-blue-700 text-sm">
                      We provide ongoing compliance support to ensure smooth operations and help you stay updated with changing regulations in the microfinance sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages Section */}
          <div 
            id="advantages" 
            ref={sectionRefs.advantages} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-800 ${isVisible.advantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advantages for Social Impact
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Section 8 Microfinance Companies offer unique advantages for organizations focused on creating meaningful social change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Direct Community Impact",
                  description: "Directly supports financial inclusion in underserved areas through accessible credit.",
                  icon: "🌍",
                  gradient: "from-blue-400 to-indigo-500"
                },
                {
                  title: "Donor Trust",
                  description: "Builds trust with donors and funding agencies through transparent governance structure.",
                  icon: "🤝",
                  gradient: "from-indigo-400 to-purple-500"
                },
                {
                  title: "Sustainable Model",
                  description: "Provides a sustainable model for community development through responsible lending practices.",
                  icon: "♻️",
                  gradient: "from-purple-400 to-blue-500"
                },
                {
                  title: "Entrepreneurship Support",
                  description: "Encourages entrepreneurship among low-income groups with tailored financial products.",
                  icon: "💡",
                  gradient: "from-blue-500 to-indigo-600"
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${advantage.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                      {advantage.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
        <div 
            id="faq" 
            ref={sectionRefs.faq} 
            className={`mb-20 scroll-mt-20 transition-all duration-700 delay-700 ${
              isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
               <div
  key={index}
  className="rounded-xl border border-blue-500 shadow-md bg-gradient-to-br from-blue-200 to-blue-400 text-white hover:shadow-xl transition duration-300"
>
                  <button
                    className="w-full px-5 py-4 text-left focus:outline-none"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-800">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-blue-600 transform transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </button>

                  {activeIndex === index && (
                    <div className="px-5 pb-4">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Sahakar Samruddhi</h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
                We specialize in Microfinance Company Registration under Section 8. From initial consultation to final incorporation, 
                we provide end-to-end support so you can focus on your mission of financial inclusion and community development.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={openAppointmentForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Today
                </button>
                <button 
                  onClick={openAppointmentForm}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Book an Appointment for Microfinance Company Registration"
      />

      <Footer />
      
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

export default MicrofinanceRegistration;