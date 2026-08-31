import React from 'react';
import { motion } from 'framer-motion';
import { WHY_WORK_ITEMS } from '../data/whyWork';
import { FileCode, Smartphone, Sparkles, Cpu, MessageSquare, Target } from 'lucide-react';

export default function WhyWorkWithMe() {
  const getIcon = (name) => {
    switch (name) {
      case 'FileCode': return <FileCode className="w-6 h-6 text-sky-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-pink-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'Target': return <Target className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/40">
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
              VALUE PROPOSITION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Why Work With Me?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            Principles that guide my software development process and client collaborations.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-zinc-900/60 border border-white/10 p-7 backdrop-blur-xl hover:border-sky-500/40 transition-all shadow-xl group"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6 group-hover:scale-105 group-hover:bg-sky-500/10 transition-all">
                {getIcon(item.iconName)}
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
