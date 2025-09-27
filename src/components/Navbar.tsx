import { useState, useEffect } from "react";
import { Menu, X, Search, MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

type SubMenuKey = "registration" | "audit" | "consultancy" | null;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openSubMenu, setOpenSubMenu] = useState<SubMenuKey>(null);

  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = (menu: SubMenuKey) =>
    setOpenSubMenu(openSubMenu === menu ? null : menu);

  // Close mobile menu & scroll to top when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubMenu(null);
  window.scrollTo(0, 0); // 🚀 Directly top, no smooth scroll
  }, [location.pathname]);

  const mobileMenus = [
    {
      title: "Registration",
      key: "registration" as SubMenuKey,
      links: [
        { path: "/credit-cooperative-registration", label: "Credit Cooperative Society Registration" },
        { path: "/multi-state-cooperative-registration", label: "Multi State Credit Cooperative Society Registration" },
        { path: "/microfinance-registration", label: "Microfinance Company (Section 8) Registration" },
        { path: "/other-cooperative-registration", label: "Other Cooperative Society Registration" },
      ],
    },
    {
      title: "Audit & Compliance",
      key: "audit" as SubMenuKey,
      links: [
        { path: "/credit-cooperative-audit", label: "Credit Cooperative Society Audit" },
        { path: "/multi-state-audit", label: "Multi State Audit & Compliance" },
        { path: "/microfinance-audit", label: "Microfinance Audit & Compliance" },
        { path: "/other-cooperative-audit", label: "Other Cooperative Audit" },
      ],
    },
    {
      title: "Business Consultancy",
      key: "consultancy" as SubMenuKey,
      links: [
        { path: "/banking-consultancy", label: "Banking Business Consultancy" },
        { path: "/banking-business-setup", label: "Banking Business Setup" },
        { path: "/banking-business-growth", label: "Banking Business Growth" },
      ],
    },
  ];

  return (
    <>
      {/* Top Header - Desktop only */}
      <div className="bg-dark text-white py-2 hidden lg:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Follow Us On:</span>
              <div className="flex space-x-2">
                {["f", "t", "in", "yt"].map((icon) => (
                  <div
                    key={icon}
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer 
                      bg-blue-600 text-white font-bold text-xs 
                      transition-all duration-300 hover:bg-primary-gradient hover:scale-110"
                  >
                    {icon}
                  </div>
                ))}
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

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-2 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/logo.png" alt="Etaxwala Logo" className="h-12 md:h-16 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
              <Link to="/" className="text-dark hover:text-primary font-medium">
                Home
              </Link>

              {mobileMenus.map((menu) => (
                <div key={menu.key} className="relative group">
                  <span className="text-dark hover:text-primary font-medium flex items-center cursor-pointer">
                    {menu.title} <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4 space-y-1">
                      {menu.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-3 py-2 text-sm hover:text-primary hover:bg-gray-50 rounded"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link to="/about" className="text-dark hover:text-primary font-medium">
                About
              </Link>
              <Link to="/contact" className="text-dark hover:text-primary font-medium">
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-primary hover:text-primary-hover">
                <Search className="w-5 h-5" />
              </button>
              <Button
                variant="default"
                size="lg"
                className="ml-4 bg-blue-600 text-white border-none transition-all duration-300 hover:bg-primary-gradient hover:scale-105"
              >
                Get Started Now
              </Button>
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
            <div className="lg:hidden border-t border-gray-200 py-2 bg-white">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded"
                >
                  Home
                </Link>

                {mobileMenus.map((menu) => (
                  <div key={menu.key} className="px-4 py-2 border-b border-gray-100">
                    <button
                      onClick={() => toggleSubMenu(menu.key)}
                      className="w-full flex justify-between items-center text-dark font-medium py-2"
                    >
                      {menu.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${openSubMenu === menu.key ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openSubMenu === menu.key && (
                      <div className="mt-2 space-y-1 pl-4">
                        {menu.links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="block py-1 hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link to="/about" className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded">
                  About
                </Link>
                <Link to="/contact" className="text-dark font-medium py-2 px-4 hover:bg-gray-100 rounded">
                  Contact
                </Link>

                <div className="flex items-center space-x-4 px-4 pt-4">
                  <button className="p-2 text-primary hover:text-primary-hover">
                    <Search className="w-5 h-5" />
                  </button>
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 text-white border-none hover:bg-primary-gradient hover:scale-105 transition-transform"
                  >
                    Get Started Now
                  </Button>
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
