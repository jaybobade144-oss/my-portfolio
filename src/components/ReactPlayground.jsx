import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Cpu, Sparkles, Terminal, Activity, Zap, RefreshCw } from 'lucide-react';

export default function ReactPlayground() {
  // Demo 1: Interactive State Machine & Re-render Counter
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);
  const [isAutoActive, setIsAutoActive] = useState(false);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  }, [count]);

  useEffect(() => {
    let interval;
    if (isAutoActive) {
      interval = setInterval(() => {
        setCount(c => c + 1);
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isAutoActive]);

  // Demo 2: Spring Physics Box Position
  const [springBox, setSpringBox] = useState({ x: 0, y: 0 });

  return (
    <section id="playground" className="section-container" style={{ position: 'relative' }}>
      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-pill"
          style={{ marginBottom: '12px' }}
        >
          <Sparkles size={14} color="var(--primary-cyan)" /> Live React Interactive Demos
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          React Custom Hooks & <span className="gradient-text">State Machine</span> Playground
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Test live React state updates, spring physics, and dynamic micro-interactions right here in real time.
        </motion.p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px'
      }}>
        
        {/* Widget 1: State Machine & Render Audit */}
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card"
          style={{ padding: '28px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Activity size={20} color="var(--primary-cyan)" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>React Render Audit</h3>
            </div>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>useRenderCount Hook</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
            Demonstrates state batching & component re-render lifecycle tracking in real time.
          </p>

          <div style={{
            background: 'rgba(7, 9, 14, 0.8)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>State Value</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-cyan)', fontFamily: 'var(--font-code)' }}>
                {count}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Render Cycles</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38ef7d', fontFamily: 'var(--font-code)' }}>
                {renderCount}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setCount(c => c + 1)}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                background: 'var(--gradient-main)',
                color: '#000',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Zap size={16} /> Increment
            </button>
            <button
              onClick={() => setIsAutoActive(!isAutoActive)}
              style={{
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: isAutoActive ? 'rgba(255, 0, 127, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={16} className={isAutoActive ? 'animate-spin' : ''} /> {isAutoActive ? 'Pause' : 'Auto Stream'}
            </button>
          </div>
        </motion.div>

        {/* Widget 2: Framer Motion Drag & Spring Physics */}
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card"
          style={{ padding: '28px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Cpu size={20} color="#a855f7" />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Spring Gesture Physics</h3>
            </div>
            <span className="glass-pill" style={{ fontSize: '0.75rem' }}>Drag & Snap</span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
            Interactive Framer Motion drag target. Try dragging the glowing React badge around!
          </p>

          {/* Interactive Drag Playground Box */}
          <div style={{
            height: '180px',
            background: 'rgba(7, 9, 14, 0.6)',
            borderRadius: '16px',
            border: '1px dashed rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <motion.div
              drag
              dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.2, boxShadow: '0 0 30px #00f2fe' }}
              whileTap={{ cursor: 'grabbing' }}
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'var(--gradient-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'grab',
                color: '#000',
                fontWeight: 800,
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
              }}
            >
              <Cpu size={32} />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
