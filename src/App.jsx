import React, { useState } from 'react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Services from './components/Services';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import CodeShowcase from './components/CodeShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-sky-500/30 selection:text-sky-200 relative font-sans">
      {/* Fast Cinematic Entrance Loader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Top Viewport Scroll Progress Line */}
      <ScrollProgress />

      {/* Desktop Dynamic Custom Cursor */}
      <CustomCursor />

      {/* Ambient Gradient Blobs, Grid Pattern & Noise */}
      <BackgroundEffects />

      {/* Main Layout Layers */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Services />
        <WhyWorkWithMe />
        <CodeShowcase />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
