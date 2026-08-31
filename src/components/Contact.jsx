import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../config/profile';
import { Mail, Linkedin, Github, Instagram, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const hasLinkedIn = Boolean(PROFILE.contact.linkedin && PROFILE.contact.linkedin.trim() !== '');
  const hasEmail = Boolean(PROFILE.contact.email && PROFILE.contact.email.trim() !== '');

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: CTA Header & Social Action Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-start text-left justify-between"
          >
            <div>
              {/* Section Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-sky-400" />
                <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Have an Idea?
              </h2>

              <p className="text-xl sm:text-2xl text-sky-400 font-display font-semibold mb-6">
                Let's turn it into something real.
              </p>

              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                Whether you need a modern business website, a React web app, or full-stack software development, feel free to reach out.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5 w-full max-w-sm mb-8">
                {hasEmail ? (
                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    data-cursor="EMAIL"
                    className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white font-mono text-sm hover:border-sky-500/40 hover:bg-zinc-800 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-sky-400" />
                      <span>{PROFILE.contact.email}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-500 font-mono text-sm flex items-center gap-3">
                    <Mail className="w-5 h-5 opacity-40" />
                    <span>Email Coming Soon</span>
                  </div>
                )}

                {hasLinkedIn ? (
                  <a
                    href={PROFILE.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LINKEDIN"
                    className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white font-mono text-sm hover:border-indigo-500/40 hover:bg-zinc-800 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-indigo-400" />
                      <span>Connect on LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ) : (
                  <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-zinc-500 font-mono text-sm flex items-center gap-3">
                    <Linkedin className="w-5 h-5 opacity-40" />
                    <span>LinkedIn Coming Soon</span>
                  </div>
                )}
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10 text-xs font-mono text-zinc-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for freelance opportunities & projects</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl bg-zinc-900/80 border border-white/15 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl relative"
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Message Submitted!
                </h3>
                <p className="text-zinc-300 text-sm max-w-md mb-6 leading-relaxed">
                  Thanks! The contact form is currently in demo mode. You can also reach me directly at <span className="text-sky-400 font-mono">{PROFILE.contact.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Business Website', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/10 text-xs font-mono text-white hover:bg-white/20 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  Send A Direct Message
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border ${
                      errors.name ? 'border-red-500/80' : 'border-white/10 focus:border-sky-400'
                    } text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs font-mono mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border ${
                      errors.email ? 'border-red-500/80' : 'border-white/10 focus:border-sky-400'
                    } text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-mono mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border border-white/10 text-white text-sm font-sans focus:border-sky-400 focus:outline-none transition-all"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="React Web Application">React Web Application</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Dashboard / Admin Panel">Dashboard / Admin Panel</option>
                    <option value="Python / Java Project">Python / Java Project</option>
                    <option value="Website Improvements">Website Improvements</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Project Details / Message *
                  </label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, goals, or timeline..."
                    className={`w-full px-4 py-3.5 rounded-2xl bg-zinc-950 border ${
                      errors.message ? 'border-red-500/80' : 'border-white/10 focus:border-sky-400'
                    } text-white text-sm font-sans placeholder-zinc-600 focus:outline-none transition-all resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs font-mono mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Demo notice note per spec */}
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300">
                  Notice: The form is currently operating in demo mode.
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-cursor="SEND"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-display font-bold text-sm hover:from-sky-400 hover:to-indigo-500 transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
