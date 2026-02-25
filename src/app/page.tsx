'use client';

import { useState, FormEvent, useEffect } from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    setMounted(true);
    // Scroll Reveal Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderProjectIllustration = (id: string) => {
    switch (id) {
      case 'oee-system':
        return (
          <div className="mesh-gradient-1" style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            padding: '10px',
            gap: '8px',
            overflow: 'hidden',
            background: 'var(--background)',
            position: 'relative'
          }}>
            <div className="scanning-line"></div>
            {/* Mini Sidebar */}
            <div style={{ width: '30px', height: '100%', background: 'rgba(99,102,241,0.05)', borderRadius: '6px', border: '1px solid var(--glass-border)' }}></div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Header */}
              <div style={{ height: '15px', width: '100%', background: 'rgba(99,102,241,0.05)', borderRadius: '4px', border: '1px solid var(--glass-border)' }}></div>

              {/* KPI Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[
                  { label: '98.46%', color: 'var(--primary)' },
                  { label: '99.37%', color: '#10b981' },
                  { label: '98.29%', color: '#f59e0b' },
                  { label: '96.17%', color: 'var(--secondary)' }
                ].map((kpi, i) => (
                  <div key={i} style={{
                    padding: '6px',
                    borderRadius: '8px',
                    background: 'var(--background)',
                    border: `1px solid ${kpi.color}33`,
                    boxShadow: `0 4px 12px ${kpi.color}11`
                  }}>
                    <div style={{ width: '10px', height: '2px', background: kpi.color, marginBottom: '2px', borderRadius: '10px' }}></div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 800, color: kpi.color }}>{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Central Chart Area */}
              <div className="glass-panel" style={{ flex: 1, padding: '10px', display: 'flex', alignItems: 'flex-end', gap: '4px', background: 'rgba(255,255,255,0.3)' }}>
                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.5].map((h, i) => (
                  <div key={i} className="floating" style={{
                    flex: 1,
                    height: `${h * 100}%`,
                    background: `linear-gradient(to top, var(--primary), var(--secondary))`,
                    borderRadius: '3px',
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0.8
                  }}></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'sorting-system':
        return (
          <div className="mesh-gradient-1" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center', justifyContent: 'center', gap: '15px', position: 'relative' }}>
            <div className="scanning-line"></div>
            <div style={{ width: '80%', height: '15px', background: 'var(--foreground)', opacity: 0.1, borderRadius: '10px' }}></div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="floating" style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' }}></div>
              <div className="floating" style={{ width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '8px', animationDelay: '0.4s' }}></div>
              <div className="floating" style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px', animationDelay: '0.8s' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
              <div style={{ width: '50px', height: '40px', border: '1px solid var(--primary)', borderRadius: '4px', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%', background: 'var(--primary)', opacity: 0.3 }}></div>
              </div>
              <div style={{ width: '50px', height: '40px', border: '1px solid var(--secondary)', borderRadius: '4px', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '20%', background: 'var(--secondary)', opacity: 0.3 }}></div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="mesh-gradient-1" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div className="scanning-line"></div>
            <div style={{ position: 'relative', width: '200px', height: '100px' }}>
              <div className="floating" style={{ position: 'absolute', left: 0, top: '20px', width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px' }}></div>
              <div className="floating" style={{ position: 'absolute', right: 0, top: '20px', width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '8px', animationDelay: '0.7s' }}></div>
              <div className="floating" style={{ position: 'absolute', left: '80px', bottom: 0, width: '40px', height: '40px', background: 'var(--primary)', opacity: 0.7, borderRadius: '8px', animationDelay: '1.4s' }}></div>
              <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                <path d="M 40,40 L 80,80 M 120,80 L 160,40" stroke="var(--primary)" strokeWidth="2" opacity="0.3" fill="none" />
              </svg>
            </div>
          </div>
        );
    }
  };

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmittedName(data.name as string);
        setFormStatus('success');
        setShowModal(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  }

  return (
    <main>
      {/* Success Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255,255,255,0.4)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease'
        }}>
          <div className="glass-panel" style={{
            padding: '3rem',
            maxWidth: '450px',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.2)',
            border: '1px solid var(--primary-glow)',
            animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              fontSize: '2.5rem',
              color: 'white',
              boxShadow: '0 0 20px var(--primary-glow)'
            }}>
              ✓
            </div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--foreground)' }}>Message Sent!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
              Thank you for reaching out, {submittedName || 'there'}! Your message has been safely stored in your dedicated database. I will get back to you soon.
            </p>
            <button
              onClick={() => {
                setShowModal(false);
                setFormStatus('idle');
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Great!
            </button>
          </div>
        </div>
      )}

      <nav className={`navbar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="brand gradient-text">Portfolio.</a>
          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <div className="nav-links">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero reveal">
        <div className="hero-content container">
          <p style={{ color: 'var(--primary)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Welcome to My Digital World
          </p>
          <h1>Building the Future <br />with <span className="gradient-text">Code & Design</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            I am a Mechatronics Engineering student focused on creating seamless, modern, and high-performance digital experiences.
          </p>
          <div>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section reveal">
        <div className="container">
          <h2>About Me</h2>
          <div className="grid-2">
            <div>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Hi! I am a <strong>6th-semester Mechatronics Engineering student</strong> with a huge passion for the intersection between hardware and software.
              </p>
              <p>
                My focus is on creating innovative solutions that solve real-world industrial problems. Whether it's programming a PLC, designing a 3D model, or building a high-performance web dashboard, I strive for excellence in every pixel and every line of code.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem' }}>3+</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>Years of Study</p>
              </div>
              <div className="glass-panel" style={{ textAlign: 'center' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem' }}>10+</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>Technical Projects</p>
              </div>
              <div className="glass-panel" style={{ textAlign: 'center', gridColumn: 'span 2' }}>
                <h3 className="gradient-text" style={{ fontSize: '2.5rem' }}>5+ Awards</h3>
                <p style={{ margin: 0, fontWeight: 600 }}>Competitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section reveal" style={{ background: 'var(--section-bg-alt)' }}>
        <div className="container">
          <h2>Skills & Technology</h2>
          <div className="grid-3">
            <div className="glass-panel">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
              <h3>Engineering & 3D</h3>
              <p>Mastering technical design and modeling for industrial precision.</p>
              <div className="marquee-container">
                <div className="marquee-content">
                  {['AutoCAD', 'Inventor', 'PLC programming', 'AutoCAD', 'Inventor', 'PLC programming'].map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
              <h3>Design & UI/UX</h3>
              <p>Creating attractive and user-friendly visual interfaces.</p>
              <div className="marquee-container">
                <div className="marquee-content">
                  {['Figma', 'Glassmorphism', 'Figma', 'Glassmorphism'].map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="glass-panel">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
              <h3>Software & AI</h3>
              <p>Building scalable software and integrating artificial intelligence.</p>
              <div className="marquee-container">
                <div className="marquee-content">
                  {['Next.js', 'Python', 'Node.js', 'Next.js', 'Python', 'Node.js'].map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section reveal">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid-2">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="glass-panel project-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                <div className="project-image">
                  {renderProjectIllustration(project.id)}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 3 }}>
                    <span className="tag" style={{ background: 'var(--primary)', color: 'white', border: 'none' }}>{project.category}</span>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="marquee-container">
                  <div className="marquee-content">
                    {/* Duplicate tags for seamless infinite scroll */}
                    {[...project.tags, ...project.tags, ...project.tags].map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section reveal" style={{ background: 'var(--section-bg-alt)' }}>
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <span className="timeline-date">2023 - Present</span>
                <h3>Full Stack & Systems Developer</h3>
                <p>Developing industrial monitoring systems and IIoT dashboards.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"><div className="timeline-dot"></div></div>
              <div className="timeline-content">
                <span className="timeline-date">2021 - 2023</span>
                <h3>Junior Mechatronics Engineer</h3>
                <p>Automation projects involving PLC and sensor integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section reveal">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h2>Get in Touch</h2>
            <div className="grid-2" style={{ alignItems: 'start' }}>
              <div>
                <h3>Let's Collaborate!</h3>
                <p>I'm open to discussing new projects and creative ideas.</p>
                <div style={{ marginTop: '2rem' }}>
                  <p>✉ khalid@gmail.com</p>
                  <p>📍 Surabaya, Indonesia</p>
                </div>
              </div>
              <form onSubmit={handleContactSubmit} style={{ display: 'grid', gap: '1rem' }}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" rows={4} placeholder="Your Message" required></textarea>
                <button type="submit" disabled={formStatus === 'loading'} className="btn btn-primary">
                  {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; {mounted ? new Date().getFullYear() : '2026'} Khalid Mechatronics Portfolio. Created with Next.js.</p>
      </footer>
    </main>
  );
}
