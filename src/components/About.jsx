import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../config/profile';
import { Code, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-8 h-[1px] bg-sky-400" />
          <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase">
            ABOUT ME
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Story & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              {PROFILE.about.heading}
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              {PROFILE.about.p1}
            </p>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {PROFILE.about.p2}
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-sm font-medium text-zinc-200">Modern Frontend & React</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm font-medium text-zinc-200">Backend & API Integrations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-sm font-medium text-zinc-200">MySQL & Database Schemas</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-medium text-zinc-200">Clean & Scalable Code</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Authentic Metric Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 gap-5"
          >
            {PROFILE.metrics.map((metric, idx) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl bg-zinc-900/60 border border-white/10 p-6 backdrop-blur-md hover:border-sky-500/30 transition-all shadow-xl group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-1 group-hover:text-sky-400 transition-colors">
                      {metric.value}
                    </div>
                    <div className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
                      {metric.label}
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all">
                    {idx === 0 && <Code className="w-6 h-6" />}
                    {idx === 1 && <Cpu className="w-6 h-6" />}
                    {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  </div>
                </div>

                {/* Subtle Hover Gradient Light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-colors" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
