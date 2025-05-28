import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/919446123456"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-all shadow-lg hover:scale-105"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="hidden md:inline">Chat</span>
      </a>
      
      <a
        href="tel:+914822700045"
        className="flex items-center gap-2 bg-secondary text-white px-4 py-3 rounded-full hover:bg-secondary-600 transition-all shadow-lg hover:scale-105"
      >
        <Phone className="h-6 w-6" />
        <span className="hidden md:inline">Call</span>
      </a>
    </div>
  );
};

export default FloatingCTA;