import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import ParticlesBackground from './components/ParticlesBackground';

const revealTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050816] text-white selection:bg-accentCyan/20 selection:text-accentCyan overflow-x-hidden">
      {/* Global Interactive Cursor Spotlight */}
      <CursorGlow />

      {/* Network Particle Nodes Background */}
      <ParticlesBackground />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Content Section Wrappers with reveal animations on scroll */}
      <main className="relative z-10 flex flex-col w-full">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <About />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <Skills />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <Projects />
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <Certificates />
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <Education />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={revealTransition}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
