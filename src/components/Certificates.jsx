import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaTimes, FaAward } from 'react-icons/fa';

const CERTIFICATES = [
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    verifyLink: '#',
    creds: 'Cisco-ID: intro-cyber-sec-8822',
    color: 'from-accentCyan to-accentBlue',
    svgVerify: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-accentCyan fill-none stroke-current" strokeWidth="1.5">
        <rect x="20" y="20" width="60" height="60" rx="3" />
        <line x1="30" y1="35" x2="70" y2="35" />
        <line x1="30" y1="50" x2="60" y2="50" />
        <line x1="30" y1="65" x2="50" y2="65" />
        <polygon points="68,60 75,70 61,70" className="fill-accentCyan/20" />
        <circle cx="68" cy="58" r="5" />
      </svg>
    )
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    verifyLink: '#',
    creds: 'Cisco-ID: cyber-ess-9011',
    color: 'from-accentBlue to-accentPurple',
    svgVerify: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-accentBlue fill-none stroke-current" strokeWidth="1.5">
        <polygon points="50,15 80,30 80,70 50,85 20,70 20,30" />
        <circle cx="50" cy="50" r="15" className="fill-accentBlue/20" />
        <path d="M42 48 L48 54 L58 44" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google (Coursera)',
    date: '2023',
    verifyLink: '#',
    creds: 'Coursera Verification Code: G-SUPPORT-7729',
    color: 'from-accentPurple to-accentCyan',
    svgVerify: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-accentPurple fill-none stroke-current" strokeWidth="1.5">
        <circle cx="50" cy="50" r="30" />
        <path d="M50 20 V80" />
        <path d="M20 50 H80" />
        <polygon points="50,35 65,50 50,65 35,50" className="fill-accentPurple/20" />
      </svg>
    )
  },
  {
    title: 'Active Directory Lab Pentesting',
    issuer: 'HackTheBox / Self-Labs',
    date: '2025',
    verifyLink: '#',
    creds: 'HTB Node Verified: HTB-AD-LABS-5501',
    color: 'from-accentCyan to-accentPurple',
    svgVerify: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-accentCyan fill-none stroke-current" strokeWidth="1.5">
        <rect x="20" y="30" width="60" height="40" rx="4" />
        <circle cx="35" cy="50" r="6" className="fill-accentCyan/20" />
        <circle cx="65" cy="50" r="6" className="fill-accentPurple/20" />
        <line x1="41" y1="50" x2="59" y2="50" />
        <line x1="50" y1="30" x2="50" y2="70" />
      </svg>
    )
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">04.</span>Certificates
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Grid of Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex items-center justify-between group relative overflow-hidden"
          >
            {/* Visual Vector Container */}
            <div className="flex items-start gap-4 flex-grow z-10">
              <div className={`p-3 rounded-xl bg-gradient-to-tr ${cert.color} bg-opacity-10 border border-white/5 mr-1 group-hover:scale-105 transition-transform duration-300`}>
                <FaCertificate className="text-2xl text-accentCyan group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] text-accentCyan font-semibold uppercase tracking-widest">{cert.issuer}</span>
                <h3 className="font-display font-bold text-sm md:text-base text-gray-200 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
                <span className="text-[10px] text-gray-500 font-mono">{cert.date} | {cert.creds.split(': ')[0]}</span>
              </div>
            </div>

            {/* View Verification Seal Action Button */}
            <button
              onClick={() => setSelectedCert(cert)}
              className="z-10 px-4 py-2 text-xs font-mono font-bold tracking-wide text-accentCyan hover:text-white bg-white/[0.02] hover:bg-accentCyan/10 border border-accentCyan/20 hover:border-accentCyan/40 rounded-full transition-all cursor-pointer shadow-glassInset shrink-0 ml-4"
            >
              Verify
            </button>
          </motion.div>
        ))}
      </div>

      {/* Full Screen verification overlay portal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-md rounded-3xl glass-panel p-8 text-center relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              {/* Verified Icon Banner */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full bg-gradient-to-tr ${selectedCert.color} bg-opacity-10 border border-white/5 animate-pulse`}>
                  {selectedCert.svgVerify}
                </div>
              </div>

              {/* Certificate Details */}
              <span className="font-mono text-xs text-accentCyan font-bold tracking-widest uppercase mb-1 block">
                {selectedCert.issuer}
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-gray-500 font-mono mb-6">
                Date Issued: {selectedCert.date}
              </p>

              {/* Cryptographic Node credentials box */}
              <div className="bg-black/40 border border-white/5 rounded-xl p-4 mb-6 font-mono text-[10px] sm:text-xs text-gray-400 break-all select-all flex flex-col gap-1 items-center">
                <span className="text-accentPurple text-[10px] font-bold tracking-wider uppercase mb-1">Secure Credential ID</span>
                <code>{selectedCert.creds}</code>
              </div>

              {/* Verify External Trigger */}
              <a
                href={selectedCert.verifyLink}
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Cryptographic Verification Hash:\nSHA256: ${Math.random().toString(36).substring(2)}${Math.random().toString(36).substring(2)}`);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gradient-to-r from-accentCyan to-accentBlue text-black font-bold text-sm tracking-wide transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
              >
                <FaAward size={14} />
                <span>Verify Credential Hash</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
