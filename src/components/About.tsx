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
    <section id="about" className="py-16 bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            About <span className="font-semibold text-primary">Our Legacy</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where innovation meets compassion in dental excellence
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-1 bg-gradient-to-b from-primary to-primary-400 rounded-full"></div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Journey</h3>
              </div>
              <div className="space-y-5 text-gray-700">
                <p className="leading-relaxed text-base">
                  Founded with a vision to revolutionize dental care, J R Multi Speciality Dental Clinic has been at the forefront of dental innovation for over 15 years. Our state-of-the-art facility combines cutting-edge technology with unwavering commitment to patient comfort and care.
                </p>
                <p className="leading-relaxed text-base">
                  What sets us apart is our holistic approach to dental health, creating lasting relationships with our patients and ensuring personalized care that extends beyond the dental chair.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Why Choose <span className="text-primary">J R Dental</span>
                </h3>
              </div>

              {/* Feature Carousel */}
              <div 
                className="relative rounded-xl p-6"
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
                    className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition duration-300"
                    style={{ color: '#f3831e' }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex-1 mx-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, #f3831e 0%, rgba(243, 131, 30, 0.8) 50%, #1d4ed8 100%)`
                        }}
                      >
                        {whyChooseUsFeatures[currentFeature].icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {whyChooseUsFeatures[currentFeature].title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {whyChooseUsFeatures[currentFeature].description}
                    </p>
                  </div>

                  <button
                    onClick={nextFeature}
                    className="flex-shrink-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition duration-300"
                    style={{ color: '#f3831e' }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
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
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-400/10 rounded-2xl transform rotate-1 scale-[1.02] z-0" />
              <img
                src={galleryImages[currentFeature % galleryImages.length]}
                alt="Clinic gallery"
                className="relative z-10 rounded-2xl shadow-xl transition-all duration-1000 w-full h-auto object-cover"
                style={{ minHeight: '500px', maxHeight: '600px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;