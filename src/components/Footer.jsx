import React from 'react';
import { FaTerminal } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 py-12 px-4 bg-[#02040b] select-none text-left">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo Tag */}
        <div className="flex items-center gap-2 font-display font-bold text-base text-gray-400">
          <FaTerminal className="text-accentCyan" />
          <span>M.BADOL<span className="text-accentCyan font-normal">()</span></span>
        </div>

        {/* Info */}
        <div className="flex flex-col items-center md:items-end gap-1.5 text-xs text-gray-500 font-mono">
          <span>&copy; {currentYear} Mohammad Badol. All rights reserved.</span>
          <span className="text-[10px] text-gray-600">
            Designed & Engineered with React, Tailwind & Framer Motion.
          </span>
        </div>

      </div>
    </footer>
  );
}
