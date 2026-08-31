import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY_MILESTONES } from '../data/journey';
import { GraduationCap, Code, Rocket } from 'lucide-react';

export default function Journey() {
  const getIcon = (idx) => {
    if (idx === 0) return <GraduationCap className="w-5 h-5 text-sky-400" />;
    if (idx === 1) return <Code className="w-5 h-5 text-indigo-400" />;
    return <Rocket className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase">
              MILESTONES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            My Development Journey.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            A timeline of academic progression, self-taught web engineering, and freelance software projects.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Glowing Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 transform md:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {JOURNEY_MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border border-sky-400/50 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:border-sky-400 transition-all z-10">
                    {getIcon(idx)}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] pl-16 md:pl-0 ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                    <div className="rounded-3xl bg-zinc-900/50 border border-white/10 p-6 backdrop-blur-xl hover:border-sky-500/30 transition-all shadow-xl">
                      
                      <span className="text-xs font-mono font-semibold text-sky-400 tracking-wider uppercase mb-2 block">
                        {item.period}
                      </span>

                      <h3 className="font-display text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="inline-block px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                        {item.highlight}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
