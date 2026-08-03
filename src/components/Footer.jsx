import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(7, 9, 14, 0.95)',
      padding: '40px 24px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {/* Brand & Copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '10px',
            background: 'var(--gradient-main)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000'
          }}>
            <Code2 size={20} />
          </div>
          <span style={{ fontSize: '0.925rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Senior React Developer. Built with React 19 & Framer Motion.
          </span>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
