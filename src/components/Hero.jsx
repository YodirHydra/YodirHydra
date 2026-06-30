import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaCircle } from 'react-icons/fa';
import Terminal from './Terminal';
import profileImage from '../assets/badol.PNG';
const TYPED_ROLES = [
  'Cybersecurity Enthusiast',
  'CTF Player',
  'Full Stack Developer',
  'Problem Solver',
  'Tech Explorer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = TYPED_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
          return;
        }
      }
      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleViewProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-center px-4 relative overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accentCyan/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accentPurple/10 blur-[150px] pointer-events-none animate-pulse-slow" />

      {/* Main Glass Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl rounded-3xl glass-panel glass-reflection p-8 md:p-12 float-bob mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-accentCyan tracking-wider font-semibold uppercase mb-6 shadow-glassInset"
            >
              <FaCircle className="text-[8px] animate-pulse" />
              <span>Computer Science & Eng. Student</span>
            </motion.div>

            {/* Title / Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-4 tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient-tricolor font-extrabold relative">
                Mohammad Badol
              </span>
            </motion.h1>

            {/* Typewriter text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-8 font-mono text-lg sm:text-xl text-gray-300 font-medium mb-6"
            >
              <span className="text-accentCyan">&gt; </span>
              <span className="typing-cursor">{displayText}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-xl font-sans"
            >
              Passionate cyber explorer studying Computer Science & Engineering. Actively solving CTF challenges, developing modern full stack software, and researching secure web structures and automated AI integrations.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <button
                onClick={handleViewProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue text-black font-semibold text-sm tracking-wide cursor-pointer transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              >
                <span>View Projects</span>
                <FaArrowRight size={12} />
              </button>

              <a
                href="/assets/Mohammad_Badol_CV.pdf"
                download="Mohammad_Badol_CV.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm border border-white/10 cursor-pointer transition-all hover:scale-105 hover:border-accentPurple/40"
              >
                <FaDownload size={12} className="text-accentPurple" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - FUTURISTIC PROFILE GRAPHIC */}
          <div className="md:col-span-5 flex justify-center items-center relative py-6 md:py-0">
            {/* Spinning/Orbit Neon Rings */}
            <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-accentCyan/30 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[290px] h-[290px] rounded-full border border-double border-accentPurple/25 animate-spin-reverse-slow pointer-events-none" />
            
            {/* Soft glowing ambient circle */}
            <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-accentCyan/10 to-accentPurple/10 blur-xl pointer-events-none animate-pulse-slow" />

            {/* Floating Profile Photo / Cyber Avatar */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[210px] h-[210px] rounded-full p-1.5 bg-gradient-to-tr from-accentCyan to-accentPurple shadow-[0_0_30px_rgba(0,229,255,0.2)]"
            >
              {/* Outer boundary overlay */}
              <div className="w-full h-full rounded-full overflow-hidden bg-bgPrimary flex items-center justify-center relative group">
                
                {/* Cybersecurity Vector Placeholder Art (Saves broken images issues) */}
                <img
  src={profileImage}
  alt="Mohammad Badol"
  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
/>

                {/* Subtitle Glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-[10px] font-mono tracking-widest text-accentCyan">NODE:BADOL_</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Terminal Widget Placement */}
      <Terminal />
    </section>
  );
}


