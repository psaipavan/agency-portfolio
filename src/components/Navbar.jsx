import { useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const WHATSAPP_NUMBER = '919876543210'
const getWhatsAppUrl = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

const smoothScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [mountStep, setMountStep] = useState(0) // 0=hidden, 1=logo, 2=links, 3=right
    const { theme, toggleTheme } = useTheme()

    const links = [
        ['services', 'What We Do'],
        ['work', 'Case Studies'],
        ['process', 'Our Approach'],
        ['testimonials', 'Stories'],
        ['pricing', 'Plans'],
    ]

    /* ── Staggered mount animation ── */
    useEffect(() => {
        const t1 = setTimeout(() => setMountStep(1), 200)   // logo slides in
        const t2 = setTimeout(() => setMountStep(2), 450)   // links slide in
        const t3 = setTimeout(() => setMountStep(3), 650)   // right side slides in
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
    }, [])

    /* ── Scroll tracking ── */
    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 40)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* ── Active section via IntersectionObserver ── */
    useEffect(() => {
        const obs = []
        links.forEach(([id]) => {
            const el = document.getElementById(id)
            if (!el) return
            const o = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setActive(id) },
                { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
            )
            o.observe(el)
            obs.push(o)
        })
        return () => obs.forEach(o => o.disconnect())
    }, [])

    /* ── Body scroll lock on mobile open ── */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const handleNavClick = useCallback((e, id) => {
        e.preventDefault()
        setIsOpen(false)
        setTimeout(() => smoothScroll(id), isOpen ? 360 : 0)
    }, [isOpen])

    const handleLogoClick = useCallback((e) => {
        e.preventDefault()
        setIsOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    /* ── Shared transition for mount animation ── */
    const mountTransition = 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'

    return (
        <>
            <nav className={`gw-nav${scrolled ? ' scrolled' : ''}`}>

                {/* ── Logo — slides down ── */}
                <a
                    href="#"
                    onClick={handleLogoClick}
                    className="nav-brand"
                    style={{
                        opacity: mountStep >= 1 ? 1 : 0,
                        transform: mountStep >= 1 ? 'translateY(0)' : 'translateY(-20px)',
                        transition: mountTransition,
                    }}
                >
                    <span className="nav-brand-dot" />
                    GoodWill
                </a>

                {/* ── Desktop Links — each stagger individually ── */}
                <ul className="nav-links">
                    {links.map(([id, label], i) => (
                        <li
                            key={id}
                            style={{
                                opacity: mountStep >= 2 ? 1 : 0,
                                transform: mountStep >= 2 ? 'translateY(0)' : 'translateY(-16px)',
                                transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 60}ms, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${i * 60}ms`,
                            }}
                        >
                            <a
                                href={`#${id}`}
                                className={active === id ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, id)}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ── Right Controls — slides in from right ── */}
                <div
                    className="nav-right"
                    style={{
                        opacity: mountStep >= 3 ? 1 : 0,
                        transform: mountStep >= 3 ? 'translateX(0)' : 'translateX(20px)',
                        transition: mountTransition,
                    }}
                >
                    <button
                        className="nav-theme-btn"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                            </svg>
                        )}
                    </button>

                    <a
                        href={getWhatsAppUrl("Hi! I'd like to discuss a project with Good Will.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-cta"
                    >
                        Get in Touch
                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <button
                        className="nav-mobile-btn"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger${isOpen ? ' open' : ''}`}>
                            <span />
                            <span />
                            <span />
                        </span>
                    </button>
                </div>
            </nav>

            {/* ── Mobile Menu ── */}
            <div className={`mobile-menu${isOpen ? ' open' : ''}`}>
                {links.map(([id, label], i) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={(e) => handleNavClick(e, id)}
                        style={{
                            color: active === id ? 'var(--accent)' : 'var(--text-heading)',
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateX(0)' : 'translateX(-24px)',
                            transition: `opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms`,
                        }}
                    >
                        {label}
                    </a>
                ))}
                <a
                    href={getWhatsAppUrl("Hi! I'd like to discuss a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent"
                    onClick={() => setIsOpen(false)}
                    style={{
                        marginTop: 12,
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
                        transition: `opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${links.length * 70}ms, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${links.length * 70}ms`,
                    }}
                >
                    Get in Touch
                </a>
            </div>
        </>
    )
}

export default Navbar
