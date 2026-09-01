import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Database, Wrench, ArrowRight, Sparkles } from 'lucide-react';
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
    <section id="skills" className="py-28 px-6 bg-[#FFFFFF] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              <span className="text-xs font-mono font-semibold tracking-widest text-blue-600 uppercase">
                04 // TECHNICAL ARCHITECTURE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              TECHNICAL STACK & TOOLS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#555555] max-w-md">
            No artificial percentage bars. Hover over any skill to reveal how I practically apply it in production code.
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
                className="p-8 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 flex flex-col justify-between shadow-subtle"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-bold text-[#111111]">{cat.title}</h3>
                        <p className="text-xs font-sans text-[#555555]">{cat.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Skills List with Arrow Animations */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => {
                      const isHovered = activeSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onMouseLeave={() => setActiveSkill(null)}
                          data-cursor={skill.name}
                          className="group relative p-3 rounded-lg border border-[#E5E5E5] bg-white transition-all duration-200 cursor-pointer hover:border-blue-600 hover:shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isHovered ? 'bg-blue-600' : 'bg-[#888888]'}`} />
                              <span className={`text-xs font-mono font-bold transition-all duration-200 ${isHovered ? 'text-blue-600 translate-x-1' : 'text-[#111111]'}`}>
                                {skill.name}
                              </span>
                            </div>

                            <ArrowRight className={`w-3.5 h-3.5 text-blue-600 transition-all duration-200 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                          </div>

                          {/* Smooth Description Fade-In */}
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pt-2 text-[11px] font-sans text-[#555555] border-t border-[#E5E5E5] mt-2"
                              >
                                <p className="leading-relaxed font-normal">{skill.note}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Status Footer */}
                <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                  <span>CATEGORY // {cat.title}</span>
                  <span className="text-blue-600 font-bold">{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
