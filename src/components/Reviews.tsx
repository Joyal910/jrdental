import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const reviews = [
    {
      name: "Sarah Johnson",
      review: "Amazing dental care! The staff is incredibly professional and caring. They made me feel comfortable throughout the entire procedure.",
      rating: 5,
      timeAgo: "2 weeks ago",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      review: "Best dental experience I've ever had. Modern facility and gentle treatment. The technology they use is impressive.",
      rating: 5,
      timeAgo: "1 month ago",
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      review: "Dr. Jinas and the team are exceptional. Highly recommended! They go above and beyond for their patients.",
      rating: 5,
      timeAgo: "3 weeks ago",
      avatar: "ED"
    },
    {
      name: "David Wilson",
      review: "Outstanding service and results. The team is knowledgeable and makes every visit pleasant and stress-free.",
      rating: 5,
      timeAgo: "2 months ago",
      avatar: "DW"
    },
    {
      name: "Lisa Thompson",
      review: "Professional, caring, and skilled. They transformed my smile and boosted my confidence significantly.",
      rating: 5,
      timeAgo: "1 month ago",
      avatar: "LT"
    },
    {
      name: "James Rodriguez",
      review: "Exceptional dental care with a personal touch. The staff remembers your name and makes you feel like family.",
      rating: 5,
      timeAgo: "3 weeks ago",
      avatar: "JR"
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide logic with pause on mobile interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, isMobile ? 5000 : 4000); // Slower on mobile

    return () => clearInterval(interval);
  }, [reviews.length, isMobile]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }
  };

  // Get visible reviews based on screen size
  const getVisibleReviews = () => {
    const visible = [];
    const itemsToShow = isMobile ? 1 : 3;
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  // Google Logo SVG Component
  const GoogleLogo = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Enhanced background decorative elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 md:-top-40 -right-20 md:-right-40 w-40 md:w-80 h-40 md:h-80 bg-blue-200/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-40 md:w-80 h-40 md:h-80 bg-green-200/20 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="section-container relative">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <GoogleLogo className="h-6 w-6 md:h-8 md:w-8" />
            <h2 className="section-title text-center text-gray-800">
              Google Reviews
            </h2>
          </div>
          <p className="section-subtitle text-center mx-auto leading-relaxed px-4">
            Verified reviews from our patients who shared their experiences on Google
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm md:text-base">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-gray-700">4.9</span>
            <span className="text-gray-500 hidden sm:inline">• Based on 127 reviews</span>
          </div>
        </div>

        {/* Mobile-optimized reviews container */}
        <div className="max-w-6xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out touch-pan-x"
            style={{
              transform: `translateX(-${currentIndex * (100 / (isMobile ? 1 : 3))}%)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {reviews.concat(reviews).map((review, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 px-2 md:px-4 ${isMobile ? 'w-full' : 'w-full md:w-1/3'}`}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 mx-1 md:mx-2 group hover:-translate-y-1 md:hover:-translate-y-2 border border-gray-100 relative overflow-hidden min-h-[280px] md:min-h-[320px]">
                  {/* Google branding header */}
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <GoogleLogo className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-xs md:text-sm text-gray-500">{review.timeAgo}</span>
                  </div>
                  
                  {/* User info and rating */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm"
                      style={{
                        background: `linear-gradient(135deg, #f3831e 0%, rgba(243, 131, 30, 0.8) 100%)`
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base">
                        {review.name}
                      </h4>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Review text */}
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300 mb-4">
                    {review.review}
                  </p>

                  {/* Google verification badge */}
                  <div className="flex items-center gap-2 mt-auto pt-3 md:pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg className="h-3 w-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified Google Review
                    </div>
                  </div>

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced progress indicators */}
        <div className="flex justify-center mt-8 md:mt-12 gap-2 md:gap-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-500 hover:scale-125 active:scale-95 ${
                index === currentIndex
                  ? 'w-6 md:w-8 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              style={{
                backgroundColor: index === currentIndex ? '#f3831e' : undefined
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        {isMobile && (
          <div className="text-center mt-4 text-xs text-gray-500">
            Swipe left or right to see more reviews
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 md:gap-4 bg-white rounded-full px-4 md:px-6 py-2 md:py-3 shadow-md text-sm md:text-base">
            <div className="flex items-center gap-2">
              <GoogleLogo className="h-4 w-4 md:h-5 md:w-5" />
              <span className="font-medium text-gray-700">Verified on Google</span>
            </div>
            <div className="w-px h-3 md:h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <svg className="h-3 w-3 md:h-4 md:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Real Patient Reviews</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1rem;
          color: #6b7280;
          max-width: 32rem;
        }
        
        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
          .section-subtitle {
            font-size: 1.125rem;
          }
        }

        /* Touch-friendly interactions */
        @media (max-width: 767px) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
          }
          
          /* Disable hover effects on touch devices */
          @media (hover: none) {
            .group:hover .absolute {
              opacity: 0;
            }
          }
        }

        /* Smooth transitions optimized for mobile */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .flex {
            transition-duration: 0.2s;
          }
          
          .animate-pulse {
            animation: none;
          }
        }

        /* Mobile-specific styles */
        @media (max-width: 767px) {
          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          /* Ensure touch targets are at least 44px */
          button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Improve text readability on small screens */
          p {
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
};

export default Reviews;