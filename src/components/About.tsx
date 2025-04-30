
import React from 'react';
import { Button } from '@/components/ui/button';
import FadeInSlide from "@/components/FadeInSlide";

const About = () => {
  return (
    <section id="about" className="py-16 bg-main-gradient-reverse relative">
      
      <div className="swell-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 'mb-10 md:mb-0">
            <FadeInSlide direction="right">
              <h2 className="mb-4 text-navy font-freckle text-4xl">About Us</h2>
              <p className="font-freckle font-black text-xl md:text-2xl text-darkGold mb-6 tracking-wide">
                Welcome to Swell Trading Bot, where innovation meets investment!
            </p>
            </FadeInSlide>
            <FadeInSlide direction="left">
            <p className="font-lato text-xl md:text-1xl mb-6 tracking-wide">
              At Swell, we are passionate about empowering traders of all levels with cutting-edge technology. 
              Our mission is to simplify the trading experience by providing a user-friendly, intelligent trading 
              bot that helps you navigate the complexities of the financial markets.
            </p>
            </FadeInSlide>
            <a 
                href="https://t.me/SwellTradingbot" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <Button className="btn-primary">Start Trading</Button>
              </a>
          </div>
          <div className="md:w-1/2 flex justify-end z-1">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] animate-float">
          <FadeInSlide direction="right">
              <img
                src="/uploads/bot2.png" 
                alt="Trading Bot" 
                className="w-full h-full object-contain" 
              />
          </FadeInSlide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
