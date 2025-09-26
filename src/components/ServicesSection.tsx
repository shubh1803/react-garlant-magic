import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AppointmentForm } from "../components/AppointmentForm"; // Adjust path as needed

const services = [
  {
    title: "Cooperative Registration",
    items: [
      {
        name: "Credit Cooperative Society (State Level)",
        path: "/credit-cooperative-registration"
      },
      {
        name: "Multi-State Credit Cooperative Society",
        path: "/multi-state-cooperative-registration"
      },
      {
        name: "Microfinance Company under Section 8",
        path: "/microfinance-registration"
      },
      {
        name: "Other Cooperative Society Registration",
        path: "/other-cooperative-registration"
      }
    ],
    image: "/sample img.png",
  },
  {
    title: "Audit and Compliance",
    items: [
      {
        name: "Credit Cooperative Society Audit and Compliance",
        path: "/credit-cooperative-audit"
      },
      {
        name: "Multi State Credit Cooperative Society Audit and Compliance", 
        path: "/multi-state-audit"
      },
      {
        name: "Microfinance Company (Section 8) Audit and Compliance",
        path: "/microfinance-audit"
      },
      {
        name: "Other Cooperative Society Audit and Compliance",
        path: "/other-cooperative-audit"
      }
    ],
    image: "/audit compliance.jpg",
  },
  {
    title: "Business Consultancy",
    items: [
      {
        name: "Banking Business Consultancy",
        path: "/banking-consultancy"
      },
      {
        name: "Banking Business Setup",
        path: "/banking-business-setup"
      },
      {
        name: "Banking Business Growth",
        path: "/banking-business-growth"
      }
    ],
    image: "/busines consultation.jpg",
  },
  {
    title: "Training and Capacity Building",
    items: [
      "Tailored training for board members and staff",
      "Regulatory awareness and governance best practices",
      "Operational training in day-to-day banking activities",
    ],
    image: "/sample img.png",
  },
  {
    title: "Business Growth and Expansion",
    items: [
      "Strategy development for scaling cooperative operations",
      "Multi-branch planning and execution",
      "Marketing, digital presence, and branding support",
    ],
    image: "/busines growth.jpg",
  },
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();

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
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
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
                      ${hoveredService === index ? "h-[500px] bg-gray-50" : "h-[320px]"}`}
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
                          <div className="bg-blue-900 text-white  text-center rounded-lg p-4 mx-4 -mt-8 relative z-10 shadow-md">
                            <h3 className="text-lg font-semibold text-white-800">
                              {service.title}
                            </h3>
                          </div>
                          <div className="text-center mt-6">
                            <button 
  onClick={() => openAppointmentForm(service.title)}
  className="bg-blue-900 text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
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
                           <div className="flex flex-col h-full">
                            <h3 className="text-xl font-semibold text-blue-800 mb-4">
                              {service.title}
                            </h3>
                            <ul className="space-y-3 mb-6 flex-1">
                              {service.items.map((item, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                  {typeof item === 'object' && item.path ? (
                                    <button
                                      onClick={() => navigate(item.path)}
                                      className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors duration-200 text-left"
                                    >
                                      {item.name}
                                    </button>
                                  ) : (
                                    <span className="text-sm text-gray-700 text-left">
                                      {typeof item === 'string' ? item : item}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-auto">
                              <button 
                                onClick={() => openAppointmentForm(service.title)}
                                className="bg-blue-900 text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 w-full"
                              >
                                Get Started
                              </button>
                            </div>
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
  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-gradient transition-colors duration-300 shadow-md hover:shadow-lg"
>
  View All Services
</button>

        </div>
      </div>

      {/* Reusable Appointment Form */}
      <AppointmentForm
        isOpen={showAppointmentForm}
        onClose={closeAppointmentForm}
        selectedService={selectedService}
        title="Book an Appointment"
      />
    </section>
  );
};