import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import jrlogo from '../assets/logo/jrlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "Doctors" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
      isScrolled 
        ? 'py-4 top-0' 
        : 'py-6 top-0 md:top-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center">
            <img 
              src={jrlogo} 
              alt="JR Dental Clinic" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-14'
              }`}
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:text-[#ea7d1a] font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#appointments" 
              className="btn-primary transition-colors duration-200 font-medium"
            >
              Book Appointment
            </a>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200" 
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#appointments" 
                className="btn-primary transition-colors duration-200 font-medium" 
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;