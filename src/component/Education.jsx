import { useRef, useEffect } from 'react';

const entries = [
  {
    institute: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology in Computer Science',
    duration: 'Aug 2023 – Present',
    result: 'CGPA: 7.12',
    badge: 'Pursuing',
  },
  {
    institute: 'Delhi Public School',
    location: 'Gaya, Bihar',
    degree: 'Intermediate — PCM',
    duration: 'July 2020 – March 2022',
    result: '67.6%',
  },
  {
    institute: 'Holy Cross School',
    location: 'Hazaribagh, Jharkhand',
    degree: 'Matriculation',
    duration: 'March 2019 – May 2020',
    result: '81.8%',
  },
];

export default function Education() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting)
          e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="education" style={{ background: 'var(--white)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Education</h2>
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical timeline line */}
          <div style={{ position: 'absolute', left: 10, top: 8, bottom: 8, width: 2, background: 'var(--yellow)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {entries.map((edu, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot connector */}
                <div style={{ position: 'absolute', left: -36, top: 20, width: 14, height: 14, borderRadius: '50%', background: 'var(--yellow)', border: '3px solid var(--black)' }} />

                <div
                  className={`fade-in delay-${i + 1}`}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 12,
                    padding: '24px 28px',
                    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: 18, color: 'var(--black)' }}>
                      {edu.institute}
                    </h3>
                    {edu.badge && (
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, background: 'var(--yellow)', color: 'var(--black)', padding: '3px 12px', borderRadius: 50 }}>
                        {edu.badge}
                      </span>
                    )}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-mid)', marginBottom: 6 }}>
                    📍 {edu.location}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gray-dark)', marginBottom: 10 }}>
                    {edu.degree}
                  </p>
                  <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-mid)' }}>🗓 {edu.duration}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-mid)' }}>📊 {edu.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
