import React from 'react';
import { Braces } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const technologies = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB', 'Flutter'];

export default function Technologies() {
  return (
    <section className="technology-section">
      <div className="container technology-layout">
        <div className="technology-copy">
          <SectionTitle eyebrow="Our expertise" title={<>The right tools<br />for the right job.</>} description="We work with proven technologies to create flexible digital experiences. Our stack is guided by your needs—not the other way around." />
        </div>
        <ScrollReveal className="technology-panel" delay={0.1}>
          <div className="technology-panel-head"><span className="technology-badge"><Braces size={17} /></span><div><strong>Technology toolkit</strong><span>Tools we work with</span></div><span className="toolkit-dot" /></div>
          <div className="technology-tags">{technologies.map((technology, index) => <span className={`tech-tag tech-tag-${index % 4}`} key={technology}><i />{technology}</span>)}</div>
          <div className="technology-note"><span /> Always learning. Always choosing with purpose.</div>
        </ScrollReveal>
      </div>
    </section>
  );
}
