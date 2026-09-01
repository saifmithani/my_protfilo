import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import MagneticButton from '../components/MagneticButton';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                03 // FEATURED WORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-zinc-100 tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Cinematic showcase of full-stack platforms and interactive web applications built with precision.
          </p>
        </div>

        {/* Alternating Asymmetric Project Showcase */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual Preview Frame */}
                <div
                  className={`lg:col-span-7 group relative rounded-2xl overflow-hidden bg-[#121218] border border-white/10 hover:border-cyan-400/40 transition-all duration-500 shadow-2xl ${
                    isEven ? '' : 'lg:col-start-6'
                  }`}
                  data-cursor="VIEW PROJECT"
                >
                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#181822] border-b border-white/5 text-xs font-mono text-zinc-500 select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-zinc-400 truncate max-w-[220px]">
                      {project.url}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Interactive Visual Graphic Preview Box */}
                  <div className="relative aspect-video w-full bg-[#0d0d12] p-8 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    
                    {/* Simulated App Screenshot Graphic UI */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-zinc-950 to-zinc-900 opacity-90" />
                    <div className="absolute inset-0 bg-tech-grid opacity-20" />

                    {/* App Overlay Graphic */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold">
                          {project.type}
                        </span>
                        <span className="font-mono text-4xl font-extrabold text-zinc-800 group-hover:text-cyan-500/30 transition-colors">
                          {project.number}
                        </span>
                      </div>

                      <div className="my-auto space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm font-sans text-zinc-300 max-w-lg line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Bottom Live Demo CTA Badge */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 group/link"
                        >
                          <span>LIVE APPLICATION DEMO</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-mono text-cyan-400">
                      <span className="font-bold">PROJECT {project.number}</span>
                      <span>//</span>
                      <span className="text-zinc-500">{project.type}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-zinc-100 tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-zinc-300 font-sans text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                      KEY ARCHITECTURE FEATURES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <MagneticButton dataCursor="OPEN →">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full bg-cyan-400 text-zinc-950 font-mono text-xs font-bold tracking-wider hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </MagneticButton>

                    {project.githubUrl && (
                      <MagneticButton dataCursor="GITHUB →">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/15 text-zinc-200 font-mono text-xs font-medium tracking-wider hover:border-white/30 hover:text-white transition-all flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE CODE</span>
                        </a>
                      </MagneticButton>
                    )}
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
