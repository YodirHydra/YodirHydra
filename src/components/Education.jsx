import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

const EDUCATION_DATA = [
  {
    degree: 'B.Sc. in Computer Science & Engineering (CSE)',
    institution: 'University of Computer Science & Technology',
    period: '2023 - Present',
    location: 'Dhaka, Bangladesh',
    cgpa: 'Ongoing Study',
    description: 'Specializing in computer network protocols, database models, information security, algorithms, and software architectures.',
    courses: ['Database Management Systems (DBMS)', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'Discrete Mathematics']
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Science',
    institution: 'National Science College',
    period: '2020 - 2022',
    location: 'Dhaka, Bangladesh',
    cgpa: 'GPA: 5.00 / 5.00',
    description: 'Completed college degree majoring in Physics, Chemistry, Higher Mathematics, and ICT.',
    courses: ['Physics & Labs', 'Chemistry', 'Higher Mathematics', 'Information & Communications Tech']
  },
  {
    degree: 'Secondary School Certificate (SSC) — Science',
    institution: 'Govt. High School',
    period: '2018 - 2020',
    location: 'Dhaka, Bangladesh',
    cgpa: 'GPA: 5.00 / 5.00',
    description: 'Completed schooling with a science focus, maintaining peak grades in Mathematics, General Science, and Computer Studies.',
    courses: ['General Science', 'Advanced Mathematics', 'Computer Science Basics']
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">05.</span>Education
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 sm:pl-8 border-l border-white/10 flex flex-col gap-10 text-left max-w-4xl mx-auto">
        {EDUCATION_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Glowing bullet point */}
            <div className="absolute -left-[38px] sm:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-[#050816] border-2 border-accentCyan flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:border-accentPurple transition-colors duration-300">
              <FaGraduationCap size={10} className="text-accentCyan group-hover:text-accentPurple transition-colors" />
            </div>

            {/* Glass panel container */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 relative">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-accentCyan transition-colors">
                    {item.degree}
                  </h3>
                  <span className="text-xs text-accentBlue font-semibold tracking-wide">
                    {item.institution}
                  </span>
                </div>
                <div className="flex flex-col md:items-end text-left md:text-right font-mono text-[10px] sm:text-xs">
                  <span className="text-accentPurple font-bold">{item.period}</span>
                  <span className="text-gray-500 flex items-center gap-1 mt-0.5"><FaMapMarkerAlt size={10} /> {item.location}</span>
                </div>
              </div>

              {/* CGPA Banner */}
              <div className="inline-block px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-xs text-gray-300 mb-4 select-none">
                <span className="text-accentCyan font-bold mr-1">Result:</span> {item.cgpa}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                {item.description}
              </p>

              {/* Core Courses / Modules tags */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mr-1 flex items-center gap-1 select-none"><FaBookmark size={8} /> Core Focus:</span>
                {item.courses.map((course) => (
                  <span
                    key={course}
                    className="text-[10px] font-mono text-gray-400 bg-white/[0.01] border border-white/[0.03] px-2 py-0.5 rounded"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
