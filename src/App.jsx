import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import ServiceCard from './components/ServiceCard.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import WhyChooseUs from './sections/WhyChooseUs.jsx';
import Technologies from './sections/Technologies.jsx';
import Process from './sections/Process.jsx';
import Contact from './sections/Contact.jsx';
import {
  ArrowUpRight, Braces, Code2, Database, Globe2, Megaphone,
  Smartphone, UsersRound,
} from 'lucide-react';

const services = [
  { icon: Code2, number: '01', title: 'Software development', description: 'Custom software solutions designed to simplify business operations and improve productivity.' },
  { icon: Globe2, number: '02', title: 'Web development', description: 'Modern, responsive, secure and scalable websites and web applications.' },
  { icon: Smartphone, number: '03', title: 'Mobile app development', description: 'User-friendly Android and cross-platform mobile applications for modern businesses.' },
  { icon: Megaphone, number: '04', title: 'Digital marketing', description: 'SEO, social media marketing, online branding and digital growth strategies.' },
  { icon: UsersRound, number: '05', title: 'Payroll management', description: 'Efficient payroll processing, employee management and salary administration solutions.' },
  { icon: Database, number: '06', title: 'Data annotation', description: 'High-quality data labeling and annotation services supporting AI and machine learning projects.' },
];

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionTitle eyebrow="What we do" title={<>Technology that moves<br className="desktop-break" /> your business forward.</>} description="Thoughtful digital services to help you work smarter, serve better and grow with confidence." />
        <div className="service-grid">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={(index % 3) * 0.08} amount={0.18}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
        <a className="text-link services-link" href="#contact">Have a project in mind? Let’s talk <ArrowUpRight size={17} /></a>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-orb cta-orb-one" aria-hidden="true" />
      <div className="cta-orb cta-orb-two" aria-hidden="true" />
      <div className="container cta-content">
        <ScrollReveal>
          <span className="eyebrow eyebrow-light">Your next chapter starts here</span>
          <h2>Let’s build something<br className="desktop-break" /> great together.</h2>
          <p>Have a business idea or looking for the right technology partner? Let’s discuss your project.</p>
        </ScrollReveal>
        <ScrollReveal className="cta-actions" delay={0.12}>
          <a className="button button-white" href="#contact">Contact us <ArrowUpRight size={17} /></a>
          <a className="cta-secondary" href="#contact">Get a quote <ArrowUpRight size={16} /></a>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <CallToAction />
        <Contact onSubmit={() => setSubmitted(true)} submitted={submitted} />
      </main>
      <Footer />
      <a className="whatsapp-float" href="https://wa.me/917373295504" target="_blank" rel="noreferrer" aria-label="Chat with Honos Technologies on WhatsApp">
        <Braces size={21} />
        <span>Chat with us</span>
      </a>
    </>
  );
}
