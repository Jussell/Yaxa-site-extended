import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Retail', path: '/retail' },
  { label: 'Wholesale', path: '/wholesale' },
  { label: 'Our History', path: '/history' },
  { label: 'News', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled && !isOpen ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className="text-2xl font-normal tracking-[0.2em] uppercase text-black">
            Yaxa
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-xs uppercase tracking-widest transition-colors hover:text-gray-500 ${
                location.pathname === item.path ? 'border-b border-black pb-1' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay (Full width & height modal) */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-12">
            <Link 
              to="/" 
              className="text-sm font-normal uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/retail" 
              className="text-sm font-normal uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Retail
            </Link>
            <Link 
              to="/wholesale" 
              className="text-sm font-normal uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Wholesale
            </Link>
            <Link 
              to="/history" 
              className="text-sm font-normal uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our History
            </Link>
            <Link 
              to="/news" 
              className="text-sm font-normal uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-bold uppercase tracking-[0.3em] text-black hover:text-gray-400 transition-colors pt-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;