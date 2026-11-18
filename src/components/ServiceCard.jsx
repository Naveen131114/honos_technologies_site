import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, number, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon"><Icon size={22} strokeWidth={1.8} /></span>
        <span className="service-number">{number}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="service-more" href="#contact" aria-label={`Learn more about ${title}`}>Learn more <ArrowUpRight size={15} /></a>
    </article>
  );
}
