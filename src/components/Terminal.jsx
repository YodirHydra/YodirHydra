import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Terminal scripting sequence constant
const TERMINAL_SEQUENCE = [
  { type: 'input', text: 'whoami' },
  { type: 'output', text: 'Mohammad Badol' },
  { type: 'input', text: 'cat interests.txt' },
  { type: 'output', text: 'Cybersecurity\nCTF (Capture The Flag)\nFull Stack Web Dev\nArtificial Intelligence' },
  { type: 'input', text: 'status' },
  { type: 'output', text: 'Active & Learning | CSE Student' },
];

export default function Terminal() {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-100px" });
  const [typedLines, setTypedLines] = useState([]);

  useEffect(() => {
    if (!isInView) return;

    let currentSequenceIndex = 0;
    let currentCharIndex = 0;
    let timer;

    const runSequence = () => {
      if (currentSequenceIndex >= TERMINAL_SEQUENCE.length) return;

      const currentItem = TERMINAL_SEQUENCE[currentSequenceIndex];

      if (currentItem.type === 'input') {
        // Typing effect
        if (currentCharIndex === 0) {
          // Add empty line for input
          setTypedLines((prev) => [...prev, { type: 'input', text: '' }]);
        }

        if (currentCharIndex < currentItem.text.length) {
          timer = setTimeout(() => {
            setTypedLines((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                type: 'input',
                text: currentItem.text.substring(0, currentCharIndex + 1),
              };
              return updated;
            });
            currentCharIndex++;
            runSequence();
          }, 60); // Typist speed
        } else {
          // Finished typing input, move to next item
          currentSequenceIndex++;
          currentCharIndex = 0;
          timer = setTimeout(runSequence, 300); // Delay before response
        }
      } else {
        // Instant output display
        setTypedLines((prev) => [...prev, { type: 'output', text: currentItem.text }]);
        currentSequenceIndex++;
        currentCharIndex = 0;
        timer = setTimeout(runSequence, 500); // Delay before typing next command
      }
    };

    timer = setTimeout(runSequence, 400);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <motion.div
      ref={terminalRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden glass-panel font-mono text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-gray-400 text-xs tracking-wide">bash — badol@cyber-node</div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal Content Area */}
      <div className="p-5 min-h-[220px] text-left leading-relaxed flex flex-col gap-2 overflow-y-auto">
        <div className="text-gray-500 text-xs mb-1 select-none">
          Last login: {new Date().toLocaleDateString()} on ttys001
        </div>

        {typedLines.map((line, idx) => (
          <div key={idx} className="whitespace-pre-line">
            {line.type === 'input' ? (
              <div className="flex items-center gap-1.5">
                <span className="text-accentCyan select-none">&gt;</span>
                <span className="text-gray-200">
                  {line.text}
                  {idx === typedLines.length - 1 && (
                    <span className="inline-block w-1.5 h-4 bg-accentCyan animate-pulse align-middle ml-0.5" />
                  )}
                </span>
              </div>
            ) : (
              <div className="text-gray-400 pl-4 py-0.5 border-l border-white/5 bg-white/[0.01] rounded-r-md">
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Empty shell state showing active cursor waiting for input */}
        {typedLines.length === 0 && (
          <div className="flex items-center gap-1.5">
            <span className="text-accentCyan select-none">&gt;</span>
            <span className="inline-block w-1.5 h-4 bg-accentCyan animate-pulse align-middle" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
