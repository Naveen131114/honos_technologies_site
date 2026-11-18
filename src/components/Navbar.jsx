import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['Home', '#home'],
  ['About us', '#about'],
  ['Services', '#services'],
  ['Our process', '#process'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Honos Technologies home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-text">HONOS <b>TECHNOLOGIES</b></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div id="primary-navigation" className={`nav-content${open ? ' nav-open' : ''}`}>
          <div className="nav-links">
            {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          </div>
          <a className="button button-primary nav-cta" href="#contact" onClick={closeMenu}>Get a quote <ArrowUpRight size={16} /></a>
        </div>
      </nav>
    </header>
  );
}
