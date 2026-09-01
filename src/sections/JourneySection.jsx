import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '../data/journey';

export default function JourneySection() {
  return (
    <section id="journey" className="py-28 px-6 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              <span className="text-xs font-mono font-semibold tracking-widest text-blue-600 uppercase">
                06 // TIMELINE & GROWTH
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              DEVELOPMENT MILESTONES
            </h2>
          </div>
          <p className="text-sm font-mono text-[#555555] max-w-md">
            Clear technical trajectory from core B.Tech Computer Science principles to building real full-stack web applications.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-[#E5E5E5] ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
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
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 group-hover:scale-125 transition-transform duration-300 shadow-subtle">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 max-w-3xl shadow-subtle">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600">{item.step}</span>
                    <span className="text-xs font-mono text-[#888888]">//</span>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#111111] uppercase">
                      {item.phase}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-white border border-[#E5E5E5] text-[10px] font-mono text-[#555555] font-medium">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold text-[#111111] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#555555] font-sans text-sm leading-relaxed">
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
