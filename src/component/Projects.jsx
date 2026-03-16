import { useRef, useEffect } from 'react';

const projects = [
  {
    title: 'E-Commerce Website',
    period: 'Oct – Nov 2025',
    desc: 'Full-stack e-commerce app with secure authentication, product catalog, cart functionality, and order management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    bullets: [
      'React-based frontend with reusable components & responsive UI',
      'REST APIs with JWT-based authentication & authorization',
      'Modular Node.js/Express backend architecture',
    ],
    demo: 'https://e-commerce-woad-nine-71.vercel.app/',
    github: 'https://github.com/archi1012/e-commerce',
  },
  {
    title: 'Restaurant Table Booking & Order Management',
    period: 'Jan – Mar 2025',
    desc: 'Responsive system for table reservations and real-time order management with optimized backend.',
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'jQuery'],
    bullets: [
      'Real-time table booking and order tracking system',
      'Optimized backend query performance with MySQL',
      'Clean, intuitive UI components for staff & customers',
    ],
    demo: 'https://akayresturant-7ae4583n1-archis-projects-80569cfb.vercel.app/',
    github: 'https://github.com/archi1012/Akayresturant',
  },
];

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Things I've Built</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28 }} className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`fade-in delay-${i + 1}`} style={{
              background: 'var(--white)', borderRadius: 12, padding: '32px 28px',
              borderLeft: '5px solid var(--yellow)', boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              transition: 'transform 0.25s, box-shadow 0.25s', display: 'flex', flexDirection: 'column',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 19, color: 'var(--black)', lineHeight: 1.3 }}>{p.title}</h3>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gray-mid)', whiteSpace: 'nowrap', marginLeft: 12, marginTop: 2 }}>{p.period}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gray-dark)', lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
              <ul style={{ paddingLeft: 18, marginBottom: 20, flex: 1 }}>
                {p.bullets.map((b, bi) => (
                  <li key={bi} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray-dark)', marginBottom: 6, lineHeight: 1.5 }}>{b}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {p.tech.map((t, ti) => (
                  <span key={ti} style={{ background: 'var(--gray-light)', color: 'var(--gray-dark)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, padding: '4px 12px', borderRadius: 50 }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href={p.demo} style={{
                  background: 'var(--yellow)', color: 'var(--black)', fontFamily: 'var(--font-body)',
                  fontWeight: 600, fontSize: 14, padding: '9px 20px', borderRadius: 50,
                  textDecoration: 'none', transition: 'background 0.2s',
                }}
                  onMouseEnter={e => e.target.style.background = 'var(--yellow-dark)'}
                  onMouseLeave={e => e.target.style.background = 'var(--yellow)'}
                >Live Demo ↗</a>
                <a href={p.github} style={{
                  background: 'transparent', color: 'var(--black)', fontFamily: 'var(--font-body)',
                  fontWeight: 600, fontSize: 14, padding: '9px 20px', borderRadius: 50,
                  textDecoration: 'none', border: '2px solid var(--black)', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.target.style.background = 'var(--black)'; e.target.style.color = 'var(--white)'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--black)'; }}
                >GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.projects-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
