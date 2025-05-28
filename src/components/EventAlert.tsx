import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';

interface EventAlertProps {
  onClose: () => void;
}

const EventAlert: React.FC<EventAlertProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black/50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`bg-white max-w-lg rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-300 ${
          isVisible ? 'scale-100' : 'scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary-500 text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Calendar className="h-6 w-6 mr-2" />
            <h3 className="text-xl font-semibold">Special Event</h3>
          </div>
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <h4 className="text-2xl font-bold text-secondary-500 mb-2">
            Free Ortho Consultation & Intra Oral Scan
          </h4>
          <p className="text-gray-600 mb-4">
            We're offering a complimentary orthodontic consultation along with an intra-oral scan to help you understand your dental needs better.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Calendar className="h-5 w-5 text-primary-500 mr-2" />
              <span className="font-medium">April 26</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="font-medium">10:00 AM - 4:00 PM</span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="#appointment" 
              className="btn-primary"
              onClick={handleClose}
            >
              Book Your Slot
            </a>
            <button 
              onClick={handleClose}
              className="btn-secondary"
            >
              Remind Me Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAlert;