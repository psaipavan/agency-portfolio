import { Link } from 'react-router-dom'

const footerLinks = {
    Company: [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
    ],
    Connect: [
        { label: 'Contact', path: '/contact' },
        { label: 'LinkedIn', path: '#' },
        { label: 'Twitter', path: '#' },
        { label: 'Instagram', path: '#' },
    ],
}

function Footer() {
    return (
        <footer
            style={{
                background: 'var(--dark-2)',
                borderTop: '1px solid var(--border)',
                padding: '60px 0 30px',
            }}
        >
            <div className="container">
                <div className="row g-4">
                    {/* Brand */}
                    <div className="col-lg-4">
                        <Link className="navbar-brand fw-bold fs-4 mb-3 d-inline-block" to="/">
                            <span style={{ color: '#6c47ff' }}>Good</span>
                            <span style={{ color: '#fff' }}>Will</span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '280px', lineHeight: 1.7 }}>
                            We craft digital experiences that inspire and convert. Your growth is our mission.
                        </p>
                        {/* Social icons */}
                        <div className="d-flex gap-3 mt-3">
                            {['linkedin', 'twitter-x', 'instagram', 'github'].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    style={{
                                        width: 38,
                                        height: 38,
                                        borderRadius: 8,
                                        background: 'rgba(108,71,255,0.1)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--text-muted)',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(108,71,255,0.2)'
                                        e.currentTarget.style.color = '#6c47ff'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(108,71,255,0.1)'
                                        e.currentTarget.style.color = 'var(--text-muted)'
                                    }}
                                >
                                    <i className={`bi bi-${icon}`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([section, links]) => (
                        <div className="col-6 col-lg-2 offset-lg-1" key={section}>
                            <h6 className="fw-bold mb-3" style={{ color: 'var(--white)' }}>{section}</h6>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                {links.map(({ label, path }) => (
                                    <li key={label}>
                                        <Link
                                            to={path}
                                            style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}
                                            onMouseEnter={(e) => (e.target.style.color = '#6c47ff')}
                                            onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="col-lg-3">
                        <h6 className="fw-bold mb-3" style={{ color: 'var(--white)' }}>Stay Updated</h6>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            Get the latest from our agency.
                        </p>
                        <div className="input-group mt-2">
                            <input
                                type="email"
                                className="form-control border-0"
                                placeholder="your@email.com"
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    color: '#fff',
                                    borderRadius: '8px 0 0 8px',
                                }}
                            />
                            <button
                                className="btn"
                                style={{
                                    background: 'var(--primary)',
                                    color: '#fff',
                                    borderRadius: '0 8px 8px 0',
                                }}
                            >
                                <i className="bi bi-send" />
                            </button>
                        </div>
                    </div>
                </div>

                <hr style={{ borderColor: 'var(--border)', margin: '40px 0 20px' }} />
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                        © {new Date().getFullYear()} Good Will Agency. All rights reserved.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                        Built with React &amp; Bootstrap
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
