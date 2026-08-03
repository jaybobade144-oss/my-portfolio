import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, Send, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Playground', href: '#playground' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleConfetti = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '12px 24px' : '20px 24px',
          transition: 'all 0.3s ease',
          background: isScrolled ? 'rgba(10, 5, 18, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(168, 85, 247, 0.15)' : '1px solid transparent',
        }}
      >
        <motion.div
          style={{
            scaleX,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--gradient-main)',
            transformOrigin: '0%',
            zIndex: 1001,
          }}
        />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--gradient-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
              color: '#ffffff'
            }}>
              <Code2 size={24} color="#ffffff" />
            </div>
            <span>JAY<span style={{ color: '#c084fc' }}>.BOBADE</span></span>
          </motion.a>

          {/* Desktop Nav Items */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    position: 'relative',
                    textDecoration: 'none',
                    color: isActive ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.95rem',
                    transition: 'color 0.2s ease',
                    padding: '6px 0',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#c084fc',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px #c084fc',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </motion.nav>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.a
              href="/Jay_Subhash_Bobade_Resume.pdf"
              download="Jay_Subhash_Bobade_Resume.pdf"
              onClick={handleConfetti}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              style={{
                padding: '10px 20px',
                fontSize: '0.875rem',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'none',
              }}
              className="desktop-cta btn-secondary"
            >
              <Download size={16} color="#ffffff" /> Resume
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.875rem',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'none',
              }}
              className="desktop-cta btn-primary"
            >
              <Send size={16} color="#ffffff" /> Hire Me
            </motion.a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'rgba(168, 85, 247, 0.15)',
                border: '1px solid rgba(192, 132, 252, 0.3)',
                color: '#ffffff',
                padding: '10px',
                borderRadius: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="mobile-menu-btn"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              background: 'rgba(22, 12, 38, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: activeSection === item.href.substring(1) ? '#c084fc' : '#ffffff',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: activeSection === item.href.substring(1) ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/Jay_Subhash_Bobade_Resume.pdf"
                download="Jay_Subhash_Bobade_Resume.pdf"
                onClick={() => { handleConfetti(); setMobileMenuOpen(false); }}
                className="btn-primary"
                style={{
                  marginTop: '12px',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                <Download size={18} color="#ffffff" /> Download Resume PDF
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
