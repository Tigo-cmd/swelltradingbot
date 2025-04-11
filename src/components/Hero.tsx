
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      <div className="swell-container relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0 z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-amber-500">Elevate Your Trading Experience</span>
              <br />
              <span className="text-amber-400">with Swell Trading Bot</span>
            </h1>
            <p className="text-slate-700 md:max-w-lg mb-8">
              Unlock the potential of your investments with Swell Trading Bot, the
              intelligent trading solution designed for traders of all levels.
            </p>
            <Button className="bg-slate-600 hover:bg-slate-700 text-white">Get Started</Button>
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
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-200 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
