import React from 'react';
import { MessageSquare, Clock, Facebook, Instagram } from 'lucide-react';

const UtilityStrip = () => {
  return (
    <div className="bg-primary-900 text-white py-2">
      <div className="section-container">
        <div className="flex justify-end items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <div className="text-sm">
                <span className="mr-4">Mon to fri - 09:00 am to 8:00 pm</span>
                <span>Sat - 10:00 am to 4:00 pm</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919446123456" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 hover:text-primary-200 transition-colors text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>+91 94461 23456</span>
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
                href="https://instagram.com" 
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
  );
};

export default UtilityStrip;