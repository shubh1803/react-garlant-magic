import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Business Consultation & Planning",
    items: [
      "Strategic business planning and advisory services",
      "Market research and feasibility studies",
      "Business model optimization and restructuring",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Business Setup & Registration",
    items: [
      "Company incorporation and legal structuring",
      "Business licensing and regulatory compliance",
      "Trademark and intellectual property registration",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Team Building & Start-up Training",
    items: [
      "Recruitment and talent acquisition strategies",
      "Leadership development programs",
      "Startup training and skill development workshops",
    ],
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Business Funding",
    items: [
      "Investment pitching and investor connections",
      "Loan application assistance and financial modeling",
      "Grant writing and funding strategy development",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Business Software & Tools",
    items: [
      "ERP and CRM system implementation",
      "Custom software development solutions",
      "Digital transformation and automation services",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Audit Taxation & Compliance",
    items: [
      "Financial statement auditing services",
      "Tax planning and compliance management",
      "Regulatory reporting and documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Marketing & Branding",
    items: [
      "Brand strategy development and positioning",
      "Digital marketing campaigns and social media management",
      "Content creation and public relations services",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Business Growth & Expansion",
    items: [
      "Market expansion strategy development",
      "Franchise development and licensing",
      "Mergers and acquisitions advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Start up Support",
    items: [
      "Incubation and acceleration programs",
      "Mentorship and networking opportunities",
      "Early-stage funding and resource connections",
    ],
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
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
                            <button className="bg-blue-100 text-blue-800 rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-200 transition-colors duration-300">
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
                            <button className="bg-blue-600 text-white rounded-full py-2 px-6 text-sm font-medium hover:bg-blue-700 transition-colors duration-300 mt-4">
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
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            View All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        .service-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            height 0.5s ease, background-color 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-5px);
        }
        .service-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .sub-title:after {
          content: "";
          position: absolute;
          width: 60%;
          height: 2px;
          background: #3b82f6;
          bottom: -5px;
          left: 20%;
        }
      `}</style>
    </section>
  );
};
