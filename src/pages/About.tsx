import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Shield, Award, CheckCircle, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We offer honest, transparent, and reliable services",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    
    {
      icon: Award,
      title: "Excellence", 
      description: "We believe in delivering quality work with professionalism",
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We aim to build self-reliant institutions with long-term impact",
      color: "text-rose-600",
      bgColor: "bg-rose-100"
    },
    {
      icon: CheckCircle,
      title: "Compliance First",
      description: "We guide every client to stay within the legal framework",
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];
 

  
  // Auto slide effect for both desktop and mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) nextValue();
    }, 3000); // Change slide every 3 sec
    return () => clearInterval(interval);
  }, [currentValueIndex, isHovered]);

  const nextValue = () => {
    setCurrentValueIndex((prev) => (prev + 1) % values.length);
  };

  const prevValue = () => {
    setCurrentValueIndex((prev) =>
      prev === 0 ? values.length - 1 : prev - 1
    );
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Breadcrumb Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-600">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
                सहकार&nbsp;समृद्धी
              </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
Sahakar Samriddhi is a specialized consultancy platform dedicated to supporting the growth and success of cooperative financial institutions across India. With a focused approach on Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies (Section 8), we provide complete guidance from setup to compliance, operations, and expansion.              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-gray-700">Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-gray-700">Compliance Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-6 h-80 flex items-center justify-center">
<img 
  src="/sample img.png" 
  alt="Company Banner" 
  className="w-full h-full rounded-xl object-cover" 
/>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              With a focused approach on Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies, we provide complete guidance from setup to compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 text-center group cursor-pointer hover:-translate-y-2 transform transition">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are a team of experienced professionals with in-depth knowledge of cooperative laws and financial systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 text-center group cursor-pointer hover:-translate-y-2 transform transition">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">Focused Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our goal is to simplify complex processes and offer practical, compliant, and scalable solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 text-center group cursor-pointer hover:-translate-y-2 transform transition">
              <CardHeader className="flex flex-col items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">Trusted Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We work with individuals and institutions passionate about community development and financial inclusion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="bg-primary/10 rounded-2xl p-6 h-80 flex items-center justify-center">
               <img 
  src="/sample img.png" 
  alt="Company Banner" 
  className="w-full h-full rounded-xl object-cover" 
/>

              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
India’s cooperative movement holds the potential to bring real financial empowerment to rural and semi-urban populations. At Sahakar Samriddhi, we believe that with the right structure, support, and strategy, cooperative institutions can create a lasting impact.              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work with individuals, groups, and institutions who are passionate about community development, financial inclusion, and ethical banking practices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Financial Empowerment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Community Development</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ethical Banking</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Sustainable Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Enhanced */}
     <div className="mb-20 scroll-mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
    What We Do
  </h2>
  <p className="text-lg text-gray-600 mb-12 text-center">
    We provide comprehensive services to help cooperative institutions thrive in today's competitive financial landscape.
  </p>

  {/* Container center aligned */}
  <div className="flex flex-wrap justify-center -mx-2">
    {[
      { title: "Registration Assistance", description: "Help you start and register your cooperative institution" },
      { title: "Compliance Management", description: "Ensure complete compliance with all legal and financial norms" },
      { title: "Training Programs", description: "Provide custom training and leadership development" },
      { title: "Business Modeling", description: "Design scalable business models for cooperative banking" },
      { title: "Technology Solutions", description: "Assist in technology adoption and digital infrastructure setup" },
      { title: "Growth Strategies", description: "Offer strategies for sustainable growth" },
    ].map((service, index) => {
      const gradients = [
        "from-[#93C5FD] via-[#E0AAFF] to-[#FBCFE8]",
        "from-[#3B82F6] via-[#8B5CF6] to-[#EC4899]",
        "from-[#1D4ED8] via-[#6D28D9] to-[#DB2777]",
        "from-[#93C5FD] via-[#E0AAFF] to-[#FBCFE8]",
        "from-[#2563EB] via-[#7C3AED] to-[#EC4899]",
        "from-[#60A5FA] via-[#9333EA] to-[#F472B6]",
      ];

      const gradient = gradients[index % gradients.length];

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="px-2 mb-4"
        >
          <div
            className={`p-4 sm:p-5 md:p-6 rounded-2xl bg-gradient-to-br ${gradient} border text-black
                        hover:shadow-xl transition-all duration-300 hover:scale-105
                        flex flex-col items-center justify-center text-center
                        max-w-xs w-full`}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-black text-sm md:text-base">{service.description}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>




      

      {/* Our Values Section with Continuous Auto-Scrolling */}
      <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Values
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our core values guide everything we do and define how we work with our clients.
          </p>
        </div>

        {/* Desktop/Laptop Slider */}
        <div
          className="hidden md:block relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden relative">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentValueIndex * (100 / 4)}%)`,
              }}
            >
              {values.concat(values.slice(0, 4)).map((value, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-4">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md rounded-xl text-center cursor-pointer hover:-translate-y-2 transform h-full">
                    <CardHeader>
                      <div
                        className={`w-14 h-14 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg group-hover:scale-110 transition-transform`}
                      >
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls for Desktop */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevValue}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-7 h-7 text-gray-700" />
            </button>
            <div className="flex space-x-3 items-center">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentValueIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentValueIndex === index ? "bg-primary" : "bg-gray-300"
                  } transition-colors`}
                />
              ))}
            </div>
            <button
              onClick={nextValue}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-7 h-7 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentValueIndex * 100}%)` }}
            >
              {values.concat(values.slice(0, 1)).map((value, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-md rounded-xl text-center">
                    <CardHeader>
                      <div
                        className={`w-14 h-14 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg`}
                      >
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls for Mobile */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevValue}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex space-x-2 items-center">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentValueIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentValueIndex === index ? "bg-primary" : "bg-gray-300"
                  } transition-colors`}
                />
              ))}
            </div>
            <button
              onClick={nextValue}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* Vision & Mission Section */}
     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

    {/* Vision Card */}
    <div className="relative group bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition hover:-translate-y-3 hover:shadow-3xl">
      
      {/* Animated Floating Dots */}
      <span className="absolute top-4 left-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce-slow opacity-50"></span>
      <span className="absolute bottom-6 right-10 w-4 h-4 bg-blue-300 rounded-full animate-bounce-slow opacity-40"></span>

      {/* Floating Icon */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        <Target className="w-12 h-12 text-white" />
      </div>

      {/* Card Content */}
      <div className="pt-16 px-6 pb-8 text-center relative z-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          To be India's most trusted consultancy partner for cooperative institutions by delivering innovative, ethical, and result-oriented solutions that strengthen financial inclusion and cooperative growth.
        </p>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
    </div>

    {/* Mission Card */}
    <div className="relative group bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition hover:-translate-y-3 hover:shadow-3xl">
      
      {/* Animated Floating Dots */}
      <span className="absolute top-6 right-8 w-3 h-3 bg-pink-400 rounded-full animate-bounce-slow opacity-50"></span>
      <span className="absolute bottom-10 left-12 w-4 h-4 bg-pink-300 rounded-full animate-bounce-slow opacity-40"></span>

      {/* Floating Icon */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-500 to-pink-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        <Heart className="w-12 h-12 text-white" />
      </div>

      {/* Card Content */}
      <div className="pt-16 px-6 pb-8 text-center relative z-10">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          To empower credit cooperatives and microfinance entities by simplifying complex processes, ensuring full compliance, and providing practical support to help them succeed and grow sustainably.
        </p>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
    </div>

  </div>
</section>


      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Connect With Us</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-lg text-gray-500">
        If you are planning to start a cooperative or looking to scale your institution, we are here to guide you.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Phone Card */}
      <Card className="border-0 shadow-2xl rounded-3xl text-center p-8 hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-3">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:from-blue-500 group-hover:to-blue-700 transition-all">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          Phone
        </CardTitle>
        <CardContent className="p-0">
          <p className="text-gray-500">+91-XXXXXXXXXX</p>
        </CardContent>
      </Card>

      {/* Email Card */}
      <Card className="border-0 shadow-2xl rounded-3xl text-center p-8 hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-3">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:from-green-500 group-hover:to-green-700 transition-all">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
          Email
        </CardTitle>
        <CardContent className="p-0">
          <p className="text-gray-500">info@sahakarSamriddhi.in</p>
        </CardContent>
      </Card>

      {/* Address Card */}
      <Card className="border-0 shadow-2xl rounded-3xl text-center p-8 hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-3">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:from-purple-500 group-hover:to-purple-700 transition-all">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
          Address
        </CardTitle>
        <CardContent className="p-0 text-gray-500">
          Ashoka Plaza, Beed Bypass Road,<br />
          Infront of Reliance Digital,<br />
          Chatrapati Sambhajinagar (Aurangabad),<br />
          Maharashtra – 431010
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default About;