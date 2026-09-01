import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Terminal } from 'lucide-react';
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

  // Scroll opacity/offset
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const yOffset = useTransform(scrollY, [0, 400], [0, 80]);

  const nameLetters = "SAIF MITHANI".split("");

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Background Subtle Light Grid */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />

      {/* Top Technical Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-widest text-[#888888] uppercase border-b border-[#E5E5E5] pb-4 z-10"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-[#111111] font-semibold">{PROFILE.heroDetails.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>LOC: {PROFILE.heroDetails.location} — {time || '12:00 IST'}</span>
          <span>LAT: 20.5937° N, 78.9629° E</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 font-semibold">
          <Terminal className="w-3.5 h-3.5" />
          <span>{PROFILE.heroDetails.discipline}</span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Content */}
      <motion.div
        style={{ opacity, y: yOffset }}
        className="max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-start justify-center z-10"
      >
        {/* Discipline Tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-blue-600 font-mono text-xs mb-8 shadow-subtle"
        >
          <Code2 className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-semibold">FULL STACK DEVELOPER • B.TECH STUDENT</span>
        </motion.div>

        {/* Display Typography: Letter-by-Letter Reveal */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-display font-extrabold tracking-tight text-[#111111] leading-[0.95] mb-6 select-none flex flex-wrap gap-x-4">
          {nameLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35 + index * 0.04,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="inline-block hover:text-blue-600 transition-colors duration-300"
              style={{
                transform: `translate3d(${mousePos.x * (index % 2 === 0 ? 6 : -6)}px, ${mousePos.y * 4}px, 0)`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Accent Drawing Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ duration: 0.8, delay: 0.75, ease: 'easeInOut' }}
          className="h-[3px] bg-blue-600 mb-8 rounded-full"
        />

        {/* Natural Developer Persona Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-2xl text-lg sm:text-xl text-[#555555] font-sans font-normal leading-relaxed mb-10"
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
              className="px-6 py-3.5 rounded-full bg-[#111111] text-[#FAFAFA] font-mono text-xs font-bold tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </MagneticButton>

          <MagneticButton dataCursor="TALK">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white border border-[#E5E5E5] text-[#111111] font-mono text-xs font-semibold tracking-wider hover:border-[#111111] transition-all duration-300 shadow-subtle"
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
        className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#888888] pt-6 border-t border-[#E5E5E5] z-10"
      >
        <div className="flex items-center gap-4">
          <span className="text-blue-600 font-bold">// 01</span>
          <span className="hidden sm:inline text-[#555555]">REACT • PYTHON • JAVA • REST APIs • MYSQL</span>
        </div>

        {/* Animated Scroll Indicator */}
        <a
          href="#about"
          className="flex items-center gap-2 text-[#555555] hover:text-blue-600 transition-colors group"
          data-cursor="SCROLL"
        >
          <span className="text-[11px] tracking-widest uppercase font-semibold">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-[#E5E5E5] flex items-center justify-center p-1 group-hover:border-blue-600 bg-white shadow-subtle"
          >
            <div className="w-1 h-2 rounded-full bg-blue-600" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
