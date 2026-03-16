import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Certifications', 'Hackathons', 'Contact'];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid #e8e8e8' : 'none',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 24px',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{ background: 'var(--yellow)', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 16, color: 'var(--black)', borderRadius: 4 }}>AK</div>
          <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 17, color: 'var(--black)' }}>Archi Kumari</span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
              color: activeSection === l.toLowerCase() ? 'var(--black)' : 'var(--gray-dark)',
              borderBottom: activeSection === l.toLowerCase() ? '2px solid var(--yellow)' : '2px solid transparent',
              paddingBottom: 2, transition: 'all 0.2s',
            }}>{l}</button>
          ))}
          <a href="https://docs.google.com/presentation/d/1nAqPIcq2iRSVnCJNwoCtZ3uMlQqjNk6QexIyebu3P4s/edit?usp=sharing" target="_blank" rel="noreferrer" style={{
            background: 'var(--yellow)', color: 'var(--black)', fontFamily: 'var(--font-body)',
            fontWeight: 600, fontSize: 14, padding: '9px 20px', borderRadius: 50,
            textDecoration: 'none', border: 'none', cursor: 'pointer', transition: 'background 0.2s',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--yellow-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--yellow)'}
          >↓ Resume</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        }} className="hamburger" aria-label="Menu">
          <div style={{ width: 24, height: 2, background: 'var(--black)', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: 'var(--black)', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: 24, height: 2, background: 'var(--black)', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--white)', borderTop: '1px solid #eee',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 16,
              color: 'var(--black)', padding: '10px 0', borderBottom: '1px solid #f0f0f0',
            }}>{l}</button>
          ))}
          <a href="https://docs.google.com/presentation/d/1nAqPIcq2iRSVnCJNwoCtZ3uMlQqjNk6QexIyebu3P4s/edit?usp=sharing" target="_blank" rel="noreferrer" style={{
            display: 'inline-block', marginTop: 12, background: 'var(--yellow)',
            color: 'var(--black)', fontWeight: 600, fontSize: 14, padding: '10px 20px',
            borderRadius: 50, textDecoration: 'none', textAlign: 'center',
          }}>↓ Download Resume</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
