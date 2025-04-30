
import React from 'react';
import { Button } from '@/components/ui/button';
import FadeInWhenVisible from "@/components/Fadeinwhenvisible";
import FadeInSlide from "@/components/FadeInSlide";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-main-gradient overflow-hidden min-h-screen">
      <div className="swell-container relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb md:mb-0 z-10">
            <h1 className="text-3xl md:text-6xl font-freckle tracking-wider mb-4 text-center md:text-left">
              <FadeInSlide direction='right'>
              <span className="text-darkGold">Elevate Your Trading Experience</span>
              <br />
              <span className="text-darkGold">with Swell Trading Bot</span>
              </FadeInSlide>
            </h1>
            <FadeInSlide direction='left'>
            <p className="text-navy md:max-w-lg- mb-8 italic font-lato text-center md:text-left">
              Unlock the potential of your investments with Swell Trading Bot, the
              intelligent trading solution designed for traders of all levels.
            </p>
            </FadeInSlide>
            <FadeInWhenVisible>
            <div className="flex justify-center md:justify-start">
            <a 
                href="https://t.me/SwellTradingbot" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="nav-button">BOT</Button>
              </a>
            </div>
            </FadeInWhenVisible>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <FadeInWhenVisible>
              <div className="w-full max-w-4xl animate-float">
                  <img 
                    src="/uploads/bot1.png" 
                    alt="Astronaut Trading Bot" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              </FadeInWhenVisible>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
