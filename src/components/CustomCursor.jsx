import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile / touch device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hovered element
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setIsHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else {
        const interactive = e.target.closest('a, button, input, textarea, [role="button"]');
        if (interactive) {
          setIsHovered(true);
          setCursorText('');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    if (!isMobile) {
      document.body.classList.add('custom-cursor-enabled');
      window.addEventListener('mousemove', onMouseMove);
    } else {
      document.body.classList.remove('custom-cursor-enabled');
    }

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] overflow-hidden">
      {/* Outer Expandable Ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-400/40 backdrop-blur-[2px] shadow-lg shadow-sky-500/20"
        animate={{
          x: position.x - (cursorText ? 48 : isHovered ? 24 : 12),
          y: position.y - (cursorText ? 48 : isHovered ? 24 : 12),
          width: cursorText ? 96 : isHovered ? 48 : 24,
          height: cursorText ? 96 : isHovered ? 48 : 24,
          scale: 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-bold tracking-tight text-white uppercase text-center px-2"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 shadow-sm shadow-sky-300"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 500,
          mass: 0.1,
        }}
      />
    </div>
  );
}
