import React, { useState, useEffect } from 'react';
import { Heart, CheckCircle, Star, Award, Shield, Users, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import person from '../assets/clinic/person.png';
import seat from '../assets/clinic/seat.png';
import treatement from '../assets/clinic/treatement.png'
import clinic_front from '../assets/clinic/clinic_front.png'
import innaugration from '../assets/clinic/innaugration.png'


const About = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const galleryImages = [
    clinic_front,
    innaugration,
   person,
   seat,
   treatement
  ];

  const whyChooseUsFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Sterilization",
      description: "Hospital-grade safety protocols ensuring complete protection"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Latest Technology", 
      description: "State-of-the-art equipment for precise treatments"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Board-certified specialists with years of experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Timing",
      description: "Extended hours to accommodate your schedule"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Patient Care",
      description: "Personalized attention and comfortable experience"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assured",
      description: "Comprehensive warranty on all major treatments"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % whyChooseUsFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % whyChooseUsFeatures.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + whyChooseUsFeatures.length) % whyChooseUsFeatures.length);
  };

  return (
    <section id="about" className="py-12 sm:py-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
            About <span className="font-semibold text-primary">Our Legacy</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-primary-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Where innovation meets compassion in dental excellence
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12">
          {/* Story Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="h-8 sm:h-10 w-1 bg-gradient-to-b from-primary to-primary-400 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Our Journey</h3>
              </div>
              <div className="space-y-4 sm:space-y-5 text-gray-700">
                <p className="leading-relaxed text-sm sm:text-base">
                 Founded with a passion to redefine dental care in Changanassery, J R Multispeciality Dental Clinic & Implant Center is a new-age clinic equipped with the latest technology and led by some of the finest dental specialists in the region.
                </p>
                <p className="leading-relaxed text-sm sm:text-base">
                 Our state-of-the-art facility is designed to deliver precision, comfort, and a seamless patient experience. We believe in a personalized, holistic approach — focusing not just on treatments, but on building lasting trust and healthier smiles for life.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Why Choose <span className="text-primary">J R Dental</span>
                </h3>
              </div>

              {/* Feature Carousel */}
              <div 
                className="relative rounded-xl p-4 sm:p-6"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(243, 131, 30, 0.1) 0%, 
                    rgba(243, 131, 30, 0.15) 25%,
                    rgba(59, 130, 246, 0.1) 50%,
                    rgba(243, 131, 30, 0.08) 75%,
                    rgba(243, 131, 30, 0.12) 100%)`
                }}
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevFeature}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition duration-300"
                    style={{ color: '#f3831e' }}
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>

                  <div className="flex-1 mx-3 sm:mx-6 text-center">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, #f3831e 0%, rgba(243, 131, 30, 0.8) 50%, #1d4ed8 100%)`
                        }}
                      >
                        {whyChooseUsFeatures[currentFeature].icon}
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                      {whyChooseUsFeatures[currentFeature].title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {whyChooseUsFeatures[currentFeature].description}
                    </p>
                  </div>

                  <button
                    onClick={nextFeature}
                    className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition duration-300"
                    style={{ color: '#f3831e' }}
                  >
                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                  {whyChooseUsFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === currentFeature ? 'w-4 h-2' : 'w-2 h-2 hover:opacity-80'
                      }`}
                      style={{
                        backgroundColor: index === currentFeature ? '#f3831e' : 'rgba(243, 131, 30, 0.4)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-400/10 rounded-xl sm:rounded-2xl transform rotate-1 scale-[1.02] z-0" />
              <img
                src={galleryImages[currentFeature % galleryImages.length]}
                alt="Clinic gallery"
                className="relative z-10 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-1000 w-full h-auto object-cover"
                style={{ 
                  minHeight: '300px',
                  maxHeight: '400px',
                  '@media (min-width: 640px)': {
                    minHeight: '400px',
                    maxHeight: '500px'
                  },
                  '@media (min-width: 1024px)': {
                    minHeight: '500px',
                    maxHeight: '600px'
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;