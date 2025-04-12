
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-main-gradient overflow-hidden min-h-screen">
      <div className="swell-container relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0 z-10">
            <h1 className="text-3xl md:text-5xl font-freckle tracking-wider mb-4 text-center md:text-left">
              <span className="text-gold">Elevate Your Trading Experience</span>
              <br />
              <span className="text-gold">with Swell Trading Bot</span>
            </h1>
            <p className="text-navy md:max-w-lg mb-8 italic font-lato text-center md:text-left">
              Unlock the potential of your investments with Swell Trading Bot, the
              intelligent trading solution designed for traders of all levels.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button className="nav-button">Get Started</Button>
            </div>
          </div>
          <div className="md:w-1/3 relative">
            <div className="w-64 h-64 mx-auto animate-float">
              <img 
                src="/lovable-uploads/65ed806d-25b1-455a-bcc9-55d46ef649bd.png" 
                alt="Astronaut Trading Bot" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
