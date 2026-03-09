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
            padding: '160px 80px 100px', position: 'relative', zIndex: 1,
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
                        fontSize: 'clamp(64px, 12vw, 130px)',
                        fontWeight: 400, lineHeight: 0.92, letterSpacing: 2,
                        marginBottom: 32,
                        background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>
                        We Build{' '}
                        <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', letterSpacing: 0, fontSize: '0.9em' }}>
                            Websites
                        </em>
                        {' '}That<br />Convert.
                    </h1>

                    <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--muted)', maxWidth: 540, marginBottom: 48, fontWeight: 300 }}>
                        A digital agency obsessed with crafting high-performance websites. Precision design, clean code, results that matter.
                    </p>

                    <div className="hero-actions" style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
                        <a href="#work" className="btn-solid">View Our Work ↗</a>
                        <a href="#process" className="btn-glass">How We Work</a>
                    </div>

                    <div className="hero-stats" style={{ display: 'flex', gap: 56, marginTop: 64, paddingTop: 64, borderTop: '1px solid var(--border)' }}>
                        {[['120+', 'Projects Delivered'], ['98%', 'Client Satisfaction'], ['4.9★', 'Average Rating']].map(([n, l]) => (
                            <div key={l}>
                                <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 52, fontWeight: 400, letterSpacing: 2, color: 'var(--white)' }}>{n}</div>
                                <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-visual-col" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Main card */}
                    <div className="glass-card" style={{ width: '100%', maxWidth: 440, padding: 36, position: 'relative', borderRadius: 28 }}>
                        <div style={{ fontSize: 13, color: 'var(--muted)', letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>Conversion Rate ↑</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 56, fontWeight: 400, letterSpacing: 2, color: 'var(--white)', marginBottom: 6 }}>+284%</div>
                        <div style={{ fontSize: 14, color: 'rgba(160,240,160,0.8)', marginBottom: 32 }}>↑ 38% vs last month</div>

                        {/* Mini bar chart */}
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 90, marginBottom: 32 }}>
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
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {[
                                { name: 'TechLaunch Redesign', tag: 'Live ✓', opacity: 1 },
                                { name: 'Fintech Dashboard', tag: 'Live ✓', opacity: 0.6 },
                                { name: 'E-Commerce Platform', tag: 'Dev →', opacity: 0.35 },
                            ].map(({ name, tag, opacity }) => (
                                <div key={name} style={{
                                    display: 'flex', alignItems: 'center', gap: 12,
                                    padding: '12px 16px', borderRadius: 12,
                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                                }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', flexShrink: 0, opacity }} />
                                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
                                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating chip 1 */}
                    <div className="glass-card" style={{
                        position: 'absolute', top: -24, right: -40, zIndex: 2,
                        padding: '16px 20px', borderRadius: 16, fontSize: 13,
                        animation: 'fl1 6s ease-in-out infinite',
                    }}>
                        <div style={{ color: 'var(--muted)', marginBottom: 4 }}>Page Speed</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 32, letterSpacing: 2, color: 'var(--white)' }}>98/100</div>
                    </div>

                    {/* Floating chip 2 */}
                    <div className="glass-card" style={{
                        position: 'absolute', bottom: 60, left: -40, zIndex: 2,
                        padding: '16px 20px', borderRadius: 16, fontSize: 13,
                        animation: 'fl2 7s ease-in-out infinite',
                    }}>
                        <div style={{ color: 'var(--muted)', marginBottom: 4 }}>Monthly Traffic</div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontWeight: 400, fontSize: 32, letterSpacing: 2, color: 'var(--white)' }}>2.4M</div>
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
