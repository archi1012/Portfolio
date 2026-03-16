import { useRef, useEffect } from 'react';

const certs = [
  { icon: '☁️', name: 'Roadmap to Cyber Security', issuer: 'AWS Cloud Clubs', date: 'Sep 2023', color: '#FF9900' },
  { icon: '🐘', name: 'PHP with Laravel for Beginners', issuer: 'Udemy', date: 'Feb 2026', color: '#A435F0' },
  { icon: '📘', name: 'Software Engineering: Implementation & Testing', issuer: 'Coursera', date: 'May 2024', color: '#0056D2' },
  { icon: '🧮', name: 'Data Structures and Algorithms', issuer: 'Training Certificate', date: 'Jun–Jul 2025', color: '#00A86B' },
];

export default function Certifications() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" style={{ background: 'var(--white)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Certifications & Learning</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {certs.map((c, i) => (
            <div key={i} className={`fade-in delay-${i + 1}`} style={{
              background: 'var(--white)', borderRadius: 12, padding: '28px 24px',
              borderTop: '4px solid var(--yellow)', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 10, background: c.color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 16,
              }}>{c.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15, color: 'var(--black)', marginBottom: 8, lineHeight: 1.4 }}>{c.name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-mid)' }}>{c.issuer}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gray-mid)', marginTop: 4 }}>{c.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
