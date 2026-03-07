import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all ${scrolled ? 'py-2 shadow-lg' : 'py-3'
                }`}
            style={{
                background: scrolled
                    ? 'rgba(13, 13, 26, 0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(108,71,255,0.15)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="container">
                {/* Brand */}
                <Link className="navbar-brand fw-bold" to="/">
                    <span style={{ color: '#6c47ff' }}>Good</span>
                    <span style={{ color: '#fff' }}>Will</span>
                </Link>

                {/* Mobile toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    aria-controls="navMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                        {navLinks.map(({ label, path }) => (
                            <li className="nav-item" key={path}>
                                <NavLink
                                    to={path}
                                    end={path === '/'}
                                    className={({ isActive }) =>
                                        `nav-link px-3 fw-medium ${isActive ? 'text-primary' : ''}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Link
                        to="/contact"
                        className="btn btn-primary-custom ms-lg-3 mt-3 mt-lg-0"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
