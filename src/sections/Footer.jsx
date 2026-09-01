import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 bg-[#FFFFFF] border-t border-[#E5E5E5] text-[#555555] font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[#111111] font-display font-bold text-base flex items-center gap-2 justify-center md:justify-start">
            <span className="text-blue-600">✦</span>
            <span>SAIF MITHANI</span>
          </div>
          <p className="text-[#555555]">FULL STACK WEB DEVELOPER & B.TECH STUDENT</p>
        </div>

        {/* Center: Dynamic Availability Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} SAIF MITHANI</span>
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            aria-label="Scroll back to top"
            className="p-2 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#111111] hover:text-blue-600 hover:border-blue-600 transition-colors shadow-subtle"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
