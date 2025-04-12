
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      if (isOpen) setIsOpen(false);
      
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="py-4 px-6 bg-gray-100/80 backdrop-blur-sm fixed w-full z-50">
      <div className="swell-container flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="h-10 w-10 bg-darkGold/10 rounded-md flex items-center justify-center border-2 border-darkGold">
              <Bot size={20} className="text-darkGold" />
            </div>
            <span className="ml-2 font-bold text-darkGold text-xl font-lato italic">TB</span>
          </a>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-link">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">About</a>
          <a href="#docs" onClick={(e) => handleNavClick(e, 'docs')} className="nav-link">Docs</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">Contact Us</a>
          <Button className="ml-4 nav-button">Get Started</Button>
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
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block py-2 nav-link">Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block py-2 nav-link">About</a>
          <a href="#docs" onClick={(e) => handleNavClick(e, 'docs')} className="block py-2 nav-link">Docs</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block py-2 nav-link">Contact Us</a>
          <Button className="mt-2 w-full nav-button">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
