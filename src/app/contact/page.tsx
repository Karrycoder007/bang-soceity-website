"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto p-6 md:p-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center py-10 mb-8 text-blue-500">
        ಸಂಪರ್ಕಿಸಿ / Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: Contact Form */}
        <div className="space-y-6">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">ಹೆಸರು / Name</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="ನಿಮ್ಮ ಹೆಸರು / Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">ಇಮೇಲ್ / Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="ನಿಮ್ಮ ಇಮೇಲ್ / Your Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">ಸಂದೇಶ / Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
                rows={5} 
                placeholder="ನಿಮ್ಮ ಸಂದೇಶ / Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              ಕಳುಹಿಸಿ / Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-4 mt-8">
            <p className="flex items-center gap-2 text-black">
              <MapPin className="text-blue-600" /> 
              ಕರ್ನಾಟಕ ಸಹಕಾರಿ ಸಂಘ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ
            </p>
            <p className="flex items-center gap-2 text-black">
              <Phone className="text-blue-600" /> 
              +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-black">
              <Mail className="text-blue-600" /> 
              info@coopsociety.in
            </p>
          </div>
        </div>

        {/* Right Side: Google Map */}
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.964541212684!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e2c3c7a1%3A0x1d4a6d9785d22b0f!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714327037458!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
