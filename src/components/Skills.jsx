import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaDatabase, FaPython, 
  FaCode, FaTerminal, FaShieldAlt, FaGitAlt, FaLinux, FaBrain, FaServer, FaMicrochip 
} from 'react-icons/fa';

// Skills grouped into the requested 6 categories
const SKILLS_DATA = [
  {
    category: 'Frontend',
    accentColor: 'text-accentCyan',
    glowColor: 'bg-accentCyan',
    icon: FaReact,
    skills: [
      { name: 'React (Vite)', level: 4, icon: FaReact },
      { name: 'Tailwind CSS', level: 5, icon: FaCss3Alt },
      { name: 'JavaScript', level: 4, icon: FaJsSquare },
      { name: 'HTML5 & CSS3', level: 5, icon: FaHtml5 },
    ]
  },
  {
    category: 'Backend',
    accentColor: 'text-accentBlue',
    glowColor: 'bg-accentBlue',
    icon: FaServer,
    skills: [
      { name: 'Node.js', level: 3, icon: FaNodeJs },
      { name: 'Express.js', level: 3, icon: FaNodeJs },
      { name: 'SQL Databases', level: 4, icon: FaDatabase },
      { name: 'MongoDB', level: 3, icon: FaDatabase },
    ]
  },
  {
    category: 'Programming',
    accentColor: 'text-accentPurple',
    glowColor: 'bg-accentPurple',
    icon: FaCode,
    skills: [
      { name: 'Python', level: 4, icon: FaPython },
      { name: 'C++', level: 3, icon: FaCode },
      { name: 'Java', level: 3, icon: FaCode },
      { name: 'Bash Scripting', level: 4, icon: FaTerminal },
    ]
  },
  {
    category: 'Cybersecurity',
    accentColor: 'text-accentCyan',
    glowColor: 'bg-accentCyan',
    icon: FaShieldAlt,
    skills: [
      { name: 'CTF Playing', level: 4, icon: FaShieldAlt },
      { name: 'Cryptography', level: 3, icon: FaShieldAlt },
      { name: 'Pentesting Labs', level: 3, icon: FaShieldAlt },
      { name: 'Linux Security', level: 4, icon: FaLinux },
    ]
  },
  {
    category: 'Tools',
    accentColor: 'text-accentBlue',
    glowColor: 'bg-accentBlue',
    icon: FaTerminal,
    skills: [
      { name: 'Linux (Kali)', level: 4, icon: FaLinux },
      { name: 'Git & GitHub', level: 4, icon: FaGitAlt },
      { name: 'Nmap & Burp', level: 3, icon: FaTerminal },
      { name: 'VS Code & CLI', level: 5, icon: FaCode },
    ]
  },
  {
    category: 'AI & IoT',
    accentColor: 'text-accentPurple',
    glowColor: 'bg-accentPurple',
    icon: FaBrain,
    skills: [
      { name: 'Prompt Eng.', level: 4, icon: FaBrain },
      { name: 'OpenAI API', level: 3, icon: FaBrain },
      { name: 'IoT Hardware', level: 3, icon: FaMicrochip },
    ]
  }
];

// 5-segment glowing indicator block
const LevelIndicator = ({ level, glowColor }) => {
  return (
    <div className="flex gap-1 items-center select-none ml-auto shrink-0">
      {[1, 2, 3, 4, 5].map((val) => (
        <span
          key={val}
          className={`w-1 h-3 rounded-[1px] transition-all duration-700 ${
            val <= level 
              ? `${glowColor} shadow-[0_0_8px_rgba(0,229,255,0.4)]`
              : 'bg-white/10'
          }`}
          style={{
            // Dynamic box shadow based on active level and accent color
            boxShadow: val <= level ? `0 0 8px var(--glow-shadow)` : 'none',
            '--glow-shadow': glowColor.includes('cyan') ? 'rgba(0, 229, 255, 0.4)' : 
                             glowColor.includes('blue') ? 'rgba(91, 140, 255, 0.4)' : 
                                                          'rgba(124, 58, 237, 0.4)'
          }}
        />
      ))}
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">02.</span>Skills Matrix
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Grid of Categories */}
      <div className="flex flex-col gap-12">
        {SKILLS_DATA.map((cat) => (
          <div key={cat.category} className="text-left">
            
            {/* Category Header */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 select-none"
            >
              <cat.icon className={`text-xl ${cat.accentColor}`} />
              <h3 className="font-display font-bold text-lg md:text-xl text-white tracking-wide">
                {cat.category}
              </h3>
              <div className="h-[1px] w-12 bg-white/5" />
            </motion.div>

            {/* Grid of Tiles inside Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cat.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-panel group p-4 rounded-xl flex items-center gap-3 transition-all duration-300 border border-white/5 hover:border-accentCyan/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.04)]"
                >
                  {/* Skill Icon */}
                  <div className={`p-2.5 rounded-lg bg-white/[0.02] border border-white/5 ${cat.accentColor} group-hover:bg-white/[0.04] transition-colors shrink-0`}>
                    <skill.icon size={16} />
                  </div>

                  {/* Skill Details */}
                  <div className="flex items-center justify-between w-full min-w-0 gap-2">
                    <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                      {skill.name}
                    </span>
                    <LevelIndicator level={skill.level} glowColor={cat.glowColor} />
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
