import { useState } from 'react';
import { Menu, X, Search, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          src="/logo_black.png"  // 👈 apne logo ka path
          alt="Etaxwala Logo"
          className="h-12 w-auto mr-3" // height fix, width auto for proper ratio
        />
      </div>

            {/* Desktop Navigation Links - Shifted to right */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
              <a href="/" className="text-dark hover:text-primary transition-colors font-medium">Home</a>
              <div className="relative group">
                <a href="/pages" className="text-dark hover:text-primary transition-colors font-medium">Pages</a>
              </div>
              <div className="relative group">
                <a href="/service" className="text-dark hover:text-primary transition-colors font-medium">Service</a>
              </div>
              <a href="/contact" className="text-dark hover:text-primary transition-colors font-medium">Contact</a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-dark hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Button variant="default" size="lg" className="ml-4">
                Get Started Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-dark hover:text-primary transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-dark hover:text-primary transition-colors font-medium py-2">Home</a>
                <a href="/pages" className="text-dark hover:text-primary transition-colors font-medium py-2">Pages</a>
                <a href="/service" className="text-dark hover:text-primary transition-colors font-medium py-2">Service</a>
                <a href="/contact" className="text-dark hover:text-primary transition-colors font-medium py-2">Contact</a>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="p-2 text-dark hover:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
                <Button variant="default" size="lg" className="mt-4">
                  Get Started Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;