import { useRef, useEffect } from 'react';

const skillGroups = [
  { label: 'Languages', skills: ['C++', 'JavaScript', 'C', 'Python', 'Java'] },
  { label: 'Frontend', skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'jQuery', 'React'] },
  { label: 'Backend', skills: ['Node.js', 'Express'] },
  { label: 'Database', skills: ['MongoDB', 'MySQL'] },
  { label: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
  { label: 'Soft Skills', skills: ['Problem-Solving', 'Adaptability', 'Strategic Thinking', 'Communication'] },
];

function Badge({ skill, delay }) {
  return (
    <span className={`fade-in delay-${delay}`} style={{
      display: 'inline-block', background: 'var(--yellow)', color: 'var(--black)',
      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
      padding: '7px 16px', borderRadius: 50, border: '1.5px solid transparent',
      cursor: 'default', transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => { e.target.style.transform = 'scale(1.08)'; e.target.style.borderColor = 'var(--black)'; e.target.style.boxShadow = '2px 2px 0 var(--black)'; }}
      onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.borderColor = 'transparent'; e.target.style.boxShadow = 'none'; }}
    >{skill}</span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ background: 'var(--white)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">My Tech Stack</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {skillGroups.map((group, gi) => (
            <div key={gi} className={`fade-in delay-${gi + 1}`}>
              <p style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 12, color: 'var(--gray-mid)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{group.label}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.skills.map((s, si) => <Badge key={si} skill={s} delay={Math.min(si + 1, 5)} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
