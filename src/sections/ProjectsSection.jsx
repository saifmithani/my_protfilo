import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import MagneticButton from '../components/MagneticButton';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-32 px-6 bg-[#FAFAFA] relative overflow-hidden border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-[#E5E5E5] pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              <span className="text-xs font-mono font-semibold tracking-widest text-blue-600 uppercase">
                03 // FEATURED WORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-tight">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#555555] max-w-md">
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
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Visual Preview Frame */}
                <div
                  className={`lg:col-span-7 group relative rounded-lg overflow-hidden bg-white border border-[#E5E5E5] hover:border-[#111111] transition-all duration-300 shadow-sm hover:shadow-card-hover ${
                    isEven ? '' : 'lg:col-start-6'
                  }`}
                  data-cursor="VIEW"
                >
                  {/* Browser Mockup Light Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] border-b border-[#E5E5E5] text-xs font-mono text-[#888888] select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] text-[#555555] truncate max-w-[220px] font-medium">
                      {project.url}
                    </span>
                    <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  {/* Interactive Screenshot & Layout Container */}
                  <div className="relative aspect-video w-full bg-[#FAFAFA] p-8 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                    
                    {/* Simulated Clean Light UI Graphic Layout */}
                    <div className="absolute inset-0 bg-light-grid opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-blue-50/20" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-semibold">
                          {project.type}
                        </span>
                        <span className="font-mono text-4xl font-extrabold text-[#E5E5E5] group-hover:text-blue-600 transition-colors">
                          {project.number}
                        </span>
                      </div>

                      <div className="my-auto space-y-3">
                        <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight group-hover:text-blue-600 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm font-sans text-[#555555] max-w-lg font-normal line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Bottom Live Demo Link */}
                      <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5]">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 group/link"
                        >
                          <span>LIVE DEMO</span>
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
                    <div className="flex items-center gap-3 text-xs font-mono text-blue-600 font-bold">
                      <span>PROJECT {project.number}</span>
                      <span className="text-[#888888]">//</span>
                      <span className="text-[#555555] font-normal">{project.type}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-[#555555] font-sans text-base leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#888888] uppercase tracking-widest block font-semibold">
                      KEY ARCHITECTURE FEATURES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-mono text-[#111111]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E5E5E5] text-xs font-mono text-[#111111] shadow-subtle"
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
                        className="px-5 py-2.5 rounded-full bg-[#111111] text-[#FAFAFA] font-mono text-xs font-bold tracking-wider hover:bg-blue-600 transition-all flex items-center gap-2 shadow-sm"
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
                          className="px-5 py-2.5 rounded-full bg-white border border-[#E5E5E5] text-[#111111] font-mono text-xs font-semibold tracking-wider hover:border-[#111111] transition-all flex items-center gap-2 shadow-subtle"
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
