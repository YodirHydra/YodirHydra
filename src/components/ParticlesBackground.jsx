import React, { useEffect, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Parallax DOM references
  const deepLayerRef = useRef(null);
  const midLayerRef = useRef(null);
  const nearLayerRef = useRef(null);

  useEffect(() => {
    // Check device capabilities
    const checkCapabilities = () => {
      const mobileQuery = window.matchMedia('(pointer: coarse)');
      setIsMobile(mobileQuery.matches);
    };

    checkCapabilities();
    window.addEventListener('resize', checkCapabilities);

    // Initialize tsParticles slim engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    if (isMobile) {
      return () => {
        window.removeEventListener('resize', checkCapabilities);
      };
    }

    // Parallax mouse tracker
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2); // range [-1, 1]
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2); // range [-1, 1]

      // Apply transformations to layers with varying speeds
      if (deepLayerRef.current) {
        deepLayerRef.current.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
      }
      if (midLayerRef.current) {
        midLayerRef.current.style.transform = `translate3d(${x * 25}px, ${y * 25}px, 0)`;
      }
      if (nearLayerRef.current) {
        nearLayerRef.current.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkCapabilities);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none bg-[#050816]">
      
      {/* 1. DEEP LAYER: Ambient Shifting Orbs */}
      <div 
        ref={deepLayerRef} 
        className="absolute inset-0 transition-transform duration-300 ease-out flex items-center justify-center"
      >
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] rounded-full bg-accentCyan/3 blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-accentPurple/3 blur-[150px] animate-pulse-slow pointer-events-none" />
      </div>

      {/* 2. MID LAYER: SVG Futuristic Tech Lines & Waves */}
      <div 
        ref={midLayerRef} 
        className="absolute inset-0 transition-transform duration-200 ease-out select-none opacity-20"
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full fill-none stroke-current text-white/5 floating-wave" preserveAspectRatio="xMidYMid slice">
          {/* Main digital pathway lines */}
          <path d="M 0,250 C 300,180 500,420 800,300 C 1100,180 1200,400 1440,320" className="tech-line-animate text-accentCyan" strokeWidth="1" />
          <path d="M 0,600 C 250,700 450,550 750,680 C 1050,810 1250,580 1440,650" className="tech-line-animate text-accentPurple" strokeWidth="1" />
          
          {/* Tech node coordinates markers */}
          <circle cx="800" cy="300" r="3" className="fill-accentCyan/40 stroke-accentCyan" />
          <line x1="800" y1="300" x2="800" y2="400" strokeDasharray="3 3" />
          <circle cx="750" cy="680" r="3" className="fill-accentPurple/40 stroke-accentPurple" />
          <line x1="750" y1="680" x2="750" y2="580" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* 3. NEAR LAYER: tsParticles AI Network Topology */}
      <div 
        ref={nearLayerRef} 
        className="absolute inset-0 transition-transform duration-100 ease-out"
      >
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10 pointer-events-none"
            options={{
              fullScreen: { enable: false },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: {
                    enable: !isMobile, // Disable mouse interaction on touch devices
                    mode: "grab",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 170,
                    links: {
                      opacity: 0.2,
                      color: "#00E5FF",
                    },
                  },
                },
              },
              particles: {
                color: {
                  value: ["#00E5FF", "#5B8CFF", "#7C3AED"],
                },
                links: {
                  color: "#5B8CFF",
                  distance: 130,
                  enable: true,
                  opacity: isMobile ? 0.04 : 0.08, // Subtle connections to avoid busy look
                  width: 0.75,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "out",
                  },
                  random: true,
                  speed: 0.4, // Slower movement for calm, luxurious feel
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1000,
                  },
                  value: isMobile ? 25 : 55, // Clean, spacious node placement
                },
                opacity: {
                  value: { min: 0.08, max: 0.25 },
                  animation: {
                    enable: true,
                    speed: 0.4,
                    sync: false,
                  },
                },
                shape: {
                  type: ["circle", "triangle"], // Mixed geometric nodes
                },
                size: {
                  value: { min: 1, max: 2.2 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>

    </div>
  );
}
