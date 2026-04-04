function Footer() {
    return (
        <>
            {/* CTA Band */}
            <div id="contact" className="cta-band" style={{
                margin: '0 clamp(16px, 4vw, 40px) clamp(40px, 6vw, 80px)', borderRadius: 24, padding: 'clamp(32px, 5vw, 64px) clamp(20px, 4vw, 48px)',
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
                    fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 400,
                    letterSpacing: 2, marginBottom: 'clamp(16px, 3vw, 24px)', position: 'relative',
                }}>
                    Ready to Build<br />
                    <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', letterSpacing: 1, fontSize: '0.88em' }}>Something</em> Great?
                </h2>
                <p style={{ fontSize: 'clamp(14px, 2vw, 18px)', color: 'var(--muted)', marginBottom: 'clamp(24px, 4vw, 40px)', fontWeight: 300, position: 'relative' }}>
                    Tell us about your project. We respond within 24 hours.
                </p>
                <div style={{ display: 'flex', gap: 'clamp(12px, 2vw, 16px)', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                    <a href="mailto:hello@nexus.agency" className="btn-solid">Start Your Project →</a>
                    <a href="#" className="btn-glass">Schedule a Call</a>
                </div>
            </div>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid var(--border)', padding: 'clamp(32px, 5vw, 64px) clamp(16px, 4vw, 32px) 32px',
                maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1,
            }}>
                <div className="grid-footer" style={{ marginBottom: 'clamp(32px, 5vw, 48px)' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ fontFamily: "'Bebas Neue', cursive", fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 400, letterSpacing: 4, marginBottom: 16 }}>
                            NEX<span style={{ color: 'var(--muted)' }}>US</span>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, maxWidth: 360 }}>
                            A digital agency building websites that drive real business results. Based in Hyderabad, working globally.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '12px', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 'clamp(12px, 2vw, 20px)' }}>Services</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {['Web Design', 'Development', 'E-Commerce', 'Landing Pages'].map(s => (
                                <li key={s}><a href="#services" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                >{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ fontSize: '12px', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 'clamp(12px, 2vw, 20px)' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {['About', 'Work', 'Process', 'Careers'].map(s => (
                                <li key={s}><a href="#" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                                >{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '12px', letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 'clamp(12px, 2vw, 20px)' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {['hello@nexus.agency', '+91 98765 43210', 'Hyderabad, India'].map(s => (
                                <li key={s}><a href="mailto:hello@nexus.agency" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', transition: 'color .2s' }}
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
                    borderTop: '1px solid var(--border)', paddingTop: 'clamp(20px, 3vw, 32px)',
                    fontSize: '13px', color: 'var(--muted)',
                }}>
                    <span>© 2025 NEXUS Agency. All rights reserved.</span>
                    <div className="socials" style={{ display: 'flex', gap: '12px' }}>
                        {['𝕏', 'in', 'ig', 'be'].map(s => (
                            <a key={s} href="#" style={{
                                width: '36px', height: '36px', borderRadius: '50%',
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
