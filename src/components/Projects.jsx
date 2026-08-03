import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, Layers, Maximize2, X, Zap } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';



const projectsData = [
  {
    id: 1,
    title: 'Hospital Management System',
    category: 'Fullstack & Next.js',
    subtitle: 'Full-stack Healthcare platform with 4 distinct user roles (Admin, Doctor, Receptionist, Patient).',
    description: 'Designed and built a complete Hospital Management System using Next.js and MySQL. Developed RESTful API endpoints for patient registration, appointment scheduling, doctor management, medical records, prescriptions, and billing. Implemented JWT authentication, bcrypt password hashing, and Role-Based Access Control (RBAC). Integrated frontend with backend APIs using Axios and validated endpoints in Postman.',
    tags: ['Next.js', 'MySQL', 'JWT Auth', 'RBAC', 'REST APIs', 'Axios', 'Postman', 'Git'],
    metrics: '4 User Roles • Full-stack Next.js & MySQL Schema',
    gradient: 'linear-gradient(135deg, #7e22ce 0%, #3b0764 100%)',
    github: 'https://github.com/jaybobade144-oss/Hospital-Management-System',
    demo: 'https://hospital-management-system-001-rouge.vercel.app/'
  },
  {
    id: 2,
    title: 'Hotel Booking System',
    category: 'React & TypeScript',
    subtitle: 'Responsive Hotel Booking System with dual Admin & Customer dashboards.',
    description: 'Built modules for hotel & room listings, room search, availability checking, booking management, customer reviews, and booking history with reusable React components. Admin dashboard handles complete CRUD operations for managing hotels, rooms, bookings, and customer reviews. Implemented clean component architecture, form validation, and browser storage persistence.',
    tags: ['Next.js', 'React.js', 'TypeScript', 'Axios', 'Browser Storage', 'Git'],
    metrics: 'Dual Dashboards • Full CRUD Operations',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    github: 'https://github.com/jaybobade144-oss/aurelia-hotel',
    demo: 'https://aurelia-hotel-rust.vercel.app/'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const triggerConfetti = (e) => {
    e.stopPropagation();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-pill"
          style={{ marginBottom: '12px' }}
        >
          <Layers size={14} color="#c084fc" /> Verified Projects
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Full-stack web applications and role-based management portals built with React & Next.js.
        </motion.p>
      </div>



      {/* Projects Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px'
        }}
      >
        <AnimatePresence>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card"
              onClick={() => setSelectedProject(project)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Visual Banner Preview */}
                <div style={{
                  height: '180px',
                  background: project.gradient,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(10,5,18,0.7) 100%)'
                  }} />
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}>
                    {project.title}
                  </div>
                  <button style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}>
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Project Body */}
                <div style={{ padding: '24px' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#c084fc',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px'
                  }}>
                    {project.category}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: 700 }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {project.subtitle}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    color: '#e879f9',
                    background: 'rgba(232, 121, 249, 0.1)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    width: 'fit-content'
                  }}>
                    <Zap size={14} /> {project.metrics}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '0.75rem',
                        background: 'rgba(168, 85, 247, 0.08)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        color: 'var(--text-muted)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div style={{
                padding: '16px 24px',
                borderTop: '1px solid rgba(168, 85, 247, 0.15)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={triggerConfetti}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  <GithubIcon size={16} /> Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={triggerConfetti}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#c084fc',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 700
                  }}
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(10, 5, 18, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                maxWidth: '640px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '36px',
                position: 'relative',
                border: '1px solid var(--border-glow)'
              }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>

              <span className="glass-pill" style={{ marginBottom: '16px' }}>
                {selectedProject.category}
              </span>

              <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{selectedProject.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {selectedProject.description}
              </p>

              <div style={{
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Zap size={20} color="#c084fc" />
                <span style={{ fontSize: '0.925rem', fontWeight: 600, color: '#c084fc' }}>
                  {selectedProject.metrics}
                </span>
              </div>

              <h4 style={{ fontSize: '1rem', marginBottom: '12px' }}>Tech Stack & Implementation</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {selectedProject.tags.map(t => (
                  <span key={t} className="glass-pill">{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={triggerConfetti}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <ExternalLink size={18} /> Launch Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={triggerConfetti}
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <GithubIcon size={18} /> View Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
