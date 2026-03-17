import { useRef, useEffect } from 'react';

const stats = [
  { icon: '📚', title: 'B.Tech CSE', sub: 'LPU · 2023–Present' },
  { icon: '💻', title: '2 Full-Stack Projects', sub: 'E-Commerce & Restaurant System' },
  { icon: '🏆', title: 'Hackathon Finalist', sub: 'Binary Blitz · Coding Ninjas × LPU' },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); } });
    }, { threshold: 0.05 });
    if (ref.current) {
      obs.observe(ref.current);
      // trigger immediately if already in view
      if (ref.current.getBoundingClientRect().top < window.innerHeight) {
        ref.current.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      }
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'center', marginBottom: 56 }} className="about-grid">
          {/* Avatar */}
          <div className="fade-in delay-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/profile1.jpg" alt="Archi Kumari" style={{
              width: 220, height: 220, borderRadius: '50%',
              objectFit: 'cover', objectPosition: 'top',
              boxShadow: '8px 8px 0 var(--black)', border: '3px solid var(--black)',
              flexShrink: 0, display: 'block',
            }} />
          </div>
          {/* Bio */}
          <div className="fade-in delay-2">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--gray-dark)', lineHeight: 1.8, marginBottom: 20 }}>
              I'm a Computer Science student at <strong>Lovely Professional University</strong> (CGPA: 7.02), passionate about <strong>Aspiring full-stack development</strong>. I love building products that are both functional and visually refined — from REST APIs and JWT auth to responsive React UIs.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-mid)', lineHeight: 1.7 }}>
              Currently in my 3rd year, I'm actively working on real-world projects, participating in hackathons, and expanding my knowledge in DSA and cloud technologies.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className={`fade-in delay-${i + 2}`} style={{
              background: 'var(--white)', borderRadius: 12, padding: '28px 24px',
              borderTop: '4px solid var(--yellow)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 16, color: 'var(--black)', marginBottom: 4 }}>{s.title}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray-mid)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
