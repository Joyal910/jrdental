import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Arun Kumar",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      quote: "I was extremely nervous about getting dental implants, but Dr. Jinas made the whole process so smooth and painless. The results are amazing, and I can smile confidently again!"
    },
    {
      name: "Priya Thomas",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      quote: "My daughter was terrified of dentists until we visited J R Dental Clinic. The child-friendly environment and Dr. Rukya's gentle approach completely changed her perspective. Now she looks forward to her dental check-ups!"
    },
    {
      name: "Joseph Mathew",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      quote: "The invisible aligners treatment has been life-changing. I can see the difference already, and no one even notices I'm wearing them. The team at J R Dental Clinic is professional, caring, and truly invested in their patients' well-being."
    },
    {
      name: "Sana Fathima",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      quote: "I had my teeth whitening done here and the results are fantastic! The procedure was comfortable, and the staff was incredibly friendly and informative throughout the process. Highly recommend their services!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-primary-50">
      <div className="section-container">
        <h2 className="section-title">Patient Testimonials</h2>
        <p className="section-subtitle">
          Hear what our patients have to say about their experience at J R Dental Clinic
        </p>
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex justify-center mb-6">
                      <Quote size={48} className="text-primary-200" />
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6 text-center">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mb-3"
                      />
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <div className="flex mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="text-secondary-500 fill-secondary-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={prevSlide}
          >
            <ChevronLeft size={24} className="text-primary-500" />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            onClick={nextSlide}
          >
            <ChevronRight size={24} className="text-primary-500" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;