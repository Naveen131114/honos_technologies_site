import React from 'react';
import { ArrowUpRight, Eye, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-layout">
          <motion.div className="about-visual" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <div className="about-art">
              <div className="art-grid" />
              <div className="art-window">
                <div className="art-window-bar"><i /><i /><i /><span>honos / possibilities</span></div>
                <div className="art-window-body"><span className="art-bracket">{'{'}</span><div className="art-code-lines"><i /><i /><i /><i /><i /></div><span className="art-bracket">{'}'}</span></div>
                <div className="art-window-foot"><span /><span /><span /></div>
              </div>
              <div className="art-orbit"><span /><span /><span /></div>
              <div className="art-stamp"><span>Ideas,</span><b>made real.</b><ArrowUpRight size={17} /></div>
              <div className="art-caption"><span className="caption-dot" /> Human-first technology</div>
            </div>
          </motion.div>
          <div className="about-copy">
            <SectionTitle eyebrow="A little about us" title={<>Building digital solutions for a smarter future.</>} description="Honos Technologies is a technology solutions company helping businesses work better through purposeful software, digital transformation and business-oriented services." />
            <p className="about-extra">We bring practical thinking and modern technology together—creating solutions that fit your business today and are ready for what comes next.</p>
            <div className="leader-card"><div className="leader-avatar">RP</div><div><span>Managing Director</span><strong>Raj Prabhu S</strong></div><span className="leader-mark"><ArrowUpRight size={17} /></span></div>
            <a className="text-link" href="#contact">Get to know us <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="mission-grid">
          <article className="mission-card"><span className="mission-icon"><Target size={20} /></span><div><span className="eyebrow">Our mission</span><p>Make technology useful, accessible and impactful for the businesses we serve.</p></div></article>
          <article className="mission-card"><span className="mission-icon mission-icon-violet"><Eye size={20} /></span><div><span className="eyebrow">Our vision</span><p>Build a smarter future where every business can thrive through thoughtful digital solutions.</p></div></article>
          <article className="mission-card"><span className="mission-icon mission-icon-cyan"><Lightbulb size={20} /></span><div><span className="eyebrow">Our approach</span><p>Listen closely, build with care and stay alongside our clients as they grow.</p></div></article>
        </div>
      </div>
    </section>
  );
}
