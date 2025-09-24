import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        {/* Brand Info */}
        <div>
         <h3 className="flex items-center text-xl md:text-2xl font-bold mb-3 md:mb-4">
  

  {/* Gradient Text with gap */}
  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
    सहकार&nbsp;समृद्धी
  </span>
</h3>

          <p className="text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            Empowering cooperative societies, financial institutions, and
            businesses across India with expert guidance and sustainable
            solutions.
          </p>
          <div className="flex space-x-3 md:space-x-4">
            <a href="https://www.facebook.com/etaxwala.official" className="hover:text-blue-500 transition-colors">
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.linkedin.com/company/etaxwala/" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.instagram.com/etaxwala.official/" className="hover:text-blue-500 transition-colors">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
            </li>
            <li>
              <Link to="/success-stories" className="hover:text-blue-500 transition-colors">Success Stories</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 text-white">Our Services</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
            <li>Credit Cooperative Societies</li>
            <li>Multi-State Credit Cooperatives</li>
            <li>Microfinance Companies (Section 8)</li>
            <li>Banking & Finance Consultation</li>
            <li>Legal Compliance & Advisory</li>
            <li>Strategic Growth Planning</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4 text-white">Get in Touch</h4>
          <ul className="space-y-2 md:space-y-4 text-xs md:text-sm">
            <li className="flex items-start">
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-500" />
              info@sahakarsamruddhi.in
            </li>
            <li className="flex items-start">
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-500" />
              +91-XXXXXXXXXX
            </li>
            <li className="flex items-start">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-blue-500" />
              Ashoka Plaza, Beed Bypass Road, Infront of Reliance Digital,
              Chhatrapati Sambhajinagar (Aurangabad), Maharashtra – 431010
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 md:mt-12 py-4 md:py-6 text-center text-xs md:text-sm">
        <p>
          © 2024 Sahakar Samruddhi. All rights reserved. | Designed with ❤️ in
          India
        </p>
        <div className="mt-2 md:mt-3 space-x-4 md:space-x-6 flex flex-wrap justify-center gap-2">
          <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
          <Link to="/disclaimer" className="hover:text-blue-500 transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
