import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  // Create extended array for seamless looping
  const extendedServices = [...services, ...services.slice(0, 5)];
  const visibleCount = isMobile ? 1 : 5;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, isMobile ? 3000 : 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(prev => {
      const nextIndex = prev + 1;
      // Reset to 0 when we reach the end of original services
      if (nextIndex >= services.length) {
        setTimeout(() => {
          setCurrentIndex(0);
          setIsTransitioning(false);
        }, 600); // Match transition duration
        return nextIndex;
      }
      setIsTransitioning(false);
      return nextIndex;
    });
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    
    setCurrentIndex(prev => {
      const prevIndex = prev - 1;
      if (prevIndex < 0) {
        // Jump to the end position
        setTimeout(() => {
          setCurrentIndex(services.length - 1);
          setIsTransitioning(false);
        }, 600);
        return services.length;
      }
      setIsTransitioning(false);
      return prevIndex;
    });
    
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    if (index === currentIndex || isTransitioning) return;
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsTransitioning(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsAutoPlaying(false);
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
      setTimeout(() => setIsAutoPlaying(true), 3000);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Calculate transform for smooth single-card movement
  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * (100 / 1)}%)`;
    } else {
      // For desktop: move by the width of one card
      const cardWidthPercent = 100 / extendedServices.length;
      return `translateX(-${currentIndex * cardWidthPercent}%)`;
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-primary-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 md:mb-12">
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
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${extendedServices.length * (100 / visibleCount)}%`,
                transform: getTransform()
              }}
            >
              {extendedServices.map((service, index) => (
                <div 
                  key={`${service.title}-${index}`}
                  className="group flex-shrink-0 px-3"
                  style={{
                    width: `${100 / extendedServices.length}%`
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-2 border border-white/50">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
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
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 z-10 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 z-10 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-primary transition-colors" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 md:mt-12 gap-2 md:gap-3">
            {services.slice(0, Math.ceil(services.length / visibleCount)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`h-2 md:h-3 rounded-full transition-all duration-500 ease-out ${
                  Math.floor(currentIndex / visibleCount) === index || 
                  (currentIndex % services.length === index && currentIndex < services.length)
                    ? 'bg-primary w-6 md:w-8 shadow-md' 
                    : 'bg-primary/30 w-2 md:w-3 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Status indicator */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {isMobile ? (
                <>Service {(currentIndex % services.length) + 1} of {services.length}</>
              ) : (
                <>Showing {Math.min(visibleCount, services.length - currentIndex)} of {services.length} services</>
              )}
            </span>
          </div>

          {/* Mobile swipe hint */}
          {isMobile && (
            <div className="text-center mt-2 text-sm text-gray-400">
              Swipe left or right to navigate
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;