
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 px-6 bg-gray-100/80 backdrop-blur-sm fixed w-full z-50">
      <div className="swell-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="h-10 w-10 bg-amber-500/10 rounded-md flex items-center justify-center">
              <span className="font-bold text-amber-600 text-xl">STB</span>
            </div>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#docs" className="nav-link">Docs</a>
          <a href="#contact" className="nav-link">Contact Us</a>
          <Button className="ml-4 bg-slate-600 hover:bg-slate-700 text-white">Get Started</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 px-4">
          <a href="#home" className="block py-2 hover:text-amber-500">Home</a>
          <a href="#about" className="block py-2 hover:text-amber-500">About</a>
          <a href="#docs" className="block py-2 hover:text-amber-500">Docs</a>
          <a href="#contact" className="block py-2 hover:text-amber-500">Contact Us</a>
          <Button className="mt-2 w-full bg-slate-600 hover:bg-slate-700 text-white">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
