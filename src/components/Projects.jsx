import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ExternalLink, Github, Sparkles, CheckCircle, ArrowUpRight, Cpu, Layers } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
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
              FEATURED WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Crafted Software Products.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            A showcase of web applications built with modern engineering practices, clean user interfaces, and intuitive user experiences.
          </motion.p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                data-cursor="VIEW PROJECT →"
                className="relative rounded-3xl bg-zinc-900/70 border border-white/10 overflow-hidden backdrop-blur-2xl hover:border-sky-500/40 transition-all duration-300 shadow-2xl group"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
                  
                  {/* Left/Right Text Content */}
                  <div className={`lg:col-span-7 flex flex-col items-start ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    
                    {/* Header Metadata */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-sky-400 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                        PROJECT {project.number}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 group-hover:text-sky-300 transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Highlighted Feature Checklist */}
                    {project.features && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 w-full">
                        {project.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                            <span className="text-xs text-zinc-300 font-medium">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-xl bg-zinc-950/80 border border-white/10 text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-2 border-t border-white/10 w-full sm:w-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="OPEN LINK"
                        className="px-6 py-3 rounded-full bg-white text-black font-display font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md flex items-center gap-2 group/btn"
                      >
                        <span>View Live Project</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="GITHUB"
                          className="px-5 py-3 rounded-full bg-zinc-950 border border-white/15 text-white font-mono text-xs hover:bg-zinc-800 transition-all flex items-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Visual Preview / Showcase Window */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                      
                      {/* Fake Browser Window Header */}
                      <div className="px-4 py-3 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 truncate max-w-[180px]">
                          {project.url.replace('https://', '')}
                        </div>
                      </div>

                      {/* Mockup Display Box */}
                      <div className="aspect-[16/10] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-sky-500/20 group-hover:rotate-6 transition-transform">
                          {project.id === 'inventra' ? (
                            <Cpu className="w-7 h-7" />
                          ) : (
                            <Layers className="w-7 h-7" />
                          )}
                        </div>

                        <h4 className="font-display font-bold text-xl text-white mb-1">
                          {project.name}
                        </h4>

                        <span className="text-xs font-mono text-sky-400 mb-4">
                          {project.badge || 'Production App'}
                        </span>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4"
                        >
                          <span>Launch Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                      </div>

                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
