import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const services = [
  {
    title: "Cooperative Registration",
    items: [
      "Credit Cooperative Society (State Level)",
      "Multi-State Credit Cooperative Society",
      "Microfinance Company under Section 8 ",
    ],
    image:
      "/sample img.png",
  },
  {
    title: "Audit and Compliance",
    items: [
      "Annual audit as per applicable laws",
      "Business licensing and regulatory Statutory, legal, and RBI/NABARD compliance",
      "Preparation and filing of mandatory returns and documents",
    ],
    image:
      "/audit compliance.jpg",
  },
  {
    title: "Banking Business Setup",
    items: [
      "Designing cooperative banking business models",
      "SOPs, loan and deposit product creation",
      "Core banking solutions and digital integration support",
    ],
    image:
      "/sample img.png",
  },
  {
    title: "Training and Capacity Building",
    items: [
      "Tailored training for board members and staff",
      "Regulatory awareness and governance best practices",
      "Operational training in day-to-day banking activities",
    ],
    image:
      "/sample img.png",
  },
  {
    title: "Business Growth and Expansion",
    items: [
      "Strategy development for scaling cooperative operations",
      "Multi-branch planning and execution",
      "Marketing, digital presence, and branding support",
    ],
    image:
      "/busines growth.jpg",
  },
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        checkScrollPosition();
      }, 300);
    }
  };

  const openAppointmentForm = (serviceTitle = "") => {
    setSelectedService(serviceTitle);
    setShowAppointmentForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener("resize", checkScrollPosition);
    return () => window.removeEventListener("resize", checkScrollPosition);
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="sub-style mb-4">
            <h5 className="sub-title px-3 inline-block text-lg font-semibold relative">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                Our Specialized Services
              </span>
            </h5>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Cooperative Solutions
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end services to establish, manage, and grow your cooperative financial institution with expert guidance and innovative solutions.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-100 transition-all duration-300 -ml-6 group border border-gray-200"
            >
              <ChevronLeft className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-100 transition-all duration-300 -mr-6 group border border-gray-200"
            >
              <ChevronRight className="w-5 h-5 text-blue-600 group-hover:text-blue-800" />
            </button>
          )}

          {/* Services Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-12 -mx-4 px-4 hide-scrollbar"
            onScroll={checkScrollPosition}
          >
            <div className="flex space-x-8 min-w-max">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-80 flex-shrink-0"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Card */}
                  <div
                    className={`service-item bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl 
                      ${hoveredService === index ? "h-[480px] bg-gray-50" : "h-[320px]"}`}
                  >
                    <div className="service-inner relative">
                      {/* Image Section */}
                      <div className="service-img overflow-hidden h-40 relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Title + Accordion Content */}
                      <div className="service-title p-5 relative">
                        {/* Title (Default) */}
                        <div
                          className={`transition-all duration-300 ${
                            hoveredService === index
                              ? "opacity-0 h-0 overflow-hidden"
                              : "opacity-100 h-auto"
                          }`}
                        >
                          <div className="bg-blue-100 text-center rounded-lg p-4 mx-4 -mt-8 relative z-10 shadow-md">
                            <h3 className="text-lg font-semibold text-blue-800">
                              {service.title}
                            </h3>
                          </div>
                          <div className="text-center mt-6">
                            <button 
                              onClick={() => openAppointmentForm(service.title)}
                              className="bg-blue-100 text-blue-800 rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                            >
                              Explore More
                            </button>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <div
                          className={`service-content transition-all duration-500 ${
                            hoveredService === index
                              ? "opacity-100 translate-y-0 h-auto"
                              : "opacity-0 -translate-y-4 pointer-events-none h-0 overflow-hidden"
                          }`}
                        >
                          <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                              {service.title}
                            </h3>
                            <ul className="space-y-3 mb-6">
                              {service.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                  <span className="text-sm text-gray-700">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <button 
                              onClick={() => openAppointmentForm(service.title)}
                              className="bg-blue-600 text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 mt-4"
                            >
                              Get Started
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => openAppointmentForm()}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Services
          </button>
        </div>
      </div>

      {/* Appointment Form Modal */}
      {showAppointmentForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-800">Book an Appointment</h3>
              <button 
                onClick={closeAppointmentForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedService && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Selected Service
                    </label>
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-800">
                      {selectedService}
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 flex justify-center mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
                  >
                    Submit Appointment Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};