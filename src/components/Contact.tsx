
import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import FadeInSlide from "@/components/FadeInSlide";
import FadeInWhenVisible from "@/components/Fadeinwhenvisible";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-main-gradient-reverse">
      <div className="swell-container text-center">
        <h2 className="font-freckle text-4xl text-navy mb-8">Contact Us</h2>

        
        <div className="flex justify-center space-x-6">
         <FadeInSlide direction="left" >
          <a href="https://swelltradingbot@gmail.com" target='_blank' className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500 hover:bg-red-200 transition-colors">
            <Mail size={24} />
          </a>
          </FadeInSlide>
          {/* <a href="#" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
            <Linkedin size={24} />
          </a> */}
          <FadeInWhenVisible>
          <a href="https://github.com/SwellTradingBot/" target='_blank' className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors">
            <Github size={24} />
          </a>
          </FadeInWhenVisible>
          <FadeInSlide direction="right" >
          <a href="https://x.com/swelltradingbot" target="_blank" className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-400 hover:bg-blue-200 transition-colors">
            <Twitter size={24} />
          </a>
          </FadeInSlide>
        </div>
      </div>
    </section>
  );
};

export default Contact;
