import React from 'react';
import { PROFILE } from '../config/profile';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const hasGithub = Boolean(PROFILE.contact.github && PROFILE.contact.github.trim() !== '');
  const hasLinkedin = Boolean(PROFILE.contact.linkedin && PROFILE.contact.linkedin.trim() !== '');
  const hasInstagram = Boolean(PROFILE.contact.instagram && PROFILE.contact.instagram.trim() !== '');

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center text-white font-display font-bold text-sm shadow-md">
                SM
              </div>
              <span className="font-display font-bold text-xl text-white">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-xs font-mono text-sky-400 mb-2">
              {PROFILE.title}
            </p>
            <p className="text-zinc-400 text-sm max-w-sm">
              "{PROFILE.tagline}"
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#home" className="text-zinc-400 hover:text-white transition-colors">HOME</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">ABOUT</a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">SKILLS</a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">PROJECTS</a>
            <a href="#experience" className="text-zinc-400 hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">CONTACT</a>
          </div>

          {/* Social Icons (Only if configured) */}
          <div className="flex items-center gap-3">
            {hasGithub && (
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasLinkedin && (
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {hasInstagram && (
              <a
                href={PROFILE.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {currentYear} Saif Mithani. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-sky-400 transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
