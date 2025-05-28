import React, { useState } from 'react';
import { Calendar, Clock, Send, Phone, MessageSquare } from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <h2 className="section-title">Book an Appointment</h2>
        <p className="section-subtitle">
          Schedule your visit with our dental specialists and take the first step towards a healthier smile
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your appointment request has been received. We'll contact you shortly to confirm your appointment.</p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn-primary"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required*
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a service</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Smile Designing">Smile Designing</option>
                      <option value="Invisible Aligners">Invisible Aligners</option>
                      <option value="Braces">Braces</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Pediatric Dental Care">Pediatric Dental Care</option>
                      <option value="Dental Implants">Dental Implants</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date*
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <Calendar size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time*
                    </label>
                    <div className="relative">
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Select a time</option>
                        <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                        <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                        <option value="Evening (3PM - 7PM)">Evening (3PM - 7PM)</option>
                      </select>
                      <Clock size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Please share any specific concerns or questions..."
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn-primary inline-flex items-center">
                    Book Appointment
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="bg-primary-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Us Directly</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+914822700045" className="text-primary-600 hover:underline">+91 482 2700045</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-primary-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a href="https://wa.me/919446123456" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">+91 94461 23456</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <div className="mt-6 p-3 bg-secondary-100 rounded-lg text-center">
                <p className="text-secondary-800 font-medium">
                  Emergency appointments available on request
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;