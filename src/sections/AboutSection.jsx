import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Cpu, BookOpen, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-[#0c0c0f] relative overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-8 h-[1px] bg-cyan-400" />
          <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
            02 // ABOUT THE DEVELOPER
          </span>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Large Headline & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-zinc-100 leading-tight"
            >
              "{PROFILE.about.statement}"
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-zinc-400 font-sans text-base sm:text-lg leading-relaxed font-light"
            >
              {PROFILE.about.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Core Tech Pill Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                CORE TOOLKIT
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript", "Python", "Java", "HTML/CSS", "MySQL", "REST APIs", "Git & GitHub"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Status & Context Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Currently Building */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#14141a] border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">CURRENTLY BUILDING</span>
              </div>
              <p className="text-sm font-sans text-zinc-200 font-medium">
                {PROFILE.about.currentlyBuilding}
              </p>
            </motion.div>

            {/* Card 2: Currently Learning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#14141a] border border-white/5 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-amber-400 mb-2">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">CURRENTLY LEARNING</span>
              </div>
              <p className="text-sm font-sans text-zinc-200 font-medium">
                {PROFILE.about.currentlyLearning}
              </p>
            </motion.div>

            {/* Card 3: Based In India & Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#14141a] border border-white/5 hover:border-white/15 transition-all duration-300 grid grid-cols-2 gap-4"
            >
              <div>
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase">LOCATION</span>
                </div>
                <p className="text-sm font-sans text-zinc-200 font-semibold">{PROFILE.about.basedIn}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sky-400 mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase">DEGREE</span>
                </div>
                <p className="text-sm font-sans text-zinc-200 font-semibold">B.Tech Student</p>
              </div>
            </motion.div>

            {/* Real Quote / Philosophy snippet */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-zinc-900/40 border border-cyan-500/20 text-xs font-mono text-cyan-200/90 leading-relaxed"
            >
              "Good code is self-explanatory, maintainable, and built with clear purpose."
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
