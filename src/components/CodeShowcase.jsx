import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PROFILE } from '../config/profile';
import { Terminal, Copy, Check, ExternalLink, Github, Play } from 'lucide-react';

export default function CodeShowcase() {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullCode = `const buildExperience = () => {
  return {
    developer: "Saif Mithani",
    education: "B.Tech Student",
    frontend: "React.js, JavaScript, Tailwind CSS",
    backend: "Python, Java, REST APIs",
    database: "MySQL, Firebase",
    mindset: "Build. Learn. Improve."
  };
};

console.log(buildExperience());`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCode.length) {
        setTypedText(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasGithubUrl = Boolean(PROFILE.contact.github && PROFILE.contact.github.trim() !== '');

  return (
    <section className="py-24 relative overflow-hidden">
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
              BEHIND THE INTERFACE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Code Architecture & Philosophy.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl font-normal"
          >
            A peek under the hood of how I structure clean, functional code and software systems.
          </motion.p>
        </div>

        {/* IDE Visual Presentation Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-zinc-950 border border-white/15 overflow-hidden shadow-2xl backdrop-blur-2xl"
        >
          {/* Top IDE Window Header */}
          <div className="px-6 py-4 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-2 pl-4 border-l border-white/10">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>buildExperience.js</span>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* IDE Content with Line Numbers & Typing effect */}
          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300 flex">
            
            {/* Line Numbers Column */}
            <div className="select-none text-zinc-600 pr-6 text-right border-r border-white/10 font-mono space-y-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code Typing Area */}
            <pre className="pl-6 space-y-1 font-mono text-left text-zinc-200">
              <code>{typedText}</code>
              <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
            </pre>

          </div>

          {/* Footer Action Bar */}
          <div className="px-6 py-4 bg-zinc-900/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Node.js v20.x • JavaScript ES6+</span>
            </div>

            {hasGithubUrl ? (
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="px-5 py-2.5 rounded-full bg-white text-black font-display font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub</span>
              </a>
            ) : (
              <div className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/15 text-zinc-400 font-mono text-xs flex items-center gap-2">
                <Github className="w-4 h-4 opacity-50" />
                <span>GitHub Coming Soon</span>
              </div>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
