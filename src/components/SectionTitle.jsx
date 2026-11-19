import React from 'react';
import ScrollReveal from './ScrollReveal.jsx';

export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <ScrollReveal className={`section-title${centered ? ' section-title-centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </ScrollReveal>
  );
}
