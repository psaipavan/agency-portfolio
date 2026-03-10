import { useEffect } from 'react'

function Hero() {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 90)
            })
        }, { threshold: 0.12 })
        document.querySelectorAll('.fi').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section className="hero-wrapper sec" style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            padding: 'clamp(80px, 10vw, 160px) clamp(16px, 4vw, 80px) clamp(60px, 8vw, 100px)', position: 'relative', zIndex: 1,
        }}>
            <div className="grid-2 hero-grid" style={{
                maxWidth: 1600, margin: '0 auto', width: '100%', alignItems: 'center'
            }}>
                {/* Left content */}
                <div>
                    <div className="badge-pill">
                        <span className="badge-dot"></span>
                        Available for new projects
                    </div>

                    <h1 style={{
                        fontFamily: "'Bebas Neue', cursive",
                        fontSize: 'clamp(40px, 10vw, 160px)',
                        fontWeight: 400, lineHeight: 0.92, letterSpacing: 'clamp(1px, 0.2vw, 2px)',
                        marginBottom: 'clamp(24px, 5vw, 40px)',
                        background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                        We Build{' '}
                        <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', letterSpacing: 0, fontSize: '0.9em' }}>
                            Websites
                        </em>
                        {' '}That<br />Convert.
                    </h1>

                    <p style={{ fontSize: 'clamp(16px, 3vw, 22px)', lineHeight: 1.8, color: 'var(--muted)', maxWidth: 640, marginBottom: 'clamp(32px, 6vw, 56px)', fontWeight: 300 }}>
                        A digital agency obsessed with crafting high-performance websites. Precision design, clean code, results that matter.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', alignItems: 'center', flexWrap: 'wrap' }}>
                        <a href="#work" className="btn-solid">View Our Work ↗</a>
                        <a href="#process" className="btn-glass">How We Work</a>
                    </div>

                    <div className="hero-stats" style={{ display: 'flex', gap: 'clamp(40px, 8vw, 80px)', marginTop: 'clamp(32px, 8vw, 72px)', paddingTop: 'clamp(32px, 8vw, 72px)', borderTop: '1px solid var(--border)' }}>
                        {[['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['4.9★', 'Average Rating']].map(([n, l]) => (
                            <div key={l}>
                                <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(32px, 6vw, 64px)', fontWeight: 400, letterSpacing: 2, color: 'var(--white)' }}>{n}</div>
                                <div style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'var(--muted)', marginTop: 8 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-visual-col" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Main card */}
                    <div className="glass-card" style={{ width: '100%', maxWidth: 520, padding: 'clamp(24px, 5vw, 48px)', position: 'relative', borderRadius: 32 }}>
                        <div style={{ fontSize: 'clamp(12px, 2vw, 16px)', color: 'var(--muted)', letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' }}>Conversion Rate ↑</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 400, letterSpacing: 2, color: 'var(--white)', marginBottom: 10 }}>+284%</div>
                        <div style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'rgba(160,240,160,0.8)', marginBottom: 'clamp(24px, 5vw, 40px)' }}>↑ 38% vs last month</div>

                        {/* Mini bar chart */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(6px, 2vw, 12px)', height: 'clamp(80px, 15vw, 120px)', marginBottom: 'clamp(24px, 5vw, 40px)' }}>
                            {[
                                { h: '45%', hi: false },
                                { h: '62%', hi: false },
                                { h: '38%', hi: false },
                                { h: '78%', hi: true },
                                { h: '55%', hi: false },
                                { h: '88%', hi: true },
                                { h: '66%', hi: false },
                            ].map((bar, i) => (
                                <div key={i} style={{
                                    flex: 1, borderRadius: '3px 3px 0 0',
                                    height: bar.h,
                                    background: bar.hi ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.12)',
                                    border: `1px solid ${bar.hi ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
                                    animation: `grow 0.8s ease-out ${i * 0.05}s both`,
                                    transformOrigin: 'bottom',
                                }} />
                            ))}
                        </div>

                        {/* Project list */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 2vw, 16px)' }}>
                            {[
                                { name: 'TechLaunch Redesign', tag: 'Live ✓', opacity: 1 },
                                { name: 'Fintech Dashboard', tag: 'Live ✓', opacity: 0.6 },
                                { name: 'E-Commerce Platform', tag: 'Dev →', opacity: 0.35 },
                            ].map(({ name, tag, opacity }) => (
                                <div key={name} style={{
                                    display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)',
                                    padding: 'clamp(8px, 2vw, 16px) clamp(12px, 2vw, 20px)', borderRadius: 16,
                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                                }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', flexShrink: 0, opacity }} />
                                    <span style={{ fontSize: 'clamp(13px, 2vw, 18px)', color: 'rgba(255,255,255,0.7)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
                                    <span style={{ fontSize: 'clamp(12px, 1.5vw, 14px)', color: 'var(--muted)' }}>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating chip 1 */}
                    <div className="glass-card" style={{
                        position: 'absolute', top: 'clamp(-24px, -5vw, -32px)', right: 'clamp(-40px, -8vw, -60px)', zIndex: 2,
                        padding: 'clamp(12px, 2vw, 20px) clamp(16px, 3vw, 28px)', borderRadius: 20, fontSize: 'clamp(13px, 2vw, 16px)',
                        animation: 'fl1 6s ease-in-out infinite',
                    }}>
                        <div style={{ color: 'var(--muted)', marginBottom: 6 }}>Page Speed</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: 2, color: 'var(--white)' }}>98/100</div>
                    </div>

                    {/* Floating chip 2 */}
                    <div className="glass-card" style={{
                        position: 'absolute', bottom: 'clamp(40px, 6vw, 60px)', left: 'clamp(-40px, -8vw, -60px)', zIndex: 2,
                        padding: 'clamp(12px, 2vw, 20px) clamp(16px, 3vw, 28px)', borderRadius: 20, fontSize: 'clamp(13px, 2vw, 16px)',
                        animation: 'fl2 7s ease-in-out infinite',
                    }}>
                        <div style={{ color: 'var(--muted)', marginBottom: 6 }}>Monthly Traffic</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: 2, color: 'var(--white)' }}>2.4M</div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fl1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes fl2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(9px)} }
      `}</style>
        </section>
    )
}

export default Hero
