import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AppointmentForm } from '@/components/AppointmentForm';
import { CheckCircle, Users, Building, FileText, Settings, UserCheck, BarChart, Briefcase, Phone, ArrowRight,ChevronDown } from 'lucide-react';

const BankingBusinessSetup = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const [activeTab, setActiveTab] = useState('overview');
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState('Banking Business Setup');
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sectionRefs = {
    overview: useRef(null),
    services: useRef(null),
    benefits: useRef(null),
    whyus: useRef(null),
    faq: useRef(null)
  };

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          const sectionTop = sectionRefs[key].current.offsetTop - 150;
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
    { question: "Who can start a banking or financial institution?", answer: "Any group or company that meets the minimum capital, membership, and regulatory criteria can start, with proper approvals." },
    { question: "What is the first step in setting up a banking business?", answer: "Begin with a feasibility study and business plan to understand your market, financial projections, and regulatory requirements." },
    { question: "Can Sahakar Samruddhi help with licensing and registration?", answer: "Yes. We guide you through entity registration, bylaw drafting, and obtaining approvals from authorities." },
    { question: "What infrastructure is needed?", answer: "A suitable office space, IT systems, accounting framework, and trained staff to run operations smoothly." },
    { question: "Do you offer post-setup support?", answer: "Absolutely. We offer ongoing compliance, audits, staff training, and advisory services after launch." },
    { question: "Can you customize your setup services for small societies or startups?", answer: "Yes. We tailor our services to match the scale, budget, and objectives of your organization." }
  ];

  const services = [
    { icon: <FileText className="w-10 h-10 text-white" />, title: "Business Feasibility and Planning", description: "We prepare detailed project reports, feasibility studies, and financial projections to assess the viability of your banking business.", color: "from-blue-500 to-indigo-500" },
    { icon: <Building className="w-10 h-10 text-white" />, title: "Entity Selection and Registration", description: "We guide you in choosing and registering the right entity for your goals, including Credit Cooperative Society, Multi-State Credit Cooperative Society, Microfinance Company (Section 8), and other cooperative or financial institutions.", color: "from-purple-500 to-pink-500" },
    { icon: <CheckCircle className="w-10 h-10 text-white" />, title: "Regulatory Approvals and Licensing", description: "We help you navigate the legal and compliance steps required by the Registrar of Cooperative Societies, MCA, and other authorities to obtain licenses or approvals.", color: "from-green-500 to-teal-500" },
    { icon: <FileText className="w-10 h-10 text-white" />, title: "Drafting Bylaws and Policies", description: "We assist in drafting clear bylaws, credit policies, and operational manuals tailored to your products and services.", color: "from-yellow-500 to-orange-500" },
    { icon: <Settings className="w-10 h-10 text-white" />, title: "Infrastructure and Technology Setup", description: "We support you in setting up branch offices, core banking or loan management software, digital payment platforms, and secure accounting systems.", color: "from-indigo-500 to-purple-500" },
    { icon: <Building className="w-10 h-10 text-white" />, title: "Branch Setup", description: "From identifying locations to designing workflows, we help you establish branch offices or service centers, ensuring they meet compliance, branding, and operational standards.", color: "from-pink-500 to-red-500" },
    { icon: <UserCheck className="w-10 h-10 text-white" />, title: "Staff Training and Capacity Building", description: "We conduct training programs for directors, managers, and frontline staff so your team understands compliance, customer service, loan policies, recovery processes, and use of technology.", color: "from-blue-500 to-cyan-500" },
    { icon: <Settings className="w-10 h-10 text-white" />, title: "Operational Setup", description: "We create standard operating procedures (SOPs) for every key function — member onboarding, deposits, loans, recovery, reporting, and governance — to ensure consistency and control.", color: "from-teal-500 to-green-500" },
    { icon: <Settings className="w-10 h-10 text-white" />, title: "Software Setup", description: "We assist in selecting and implementing core banking or loan management software, ensuring data security, scalability, and compliance with digital reporting standards.", color: "from-purple-500 to-indigo-500" },
    { icon: <BarChart className="w-10 h-10 text-white" />, title: "System and MIS Setup", description: "We develop Management Information Systems (MIS) tailored to your needs, providing accurate, real-time data on loans, deposits, and operations for better decision-making.", color: "from-pink-500 to-red-500" },
    { icon: <Users className="w-10 h-10 text-white" />, title: "Sales and Marketing Setup", description: "We help you plan marketing campaigns, member acquisition strategies, and brand communication, ensuring your institution reaches the right audience with a clear value proposition.", color: "from-orange-500 to-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-30 animate-bounce delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center bg-white/10 rounded-full px-5 py-2 mb-6 border border-white/20 backdrop-blur-sm mx-auto">
            <Briefcase className="w-4 h-4 mr-2 text-blue-400" /> Banking Business Setup
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Banking Business <span className="text-blue-300">Setup</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Starting a banking or financial institution requires more than just capital. It demands proper planning, regulatory approvals, infrastructure, and systems to serve customers responsibly and profitably.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto mb-10 border border-white/20 text-left">
            <h3 className="text-xl font-semibold mb-4">Why Proper Setup Matters</h3>
            <ul className="space-y-3 text-gray-100">
              {["Banking and financial services are highly regulated in India", "Correct setup saves time and avoids legal issues later", "Professional planning helps you attract investors and customers", "Strong systems create long-term sustainability and credibility"].map((item,index)=>(
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={openAppointmentForm} className="bg-white text-blue-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Get Consultation
            </button>
            <button onClick={() => scrollToSection('overview')} className="border-2 border-white/70 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <section className={`sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2 min-w-max mx-auto">
              {["overview","services","benefits","whyus","faq"].map((tab,id)=>(
                <button key={id} onClick={()=>scrollToSection(tab)} className={`px-5 py-3 rounded-lg font-medium text-sm transition-all ${activeTab===tab?'bg-blue-600 text-white shadow-md transform -translate-y-1':'text-gray-600 hover:bg-gray-100 hover:text-blue-600'}`}>
                  {tab==='overview'?'Overview':tab==='services'?'Our Services':tab==='benefits'?'Benefits':tab==='whyus'?'Why Choose Us':'FAQs'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Overview */}
          <div id="overview" ref={sectionRefs.overview} className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-12">Banking Business Setup Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["Banking and finance is a highly regulated sector in India","Correct planning and compliance reduce risk and speed up approvals","Expert guidance saves time and prevents costly mistakes","Professional support helps in creating sustainable, profitable operations"].map((item,index)=>(
                <div key={index} className="flex items-start p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div id="services" ref={sectionRefs.services} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Banking Business Setup Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service,index)=>(
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration:0.6, delay:index*0.1 }} viewport={{once:true}} className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg hover:scale-105 transition-all duration-300`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div id="benefits" ref={sectionRefs.benefits} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our Banking Business Setup Service</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["End-to-end guidance from planning to launch","Reduced risk of regulatory delays and penalties","Expert input on technology, compliance, and operations","Faster go-live with a sustainable model"].map((item,index)=>(
                <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div id="whyus" ref={sectionRefs.whyus} className="mb-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Sahakar Samruddhi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["Deep knowledge of cooperative, microfinance, and financial sector laws","Hands-on experience in setting up and scaling institutions","Customized solutions for small, medium, and large organizations","Transparent processes with a practical, action-oriented approach"].map((item,index)=>(
                <div key={index} className="flex items-start p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
         <div id="faq" ref={sectionRefs.faq} className="mb-20 scroll-mt-20 px-4 relative">
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
       

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Set Up Your Banking Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              With these services under one roof, Sahakar Samruddhi makes it easier to start and grow your financial institution.
            </p>
            <p className="text-lg mb-8">
              Contact us today to discuss your banking business setup needs and build a strong, compliant, and customer-focused operation.
            </p>
            <button onClick={openAppointmentForm} className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto gap-2">
              <Phone className="w-5 h-5"/> Get Started Today
            </button>
          </div>

        </div>
      </section>

      <Footer />

      <AppointmentForm isOpen={showAppointmentForm} onClose={closeAppointmentForm} selectedService={selectedService} title="Banking Business Setup" />
    </div>
  );
};

export default BankingBusinessSetup;
