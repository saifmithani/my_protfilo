import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { label: 'WORK', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIMENTS', href: '#playground' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for indicator
      const sections = ['hero', 'about', 'projects', 'skills', 'playground', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2 text-zinc-100 font-display font-bold tracking-tight text-lg"
            data-cursor="SAIF"
          >
            <span className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300">✦</span>
            <span>SAIF</span>
            <span className="text-zinc-500 font-mono text-sm font-normal">/</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 transition-all duration-300 border ${
              scrolled
                ? 'bg-[#121216]/80 backdrop-blur-md border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                : 'bg-white/[0.03] border-white/5 backdrop-blur-[2px]'
            }`}
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-cursor={link.label}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-cyan-300 font-semibold' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-cyan-500/10 rounded-full border border-cyan-400/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <MagneticButton dataCursor="TALK →">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="group flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider rounded-full bg-zinc-900 border border-white/15 text-zinc-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 shadow-sm"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-200 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-30 bg-[#0a0a0c]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden border-b border-white/10"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                // NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="text-3xl font-display font-bold text-zinc-200 hover:text-cyan-400 flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-6 h-6 text-zinc-600" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-zinc-400 block">DIRECT CONTACT</span>
              <a
                href="mailto:saifmithani97@gmail.com"
                className="text-sm font-mono text-cyan-300 hover:underline block"
              >
                saifmithani97@gmail.com
              </a>
              <p className="text-xs text-zinc-500 font-mono">B.Tech Student & Full Stack Web Developer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
