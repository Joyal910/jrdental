import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import orthodontics from "../assets/services/orthodontic.png";
import crowns from "../assets/services/crowns.png";
import reshape from "../assets/services/reshape.png";
import rehabilation from "../assets/services/rehabilation.png"
import teethguard from "../assets/services/teethguard.png"
import flapsurgery from "../assets/services/Flapsurgery.png"
import postandcorebuildup from "../assets/services/postandcorebuildup.png"
import cervical_absraction from "../assets/services/cervical_absraction.png"
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
      title: "Scaling",
      description: "Professional cleaning to remove plaque and tartar buildup from teeth and gumline.",
      image: "https://www.shutterstock.com/image-illustration/dental-cleaning-removing-plaque-dirt-600nw-2002519178.jpg"
    },
    {
      title: "Restoration",
      description: "Repair of damaged teeth using fillings, inlays, or onlays to restore function and appearance.",
      image: "https://www.shutterstock.com/image-illustration/decayed-tooth-restoration-composite-filling-600nw-2283993553.jpg"
    },
    {
      title: "Orthodontic Treatment",
      description: "Correction of misaligned teeth and bite issues using braces or other alignment devices.",
      image: orthodontics
    },
    {
      title: "Root Canal Treatments",
      description: "Removal of infected or damaged tooth pulp to save the natural tooth.",
      image: "https://www.shutterstock.com/image-illustration/cross-section-human-tooth-endodontic-600nw-2354146317.jpg"
    },
    {
      title: "Crown & Bridges",
      description: "Protective caps for damaged teeth and replacement structures for missing teeth.",
      image: crowns
    },
    {
      title: "Removable Partial Denture",
      description: "Custom-made artificial teeth that can be taken out to replace some missing teeth.",
      image: "https://www.shutterstock.com/image-illustration/removable-partial-denture-mandibular-prosthesis-600nw-2283993627.jpg"
    },
    {
      title: "Complete Denture",
      description: "Full set of removable artificial teeth to replace all missing teeth in upper or lower jaw.",
      image: "https://img.freepik.com/free-photo/full-set-acrylic-denture-isolated-white-background_1232-4359.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Extractions",
      description: "Safe removal of damaged, infected, or problematic teeth.",
      image: "https://www.shutterstock.com/image-illustration/extraction-wisdom-tooth-medically-accurate-260nw-2344703955.jpg"
    },
    {
      title: "Teeth Whitening",
      description: "Professional bleaching treatment to brighten and remove stains from teeth.",
      image: "https://img.freepik.com/free-photo/woman-whitening-treatment_1232-185.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Dental Implants",
      description: "Permanent artificial tooth roots surgically placed to replace missing teeth.",
      image: "https://media.istockphoto.com/id/1439446550/photo/dental-implantation-teeth-with-implant-screw-3d-illustration.jpg?s=612x612&w=0&k=20&c=sNWmmqn9s0Oc478Ityg837qQdHrEEgXq-baxKHSZCYM="
    },
    {
      title: "Laser Dentistry",
      description: "Advanced treatment using laser technology for precise, minimally invasive procedures.",
      image: "https://img.freepik.com/free-photo/closeup-young-woman-having-her-teeth-whitened-with-ultraviolet-light-dental-clinic_662251-2598.jpg?t=st=1750757643~exp=1750761243~hmac=e0d7a6ba65f01a0347669dd54544fe426993a54648c5a15a9e3132e2e8237de5&w=2000"
    },
    {
      title: "Youth Guards",
      description: "Custom protective mouthpieces for children participating in sports activities.",
      image: teethguard
    },
    {
      title: "Teeth Re-shaping",
      description: "Cosmetic contouring to improve the shape and appearance of teeth.",
      image: reshape
    },
    {
      title: "Veneers & Crowns",
      description: "Thin shells or caps placed over teeth to improve appearance and strength.",
      image: "https://images.pexels.com/photos/6627564/pexels-photo-6627564.jpeg?_gl=1*mzi3qs*_ga*OTE2NDcyMTY4LjE3MzYzMjIzOTU.*_ga_8JE65Q40S6*czE3NTA3NTc5NjAkbzQkZzEkdDE3NTA3NTc5NjIkajU4JGwwJGgw"
    },
    {
      title: "Full Mouth Re-habilitation with Implants",
      description: "Comprehensive restoration of all teeth using implant-supported prosthetics.",
      image: rehabilation
    },
    {
      title: "Flap Surgeries",
      description: "Periodontal procedure to treat advanced gum disease by accessing tooth roots.",
      image: flapsurgery
    },
    {
      title: "Clear Aligner Therapy",
      description: "Invisible orthodontic treatment using transparent, removable aligners.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Post & Core Buildups",
      description: "Foundation treatment to rebuild severely damaged teeth before crown placement.",
      image: postandcorebuildup
    },
    {
      title: "Cervical Abrasion Filling",
      description: "Treatment for worn areas at the tooth's neck near the gumline.",
      image: cervical_absraction
    },
    {
      title: "Re-root Canal Treatment",
      description: "Secondary root canal procedure when initial treatment needs revision.",
      image: "https://img.freepik.com/premium-photo/3d-illustration-root-canal-treatment-process_613961-299.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Digital Dentistry",
      description: "Modern computer-assisted diagnosis and treatment planning for precision care.",
      image: "https://img.freepik.com/free-photo/close-up-dentist-instruments_23-2151042898.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Habit Breakers",
      description: "Appliances designed to help patients stop harmful oral habits like thumb sucking.",
      image: "https://img.freepik.com/free-photo/young-adult-dealing-with-imposter-syndrome_23-2149719298.jpg?semt=ais_hybrid&w=740"
    },
    {
      title: "Cosmetic Procedures",
      description: "Aesthetic treatments to enhance the appearance of teeth and smile.",
      image: "https://img.freepik.com/free-photo/patient-dentist_624325-1625.jpg?semt=ais_hybrid&w=740"
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
      // Mobile: each card is 100% of viewport, move by full card width
      return `translateX(-${currentIndex * (100 / extendedServices.length)}%)`;
    } else {
      // Desktop: move by one card width while maintaining 5 cards visible
      const cardWidthPercent = 100 / extendedServices.length;
      return `translateX(-${currentIndex * cardWidthPercent}%)`;
    }
  };

  // Get container width
  const getContainerWidth = () => {
    if (isMobile) {
      // Mobile: each card is 100% wide, so total width is services count * 100%
      return `${extendedServices.length * 100}%`;
    } else {
      // Desktop: total container width to fit all cards at 20% each
      return `${(extendedServices.length * 100) / 5}%`;
    }
  };

  // Get individual card width
  const getCardWidth = () => {
    if (isMobile) {
      // Mobile: each card should be 100% of the viewport
      return `${100 / extendedServices.length}%`;
    } else {
      // Desktop: each card should be 1/5th of the visible area (20% of viewport)
      return `${100 / extendedServices.length}%`;
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
                width: getContainerWidth(),
                transform: getTransform()
              }}
            >
              {extendedServices.map((service, index) => (
                <div 
                  key={`${service.title}-${index}`}
                  className="group flex-shrink-0"
                  style={{
                    width: getCardWidth(),
                    paddingLeft: '12px',
                    paddingRight: '12px'
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