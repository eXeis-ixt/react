import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import NavLink from '../NavLink';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/60 backdrop-blur-lg shadow-sm' : 'bg-white/0'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-medium tracking-tight text-gray-900">
            Adons Tech
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink active href="#">Work</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-3 space-y-3">
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Work</a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">About</a>
            <a href="#" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200">Contact</a>
          </div>
          <div className="py-3 border-t border-gray-100">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
