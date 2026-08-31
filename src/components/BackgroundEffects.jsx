import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Soft Ambient Glowing Blobs */}
      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Noise Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-30" />
    </div>
  );
}
