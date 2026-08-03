import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ReactPlayground from './components/ReactPlayground';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic Cursor Ambient Glow Follower */}
      <div
        className="mouse-light"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ReactPlayground />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
