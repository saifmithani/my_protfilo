import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';
import { Layout, Server, Database, Wrench, Sparkles, ChevronRight } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend': return <Layout className="w-5 h-5 text-sky-400" />;
      case 'backend': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'database': return <Database className="w-5 h-5 text-purple-400" />;
      case 'tools': return <Wrench className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-sky-400" />
            <span className="text-xs font-mono font-semibold tracking-widest text-sky-400 uppercase">
              TECHNICAL EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Skills & Technical Stack.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            Core technologies and development tools I use to design, build, and deploy full-stack web applications.
          </motion.p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-3xl bg-zinc-900/50 border border-white/10 p-7 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 group-hover:bg-white/10 transition-all">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Pills Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, x: 2 }}
                      className="p-3.5 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-sky-500/40 hover:bg-zinc-900/80 transition-all cursor-default group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-semibold text-white group-hover/skill:text-sky-400 transition-colors">
                          {skill.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover/skill:text-sky-400 group-hover/skill:translate-x-0.5 transition-all" />
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug font-normal">
                        {skill.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
