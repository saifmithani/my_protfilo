import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { Globe, Code2, Layers, LayoutDashboard, Terminal, Wrench, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const getIcon = (name) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-sky-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-400" />;
      case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6 text-pink-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-amber-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-emerald-400" />;
      default: return <Code2 className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
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
              SERVICES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            What I Can Build For You.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            Tailored software development services for startups, businesses, brands, and custom software requirements.
          </motion.p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-zinc-900/50 border border-white/10 p-8 backdrop-blur-xl hover:border-sky-500/40 transition-all shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-colors">
                    {getIcon(item.iconName)}
                  </div>

                  <span className="font-mono text-2xl font-extrabold text-zinc-600 group-hover:text-sky-400 transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom CTA Arrow */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span>Inquire Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
