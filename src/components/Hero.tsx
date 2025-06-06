import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Award, Shield, Star } from 'lucide-react';
import girl_smiling from '../assets/hero_bg/girl smiling.png';

const useAnimatedCounter = (endValue, duration = 2000, suffix = '') => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutCubic * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, endValue, duration]);

  return { count: count + suffix, ref };
};

const Hero = () => {
  const counter1 = useAnimatedCounter(100, 2000, '%');
  const counter2 = useAnimatedCounter(12000, 2500, '+');
  const counter3 = useAnimatedCounter(99.2, 2200, '%');
  const counter4 = useAnimatedCounter(24, 1800, '/7');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Image without Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${girl_smiling})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl backdrop-blur-md bg-white/30 p-8 rounded-3xl shadow-2xl border border-white/30 bg-gradient-to-br from-white/40 to-white/20">
          <div className="space-y-6">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-lg ring-1 ring-black/5">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">Award-Winning Dental Excellence</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                LET YOUR SMILE <br />
                <span className="text-primary bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                  SHINE WITH US
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-400 to-primary-300 rounded-full shadow-sm"></div>
            </div>
            
            <p className="text-xl text-gray-900 max-w-lg leading-relaxed font-medium">
              Get top-notch dental care at J R Multispeciality Dental Clinic & Implant Center in Changanassery — where expert dentists and modern tech come together for your smile.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">5/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">ISO & CDSCO Certified Equipments</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#appointments" className="group btn-primary flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <a href="tel:+919847450050" className="btn-secondary flex items-center justify-center gap-2 group">
                <span>Contact us</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse group-hover:animate-none"></div>
              </a>
            </div>
            
            {/* Statistics Section - Updated to 4 columns */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/40">
              <div className="text-center lg:text-left" ref={counter1.ref}>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-[#f3831e] to-[#d16a0f] bg-clip-text text-transparent">
                  {counter1.count}
                </h3>
                <p className="text-gray-800 font-medium text-sm lg:text-base">Patient Satisfaction</p>
                <div className="w-full h-1 bg-gradient-to-r from-[#f3831e]/30 to-transparent rounded-full mt-2"></div>
              </div>
              <div className="text-center lg:text-left" ref={counter2.ref}>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-[#f3831e] to-[#d16a0f] bg-clip-text text-transparent">
                  {counter2.count.toString().includes('000') ? `${Math.floor(counter2.count.toString().replace('+', '') / 1000)}k+` : counter2.count}
                </h3>
                <p className="text-gray-800 font-medium text-sm lg:text-base">Transformed Smiles</p>
                <div className="w-full h-1 bg-gradient-to-r from-[#f3831e]/30 to-transparent rounded-full mt-2"></div>
              </div>
              
              <div className="text-center lg:text-left" ref={counter4.ref}>
                <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-[#f3831e] to-[#d16a0f] bg-clip-text text-transparent">
                  {counter4.count}
                </h3>
                <p className="text-gray-800 font-medium text-sm lg:text-base">Support Available</p>
                <div className="w-full h-1 bg-gradient-to-r from-[#f3831e]/30 to-transparent rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;