import { useState, useEffect, useCallback, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const WHATSAPP_NUMBER = '919876543210'
const getWhatsAppUrl = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

/* ── Smooth scroll with nav-offset awareness ── */
const smoothScrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navHeight = document.querySelector('.gw-nav')?.offsetHeight || 72
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 8
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

/* Nav links — 5 on desktop, Contact goes into CTA button */
const NAV_LINKS = [
    { id: 'services',     label: 'What We Do'   },
    { id: 'work',         label: 'Case Studies'  },
    { id: 'process',      label: 'Our Approach'  },
    { id: 'testimonials', label: 'Stories'       },
    { id: 'pricing',      label: 'Plans'         },
]

function Navbar() {
    const [isOpen,    setIsOpen]    = useState(false)
    const [active,    setActive]    = useState('')
    const [scrolled,  setScrolled]  = useState(false)
    const [mounted,   setMounted]   = useState(false)
    const { theme, toggleTheme } = useTheme()
    const isOpenRef = useRef(isOpen)

    /* keep ref in sync so callbacks always see current value */
    useEffect(() => { isOpenRef.current = isOpen }, [isOpen])

    /* ── Staggered mount animation ── */
    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 100)
        return () => clearTimeout(t)
    }, [])

    /* ── Scroll tracking (scrolled state for nav bg) ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    /* ── Active section tracking via scroll position ── */
    useEffect(() => {
        const OFFSET = 120 // nav height + buffer
        const ids = [...NAV_LINKS.map(l => l.id), 'contact']

        const findActive = () => {
            const scrollY = window.scrollY + OFFSET
            let current = ''
            for (const id of ids) {
                const el = document.getElementById(id)
                if (!el) continue
                if (el.offsetTop <= scrollY) current = id
            }
            setActive(current)
        }

        window.addEventListener('scroll', findActive, { passive: true })
        findActive()
        return () => window.removeEventListener('scroll', findActive)
    }, [])

    /* ── Body scroll lock on mobile open ── */
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    /* ── Escape key closes mobile menu ── */
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const handleNavClick = useCallback((e, id) => {
        e.preventDefault()
        const wasOpen = isOpenRef.current
        setIsOpen(false)
        // wait for mobile menu close animation if it was open
        setTimeout(() => smoothScrollTo(id), wasOpen ? 380 : 0)
    }, [])

    const handleLogoClick = useCallback((e) => {
        e.preventDefault()
        setIsOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const mount = (delay = 0) => ({
        opacity:    mounted ? 1 : 0,
        transform:  mounted ? 'none' : 'translateY(-14px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    })

    return (
        <>
            {/* ════════ DESKTOP / TABLET NAV ════════ */}
            <nav className={`gw-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">

                {/* Logo */}
                <a href="#" onClick={handleLogoClick} className="nav-brand" style={mount(80)} aria-label="GoodWill — back to top">
                    <span className="nav-brand-dot" aria-hidden="true" />
                    GoodWill
                </a>

                {/* Desktop links */}
                <ul className="nav-links" role="list">
                    {NAV_LINKS.map(({ id, label }, i) => (
                        <li key={id} style={mount(180 + i * 55)}>
                            <a
                                href={`#${id}`}
                                className={active === id ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, id)}
                                aria-current={active === id ? 'true' : undefined}
                            >
                                {label}
                                {active === id && <span className="nav-link-dot" aria-hidden="true" />}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right controls */}
                <div className="nav-right" style={mount(520)}>
                    {/* Theme toggle */}
                    <button
                        className="nav-theme-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        title={`${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            /* Sun icon */
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1"  x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1"  y1="12" x2="3"  y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
                                <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            /* Moon icon */
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                            </svg>
                        )}
                    </button>

                    {/* Contact CTA */}
                    <a
                        href="#contact"
                        className={`nav-cta${active === 'contact' ? ' active' : ''}`}
                        onClick={(e) => handleNavClick(e, 'contact')}
                        aria-label="Contact us — scroll to contact section"
                    >
                        Get in Touch
                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>

                    {/* Hamburger */}
                    <button
                        className="nav-mobile-btn"
                        onClick={() => setIsOpen(v => !v)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`hamburger${isOpen ? ' open' : ''}`} aria-hidden="true">
                            <span /><span /><span />
                        </span>
                    </button>
                </div>
            </nav>

            {/* ════════ MOBILE MENU ════════ */}
            <div
                id="mobile-menu"
                className={`mobile-menu${isOpen ? ' open' : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Mobile nav links */}
                <nav className="mobile-nav-links">
                    {NAV_LINKS.map(({ id, label }, i) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={(e) => handleNavClick(e, id)}
                            className={`mobile-nav-link${active === id ? ' active' : ''}`}
                            style={{
                                opacity:    isOpen ? 1 : 0,
                                transform:  isOpen ? 'translateX(0)' : 'translateX(-28px)',
                                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms`,
                            }}
                            aria-current={active === id ? 'true' : undefined}
                        >
                            <span className="mobile-nav-num">{String(i + 1).padStart(2, '0')}</span>
                            {label}
                        </a>
                    ))}
                </nav>

                {/* Mobile action buttons */}
                <div className="mobile-menu-actions">
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, 'contact')}
                        className="btn-accent mobile-cta-btn"
                        style={{
                            opacity:    isOpen ? 1 : 0,
                            transform:  isOpen ? 'translateY(0)' : 'translateY(16px)',
                            transition: `opacity 0.4s ease ${NAV_LINKS.length * 60}ms, transform 0.4s ease ${NAV_LINKS.length * 60}ms`,
                        }}
                    >
                        Get in Touch
                        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>

                    <button
                        className="mobile-theme-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        style={{
                            opacity:    isOpen ? 1 : 0,
                            transform:  isOpen ? 'translateY(0)' : 'translateY(16px)',
                            transition: `opacity 0.4s ease ${(NAV_LINKS.length + 1) * 60}ms, transform 0.4s ease ${(NAV_LINKS.length + 1) * 60}ms`,
                        }}
                    >
                        {theme === 'dark' ? (
                            <>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="12" cy="12" r="5"/>
                                    <line x1="12" y1="1"  x2="12" y2="3"/>
                                    <line x1="12" y1="21" x2="12" y2="23"/>
                                    <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                    <line x1="1"  y1="12" x2="3"  y2="12"/>
                                    <line x1="21" y1="12" x2="23" y2="12"/>
                                    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36"/>
                                    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
                                </svg>
                                Switch to Light Mode
                            </>
                        ) : (
                            <>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
                                </svg>
                                Switch to Dark Mode
                            </>
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
