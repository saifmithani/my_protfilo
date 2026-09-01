import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/profile';
import MagneticButton from '../components/MagneticButton';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center md:text-left">
        {/* Section Tag */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            07 // INITIATE CONTACT
          </span>
        </div>

        {/* Large Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-zinc-100 tracking-tight leading-[0.95] mb-6">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-amber-300">
              SOMETHING.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-sans text-zinc-400 max-w-xl font-light">
            Have a project, freelance opportunity, or technical discussion in mind? Drop me an email directly.
          </p>
        </motion.div>

        {/* Action Button & Email Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-16"
        >
          {/* Main Direct Email Action Button */}
          <MagneticButton dataCursor="EMAIL ME">
            <a
              href={`mailto:${PROFILE.contact.email}`}
              className="px-8 py-5 rounded-full bg-cyan-400 text-zinc-950 font-mono text-sm font-extrabold tracking-wider hover:bg-cyan-300 transition-all flex items-center gap-3 shadow-[0_0_35px_rgba(0,240,255,0.35)] group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </MagneticButton>

          {/* Copy Email Helper */}
          <button
            onClick={handleCopyEmail}
            data-cursor="COPY"
            className="px-6 py-4 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 font-mono text-xs font-medium hover:border-cyan-400/40 hover:text-cyan-300 transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'EMAIL COPIED TO CLIPBOARD!' : PROFILE.contact.email}</span>
          </button>
        </motion.div>

        {/* Social / Direct Link Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/5">
          
          <a
            href={`mailto:${PROFILE.contact.email}`}
            data-cursor="OPEN"
            className="p-6 rounded-2xl bg-[#121218] border border-white/5 hover:border-cyan-400/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="w-5 h-5 text-cyan-400" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">DIRECT EMAIL</span>
            <span className="text-sm font-mono font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
              {PROFILE.contact.email}
            </span>
          </a>

          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB →"
            className="p-6 rounded-2xl bg-[#121218] border border-white/5 hover:border-cyan-400/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Github className="w-5 h-5 text-cyan-400" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">SOURCE CODE</span>
            <span className="text-sm font-mono font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
              github.com/saifmithani
            </span>
          </a>

          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN →"
            className="p-6 rounded-2xl bg-[#121218] border border-white/5 hover:border-cyan-400/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <Linkedin className="w-5 h-5 text-cyan-400" />
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">PROFESSIONAL PROFILE</span>
            <span className="text-sm font-mono font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
              linkedin.com/in/saifmithani
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
