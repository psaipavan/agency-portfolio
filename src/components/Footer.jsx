function Footer() {
    return (
        <>
            {/* CTA Band */}
            <div id="contact" className="cta-band" style={{
                margin: '0 80px 140px', borderRadius: 32, padding: '120px 100px',
                background: 'var(--glass)', border: '1px solid var(--border)',
                backdropFilter: 'blur(30px) saturate(160%)',
                textAlign: 'center', position: 'relative', overflow: 'hidden', zIndex: 1,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.3)',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse 50% 70% at 25% 50%, rgba(255,255,255,0.03) 0%, transparent 70%), radial-gradient(ellipse 50% 70% at 75% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <h2 style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: 'clamp(64px, 12vw, 120px)', fontWeight: 400,
                    letterSpacing: 2, marginBottom: 32, position: 'relative',
                }}>
                    Ready to Build<br />
                    <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', letterSpacing: 1, fontSize: '0.88em' }}>Something</em> Great?
                </h2>
                <p style={{ fontSize: 22, color: 'var(--muted)', marginBottom: 56, fontWeight: 300, position: 'relative' }}>
                    Tell us about your project. We respond within 24 hours.
                </p>
                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                    <a href="mailto:hello@nexus.agency" className="btn-solid">Start Your Project →</a>
                    <a href="#" className="btn-glass">Schedule a Call</a>
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid var(--border)', padding: '100px 80px 60px',
                maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1,
            }}>
                <div className="grid-footer" style={{ marginBottom: 80 }}>
                    {/* Brand */}
                    <div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 48, fontWeight: 400, letterSpacing: 4, marginBottom: 24 }}>
                            NEX<span style={{ color: 'var(--muted)' }}>US</span>
                        </div>
                        <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 420 }}>
                            A digital agency building websites that drive real business results. Based in Hyderabad, working globally.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>Services</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                            {['Web Design', 'Development', 'E-Commerce', 'Landing Pages'].map(s => (
                                <li key={s}><a href="#services" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                >{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                            {['About', 'Work', 'Process', 'Careers'].map(s => (
                                <li key={s}><a href="#" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                >{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: 16, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 28 }}>Contact</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 18 }}>
                            {['hello@nexus.agency', '+91 98765 43210', 'Hyderabad, India'].map(s => (
                                <li key={s}><a href="mailto:hello@nexus.agency" style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                >{s}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="foot-bottom" style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderTop: '1px solid var(--border)', paddingTop: 40,
                    fontSize: 14, color: 'var(--muted)',
                }}>
                    <span>© 2025 NEXUS Agency. All rights reserved.</span>
                    <div className="socials" style={{ display: 'flex', gap: 16 }}>
                        {['𝕏', 'in', 'ig', 'be'].map(s => (
                            <a key={s} href="#" style={{
                                width: 44, height: 44, borderRadius: '50%',
                                background: 'var(--glass)', border: '1px solid var(--border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 16, color: 'var(--muted)', textDecoration: 'none',
                                transition: 'background .2s, color .2s, border-color .2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = 'var(--glass-hv)'; e.currentTarget.style.borderColor = 'var(--border-hv)'; e.currentTarget.style.color = 'var(--white)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
                            >{s}</a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
