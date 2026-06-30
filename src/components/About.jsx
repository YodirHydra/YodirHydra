import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaAward, FaCode, FaGraduationCap } from 'react-icons/fa';

const STATS = [
  { label: 'CTF Challenges Solved', value: '150+', icon: FaAward, color: 'text-accentCyan' },
  { label: 'Tech Stack Projects', value: '12+', icon: FaCode, color: 'text-accentBlue' },
  { label: 'Certifications Earned', value: '8+', icon: FaGraduationCap, color: 'text-accentPurple' },
];

const TIMELINE = [
  {
    year: '2023 - Present',
    title: 'Computer Science & Engineering Student',
    org: 'University (CSE Undergrad)',
    description: 'Focusing on database architectures, algorithms, networking foundations, and computer system security protocols.',
  },
  {
    year: '2024',
    title: 'Cybersecurity & CTF Path',
    org: 'HackTheBox / TryHackMe / Local CTFs',
    description: 'Active practice in cryptography, reverse engineering, web exploitation, forensics, and Linux privilege escalation.',
  },
  {
    year: '2024 - 2025',
    title: 'Web App Engineering',
    org: 'Self-Directed / Labs',
    description: 'Built multiple database-driven full stack React applications, integrated external APIs, and secured user inputs.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">01.</span>About Me
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Biography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 flex flex-col gap-6 text-left"
        >
          <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-accentCyan">
              <FaUser size={18} />
              <h3 className="font-display font-semibold text-lg">Cyber Profile & Bio</h3>
            </div>
            
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
              Hello! I'm Mohammad Badol, a Computer Science & Engineering student with a deep fascination for cryptography, cybersecurity systems, and modern full-stack web applications. I focus on securing endpoints, auditing source structures, and researching the intersection of AI with defense algorithms.
            </p>
            
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
              As an active CTF competitor, I spend my time solving security labs and exploring kernel configurations, scripting automation engines, and strengthening network defenses. I believe that constructing highly robust software requires thinking like a designer, architect, and auditor simultaneously.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="glass-panel glass-panel-hover rounded-2xl p-4 flex flex-col items-center text-center justify-center group"
              >
                <stat.icon className={`text-xl mb-2 ${stat.color} group-hover:scale-110 transition-transform`} />
                <span className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Timeline Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-5 flex flex-col text-left"
        >
          <div className="glass-panel rounded-2xl p-6 md:p-8 h-full">
            <h3 className="font-display font-semibold text-lg text-accentPurple mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentPurple animate-ping" />
              <span>Key Milestones</span>
            </h3>

            {/* Vertical Timeline Nodes */}
            <div className="relative pl-6 border-l border-white/10 flex flex-col gap-8">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-bgPrimary border-2 border-accentPurple group-hover:border-accentCyan transition-colors duration-300 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                  
                  <span className="font-mono text-xs text-accentCyan font-medium block mb-1">
                    {item.year}
                  </span>
                  <h4 className="font-display font-semibold text-sm text-gray-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono block mb-2 uppercase">
                    {item.org}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
