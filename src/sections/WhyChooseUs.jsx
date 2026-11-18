import React from 'react';
import { Check, HeartHandshake, Layers3, LifeBuoy, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';

const values = [
  { icon: HeartHandshake, title: 'Client-focused solutions', description: 'We start with your goals and shape the work around what matters to you.' },
  { icon: UsersRound, title: 'Skilled technical team', description: 'A thoughtful team brings hands-on expertise to every project.' },
  { icon: Sparkles, title: 'Modern technologies', description: 'We use current, fit-for-purpose tools to build dependable experiences.' },
  { icon: LifeBuoy, title: 'Reliable support', description: 'Clear communication and ongoing support, before and after delivery.' },
  { icon: ShieldCheck, title: 'Quality-driven development', description: 'Careful implementation and attention to detail at every stage.' },
  { icon: Layers3, title: 'Scalable solutions', description: 'Flexible foundations designed to grow with your business.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section">
      <div className="container why-layout">
        <div className="why-intro">
          <SectionTitle eyebrow="The Honos difference" title={<>A partner who gets your business.</>} description="Good technology is more than code. It’s a better way to solve the challenges your business faces every day." />
          <a className="button button-outline" href="#contact">Why work with us? <Check size={16} /></a>
          <div className="why-note"><span className="note-line" /> Real people. Clear thinking. Dependable delivery.</div>
        </div>
        <div className="why-grid">
          {values.map(({ icon: Icon, title, description }) => <article className="why-item" key={title}><span className="why-icon"><Icon size={19} /></span><div><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
