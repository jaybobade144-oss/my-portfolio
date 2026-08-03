import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, CheckCircle2, MapPin, Mail, Download, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GlobeIcon, PhoneIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const handleDownloadConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '130px 24px 80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Pure Deep Purple & Violet Ambient Glow Orbs */}
      <div
        className="glow-orb animate-pulse-slow"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #7e22ce 0%, #3b0764 70%)',
          top: '5%',
          left: '15%',
          opacity: 0.5,
        }}
      />
      <div
        className="glow-orb animate-pulse-slow"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, #a855f7 0%, #581c87 75%)',
          bottom: '5%',
          right: '15%',
          animationDelay: '3s',
          opacity: 0.45,
        }}
      />

      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}
        >
          {/* Availability & Location Pills */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <span className="glass-pill" style={{ borderColor: 'rgba(192, 132, 252, 0.4)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc', boxShadow: '0 0 12px #c084fc' }}></span>
              Open for React & Full-Stack Developer Roles
            </span>
            <span className="glass-pill" style={{ color: '#e879f9', borderColor: 'rgba(232, 121, 249, 0.3)' }}>
              <MapPin size={14} /> Pune, Maharashtra, India
            </span>
          </motion.div>

          {/* Name Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I'm <span className="gradient-text">Jay Subhash Bobade</span>
          </motion.h1>

          {/* Role Subheading */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.35rem, 2.8vw, 2.1rem)',
              fontWeight: 600,
              color: '#c084fc',
              marginTop: '-14px',
            }}
          >
            React Developer & Full-Stack Engineer
          </motion.h2>

          {/* Profile Pitch Description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '740px',
            }}
          >
            Motivated web developer specializing in responsive, role-based web applications with <strong style={{ color: '#fff' }}>React.js</strong>, <strong style={{ color: '#fff' }}>Next.js</strong>, <strong style={{ color: '#fff' }}>Node.js</strong>, and <strong style={{ color: '#fff' }}>MySQL / MongoDB</strong>. Hands-on experience in REST API architecture, JWT authentication, RBAC authorization, and clean software patterns.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '8px' }}
          >
            <motion.a
              href="/Jay_Subhash_Bobade_Resume.pdf"
              download="Jay_Subhash_Bobade_Resume.pdf"
              onClick={handleDownloadConfetti}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <Download size={18} /> Download Resume
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary"
            >
              <Mail size={18} color="#ffffff" /> Contact Me
            </motion.a>
          </motion.div>

          {/* Social Profiles & Key Highlights */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(168, 85, 247, 0.15)',
              marginTop: '16px',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
              {[
                { icon: <GithubIcon size={20} />, href: 'https://github.com/jaybobade144-oss', label: 'GitHub' },
                { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/jay-bobade-92616b246', label: 'LinkedIn' },
                { icon: <GlobeIcon size={20} />, href: 'https://jaybobade.vercel.app', label: 'Portfolio' },
                { icon: <PhoneIcon size={18} />, href: 'tel:9106695745', label: 'Phone' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  whileHover={{ y: -4, borderColor: '#c084fc', color: '#c084fc' }}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '14px',
                    background: 'rgba(168, 85, 247, 0.08)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#c084fc" /> 1-Year Industry Experience (Generation Next)
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#e879f9" /> BCA Graduate (75% Score)
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
