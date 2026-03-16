import { useRef, useEffect } from 'react';

function useScrollFade(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
}

export function OpenSource() {
  const ref = useRef(null);
  useScrollFade(ref);
  return (
    <section id="opensource" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Open Source</h2>
        <div className="fade-in delay-1" style={{
          border: '2px solid var(--yellow)', borderRadius: 12, padding: '40px 32px',
          textAlign: 'center', maxWidth: 520,
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🐙</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-dark)', marginBottom: 24, lineHeight: 1.6 }}>
            No open source contributions yet — watch this space!
          </p>
          <a href="https://github.com/archi1012" target="_blank" rel="noreferrer" style={{
            background: 'var(--yellow)', color: 'var(--black)', fontFamily: 'var(--font-body)',
            fontWeight: 600, fontSize: 14, padding: '10px 24px', borderRadius: 50,
            textDecoration: 'none', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--yellow-dark)'}
            onMouseLeave={e => e.target.style.background = 'var(--yellow)'}
          >View GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  const ref = useRef(null);
  useScrollFade(ref);
  return (
    <section id="research" style={{ background: 'var(--gray-light)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Research & Publications</h2>
        <div className="fade-in delay-1" style={{
          borderRadius: 12, padding: '28px 28px', background: 'var(--white)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.07)', maxWidth: 520,
        }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-dark)', lineHeight: 1.6 }}>
            📄 No publications yet. Research interests include web systems and CS fundamentals.
          </p>
        </div>
      </div>
    </section>
  );
}
