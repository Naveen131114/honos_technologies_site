import React from 'react';
import { ArrowDown, ArrowRight, Check, ClipboardList, Code2, Headphones, PencilRuler } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const steps = [
  { icon: ClipboardList, number: '01', title: 'Understand requirements', description: 'We listen, ask the right questions and get to know your goals.' },
  { icon: PencilRuler, number: '02', title: 'Plan & design', description: 'We map out a considered solution and a clear way forward.' },
  { icon: Code2, number: '03', title: 'Develop & implement', description: 'We build with care, keeping you informed along the way.' },
  { icon: Headphones, number: '04', title: 'Deliver & support', description: 'We launch, support and stay connected as you grow.' },
];

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <SectionTitle eyebrow="A clear path forward" title={<>Great work happens<br className="desktop-break" /> one step at a time.</>} description="A collaborative process keeps your project focused, transparent and moving forward." centered />
        <div className="process-track">
          {steps.map(({ icon: Icon, number, title, description }, index) => (
            <ScrollReveal as="article" className="process-step" key={number} delay={index * 0.08}>
              <div className="process-icon-wrap"><span className="process-icon"><Icon size={21} /></span>{index < steps.length - 1 && <span className="process-connector"><ArrowRight size={15} /></span>}</div>
              <span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p>
            </ScrollReveal>
          ))}
        </div>
        <div className="process-foot"><span><Check size={14} /> You’re part of the process at every step.</span><a href="#contact">Start a conversation <ArrowDown size={14} /></a></div>
      </div>
    </section>
  );
}
