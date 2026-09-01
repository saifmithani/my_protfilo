import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import PlaygroundSection from './sections/PlaygroundSection';
import JourneySection from './sections/JourneySection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#FAFAFA] text-[#111111] min-h-screen relative font-sans selection:bg-blue-600/15 selection:text-blue-900">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <PlaygroundSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
