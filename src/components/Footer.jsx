import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const services = ['Software development', 'Web development', 'Mobile apps', 'Digital marketing', 'Payroll management', 'Data annotation'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a className="brand brand-footer" href="#home">
            {/* <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-text">HONOS <b>TECHNOLOGIES</b></span> */}
            <img className="brand-logo" src="/honos_logo.png" alt="Honos Technologies" />
          </a>
          <p>We turn thoughtful ideas into technology that helps businesses do more, every day.</p>
          {/* <a className="footer-social" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)">in <ArrowUpRight size={13} /></a> */}
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#about">About us</a><a href="#services">Our services</a><a href="#process">Our process</a><a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Our services</h3>
          {services.map((service) => <a key={service} href="#services">{service}</a>)}
        </div>
        <div className="footer-column footer-contact">
          <h3>Get in touch</h3>
          <a href="mailto:info@honostechnologies.com"><Mail size={16} />info@honostechnologies.com</a>
          <a href="tel:+917373295504"><Phone size={16} />+91 73732 95504</a>
          <a href="https://maps.google.com/?q=7%2F3%2F104%2C+ST-2%2C+A.I.B.E.A+Nagar%2C+B+Colony%2C+Paravai%2C+Madurai+-+625402%2C+Tamil+Nadu%2C+India" target="_blank" rel="noreferrer"><MapPin size={16} />Madurai, Tamil Nadu, India</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Honos Technologies. All rights reserved.</span>
        <span>Built with purpose in Madurai, India.</span>
      </div>
    </footer>
  );
}
