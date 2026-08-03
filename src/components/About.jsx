import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Layers, Compass, Zap, GraduationCap, Briefcase, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

const experienceData = [
  {
    role: 'Frontend Developer',
    company: 'Generation Next',
    period: 'July 2025 - July 2026',
    description: 'Developed and deployed 5+ responsive business websites using HTML5, CSS3, Bootstrap, JavaScript, and WordPress. Managed domain setup, SSL security certificates, image optimization, and direct client collaborations.',
    highlights: [
      'Built 5+ Client Websites',
      'Performance & Image Optimization',
      'Domain & SSL Management',
      'Cross-Browser & Mobile Compatibility',
      'Direct Client Collaboration'
    ]
  }
];

const coreValues = [
  {
    icon: <Zap size={26} color="#e879f9" />,
    title: 'Role-Based React Apps',
    desc: 'Building secure, multi-role web dashboards using React, Next.js, JWT, and RBAC patterns.'
  },
  {
    icon: <Layers size={26} color="#c084fc" />,
    title: 'Full-Stack Architecture',
    desc: 'Designing REST APIs with Node.js, Express, MySQL, MongoDB, and Mongoose ORM.'
  },
  {
    icon: <Cpu size={26} color="#a855f7" />,
    title: 'Clean Code & MVC',
    desc: 'Adhering to Route-Controller-Model patterns, modular service layers, and robust error handling.'
  },
  {
    icon: <ShieldCheck size={26} color="#f43f5e" />,
    title: 'Responsive & Secure',
    desc: 'Pixel-perfect mobile layouts, JWT authentication, bcrypt password hashing, and SSL setups.'
  }
];

export default function About() {
  const [activeExp, setActiveExp] = useState(0);

  const handleDownloadConfetti = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <section id="about" className="section-container">
      {/* Header */}
      <div className="section-header">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-pill"
          style={{ marginBottom: '12px' }}
        >
          <Compass size={14} color="#c084fc" /> Background & Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          About <span className="gradient-text">Jay Bobade</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Motivated React Developer with a strong foundation in full-stack web development, hands-on production projects, and 1 year of industry experience (July 2025 - July 2026).
        </motion.p>
      </div>

      {/* Profile Bio Card & Education Banner */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
        marginBottom: '60px'
      }} className="bio-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Briefcase size={22} color="#c084fc" /> Professional Profile
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Quick learner with a solid grasp of REST API design, authentication (JWT/bcrypt), database schema modeling (MySQL/MongoDB), and component-driven UI architecture. Eager to apply and expand these technical capabilities within an innovative software engineering team.
            </p>
          </div>

          <div>
            <a
              href="/Jay_Subhash_Bobade_Resume.pdf"
              download="Jay_Subhash_Bobade_Resume.pdf"
              onClick={handleDownloadConfetti}
              className="btn-primary"
              style={{ width: 'fit-content' }}
            >
              <Download size={18} color="#ffffff" /> Download Official Resume (PDF)
            </a>
          </div>
        </motion.div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card"
          style={{ padding: '32px', borderLeft: '4px solid #c084fc' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(168, 85, 247, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#c084fc'
            }}>
              <GraduationCap size={24} color="#c084fc" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Bachelor of Computer Applications (BCA)</h4>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>Shivaji University, Kolhapur</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px', alignItems: 'center' }}>
            <span className="glass-pill" style={{ color: '#38ef7d', borderColor: 'rgba(56, 239, 125, 0.3)' }}>
              Result: 75% Score
            </span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-dim)' }}>
              Graduated: April 2025
            </span>
          </div>
        </motion.div>
      </div>

      {/* Core Technical Pillars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
        marginBottom: '80px'
      }}>
        {coreValues.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card"
            style={{ padding: '28px' }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(192, 132, 252, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              {pillar.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{pillar.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6 }}>{pillar.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Experience Timeline */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        alignItems: 'start'
      }} className="exp-grid">
        
        {/* Left Column - Tabs */}
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>
            Industry <span className="gradient-text">Experience</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {experienceData.map((exp, index) => (
              <motion.button
                key={exp.role}
                onClick={() => setActiveExp(index)}
                whileHover={{ x: 4 }}
                style={{
                  background: activeExp === index ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: activeExp === index ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{exp.role}</span>
                  <span style={{ fontSize: '0.85rem', color: activeExp === index ? '#c084fc' : 'var(--text-dim)' }}>
                    {exp.period}
                  </span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{exp.company}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column - Active Experience Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="glass-card"
            style={{ padding: '36px', minHeight: '300px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                padding: '6px 14px',
                borderRadius: '99px',
                background: 'var(--gradient-main)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.8rem'
              }}>
                {experienceData[activeExp].period}
              </div>
              <h4 style={{ fontSize: '1.35rem' }}>{experienceData[activeExp].company}</h4>
            </div>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}>
              {experienceData[activeExp].description}
            </p>

            <h5 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', marginBottom: '12px' }}>
              Key Accomplishments & Tools
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {experienceData[activeExp].highlights.map(item => (
                <span key={item} className="glass-pill" style={{ borderColor: 'rgba(192, 132, 252, 0.3)' }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .bio-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .exp-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
