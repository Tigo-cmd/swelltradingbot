
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="swell-container text-center">
        <h2 className="swell-heading mb-8">Contact Us</h2>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 hover:bg-red-200 transition-colors">
            <Mail size={24} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 4l11.733 11.733a1 1 0 0 0 1.414 0L21 12" />
              <path d="M4 20l6.768-6.768" />
              <path d="M20.5 3.5l-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
