import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onLoginClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  currentLang: string;
  onLanguageChange: (lang: string) => void;
  t: {
    nav_residency: string;
    nav_tax: string;
    nav_about: string;
    cta_callback: string;
    [key: string]: string;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick, currentPage, onNavigate, currentLang, onLanguageChange, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'services', label: t.nav_residency },
    { id: 'advisory', label: t.nav_tax },
    { id: 'about', label: t.nav_about },
  ];

  const languages = ['EN', 'FR', 'RU', 'ZH'];

  const handleLangSelect = (lang: string) => {
    onLanguageChange(lang);
    setIsLangOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-brand-navy/95 backdrop-blur-md border-white/10 py-3 shadow-xl' 
          : 'bg-brand-navy border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <img 
            src="https://cdn.prod.website-files.com/64300276b80bac578ffb70ef/64300302fc25db8290b89bb5_zet-logo.svg" 
            alt="Zet Finance" 
            className="h-8 md:h-10 w-auto invert brightness-0 filter" 
            style={{ filter: 'brightness(0) invert(1)' }} 
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-sm font-medium tracking-wide transition-colors text-slate-300 hover:text-white font-sans"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA & Language */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative" ref={dropdownRef}>
            <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-slate-300 text-xs font-medium cursor-pointer hover:text-white group px-2 py-1"
            >
                <Globe className="w-3 h-3" />
                <span>{currentLang}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Robust Dropdown */}
            <AnimatePresence>
                {isLangOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full right-0 mt-2 w-32 bg-white rounded-sm shadow-xl border border-slate-100 z-50 overflow-hidden"
                    >
                        {languages.map(l => (
                            <button 
                                key={l} 
                                onClick={() => handleLangSelect(l)} 
                                className={`w-full text-left px-4 py-3 hover:bg-slate-50 text-xs font-bold transition-colors ${currentLang === l ? 'text-brand-navy bg-slate-50' : 'text-slate-500'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('callback')}
            className="bg-brand-gold hover:bg-amber-500 text-brand-navy font-bold px-6 py-2.5 rounded-sm transition-colors duration-300 text-xs tracking-widest uppercase flex items-center gap-2 shadow-lg shadow-brand-gold/20"
          >
            <Phone className="w-3 h-3" />
            {t.cta_callback}
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl animate-fade-in h-screen">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left text-sm font-medium text-slate-300 hover:text-white py-2"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 w-full space-y-4">
             <div className="flex gap-4 text-slate-300 text-sm">
                {languages.map(l => (
                    <span 
                        key={l}
                        className={currentLang === l ? 'text-white font-bold' : ''} 
                        onClick={() => {
                            onLanguageChange(l);
                        }}
                    >
                        {l}
                    </span>
                ))}
             </div>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('callback');
              }}
              className="bg-brand-gold text-brand-navy font-bold px-6 py-3 rounded-sm w-full mt-2 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3 h-3" />
              {t.cta_callback}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};