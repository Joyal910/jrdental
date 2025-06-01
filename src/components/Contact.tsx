import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get in <span className="text-teal-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit or reach out with any questions. We're here to help you achieve your perfect smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-teal-500">
                <div className="flex items-start">
                  <div className="bg-teal-50 p-2 rounded-lg mr-3">
                    <MapPin className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mukkada Edifice, Karukachal Rd,<br />
                      Changanacherry, Kerala 686536
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg mr-3">
                    <Phone className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <div className="space-y-1">
                      <a href="tel:+917356562983" className="text-gray-600 hover:text-teal-500 text-sm block">
                        +91 73565 62983
                      </a>
                      <a href="tel:+919847450050" className="text-gray-600 hover:text-teal-500 text-sm block">
                        +91 98474 50050
                      </a>
                      <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                        <a href="https://wa.me/919847450050"className="text-gray-600 hover:text-teal-500 text-sm block">
                          +91 98474 50050
                        </a>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg mr-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@jrdentalclinic.com" className="text-gray-600 hover:text-teal-500 text-sm">
                      info@jrdentalclinic.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-orange-500">
                <div className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg mr-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                    <div className="text-sm text-gray-600">
                      <p>Mon-Fri: 9AM-7PM</p>
                      <p>Sat: 9AM-5PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3807228456576!2d76.57889899999999!3d9.4755752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062fe4162c26ad%3A0x9a9faa39896c89b8!2sJ%20R%20Multi%20Speciality%20Dental%20Clinic%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1748193797894!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div id="appointments" className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Book <span className="text-teal-500">Appointment</span>
              </h3>
              <p className="text-gray-600 text-sm">Fill the form and we'll contact you shortly</p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600 text-sm">We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service *
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                    >
                      <option value="">Select service</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Smile Designing">Smile Designing</option>
                      <option value="Invisible Aligners">Invisible Aligners</option>
                      <option value="Braces">Braces</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Pediatric Dental Care">Pediatric Care</option>
                      <option value="Dental Implants">Dental Implants</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none text-sm"
                    rows={4}
                    placeholder="Any specific concerns..."
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit} 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Book Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;