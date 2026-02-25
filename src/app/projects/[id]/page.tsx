'use client';

import { use } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    // Icons based on project ID for the header
    const renderIllustration = () => {
        switch (project.id) {
            case 'oee-system':
                return (
                    <div className="mesh-gradient-1" style={{
                        width: '100%',
                        height: '450px',
                        display: 'flex',
                        padding: '24px',
                        gap: '16px',
                        overflow: 'hidden',
                        background: 'var(--background)',
                        borderRadius: '24px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        {/* Sidebar Mockup */}
                        <div style={{ width: '60px', height: '100%', background: 'rgba(99,102,241,0.05)', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', padding: '12px', gap: '12px' }}>
                            {[1, 2, 3, 4, 5].map(i => <div key={i} style={{ width: '100%', height: '36px', background: 'rgba(99,102,241,0.1)', borderRadius: '8px' }}></div>)}
                        </div>

                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* Top Bar Mockup */}
                            <div style={{ height: '40px', width: '100%', background: 'rgba(99,102,241,0.05)', borderRadius: '10px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '12px' }}>
                                <div style={{ width: '80px', height: '10px', background: 'var(--primary)', opacity: 0.3, borderRadius: '10px' }}></div>
                                <div style={{ width: '120px', height: '10px', background: 'var(--secondary)', opacity: 0.2, borderRadius: '10px' }}></div>
                            </div>

                            {/* KPI Cards Row */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                {[
                                    { label: 'Availability', value: '98.46%', color: 'var(--primary)', icon: '⏱️' },
                                    { label: 'Performance', value: '99.37%', color: '#10b981', icon: '📈' },
                                    { label: 'Quality', value: '98.29%', color: '#f59e0b', icon: '✨' },
                                    { label: 'Overall OEE', value: '96.17%', color: 'var(--secondary)', icon: '🏆' }
                                ].map((kpi, i) => (
                                    <div key={i} className="glass-panel" style={{
                                        padding: '20px',
                                        borderRadius: '16px',
                                        background: 'var(--background)',
                                        border: `1px solid ${kpi.color}33`,
                                        boxShadow: `0 8px 24px ${kpi.color}11`
                                    }}>
                                        <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{kpi.icon}</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{kpi.label}</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: kpi.color, marginTop: '4px' }}>{kpi.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Central Chart Area */}
                            <div className="glass-panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.4)' }}>
                                <div style={{ width: '150px', height: '12px', background: 'var(--foreground)', opacity: 0.1, borderRadius: '10px', marginBottom: '24px' }}></div>
                                <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                                    {[0.4, 0.7, 0.5, 0.9, 0.75, 0.6, 0.8, 0.45, 0.7, 0.5, 0.85, 0.6].map((h, i) => (
                                        <div key={i} className="floating" style={{
                                            flex: 1,
                                            height: `${h * 100}%`,
                                            background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                                            borderRadius: '6px 6px 0 0',
                                            animationDelay: `${i * 0.15}s`,
                                            opacity: 0.8,
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                                        }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'sorting-system':
                return (
                    <div className="mesh-gradient-1" style={{ width: '100%', height: '450px', display: 'flex', flexDirection: 'column', padding: '40px', alignItems: 'center', justifyContent: 'center', gap: '30px', borderRadius: '24px' }}>
                        {/* Conveyor Belt */}
                        <div style={{ width: '80%', height: '40px', background: 'var(--foreground)', opacity: 0.1, borderRadius: '20px', position: 'relative', overflow: 'hidden', border: '2px solid var(--glass-border)' }}>
                            <div className="floating" style={{ position: 'absolute', width: '200%', height: '100%', background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, var(--primary) 40px, var(--primary) 42px)', opacity: 0.2 }}></div>
                        </div>

                        {/* Sorted Objects */}
                        <div style={{ display: 'flex', gap: '30px' }}>
                            <div className="floating" style={{ width: '100px', height: '100px', background: 'var(--glass-bg)', border: '1px solid var(--primary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px var(--primary-glow)' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                            </div>
                            <div className="floating" style={{ width: '100px', height: '100px', background: 'var(--glass-bg)', border: '1px solid var(--secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px var(--secondary-glow)', animationDelay: '0.6s' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--secondary)', transform: 'rotate(45deg)' }}></div>
                            </div>
                        </div>

                        {/* Sorting Bins */}
                        <div style={{ display: 'flex', gap: '100px', marginTop: '20px' }}>
                            <div style={{ width: '120px', height: '100px', border: '2px solid var(--primary)', borderRadius: '12px 12px 0 0', borderBottom: 'none', position: 'relative' }}>
                                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%', background: 'var(--primary)', opacity: 0.2 }}></div>
                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 800 }}>METAL</div>
                            </div>
                            <div style={{ width: '120px', height: '100px', border: '2px solid var(--secondary)', borderRadius: '12px 12px 0 0', borderBottom: 'none', position: 'relative' }}>
                                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '30%', background: 'var(--secondary)', opacity: 0.2 }}></div>
                                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 800 }}>PLASTIC</div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="mesh-gradient-1" style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '24px' }}>
                        <div style={{ position: 'relative', width: '300px', height: '150px' }}>
                            <div className="floating" style={{ position: 'absolute', left: 0, top: '30px', width: '60px', height: '60px', background: 'var(--primary)', borderRadius: '12px' }}></div>
                            <div className="floating" style={{ position: 'absolute', right: 0, top: '30px', width: '60px', height: '60px', background: 'var(--secondary)', borderRadius: '12px', animationDelay: '0.7s' }}></div>
                            <div className="floating" style={{ position: 'absolute', left: '120px', bottom: 0, width: '60px', height: '60px', background: 'var(--primary)', opacity: 0.7, borderRadius: '12px', animationDelay: '1.4s' }}></div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <main className="section">
            <div className="container" style={{ paddingTop: '2rem' }}>
                <Link href="/" className="btn btn-outline" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '8px', marginLeft: 0 }}>
                    ← Back to Home
                </Link>

                <div style={{ marginBottom: '4rem' }}>
                    {renderIllustration()}
                </div>

                <div className="grid-2" style={{ alignItems: 'start', gap: '5rem' }}>
                    <div>
                        <span className="tag" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem', marginBottom: '1.5rem', display: 'inline-block' }}>{project.category}</span>
                        <h1 className="gradient-text">{project.title}</h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--foreground)', textAlign: 'justify' }}>
                            {project.fullDesc}
                        </p>

                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Key Features</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {project.features.map((feature, i) => (
                                    <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'start', gap: '12px' }}>
                                        <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                                        <span style={{ color: 'var(--foreground)' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Project Details</h3>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div>
                                <p style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>Year</p>
                                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>{project.year}</p>
                            </div>

                            <div>
                                <p style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>My Role</p>
                                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>{project.role}</p>
                            </div>

                            <div>
                                <p style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>Technologies</p>
                                <div className="project-tags" style={{ marginTop: '0.5rem', flexWrap: 'wrap' }}>
                                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Key Challenges</h4>
                                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    {project.challenges.map((c, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{c}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
