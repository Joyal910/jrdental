import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';
import joshy from "../assets/doctors/joshy.png";
import ravi from "../assets/doctors/ravi.png";
import rino from "../assets/doctors/rino.png";
import jinas1 from "../assets/doctors/jinas1.png";


const Team = () => {
  const topDoctors = [
    {
      name: 'Dr. Jinas A T',
      role: 'General dentist, chief dental surgeon',
      image: jinas1,
      specialization: 'Implantology, Oral Surgery',
      experience: '12+ years experience',
    },
    {
      name: 'Dr. Rukya Saju',
      role: 'Chief Dental Surgeon',
      image:
        'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialization: 'General & Preventive Dentistry',
      experience: '10+ years experience',
    },
  ];

  const otherDoctors = [
    {
      name: 'Dr. Ravi Rajan',
      role: 'Oral & Maxillofacial Surgeon',
      image: ravi,
      specialization: 'Oral & Maxillofacial Surgery',
      experience: 'Asst. Prof. Pushpagiri Medical College Hospital',
    },
    {
      name: 'Dr. Lovin Valsan Mathew',
      role: 'Endodontist',
      image:
        'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialization: 'Root Canal Specialist',
      experience: 'Asst. Prof. Pushpagiri Dental College',
    },
    {
      name: 'Dr. Joshy P Abraham',
      role: 'Prosthodontist',
      image: joshy,
      specialization: 'Dental Prosthetics',
      experience: 'Associate Prof. Pushpagiri Dental College',
    },
    {
      name: 'Dr. Amal K Aby',
      role: 'Orthodontist',
      image:
        'https://images.pexels.com/photos/4269358/pexels-photo-4269358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialization: 'Braces, Smile Alignment',
      experience: 'MDS, Orthodontics',
    },
    {
      name: 'Dr. Rino Roopak Soman',
      role: 'Periodontist',
      image: rino,
      specialization: 'Gum Disease & Surgery',
      experience: 'Associate Prof. Pushpagiri Dental College',
    },
  ];

  const renderDoctorCard = (doctor, index, isTopDoctor = false) => (
    <div key={index} className="group relative">
      <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
        {/* Chief Badge for Top Doctors */}
        {isTopDoctor && (
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <Award className="w-3 h-3" />
              <span className="hidden xs:inline">Chief</span>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Floating Professional Icon */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 transform transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-gray-700 transition-colors duration-300">
              {doctor.name}
            </h3>
            <p
              className="font-semibold text-sm sm:text-base mb-2 sm:mb-3"
              style={{ color: '#bc5c1c' }}
            >
              {doctor.role}
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {doctor.specialization}
              </p>
            </div>

            <div className="flex items-start gap-2">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {doctor.experience}
              </p>
            </div>
          </div>

          {/* Professional Line */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
            <div className="flex items-center justify-center">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gray-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4">
            Our <span className="font-semibold text-teal-600">Doctors</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Highly qualified dental professionals ensuring the best care for you
            and your family
          </p>
        </div>

        {/* Top Layer - Chief Doctors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {topDoctors.map((doctor, index) =>
            renderDoctorCard(doctor, index, true)
          )}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-12 sm:mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-32 sm:max-w-md"></div>
          <div className="mx-4 sm:mx-6 bg-gray-100 rounded-full p-2 sm:p-3">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-32 sm:max-w-md"></div>
        </div>

        {/* Bottom Layer - Other Specialists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {otherDoctors.map((doctor, index) =>
            renderDoctorCard(doctor, index, false)
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;