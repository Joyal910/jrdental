import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "Orthodontics with Braces",
      description: "Correction of protruded and malaligned teeth using either metal braces or ceramic braces.",
      image: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg"
    },
    {
      title: "Orthodontics with Aligners",
      description: "Correction of mild to moderate malaligned teeth using nearly invisible and comfortable aligners.",
      image: "https://images.pexels.com/photos/3845743/pexels-photo-3845743.jpeg"
    },
    {
      title: "Single Sitting Root Canal",
      description: "Saves infected and fractured teeth while relieving pain through efficient single-visit root canal procedures.",
      image: "https://images.pexels.com/photos/3845754/pexels-photo-3845754.jpeg"
    },
    {
      title: "Dental Implants",
      description: "Replacement of missing teeth using advanced techniques such as dentures, bridges, or implants.",
      image: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg"
    },
    {
      title: "Dental Surgery",
      description: "Includes oral surgical procedures like tooth removal and treatment of impactions.",
      image: "https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg"
    },
    {
      title: "Pedodontics",
      description: "Specialized dental care for children in a cheerful and friendly environment.",
      image: "https://images.pexels.com/photos/3845719/pexels-photo-3845719.jpeg"
    },
    {
      title: "Veneers & Esthetic Fillings",
      description: "Cosmetic dental treatments for improving aesthetics and reshaping teeth.",
      image: "https://images.pexels.com/photos/3845731/pexels-photo-3845731.jpeg"
    },
    {
      title: "Periodontic Treatment",
      description: "Focused on maintaining oral hygiene and treating gum diseases.",
      image: "https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg"
    },
    {
      title: "Scaling",
      description: "Removes plaque and tartar to prevent gum disease and maintain oral hygiene.",
      image: "https://images.pexels.com/photos/3845747/pexels-photo-3845747.jpeg"
    },
    {
      title: "Restoration",
      description: "Repairs decayed or damaged teeth using fillings, inlays, or crowns.",
      image: "https://images.pexels.com/photos/3845751/pexels-photo-3845751.jpeg"
    },
    {
      title: "Removable Partial Denture",
      description: "Replaces multiple missing teeth with a removable appliance.",
      image: "https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg"
    },
    {
      title: "Complete Denture",
      description: "Full set of removable artificial teeth for edentulous patients.",
      image: "https://images.pexels.com/photos/3779706/pexels-photo-3779706.jpeg"
    },
    {
      title: "Extractions",
      description: "Removes damaged, decayed, or problematic teeth safely.",
      image: "https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg"
    },
    {
      title: "Laser Dentistry",
      description: "Minimally invasive dental procedures using laser technology.",
      image: "https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg"
    },
    {
      title: "Mouth Guards",
      description: "Custom-made guards to protect teeth during sports or against grinding.",
      image: "https://images.pexels.com/photos/3845761/pexels-photo-3845761.jpeg"
    },
    {
      title: "Teeth Reshaping",
      description: "Smooths out imperfections or irregularities in teeth structure.",
      image: "https://images.pexels.com/photos/3845763/pexels-photo-3845763.jpeg"
    },
    {
      title: "Veneers & Crowns",
      description: "Enhances appearance and protects damaged teeth with porcelain covers.",
      image: "https://images.pexels.com/photos/3845765/pexels-photo-3845765.jpeg"
    },
    {
      title: "Full Mouth Rehabilitation",
      description: "Restores full oral function and aesthetics with implant-based solutions.",
      image: "https://images.pexels.com/photos/3845767/pexels-photo-3845767.jpeg"
    },
    {
      title: "Flap Surgeries",
      description: "Advanced gum treatment for deep cleaning and periodontal health.",
      image: "https://images.pexels.com/photos/3845769/pexels-photo-3845769.jpeg"
    },
    {
      title: "Clear Aligner Therapy",
      description: "Nearly invisible aligners to straighten teeth without braces.",
      image: "https://images.pexels.com/photos/3845771/pexels-photo-3845771.jpeg"
    },
    {
      title: "Post & Core Buildups",
      description: "Provides support for a crown on a severely damaged tooth.",
      image: "https://images.pexels.com/photos/3845773/pexels-photo-3845773.jpeg"
    },
    {
      title: "Cervical Abrasion Filling",
      description: "Restores worn-out areas near the gum line.",
      image: "https://images.pexels.com/photos/3845775/pexels-photo-3845775.jpeg"
    },
    {
      title: "Re-root Canal Treatment",
      description: "Re-treats a tooth where a previous root canal has failed.",
      image: "https://images.pexels.com/photos/3845777/pexels-photo-3845777.jpeg"
    }
  ];

  const itemsPerSlide = isMobile ? 1 : 5;
  const maxSlide = services.length - itemsPerSlide;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        return nextSlide > maxSlide ? 0 : nextSlide;
      });
    }, isMobile ? 3000 : 4000); // Faster on mobile

    return () => clearInterval(interval);
  }, [isAutoScrolling, maxSlide, isMobile]);

  const nextSlide = () => {
    setIsAutoScrolling(false);
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      return nextSlide > maxSlide ? 0 : nextSlide;
    });
    setTimeout(() => setIsAutoScrolling(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoScrolling(false);
    setCurrentSlide((prev) => prev === 0 ? maxSlide : prev - 1);
    setTimeout(() => setIsAutoScrolling(true), 8000);
  };

  const goToSlide = (index) => {
    setIsAutoScrolling(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoScrolling(true), 8000);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoScrolling(false);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      prevSlide();
    } else {
      setTimeout(() => setIsAutoScrolling(true), 2000);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Calculate visible services
  const visibleServices = services.slice(currentSlide, currentSlide + itemsPerSlide);

  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gray-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Our<span className="font-semibold text-primary"> Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive dental care solutions using the latest technology and techniques
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={scrollContainerRef}
          >
            <div 
              className={`grid ${
                isMobile 
                  ? 'grid-cols-1 gap-6' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8'
              } transition-all duration-500 ease-out`}
            >
              {visibleServices.map((service, index) => (
                <div key={currentSlide + index} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                    <div className="relative h-48 md:h-56">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          {!isMobile && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 md:mt-12 gap-2 md:gap-3">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-gray-800 w-6 md:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe hint */}
          {isMobile && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Swipe left or right to see more services
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;