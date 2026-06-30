import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API Post request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-white">
          <span className="text-accentCyan mr-2 font-mono">06.</span>Contact
        </h2>
        <div className="h-[1px] flex-grow bg-white/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex flex-col text-left gap-6"
        >
          <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-6">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2">Get In Touch</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                Have a cyber security challenge, a developer role, or want to discuss security architectures? Drop a line in the terminal form! I am typically available for collaborations.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-4 font-mono text-xs sm:text-sm">
              <a
                href="mailto:mohammed.badol.cse@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Primary email: mohammed.badol.cse@gmail.com\nFeel free to copy!");
                }}
                className="flex items-center gap-3 text-gray-300 hover:text-accentCyan transition-colors cursor-pointer group py-1"
              >
                <FaEnvelope className="text-accentCyan group-hover:scale-110 transition-transform" />
                <span>mohammed.badol.cse@gmail.com</span>
              </a>
            </div>

            <div className="h-[1px] bg-white/5" />

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4 select-none">Secure Channels</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-accentCyan/30 text-gray-400 hover:text-accentCyan transition-all hover:scale-115 cursor-pointer shadow-glassInset"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-accentBlue/30 text-gray-400 hover:text-accentBlue transition-all hover:scale-115 cursor-pointer shadow-glassInset"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-accentPurple/30 text-gray-400 hover:text-accentPurple transition-all hover:scale-115 cursor-pointer shadow-glassInset"
                  aria-label="Twitter/X"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Glass Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <form 
            onSubmit={handleSubmit}
            className="glass-panel rounded-2xl p-6 md:p-8 text-left flex flex-col gap-5 relative overflow-hidden"
          >
            {/* Input - Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="name" className="font-mono text-xs text-gray-400 font-semibold select-none">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentCyan transition-colors font-sans ${
                  errors.name ? 'border-red-500/50' : 'border-white/5'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 select-none">
                  <FaExclamationCircle size={10} /> {errors.name}
                </span>
              )}
            </div>

            {/* Inputs - Email & Subject Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="email" className="font-mono text-xs text-gray-400 font-semibold select-none">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentCyan transition-colors font-sans ${
                    errors.email ? 'border-red-500/50' : 'border-white/5'
                  }`}
                  placeholder="johndoe@email.com"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 select-none">
                    <FaExclamationCircle size={10} /> {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label htmlFor="subject" className="font-mono text-xs text-gray-400 font-semibold select-none">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentCyan transition-colors font-sans ${
                    errors.subject ? 'border-red-500/50' : 'border-white/5'
                  }`}
                  placeholder="Collaboration Project"
                />
                {errors.subject && (
                  <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 select-none">
                    <FaExclamationCircle size={10} /> {errors.subject}
                  </span>
                )}
              </div>
            </div>

            {/* Input - Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="message" className="font-mono text-xs text-gray-400 font-semibold select-none">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-3 rounded-xl bg-black/30 border text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accentCyan transition-colors resize-none font-sans ${
                  errors.message ? 'border-red-500/50' : 'border-white/5'
                }`}
                placeholder="Write your message here..."
              />
              {errors.message && (
                <span className="text-[10px] text-red-400 font-mono flex items-center gap-1 select-none">
                  <FaExclamationCircle size={10} /> {errors.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-accentCyan to-accentBlue text-black font-bold text-sm tracking-wide transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
              ) : (
                <>
                  <FaPaperPlane size={12} />
                  <span>Transmit Packet</span>
                </>
              )}
            </button>

            {/* Submission Status Alert */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-[#050816]/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center select-none"
              >
                <div className="w-12 h-12 rounded-full border-2 border-accentCyan flex items-center justify-center text-accentCyan mb-4 animate-bounce">
                  <FaPaperPlane size={18} />
                </div>
                <h4 className="font-display font-bold text-lg text-white mb-1">Transmission Succeeded</h4>
                <p className="text-xs text-gray-400 font-mono">
                  Message packet secured & processed. Badol will reply soon.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
