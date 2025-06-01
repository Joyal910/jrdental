import React, { useState } from 'react';
import { MessageSquare, Clock, Facebook, Instagram, ChevronDown, ChevronUp } from 'lucide-react';

const UtilityStrip = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-primary-900 text-white">


      {/* Desktop View */}
      <div className="hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <div className="text-sm">
                  <span className="mr-4">Mon to Fri - 09:00 am to 8:00 pm</span>
                  <span>Sat - 10:00 am to 4:00 pm</span>
                </div>
              </div>
              
              <a 
                href="https://wa.me/919847450050" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors text-sm"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" />
                <span>+91 98474 50050</span>
              </a>
              
              <div className="flex items-center space-x-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-200 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.instagram.com/j_r_dental_clinic/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary-200 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityStrip;