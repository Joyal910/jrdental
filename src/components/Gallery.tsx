import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3779712/pexels-photo-3779712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Modern dental clinic reception"
    },
    {
      src: "https://images.pexels.com/photos/4687284/pexels-photo-4687284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Dental treatment room"
    },
    {
      src: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Advanced dental equipment"
    },
    {
      src: "https://images.pexels.com/photos/3881445/pexels-photo-3881445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Dentist examining patient"
    },
    {
      src: "https://images.pexels.com/photos/3845743/pexels-photo-3845743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Dental x-ray examination"
    },
    {
      src: "https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Patient consultation"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Our Clinic Gallery</h2>
        <p className="section-subtitle">
          Take a virtual tour of our state-of-the-art facility and friendly environment
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            Watch Our Virtual Tour
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300" 
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery image" 
            className="max-w-full max-h-[90vh] object-contain" 
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;