import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Sparkles, Circle } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { PROFILE } from '../data/profile';

export default function HeroSection() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('');

  // Track live IST time for technical vibe
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTime(now.toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Parallax on mouse move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (left + width / 2)) / (width / 2);
    const y = (e.clientY - (top + height / 2)) / (height / 2);
    setMousePos({ x, y });
  };

  // Scroll animations
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const yOffset = useTransform(scrollY, [0, 400], [0, 100]);
  const scaleText = useTransform(scrollY, [0, 500], [1, 0.95]);

  const nameLetters = "SAIF MITHANI".split("");

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Animated Tech Grid & Soft Ambient Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), calc(-50% + ${mousePos.y * 25}px))`
        }}
      />

      {/* Top Technical Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-zinc-500 uppercase border-b border-white/5 pb-4 z-10"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300 font-semibold">{PROFILE.heroDetails.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LOC: {PROFILE.heroDetails.location} — {time || '12:00 IST'}</span>
          <span>LAT: 20.5937° N, 78.9629° E</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>{PROFILE.heroDetails.discipline}</span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Content */}
      <motion.div
        style={{ opacity, y: yOffset, scale: scaleText }}
        className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-start justify-center z-10"
      >
        {/* Discipline Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-cyan-300 font-mono text-xs mb-8"
        >
          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>FULL STACK DEVELOPER & B.TECH STUDENT</span>
        </motion.div>

        {/* Display Typography: Letter-by-Letter Reveal */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-extrabold tracking-tight text-zinc-100 leading-[0.95] mb-8 select-none flex flex-wrap gap-x-4">
          {nameLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.7,
                delay: 0.4 + index * 0.04,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block hover:text-cyan-400 transition-colors duration-300"
              style={{
                transform: `translate3d(${mousePos.x * (index % 2 === 0 ? 8 : -8)}px, ${mousePos.y * 6}px, 0)`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Natural Developer Persona Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-2xl text-lg sm:text-xl text-zinc-400 font-sans font-light leading-relaxed mb-10"
        >
          {PROFILE.tagline}
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton dataCursor="EXPLORE →">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-cyan-400 text-zinc-950 font-mono text-xs font-bold tracking-wider hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton dataCursor="TALK">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/15 text-zinc-200 font-mono text-xs font-medium tracking-wider hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-300"
            >
              LET'S TALK
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Hero Bottom Bar & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 pt-6 border-t border-white/5 z-10"
      >
        <div className="flex items-center gap-4">
          <span className="text-cyan-400 font-bold">// 01</span>
          <span className="hidden sm:inline text-zinc-400">REACT • PYTHON • JAVA • REST APIs • MYSQL</span>
        </div>

        {/* Animated Scroll Indicator */}
        <a
          href="#about"
          className="flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors group"
          data-cursor="SCROLL"
        >
          <span className="text-[11px] tracking-widest uppercase">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-center justify-center p-1 group-hover:border-cyan-400/50"
          >
            <div className="w-1 h-2 rounded-full bg-cyan-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
