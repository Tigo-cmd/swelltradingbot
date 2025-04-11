
import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="swell-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <div className="h-10 w-10 bg-gold/10 rounded-md flex items-center justify-center border border-gold/30">
                <Bot size={20} className="text-gold" />
              </div>
              <span className="ml-2 font-bold text-gold text-xl font-freckle">STB</span>
            </div>
            <p className="text-sm text-gray-400 font-lato">© 2025 Swell Trading Bot. All rights reserved.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-3 text-gray-300 font-lato">Product</h5>
              <ul className="space-y-2 text-sm font-lato">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-gray-300 font-lato">Company</h5>
              <ul className="space-y-2 text-sm font-lato">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3 text-gray-300 font-lato">Legal</h5>
              <ul className="space-y-2 text-sm font-lato">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
