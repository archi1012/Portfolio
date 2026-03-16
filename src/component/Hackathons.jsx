import { useRef, useEffect } from 'react';

const achievements = [
  { icon: '🥇', title: 'Binary Blitz Hackathon — Finalist', desc: '24-Hour Hackathon organized by Coding Ninjas × LPU. Reached the final round.' },
  { icon: '🚀', title: 'Startup Expo — Participant', desc: 'Participated in the Startup Expo organized by IIM Amritsar.' },
  { icon: '☁️', title: 'AWS One Day Online Conference', desc: 'Attended cloud basics & industry insights session by AWS.' },
  { icon: '🎬', title: 'Event Coordinator', desc: 'Coordinated Cinemania, Magnitude, and Kitab Utsav events at LPU.' },
  { icon: '🎭', title: 'Active Member', desc: 'Department of Youth Capital & Cinema Society at LPU.' },
];

export default function Hackathons() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hackathons" style={{ background: 'var(--white)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Achievements & Events</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {achievements.map((a, i) => (
            <div key={i} className={`fade-in delay-${Math.min(i + 1, 5)}`} style={{
              background: 'var(--white)', borderRadius: 12, padding: '24px',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid #eee',
              display: 'flex', gap: 16, alignItems: 'flex-start',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'; }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: '50%', background: 'var(--yellow)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, flexShrink: 0,
              }}>{a.icon}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 15, color: 'var(--black)', marginBottom: 6, lineHeight: 1.3 }}>{a.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gray-mid)', lineHeight: 1.5 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
