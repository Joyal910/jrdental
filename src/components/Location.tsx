import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">
          We're conveniently located in Changanacherry with easy access and parking facilities
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Address Details */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary-600">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <MapPin className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <address className="not-italic text-gray-600">
                    Ground Floor, Mukkada Edifice,<br />
                    Karukachal - Changanacherry Rd,<br />
                    Thengana, Changanacherry,<br />
                    Kerala 686536
                  </address>
                </div>
              </div>
              
              <div className="flex">
                <Phone className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Phone</p>
                  <a href="tel:+914822700045" className="text-gray-600 hover:text-primary-500">+91 482 2700045</a>
                </div>
              </div>
              
              <div className="flex">
                <Mail className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a href="mailto:info@jrdentalclinic.com" className="text-gray-600 hover:text-primary-500">info@jrdentalclinic.com</a>
                </div>
              </div>
              
              <div className="flex">
                <Clock className="h-6 w-6 text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium mb-1">Working Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.5753392738476!2d76.54377731479202!3d9.420419193262302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0630984e30b137%3A0xb10d8c2b97df8f74!2sChanganacherry%2C%20Kerala%20686536!5e0!3m2!1sen!2sin!4v1627994054042!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="J R Dental Clinic Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;