import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaShieldAlt, FaCode } from 'react-icons/fa';

const PROJECT_CATEGORIES = ['All', 'Cybersecurity', 'Web Dev', 'Python/Tools'];

const PROJECTS = [
  {
    title: 'CyberSentinel Scanner',
    category: 'Cybersecurity',
    description: 'A local network vulnerability scanner and logging dashboard that audits ports, checks service versions, and evaluates potential security risks.',
    tags: ['Python', 'Socket API', 'Nmap', 'Flask', 'Chart.js'],
    github: 'https://github.com/badol-coder/cybersentinel-scanner',
    demo: '#',
    icon: FaShieldAlt,
    color: 'from-accentCyan to-accentBlue',
    shadowGlow: 'rgba(0, 229, 255, 0.15)',
    svgIllustration: (
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-accentCyan fill-none stroke-current" strokeWidth="1.5">
        <circle cx="50" cy="50" r="35" strokeDasharray="4 4" className="animate-spin-slow" />
        <circle cx="50" cy="50" r="25" />
        <line x1="50" y1="15" x2="50" y2="85" />
        <line x1="15" y1="50" x2="85" y2="50" />
        <path d="M40 30 L50 20 L60 30" />
        <polygon points="50,42 58,58 42,58" className="fill-accentCyan/20" />
      </svg>
    )
  },
  {
    title: 'SecureVault Client',
    category: 'Web Dev',
    description: 'A client-side zero-knowledge file storage portal utilizing AES-256-GCM cryptography for in-browser file encryptions before storage uploading.',
    tags: ['React.js', 'Web Crypto API', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/badol-coder/secure-vault-client',
    demo: '#',
    icon: FaFolderOpen,
    color: 'from-accentPurple to-accentCyan',
    shadowGlow: 'rgba(124, 58, 237, 0.15)',
    svgIllustration: (
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-accentPurple fill-none stroke-current" strokeWidth="1.5">
        <rect x="25" y="35" width="50" height="40" rx="4" />
        <path d="M35 35 V25 A15 15 0 0 1 65 25 V35" />
        <circle cx="50" cy="55" r="5" className="fill-accentPurple/20" />
        <path d="M50 60 V65" />
      </svg>
    )
  },
  {
    title: 'CTF Crypto Helper',
    category: 'Python/Tools',
    description: 'An automated utility suite resolving classic cryptanalysis decodings, custom XOR bruteforcing, and base-encodings commonly encountered in CTF challenges.',
    tags: ['Python', 'CLI', 'Base64/Hex', 'XOR Solver', 'Regex'],
    github: 'https://github.com/badol-coder/ctf-crypto-helper',
    demo: '#',
    icon: FaCode,
    color: 'from-accentBlue to-accentPurple',
    shadowGlow: 'rgba(91, 140, 255, 0.15)',
    svgIllustration: (
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-accentBlue fill-none stroke-current" strokeWidth="1.5">
        <polyline points="20,30 40,50 20,70" />
        <line x1="45" y1="70" x2="75" y2="70" strokeWidth="3" className="animate-pulse" />
        <circle cx="70" cy="35" r="8" className="stroke-accentPurple" />
        <line x1="70" y1="43" x2="70" y2="55" />
      </svg>
    )
  },
  {
    title: 'Personal Dev Portfolio',
    category: 'Web Dev',
    description: 'The portfolio site itself. Designed with floating modular glass panels, particle vectors, layout transitions, and fluid spring physics.',
    tags: ['React', 'Vite', 'Tailwind v3', 'Framer Motion', 'tsParticles'],
    github: 'https://github.com/badol-coder/portfolio-v2',
    demo: '#',
    icon: FaCode,
    color: 'from-accentCyan to-accentPurple',
    shadowGlow: 'rgba(0, 229, 255, 0.15)',
    svgIllustration: (
      <svg viewBox="0 0 100 100" className="w-2/3 h-2/3 text-accentCyan fill-none stroke-current" strokeWidth="1.5">
        <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" />
        <polygon points="50,25 75,40 75,70 50,85 25,70 25,40" className="stroke-accentPurple/50" />
        <circle cx="50" cy="55" r="8" className="fill-accentCyan/10 stroke-accentCyan" />
      </svg>
    )
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = PROJECTS.filter(p => 
    activeTab === 'All' ? true : p.category === activeTab
  );

  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">03.</span>Projects
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 select-none">
        {PROJECT_CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-5 py-2 text-xs font-mono font-semibold tracking-wider uppercase rounded-full border transition-all cursor-pointer ${
              activeTab === tab 
                ? 'text-accentCyan border-accentCyan bg-accentCyan/5' 
                : 'text-gray-400 border-white/5 bg-white/[0.01] hover:text-white hover:border-white/15'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              key={project.title}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group relative"
              style={{
                '--project-glow': project.shadowGlow
              }}
            >
              {/* Outer Hover Glow Spotlight */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,_var(--project-glow),_transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Project Card Header Visual (Illustration/Mockup) */}
              <div className={`h-48 w-full bg-gradient-to-tr ${project.color} bg-opacity-10 flex items-center justify-center border-b border-white/5 relative overflow-hidden select-none`}>
                
                {/* Micro-mesh pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* Glowing vector design */}
                <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  {project.svgIllustration}
                </div>

                <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-widest text-white/40 px-2 py-1 rounded bg-black/40 border border-white/5">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                
                {/* Title */}
                <div className="flex items-center gap-2 mb-3">
                  <project.icon className="text-accentCyan text-lg" />
                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-accentCyan transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 flex-grow font-sans">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-medium text-gray-400 bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Buttons */}
                <div className="flex items-center gap-4 w-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wide text-gray-300 hover:text-white border-b border-transparent hover:border-white py-1 transition-all"
                  >
                    <FaGithub size={14} className="text-accentCyan" />
                    <span>Source Code</span>
                  </a>

                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-semibold tracking-wide text-gray-300 hover:text-white border-b border-transparent hover:border-white py-1 transition-all"
                    >
                      <FaExternalLinkAlt size={12} className="text-accentPurple" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
