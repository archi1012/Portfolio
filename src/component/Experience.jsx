import { useRef, useEffect } from 'react';

export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Training & Experience</h2>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 10, top: 8, bottom: 8, width: 2, background: 'var(--yellow)' }} />
          {/* Timeline dot */}
          <div style={{ position: 'absolute', left: 4, top: 8, width: 14, height: 14, borderRadius: '50%', background: 'var(--yellow)', border: '3px solid var(--black)' }} />

          <div className="fade-in delay-1" style={{
            background: 'var(--white)', borderRadius: 12, padding: '28px 28px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.07)', borderLeft: '4px solid var(--yellow)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
              <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: 'var(--black)' }}>DSA Training</h3>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-mid)', background: 'var(--yellow)', padding: '3px 12px', borderRadius: 50, fontWeight: 600 }}>Jun – Jul 2025</span>
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gray-dark)', marginBottom: 16, lineHeight: 1.65 }}>
              Intensive training covering core data structures and algorithms with practical implementation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
              {['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Algorithms'].map(t => (
                <span key={t} style={{ background: 'var(--gray-light)', color: 'var(--gray-dark)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, padding: '4px 12px', borderRadius: 50 }}>{t}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray-dark)', lineHeight: 1.6 }}>
              🏗️ <strong>Capstone:</strong> Built an inventory management system using custom data structures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
