/* ═══════════════════════════════════════════
   CONFIG
   ═══════════════════════════════════════════ */
const WHATSAPP_NUMBER = '919876543210'
const getWhatsAppUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

/* Smooth scroll helper */
const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Footer() {
    return (
        <>
            {/* ────── CTA BAND ────── */}
            <div className="cta-band-wrap">
                <div id="contact" className="cta-band">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="sec-label" style={{ justifyContent: 'center', margin: '0 auto 20px' }}>
                            Start a Project
                        </div>
                        <h2 style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(32px, 5.5vw, 56px)',
                            fontWeight: 800,
                            color: 'var(--text-heading)',
                            marginBottom: 16, lineHeight: 1.1,
                        }}>
                            Ready to Build Something{' '}
                            <em style={{
                                fontStyle: 'italic',
                                background: 'var(--accent-gradient)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>Great</em>?
                        </h2>
                        <p style={{
                            fontSize: 'clamp(15px, 2vw, 18px)',
                            color: 'var(--text-sub)',
                            maxWidth: 460, margin: '0 auto 36px',
                            lineHeight: 1.75,
                        }}>
                            Share your vision with us. We'll respond within 24 hours
                            with a free consultation and project estimate.
                        </p>
                        <div className="hero-ctas" style={{ marginBottom: 0, justifyContent: 'center' }}>
                            <a
                                href={getWhatsAppUrl("Hi! I'd like to start a new project with Good Will Agency. Here are my requirements:\n\n")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp cta-band-btn"
                                style={{ gap: 8 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                Start on WhatsApp →
                            </a>
                            <a
                                href={getWhatsAppUrl("Hi! I'd like to schedule a call with Good Will Agency to discuss my project. When are you available?")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glass cta-band-btn"
                            >
                                Schedule a Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ────── FOOTER ────── */}
            <footer style={{
                borderTop: '1px solid var(--glass-border)',
                padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 56px) 32px',
                maxWidth: 1320, margin: '0 auto',
                position: 'relative', zIndex: 1,
            }}>
                <div className="grid-footer" style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}>
                    {/* Brand */}
                    <div>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 22, fontWeight: 700, display: 'inline-flex',
                            alignItems: 'center', gap: 10,
                            color: 'var(--text-heading)', marginBottom: 14,
                        }}>
                            <span style={{
                                width: 28, height: 28, borderRadius: 8,
                                background: 'var(--accent-gradient)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 13, fontWeight: 800, color: '#fff',
                                fontFamily: "'Inter', sans-serif",
                            }}>G</span>
                            GoodWill
                        </a>
                        <p style={{
                            fontSize: 14, color: 'var(--text-sub)',
                            lineHeight: 1.7, maxWidth: 300, marginTop: 14,
                        }}>
                            A digital agency building websites and brands that drive real business results.
                            Based in Hyderabad, working globally.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {[
                                { label: 'UI/UX Design', msg: "Hi! I'm interested in your UI/UX Design services." },
                                { label: 'Web Development', msg: "Hi! I'm interested in your Web Development services." },
                                { label: 'E-Commerce', msg: "Hi! I'm interested in your E-Commerce services." },
                                { label: 'SEO & Growth', msg: "Hi! I'm interested in your SEO & Growth services." },
                                { label: 'Brand Identity', msg: "Hi! I'm interested in your Brand Identity services." },
                            ].map(({ label, msg }) => (
                                <li key={label}>
                                    <a
                                        href={getWhatsAppUrl(msg)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {[
                                { label: 'Services', id: 'services' },
                                { label: 'Portfolio', id: 'work' },
                                { label: 'Process', id: 'process' },
                                { label: 'Pricing', id: 'pricing' },
                                { label: 'Contact', id: 'contact' },
                            ].map(({ label, id }) => (
                                <li key={label}>
                                    <a
                                        href={`#${id}`}
                                        onClick={(e) => scrollTo(e, id)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <li><a href="mailto:hello@goodwillagency.com">hello@goodwillagency.com</a></li>
                            <li>
                                <a
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://maps.google.com/?q=Hyderabad,India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Hyderabad, India
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="foot-bar" style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: 'clamp(20px, 3vw, 28px)',
                    fontSize: 13, color: 'var(--text-muted)',
                }}>
                    <span>© 2026 Good Will Agency. All rights reserved.</span>
                    <div className="social-row" style={{ display: 'flex', gap: 8 }}>
                        {[
                            { label: '𝕏', url: 'https://twitter.com/goodwillagency', title: 'Twitter / X' },
                            { label: 'in', url: 'https://linkedin.com/company/goodwillagency', title: 'LinkedIn' },
                            { label: 'ig', url: 'https://instagram.com/goodwillagency', title: 'Instagram' },
                            { label: 'wa', url: `https://wa.me/${WHATSAPP_NUMBER}`, title: 'WhatsApp' },
                        ].map(({ label, url, title }) => (
                            <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                title={title}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
