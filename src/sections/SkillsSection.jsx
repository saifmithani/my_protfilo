import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Wrench, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

const CATEGORY_ICONS = {
  frontend: Code,
  backend: Terminal,
  database: Database,
  tools: Wrench,
};

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-28 px-6 bg-[#0c0c0f] relative overflow-hidden border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                04 // TECHNICAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-zinc-100 tracking-tight">
              INTERACTIVE TECH WALL
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            No fake percentage bars. Hover over any technology to view how I actually apply it in software development.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[cat.id] || Terminal;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                className="p-8 rounded-2xl bg-[#13131a] border border-white/5 hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-zinc-100">{cat.title}</h3>
                        <p className="text-xs font-sans text-zinc-400">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid Pill List */}
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => {
                      const isHovered = activeSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          data-cursor={skill.name}
                          className={`relative group px-4 py-2.5 rounded-xl border text-xs font-mono transition-all duration-200 cursor-pointer ${
                            isHovered
                              ? 'bg-cyan-500/15 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                              : 'bg-white/[0.03] border-white/10 text-zinc-300 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="font-semibold">{skill.name}</span>
                          </div>

                          {/* Hover Popover Tooltip Note */}
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              className="absolute bottom-full left-0 mb-2 w-64 p-3 rounded-lg bg-zinc-900 border border-cyan-400/40 text-[11px] font-sans text-zinc-200 shadow-2xl z-30 pointer-events-none"
                            >
                              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] font-bold uppercase mb-1">
                                <Sparkles className="w-3 h-3" />
                                <span>USAGE NOTE</span>
                              </div>
                              <p className="leading-snug text-zinc-300">{skill.note}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Status footer */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>CATEGORY // {cat.title}</span>
                  <span className="text-cyan-400">{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
