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
      title: "Scaling",
      description: "Professional cleaning to remove plaque and tartar buildup from teeth and gumline.",
      image: "https://www.diagnopein.com/img/BlogImages/Scaling%20of%20Teeth.jpg"
    },
    {
      title: "Restoration",
      description: "Repair of damaged teeth using fillings, inlays, or onlays to restore function and appearance.",
      image: "https://www.symmetrydentist.com/wp-content/uploads/2023/10/why-porcelain-inlays-and-onlays-are-the-perfect-solution-for-restoring-damaged-teeth.jpg"
    },
    {
      title: "Orthodontic Treatment",
      description: "Correction of misaligned teeth and bite issues using braces or other alignment devices.",
      image: "https://www.thedentalroots.com/TheDentalRootslmages/BlogImage/4-dental-health-problems-that-can-be-fixed-by-orthodontic-treatment-L.jpg"
    },
    {
      title: "Root Canal Treatments",
      description: "Removal of infected or damaged tooth pulp to save the natural tooth.",
      image: "https://www.arcadedentaltx.com/wp-content/uploads/2023/09/roort-canal-infection-pharr-1.jpg"
    },
    {
      title: "Crown & Bridges",
      description: "Protective caps for damaged teeth and replacement structures for missing teeth.",
      image: "https://harshahospital.com/wp-content/uploads/2022/06/tooth-bridge.jpg"
    },
    {
      title: "Removable Partial Denture",
      description: "Custom-made artificial teeth that can be taken out to replace some missing teeth.",
      image: "https://www.myperfectsmiledds.com/wp-content/uploads/2019/03/Flexible-Nylon-Denture-On-Fema-236582023.jpg"
    },
    {
      title: "Complete Denture",
      description: "Full set of removable artificial teeth to replace all missing teeth in upper or lower jaw.",
      image: "https://clovedental.in/wp-content/uploads/2023/12/image5.png"
    },
    {
      title: "Extractions",
      description: "Safe removal of damaged, infected, or problematic teeth.",
      image: "https://www.bridgepointedentistry.com/wp-content/uploads/2024/05/Is-Extraction-the-Solution-for-a-Tooth-Infection.png"
    },
    {
      title: "Teeth Whitening",
      description: "Professional bleaching treatment to brighten and remove stains from teeth.",
      image: "https://www.drbhutanidentalclinic.com/wp-content/uploads/2021/12/TEETH-WHITENING-AND-BLEACHING-1.jpg"
    },
    {
      title: "Dental Implants",
      description: "Permanent artificial tooth roots surgically placed to replace missing teeth.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpgVit7rllols3J8Tm4_-8PYt-G7d8SS17Q&s"
    },
    {
      title: "Laser Dentistry",
      description: "Advanced treatment using laser technology for precise, minimally invasive procedures.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnz-B0aRAmzb7aekM0a0h28NJWLnLmpL0CQ&s"
    },
    {
      title: "Youth Guards",
      description: "Custom protective mouthpieces for children participating in sports activities.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5d2wkH8eDDnP1OaMxbBjptiHlfbV72HwPTlFTAl16pecmUa_aDprLr3n42tWotD7Ptc&usqp=CAU"
    },
    {
      title: "Teeth Re-shaping",
      description: "Cosmetic contouring to improve the shape and appearance of teeth.",
      image: "https://lirp.cdn-website.com/17fecfbf/dms3rep/multi/opt/unnamed+%283%29-640w.jpg"
    },
    {
      title: "Veneers & Crowns",
      description: "Thin shells or caps placed over teeth to improve appearance and strength.",
      image: "https://www.murrayschollsfamilydental.com/wp-content/uploads/2024/09/dental-crowns-front-teeth.jpg"
    },
    {
      title: "Full Mouth Re-habilitation with Implants",
      description: "Comprehensive restoration of all teeth using implant-supported prosthetics.",
      image: "https://www.stunningdentistry.com/images/resource/all-on-6-prosthesis.jpg"
    },
    {
      title: "Flap Surgeries",
      description: "Periodontal procedure to treat advanced gum disease by accessing tooth roots.",
      image: "https://www.coastalperio.net/resourcefiles/dear-doctor/periodontal-gum-disease.jpg"
    },
    {
      title: "Clear Aligner Therapy",
      description: "Invisible orthodontic treatment using transparent, removable aligners.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGfSd0xHg-VAveX2APUhpbs02nMPOAZud1A&s"
    },
    {
      title: "Post & Core Buildups",
      description: "Foundation treatment to rebuild severely damaged teeth before crown placement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVg9bjidkusSZhCKSWHiilFPm2JRQMRj6OA&s"
    },
    {
      title: "Cervical Abrasion Filling",
      description: "Treatment for worn areas at the tooth's neck near the gumline.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPA5T1-RUVe-IrT9MauoKx-MVUB6x7MGzUw&s"
    },
    {
      title: "Re-root Canal Treatment",
      description: "Secondary root canal procedure when initial treatment needs revision.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7denqPC3KqhEAMbT_IxdEX0T4Fm6C6SkFA&s"
    },
    {
      title: "Digital Dentistry",
      description: "Modern computer-assisted diagnosis and treatment planning for precision care.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4BbPlJ1qvindpOx2eCR_hAZF6SBq7TgelKbguMR1sTfGVFowqHWP1MIhCAv1f7kAnV4&usqp=CAU"
    },
    {
      title: "Habit Breakers",
      description: "Appliances designed to help patients stop harmful oral habits like thumb sucking.",
      image: "https://littlepearlsdentalcare.com/wp-content/uploads/2022/01/Thumb-or-finger-sucking.png.webp"
    },
    {
      title: "Cosmetic Procedures",
      description: "Aesthetic treatments to enhance the appearance of teeth and smile.",
      image: "https://www.yourdentistryguide.com/wp-content/uploads/2017/11/new-smile-min-925x425.jpg"
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