import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    // Responsive padding values
    const navPadding = 'clamp(12px, 3vw, 36px)'
    const logoFontSize = 'clamp(28px, 4vw, 40px)'
    const linkFontSize = 'clamp(14px, 2vw, 18px)'

    return (
        <>
            <nav className="nexus-nav" style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
                padding: `${navPadding} clamp(16px, 4vw, 80px)`,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'rgba(6,6,16,0.65)',
                backdropFilter: 'blur(24px) saturate(160%)',
                WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                borderBottom: '1px solid var(--border)',
            }}>
                <div style={{
                    fontFamily: "'Bebas Neue', cursive", fontSize: logoFontSize, fontWeight: 400,
                    letterSpacing: 2, color: 'var(--white)', zIndex: 501, position: 'relative'
                }}>
                    NEX<span style={{ color: 'rgba(255,255,255,0.45)' }}>US</span>
                </div>

                {/* Desktop Links */}
                <ul className="nav-links">
                    {[['#services', 'Services'], ['#work', 'Work'], ['#process', 'Process'], ['#pricing', 'Pricing']].map(([href, label]) => (
                        <li key={href}>
                            <a href={href} style={{
                                color: 'var(--muted)', textDecoration: 'none', fontSize: linkFontSize, fontWeight: 500,
                                transition: 'color .2s',
                            }}
                                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                            >{label}</a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a href="#contact" className="nav-desktop-cta" style={{
                    padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 36px)', borderRadius: 100,
                    background: 'var(--glass-md)', border: '1px solid var(--border)',
                    color: 'var(--white)', fontSize: 'clamp(13px, 2vw, 17px)', fontWeight: 600,
                    textDecoration: 'none', backdropFilter: 'blur(10px)',
                    transition: 'background .2s, border-color .2s, transform .2s',
                    whiteSpace: 'nowrap',
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--glass-hv)'; e.currentTarget.style.borderColor = 'var(--border-hv)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass-md)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >Start a Project →</a>

                {/* Mobile Hamburger */}
                <button
                    className="nav-mobile-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ zIndex: 501, position: 'relative', fontSize: 'clamp(18px, 4vw, 24px)' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 499,
                background: 'var(--bg)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 40,
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
                transition: 'opacity 0.3s ease',
            }}>
                {[['#services', 'Services'], ['#work', 'Work'], ['#process', 'Process'], ['#pricing', 'Pricing']].map(([href, label]) => (
                    <a key={href} href={href} onClick={() => setIsOpen(false)} style={{
                        fontSize: 24, color: 'var(--white)', fontFamily: "'Outfit', sans-serif",
                        textDecoration: 'none', letterSpacing: 2
                    }}>
                        {label}
                    </a>
                ))}
                <a href="#contact" onClick={() => setIsOpen(false)} style={{
                    padding: '14px 32px', borderRadius: 100, background: 'var(--white)', color: '#080818',
                    fontSize: 16, fontWeight: 600, textDecoration: 'none', marginTop: 20
                }}>
                    Start a Project
                </a>
            </div>
        </>
    )
}

export default Navbar
