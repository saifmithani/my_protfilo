import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '../data/journey';
import { Milestone, CheckCircle2 } from 'lucide-react';

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 px-6 bg-[#0c0c0f] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                06 // TIMELINE & GROWTH
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-zinc-100 tracking-tight">
              DEVELOPMENT MILESTONES
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Clear technical trajectory from core B.Tech Computer Science principles to building real full-stack web applications.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
          {MILESTONES.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#0c0c0f] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(0,240,255,0.4)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#13131a] border border-white/5 hover:border-cyan-400/30 transition-all duration-300 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">{item.step}</span>
                    <span className="text-xs font-mono text-zinc-500">//</span>
                    <span className="text-xs font-mono font-semibold tracking-wider text-zinc-300 uppercase">
                      {item.phase}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-zinc-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-zinc-400 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
