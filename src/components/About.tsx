
import React from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-200/60 relative">
      {/* Rounded shape at the top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gray-200/60" style={{ 
        borderTopLeftRadius: '50% 100%', 
        borderTopRightRadius: '50% 100%', 
        transform: 'translateY(-90%)' 
      }}></div>
      
      <div className="swell-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="mb-4 text-navy font-freckle text-4xl">About Us</h2>
            <p className="font-lato font-black text-xl md:text-2xl text-gold mb-6 tracking-wide">
              Welcome to Swell Trading Bot, where innovation meets investment!
              At Swell, we are passionate about empowering traders of all levels with cutting-edge technology. 
              Our mission is to simplify the trading experience by providing a user-friendly, intelligent trading 
              bot that helps you navigate the complexities of the financial markets.
            </p>
            <Button className="btn-primary">Start Trading</Button>
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
