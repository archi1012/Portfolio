import { useState, useEffect, useRef } from 'react';
import './index.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Certifications from './component/Certifications';
import Experience from './component/Experience';
import Hackathons from './component/Hackathons';
import { OpenSource, Research } from './component/Extras';
import Contact from './component/Contact';

const sections = ['about', 'skills', 'projects', 'certifications', 'hackathons', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Hackathons />
      <OpenSource />
      <Research />
      <Contact />
      <footer style={{
        background: 'var(--black)', color: 'var(--gray-mid)',
        textAlign: 'center', padding: '24px',
        fontFamily: 'var(--font-body)', fontSize: 14,
      }}>
        © 2025 Archi Kumari · Built with <span style={{ color: 'var(--yellow)' }}>React</span>
      </footer>
    </>
  );
}
