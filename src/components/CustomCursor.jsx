import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch/mobile
    const checkTouch = () => {
      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        setIsTouchDevice(true);
      }
    };
    checkTouch();

    if (isTouchDevice) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      setPos({ x: e.clientX, y: e.clientY });

      // Check hovered element data attribute or standard interactives
      const target = e.target.closest('[data-cursor], a, button, [role="button"]');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible]);

  // Smooth lerp follower position
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrame;
    let currentX = followerPos.x;
    let currentY = followerPos.y;

    const render = () => {
      currentX += (pos.x - currentX) * 0.2;
      currentY += (pos.y - currentY) * 0.2;
      setFollowerPos({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const hasText = Boolean(cursorText);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Primary Small Dark Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#111111] pointer-events-none z-50"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.1 }}
      />

      {/* Larger Outer Follower Ring / Badge for White Theme */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 flex items-center justify-center rounded-full transition-all duration-200 ease-out border ${
          hasText
            ? 'w-24 h-24 bg-[#111111] text-[#FAFAFA] border-[#111111] shadow-lg'
            : isHovered
            ? 'w-12 h-12 bg-blue-600/10 border-blue-600/50'
            : 'w-8 h-8 border-[#111111]/20 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${followerPos.x - (hasText ? 48 : isHovered ? 24 : 16)}px, ${
            followerPos.y - (hasText ? 48 : isHovered ? 24 : 16)
          }px, 0)`,
        }}
      >
        {hasText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-[#FAFAFA] uppercase px-2 text-center select-none leading-tight">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
