import { useState } from 'react';
import { Menu, X, Search, ShoppingCart, MapPin, Mail, Phone } from 'lucide-react';
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
                <span>(684) 555-0102</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>manhthachkt08@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>8080 Railroad St.</span>
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
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-bold text-dark">Garlant</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-dark hover:text-primary transition-colors font-medium">Home</a>
              <div className="relative group">
                <a href="/pages" className="text-dark hover:text-primary transition-colors font-medium">Pages</a>
              </div>
              <div className="relative group">
                <a href="/service" className="text-dark hover:text-primary transition-colors font-medium">Service</a>
              </div>
              <a href="/news" className="text-dark hover:text-primary transition-colors font-medium">News</a>
              <a href="/shop" className="text-dark hover:text-primary transition-colors font-medium">Shop</a>
              <a href="/contact" className="text-dark hover:text-primary transition-colors font-medium">Contact</a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-dark hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-dark hover:text-primary transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white rounded-full text-xs flex items-center justify-center">2</span>
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
                <a href="/news" className="text-dark hover:text-primary transition-colors font-medium py-2">News</a>
                <a href="/shop" className="text-dark hover:text-primary transition-colors font-medium py-2">Shop</a>
                <a href="/contact" className="text-dark hover:text-primary transition-colors font-medium py-2">Contact</a>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="p-2 text-dark hover:text-primary transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-dark hover:text-primary transition-colors relative">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white rounded-full text-xs flex items-center justify-center">2</span>
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