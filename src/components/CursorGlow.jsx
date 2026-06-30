import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile / touch
    const checkDevice = () => {
      const mobileQuery = window.matchMedia('(pointer: coarse)');
      setIsMobile(mobileQuery.matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 150); // Offset by half of glow width (300px / 2 = 150px)
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      style={{
        background: `radial-gradient(300px circle at var(--glow-x, 0px) var(--glow-y, 0px), rgba(0, 229, 255, 0.05), rgba(124, 58, 237, 0.03), transparent 80%)`,
      }}
      animate={{
        // Using custom CSS properties driven by spring values for performant rendering
        style: {
          '--glow-x': `${glowX.get()}px`,
          '--glow-y': `${glowY.get()}px`,
        }
      }}
      // Use useTransform / dynamic spring values via direct DOM node updates
      // Instead of constant state updates to guarantee 60fps
      onUpdate={() => {
        const glowEl = document.getElementById('global-cursor-glow');
        if (glowEl) {
          glowEl.style.setProperty('--glow-x', `${glowX.get()}px`);
          glowEl.style.setProperty('--glow-y', `${glowY.get()}px`);
        }
      }}
      id="global-cursor-glow"
    />
  );
}
