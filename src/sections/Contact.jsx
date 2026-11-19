import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const address = '7/3/104, ST-2, A.I.B.E.A Nagar, B Colony, Paravai, Madurai - 625402, Tamil Nadu, India';

export default function Contact({ onSubmit, submitted }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = 'Please enter a valid email address.';
    if (!form.message.trim()) nextErrors.message = 'Please tell us a little about your project.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = encodeURIComponent(`Project enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim() || 'Not provided'}\nService: ${form.service || 'Not specified'}\n\nMessage:\n${form.message.trim()}`,
    );
    window.location.href = `mailto:info@honostechnologies.com?subject=${subject}&body=${body}`;
    onSubmit();
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <SectionTitle eyebrow="Let’s talk" title={<>Tell us what you’re<br className="desktop-break" /> thinking about.</>} description="Share a little about your business or project. We’ll be glad to hear from you." />
          <a className="contact-email-link" href="mailto:info@honostechnologies.com">Prefer email? <span>Write to us <ArrowUpRight size={15} /></span></a>
        </div>
        <div className="contact-layout">
          <ScrollReveal as="form" className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-top"><div><h3>Start a conversation</h3><p>Fields marked <span>*</span> are required.</p></div><span className="form-mark"><Send size={19} /></span></div>
            <div className="form-row">
              <label>Name <span>*</span><input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />{errors.name && <small id="name-error" className="field-error">{errors.name}</small>}</label>
              <label>Email <span>*</span><input name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />{errors.email && <small id="email-error" className="field-error">{errors.email}</small>}</label>
            </div>
            <div className="form-row">
              <label>Phone<input name="phone" type="tel" value={form.phone} onChange={update} placeholder="+91 00000 00000" autoComplete="tel" /></label>
              <label>Service interested in<select name="service" value={form.service} onChange={update}><option value="">Select a service</option><option>Software Development</option><option>Web Development</option><option>Mobile App Development</option><option>Digital Marketing</option><option>Payroll Management Solutions</option><option>Data Annotation</option><option>Something else</option></select></label>
            </div>
            <label>Message <span>*</span><textarea name="message" rows="4" value={form.message} onChange={update} placeholder="Tell us a little about what you need..." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />{errors.message && <small id="message-error" className="field-error">{errors.message}</small>}</label>
            <div className="form-submit-row"><button className="button button-primary" type="submit">Send an enquiry <ArrowUpRight size={16} /></button><span><span className="secure-dot" /> Your details stay private.</span></div>
            {submitted && <p className="form-success" role="status">Your email app should open with your enquiry. If it didn’t, email us at info@honostechnologies.com.</p>}
          </ScrollReveal>
          <ScrollReveal as="aside" className="contact-card" delay={0.1}>
            <div className="contact-card-top"><span className="eyebrow eyebrow-light">Contact details</span><h3>We’re just a message away.</h3><p>Have a question? Reach us directly—we’d be happy to help.</p></div>
            <div className="contact-details">
              <a href="mailto:info@honostechnologies.com"><span className="contact-icon"><Mail size={18} /></span><span><small>Email us</small><strong>info@honostechnologies.com</strong></span><ArrowUpRight size={15} /></a>
              <a href="tel:+917373295504"><span className="contact-icon"><Phone size={18} /></span><span><small>Call us</small><strong>+91 73732 95504</strong></span><ArrowUpRight size={15} /></a>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin size={18} /></span><span><small>Visit us</small><strong>{address}</strong></span><ArrowUpRight size={15} /></a>
            </div>
            <a className="whatsapp-link" href="https://wa.me/917373295504" target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight size={15} /></a>
          </ScrollReveal>
        </div>
        <ScrollReveal className="map-frame" amount={0.08}>
          <iframe title="Map showing Honos Technologies in Paravai, Madurai" src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-label"><MapPin size={16} /><span>Honos Technologies <small>Paravai, Madurai</small></span><a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" aria-label="Open Honos Technologies location in Google Maps"><ArrowUpRight size={15} /></a></div>
        </ScrollReveal>
      </div>
    </section>
  );
}
