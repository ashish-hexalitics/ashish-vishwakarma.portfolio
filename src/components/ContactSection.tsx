import React from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactSection: React.FC = () => (
  <section id="contact" className="min-h-screen flex flex-col items-center justify-center  bg-white-600  text-white p-10 relative overflow-hidden">
    {/* Background overlay with slight opacity */}
    
    {/* Section content with relative z-index */}
    <div className="relative z-10 max-w-2xl w-full text-center">
      {/* Animated section title */}
      <h2 className="text-4xl font-bold mb-5 animate-fadeInUp">Get In Touch</h2>
      <p className="mb-8 text-lg text-gray-800">
        I'd love to hear from you! Please fill out the form below to get in contact.
      </p>
      
      {/* Contact form */}
      <form className="flex flex-col gap-6 w-full mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg backdrop-blur-md">
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-blue-500 text-xl" />
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-blue-500 text-xl" />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
        </div>
        <div className="relative">
          <textarea
            placeholder="Message"
            className="w-full p-4 pl-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 p-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-transform duration-200 transform hover:scale-105 shadow-lg"
        >
          <FaPaperPlane className="text-lg" />
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
