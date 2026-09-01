import React from 'react';
import { PROFILE } from '../data/profile';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 bg-[#08080a] border-t border-white/5 text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-zinc-200 font-display font-bold text-base flex items-center gap-2 justify-center md:justify-start">
            <span className="text-cyan-400">✦</span>
            <span>SAIF MITHANI</span>
          </div>
          <p className="text-zinc-400">FULL STACK WEB DEVELOPER & B.TECH STUDENT</p>
        </div>

        {/* Center: Dynamic Availability Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} SAIF MITHANI</span>
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            aria-label="Scroll back to top"
            className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
