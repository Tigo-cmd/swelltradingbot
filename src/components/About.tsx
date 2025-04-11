
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="swell-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="mb-2 text-slate-800 font-bold text-2xl">About Us</h2>
            <h3 className="swell-subheading mb-4">
              Welcome to Swell Trading Bot, where innovation meets investment!
            </h3>
            <p className="swell-paragraph mb-6">
              At Swell, we are passionate about empowering traders of all levels with cutting-edge technology. 
              Our mission is to simplify the trading experience by providing a user-friendly, intelligent trading 
              bot that helps you navigate the complexities of the financial markets.
            </p>
            <Button className="bg-slate-600 hover:bg-slate-700 text-white">Start Trading</Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-80 h-80 relative">
              <img 
                src="/lovable-uploads/65ed806d-25b1-455a-bcc9-55d46ef649bd.png" 
                alt="Trading Bot" 
                className="w-full h-full object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
