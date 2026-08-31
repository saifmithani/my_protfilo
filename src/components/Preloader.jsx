import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    // Keep intro under 1.8 seconds per spec
    const timer = setTimeout(() => {
      setIsPresent(false);
      if (onComplete) onComplete();
    }, 1700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white px-4"
        >
          {/* Logo / Name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center font-display font-bold text-xl text-white shadow-lg shadow-sky-500/20">
              SM
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Saif Mithani
            </span>
          </motion.div>

          {/* Thin line expansion */}
          <div className="w-48 h-[2px] bg-zinc-800 rounded-full overflow-hidden relative mb-4">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400"
            />
          </div>

          {/* Status Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xs font-mono tracking-widest text-zinc-400 uppercase"
          >
            Full Stack Web Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
