import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MapPin, Calendar, Phone, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, GlobeIcon, PhoneIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailAddress = 'jaybobade144@gmail.com';
  const phoneNumber = '9106695745';

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadConfetti = () => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative' }}>
      {/* Background Glow Orb */}
      <div
        className="glow-orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #7e22ce 0%, #3b0764 70%)',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.4
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
          <Mail size={14} color="#c084fc" /> Direct Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Let's Work <span className="gradient-text">Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          I am actively seeking an entry-level React & Full-Stack Developer role. Reach out via email, phone, or LinkedIn!
        </motion.p>
      </div>

      <div style={{
        maxWidth: '850px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        
        {/* Main Email & Phone Action Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card"
            style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c084fc'
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Address
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-code)' }}>
                    {emailAddress}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
            >
              {copied ? (
                <>
                  <Check size={18} /> Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy size={18} /> Copy Email Address
                </>
              )}
            </button>
          </motion.div>

          {/* Phone & Direct Call Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass-card"
            style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(232, 121, 249, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e879f9'
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Phone / WhatsApp
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', fontFamily: 'var(--font-code)' }}>
                    +91 {phoneNumber}
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
            >
              <PhoneIcon size={18} /> Call Directly
            </a>
          </motion.div>

        </div>

        {/* Location, Availability & Resume Download Bar */}
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-card"
          style={{
            padding: '28px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} color="#c084fc" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Location</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Pune, Maharashtra, India</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={20} color="#e879f9" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Availability</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Immediate Joiner (Full-Time / Hybrid)</div>
              </div>
            </div>
          </div>

          <a
            href="/Jay_Subhash_Bobade_Resume.pdf"
            download="Jay_Subhash_Bobade_Resume.pdf"
            onClick={handleDownloadConfetti}
            className="btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <Download size={18} /> Download PDF Resume
          </a>
        </motion.div>

        {/* Social Profiles Grid */}
        <div className="glass-card" style={{ padding: '24px 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://github.com/jaybobade144-oss"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
          >
            <GithubIcon size={22} color="#c084fc" /> GitHub Profile <ExternalLink size={14} color="var(--text-dim)" />
          </a>

          <div style={{ width: '1px', height: '28px', background: 'rgba(168,85,247,0.2)' }} className="desktop-nav" />

          <a
            href="https://linkedin.com/in/jay-bobade-92616b246"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
          >
            <LinkedinIcon size={22} color="#818cf8" /> LinkedIn Profile <ExternalLink size={14} color="var(--text-dim)" />
          </a>

          <div style={{ width: '1px', height: '28px', background: 'rgba(168,85,247,0.2)' }} className="desktop-nav" />

          <a
            href="https://jaybobade.vercel.app"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }}
          >
            <GlobeIcon size={22} color="#e879f9" /> Vercel Live Portfolio <ExternalLink size={14} color="var(--text-dim)" />
          </a>
        </div>

      </div>
    </section>
  );
}
