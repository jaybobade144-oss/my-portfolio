import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

const categories = ['All', 'Frontend & React', 'Backend & DB', 'Security & Architecture', 'Tools & Workflow'];

const skillsData = [
  // Frontend
  { name: 'React.js & Next.js', category: 'Frontend & React', level: 95, desc: 'Component Architecture, Next.js API Routes, Hooks, JSX', color: '#00f2fe' },
  { name: 'JavaScript (ES6+)', category: 'Frontend & React', level: 92, desc: 'Async/Await, ES6+ Syntax, Promises, Closures, DOM Manipulation', color: '#f7df1e' },
  { name: 'HTML5 & CSS3 / Bootstrap', category: 'Frontend & React', level: 95, desc: 'Responsive Design, Flexbox, Grid, Custom Styling, UI Components', color: '#38bdf8' },
  { name: 'Redux State Management', category: 'Frontend & React', level: 88, desc: 'Global State Management, Reducers, Actions, Store Integration', color: '#764abc' },

  // Backend & DB
  { name: 'Node.js & Express.js', category: 'Backend & DB', level: 90, desc: 'REST API Design, Service Layers, Middleware Execution', color: '#68a063' },
  { name: 'MySQL & Database Modeling', category: 'Backend & DB', level: 92, desc: 'Relational Schema Design, Complex Queries, CRUD Operations', color: '#00758f' },
  { name: 'MongoDB & Mongoose', category: 'Backend & DB', level: 88, desc: 'NoSQL Schema Modeling, Aggregations, Document Operations', color: '#47a248' },

  // Security & Architecture
  { name: 'JWT Auth & bcrypt', category: 'Security & Architecture', level: 92, desc: 'Token Auth, Password Hashing, Protected Routes, Session Management', color: '#ff007f' },
  { name: 'Role-Based Access (RBAC)', category: 'Security & Architecture', level: 90, desc: 'Multi-role Authorization (Admin, Doctor, Patient, Customer)', color: '#a855f7' },
  { name: 'MVC Architecture', category: 'Security & Architecture', level: 92, desc: 'Route-Controller-Model Structure, Clean Code Separation', color: '#38ef7d' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools & Workflow', level: 90, desc: 'Version Control, Branch Management, Repository Workflows', color: '#f05032' },
  { name: 'Postman & API Testing', category: 'Tools & Workflow', level: 92, desc: 'API Endpoint Validation, Environment Variables, Request Payload Tests', color: '#ff6c37' },
  { name: 'Axios & Maven', category: 'Tools & Workflow', level: 88, desc: 'HTTP Data Fetching, Interceptors, Build Tools', color: '#646cff' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-container" style={{ position: 'relative' }}>
      {/* Background orb */}
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'var(--primary-blue)',
          top: '30%',
          right: '5%',
          opacity: 0.25,
        }}
      />

      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-pill"
          style={{ marginBottom: '12px' }}
        >
          <Cpu size={14} color="var(--primary-cyan)" /> Technical Competencies
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Technical <span className="gradient-text">Skills & Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Solid expertise across frontend React development, RESTful APIs, MySQL/MongoDB databases, and RBAC authentication.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '48px'
      }}>
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              borderRadius: '99px',
              border: activeCategory === cat ? '1px solid var(--primary-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeCategory === cat ? 'var(--gradient-main)' : 'rgba(255, 255, 255, 0.04)',
              color: activeCategory === cat ? '#000' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeCategory === cat ? '0 0 20px rgba(0, 242, 254, 0.3)' : 'none'
            }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: skill.color,
                      boxShadow: `0 0 10px ${skill.color}`
                    }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{skill.name}</h3>
                  </div>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--primary-cyan)',
                    background: 'rgba(0, 242, 254, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '8px'
                  }}>
                    {skill.level}%
                  </span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '20px' }}>
                  {skill.desc}
                </p>
              </div>

              {/* Progress Bar */}
              <div>
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    style={{
                      height: '100%',
                      background: skill.color === '#ffffff' ? 'var(--gradient-main)' : `linear-gradient(90deg, ${skill.color}, #00f2fe)`,
                      borderRadius: '3px'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
