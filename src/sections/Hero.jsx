import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Layers3, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const techTags = ['Web', 'Mobile', 'Software', 'Digital'];

function ProductIllustration() {
  return (
    <div className="hero-visual" aria-label="Illustration of connected digital products and technology" role="img">
      <div className="visual-glow" />
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <motion.div className="float-chip chip-code" animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}><Code2 size={17} /><span>Clean code</span></motion.div>
      <motion.div className="float-chip chip-spark" animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}><Sparkles size={16} /><span>Smart ideas</span></motion.div>
      <div className="dashboard-card">
        <div className="dashboard-top"><span className="dashboard-brand"><i /> honos studio</span><span className="dashboard-dots">•••</span></div>
        <div className="dashboard-title">Your next big idea,<br /><b>in good hands.</b></div>
        <div className="dashboard-copy">Digital solutions, made for people.</div>
        <div className="dashboard-preview">
          <div className="preview-side"><span /><span /><span /><span /></div>
          <div className="preview-page"><div className="preview-nav"><i /><i /><i /></div><div className="preview-hero"><div className="preview-lines"><i /><i /><i /></div><div className="preview-shape"><Layers3 size={27} /></div></div><div className="preview-cards"><i /><i /><i /></div></div>
        </div>
        <div className="dashboard-bottom"><span><Check size={14} /> Thoughtfully built</span><span className="live-dot">Live</span></div>
      </div>
      <div className="floating-stat"><span className="stat-icon"><ArrowRight size={17} /></span><span>Ideas into<br /><b>impact</b></span></div>
      <div className="visual-dots" aria-hidden="true">· · ·<br />· · ·<br />· · ·</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-wash" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="hero-kicker"><span className="kicker-line" /> Technology, thoughtfully delivered</div>
            <h1>Innovative technology.<br /><span>Smarter business.</span></h1>
            <p className="hero-description">Empowering businesses with innovative software, digital solutions, and technology-driven services.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">Explore our services <ArrowUpRight size={17} /></a>
              <a className="button button-outline" href="#contact">Contact us <ArrowRight size={16} /></a>
            </div>
            <div className="hero-proof"><span className="proof-check"><Check size={14} /></span><span>Practical solutions. Built around your business.</span></div>
          </motion.div>
        </div>
        <ProductIllustration />
      </div>
      <div className="hero-bottom container">
        <span className="hero-bottom-label">One partner for your digital journey</span>
        <div className="hero-tags">{techTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <a href="#about" className="scroll-cue">Discover Honos <ArrowDown size={15} /></a>
      </div>
    </section>
  );
}
