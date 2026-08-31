import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, FileText, ExternalLink, Database, Cpu, Layers } from 'lucide-react';
import { PROFILE } from '../config/profile';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax transforms for Hero floating visual
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 30,
      y: (clientY / innerHeight - 0.5) * 30,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-6 shadow-sm shadow-emerald-500/10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{PROFILE.statusBadge}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Building Digital <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Experiences
            </span> That <br className="hidden sm:inline" />
            Actually Work.
          </motion.h1>

          {/* Subheading / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-8"
          >
            I’m <span className="text-white font-semibold">{PROFILE.name}</span>, a Full Stack Web Developer focused on creating modern, responsive and functional web applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              data-cursor="VIEW"
              className="px-7 py-3.5 rounded-full bg-white text-black font-display font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg shadow-white/10 hover:shadow-white/20 flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              data-cursor="HIRE"
              className="px-7 py-3.5 rounded-full bg-zinc-900 border border-white/15 text-white font-display font-semibold text-sm hover:bg-zinc-800 hover:border-white/30 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Let's Work Together</span>
            </a>

            {/* Secondary Link: Resume */}
            <a
              href={PROFILE.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="RESUME"
              className="px-4 py-2 text-xs font-mono text-zinc-400 hover:text-sky-400 transition-colors inline-flex items-center gap-1.5 ml-0 sm:ml-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating 3D Tech Visual Matrix */}
        <motion.div
          style={{
            x: mousePos.x,
            y: mousePos.y,
            transition: { type: "spring", stiffness: 100, damping: 30 }
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0"
        >
          {/* Central Code Card Container */}
          <div className="relative w-full max-w-md bg-zinc-950/80 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl shadow-sky-500/10">
            {/* Window Top Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                <span>developer.stack.js</span>
              </div>
            </div>

            {/* Code Block Snippet */}
            <div className="font-mono text-xs text-zinc-300 space-y-2 leading-relaxed">
              <div className="text-zinc-500">// B.Tech Developer Profile</div>
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-sky-300">saif</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">role:</span>{' '}
                <span className="text-emerald-300">"Full Stack Web Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">education:</span>{' '}
                <span className="text-amber-300">"B.Tech Student"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">status:</span>{' '}
                <span className="text-sky-400">"Open for Freelance Work"</span>,
              </div>
              <div className="pl-4">
                <span className="text-zinc-400">coreTech:</span> [
                <span className="text-sky-400">"React"</span>,{' '}
                <span className="text-indigo-400">"Python"</span>,{' '}
                <span className="text-amber-400">"Java"</span>,{' '}
                <span className="text-blue-400">"MySQL"</span>]
              </div>
              <div>{'}'};</div>
            </div>

            {/* Ambient Background Glow behind Card */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-violet-500/20 blur-xl -z-10 opacity-70" />
          </div>

          {/* Floating Technology Badges Floating Around Central Card */}

          {/* 1. React Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-sky-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono font-semibold text-sky-400"
          >
            <Code2 className="w-4 h-4 text-sky-400 animate-spin-slow" />
            <span>&lt; /&gt; React.js</span>
          </motion.div>

          {/* 2. Python Badge */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-8 -right-2 px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-amber-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono font-semibold text-amber-400"
          >
            <span className="font-extrabold text-amber-400">PY</span>
            <span>Python</span>
          </motion.div>

          {/* 3. Java Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-orange-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono font-semibold text-orange-400"
          >
            <span>☕ Java</span>
          </motion.div>

          {/* 4. MySQL Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-8 -right-4 px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-blue-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono font-semibold text-blue-400"
          >
            <Database className="w-4 h-4 text-blue-400" />
            <span>DB MySQL</span>
          </motion.div>

          {/* 5. REST API Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden sm:flex px-3.5 py-2 rounded-2xl bg-zinc-900/90 border border-emerald-500/30 backdrop-blur-md shadow-xl items-center gap-2 text-xs font-mono font-semibold text-emerald-400"
          >
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>API REST</span>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col items-center justify-center pt-8 pb-4"
      >
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-sky-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
