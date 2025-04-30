import React from 'react';
import { 
  BarChartHorizontal, 
  ShieldCheck, 
  Clock, 
  Settings, 
  Users, 
  LineChart,
  Bot
} from 'lucide-react';
import FadeInSlide from "@/components/FadeInSlide";
import FadeInWhenVisible from "@/components/Fadeinwhenvisible";

const featureItems = [
  {
    icon: <BarChartHorizontal size={32} />,
    title: "Automated Trading",
    description: "Execute trades automatically based on pre-set parameters with real-time monitoring"
  },
  {
    icon: <LineChart size={32} />,
    title: "Risk Management",
    description: "Advanced tools to manage risk and protect your investments with customizable settings"
  },
  {
    icon: <Settings size={32} />,
    title: "Smart Algorithms",
    description: "Powered by advanced AI to analyze market trends and make better trading decisions"
  },
  {
    icon: <Clock size={32} />,
    title: "24/7 Market Access",
    description: "Never miss a trading opportunity with round-the-clock automated monitoring"
  },
  {
    icon: <Users size={32} />,
    title: "Multi-Exchange Support",
    description: "Connect and trade seamlessly across multiple platforms with a unified interface"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Security & Privacy",
    description: "Enterprise-grade security with encryption and secure API connections for your data"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-main-gradient">
      <div className="swell-container">
        <FadeInWhenVisible>
        <div className="text-center mb-12">
          <h2 className="text-navy font-freckle text-4xl mb-2">Features</h2>
          <div className="flex flex-wrap items-center justify-center">
            <h3 className="text-darkGold font-lato font-bold text-xl sm:text-2xl md:text-3xl">What can Swell trading</h3>
            <Bot size={40} className="text-gold mx-2" />
            <span className="text-darkGold font-lato font-bold text-xl sm:text-2xl md:text-3xl">do?</span>
          </div>
        </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <FadeInSlide key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="feature-card group hover:scale-[1.02] transition-transform">
                <div className="mb-4 text-white">{feature.icon}</div>
                <h4 className="text-lg font-lato font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-200 text-center font-lato">{feature.description}</p>
              </div>
            </FadeInSlide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
