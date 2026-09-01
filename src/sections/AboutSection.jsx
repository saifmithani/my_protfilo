import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BookOpen, MapPin, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-8 h-[1px] bg-blue-600" />
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-600 uppercase">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#111111] leading-tight"
            >
              {PROFILE.about.statement}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-[#555555] font-sans text-base sm:text-lg leading-relaxed font-normal"
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
              className="pt-4 border-t border-[#E5E5E5]"
            >
              <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block mb-3 font-semibold">
                CORE TECHNICAL TOOLKIT
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript", "Python", "Java", "HTML/CSS", "MySQL", "REST APIs", "Git & GitHub"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-[#FAFAFA] border border-[#E5E5E5] text-xs font-mono text-[#111111] hover:border-blue-600 hover:text-blue-600 transition-colors shadow-subtle"
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
              className="p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 shadow-subtle group"
            >
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <Cpu className="w-4 h-4" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">CURRENTLY BUILDING</span>
              </div>
              <p className="text-sm font-sans text-[#111111] font-semibold">
                {PROFILE.about.currentlyBuilding}
              </p>
            </motion.div>

            {/* Card 2: Currently Learning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 shadow-subtle group"
            >
              <div className="flex items-center gap-3 text-amber-600 mb-2">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">CURRENTLY LEARNING</span>
              </div>
              <p className="text-sm font-sans text-[#111111] font-semibold">
                {PROFILE.about.currentlyLearning}
              </p>
            </motion.div>

            {/* Card 3: Based In India & Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 shadow-subtle grid grid-cols-2 gap-4"
            >
              <div>
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase">LOCATION</span>
                </div>
                <p className="text-sm font-sans text-[#111111] font-bold">{PROFILE.about.basedIn}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase">DEGREE</span>
                </div>
                <p className="text-sm font-sans text-[#111111] font-bold">B.Tech Student</p>
              </div>
            </motion.div>

            {/* Honest Technical Note */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl bg-blue-50/50 border border-blue-200 text-xs font-mono text-blue-900 leading-relaxed font-medium"
            >
              "Good software code is self-explanatory, maintainable, and built with clear purpose."
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
