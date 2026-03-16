import { useRef, useEffect, useState } from 'react';

const contacts = [
  { icon: '📧', label: 'Email', value: 'archikumari1012@gmail.com', href: 'mailto:archikumari1012@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/archi15', href: 'https://linkedin.com/in/archi15' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/archi1012', href: 'https://github.com/archi1012' },
  { icon: '📱', label: 'Phone', value: '+91-9142999829', href: 'tel:+919142999829' },
];

const inputStyle = (focused) => ({
  width: '100%', padding: '12px 16px', borderRadius: 8, outline: 'none',
  fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--black)',
  background: 'var(--white)', transition: 'border-color 0.2s',
  border: focused ? '2px solid var(--yellow)' : '2px solid #e0e0e0',
});

export default function Contact() {
  const ref = useRef(null);
  const [focused, setFocused] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" style={{ background: 'var(--white)' }} ref={ref}>
      <div className="container">
        <h2 className="section-heading fade-in">Let's Connect</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'start' }} className="contact-grid">
          {/* Contact info */}
          <div>
            <p className="fade-in delay-1" style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-dark)', lineHeight: 1.7, marginBottom: 32 }}>
              I'm open to internships, collaborations, and interesting projects. Feel free to reach out!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {contacts.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer" className={`fade-in delay-${i + 1}`} style={{
                  display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none',
                  background: 'var(--gray-light)', borderRadius: 10, padding: '14px 18px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gray-mid)', fontWeight: 500 }}>{c.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--black)', fontWeight: 600 }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <a href="https://docs.google.com/presentation/d/1nAqPIcq2iRSVnCJNwoCtZ3uMlQqjNk6QexIyebu3P4s/edit?usp=sharing" target="_blank" rel="noreferrer" className="fade-in delay-5" style={{
              display: 'inline-block', marginTop: 28, background: 'var(--yellow)', color: 'var(--black)',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, padding: '12px 28px',
              borderRadius: 50, textDecoration: 'none', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.target.style.background = 'var(--yellow-dark)'}
              onMouseLeave={e => e.target.style.background = 'var(--yellow)'}
            >↓ Download Resume</a>
          </div>

          {/* Form */}
          <form className="fade-in delay-2" onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--gray-dark)', display: 'block', marginBottom: 6 }}>Name</label>
              <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                style={inputStyle(focused === 'name')} placeholder="Your name" />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--gray-dark)', display: 'block', marginBottom: 6 }}>Email</label>
              <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                style={inputStyle(focused === 'email')} placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--gray-dark)', display: 'block', marginBottom: 6 }}>Message</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                rows={5} style={{ ...inputStyle(focused === 'message'), resize: 'vertical' }}
                placeholder="Tell me about your project or just say hi!" />
            </div>
            <button type="submit" onClick={() => {
              const text = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
              window.open(`https://wa.me/9142999829?text=${text}`, '_blank');
            }} style={{
              background: 'var(--yellow)', color: 'var(--black)', border: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
              padding: '13px 32px', borderRadius: 50, cursor: 'pointer',
              transition: 'background 0.2s, transform 0.2s', alignSelf: 'flex-start',
            }}
              onMouseEnter={e => { e.target.style.background = 'var(--yellow-dark)'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.target.style.background = 'var(--yellow)'; e.target.style.transform = 'translateY(0)'; }}
            >Send Message →</button>
          </form>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
