import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, User,Briefcase,Users, FileText, Building, Shield, BookOpen, Phone, Home, ShoppingCart, Factory, TrendingUp, GraduationCap, ChevronDown } from 'lucide-react';

const OtherCooperativeRegistration = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Other Cooperative Society Registration');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionRefs = {
    overview: useRef(null),
    types: useRef(null),
    benefits: useRef(null),
    process: useRef(null),
    documents: useRef(null),
    categories: useRef(null),
    compliance: useRef(null),
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
      question: "What is meant by 'Other Cooperative Societies'?",
      answer: "'Other Cooperative Societies' refers to all types of cooperative organizations other than credit cooperatives, such as housing societies, consumer societies, producer societies, dairy or agriculture societies, marketing societies, and multipurpose cooperatives."
    },
    {
      question: "Who can form an Other Cooperative Society?",
      answer: "Any group of 10 or more adult individuals with a common objective or need can form a cooperative society under the state's Cooperative Societies Act. In some cases, institutions and firms can also become members."
    },
    {
      question: "Which authority registers these societies?",
      answer: "Registration is done by the Registrar of Cooperative Societies at the Taluka, District, or State level, depending on the type and area of operation."
    },
    {
      question: "What documents are needed for registration?",
      answer: "Key documents include: Application form and cover letter, Draft bylaws, List of promoter members with ID/address proofs, Proof of registered office, Details of share capital and proposed activities."
    },
    {
      question: "Is there any minimum capital requirement?",
      answer: "Yes. Each state specifies a minimum share capital and membership contribution, depending on the society type. It is generally small and affordable."
    },
    {
      question: "Can institutions or companies become members?",
      answer: "In many states, certain institutions, NGOs, or government bodies can also become members, subject to the Registrar's approval and the society's bylaws."
    },
    {
      question: "How long does the registration process take?",
      answer: "With proper documents and compliance, registration usually takes 30–90 days, depending on the Registrar's workload."
    },
    {
      question: "Can a cooperative society operate in more than one state?",
      answer: "No. A cooperative society registered under a state act can operate only within that state. For multi-state operations, you must register as a Multi-State Cooperative Society under the central act."
    },
    {
      question: "What are the benefits of registering a cooperative society?",
      answer: "Registration provides legal recognition, allows you to access government schemes, grants, and subsidies, and gives credibility to your organization's operations."
    },
    {
      question: "Do we need professional assistance for registration?",
      answer: "While it's possible to file on your own, professional support ensures correct bylaws, faster approval, and full compliance with state laws."
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
              <Building className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium">Cooperative Society Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Other Cooperative Society <span className="text-blue-300">Registration</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10"
            >
              Cooperative societies in India are not limited to credit only operations. They can also be formed for 
              housing, farming, marketing, production, or other purposes that benefit members collectively.
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
                {id: 'types', label: 'Types'},
                {id: 'benefits', label: 'Benefits'},
                {id: 'process', label: 'Process'},
                {id: 'documents', label: 'Documents'},
                {id: 'categories', label: 'Categories'},
                {id: 'compliance', label: 'Compliance'},
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
                What is an "Other" Cooperative Society?
              </h2>
              <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                An "Other Cooperative Society" means any society formed under the Cooperative Societies Act at the state or national level, other than credit cooperatives. These societies are created to meet common needs of their members, such as housing, production, marketing, or social welfare.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Member-Focused",
                  description: "Created to meet common needs of members through collective action and shared resources.",
                  icon: <Users className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Legal Recognition",
                  description: "Registered under the Cooperative Societies Act at state or national level with legal standing.",
                  icon: <Shield className="w-8 h-8" />,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Democratic Structure",
                  description: "Operates on democratic principles with equal voting rights for members regardless of shareholding.",
                  icon: <FileText className="w-8 h-8" />,
                  color: "from-indigo-500 to-indigo-600"
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 bg-gradient-to-r ${card.color} group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Types Section */}
          <div id="types" ref={sectionRefs.types} className="mb-20 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Types of Cooperative Societies We Help Register
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We assist with registration of various types of cooperative societies based on your specific needs and objectives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Housing Cooperative Society",
                  description: "Formed by a group of individuals to acquire, develop, and manage residential property collectively. Members pool resources to buy land, build homes, and maintain shared amenities.",
                  icon: <Home className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  title: "Agricultural/Farming Cooperative Society",
                  description: "Designed to help farmers improve production, procure seeds, fertilizers, and sell their produce at better prices. It also supports shared equipment and storage facilities.",
                  icon: "🌾",
                  color: "from-green-500 to-green-600"
                },
                {
                  title: "Consumer Cooperative Society",
                  description: "Formed to supply goods and services to members at fair prices, reducing the role of middlemen and ensuring availability of quality products.",
                  icon: <ShoppingCart className="w-8 h-8" />,
                  color: "from-orange-500 to-orange-600"
                },
                {
                  title: "Producer Cooperative Society",
                  description: "Helps small producers or artisans pool resources, improve product quality, and market their goods more effectively.",
                  icon: <Factory className="w-8 h-8" />,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  title: "Marketing Cooperative Society",
                  description: "Enables farmers or small businesses to collectively market their products, negotiate better prices, and reduce costs of distribution.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  title: "Cooperative Education/Welfare Society",
                  description: "Set up for educational, health, or social welfare activities at community level.",
                  icon: <GraduationCap className="w-8 h-8" />,
                  color: "from-pink-500 to-pink-600"
                }
              ].map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={openAppointmentForm}
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 bg-gradient-to-r ${type.color} group-hover:scale-110 transition-transform`}>
                      {type.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                If you are unsure which type suits your needs, our team will help you choose the right category.
              </p>
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
                Benefits of Registering a Cooperative Society
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Cooperative societies offer numerous advantages for collective operations and community development.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              {[
                { title: "Legal recognition for collective operations", icon: <Shield className="w-8 h-8 text-white mb-2" /> },
                { title: "Ability to enter into contracts and own property", icon: <FileText className="w-8 h-8 text-white mb-2" /> },
                { title: "Democratic structure with equal voting rights", icon: <Users className="w-8 h-8 text-white mb-2" /> },
                { title: "Access to government schemes and subsidies", icon: <TrendingUp className="w-8 h-8 text-white mb-2" /> },
                { title: "Potential tax benefits under certain conditions", icon: "💰" },
                { title: "Builds trust among members and stakeholders", icon: "🤝" }
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

          {/* Registration Process */}
     <div id="process" ref={sectionRefs.process} className="mb-20 scroll-mt-20">
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Process</h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Registering a cooperative society involves compliance with the respective
      State Cooperative Societies Act or the Multi-State Cooperative Societies Act,
      depending on the area of operation.
    </p>
  </div>

  {/* Steps in Horizontal Flow */}
  <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
    {[
      {
        step: "01",
        title: "Selecting Society Type",
        description:
          "Choosing the right type of cooperative society based on your objectives and membership.",
        icon: "📋",
        color: "bg-blue-500",
      },
      {
        step: "02",
        title: "Drafting Bylaws",
        description:
          "Drafting bylaws and objectives of the society as per cooperative principles.",
        icon: "📝",
        color: "bg-purple-500",
      },
      {
        step: "03",
        title: "Application Preparation",
        description:
          "Preparing and filing application with the Registrar of Cooperative Societies.",
        icon: "📤",
        color: "bg-green-500",
      },
      {
        step: "04",
        title: "Approval & Registration",
        description:
          "Obtaining approvals and registration certificates from the authorities.",
        icon: "✅",
        color: "bg-yellow-500",
      },
      {
        step: "05",
        title: "Post-Registration Setup",
        description:
          "Guiding post-registration compliance and operational setup.",
        icon: "🏢",
        color: "bg-red-500",
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
</div>


          {/* Documents Section */}
          <div id="documents" ref={sectionRefs.documents} className="mb-20 scroll-mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Documents Required
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common documents for registering other cooperative societies include:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: "Application Documents",
                  items: [
                    "Application form signed by promoter members",
                    "Draft bylaws of the society",
                    "List of members with identity and address proof"
                  ],
                  icon: <FileText className="w-8 h-8" />,
                  color: "from-blue-500 to-blue-600"
                },
                {
                  category: "Member Documents",
                  items: [
                    "Identity proof of all members (Aadhaar, PAN)",
                    "Address proof of all members",
                    "Passport-size photographs of members"
                  ],
                  icon: <Users className="w-8 h-8" />,
                  color: "from-purple-500 to-purple-600"
                },
                {
                  category: "Society Documents",
                  items: [
                    "Resolution for forming the society",
                    "Proof of registered office address",
                    "Affidavits and other statutory forms as required"
                  ],
                  icon: <Building className="w-8 h-8" />,
                  color: "from-indigo-500 to-indigo-600"
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
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 bg-gradient-to-r ${docCategory.color} group-hover:scale-110 transition-transform`}>
                        {docCategory.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {docCategory.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {docCategory.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
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
                    Document requirements may vary based on the state and type of cooperative society. 
                    Our experts will provide you with a complete, customized checklist based on your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}

<div id="categories" ref={sectionRefs.categories} className="mb-20 scroll-mt-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Categories Based on Membership
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Cooperative societies can be categorized based on their membership composition and focus areas.
    </p>
  </div>

  {/* Mobile Horizontal Scroll */}
  <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar px-4">
    {[
      {
        title: "Women's Cooperative Society",
        description: "Exclusively for women members to promote women empowerment and entrepreneurship.",
        icon: User
      },
      {
        title: "Reserved Category Cooperative Society",
        description: "For SC/ST members or groups to promote inclusion and provide targeted support.",
        icon: Users
      },
      {
        title: "General Cooperative Society",
        description: "Open to all eligible members without specific restrictions on membership.",
        icon: Briefcase
      }
    ].map((category, index) => {
      const IconComponent = category.icon;
      return (
        <div
          key={index}
          className="min-w-[70%] snap-center bg-sky-100 rounded-2xl p-6 border border-sky-200 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 flex flex-col"
        >
          <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center mb-4">
            <IconComponent className="w-6 h-6 text-sky-700" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {category.title}
          </h3>
          <p className="text-gray-700 text-sm">
            {category.description}
          </p>
        </div>
      );
    })}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Women's Cooperative Society",
        description: "Exclusively for women members to promote women empowerment and entrepreneurship.",
        icon: User
      },
      {
        title: "Reserved Category Cooperative Society",
        description: "For SC/ST members or groups to promote inclusion and provide targeted support.",
        icon: Users
      },
      {
        title: "General Cooperative Society",
        description: "Open to all eligible members without specific restrictions on membership.",
        icon: Briefcase
      }
    ].map((category, index) => {
      const IconComponent = category.icon;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-600 border border-blue-800 rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
              <IconComponent className="w-8 h-8 text-sky-700" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-700 text-sm">
              {category.description}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>

  <div className="mt-8 text-center">
    <p className="text-gray-600">
      We will help you identify the correct category to qualify for any government benefits and schemes.
    </p>
  </div>
</div>


          {/* Compliance Section */}
          <div id="compliance" ref={sectionRefs.compliance} className="mb-20 scroll-mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Post-Registration Compliance
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                After registration, cooperative societies must maintain certain compliances to operate smoothly and legally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ongoing Requirements",
                  points: [
                    "Maintain proper accounts and records",
                    "Hold annual general meetings and board meetings",
                    "File annual returns and reports with the Registrar",
                    "Follow cooperative principles and laws"
                  ],
                  icon: <FileText className="w-8 h-8" />
                },
                {
                  title: "Operational Compliance",
                  points: [
                    "Conduct elections as per bylaws",
                    "Maintain membership registers and minutes",
                    "Adhere to auditing requirements",
                    "Renew licenses and registrations as needed"
                  ],
                  icon: <Shield className="w-8 h-8" />
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-600 mr-4">{section.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-blue-100 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">ℹ️</div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Ongoing Compliance Support</h4>
                  <p className="text-blue-700 text-sm">
                    We provide ongoing compliance support to ensure your cooperative society operates smoothly and remains in good standing with regulatory authorities.
                  </p>
                </div>
              </div>
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
         <br/>

          {/* CTA Section */}
         <div className="bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl p-6 sm:p-8 md:p-10 text-center text-white shadow-2xl relative overflow-hidden max-w-full sm:max-w-xl mx-auto">
  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-teal-400/20"></div>
  <div className="relative z-10">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
      Why Choose Sahakar Samruddhi
    </h2>
    <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto text-sky-100">
      We specialize in cooperative society registrations of all types. From selecting the right structure to filing your application, we provide end-to-end support so you can save time, reduce errors, and focus on your mission.
    </p>
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <button 
        onClick={openAppointmentForm}
        className="bg-white text-sky-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
      >
        Get Started Today
      </button>
      <button 
        onClick={openAppointmentForm}
        className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300 text-sm sm:text-base"
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
        title="Book an Appointment for Cooperative Society Registration"
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

export default OtherCooperativeRegistration;