import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer', 'Software Developer', 'React Developer', 'Backend Engineer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'var(--white)', position: 'relative', overflow: 'hidden',
      paddingTop: 68,
    }}>
      {/* Diagonal yellow shape */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-8%',
        width: '45vw', height: '110vh',
        background: 'var(--yellow)',
        transform: 'skewX(-12deg)',
        zIndex: 0,
        animation: 'pulse 4s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', top: '10%', right: '2%',
        width: '28vw', height: '60vh',
        background: 'rgba(244,255,71,0.35)',
        transform: 'skewX(-12deg)',
        zIndex: 0,
        animation: 'pulse 4s ease-in-out infinite 1s',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 640 }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
            color: 'var(--gray-mid)', letterSpacing: '0.12em', textTransform: 'uppercase',
            marginBottom: 16,
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s',
          }}>👋 Welcome to my portfolio</p>

          <h1 style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.05,
            color: 'var(--black)', marginBottom: 20,
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s',
          }}>
            Hello, I'm<br />
            <span style={{ color: 'var(--black)', position: 'relative' }}>
              Archi Kumari
              <span style={{
                position: 'absolute', bottom: -4, left: 0, right: 0, height: 6,
                background: 'var(--yellow)', zIndex: -1, borderRadius: 2,
              }} />
            </span>
          </h1>

          <div style={{
            fontFamily: 'var(--font-head)', fontWeight: 700,
            fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
            color: 'var(--gray-dark)', marginBottom: 24, minHeight: '2.4rem',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.35s',
          }}>
            {displayed}<span style={{ borderRight: '2px solid var(--black)', marginLeft: 2, animation: 'blink 1s step-end infinite' }} />
          </div>

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--gray-dark)',
            lineHeight: 1.7, marginBottom: 20, maxWidth: 520,
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.5s',
          }}>
            <strong>Full Stack Developer</strong> and B.Tech CSE student at Lovely Professional University with a strong focus on problem-solving, collaboration, and building meaningful digital solutions. I enjoy turning real-world challenges into reliable and user-focused applications through structured thinking and attention to detail. Known for writing clean, maintainable code and approaching projects with curiosity, adaptability, and a continuous learning mindset. I value teamwork, clear communication, and thoughtful design to create products that are both functional and impactful.
          </p>

          <div style={{
            display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 36,
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.5s',
          }}>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: 'var(--black)' }}>2+ <span style={{ fontWeight: 400, fontSize: 14, color: 'var(--gray-mid)' }}>Projects</span></div>
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 22, color: 'var(--black)' }}>4+ <span style={{ fontWeight: 400, fontSize: 14, color: 'var(--gray-mid)' }}>Certifications</span></div>
          </div>

          <div style={{
            display: 'flex', gap: 16, flexWrap: 'wrap',
            opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.65s',
          }}>
            <button onClick={() => scrollTo('projects')} style={{
              background: 'var(--yellow)', color: 'var(--black)', border: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
              padding: '13px 28px', borderRadius: 50, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--yellow-dark)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = 'var(--yellow)'; e.target.style.transform = 'translateY(0)'; }}
            >View My Work →</button>
            <button onClick={() => scrollTo('contact')} style={{
              background: 'transparent', color: 'var(--black)',
              border: '2px solid var(--black)',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15,
              padding: '13px 28px', borderRadius: 50, cursor: 'pointer',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--black)'; e.target.style.color = 'var(--white)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--black)'; e.target.style.transform = 'translateY(0)'; }}
            >Contact Me</button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{transform:skewX(-12deg) scale(1)} 50%{transform:skewX(-12deg) scale(1.02)} }
      `}</style>
    </section>
  );
}
