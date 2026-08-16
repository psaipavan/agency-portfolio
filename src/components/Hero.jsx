import { useEffect } from 'react'

const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Hero() {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 100)
            })
        }, { threshold: 0.1 })
        document.querySelectorAll('.hero-wrap .fi-scale, .hero-wrap .fi-left').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section className="hero-wrap">
            {/* Badge */}
            <div className="fi-scale" style={{ marginBottom: 0 }}>
                <span className="hero-badge">
                    <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#34d399',
                        boxShadow: '0 0 8px rgba(52,211,153,0.6)',
                        animation: 'pulse-dot 2s ease-in-out infinite',
                        flexShrink: 0,
                    }} />
                    Open for Projects — 2026
                </span>
            </div>

            {/* Headline */}
            <h1 className="fi-scale hero-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(36px, 7vw, 84px)',
                fontWeight: 800,
                lineHeight: 1.06,
                color: 'var(--text-heading)',
                marginBottom: 28,
                letterSpacing: '-3px',
                maxWidth: '900px',
                textAlign: 'center',
            }}>
                We Build Digital{' '}
                <span style={{
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Products
                </span>{' '}
                That Grow Your Business
            </h1>

            {/* Subtext */}
            <p className="fi-scale hero-sub" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: 1.65,
                color: 'var(--text-sub)',
                maxWidth: 580,
                marginBottom: 44,
                textAlign: 'center',
                fontWeight: 400,
            }}>
                Good Will is a full-service digital agency combining strategy, design,
                and engineering to build high-performing products that convert.
            </p>

            {/* CTAs */}
            <div className="fi-scale hero-ctas">
                <a href="#work" onClick={(e) => scrollTo(e, 'work')} className="btn-accent">
                    See Our Work
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="btn-glass">
                    Our Services
                </a>
            </div>

            {/* Trusted by */}
            <div className="fi-left" style={{ textAlign: 'center' }}>
                <p style={{
                    fontSize: 11, fontWeight: 600, letterSpacing: '2.5px',
                    textTransform: 'uppercase', color: 'var(--text-muted)',
                    fontFamily: "'Inter', sans-serif", marginBottom: 20,
                }}>Trusted by innovative teams</p>
                <div style={{
                    display: 'flex', gap: 'clamp(24px, 4vw, 56px)', alignItems: 'center',
                    flexWrap: 'wrap', justifyContent: 'center',
                }}>
                    {['NovaTech', 'FinFlow', 'Luxe', 'Orbital', 'Vaultify'].map(name => (
                        <span key={name} style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(15px, 2vw, 20px)',
                            fontWeight: 700,
                            color: 'var(--text-muted)',
                            letterSpacing: '-0.5px',
                            transition: 'color 0.3s ease',
                            cursor: 'default',
                        }}
                            onMouseEnter={e => e.target.style.color = 'var(--text-heading)'}
                            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                        >{name}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
