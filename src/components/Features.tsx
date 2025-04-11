
import React from 'react';
import { 
  BarChartHorizontal, 
  ShieldCheck, 
  Clock, 
  Settings, 
  Users, 
  LineChart 
} from 'lucide-react';

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
    <section id="features" className="py-16 bg-gray-100">
      <div className="swell-container">
        <div className="text-center mb-12">
          <h2 className="swell-heading mb-2">Features</h2>
          <h3 className="swell-subheading mb-4">What can Swell trading <span className="inline-block">🤖</span> do?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <div key={index} className="feature-card group hover:scale-[1.02] transition-transform">
              <div className="mb-4 text-white">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-200 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
