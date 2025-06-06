import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // WhatsApp number of the clinic
  const CLINIC_WHATSAPP = '919847450050';

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Name can only contain letters and spaces';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return 'Phone number is required';
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) return 'Phone number must be at least 10 digits';
    if (digitsOnly.length > 15) return 'Phone number cannot exceed 15 digits';
    if (!phoneRegex.test(phone.trim())) return 'Please enter a valid phone number';
    return '';
  };

  const validateService = (service) => {
    if (!service) return 'Please select a service';
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.service = validateService(formData.service);

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    switch (name) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'service':
        error = validateService(value);
        break;
      default:
        break;
    }

    if (error) {
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    };
    return now.toLocaleDateString('en-IN', options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    if (!validateForm()) {
      return;
    }

    // Create the enhanced WhatsApp message template
    const message = `🦷 APPOINTMENT REQUEST 🦷

👤 Patient Name: ${formData.name.trim()}
📧 Email: ${formData.email.trim()}
📱 Phone Number: ${formData.phone.trim()}
🏥 Service Required: ${formData.service}${formData.message.trim() ? `
💬 Additional Message: ${formData.message.trim()}` : `
💬 Additional Message: None`}
📅 Request Date: ${getCurrentDate()}

Please confirm my appointment at your earliest convenience.

---
J R Multi Speciality Dental Clinic
Thengena, Kerala`;

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/919847450050?text=${encodeURIComponent(message)}`;
    
    console.log('WhatsApp URL:', whatsappURL); // For debugging
    
    // Show success message first
    setIsSubmitted(true);
    
    // Try to open WhatsApp after a short delay
    setTimeout(() => {
      try {
        // Create a temporary link and click it
        const link = document.createElement('a');
        link.href = whatsappURL;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
        // Fallback - direct window navigation
        window.open(whatsappURL, '_blank') || (window.location.href = whatsappURL);
      }
    }, 500);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setErrors({});
    }, 3000);
  };

  const createManualWhatsAppMessage = () => {
    const hasRequiredFields = formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.service;
    
    if (!hasRequiredFields) {
      return `🦷 APPOINTMENT REQUEST 🦷

👤 Patient Name: [Please fill form above]
📧 Email: [Please fill form above]
📱 Phone Number: [Please fill form above]
🏥 Service Required: [Please fill form above]
💬 Additional Message: [Please fill form above]
📅 Request Date: ${getCurrentDate()}

Please confirm my appointment at your earliest convenience.

---
J R Multi Speciality Dental Clinic
Thengena, Kerala`;
    }

    return `🦷 APPOINTMENT REQUEST 🦷

👤 Patient Name: ${formData.name.trim()}
📧 Email: ${formData.email.trim()}
📱 Phone Number: ${formData.phone.trim()}
🏥 Service Required: ${formData.service}${formData.message.trim() ? `
💬 Additional Message: ${formData.message.trim()}` : `
💬 Additional Message: None`}
📅 Request Date: ${getCurrentDate()}

Please confirm my appointment at your earliest convenience.

---
J R Multi Speciality Dental Clinic
Thengena, Kerala`;
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
                      GROUND FLOOR, MUKKADA EDIFICE, Karukachal - Changanacherry Rd,<br />
                      Thengena, Kerala 686536
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
                      <a href="tel:+919847450050" className="text-gray-600 hover:text-teal-500 text-sm block">
                        +91 98474 50050
                      </a>
                      <a href="tel:+917356562983" className="text-gray-600 hover:text-teal-500 text-sm block">
                        +91 73565 62983
                      </a>
                      
                      <h3 className="font-bold text-gray-900 mb-1 mt-2">WhatsApp</h3>
                      <a href="https://wa.me/919847450050" className="text-gray-600 hover:text-teal-500 text-sm block">
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
                    <a href="mailto:jinasat500@gmail.com" className="text-gray-600 hover:text-teal-500 text-sm">
                      jinasat500@gmail.com
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
                      <p>Mon-Sat: 9AM-8PM</p>
                      <p>Sun: Open Based on Appointments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <MapPin className="w-5 h-5 text-teal-500 mr-2" />
                Find Us
              </h3>
              <div className="rounded-lg overflow-hidden relative">
                <div className="w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3807228456576!2d76.57889899999999!3d9.4755752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062fe4162c26ad%3A0x9a9faa39896c89b8!2sJ%20R%20Multi%20Speciality%20Dental%20Clinic%20%26%20Implant%20Center!5e0!3m2!1sen!2sin!4v1748193797894!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{border:0, minHeight: '256px'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                    title="J R Multi Speciality Dental Clinic Location"
                  ></iframe>
                </div>
              </div>
              
              {/* Mobile-friendly address and directions */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      GROUND FLOOR, MUKKADA EDIFICE<br />
                      Karukachal - Changanacherry Rd<br />
                      Thengena, Kerala 686536
                    </p>
                  </div>
                  <a 
                    href="https://maps.google.com/maps?q=J+R+Multi+Speciality+Dental+Clinic+%26+Implant+Center,+Thengena,+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 whitespace-nowrap"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div id="appointments" className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Book <span className="text-teal-500">Appointment</span>
              </h3>
              <p className="text-gray-600 text-sm">Fill the form and we'll contact you via WhatsApp</p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Request Sent!</h4>
                <p className="text-gray-600 text-sm">Your appointment request has been sent via WhatsApp. We'll confirm your appointment shortly.</p>
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
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="John Doe"
                      required
                    />
                    {errors.name && (
                      <div className="flex items-center mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-red-500 text-xs">{errors.name}</span>
                      </div>
                    )}
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
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="john@example.com"
                      required
                    />
                    {errors.email && (
                      <div className="flex items-center mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-red-500 text-xs">{errors.email}</span>
                      </div>
                    )}
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
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+91 98765 43210"
                      required
                    />
                    {errors.phone && (
                      <div className="flex items-center mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-red-500 text-xs">{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service *
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm ${
                        errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                      required
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
                    {errors.service && (
                      <div className="flex items-center mt-1">
                        <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                        <span className="text-red-500 text-xs">{errors.service}</span>
                      </div>
                    )}
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
                    placeholder="Any specific concerns or preferred appointment time..."
                    maxLength={500}
                  ></textarea>
                  <div className="text-right mt-1">
                    <span className="text-xs text-gray-400">{formData.message.length}/500</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Manual WhatsApp button */}
                  <a 
                    href={`https://wa.me/919847450050?text=${encodeURIComponent(createManualWhatsAppMessage())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-center no-underline"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                </div>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">
                    Clicking the button will open WhatsApp with your appointment details
                  </p>
                  <p className="text-xs text-gray-400">
                    Or contact us directly: <a href="tel:+919847450050" className="text-teal-500 hover:underline">+91 98474 50050</a>
                  </p>
                </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;