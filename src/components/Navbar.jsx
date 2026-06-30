import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaTerminal } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll event to shrink navbar padding
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to watch which section is currently on screen
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section occupies center of screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full glass-panel px-6 md:px-8 transition-all duration-300 ${
          scrolled ? 'py-3 bg-black/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]' : 'py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Terminal Tag */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 font-display font-bold text-lg md:text-xl tracking-tight text-white hover:text-accentCyan transition-colors cursor-pointer group"
          >
            <FaTerminal className="text-accentCyan group-hover:rotate-12 transition-transform duration-300" />
            <span>M.BADOL<span className="text-accentCyan font-normal">()</span></span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors cursor-pointer ${
                  activeSection === item.id ? 'text-accentCyan' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 -z-10 bg-white/[0.04] border border-accentCyan/20 rounded-full shadow-[0_0_15px_rgba(0,229,255,0.08)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accentCyan transition-colors p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] rounded-3xl glass-panel p-6 flex flex-col gap-4 md:hidden bg-black/90 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            {NAV_ITEMS.map((item, idx) => (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-3 text-left px-4 rounded-xl text-base font-semibold tracking-wide border transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'text-accentCyan bg-white/[0.03] border-accentCyan/20 shadow-[0_0_15px_rgba(0,229,255,0.05)]'
                    : 'text-gray-400 border-transparent hover:text-white'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
