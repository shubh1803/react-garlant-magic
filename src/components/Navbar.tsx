import { useState } from 'react';
import { Menu, X, Search, MapPin, Mail, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top Header */}
      <div className="bg-dark text-white py-2 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Follow Us On:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors cursor-pointer">
                  <span className="text-xs">yt</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+91) 7071340707</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support.etaxwala@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>etaxwala office</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/ss.png"
                alt="Etaxwala Logo"
                className="h-12 w-auto mr-3"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
              <a href="/" className="text-dark hover:text-primary font-medium">Home</a>

              {/* Registration */}
              <div className="relative group">
                <a href="#" className="text-dark hover:text-primary font-medium flex items-center">
                  Registration <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-1">
                    <a href="/credit-cooperative-registration" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Credit Cooperative Society Registration</a>
                    <a href="/multi-state-cooperative-registration" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Multi State Credit Cooperative Society Registration</a>
                    <a href="/microfinance-registration" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Microfinance Company (Section 8) Registration</a>
                    <a href="/other-cooperative-registration" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Other Cooperative Society Registration</a>
                  </div>
                </div>
              </div>

              {/* Audit & Compliance */}
              <div className="relative group">
                <a href="#" className="text-dark hover:text-primary font-medium flex items-center">
                  Audit & Compliance <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-1">
                    <a href="/credit-cooperative-audit" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Credit Cooperative Society Audit</a>
                    <a href="/multi-state-audit" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Multi State Audit & Compliance</a>
                    <a href="/microfinance-audit" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Microfinance Audit & Compliance</a>
                    <a href="/other-cooperative-audit" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Other Cooperative Audit</a>
                  </div>
                </div>
              </div>

              {/* Business Consultancy */}
              <div className="relative group">
                <a href="#" className="text-dark hover:text-primary font-medium flex items-center">
                  Business Consultancy <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-1">
                    <a href="/banking-consultancy" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Banking Business Consultancy</a>
                    <a href="/banking-business-setup" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Banking Business Setup</a>
                    <a href="/banking-business-growth" className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded">Banking Business Growth</a>
                  </div>
                </div>
              </div>

              <a href="/about" className="text-dark hover:text-primary font-medium">About</a>
              <a href="/contact" className="text-dark hover:text-primary font-medium">Contact</a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-dark hover:text-primary">
                <Search className="w-5 h-5" />
              </button>
              <Button variant="default" size="lg" className="ml-4">Get Started Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="p-2 text-dark hover:text-primary">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
              <div className="flex flex-col space-y-2">
                <a href="/" className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded">Home</a>

                {/* Mobile Registration */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <button
                    onClick={() => toggleSubMenu('registration')}
                    className="w-full flex justify-between items-center text-dark font-medium py-2"
                  >
                    Registration <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openSubMenu === 'registration' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubMenu === 'registration' && (
                    <div className="mt-2 space-y-1 pl-4">
                      <a href="/credit-cooperative-registration" className="block py-1 hover:text-primary">Credit Cooperative Society Registration</a>
                      <a href="/multi-state-cooperative-registration" className="block py-1 hover:text-primary">Multi State Credit Cooperative Society Registration</a>
                      <a href="/microfinance-registration" className="block py-1 hover:text-primary">Microfinance Company (Section 8) Registration</a>
                      <a href="/other-cooperative-registration" className="block py-1 hover:text-primary">Other Cooperative Society Registration</a>
                    </div>
                  )}
                </div>

                {/* Mobile Audit & Compliance */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <button
                    onClick={() => toggleSubMenu('audit')}
                    className="w-full flex justify-between items-center text-dark font-medium py-2"
                  >
                    Audit & Compliance <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openSubMenu === 'audit' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubMenu === 'audit' && (
                    <div className="mt-2 space-y-1 pl-4">
                      <a href="/credit-cooperative-audit" className="block py-1 hover:text-primary">Credit Cooperative Society Audit</a>
                      <a href="/multi-state-audit" className="block py-1 hover:text-primary">Multi State Audit & Compliance</a>
                      <a href="/microfinance-audit" className="block py-1 hover:text-primary">Microfinance Audit & Compliance</a>
                      <a href="/other-cooperative-audit" className="block py-1 hover:text-primary">Other Cooperative Audit</a>
                    </div>
                  )}
                </div>

                {/* Mobile Business Consultancy */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <button
                    onClick={() => toggleSubMenu('consultancy')}
                    className="w-full flex justify-between items-center text-dark font-medium py-2"
                  >
                    Business Consultancy <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openSubMenu === 'consultancy' ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubMenu === 'consultancy' && (
                    <div className="mt-2 space-y-1 pl-4">
                      <a href="/banking-consultancy" className="block py-1 hover:text-primary">Banking Business Consultancy</a>
                      <a href="/banking-business-setup" className="block py-1 hover:text-primary">Banking Business Setup</a>
                      <a href="/banking-business-growth" className="block py-1 hover:text-primary">Banking Business Growth</a>
                    </div>
                  )}
                </div>

                <a href="/about" className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded">About</a>
                <a href="/contact" className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded">Contact</a>

                {/* Actions */}
                <div className="flex items-center space-x-4 px-4 pt-4">
                  <button className="p-2 text-dark hover:text-primary">
                    <Search className="w-5 h-5" />
                  </button>
                  <Button variant="default" size="lg">Get Started Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
