import { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, BookOpen, UserCheck, Home, GraduationCap, ChevronDown } from "lucide-react";

import { motion,AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';

const MicrofinanceRegistration = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
     const scrollRef = useRef(null);

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
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  
const addToRefs = (el) => {
    if (el && !cardsRefs.current.includes(el)) cardsRefs.current.push(el);
  };
    const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft } = scrollRef.current;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap (space-x-6 = 1.5rem = 24px)

    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  // Smooth scroll to card when dot clicked
  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24;

    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
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
         <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      onClick={scrollToBottom}
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <motion.div
          className="w-1 h-3 bg-white rounded-full mt-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        ></motion.div>
      </div>
    </motion.div>

        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-16 w-16 h-16 border border-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>

      
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
              <h2 className="text-4xl font-extrabold bg-primary-gradient bg-clip-text text-transparent">
                What is a Section 8 Microfinance Company?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                A Section 8 Microfinance Company is a non-profit organization registered under the Companies Act, 2013, 
                providing affordable credit to promote financial inclusion and community development.
              </p>
            </div>

         <div className="mt-12 px-4 md:px-20">
  {/* Wrapper: horizontal scroll on mobile, grid on md+ */}
  <div className="mb-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
    Key Features
  </h2>
  <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
    Understand the main benefits of Section 8 companies and their operational advantages.
  </p>

  <div className="relative">
    {/* Desktop Grid */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Non-Profit Structure",
          description:
            "Operates as a non-profit entity under Section 8 of Companies Act, focusing on social objectives rather than profit distribution.",
          icon: "🏢",
        },
        {
          title: "No RBI License Required",
          description:
            "Unlike NBFC-MFIs, Section 8 companies don't require RBI approval to start microfinance operations.",
          icon: "📋",
        },
        {
          title: "Financial Inclusion Focus",
          description:
            "Targets rural and semi-urban areas to provide small loans and promote entrepreneurship among underserved communities.",
          icon: "🎯",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
          <p className="text-gray-600 leading-relaxed">{card.description}</p>
          <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
        </motion.div>
      ))}
    </div>

    {/* Mobile Horizontal Scroll */}
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
    >
      {[
        {
          title: "Non-Profit Structure",
          description:
            "Operates as a non-profit entity under Section 8 of Companies Act, focusing on social objectives rather than profit distribution.",
          icon: "🏢",
        },
        {
          title: "No RBI License Required",
          description:
            "Unlike NBFC-MFIs, Section 8 companies don't require RBI approval to start microfinance operations.",
          icon: "📋",
        },
        {
          title: "Financial Inclusion Focus",
          description:
            "Targets rural and semi-urban areas to provide small loans and promote entrepreneurship among underserved communities.",
          icon: "🎯",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="flex-shrink-0 w-72 snap-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
          <p className="text-gray-600 leading-relaxed">{card.description}</p>
          <div className="mt-4 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
        </motion.div>
      ))}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center mt-4 md:hidden space-x-2">
      {[0, 1, 2].map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToIndex(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  </div>
</div>

</div>


          <div className="mt-16 px-4 md:px-20">
 <div className="mt-8 px-4 sm:px-6 md:px-20">
 <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-xl border border-gray-200 
                py-4 sm:py-6 md:py-10 px-5 sm:px-8 md:px-12 
                w-full sm:max-w-xl md:max-w-3xl mx-auto 
                transition-transform transform hover:-translate-y-2 hover:shadow-2xl space-y-4 sm:space-y-5 md:space-y-6">
  
  {/* Heading with gradient underline */}
  <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug relative">
    Establish Your Section 8 Microfinance Company
    <span className="block w-20 h-1 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full mt-2"></span>
  </h2>

  {/* Paragraphs */}
  <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-snug">
    At <span className="font-semibold text-gray-900">Sahakar Samriddhi</span>, we guide you in setting up a Microfinance Company under Section 8 so your organization can operate legally and efficiently.
  </p>

  <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-snug">
    A Section 8 Microfinance Company is a non-profit entity registered under the Companies Act, 2013. Unlike NBFCs, it does not require RBI approval to start operations. These companies provide small loans to individuals or groups, particularly in rural or semi-urban areas, with the goal of promoting financial inclusion and community development rather than profit.
  </p>
</div>

</div>

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
      { title: "Easy Funding Access", icon: "🏦" }, // 
      { title: "Promotes Inclusion", icon: "🤝" },
      { title: "Limited Liability", icon: "🛡️" },
      { title: "Trust & Credibility", icon: "📜" }, // 
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
  {/* Section Header */}
  <div className="text-center mb-14 px-4">
    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
      Eligibility Criteria
    </h2>
    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
      Follow these key requirements for Section 8 Microfinance Company Registration.
    </p>
  </div>

  {/* Mobile Horizontal Scroll */}
  <div className="lg:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-6 scrollbar-hide">
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
    ].map((section, idx) => (
      <div
        key={idx}
        className="snap-start flex-shrink-0 w-[85%] bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        onClick={openAppointmentForm}
      >
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-r ${section.gradient}`}>
          <span className="text-3xl">{section.icon}</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-5">{section.title}</h3>

        <ul className="space-y-3 text-gray-700 text-sm">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid lg:grid-cols-2 gap-10 px-4">
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
    ].map((section, idx) => (
      <div
        key={idx}
        className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        onClick={openAppointmentForm}
      >
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white shadow-lg bg-gradient-to-r ${section.gradient}`}>
          <span className="text-3xl">{section.icon}</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-5">{section.title}</h3>

        <ul className="space-y-3 text-gray-700 text-sm">
          {section.points.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-500 mr-3 mt-1 text-lg">✔️</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
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

  <div className="relative">
    {/* Mobile Horizontal Scroll */}
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="lg:hidden overflow-x-auto flex gap-4 px-4 pb-4 snap-x snap-mandatory scroll-smooth"
    >
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="snap-start flex-shrink-0 w-[85%] bg-white border border-gray-200 rounded-xl p-6 flex flex-col
                     transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-pointer overflow-hidden"
          onClick={openAppointmentForm}
        >
          {/* Icon */}
          <div
            className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center mb-4
                       transition-all duration-500 group-hover:from-blue-500 group-hover:to-blue-700"
          >
            <div className="text-blue-600 transition-colors duration-300 group-hover:text-white">
              {activity.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
            {activity.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 flex-grow mb-4 text-sm">{activity.description}</p>

          {/* Learn more */}
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
        </motion.div>
      ))}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center mt-4 space-x-2 lg:hidden">
      {activities.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToIndex(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>

    {/* Desktop Grid */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-8 px-4 mt-6">
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
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
            <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
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
          details: "We help you choose an appropriate name that reflects your microfinance objectives and check availability."
        },
        {
          step: "02", 
          title: "Document Drafting",
          description: "Drafting the Memorandum of Association (MOA) and Articles of Association (AOA) for microfinance activities.",
          details: "Our legal experts prepare comprehensive documents aligned with Section 8 requirements and microfinance regulations."
        },
        {
          step: "03",
          title: "Section 8 License Application",
          description: "Filing the Section 8 incorporation form with MCA and obtaining the special license.",
          details: "Complete application filing with all required documents and follow-up until approval is received."
        },
        {
          step: "04",
          title: "Certificate of Incorporation",
          description: "Obtaining Certificate of Incorporation and other statutory compliances.",
          details: "Receiving official incorporation certificate and setting up necessary statutory registers and records."
        },
        {
          step: "05",
          title: "Post-Incorporation Setup",
          description: "Securing PAN, TAN, opening bank account, and preparing for operations.",
          details: "Complete setup including tax registrations, bank account opening, and operational framework establishment."
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
            {/* Circle without icon, hover to pink gradient */}
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-primary-gradient  transition-all duration-300">
              {processStep.step}
            </div>
            
            {/* Card with light blue background */}
            <div className={`bg-blue-200 rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'ml-6' : 'mr-6'} flex-1`}>
              <div className="mb-3">
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

  {/* Bottom info card */}
  <div className="mt-10 px-4 sm:px-6 md:px-20">
    <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 p-6 sm:p-8 md:p-10 overflow-hidden">
      {/* Top-left accent circle */}
      <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full"></div>
      
      {/* Bottom-right accent circle */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 opacity-30 rounded-full"></div>
      
      <p className="text-blue-900 text-base sm:text-lg md:text-xl font-medium relative z-10 leading-relaxed">
        Our team at <span className="font-semibold">Sahakar Samriddhi</span> assists you with drafting documents, filing applications, and ensuring compliance at every stage.
      </p>
    </div>
  </div>
</div>


          {/* Documents Section */}
       <div 
  id="documents" 
  ref={sectionRefs.documents} 
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-500 ${isVisible.documents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
>
  <div className="text-center mb-12 px-4 md:px-0">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Required Documents
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Common documents needed to register a Section 8 Microfinance Company with our complete assistance.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
    {[
      {
        category: "Director Documents",
        items: [
          "PAN and Aadhaar of all directors",
          "Address proof of directors",
          "Passport-size photographs",
          "DIN (Director Identification Number)"
        ],
        color: "from-blue-400 to-blue-200"
      },
      {
        category: "Company Documents",
        items: [
          "Draft MOA and AOA for microfinance",
          "Registered office address proof",
          "Rent agreement or ownership documents",
          "Utility bills for address verification"
        ],
        color: "from-indigo-400 to-indigo-200"
      },
      {
        category: "Compliance Documents",
        items: [
          "Board resolution for incorporation",
          "Subscriber sheet and declaration",
          "Professional certificates (if applicable)",
          "Bank account opening documents"
        ],
        color: "from-purple-400 to-purple-200"
      }
    ].map((docCategory, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="group"
      >
        <div className={`h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${docCategory.color} shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-3 hover:shadow-2xl`}>
          
          {/* Heading */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{docCategory.category}</h3>
          <div className="w-12 h-1 bg-white rounded-full mx-auto mb-4"></div>

          {/* List with checkmarks */}
          <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
            {docCategory.items.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <div className="text-white mt-1 mr-3 flex-shrink-0 text-lg">✅</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </div>
</div>


          {/* Comparison Section */}
<div
  id="comparison"
  ref={sectionRefs.comparison}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-600 ${
    isVisible.comparison ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {/* Heading */}
  <div className="text-center mb-12 px-4">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      NBFC-MFI vs Section 8 Microfinance Company
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Understanding the key differences helps you choose the right structure for your microfinance goals and objectives.
    </p>
  </div>

  <div className="relative">
    {/* Mobile Horizontal Scroll */}
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="lg:hidden flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory scroll-smooth"
    >
      {[
        {
          title: "NBFC-MFI",
          short: "NBFC",
          gradient: "from-red-100 to-orange-100",
          features: [
            "Requires RBI registration and approval",
            "Minimum ₹5 crore net owned funds required",
            "Strict compliance with RBI prudential norms",
            "Can accept public deposits with restrictions",
            "Higher regulatory compliance costs",
            "Profit distribution allowed to shareholders"
          ]
        },
        {
          title: "Section 8 Company",
          short: "S8",
          gradient: "from-blue-100 to-indigo-100",
          features: [
            "No RBI approval required to start",
            "No minimum capital requirement",
            "Simpler compliance and lower costs",
            "Cannot accept public deposits",
            "Tax benefits and CSR funding eligible",
            "Profits must be reinvested, no distribution"
          ]
        }
      ].map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          viewport={{ once: true }}
          className={`snap-start flex-shrink-0 w-[85%] rounded-3xl p-6 shadow-lg cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${section.gradient} text-gray-900`}
        >
          {/* Card Header */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg mr-4 bg-white/30 backdrop-blur-sm">
              {section.short}
            </div>
            <h3 className="text-2xl font-bold">{section.title}</h3>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {section.features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/40 text-gray-900 mr-3 mt-1 text-sm">✔️</span>
                <span className="text-gray-900 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center mt-4 space-x-2 lg:hidden">
      {[0, 1].map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToIndex(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === index ? "bg-blue-600 scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>

    {/* Desktop Grid */}
    <div className="hidden lg:grid lg:grid-cols-2 gap-8 px-4 mt-6">
      {[
        {
          title: "NBFC-MFI",
          short: "NBFC",
          gradient: "from-red-100 to-orange-100",
          features: [
            "Requires RBI registration and approval",
            "Minimum ₹5 crore net owned funds required",
            "Strict compliance with RBI prudential norms",
            "Can accept public deposits with restrictions",
            "Higher regulatory compliance costs",
            "Profit distribution allowed to shareholders"
          ]
        },
        {
          title: "Section 8 Company",
          short: "S8",
          gradient: "from-blue-100 to-indigo-100",
          features: [
            "No RBI approval required to start",
            "No minimum capital requirement",
            "Simpler compliance and lower costs",
            "Cannot accept public deposits",
            "Tax benefits and CSR funding eligible",
            "Profits must be reinvested, no distribution"
          ]
        }
      ].map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          className={`rounded-3xl p-8 shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${section.gradient} text-gray-900 cursor-pointer`}
        >
          {/* Card Header */}
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-lg mr-4 bg-white/30 backdrop-blur-sm">
              {section.short}
            </div>
            <h3 className="text-2xl font-bold">{section.title}</h3>
          </div>

          {/* Features */}
          <div className="space-y-3">
            {section.features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/40 text-gray-900 mr-3 mt-1 text-sm">✔️</span>
                <span className="text-gray-900 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Recommendation Box */}
    <div className="mt-8 text-center">
      <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-3xl p-6 max-w-3xl mx-auto shadow-lg">
        <p className="text-blue-800 font-medium mb-2">Which is Right for You?</p>
        <p className="text-blue-700 text-sm leading-relaxed">
          Choose NBFC-MFI if you have substantial capital and want to operate on a large scale with deposit-taking capabilities. 
          Choose Section 8 if you want to start with lower investment, focus on social impact, and access grant funding.
        </p>
      </div>
    </div>
  </div>
</div>



          {/* Funding & Capital Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white relative overflow-hidden">
  {/* Decorative circles */}
  <div className="absolute top-0 right-0 w-40 h-40 border border-white/20 rounded-full -mr-20 -mt-20"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 border border-white/20 rounded-full -ml-16 -mb-16"></div>
  
  <div className="relative z-10">
    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold mb-4">Capital and Funding Options</h2>
      <p className="text-blue-100 max-w-3xl mx-auto">
        Although Section 8 Microfinance Companies don't have a fixed minimum capital requirement, 
        you will still need working capital to start operations.
      </p>
    </div>

    {/* Funding options grid */}
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


          {/* Compliance Section */}
       <div
  id="compliance"
  ref={sectionRefs.compliance}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-700 ${
    isVisible.compliance ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {/* Heading */}
  <div className="text-center mb-12 px-4 md:px-0">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
      RBI Compliance & Restrictions
    </h2>
    <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
      Section 8 Microfinance Companies are exempt from direct RBI licensing but must follow certain lending limits and fair practices.
    </p>
  </div>

  {/* Mobile Horizontal Scroll */}
  <div className="relative">
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="lg:hidden flex gap-6 overflow-x-auto px-4 py-2 snap-x snap-mandatory scroll-smooth"
    >
      {[
        {
          title: "Key Restrictions",
          points: [
            "Cannot accept public deposits like NBFCs",
            "Must follow fair lending practices and transparent interest rates",
            "Should maintain proper records of all financial transactions",
            "Must comply with state-specific microfinance regulations"
          ],
          gradient: "from-red-400 to-pink-500",
          icon: "❌"
        },
        {
          title: "Compliance Requirements",
          points: [
            "Maintain proper books of accounts",
            "File annual returns and financial statements with the MCA",
            "Follow lending policies and fair practices code",
            "Conduct board meetings and maintain statutory registers"
          ],
          gradient: "from-blue-400 to-indigo-500",
          icon: "✔️"
        }
      ].map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="snap-start flex-shrink-0 w-[85%] bg-white rounded-3xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Gradient line */}
          <div className={`h-1 w-20 mb-5 rounded-full bg-gradient-to-r ${section.gradient} shadow-sm`}></div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>

          {/* Points */}
          <ul className="space-y-3">
            {section.points.map((point, idx) => (
              <li key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
                <span
                  className={`mr-3 mt-1 text-2xl flex-shrink-0 ${
                    section.icon === "❌"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {section.icon}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center mt-4 space-x-2 lg:hidden">
      {[0, 1].map((_, idx) => (
        <button
          key={idx}
          onClick={() => scrollToIndex(idx)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === idx ? "bg-blue-600 scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid lg:grid-cols-2 gap-8 px-4 mt-6">
    {[
      {
        title: "Key Restrictions",
        points: [
          "Cannot accept public deposits like NBFCs",
          "Must follow fair lending practices and transparent interest rates",
          "Should maintain proper records of all financial transactions",
          "Must comply with state-specific microfinance regulations"
        ],
        gradient: "from-red-400 to-pink-500",
        icon: "❌"
      },
      {
        title: "Compliance Requirements",
        points: [
          "Maintain proper books of accounts",
          "File annual returns and financial statements with the MCA",
          "Follow lending policies and fair practices code",
          "Conduct board meetings and maintain statutory registers"
        ],
        gradient: "from-blue-400 to-indigo-500",
        icon: "✔️"
      }
    ].map((section, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className={`h-1 w-20 mb-5 rounded-full bg-gradient-to-r ${section.gradient} shadow-sm`}></div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>

        <ul className="space-y-3">
          {section.points.map((point, idx) => (
            <li key={idx} className="flex items-start text-gray-700 text-sm sm:text-base">
              <span
                className={`mr-3 mt-1 text-2xl flex-shrink-0 ${
                  section.icon === "❌"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {section.icon}
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>

  {/* Support Info */}
  <div className="mt-8 px-4 md:px-0">
    <div className="flex items-start bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-3xl p-6 gap-3 shadow-sm">
      <div className="text-3xl text-blue-600 font-bold">ℹ️</div>
      <div>
        <h4 className="font-semibold text-blue-800 mb-1">Ongoing Compliance Support</h4>
        <p className="text-blue-700 text-sm">
          We provide ongoing compliance support to ensure smooth operations and help you stay updated with changing regulations in the microfinance sector.
        </p>
      </div>
    </div>
  </div>
</div>



          {/* Advantages Section */}
        <div
  id="advantages"
  ref={sectionRefs.advantages}
  className={`mb-20 scroll-mt-20 transition-all duration-700 delay-800 ${
    isVisible.advantages ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {/* Heading */}
  <div className="text-center mb-12 px-4 md:px-0">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Advantages for Social Impact
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Section 8 Microfinance Companies offer unique advantages for organizations focused on creating meaningful social change.
    </p>
  </div>

  {/* Mobile Horizontal Scroll */}
  <div className="relative lg:hidden">
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory scroll-smooth"
    >
      {[
        {
          title: "Direct Community Impact",
          description: "Directly supports financial inclusion in underserved areas through accessible credit.",
          gradient: "from-blue-400 to-indigo-500"
        },
        {
          title: "Donor Trust",
          description: "Builds trust with donors and funding agencies through transparent governance structure.",
          gradient: "from-indigo-400 to-purple-500"
        },
        {
          title: "Sustainable Model",
          description: "Provides a sustainable model for community development through responsible lending practices.",
          gradient: "from-purple-400 to-blue-500"
        },
        {
          title: "Entrepreneurship Support",
          description: "Encourages entrepreneurship among low-income groups with tailored financial products.",
          gradient: "from-blue-500 to-indigo-600"
        }
      ].map((advantage, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="snap-start flex-shrink-0 w-[85%]"
        >
          <div className="bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
            {/* Number Badge */}
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-white text-lg bg-gradient-to-r ${advantage.gradient} transition-transform duration-300 group-hover:scale-110`}>
              {index + 1}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center mt-4 space-x-2">
      {[0, 1, 2, 3].map((_, idx) => (
        <button
          key={idx}
          onClick={() => scrollToIndex(idx)}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeIndex === idx ? "bg-blue-600 scale-125" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
    {[
      {
        title: "Direct Community Impact",
        description: "Directly supports financial inclusion in underserved areas through accessible credit.",
        gradient: "from-blue-400 to-indigo-500"
      },
      {
        title: "Donor Trust",
        description: "Builds trust with donors and funding agencies through transparent governance structure.",
        gradient: "from-indigo-400 to-purple-500"
      },
      {
        title: "Sustainable Model",
        description: "Provides a sustainable model for community development through responsible lending practices.",
        gradient: "from-purple-400 to-blue-500"
      },
      {
        title: "Entrepreneurship Support",
        description: "Encourages entrepreneurship among low-income groups with tailored financial products.",
        gradient: "from-blue-500 to-indigo-600"
      }
    ].map((advantage, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
      >
        {/* Number Badge */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-white text-lg bg-gradient-to-r ${advantage.gradient}`}>
          {index + 1}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{advantage.description}</p>
      </motion.div>
    ))}
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
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-6 md:p-10 text-center text-white shadow-2xl relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
  <div className="relative z-10">
    <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
      Why Choose Sahakar Samriddhi
    </h2>
    <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto text-gray-200">
      We specialize in Microfinance Company Registration under Section 8. From initial consultation to final incorporation, 
      we provide end-to-end support so you can focus on your mission of financial inclusion and community development.
    </p>
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