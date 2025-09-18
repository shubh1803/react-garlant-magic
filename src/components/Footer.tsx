import { Link } from 'react-router-dom';
import { Info, Briefcase, BookOpen, Trophy, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { icon: Info, title: "About Sahakar Samruddhi", href: "/about" },
    { icon: Briefcase, title: "Our Services", href: "/services" },
    { icon: BookOpen, title: "Blog & Insights", href: "/blog" },
    { icon: Trophy, title: "Client Success Stories", href: "/success-stories" },
    { icon: Phone, title: "Contact Us", href: "/contact" }
  ];

  const services = [
    "Credit Cooperative Societies",
    "Multi-State Credit Cooperative Societies", 
    "Microfinance Companies (Section 8)",
    "Banking & Finance Consultation",
    "Legal Compliance & Advisory",
    "Strategic Growth Planning"
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-700 relative overflow-hidden border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
               <span className="text-[#7B191B]">सहकार</span>{" "}
                <span className="text-[#3C3C3C]">समृद्धी</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded"></div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted consultancy partner for creating, managing, and expanding cooperative financial institutions across India.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">info@sahakarsamruddhi.in</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                <span className="text-sm">Office Address:
Ashoka Plaza, Beed Bypass Road,
Infront of Reliance Digital,
Chatrapati Sambhajinagar (Aurangabad), Maharashtra – 431010
</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-gray-600 hover:text-orange-600 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 mr-3 text-blue-600 group-hover:text-orange-600 transition-colors" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-gray-800">Our Specializations</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-gray-600">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-gray-800">Business Hours</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-3 text-blue-600" />
                <div className="text-sm">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-orange-100 p-6 rounded-xl border border-blue-200 shadow-sm">
              <h5 className="font-semibold mb-2 text-gray-800">Ready to Get Started?</h5>
              <p className="text-sm text-gray-600 mb-4">
                Schedule a free consultation with our experts today.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2024 Sahakar Samruddhi. All rights reserved. | Empowering Cooperatives Since 2020
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;